export const meta = {
  name: 'jadidlar-kb-2-web',
  description: 'Bilim bazasi 2-bosqich: jadidlar boʻyicha 17 ta web tadqiqot fayli',
  phases: [ { title: 'Web', detail: 'mavzu va muallif boʻyicha internet tadqiqoti' } ],
}
const KB = '/home/user/jadidlar/knowledge'
const CH = '/home/user/jadidlar/knowledge/_holat/chunks/'
const SRC = '/home/user/jadidlar/Jadidlar_kitoblari_epub/'
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

const todo = WEB.filter(w => !args.includes(w[0]))
log(`${todo.length} ta web mavzu`)
const res = await parallel(todo.map(w => () => webAgent(w).catch(() => null)))
return todo.map((w, i) => ({ slug: w[0], ok: !!res[i], summary: res[i] }))
