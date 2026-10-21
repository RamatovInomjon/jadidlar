export const meta = {
  name: 'jadidlar-kb-3-mualliflar',
  description: 'Bilim bazasi 3-bosqich: 13 ta muallif profili va har biri uchun adversarial fakt tekshiruvi',
  phases: [
    { title: 'Mualliflar', detail: 'muallif profillari (kartochkalar + web)' },
    { title: 'Tekshiruv', detail: 'faktlarni tekshirish va tuzatish' },
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

const authorKeys = Object.keys(AUTHORS).filter(k => !(args || []).includes(k))
const authorP = {}
for (const key of authorKeys) {
  const mine = B.filter(b => b.key === key || (b.key === 'umumiy' && ['cholpon', 'fitrat', 'qodiriy', 'behbudiy', 'munavvarqori'].includes(key)))
  authorP[key] = (async () => {
    const prof = await agent(`You are building a scholarly knowledge base on the Uzbek Jadid movement for a PhD researcher. Write the definitive AUTHOR PROFILE for ${AUTHORS[key]} (years are search hints only — verify).
Inputs:
- Work cards already written from the local books (read them fully): ${mine.map(b => `${KB}/asarlar/${b.slug}.md`).join(', ') || '(none)'}
- Web research file: ${KB}/manbalar_web/muallif-${key}.md (read it fully); also skim ${KB}/manbalar_web/ for other relevant files.
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
  })().catch(() => null)
}

const authors = (await Promise.all(authorKeys.map(k => authorP[k]))).filter(Boolean)
log(`Profillar: ${authors.length}/${authorKeys.length}`)
return authors
