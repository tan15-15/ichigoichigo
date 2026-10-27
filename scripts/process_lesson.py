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

    # 1. lessons 配列の抽出と重複除去・マージ
    lessons_match = re.search(r'const\s+lessons\s*=\s*(\[.*?\]);', content, re.DOTALL)
    if lessons_match:
        try:
            current_lessons = json.loads(lessons_match.group(1))
        except Exception:
            current_lessons = []
        
        # 既存の同日付データを削除
        current_lessons = [l for l in current_lessons if l.get("date") != date_str]
        
        # 新しいレッスンを先頭に追加
        new_entry = {
            "date": date_str,
            "dateDisplay": date_display,
            "title": title_str,
            "words": words_str
        }
        current_lessons.insert(0, new_entry)
        
        # 日付順にソート（新しい順）
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
    print("Successfully updated with de-duplication!")

if __name__ == "__main__":
    main()
