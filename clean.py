import os
import json
import requests
import shutil

# Đường dẫn tới file plugin.json tổng hợp
PLUGIN_JSON_PATH = 'plugin.json'

# Đọc file plugin.json tổng hợp
with open(PLUGIN_JSON_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Lưu lại các extension còn sống
alive_extensions = []

for ext in data['data']:
    # Lấy tên thư mục extension từ path
    ext_path = ext['path']
    # Ví dụ: 'https://raw.githubusercontent.com/nhocconsr/vbook-ext/master/knoxt/plugin.zip'
    # => thư mục là 'knoxt'
    folder = ext_path.split('/')[-2]
    plugin_json_file = os.path.join(folder, 'plugin.json')
    if not os.path.exists(plugin_json_file):
        print(f"Không tìm thấy {plugin_json_file}, bỏ qua.")
        continue

    # Đọc file plugin.json của extension
    with open(plugin_json_file, 'r', encoding='utf-8') as f:
        ext_data = json.load(f)
    source = ext_data.get('metadata', {}).get('source')
    if not source:
        print(f"{folder} không có trường source, bỏ qua.")
        continue

    # Kiểm tra website còn sống không
    try:
        resp = requests.head(source, timeout=10, allow_redirects=True)
        if resp.status_code < 400:
            print(f"{folder}: {source} OK")
            alive_extensions.append(ext)
            continue
        else:
            print(f"{folder}: {source} lỗi status {resp.status_code}")
    except Exception as e:
        print(f"{folder}: {source} lỗi {e}")

    # Nếu tới đây là web chết, xóa thư mục
    print(f"Xóa thư mục {folder}")
    shutil.rmtree(folder, ignore_errors=True)

# Ghi lại file plugin.json tổng hợp chỉ với các extension còn sống
data['data'] = alive_extensions
with open(PLUGIN_JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Hoàn thành!")
