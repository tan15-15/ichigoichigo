import os
import re
import json

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

    new_lesson_json = json.dumps({
        "date": date_str,
        "dateDisplay": date_display,
        "title": title_str,
        "words": words_str
    }, ensure_ascii=False, indent=4)

    if "const lessons = [" in content:
        content = content.replace("const lessons = [", f"const lessons = [\n    {new_lesson_json},")

    for item in new_vocab:
        v_word = item.get("v")
        if f'v: "{v_word}"' not in content and f"v: '{v_word}'" not in content:
            vocab_json = json.dumps(item, ensure_ascii=False, indent=4)
            if "const vocabulary = [" in content:
                content = content.replace("const vocabulary = [", f"const vocabulary = [\n    {vocab_json},")

    with open("lessons.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully updated!")

if __name__ == "__main__":
    main()
