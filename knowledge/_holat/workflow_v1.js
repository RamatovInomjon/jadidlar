export const meta = {
  name: 'jadidlar-knowledge-base',
  description: 'Jadidlar asarlari va uslubi boʻyicha chuqur bilim bazasi: kitoblarni oʻqish, web tadqiqot, muallif profillari, fakt tekshiruvi, uslub qoʻllanmasi',
  phases: [
    { title: 'Oʻqish', detail: 'har bir kitob/boʻlakni chuqur oʻqib, asar kartochkasi yozish' },
    { title: 'Web', detail: 'mualliflar va harakat boʻyicha internet tadqiqoti' },
    { title: 'Mualliflar', detail: 'muallif profillari (kitoblar + web)' },
    { title: 'Tekshiruv', detail: 'faktlarni adversarial tekshirish va tuzatish' },
    { title: 'Sintez', detail: 'uslub qoʻllanmasi, tarix, xronologiya, lugʻat, bibliografiya' },
    { title: 'Tanqid', detail: 'toʻliqlik va izchillik tanqidi, tuzatishlar' },
    { title: 'Indeks', detail: 'README va CORE' },
  ],
}

const KB = '/home/inomjon/projectAI/phd/jadidlar/knowledge'
const CH = '/home/inomjon/projectAI/phd/jadidlar/knowledge/_holat/chunks/'
const SRC = '/home/inomjon/projectAI/phd/jadidlar/Jadidlar_kitoblari_epub/'

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

const WEB_HOW = `Research on the internet. First load web tools with ToolSearch (query "select:WebSearch,WebFetch"; if WebFetch is not available, use WebSearch alone). Search in Uzbek (Latin and Cyrillic), Russian and English. Good sources: ziyouz.com, kh-davron.uz, uz.wikipedia.org, ru.wikipedia.org, en.wikipedia.org, e-tarix.uz, oyina.uz, xs.uz, kun.uz, gazeta.uz, jadidlar muzeyi materials, academic works (Begali Qosimov, Naim Karimov, Sherali Turdiyev, Dilmurod Quronov, Ulugʻbek Dolimov, Shuhrat Rizayev, Adeeb Khalid, Edward Allworth, Ingeborg Baldauf, Hisao Komatsu, Stéphane Dudoignon), Google Books/Scholar snippets. Do 12+ searches and read the best pages. Cross-check facts across ≥2 sources; when sources disagree (birth years, dates of arrest/death, publication years) list each version with its source.`

const WEB = [
  ['jadidchilik-tarixi', 'Jadidchilik harakatining umumiy tarixi: kelib chiqishi (Ismoil Gaspirali, "Tarjimon", usuli jadid), Turkiston, Buxoro, Xivadagi bosqichlari, Yosh buxoroliklar va Yosh xivaliklar, 1905/1917 inqiloblari, Shoʻroi Islomiya, Turkiston Muxtoriyati (Qoʻqon muxtoriyati, 1917–1918), Buxoro Xalq Sovet Respublikasi, sovet davridagi taqdiri, 1926–1931 va 1937–1938 qatagʻonlari ("Milliy ittihod", "Milliy istiqlol" ishlari), 1950-80-yillardagi reabilitatsiya va qayta tiklanish, mustaqillik davri va 2020-yillardagi davlat siyosati (Jadidlar muzeyi, prezident qarorlari, "Jadidlar" kitob seriyasi). Davriylash va asosiy tushunchalar.'],
  ['matbuot-maktab-teatr', 'Jadid matbuoti (Taraqqiy, Xurshid, Shuhrat, Osiyo, Tujjor, Samarqand, Oyina, Sadoyi Turkiston, Sadoyi Fargʻona, Najot, Kengash, Ulugʻ Turkiston, Hurriyat, Buxoroi sharif, Turon, Ishtirokiyun, Qizil bayroq, Turkiston, Mushtum va b.), har birining yili, muharriri, yoʻnalishi; usuli jadid/usuli savtiya maktablari, darsliklar (Adibi avval, Adibi soniy, Ustodi avval, Rahbari savod, Birinchi muallim, Turkiy guliston...), xayriya jamiyatlari (Koʻmak, Barakat, Turon, Tarbiyai atfol), kutubxonalar, nashriyotlar; jadid teatri (Padarkush 1913–1914 sahnalashtirilishi, Turon truppasi, Avloniy, Hamza, Fitrat dramalari), birinchi oʻzbek dramalari roʻyxati.'],
  ['adabiyot-poetika-til', 'Jadid adabiyoti poetikasi va til masalasi: yangi janrlar (roman, hikoya, drama, publitsistika, sochma, barmoq vaznidagi sheʼr), aruzdan barmoqqa oʻtish, "Chigʻatoy gurungi" (1918–1922) va Fitratning til siyosati, sof turkiy til harakati, imlo islohotlari (1921, 1922, 1923 imlo qurultoylari, 1929 lotin, 1940 kirill), jadid matbuoti tili (tatarcha/usmonlicha taʼsiri), Turkiston turkiy tilining jadidlar davridagi morfologik xususiyatlari (-gʻa/-qa, -liq, -doʻr, ersa, oʻtkan), jadid adabiyoti tadqiqotchilari va asosiy ilmiy asarlar, "Milliy uygʻonish adabiyoti" kontseptsiyasi (Begali Qosimov), adabiy maktablar va guruhlar (Qizil qalam, ...). Jadidlar uslubi haqidagi ilmiy fikrlar.'],
  ['boshqa-jadidlar', 'Jadidlarning ushbu bazada alohida profil olmagan boshqa vakillari haqida qisqa profillar (har biriga 150-300 soʻz: hayot yillari, asosiy asarlari, faoliyati, uslub/janr): Ismoil Gaspirali, Sidqiy Xondayliqiy, Ajziy (Saidahmad Siddiqiy), Hoji Muin Shukrulloh, Abdulqodir Shakuriy, Soʻfizoda, Mirmuhsin Shermuhamedov (Fikriy), Ubaydullaxoʻja Asadullaxoʻjayev, Fayzulla Xoʻjayev, Usmonxoʻja Poʻlatxoʻjayev, Polvonniyoz Hoji Yusupov, Abdulvohid Burhonov (Munzim), Laziz Azizzoda, Mirzo Siroj Hakim, Vadud Mahmud, Qayum Ramazon, Shokir Sulaymon, Nazir Toʻraqulov, Mustafo Choʻqay, Toshpoʻlatbek Norboʻtabekov, Mahmud Tarzi (taʼsir), Abdulfattoh Abdurasul, Ashurali Zohiriy, Nusratulla Qudratulla, Abdulla Alaviy, Saidrasul Saidazizov, Qori Niyoziy (jadid maktab), Rahim Hoshim, Shokirjon Rahimiy, Otajon Hoshim, Abdurahmon Saʼdiy va boshqa muhim nomlar.'],
  ['taʼlim-pedagogika', 'Jadidlarning taʼlim-tarbiya va pedagogik qarashlari, darsliklari va metodlari; ayollar masalasi va xotin-qizlar taʼlimi; Turkiya/Rossiya/Misrga talabalar yuborish (1922-yil Germaniyaga 70 talaba — "Berlin bolalari"); xorijdagi taʼlim; jadid xayriya jamiyatlari; jadid–qadim (qadimchilar) munozarasi va ulamolar bilan kurash; diniy islohot qarashlari.'],
]
for (const [key, name] of Object.entries(AUTHORS)) {
  WEB.push([`muallif-${key}`, `${name}: toʻliq biografiyasi (tugʻilgan yer/sana, oilasi, taʼlimi, sayohatlari, ishlagan joylari, ijtimoiy-siyosiy faoliyati, hibsga olinishi, vafoti/otilishi, reabilitatsiyasi), taxalluslari, TOʻLIQ asarlar roʻyxati (janr, yozilgan/nashr yili, nashr qilingan gazeta/jurnal), muharrir boʻlgan nashrlari, asosiy gʻoyalari, uslubi va tili haqidagi ilmiy baholar (kim, qaysi asarda nima degan), mashhur iqtiboslar (manbasi bilan), u haqida yozilgan asosiy tadqiqotlar va xotiralar.`])
}

function webAgent([slug, topic]) {
  return agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement for a PhD researcher.
TOPIC: ${topic}
${WEB_HOW}
Write a detailed, well-organised research file to ${KB}/manbalar_web/${slug}.md (2500-6000 words). Every factual statement must carry its source URL in brackets right after it. End with a "## Manbalar" list of all URLs used (title — URL) and a "## Ziddiyatli maʼlumotlar" section listing conflicting data.
${LANG}
Return a dense summary (800-1500 words) of the key findings with the most important source URLs.`, { label: `web:${slug}`, phase: 'Web' })
}

// ---------- kick off reading + web in parallel ----------
log(`${B.length} ta kitob (${B.reduce((s, b) => s + b.chunks.length, 0)} boʻlak) + ${WEB.length} web mavzu`)

const bookP = {}
for (const b of B) bookP[b.slug] = bookPipe(b).catch(() => null)
const webP = {}
for (const w of WEB) webP[w[0]] = webAgent(w).catch(() => null)

const imloP = agent(`Read the full text of the official 1995 Uzbek Latin orthography rules (Vazirlar Mahkamasining 1995-yil 24-avgustdagi 339-son qarori, "Oʻzbek tilining asosiy imlo qoidalari"): ${CH}339-24-08-1995__01.txt
${READ_HOW}
Write ${KB}/04_imlo_qoidalari_1995.md: a complete, faithful structured summary of ALL rules (harflar imlosi: unlilar, undoshlar; tutuq belgisi; oʻzlashma soʻzlar; qoʻshimchalar imlosi; qoʻshma soʻzlar, juft va takroriy soʻzlar; bosh harflar; koʻchirish qoidalari) with the examples from the text, keeping rule numbers. Then add a section "## Jadid matnlaridagi eski imlo bilan farqlar" explaining how jadid-era texts (written in Arabic script, later transliterated; often preserving -gʻa/-qa, -liq, oʻtkan, -doʻr, koʻb, ul, ersa, unda/anda etc.) differ from these rules, and practical guidance on how to (a) faithfully transliterate/quote jadid texts and (b) write modern text in 1995 norms. Mark general-knowledge statements as such.
${LANG}
Return a 300-word summary.`, { label: 'imlo-1995', phase: 'Oʻqish' }).catch(() => null)

// ---------- author profiles: each waits only for its own books + its web file ----------
const authorKeys = Object.keys(AUTHORS)
const authorP = {}
for (const key of authorKeys) {
  const mine = B.filter(b => b.key === key || (b.key === 'umumiy' && ['cholpon', 'fitrat', 'qodiriy', 'behbudiy', 'munavvarqori'].includes(key)))
  authorP[key] = Promise.all([...mine.map(b => bookP[b.slug]), webP[`muallif-${key}`]]).then(async res => {
    const digests = res.slice(0, mine.length).filter(Boolean).map(d => ({ slug: d.slug, title: d.title, by: d.author, kind: d.kind, genre: d.genre, date_info: d.date_info, content_digest: d.content_digest, ideas_digest: d.ideas_digest, style_digest: d.style_digest, signature_quotes: d.signature_quotes, facts: d.facts }))
    const prof = await agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement for a PhD researcher. Write the definitive AUTHOR PROFILE for ${AUTHORS[key]} (years are search hints only — verify).
Inputs:
- Work cards already written from the local books (read them fully): ${mine.map(b => `${KB}/asarlar/${b.slug}.md`).join(', ') || '(none)'}
- Web research file: ${KB}/manbalar_web/muallif-${key}.md (read it fully); also skim ${KB}/manbalar_web/ for other relevant files.
- Digests (JSON): ${JSON.stringify(digests)}
You may run additional web searches (ToolSearch "select:WebSearch,WebFetch") to fill gaps.
Write ${KB}/mualliflar/${key}.md with:
# Name (asl ismi, taxalluslari, hayot yillari)
## Qisqacha (5-8 sentence overview)
## Hayot yoʻli (detailed; plus a chronology table: yil | voqea | manba)
## Ijodi: toʻliq asarlar roʻyxati (table: asar | janr | yil | nashr joyi | bazada bormi → link to ../asarlar/<slug>.md if local)
## Ijtimoiy-siyosiy va maʼrifiy qarashlari
## Uslubi (the core, very detailed): umumiy tavsif; til va leksika; sintaksis; morfologiya va eski imlo; obrazlilik va tasviriy vositalar; janrlarga koʻra uslub (nasr/drama/sheʼr/publitsistika); uslub evolyutsiyasi (erta va kech davr); oʻziga xos soʻz va iboralar; verbatim examples from the local books
## Uslub belgilari checklist (15-25 recognisable markers)
## "Shu muallif uslubida yozish" boʻyicha amaliy koʻrsatma (do / don't, typical sentence templates, characteristic vocabulary, a short 120-200 word stylisation sample clearly labelled "stilizatsiya namunasi (asl matn emas)")
## Boshqa jadidlar bilan aloqalari va taʼsirlar
## Ilmiy baholar va tadqiqotlar (who said what, where)
## Mashhur iqtiboslar (verbatim, with source)
## Manbalar (local files + URLs)
${LANG}
Return a 400-700 word summary of the profile, including the style essence.`, { label: `muallif:${key}`, phase: 'Mualliflar' })
    const ver = await agent(`You are an adversarial fact-checker for a scholarly knowledge base. File to check: ${KB}/mualliflar/${key}.md (about ${AUTHORS[key]}).
Load web tools with ToolSearch ("select:WebSearch,WebFetch"). Extract EVERY checkable factual claim (dates of birth/death/arrest, places, family, titles of works and their years, newspapers and roles, events, attributions of quotes, scholar names/book titles). Assume each is wrong until verified with ≥2 independent reliable sources or the local book cards in ${KB}/asarlar/. Also verify that verbatim quotes attributed to local books really appear in the source texts (chunk files are in ${CH}, grep them).
Fix errors directly in the file with Edit (minimal edits). For genuinely disputed facts keep both versions with sources. Append a section "## Tekshiruv qaydlari" listing what you corrected and what remains disputed/unverified.
${LANG}
Return a list of corrections made and remaining doubts.`, { label: `tekshir:${key}`, phase: 'Tekshiruv' })
    return { key, prof, ver }
  }).catch(() => null)
}

// ---------- cross-cutting synthesis ----------
const books = (await Promise.all(B.map(b => bookP[b.slug]))).filter(Boolean)
log(`Asar kartochkalari: ${books.length}/${B.length}`)
const missing = B.filter(b => !books.find(d => d.slug === b.slug)).map(b => b.slug)
if (missing.length) log(`Yozilmagan kartochkalar: ${missing.join(', ')}`)

const webRes = await Promise.all(WEB.map(w => webP[w[0]]))
const authors = (await Promise.all(authorKeys.map(k => authorP[k]))).filter(Boolean)
await imloP

phase('Sintez')
const styleInput = books.filter(d => d.kind !== 'S').map(d => ({ author: d.author, title: d.title, slug: d.slug, genre: d.genre, date: d.date_info, style: d.style_digest, quotes: d.signature_quotes }))
const authorSumm = authors.map(a => ({ key: a.key, summary: a.prof }))

const lexMap = new Map()
for (const d of books) for (const l of (d.lexicon_all || [])) {
  const k = (l.word || '').toLowerCase().trim()
  if (!k) continue
  const e = lexMap.get(k) || { word: l.word, meaning: l.meaning, type: l.type, src: new Set() }
  e.src.add(d.author.split(',')[0]); lexMap.set(k, e)
}
let lex = [...lexMap.values()].map(e => ({ w: e.word, m: e.meaning, t: e.type, s: [...e.src].join('; ') }))
log(`Leksika: ${lex.length} ta noyob soʻz`)
if (lex.length > 2500) { log(`Leksika 2500 tadan ortiq — ${lex.length - 2500} tasi lugʻat agentiga berilmadi (koʻp manbali soʻzlar ustun)`); lex = lex.sort((a, b) => b.s.split(';').length - a.s.split(';').length).slice(0, 2500) }

const synth = [
  ['uslub', `Write ${KB}/02_uslub_qollanmasi.md — the MAIN comparative STYLE GUIDE of jadid literature (8000-14000 words). Read all author profiles in ${KB}/mualliflar/ and as many work cards in ${KB}/asarlar/ as needed, plus ${KB}/manbalar_web/adabiyot-poetika-til.md.
Structure: 1) Jadid adabiy tilining umumiy belgilari (morfologiya va eski imlo, sintaksis, leksik qatlamlar, maʼrifatparvar ritorika, murojaat shakllari, publitsistik usullar, kalit tushunchalar lugʻati); 2) Janrlar poetikasi (publitsistika/maqola, drama, hikoya, roman, sheʼr — aruz va barmoq, darslik/axloqiy risola, sayohatnoma, xotira) with examples; 3) Davrlar boʻyicha evolyutsiya (1900–1916 maʼrifatparvarlik; 1917–1920 inqilob va muxtoriyat; 1920-yillar yangi adabiyot; 1930-yillar bosim ostida); 4) Mualliflararo qiyosiy jadval (muallif | asosiy janr | til qatlami | gap tuzilishi | ohang | sevimli vositalar | oʻziga xos soʻzlar | namunaviy jumla); 5) Har bir asosiy muallifning "uslub izi" (fingerprint) — 10+ ishonchli farqlovchi belgilar (useful for authorship attribution / stylometry); 6) Stilizatsiya boʻyicha amaliy qoʻllanma: jadid uslubida matn yaratishda nimalarga eʼtibor berish, anaxronizmlardan qochish, qaysi soʻzlar davrga mos emas; har bir muallif uchun qisqa stilizatsiya namunasi (aniq "stilizatsiya, asl matn emas" deb belgilangan); 7) NLP/kompyuter lingvistikasi uchun eslatmalar (transliteratsiya muammolari, imlo variantlari, tokenizatsiya, korpus tarkibi — ushbu papkadagi matnlar hajmi). Verbatim quotes only from the work cards / source texts.
STYLE DIGESTS of primary works (JSON): ${JSON.stringify(styleInput)}`],
  ['tarix', `Write ${KB}/00_harakat_tarixi.md — a comprehensive history of the Jadid movement (6000-10000 words): kelib chiqishi va gʻoyaviy ildizlari, Turkiston/Buxoro/Xiva, bosqichlar, maktablar, matbuot, teatr, xayriya jamiyatlari, siyosiy faoliyat (1917 Turkiston Muxtoriyati, Buxoro inqilobi), sovet davri, qatagʻon, reabilitatsiya, bugungi oʻrganilishi; key concepts; historiographical debates (sovet, mustaqillik va gʻarb tarixshunosligi). Read ${KB}/manbalar_web/ (all files) and author profiles in ${KB}/mualliflar/. Keep source URLs inline.
Author summaries: ${JSON.stringify(authorSumm)}`],
  ['xronologiya', `Write ${KB}/01_xronologiya.md — a detailed year-by-year timeline (table: yil | voqea | shaxslar | manba) from ~1850 to 2026 covering births/deaths, works (with publication years), newspapers, schools, theatre premieres, political events, arrests/executions, rehabilitations, modern commemorations. Read all files in ${KB}/mualliflar/ (including their "Tekshiruv qaydlari") and ${KB}/manbalar_web/. Where sources disagree give both. Also add a short per-author lifeline table.`],
  ['lugat', `Write ${KB}/03_leksika_lugati.md — a glossary of jadid-era vocabulary for reading and stylising these texts. Input: lexicon entries collected from all books (JSON below; fields w=word, m=meaning, t=type, s=authors). Deduplicate variants (normalise spelling, merge meanings), correct obviously wrong meanings, and organise into sections: 1) Jadid kalit tushunchalari (millat, maorif, taraqqiy, jaholat, hurriyat, istiqlol ...), 2) Arabcha-forscha qatlam, 3) Ruscha/yevropacha oʻzlashmalar (as spelled then), 4) Eskirgan oʻzbekcha soʻzlar va shevaga xos soʻzlar, 5) Eski grammatik shakllar va imlo variantlari (-gʻa/-qa, -liq, -doʻr, ersa, oʻtkan, koʻb...), 6) Diniy-maʼrifiy atamalar, 7) Ijtimoiy-maishiy hayot (lavozimlar, kiyim, oʻlchov, pul, joy). Each entry: soʻz | maʼnosi | turi | qaysi mualliflarda. Alphabetical inside sections.
LEXICON: ${JSON.stringify(lex)}`],
  ['bibliografiya', `Write ${KB}/05_manbalar_bibliografiya.md: 1) local corpus table — every file in ${SRC} (and ${'/home/inomjon/projectAI/phd/jadidlar/339 24.08.1995.doc'}) with author, title, kind (asl asar / tadqiqot / xotira / meʼyoriy hujjat), approximate size, link to its card in ${KB}/asarlar/; also list the ROʻYXAT CSV (${SRC}royxat.csv) info incl. audio parts and the one book without EPUB ("Kulgan boshqalar", "Mehrobdan chayon" radiospektakl); 2) all web sources collected in ${KB}/manbalar_web/*.md and ${KB}/mualliflar/*.md (deduplicated, grouped by site, with titles); 3) a recommended academic bibliography on the Jadids (books, dissertations, articles in Uzbek, Russian, English) — verify each entry with web search (ToolSearch "select:WebSearch,WebFetch") before listing, mark unverified ones.`],
]
const synthRes = await parallel(synth.map(([k, p]) => () => agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement for a PhD researcher. ${p}
${LANG}
Return a 200-400 word summary of what you wrote.`, { label: `sintez:${k}`, phase: 'Sintez' })))

phase('Tanqid')
const critic = await agent(`You are the completeness & consistency critic of a knowledge base at ${KB} on the Uzbek Jadid movement (built for a PhD researcher who wants deep knowledge of jadids, their works and writing style). List all files (find ${KB} -type f) and read them (at least the main files fully; author files fully; work cards at least their headers and style sections).
Find and FIX directly (with Edit/Write): contradictions between files (dates, titles, years — check with web search via ToolSearch "select:WebSearch,WebFetch" when needed and harmonise all files), broken relative links, missing sections, work cards that are thin or missing (local books: ${B.map(b => b.slug).join(', ')}), authors or major topics missing entirely (e.g. important jadids or works not covered), quotes that look fabricated (verify by grepping ${CH}). If an important topic is missing, write a new file for it in ${KB}/ (e.g. ${KB}/06_<topic>.md).
${LANG}
Return a report: what was fixed, what was added, what remains weak.`, { label: 'tanqidchi', phase: 'Tanqid' })

phase('Indeks')
const idx = await agent(`Finalise the knowledge base at ${KB} on the Uzbek Jadid movement. List and skim all files.
1) Write ${KB}/README.md: purpose, how the base was built (local corpus of ${B.length} EPUB books + 1995 imlo qoidalari + web research, ${'2026-10-21'}), directory map with a one-line description and relative link for EVERY file, how to use it (for research, for style analysis, for stylisation/NLP), known limitations.
2) Write ${KB}/CORE.md: a compact (4000-6000 words) essential digest meant to be loaded quickly into an AI assistant's context in future sessions: harakat haqida asosiy faktlar, har bir muallif (hayot yillari, asosiy asarlar, uslub mohiyati 3-5 qatorda, uslub belgilari), jadid uslubining umumiy belgilari, eng muhim 30 ta iqtibos, eng muhim atamalar, qaysi savolda qaysi faylga qarash kerakligi.
${LANG}
Return the README directory map.`, { label: 'indeks', phase: 'Indeks' })

return {
  books: books.length, missing, web: webRes.filter(Boolean).length + '/' + WEB.length,
  authors: authors.map(a => ({ key: a.key, ver: (a.ver || '').slice(0, 1500) })),
  synth: synthRes.map(s => (s || '').slice(0, 600)), critic, idx,
}
