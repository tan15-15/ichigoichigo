import os
import re
import json

def update_navigation_links(lessons_data):
    # 日付昇順（古い順）にソートして前後関係を計算
    sorted_lessons = sorted(lessons_data, key=lambda x: x.get("date", ""))
    
    for i, lesson in enumerate(sorted_lessons):
        date_str = lesson["date"]
        clean_date = date_str.replace("-", "")
        filename = f"lesson-{clean_date[:4]}-{clean_date[4:6]}-{clean_date[6:]}.html"
        
        if not os.path.exists(filename):
            continue
            
        prev_lesson = sorted_lessons[i - 1] if i > 0 else None
        next_lesson = sorted_lessons[i + 1] if i < len(sorted_lessons) - 1 else None
        
        prev_html = ""
        if prev_lesson:
            p_clean = prev_lesson["date"].replace("-", "")
            p_file = f"lesson-{p_clean[:4]}-{p_clean[4:6]}-{p_clean[6:]}.html"
            p_date = prev_lesson.get("dateDisplay", prev_lesson["date"])
            prev_html = f'<a href="./{p_file}" class="nav-btn">👈 前の記事 ({p_date})</a>'
            
        next_html = ""
        if next_lesson:
            n_clean = next_lesson["date"].replace("-", "")
            n_file = f"lesson-{n_clean[:4]}-{n_clean[4:6]}-{n_clean[6:]}.html"
            n_date = next_lesson.get("dateDisplay", next_lesson["date"])
            next_html = f'<a href="./{n_file}" class="nav-btn">次の記事 ({n_date}) 👉</a>'
            
        nav_content = f'<nav class="nav-buttons">\n    {prev_html}\n    <a href="./" class="nav-btn">🏠 トップページへ戻る</a>\n    {next_html}\n  </nav>'
        
        with open(filename, "r", encoding="utf-8") as f:
            html = f.read()
            
        # nav-buttons クラスの nav タグを確実に書き換える
        if '<nav class="nav-buttons">' in html:
            html = re.sub(r'<nav\s+class="nav-buttons">.*?</nav>', nav_content, html, flags=re.DOTALL)
        else:
            # 存在しない場合は header の直後に挿入
            html = re.sub(r'(</header>)', r'\1\n\n  ' + nav_content, html, count=1)
            
        with open(filename, "w", encoding="utf-8") as f:
            f.write(html)

def main():
    html_content = os.environ.get("LESSON_HTML", "")
    if not html_content.strip():
        raise ValueError("HTMLが空です")

    # メタデータ抽出
    match = re.search(r'<script\s+type="application/json"\s+id="lesson-meta">(.*?)</script>', html_content, re.DOTALL)
    if not match:
        raise ValueError("メタデータが見つかりません")
    meta = json.loads(match.group(1).strip())
    
    date_str = meta["date"]
    title_str = meta["title"]
    date_display = meta.get("dateDisplay", date_str)
    new_vocab = meta.get("vocabulary", [])
    words_str = ", ".join([v["v"] for v in new_vocab])

    # 記事ファイル保存
    clean_date = date_str.replace("-", "")
    filename = f"lesson-{clean_date[:4]}-{clean_date[4:6]}-{clean_date[6:]}.html"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(html_content)

    # lessons.js 更新
    with open("lessons.js", "r", encoding="utf-8") as f:
        content = f.read()

    # 1. lessons 配列の抽出と重複除去・マージ
    lessons_match = re.search(r'const\s+lessons\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if lessons_match:
        try:
            current_lessons = json.loads(lessons_match.group(1))
        except Exception:
            current_lessons = []
        
        current_lessons = [l for l in current_lessons if l.get("date") != date_str]
        
        new_entry = {
            "date": date_str,
            "dateDisplay": date_display,
            "title": title_str,
            "words": words_str
        }
        current_lessons.append(new_entry)
        current_lessons.sort(key=lambda x: x.get("date", ""), reverse=True)
        
        lessons_json_str = json.dumps(current_lessons, ensure_ascii=False, indent=4)
        content = re.sub(r'const\s+lessons\s*=\s*\[.*?\];', f'const lessons = {lessons_json_str};', content, flags=re.DOTALL)

    # 2. vocabulary 配列の抽出と重複除去・マージ
    vocab_match = re.search(r'const\s+vocabulary\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if vocab_match:
        try:
            current_vocab = json.loads(vocab_match.group(1))
        except Exception:
            current_vocab = []

        existing_words = {v.get("v") for v in current_vocab if "v" in v}
        for item in new_vocab:
            word = item.get("v")
            if word and word not in existing_words:
                current_vocab.append(item)
                existing_words.add(word)

        vocab_json_str = json.dumps(current_vocab, ensure_ascii=False, indent=4)
        content = re.sub(r'const\s+vocabulary\s*=\s*\[.*?\];', f'const vocabulary = {vocab_json_str};', content, flags=re.DOTALL)

    with open("lessons.js", "w", encoding="utf-8") as f:
        f.write(content)

    # 3. 全記事の前後リンク（Prev / Next）を再計算して更新
    update_navigation_links(current_lessons)
    print("Successfully updated with automatic Prev/Next links!")

if __name__ == "__main__":
    main()
