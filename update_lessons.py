import json
import re
import os
import ast
from pathlib import Path

# 1. 新規レッスンの追加処理（JSONが入力されている場合のみ）
raw = os.environ.get("LESSON_JSON", "").strip()
if raw:
    raw = raw.translate(str.maketrans({
        "“": '"', "”": '"', "„": '"', "‟": '"',
        "‘": "'", "’": "'", "‚": "'", "‛": "'"
    }))
    try:
        lesson = json.loads(raw)
        required = [
            "date", "title", "scene", "vietnamese",
            "translation", "words", "mainWord", "mainMeaning"
        ]
        if all(k in lesson for k in required) and isinstance(lesson["words"], list):
            lesson.setdefault("extraWords", [])
            path = Path("lessons.js")
            content = path.read_text(encoding="utf-8")

            match = re.search(r'const\s+lessons\s*=\s*\[', content)
            if match:
                end_marker = "\n];\n\nconst vocabulary = ["
                insert_at = content.find(end_marker, match.end())
                if insert_at > 0:
                    existing = content[match.end():insert_at]
                    if json.dumps(lesson["date"], ensure_ascii=False) not in existing:
                        separator = "" if not existing.strip() or existing.rstrip().endswith(",") else ","
                        new_entry = json.dumps(lesson, ensure_ascii=False, indent=2)
                        updated = content[:insert_at] + separator + "\n  " + new_entry.replace("\n", "\n  ") + "\n" + content[insert_at:]
                        path.write_text(updated, encoding="utf-8")
                        print("lessons.js に新しいレッスンを追加しました")
    except Exception as e:
        print(f"JSON追加スキップ: {e}")

# 2. lessons.js から全レッスンデータを安全に取得
lessons_content = Path("lessons.js").read_text(encoding="utf-8")
match_lessons = re.search(r'const\s+lessons\s*=\s*(\[.*?\]);?\s*\n', lessons_content, re.DOTALL)
if not match_lessons:
    match_lessons = re.search(r'const\s+lessons\s*=\s*(\[.*?\])', lessons_content, re.DOTALL)

if not match_lessons:
    raise Exception("lessons.js から lessons 配列が見つかりません")

try:
    lessons_list = json.loads(match_lessons.group(1))
except json.JSONDecodeError:
    # JavaScript形式（シングルクォートや末尾カンマ等）でも安全に読み込む
    js_array_str = match_lessons.group(1)
    py_str = js_array_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')
    lessons_list = ast.literal_eval(py_str)

lessons_list.sort(key=lambda x: x.get("date", ""))

# 3. archive.html（全記事一覧ページ）を生成
archive_html = """<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ブログ記事一覧 - 一期一語</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .archive-page-container { max-width: 800px; margin: 30px auto; padding: 20px; background: #fff; border-radius: 20px; border: 2px solid #ffd0df; box-shadow: 0 4px 15px rgba(233,77,131,0.1); }
        .archive-page-title { text-align: center; color: #d83d76; margin-bottom: 25px; font-size: 24px; }
        .archive-list { display: flex; flex-direction: column; gap: 12px; }
        .archive-item { display: flex; align-items: center; padding: 14px 18px; background: #fff9fb; border: 1.5px solid #ffc7d9; border-radius: 14px; text-decoration: none; color: #a92758; font-weight: bold; transition: all 0.2s ease; }
        .archive-item:hover { background: #ffe8f0; transform: translateY(-2px); }
        .archive-date { font-size: 14px; color: #ba7c91; margin-right: 15px; white-space: nowrap; }
        .archive-item-title { font-size: 16px; }
        .back-home { display: block; width: fit-content; margin: 25px auto 0; padding: 10px 20px; background: #ffdfeb; color: #92244d; border-radius: 999px; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>
    <header aria-label="一期一語のサイトタイトル">
        <img class="site-banner" src="site-banner.jpg" alt="一期一語">
    </header>
    <main class="archive-page-container">
        <h1 class="archive-page-title">🍓 ブログ記事一覧（全件）</h1>
        <div class="archive-list">
"""
for l in reversed(lessons_list):
    d = l.get("date", "")
    t = l.get("title", "")
    if d:
        parts = d.split('-')
        date_fmt = f"{parts[0]}年{int(parts[1])}月{int(parts[2])}日"
        archive_html += f'            <a class="archive-item" href="./lesson-{d}.html"><span class="archive-date">{date_fmt}</span><span class="archive-item-title">{t}</span></a>\n'

archive_html += """        </div>
        <a href="./index.html" class="back-home">🍓 トップページへ戻る</a>
    </main>
</body>
</html>
"""
Path("archive.html").write_text(archive_html, encoding="utf-8")
print("archive.html を生成しました")

# 4. 各個別レッスンHTMLのアーカイブ部分を更新（前後3日分 ＋ 一覧ボタン）
for index, current in enumerate(lessons_list):
    curr_date = current.get("date")
    if not curr_date:
        continue
    
    filename = f"lesson-{curr_date}.html"
    if not Path(filename).exists():
        continue
    
    html_text = Path(filename).read_text(encoding="utf-8")

    min_idx = max(0, index - 3)
    max_idx = min(len(lessons_list) - 1, index + 3)

    links_html = ""
    for i in range(min_idx, max_idx + 1):
        if i == index:
            continue
        l = lessons_list[i]
        ld = l.get("date")
        lt = l.get("title")
        parts = ld.split('-')
        date_str = f"{parts[0]}年{int(parts[1])}月{int(parts[2])}日"
        links_html += f'    <a href="./lesson-{ld}.html">{date_str}｜{lt}</a>\n'

    new_archive_section = f"""<section class="archive" aria-label="別の日のブログ">
  <h2>📅 前後のブログ</h2>
  <p>近くの日のベトナム語日記も読んでみよう！🍓</p>
  <div class="archive-links">
{links_html}  </div>
  <div style="margin-top: 15px; text-align: center;">
    <a href="./archive.html" style="display: inline-block; padding: 10px 20px; background: #d83d76; color: #fff; border-radius: 12px; text-decoration: none; font-weight: bold;">📖 全てのブログ一覧を見る</a>
  </div>
  <p class="archive-home"><a href="./index.html">🍓 トップページへ</a>　<a href="./words.html">📚 単語帳へ</a></p>
</section>"""

    if re.search(r'<section class="archive".*?</section>', html_text, re.DOTALL):
        html_text = re.sub(r'<section class="archive".*?</section>', new_archive_section, html_text, flags=re.DOTALL)
    elif "</article>" in html_text:
        html_text = html_text.replace("</article>", f"\n{new_archive_section}\n</article>")
    
    Path(filename).write_text(html_text, encoding="utf-8")
    print(f"更新完了: {filename}")
