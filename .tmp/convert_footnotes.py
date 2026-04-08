#!/usr/bin/env python3
import re, yaml, glob

def convert_footnotes(path):
    with open(path) as f:
        content = f.read()
    
    fm_match = re.match(r'^---\n(.*?)\n---\n(.*)', content, re.DOTALL)
    if not fm_match:
        return False
    
    fm_str, body = fm_match.group(1), fm_match.group(2)
    fm = yaml.safe_load(fm_str)
    footnotes = fm.get('footnotes', [])
    if not footnotes:
        return False
    
    # Replace inline fnref includes with GFM [^N]
    body = re.sub(r'\{%[-\s]*include fnref\.html\s+x=(\d+)\s*[-\s]*%\}', r'[^\1]', body)
    
    # Remove the {% for fn %} loop block
    body = re.sub(r'\{%[-\s]*for fn in page\.footnotes[-\s]*%\}.*?\{%[-\s]*endfor[-\s]*%\}\n?', '', body, flags=re.DOTALL)
    
    # Build GFM footnote definitions
    fn_defs = '\n'
    for fn in footnotes:
        fn_id = fn['id']
        fn_text = str(fn['content']).strip()
        fn_text = re.sub(r'\n\s*', ' ', fn_text).strip()
        fn_defs += f'[^{fn_id}]: {fn_text}\n'
    
    body = body.rstrip() + '\n' + fn_defs
    
    # Remove footnotes from frontmatter
    fm_str_new = re.sub(r'^footnotes:.*?(?=^[a-z_]|\Z)', '', fm_str, flags=re.MULTILINE | re.DOTALL).strip()
    
    new_content = f'---\n{fm_str_new}\n---\n{body}'
    with open(path, 'w') as f:
        f.write(new_content)
    return True

posts = [
    'src/content/blog/2020-11-04-software-leadership-distilled.md',
    'src/content/blog/2020-05-22-dont-disrupt-agile-drop-it.md',
    'src/content/blog/2020-11-06-leadership-style-matrix.md',
    'src/content/blog/2022-02-23-the-tao-of-software-architecture-an-introduction.md',
]
for p in posts:
    try:
        result = convert_footnotes(p)
        print(f"{'Converted' if result else 'Skipped'}: {p.split('/')[-1]}")
    except Exception as e:
        print(f"ERROR {p.split('/')[-1]}: {e}")
