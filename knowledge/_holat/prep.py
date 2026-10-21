import os, re, json, sys, unicodedata
S = sys.argv[1]
src = os.path.join(S, 'txt'); out = os.path.join(S, 'chunks'); os.makedirs(out, exist_ok=True)
LIMIT = 150_000
def slug(s):
    s = s.replace('ʻ','').replace('ʼ','').replace("'",'')
    s = unicodedata.normalize('NFKD', s).encode('ascii','ignore').decode()
    return re.sub(r'[^a-z0-9]+','-', s.lower()).strip('-')[:70]
books = []
for fn in sorted(os.listdir(src)):
    if not fn.endswith('.txt'): continue
    t = open(os.path.join(src, fn), encoding='utf-8').read()
    t = re.sub(r'\n{3,}', '\n\n', t)
    name = fn[:-4]
    author, _, title = name.partition(' - ')
    sl = slug(name)
    import textwrap
    t = "\n".join(textwrap.fill(l, 250) if len(l)>250 else l for l in t.split("\n"))
    paras = t.split('\n\n'); parts=[]; cur=''
    for p in paras:
        if len(cur)+len(p) > LIMIT and cur: parts.append(cur); cur=''
        cur += p + '\n\n'
    if cur.strip(): parts.append(cur)
    paths=[]
    for i,p in enumerate(parts):
        pth = os.path.join(out, f'{sl}__{i+1:02d}.txt'); open(pth,'w',encoding='utf-8').write(p); paths.append(pth)
    books.append(dict(file=fn, author=author, title=title or name, slug=sl, chars=len(t), chunks=paths))
json.dump(books, open(os.path.join(S,'manifest.json'),'w',encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(books), sum(len(b['chunks']) for b in books))
for b in books: print(len(b['chunks']), b['slug'])
