"""
You should run this file from workspace "mark-blog" instead of "mark-blog/Auto-deploy".
"""
from new_markdown_detect import fileSelector
from markdown_convert_jsx import write_JSX
from html_convert_react import html_to_React

md_detector = fileSelector("./md_Posts", type="md")
html_detector = fileSelector("./md_Posts", type="html")


new_md_files = md_detector()
for md_path in new_md_files:
    print("Processing file {}.".format(md_path))
    try:
        module_name = input("React Component Name for thie file: ")
        title_name = input("Title show on page header: ")
        print("\n")
    except:
        print("\n")
        continue
    
    jsx_result = write_JSX(module_name, title_name, md_path)

    with open("./Auto-generate-jsx/{}.js".format(module_name), "w") as outFile:
        outFile.write(jsx_result)

md_detector.uploadFinish()
md_detector.updateCache()

new_html_files = html_detector()
for html_path in new_html_files:
    print("Processing file {}.".format(html_path))
    try:
        module_name = input("React Component Name for thie file: ")
        title_name = input("Title show on page header: ")
        print("\n")
    except:
        print("\n")
        continue

    jsx_result = html_to_React(module_name, title_name, html_path)

    with open("./Auto-generate-jsx/{}.js".format(module_name), "w") as outFile:
        outFile.write(jsx_result)

html_detector.uploadFinish()
html_detector.updateCache()
