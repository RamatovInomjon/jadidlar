export const meta = {
  name: 'jadidlar-kb-1-kitoblar',
  description: 'Bilim bazasi 1-bosqich: qolgan koʻp boʻlakli kitoblar kartochkalari + 1995 imlo qoidalari',
  phases: [
    { title: 'Oʻqish', detail: 'boʻlaklarni oʻqish, birlashtirib kartochka yozish' },
  ],
}
const KB = '/home/user/jadidlar/knowledge'
const CH = '/home/user/jadidlar/knowledge/_holat/chunks/'
const SRC = '/home/user/jadidlar/Jadidlar_kitoblari_epub/'

// [slug, author, title, nChunks, authorKey, kind]  kind: P = jadid's own work, S = study/memoir about a jadid, A = anthology
const B = [
 ['abdulhamid-cholpon-doxtur-muhammadiyor','Abdulhamid Choʻlpon','Doʻxtur Muhammadiyor',1,'cholpon','P'],
 ['abdulhamid-cholpon-kecha-va-kunduz','Abdulhamid Choʻlpon','Kecha va kunduz',4,'cholpon','P'],
 ['abdulhamid-cholpon-kleopatra','Abdulhamid Choʻlpon','Kleoʻpatra',1,'cholpon','P'],
 ['abdulhamid-cholpon-meros','Abdulhamid Choʻlpon','Meros',1,'cholpon','P'],
 ['abdulhamid-cholpon-nonushta','Abdulhamid Choʻlpon','Nonushta',1,'cholpon','P'],
 ['abdulhamid-cholpon-novvoy-qiz','Abdulhamid Choʻlpon','Novvoy qiz',1,'cholpon','P'],
 ['abdulhamid-cholpon-oqposhshoning-inomi','Abdulhamid Choʻlpon','Oqposhshoning inʼomi',1,'cholpon','P'],
 ['abdulhamid-cholpon-oydin-kechalarda','Abdulhamid Choʻlpon','Oydin kechalarda',1,'cholpon','P'],
 ['abdulhamid-cholpon-qor-qoynida-lola','Abdulhamid Choʻlpon','Qor qoʻynida lola',1,'cholpon','P'],
 ['abdulhamid-cholpon-qurboni-jaholat','Abdulhamid Choʻlpon','Qurboni jaholat',1,'cholpon','P'],
 ['abdulhamid-cholpon-seni-kob-kormasun','Abdulhamid Choʻlpon','Seni koʻb koʻrmasun',1,'cholpon','P'],
 ['abdulhamid-cholpon-sherlar','Abdulhamid Choʻlpon','Sheʼrlar',1,'cholpon','P'],
 ['abdulhamid-cholpon-taraqqiy','Abdulhamid Choʻlpon','Taraqqiy',1,'cholpon','P'],
 ['abdulhamid-cholpon-yorqinoy','Abdulhamid Choʻlpon','Yorqinoy',2,'cholpon','P'],
 ['abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy','Choʻlpon, Fitrat, Qodiriy, Behbudiy, Munavvarqori','Odob-axloq kitobi',2,'umumiy','A'],
 ['abdulla-avloniy-advokatlik-osonmi','Abdulla Avloniy','Advokatlik osonmi?',1,'avloniy','P'],
 ['abdulla-avloniy-afgon-sayohati','Abdulla Avloniy','Afgʻon sayohati',1,'avloniy','P'],
 ['abdulla-avloniy-togrilik','Abdulla Avloniy','Toʻgʻrilik',1,'avloniy','P'],
 ['abdulla-avloniy-turkiy-guliston-yoxud-axloq','Abdulla Avloniy','Turkiy guliston yoxud axloq',1,'avloniy','P'],
 ['abdulla-avloniy-uygon-millat','Abdulla Avloniy','Uygʻon, millat',1,'avloniy','P'],
 ['abdulla-qodiriy-baxtsiz-kuyov','Abdulla Qodiriy','Baxtsiz kuyov',1,'qodiriy','P'],
 ['abdulla-qodiriy-jinlar-bazmi','Abdulla Qodiriy','Jinlar bazmi',1,'qodiriy','P'],
 ['abdulla-qodiriy-mehrobdan-chayon-roman','Abdulla Qodiriy','Mehrobdan chayon (roman)',4,'qodiriy','P'],
 ['abdulla-qodiriy-obid-ketmon','Abdulla Qodiriy','Obid ketmon',4,'qodiriy','P'],
 ['abdulla-qodiriy-otkan-kunlar','Abdulla Qodiriy','Oʻtkan kunlar',5,'qodiriy','P'],
 ['abdulla-qodiriy-quyosh-bilan-ham-kurashaman','Abdulla Qodiriy','Quyosh bilan ham kurashaman',1,'qodiriy','P'],
 ['abdulla-qodiriy-tinch-ish','Abdulla Qodiriy','Tinch ish',1,'qodiriy','P'],
 ['abdulla-qodiriy-uloqda','Abdulla Qodiriy','Uloqda',1,'qodiriy','P'],
 ['abdurauf-fitrat-abulfayzxon','Abdurauf Fitrat','Abulfayzxon',1,'fitrat','P'],
 ['abdurauf-fitrat-hind-ixtilolchilari','Abdurauf Fitrat','Hind ixtilolchilari',1,'fitrat','P'],
 ['abdurauf-fitrat-hind-sayyohining-qissasi','Abdurauf Fitrat','Hind sayyohining qissasi',1,'fitrat','P'],
 ['abdurauf-fitrat-najot-yoli','Abdurauf Fitrat','Najot yoʻli',3,'fitrat','P'],
 ['abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari','Abdurauf Fitrat','Oila yoki oila boshqarish tartiblari',2,'fitrat','P'],
 ['abdurauf-fitrat-sherlar','Abdurauf Fitrat','Sheʼrlar',1,'fitrat','P'],
 ['asqad-muxtor-qodiriyni-korganman-u','Asqad Muxtor','Qodiriyni koʻrganman-u...',1,'qodiriy','S'],
 ['bahodir-karimov-jadidlar-abdulla-qodiriy','Bahodir Karimov','Jadidlar: Abdulla Qodiriy',1,'qodiriy','S'],
 ['botu-sherlar','Botu','Sheʼrlar',1,'botu','P'],
 ['dilmurod-quronov-jadidlar-abdulhamid-cholpon','Dilmurod Quronov','Jadidlar: Abdulhamid Choʻlpon',1,'cholpon','S'],
 ['habibulla-qodiriy-otam-haqida','Habibulla Qodiriy','Otam haqida',4,'qodiriy','S'],
 ['hamidulla-boltaboyev-jadidlar-abdurauf-fitrat','Hamidulla Boltaboyev','Jadidlar: Abdurauf Fitrat',1,'fitrat','S'],
 ['hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi','Hamza Hakimzoda Niyoziy','Burungi qozilar yoki Maysaraning ishi',1,'hamza','P'],
 ['hamza-hakimzoda-niyoziy-sherlar','Hamza Hakimzoda Niyoziy','Sheʼrlar',1,'hamza','P'],
 ['hamza-hakimzoda-niyoziy-tanlangan-asarlar','Hamza Hakimzoda Niyoziy','Tanlangan asarlar',1,'hamza','P'],
 ['ishoqxon-tora-ibrat-mezon-uz-zamon','Isʼhoqxon Toʻra Ibrat','Mezon uz-zamon',1,'ibrat','P'],
 ['javlon-jovliyev-elbek','Javlon Jovliyev','Elbek',1,'elbek','S'],
 ['mahmudxoja-behbudiy-bir-amo-bolaning-hasrati','Mahmudxoʻja Behbudiy','Bir aʼmo bolaning hasrati',1,'behbudiy','P'],
 ['mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida','Mahmudxoʻja Behbudiy','Bir vafolik zaifaning xususida',1,'behbudiy','P'],
 ['mahmudxoja-behbudiy-padarkush','Mahmudxoʻja Behbudiy','Padarkush',1,'behbudiy','P'],
 ['olim-oltinbek-jadidlar-abdulla-avloniy','Olim Oltinbek','Jadidlar: Abdulla Avloniy',1,'avloniy','S'],
 ['olim-usmonov-jadidlar-gulom-zafariy','Olim Usmonov','Jadidlar: Gʻulom Zafariy',1,'zafariy','S'],
 ['sadriddin-ayniy-eski-maktab','Sadriddin Ayniy','Eski maktab',1,'ayniy','P'],
 ['sadriddin-ayniy-sudxorning-olimi','Sadriddin Ayniy','Sudxoʻrning oʻlimi',2,'ayniy','P'],
 ['sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov','Sotimjon Xolboyev','Jadidlar: Munavvar qori Abdurashidxonov',1,'munavvarqori','S'],
 ['tavallo-ey-vatan-ezgu-vatan','Tavallo','Ey Vatan, ezgu Vatan',2,'tavallo','P'],
 ['tavallo-sherlar','Tavallo','Sheʼrlar',1,'tavallo','P'],
 ['ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat','Ulugʻbek Dolimov','Jadidlar: Isʼhoqxon toʻra Ibrat',1,'ibrat','S'],
 ['zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy','Zaynobiddin Abdurashidov','Jadidlar: Mahmudxoʻja Behbudiy',1,'behbudiy','S'],
].map(([slug, author, title, n, key, kind]) => ({ slug, author, title, key, kind,
  chunks: Array.from({ length: n }, (_, i) => `${CH}${slug}__${String(i + 1).padStart(2, '0')}.txt`) }))

const AUTHORS = {
  behbudiy: 'Mahmudxoʻja Behbudiy (1875–1919)',
  munavvarqori: 'Munavvar qori Abdurashidxonov (1878–1931)',
  avloniy: 'Abdulla Avloniy (1878–1934)',
  ibrat: 'Isʼhoqxon toʻra Ibrat (1862–1937)',
  fitrat: 'Abdurauf Fitrat (1886–1938)',
  cholpon: 'Abdulhamid Sulaymon oʻgʻli Choʻlpon (1897–1938)',
  qodiriy: 'Abdulla Qodiriy (Julqunboy) (1894–1938)',
  hamza: 'Hamza Hakimzoda Niyoziy (1889–1929)',
  ayniy: 'Sadriddin Ayniy (1878–1954)',
  tavallo: 'Tavallo (Toʻlagan Xoʻjamyorov) (1882–1939)',
  botu: 'Botu (Mahmud Hodiyev) (1904–1938)',
  elbek: 'Elbek (Mashriq Yunusov) (1898–1939)',
  zafariy: 'Gʻulom Zafariy (1889–1938)',
}
// years above are only search hints; agents must verify them

const LANG = `Write everything in Uzbek, Latin script, modern orthography (use the letters oʻ gʻ with U+02BB ʻ and the tutuq belgisi ʼ U+02BC). Verbatim quotations from the books must be copied exactly as they appear in the source text (keep their original spelling and apostrophes). Never invent quotes, dates or titles; when a fact comes from general knowledge rather than the source text or a cited web page, mark it "[umumiy bilim — tekshirilmagan]".`

const READ_HOW = `Read the WHOLE file carefully, not a sample: use the Read tool in consecutive sections (offset/limit, ~600 lines each) until the end of file. Lines are wrapped at 250 chars.`

const STYLE_FOCUS = `Style analysis is the most important part. Be concrete and evidence-based. Cover: (1) narration — point of view, narrator's voice, author's intrusions/addresses to reader; (2) syntax — sentence length, inversion, periodic sentences, participle chains, conjunctions (va, ammo, lekin, chunki, -kim), sentence-final forms (-dir, edi, ekan, emish, -mish), questions/exclamations; (3) morphology/orthography of the era as preserved in the text — e.g. -gʻa/-qa instead of -ga, -liq/-lik, oʻtkan, ul/bul, ersa, imish, -doʻr, Tatar/Ottoman forms, old suffix spellings; (4) lexicon — Arabic/Persian layer, Russian/European loans, folk/dialect words, jadid key terms (millat, taraqqiy, maorif, jaholat, ilm, vatan, hurriyat, istiqbol...); (5) dialogue — how characters speak, dialect/register differences, humor; (6) imagery & devices — similes, metaphors, symbols, epithets, landscape, irony, satire, allegory, parallelism, repetition, rhetorical appeals ("Ey millat!"); (7) tone & emotional register; (8) composition — openings, endings, chapter structure, epigraphs, footnotes, author's prefaces. For poetry also: metre (aruz vs barmoq), rhyme scheme, stanza forms (gʻazal, murabbaʼ, muxammas, toʻrtlik...), refrains. Support each observation with short verbatim examples.`

const NOTES_SCHEMA = {
  type: 'object',
  properties: {
    summary: { type: 'string', description: 'detailed content summary of this part, 400-900 words, in Uzbek' },
    structure: { type: 'string', description: 'chapters/sections/events covered in this part, in order' },
    characters: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, description: { type: 'string' } }, required: ['name', 'description'] } },
    themes: { type: 'array', items: { type: 'string' } },
    ideas: { type: 'array', items: { type: 'string' }, description: 'ideological/enlightenment/social positions expressed' },
    style: { type: 'object', properties: {
      narration: { type: 'string' }, syntax: { type: 'string' }, morphology_orthography: { type: 'string' }, lexicon: { type: 'string' },
      dialogue: { type: 'string' }, imagery_devices: { type: 'string' }, tone: { type: 'string' }, composition: { type: 'string' }, poetics: { type: 'string' } },
      required: ['narration', 'syntax', 'morphology_orthography', 'lexicon', 'dialogue', 'imagery_devices', 'tone', 'composition'] },
    quotes: { type: 'array', items: { type: 'object', properties: { text: { type: 'string' }, why: { type: 'string' } }, required: ['text', 'why'] }, description: '10-20 exact verbatim quotes that best show style and ideas' },
    lexicon: { type: 'array', items: { type: 'object', properties: { word: { type: 'string' }, meaning: { type: 'string' }, type: { type: 'string', description: 'arabcha/forscha/ruscha/eskirgan/sheva/jadid atamasi/eski imlo' } }, required: ['word', 'meaning', 'type'] }, description: '20-50 notable archaic/loan/era-specific words with meanings' },
    facts: { type: 'array', items: { type: 'string' }, description: 'historical/biographical/publication facts present in this text (dates, places, people, newspapers, events), each with a short context' },
  },
  required: ['summary', 'structure', 'characters', 'themes', 'ideas', 'style', 'quotes', 'lexicon', 'facts'],
}

const DIGEST_SCHEMA = {
  type: 'object',
  properties: {
    genre: { type: 'string' },
    date_info: { type: 'string', description: 'when written/published, with source marker' },
    content_digest: { type: 'string', description: '250-400 words' },
    ideas_digest: { type: 'string', description: '100-200 words' },
    style_digest: { type: 'string', description: '300-500 words dense, concrete style profile of THIS work with mini-examples' },
    signature_quotes: { type: 'array', items: { type: 'string' }, description: '5-8 exact verbatim quotes most characteristic of style' },
    lexicon: { type: 'array', items: { type: 'object', properties: { word: { type: 'string' }, meaning: { type: 'string' }, type: { type: 'string' } }, required: ['word', 'meaning', 'type'] } },
    facts: { type: 'array', items: { type: 'string' } },
  },
  required: ['genre', 'date_info', 'content_digest', 'ideas_digest', 'style_digest', 'signature_quotes', 'lexicon', 'facts'],
}

const kindNote = b => b.kind === 'S'
  ? `This is a STUDY / MEMOIR written ABOUT a jadid (by ${b.author}), not the jadid's own artistic work. Focus on: biographical facts (dates, places, family, education, travels, jobs, arrest, death), the full list of the jadid's works mentioned with dates, ideas and views attributed to him, scholarly assessments of his style and language, and quotations from the jadid's OWN writings cited inside (mark them as such). Also note the study author's own claims and sources.`
  : b.kind === 'A'
  ? `This is an ANTHOLOGY of ethics/education texts by several jadids (Choʻlpon, Fitrat, Qodiriy, Behbudiy, Munavvarqori and possibly others). Track which author wrote which piece, and compare their styles within the same genre.`
  : `This is the jadid author's OWN work. Also identify the genre and any prefaces/afterwords/editor notes (separate the editor's modern commentary from the author's text).`

const asarTemplate = b => `Write the work card to ${KB}/asarlar/${b.slug}.md with this structure (headings in Uzbek):
# ${b.author} — «${b.title}»
- **Turi:** ${b.kind === 'P' ? 'jadid muallifning oʻz asari' : b.kind === 'S' ? 'jadid haqidagi tadqiqot/xotira' : 'antologiya'} · **Janr:** … · **Yozilgan/nashr:** … · **Manba fayl:** ${SRC}… (original epub name)
## Qisqacha mazmun   (detailed, faithful; for long works chapter-by-chapter)
## Qahramonlar / tuzilish
## Asosiy gʻoyalar va mavzular
## Uslub tahlili   (subsections: Hikoya qilish · Sintaksis · Morfologiya va eski imlo · Leksika · Dialog · Tasviriy vositalar · Ohang · Kompozitsiya · (sheʼriyat boʻlsa) Vazn va qofiya — each with verbatim examples)
## Uslub belgilari (qisqa checklist: 8-15 recognisable markers of this work's style)
## Iqtiboslar   (15-30 verbatim quotes, each with a one-line note)
## Leksika   (table: soʻz | maʼnosi | turi)
## Tarixiy va biografik faktlar (from the text)
## Tadqiqot uchun izohlar (open questions, interesting points for a PhD researcher)
Be thorough — this file is a permanent knowledge base entry; 2500-7000 words depending on the work's size.`

function bookPipe(b) {
  const label = `${b.key}:${b.slug.slice(0, 40)}`
  if (b.chunks.length === 1) {
    return agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement. Deeply read this book: ${b.author} — «${b.title}».
Source text file (converted from EPUB): ${b.chunks[0]}
${READ_HOW}
${kindNote(b)}
${STYLE_FOCUS}
${asarTemplate(b)}
${LANG}
After writing the file, return the structured digest.`, { label, phase: 'Oʻqish', schema: DIGEST_SCHEMA })
      .then(d => d && { ...d, slug: b.slug, author: b.author, title: b.title, key: b.key, kind: b.kind, lexicon_all: d.lexicon })
  }
  return parallel(b.chunks.map((c, i) => () => agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement. You are reading part ${i + 1} of ${b.chunks.length} of: ${b.author} — «${b.title}».
File: ${c}
${READ_HOW}
${kindNote(b)}
${STYLE_FOCUS}
${LANG}
Return structured notes for THIS part only (another agent merges parts). Quotes must be exact.`, { label: `${label} [${i + 1}/${b.chunks.length}]`, phase: 'Oʻqish', schema: NOTES_SCHEMA })))
    .then(notes => {
      const ok = notes.filter(Boolean)
      if (!ok.length) return null
      const lexicon_all = ok.flatMap(n => n.lexicon || [])
      return agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement. Below are detailed reading notes from ${ok.length} consecutive parts (of ${b.chunks.length}) of ${b.author} — «${b.title}». Merge them into one coherent work card. You may consult the source part files to verify quotes or fill gaps: ${b.chunks.join(', ')}.
${kindNote(b)}
${asarTemplate(b)}
${LANG}
NOTES (JSON, in part order):
${JSON.stringify(ok.map((n, i) => ({ part: i + 1, ...n })))}
After writing the file, return the structured digest.`, { label: `${label} [merge]`, phase: 'Oʻqish', schema: DIGEST_SCHEMA })
        .then(d => d && { ...d, slug: b.slug, author: b.author, title: b.title, key: b.key, kind: b.kind, lexicon_all: lexicon_all.concat(d.lexicon || []) })
    })
}

const todo = B.filter(b => args.includes(b.slug))
log(`${todo.length} ta kitob (${todo.reduce((s, b) => s + b.chunks.length, 0)} boʻlak) + imlo`)
const imloP = agent(`Read the full text of the official 1995 Uzbek Latin orthography rules (Vazirlar Mahkamasining 1995-yil 24-avgustdagi 339-son qarori, "Oʻzbek tilining asosiy imlo qoidalari"): ${CH}339-24-08-1995__01.txt
${READ_HOW}
Write ${KB}/04_imlo_qoidalari_1995.md: a complete, faithful structured summary of ALL rules (harflar imlosi: unlilar, undoshlar; tutuq belgisi; oʻzlashma soʻzlar; qoʻshimchalar imlosi; qoʻshma soʻzlar, juft va takroriy soʻzlar; bosh harflar; koʻchirish qoidalari) with the examples from the text, keeping rule numbers. Then add a section "## Jadid matnlaridagi eski imlo bilan farqlar" explaining how jadid-era texts (written in Arabic script, later transliterated; often preserving -gʻa/-qa, -liq, oʻtkan, -doʻr, koʻb, ul, ersa, unda/anda etc.) differ from these rules, and practical guidance on how to (a) faithfully transliterate/quote jadid texts and (b) write modern text in 1995 norms. Mark general-knowledge statements as such.
${LANG}
Return a 300-word summary.`, { label: 'imlo-1995', phase: 'Oʻqish' }).catch(() => null)
const books = await parallel(todo.map(b => () => bookPipe(b).catch(() => null)))
const imlo = await imloP
const ok = books.filter(Boolean)
const missing = todo.filter(b => !ok.find(d => d.slug === b.slug)).map(b => b.slug)
if (missing.length) log(`Yozilmagan: ${missing.join(', ')}`)
return { digests: ok, missing, imlo }
