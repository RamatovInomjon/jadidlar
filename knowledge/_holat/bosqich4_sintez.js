export const meta = {
  name: 'jadidlar-kb-4-sintez',
  description: 'Bilim bazasi 4-bosqich: sintez fayllari, tanqidchi, README va CORE',
  phases: [
    { title: 'Sintez', detail: 'tarix, xronologiya, uslub, lugʻat, bibliografiya' },
    { title: 'Tanqid', detail: 'toʻliqlik va izchillik tanqidi, tuzatishlar' },
    { title: 'Indeks', detail: 'README va CORE' },
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

phase('Sintez')
const synth = [
  ['uslub', `Write ${KB}/02_uslub_qollanmasi.md — the MAIN comparative STYLE GUIDE of jadid literature (8000-14000 words). Read all author profiles in ${KB}/mualliflar/ and as many work cards in ${KB}/asarlar/ as needed, plus ${KB}/manbalar_web/adabiyot-poetika-til.md.
Structure: 1) Jadid adabiy tilining umumiy belgilari (morfologiya va eski imlo, sintaksis, leksik qatlamlar, maʼrifatparvar ritorika, murojaat shakllari, publitsistik usullar, kalit tushunchalar lugʻati); 2) Janrlar poetikasi (publitsistika/maqola, drama, hikoya, roman, sheʼr — aruz va barmoq, darslik/axloqiy risola, sayohatnoma, xotira) with examples; 3) Davrlar boʻyicha evolyutsiya (1900–1916 maʼrifatparvarlik; 1917–1920 inqilob va muxtoriyat; 1920-yillar yangi adabiyot; 1930-yillar bosim ostida); 4) Mualliflararo qiyosiy jadval (muallif | asosiy janr | til qatlami | gap tuzilishi | ohang | sevimli vositalar | oʻziga xos soʻzlar | namunaviy jumla); 5) Har bir asosiy muallifning "uslub izi" (fingerprint) — 10+ ishonchli farqlovchi belgilar (useful for authorship attribution / stylometry); 6) Stilizatsiya boʻyicha amaliy qoʻllanma: jadid uslubida matn yaratishda nimalarga eʼtibor berish, anaxronizmlardan qochish, qaysi soʻzlar davrga mos emas; har bir muallif uchun qisqa stilizatsiya namunasi (aniq "stilizatsiya, asl matn emas" deb belgilangan); 7) NLP/kompyuter lingvistikasi uchun eslatmalar (transliteratsiya muammolari, imlo variantlari, tokenizatsiya, korpus tarkibi — ushbu papkadagi matnlar hajmi). Verbatim quotes only from the work cards / source texts.
STYLE DIGESTS of primary works: read the JSON file ${KB}/_holat/style_input.json fully (fields author, title, slug, genre, date, style, quotes).`],
  ['tarix', `Write ${KB}/00_harakat_tarixi.md — a comprehensive history of the Jadid movement (6000-10000 words): kelib chiqishi va gʻoyaviy ildizlari, Turkiston/Buxoro/Xiva, bosqichlar, maktablar, matbuot, teatr, xayriya jamiyatlari, siyosiy faoliyat (1917 Turkiston Muxtoriyati, Buxoro inqilobi), sovet davri, qatagʻon, reabilitatsiya, bugungi oʻrganilishi; key concepts; historiographical debates (sovet, mustaqillik va gʻarb tarixshunosligi). Read ${KB}/manbalar_web/ (all files) and author profiles in ${KB}/mualliflar/. Keep source URLs inline.`],
  ['xronologiya', `Write ${KB}/01_xronologiya.md — a detailed year-by-year timeline (table: yil | voqea | shaxslar | manba) from ~1850 to 2026 covering births/deaths, works (with publication years), newspapers, schools, theatre premieres, political events, arrests/executions, rehabilitations, modern commemorations. Read all files in ${KB}/mualliflar/ (including their "Tekshiruv qaydlari") and ${KB}/manbalar_web/. Where sources disagree give both. Also add a short per-author lifeline table.`],
  ['lugat', `Write ${KB}/03_leksika_lugati.md — a glossary of jadid-era vocabulary for reading and stylising these texts. Input: lexicon entries collected from all books in the JSON file ${KB}/_holat/lexicon.json (read it fully; fields w=word, m=meaning, t=type, s=authors; ~2300 entries). Deduplicate variants (normalise spelling, merge meanings), correct obviously wrong meanings, and organise into sections: 1) Jadid kalit tushunchalari (millat, maorif, taraqqiy, jaholat, hurriyat, istiqlol ...), 2) Arabcha-forscha qatlam, 3) Ruscha/yevropacha oʻzlashmalar (as spelled then), 4) Eskirgan oʻzbekcha soʻzlar va shevaga xos soʻzlar, 5) Eski grammatik shakllar va imlo variantlari (-gʻa/-qa, -liq, -doʻr, ersa, oʻtkan, koʻb...), 6) Diniy-maʼrifiy atamalar, 7) Ijtimoiy-maishiy hayot (lavozimlar, kiyim, oʻlchov, pul, joy). Each entry: soʻz | maʼnosi | turi | qaysi mualliflarda. Alphabetical inside sections.`],
  ['bibliografiya', `Write ${KB}/05_manbalar_bibliografiya.md: 1) local corpus table — every file in ${SRC} (and ${'/home/user/jadidlar/339 24.08.1995.doc'}) with author, title, kind (asl asar / tadqiqot / xotira / meʼyoriy hujjat), approximate size, link to its card in ${KB}/asarlar/; also list the ROʻYXAT CSV (${SRC}royxat.csv) info incl. audio parts and the one book without EPUB ("Kulgan boshqalar", "Mehrobdan chayon" radiospektakl); 2) all web sources collected in ${KB}/manbalar_web/*.md and ${KB}/mualliflar/*.md (deduplicated, grouped by site, with titles); 3) a recommended academic bibliography on the Jadids (books, dissertations, articles in Uzbek, Russian, English) — verify each entry with web search (ToolSearch "select:WebSearch,WebFetch") before listing, mark unverified ones.`],
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

return { synth: synthRes.map(s => (s || '').slice(0, 800)), critic, idx }
