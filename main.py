import json
import os
from pathlib import Path

def main():
    # Define the directory containing the subdirectories
    root = "F:\\Coding\\vbook-ext"  # Replace with your directory path
    
    # Create a markdown file
    try:
        with open("README.md", "w", encoding="utf-8") as md_file:
            # Write the table header to the markdown file
            md_file.write("## Vbook Extensions\n\n")
            md_file.write("Extensions cho app Vbook App.\n\n\n")
            md_file.write("Tải app tại : [Vbook App Download](https://bit.ly/vbookapp)\n\n")
            md_file.write("## Link extension\n\n")
            md_file.write("https://raw.githubusercontent.com/nhocconsr/vbook-ext/master/plugin.json\n\n\n")
            md_file.write("##List\n\n")
            md_file.write("| Name | Source | Version | Lang |\n")
            md_file.write("|------|--------|---------|------|\n")
            
            # Walk through the subdirectories
            for root_dir, dirs, files in os.walk(root):
                for file in files:
                    if file == "plugin.json":
                        file_path = os.path.join(root_dir, file)
                        
                        try:
                            # Read the json file
                            with open(file_path, "r", encoding="utf-8") as json_file:
                                plugin_data = json.load(json_file)
                            
                            # Extract metadata
                            metadata = plugin_data.get("metadata", {})
                            name = metadata.get("name", "")
                            source = metadata.get("source", "")
                            version = metadata.get("version", 0)
                            lang = metadata.get("locale", "")
                            plugin_type = metadata.get("type", "")
                            
                            # Only write if we have valid data (at least name and source)
                            if name.strip() and source.strip():
                                md_file.write(f"| {name} | {source} | {version} | {lang} | {plugin_type} |\n")
                            
                        except (json.JSONDecodeError, IOError) as e:
                            print(f"Error reading {file_path}: {e}")
                            continue
            
            # Write installation guide
            md_file.write("## Hướng dẫn cài đặt\n\n")
            md_file.write("| 1.Mở phần mở rộng trong app                   | 2.Lựa chọn quản lý Extension URL        |\n")
            md_file.write("| --------------------------------------------- | --------------------------------------- |\n")
            md_file.write("| <img src='huongdan/extension.jpg' width='500'>| <img src='huongdan/add.jpg' width='500'>|\n")
            md_file.write("* Sau đó nhập link:\n\n")
            md_file.write("```\nhttps://raw.githubusercontent.com/nhocconsr/vbook-ext/master/plugin.json\n```\n")
            md_file.write("![alt](huongdan/adds.jpg)\n\n")
        
        print("Markdown file created successfully.")
        
    except IOError as e:
        print(f"Error creating markdown file: {e}")

if __name__ == "__main__":
    main()