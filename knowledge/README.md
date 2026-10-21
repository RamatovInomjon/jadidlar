# Jadidlar bilim bazasi

> Turkiston, Buxoro va Xiva jadidchilik harakati (taxminan 1883–1938-yillar), uning 13 ta yetakchi muallifi va jadid adabiy tili uslubi boʻyicha manbali bilim bazasi. Tuzilgan sana: **2026-yil 21-oktabr**.

**Tez kirish:** sunʼiy intellekt yordamchisiga kontekst sifatida berish uchun avval [CORE.md](CORE.md) ni oʻqing (4–6 ming soʻzlik qisqa dayjest). Bu fayl (README) esa bazaning tuzilishi, qurilish usuli va cheklovlarini tushuntiradi.

---

## 1. Maqsad

Baza uch xil ish uchun moʻljallangan:

1. **Ilmiy tadqiqot.** Jadidchilik tarixi, matbuoti, maktabi, teatri, siyosiy taqdiri va har bir muallifning hayoti, asarlari va sanalari haqida manbasi koʻrsatilgan, ziddiyatlari ochiq qayd etilgan maʼlumot berish.
2. **Uslub tahlili.** Jadid adabiy tilining morfologik, sintaktik, leksik va ritorik belgilarini muallif, janr va davr boʻyicha qiyoslash, mualliflikni aniqlash (stilometriya) uchun tayanch belgilar roʻyxatini berish.
3. **Stilizatsiya va NLP.** Davr uslubida oʻquv yoki sahna maqsadidagi matn yaratish (har doim «stilizatsiya, asl matn emas» deb belgilangan holda), shuningdek korpus bilan kompyuter lingvistikasi ishlarini olib borish (imlo variantlari, apostrof belgilari, tokenizatsiya, normalizatsiya).

## 2. Baza qanday qurilgan

Baza Claude Code agentlari tomonidan bir necha bosqichli ish oqimi (workflow) orqali, ikki sessiyada qurildi. Har bir bosqichning skripti va holati [`_holat/`](_holat/) papkasida saqlangan.

**Manbalar:**

- **Mahalliy korpus: 57 ta EPUB kitob** (`../Jadidlar_kitoblari_epub/`, «Mutolaa» loyihasining lotin yozuvidagi elektron nashrlari, asosan 2024-yil). Ulardan 46 tasi jadid mualliflarining oʻz asarlari (shu jumladan bitta antologiya), 10 tasi jadidlar haqidagi tadqiqot va xotiralar, 1 tasi jadidlarga aloqasi boʻlmagan zamonaviy hikoya. Kitoblar pandoc bilan matnga oʻgirilib, 150 000 belgidan oshmaydigan boʻlaklarga ajratildi ([`_holat/prep.py`](_holat/prep.py)) va har bir boʻlak agent tomonidan toʻliq oʻqildi.
- **Meʼyoriy hujjat:** Oʻzbekiston Respublikasi Vazirlar Mahkamasining 1995-yil 24-avgustdagi 339-son qarori bilan tasdiqlangan «Oʻzbek tilining asosiy imlo qoidalari» (`../339 24.08.1995.doc`).
- **Veb-tadqiqot (2026-yil 21-oktabr):** Vikipediya (oʻzbek, ingliz, rus), Wikisource, yuz.uz, uza.uz, kun.uz, oriens.uz, inlibrary.uz, kh-davron.uz, ziyouz, cyberleninka, Adib Xolidning kitob va maqolalari va boshqa saytlar. Har bir fakt yonida URL berilgan. Toʻliq roʻyxat: [05_manbalar_bibliografiya.md](05_manbalar_bibliografiya.md). Ish jarayonida veb-qidiruv limiti tugab qolgani uchun bir qator muallif fayllari faqat maʼlum URL manzillardan toʻgʻridan-toʻgʻri ochilgan sahifalarga tayanadi (har bir faylning boshida aytilgan).

**Bosqichlar:**

| Bosqich | Natija | Skript |
|---|---|---|
| 0. Tayyorlov | EPUB → matn → boʻlaklar (81 ta), `manifest.json` | [`_holat/prep.py`](_holat/prep.py) |
| 1. Oʻqish | 57 ta asar kartochkasi (`asarlar/`), tuzilmali dayjestlar (`digests.json`), 1995 imlo qoidalari konspekti | [`_holat/workflow_v1.js`](_holat/workflow_v1.js), [`_holat/bosqich1_kitoblar.js`](_holat/bosqich1_kitoblar.js) |
| 2. Veb | 18 ta veb-tadqiqot fayli (`manbalar_web/`) | [`_holat/bosqich2_web.js`](_holat/bosqich2_web.js) |
| 3. Mualliflar | 13 ta muallif profili va har biri uchun mustaqil fakt tekshiruvi («Tekshiruv qaydlari» boʻlimi) | [`_holat/bosqich3_mualliflar.js`](_holat/bosqich3_mualliflar.js) |
| 4. Sintez | tarix, xronologiya, uslub qoʻllanmasi, leksika lugʻati, bibliografiya, katalog; tanqidchi agent tekshiruvi; README va CORE | [`_holat/bosqich4_sintez.js`](_holat/bosqich4_sintez.js) |

**Ishonchlilik qoidalari (butun baza boʻyicha):**

- Kitoblardan olingan iqtiboslar manbadagi imlo va apostrof belgilari bilan (koʻpincha ‘ ’ yoki ʻ ʼ) harfma-harf koʻchirilgan va `_holat/chunks/` matnlari bilan avtomatik solishtirilgan. Shuning uchun iqtibos ichidagi imlo atrofdagi matn imlosidan farq qilishi mumkin.
- Manbada ham, keltirilgan veb-sahifada ham boʻlmagan maʼlumot «[umumiy bilim — tekshirilmagan]» deb belgilangan. «(qidiruv parchasi)» belgisi maʼlumot sahifaning oʻzidan emas, qidiruv tizimi parchasidan olinganini bildiradi. «[sintez]» — bir necha manbadan chiqarilgan xulosa.
- Manbalar bir-biriga zid kelgan sanalar «/» bilan yoki «… yoki …» shaklida berilgan va [01_xronologiya.md](01_xronologiya.md) ning 12-boʻlimida jamlangan.
- «Stilizatsiya namunasi (asl matn emas)» deb belgilangan parchalarni baza tuzuvchisi yozgan. Ularni hech qachon jadidlarning oʻz soʻzi sifatida keltirmang.
- Bazaning oʻz matni zamonaviy oʻzbek lotin imlosida: oʻ, gʻ uchun ʻ (U+02BB), tutuq belgisi uchun ʼ (U+02BC).

## 3. Katalog xaritasi

Barcha havolalar shu papkaga (`knowledge/`) nisbatan berilgan.

### 3.1. Indeks va sintez fayllari (ildiz)

| Fayl | Tavsif |
|---|---|
| [README.md](README.md) | Shu fayl: maqsad, qurilish usuli, toʻliq katalog xaritasi, foydalanish yoʻriqnomasi, cheklovlar |
| [CORE.md](CORE.md) | Asosiy dayjest (4–6 ming soʻz): harakat faktlari, 13 muallif, uslub belgilari, 30 iqtibos, atamalar, «qaysi savolga qaysi fayl» jadvali. Yangi sessiyada birinchi yuklanadigan fayl |
| [00_harakat_tarixi.md](00_harakat_tarixi.md) | Jadidchilik tarixi (16 boʻlim): tushunchalar, ildizlar, davriylash, Turkiston/Buxoro/Xiva, maktab, matbuot, teatr, til masalasi, siyosat, muxtoriyat, sovet davri, qatagʻon, reabilitatsiya, tarixshunoslik bahslari, ziddiyatlar jadvali, manbalar; har bir fakt URL bilan |
| [01_xronologiya.md](01_xronologiya.md) | Taxminan 1850–2026-yillar xronologiyasi, 13 muallifning hayot chizigʻi jadvali (11-boʻlim) va ziddiyatli sanalar jadvali (12-boʻlim) |
| [02_uslub_qollanmasi.md](02_uslub_qollanmasi.md) | Jadid uslubi boʻyicha qiyosiy qoʻllanma: umumiy til belgilari, janrlar poetikasi, davrlar evolyutsiyasi, mualliflararo jadval, har bir muallifning «uslub izi», miqdoriy koʻrsatkichlar, stilizatsiya qoidalari, NLP eslatmalari |
| [03_leksika_lugati.md](03_leksika_lugati.md) | Jadid davri izohli lugʻati (2313 manba yozuvi asosida): kalit tushunchalar, arab-fors qatlam, ruscha-yevropacha oʻzlashmalar, eskirgan va sheva soʻzlari, grammatik shakllar, diniy-maʼrifiy va maishiy atamalar |
| [04_imlo_qoidalari_1995.md](04_imlo_qoidalari_1995.md) | 1995-yilgi «Oʻzbek tilining asosiy imlo qoidalari» (82 qoida) konspekti va jadid matnlaridagi eski imlo bilan farqlar jadvali |
| [05_manbalar_bibliografiya.md](05_manbalar_bibliografiya.md) | Mahalliy korpus (57 EPUB, `royxat.csv`), meʼyoriy hujjat va barcha veb-manbalar saytlar boʻyicha guruhlangan bibliografiya |
| [06_asarlar_katalogi.md](06_asarlar_katalogi.md) | 57 ta asar kartochkasining muallif boʻyicha katalogi (janr, sana), muallif boʻyicha korpus qamrovi va boʻshliqlar |

### 3.2. `mualliflar/` — 13 ta muallif profili

Har bir profilda: qisqacha maʼlumot, hayot yoʻli va xronologiya, toʻliq asarlar roʻyxati, qarashlari, batafsil uslub tahlili (til, sintaksis, morfologiya, obrazlilik, janrlar, evolyutsiya, lugʻatcha, verbatim namunalar), uslub belgilari checklisti, «shu muallif uslubida yozish» koʻrsatmasi, aloqalari, ilmiy baholar, mashhur iqtiboslar, manbalar va «Tekshiruv qaydlari».

| Fayl | Tavsif |
|---|---|
| [mualliflar/behbudiy.md](mualliflar/behbudiy.md) | Mahmudxoʻja Behbudiy (1875 [yoki 1874] – 1919): Turkiston jadidchiligining yoʻlboshchisi, «Padarkush», «Samarqand», «Oyina» |
| [mualliflar/munavvarqori.md](mualliflar/munavvarqori.md) | Munavvar qori Abdurashidxonov (1878–1931): Toshkent jadidlari yetakchisi, maktab, darsliklar, «Xurshid», «Najot» |
| [mualliflar/ibrat.md](mualliflar/ibrat.md) | Isʼhoqxon toʻra Ibrat (1862–1937): Toʻraqoʻrgʻonlik olim-qozi, «Mezon uz-zamon», «Matbaai Isʼhoqiya» |
| [mualliflar/avloniy.md](mualliflar/avloniy.md) | Abdulla Avloniy (1878–1934): pedagog, shoir («Hijron»), «Turkiy guliston», «Turon» truppasi, «Afgʻon sayohati» |
| [mualliflar/tavallo.md](mualliflar/tavallo.md) | Tavallo (Toʻlagan Xoʻjamyorov, 1883–1937): aruzdagi hajv va nola, «Ravnaq ul-islom», «Mushtum»dagi «Magʻzava» |
| [mualliflar/hamza.md](mualliflar/hamza.md) | Hamza Hakimzoda Niyoziy (1889–1929): shoir («Nihon», «Niyoziy»), bastakor, dramaturg, «Maysaraning ishi» |
| [mualliflar/zafariy.md](mualliflar/zafariy.md) | Gʻulom Zafariy (1889 – 1938 [yoki 1937/1944]): musiqali drama («Halima») va bolalar dramaturgiyasi, folklorshunos |
| [mualliflar/fitrat.md](mualliflar/fitrat.md) | Abdurauf Fitrat (1886 [yoki 1884/1885] – 1938): bosh mafkurachi, «Chigʻatoy gurungi», «Abulfayzxon», purist til |
| [mualliflar/cholpon.md](mualliflar/cholpon.md) | Abdulhamid Choʻlpon (1897 [yoki 1893] – 1938): yangi oʻzbek sheʼriyati, hikoyalar, «Yorqinoy», «Kecha va kunduz» |
| [mualliflar/qodiriy.md](mualliflar/qodiriy.md) | Abdulla Qodiriy (1894–1938): oʻzbek romanchiligining asoschisi, «Oʻtkan kunlar», «Mehrobdan chayon», «Julqunboy» |
| [mualliflar/ayniy.md](mualliflar/ayniy.md) | Sadriddin Ayniy (1878–1954): tojik va oʻzbek nasri, «Eski maktab», «Sudxoʻrning oʻlimi», qatagʻondan omon qolgan |
| [mualliflar/elbek.md](mualliflar/elbek.md) | Elbek (Mashriq Yunusov, 1898–1939): masalchi, bolalar shoiri, ona tili darsliklari muallifi; oʻz matni bazada yoʻq |
| [mualliflar/botu.md](mualliflar/botu.md) | Botu (Mahmud Hodiyev, 1904–1938): «yosh» avlod, barmoqdagi «erk» lirikasi |

### 3.3. `manbalar_web/` — 18 ta veb-tadqiqot fayli

| Fayl | Tavsif |
|---|---|
| [manbalar_web/jadidchilik-tarixi.md](manbalar_web/jadidchilik-tarixi.md) | Harakatning umumiy tarixi (16 boʻlim): kelib chiqishi, bosqichlari, taqdiri, xotirasi; URL va mahalliy risolalar bilan |
| [manbalar_web/matbuot-maktab-teatr.md](manbalar_web/matbuot-maktab-teatr.md) | Jadid matbuoti, usuli jadid maktablari, xayriya jamiyatlari va teatri; ziddiyatli maʼlumotlar boʻlimi bilan |
| [manbalar_web/taʼlim-pedagogika.md](manbalar_web/ta%CA%BClim-pedagogika.md) | Taʼlim-tarbiya va pedagogik qarashlar, xorijda taʼlim, xayriya jamiyatlari, qadimchilar bilan kurash, diniy islohot |
| [manbalar_web/adabiyot-poetika-til.md](manbalar_web/adabiyot-poetika-til.md) | Jadid adabiyoti poetikasi (aruz va barmoq, janrlar) va til masalasi (chigʻatoychilik, umumturkchilik, imlo islohoti) |
| [manbalar_web/boshqa-jadidlar.md](manbalar_web/boshqa-jadidlar.md) | Alohida profil olmagan jadidlar (Hoji Muin, Shakuriy, Fayzulla Xoʻjayev, Soʻfizoda, Vadud Mahmud va boshq.) qisqa profillari |
| [manbalar_web/muallif-behbudiy.md](manbalar_web/muallif-behbudiy.md) | Behbudiy: veb-manbalar asosidagi tadqiqot fayli |
| [manbalar_web/muallif-munavvarqori.md](manbalar_web/muallif-munavvarqori.md) | Munavvar qori: veb-manbalar asosidagi profil (Yandex Kitoblardagi «Tanlangan asarlar» parchalari bilan) |
| [manbalar_web/muallif-ibrat.md](manbalar_web/muallif-ibrat.md) | Ibrat: veb-manbalar asosidagi maʼlumotnoma |
| [manbalar_web/muallif-avloniy.md](manbalar_web/muallif-avloniy.md) | Avloniy: veb-manbalar asosidagi tadqiqot fayli |
| [manbalar_web/muallif-tavallo.md](manbalar_web/muallif-tavallo.md) | Tavallo: veb va kitob manbalari asosidagi tadqiqot fayli |
| [manbalar_web/muallif-hamza.md](manbalar_web/muallif-hamza.md) | Hamza: veb-manbalar asosidagi tadqiqot fayli |
| [manbalar_web/muallif-zafariy.md](manbalar_web/muallif-zafariy.md) | Gʻulom Zafariy: veb-manbalar va Usmonov risolasi asosidagi tadqiqot fayli |
| [manbalar_web/muallif-fitrat.md](manbalar_web/muallif-fitrat.md) | Fitrat: veb-manbalar asosidagi maʼlumotnoma |
| [manbalar_web/muallif-cholpon.md](manbalar_web/muallif-cholpon.md) | Choʻlpon: hayoti va ijodi (veb-manbalar asosida) |
| [manbalar_web/muallif-qodiriy.md](manbalar_web/muallif-qodiriy.md) | Qodiriy: veb-manbalar asosidagi maʼlumotnoma |
| [manbalar_web/muallif-ayniy.md](manbalar_web/muallif-ayniy.md) | Ayniy: veb-manbalar asosidagi maʼlumotnoma (yangi qidiruvsiz, maʼlum sahifalar orqali) |
| [manbalar_web/muallif-elbek.md](manbalar_web/muallif-elbek.md) | Elbek: veb-manbalar asosidagi maʼlumotnoma (Togʻayev, Saparova, Uzoqov maqolalari) |
| [manbalar_web/muallif-botu.md](manbalar_web/muallif-botu.md) | Botu: veb-manbalar asosidagi tadqiqot fayli |

### 3.4. `asarlar/` — 57 ta asar kartochkasi

Har bir kartochka sarlavha qatori (turi, janr, yozilgan/nashr sanasi) va 9 boʻlimdan iborat: qisqacha mazmun, qahramonlar/tuzilish, asosiy gʻoyalar, uslub tahlili, uslub belgilari, iqtiboslar, leksika, matndan olingan faktlar, tadqiqot uchun izohlar. Muallif boʻyicha tartiblangan koʻrinishi: [06_asarlar_katalogi.md](06_asarlar_katalogi.md).

| Fayl | Tavsif |
|---|---|
| [abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy.md](asarlar/abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy.md) | «Jadid namoyandalari. Odob-axloq kitobi» antologiyasi (Munavvar qori, Behbudiy, Avloniy, Fitrat, Choʻlpon, Qodiriy matnlari) — ichidagi matnlar 1906–1916; antologiya 2024 |
| [abdulhamid-cholpon-doxtur-muhammadiyor.md](asarlar/abdulhamid-cholpon-doxtur-muhammadiyor.md) | Abdulhamid Choʻlpon, «Doʻxtur Muhammadiyor» — hikoya («xayoliy hikoya»); «Sadoyi Turkiston», 1914, 24-son |
| [abdulhamid-cholpon-kecha-va-kunduz.md](asarlar/abdulhamid-cholpon-kecha-va-kunduz.md) | Abdulhamid Choʻlpon, «Kecha va kunduz» («Kecha», 1-kitob) — ijtimoiy-psixologik roman; yozilgan 1933–1934, nashr 1936 |
| [abdulhamid-cholpon-kleopatra.md](asarlar/abdulhamid-cholpon-kleopatra.md) | Abdulhamid Choʻlpon, «Kleoʻpatra» — lirik nasr; 1921-yil 14-avgust |
| [abdulhamid-cholpon-meros.md](asarlar/abdulhamid-cholpon-meros.md) | Abdulhamid Choʻlpon, «Meros» — hikoya; sanasiz (ichki dalillar 1930-yillarni koʻrsatadi) |
| [abdulhamid-cholpon-nonushta.md](asarlar/abdulhamid-cholpon-nonushta.md) | Abdulhamid Choʻlpon, «Nonushta» — hikoya; 1923-yil 15-iyun, Andijon |
| [abdulhamid-cholpon-novvoy-qiz.md](asarlar/abdulhamid-cholpon-novvoy-qiz.md) | Abdulhamid Choʻlpon, «Novvoy qiz» — hikoya; 1927-yil 25-iyun, Samarqand |
| [abdulhamid-cholpon-oqposhshoning-inomi.md](asarlar/abdulhamid-cholpon-oqposhshoning-inomi.md) | Abdulhamid Choʻlpon, «Oqposhshoning inʼomi» — hikoya; 1934 |
| [abdulhamid-cholpon-oydin-kechalarda.md](asarlar/abdulhamid-cholpon-oydin-kechalarda.md) | Abdulhamid Choʻlpon, «Oydin kechalarda» — hikoya; 1922 |
| [abdulhamid-cholpon-qor-qoynida-lola.md](asarlar/abdulhamid-cholpon-qor-qoynida-lola.md) | Abdulhamid Choʻlpon, «Qor qoʻynida lola» — hikoya; 1923 |
| [abdulhamid-cholpon-qurboni-jaholat.md](asarlar/abdulhamid-cholpon-qurboni-jaholat.md) | Abdulhamid Choʻlpon, «Qurboni jaholat» — hikoya; «Sadoyi Turkiston», 1914 (6-son; 29-aprel) |
| [abdulhamid-cholpon-seni-kob-kormasun.md](asarlar/abdulhamid-cholpon-seni-kob-kormasun.md) | Abdulhamid Choʻlpon, «Seni koʻb koʻrmasun» — hikoya; 1923-yil iyun |
| [abdulhamid-cholpon-sherlar.md](asarlar/abdulhamid-cholpon-sherlar.md) | Abdulhamid Choʻlpon, «Sheʼrlar» — lirik sheʼrlar saylanmasi; 1919–1925 |
| [abdulhamid-cholpon-taraqqiy.md](asarlar/abdulhamid-cholpon-taraqqiy.md) | Abdulhamid Choʻlpon, «Taraqqiy» — satirik hikoya; 1924 (Wikisource) |
| [abdulhamid-cholpon-yorqinoy.md](asarlar/abdulhamid-cholpon-yorqinoy.md) | Abdulhamid Choʻlpon, «Yorqinoy» — drama; yozilgan 1920, sahna 1921, qayta ishlangan nashr 1926 |
| [abdulla-avloniy-advokatlik-osonmi.md](asarlar/abdulla-avloniy-advokatlik-osonmi.md) | Abdulla Avloniy, «Advokatlik osonmi?» — bir pardali komediya; matn oxirida 1914; ayrim manbalarda 1916 |
| [abdulla-avloniy-afgon-sayohati.md](asarlar/abdulla-avloniy-afgon-sayohati.md) | Abdulla Avloniy, «Afgʻon sayohati» — safarnoma-kundalik; 1919 (15-iyun – 18-noyabr) |
| [abdulla-avloniy-togrilik.md](asarlar/abdulla-avloniy-togrilik.md) | Abdulla Avloniy, «Toʻgʻrilik» — ibratli hikoyat (masal); sana koʻrsatilmagan |
| [abdulla-avloniy-turkiy-guliston-yoxud-axloq.md](asarlar/abdulla-avloniy-turkiy-guliston-yoxud-axloq.md) | Abdulla Avloniy, «Turkiy guliston yoxud axloq» — taʼlimiy-axloqiy darslik-risola; 1-nashr 1913, 2-nashr 1917 (bazadagi matn 2-nashrga asoslangan) |
| [abdulla-avloniy-uygon-millat.md](asarlar/abdulla-avloniy-uygon-millat.md) | Abdulla Avloniy, «Uygʻon, millat» — sheʼrlar toʻplami (tuzuvchi tanlovi); sanali sheʼrlar 1907, 1917, 1919 |
| [abdulla-qodiriy-baxtsiz-kuyov.md](asarlar/abdulla-qodiriy-baxtsiz-kuyov.md) | Abdulla Qodiriy, «Baxtsiz kuyov» — drama (maishiy-maʼrifiy tragediya); 1915 |
| [abdulla-qodiriy-jinlar-bazmi.md](asarlar/abdulla-qodiriy-jinlar-bazmi.md) | Abdulla Qodiriy, «Jinlar bazmi» — hikoya; yozilgan 1916 (ayrim manbalarda 1915), bosilgan 1921 |
| [abdulla-qodiriy-mehrobdan-chayon-roman.md](asarlar/abdulla-qodiriy-mehrobdan-chayon-roman.md) | Abdulla Qodiriy, «Mehrobdan chayon» — tarixiy-ijtimoiy roman; tugallangan 1928-yil fevral, nashr 1929 (Samarqand) |
| [abdulla-qodiriy-obid-ketmon.md](asarlar/abdulla-qodiriy-obid-ketmon.md) | Abdulla Qodiriy, «Obid ketmon» — qissa; jurnalda 1932-yil noyabr – 1934-yil oxiri, kitob 1935 |
| [abdulla-qodiriy-otkan-kunlar.md](asarlar/abdulla-qodiriy-otkan-kunlar.md) | Abdulla Qodiriy, «Oʻtkan kunlar» — tarixiy-ijtimoiy roman; soʻzboshi 1920; jurnalda 1922 yoki 1923–1924; kitob 1924/1925–1926 |
| [abdulla-qodiriy-quyosh-bilan-ham-kurashaman.md](asarlar/abdulla-qodiriy-quyosh-bilan-ham-kurashaman.md) | Abdulla Qodiriy, «Quyosh bilan ham kurashaman» — hikoya; 1932 (Wikisource) |
| [abdulla-qodiriy-tinch-ish.md](asarlar/abdulla-qodiriy-tinch-ish.md) | Abdulla Qodiriy, «Tinch ish» — satirik hikoya; 1920 |
| [abdulla-qodiriy-uloqda.md](asarlar/abdulla-qodiriy-uloqda.md) | Abdulla Qodiriy, «Uloqda» — hikoya; yozilgan 1915 (ayrim manbalarda 1916), bosilgan 1923 |
| [abdurauf-fitrat-abulfayzxon.md](asarlar/abdurauf-fitrat-abulfayzxon.md) | Abdurauf Fitrat, «Abulfayzxon» — besh pardali tarixiy fojia; 1924 (Moskva) |
| [abdurauf-fitrat-hind-ixtilolchilari.md](asarlar/abdurauf-fitrat-hind-ixtilolchilari.md) | Abdurauf Fitrat, «Hind ixtilolchilari» — besh pardali drama; yozilgan 1921, nashr 1923 (Berlin) |
| [abdurauf-fitrat-hind-sayyohining-qissasi.md](asarlar/abdurauf-fitrat-hind-sayyohining-qissasi.md) | Abdurauf Fitrat, «Hind sayyohining qissasi» («Bayonoti sayyohi hindi», tarjima) — sayohatnoma shaklidagi qissa; Istanbul davri (1909–1913); manbalarda 1911, 1912 yoki 1913 |
| [abdurauf-fitrat-najot-yoli.md](asarlar/abdurauf-fitrat-najot-yoli.md) | Abdurauf Fitrat, «Najot yoʻli» («Rahbari najot», tarjima) — axloqiy-ijtimoiy risola; debocha 1332-h. Shaʼbon (1914); nashr 1915 (Peterburg) yoki 1915–1916 (Boku) |
| [abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari.md](asarlar/abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari.md) | Abdurauf Fitrat, «Oila yoki oila boshqarish tartiblari» (tarjima) — maʼrifiy-axloqiy risola; 1915 (en.wiki) / 1915–1916 (uz.wiki) |
| [abdurauf-fitrat-sherlar.md](asarlar/abdurauf-fitrat-sherlar.md) | Abdurauf Fitrat, «Sheʼrlar» — lirik sheʼrlar saylanmasi; asosan 1917-yildan keyin; «Mirrix yulduziga» — 1920 |
| [asqad-muxtor-qodiriyni-korganman-u.md](asarlar/asqad-muxtor-qodiriyni-korganman-u.md) | Asqad Muxtor, «Qodiriyni koʻrganman-u...» — xotira-hikoya (miniatyura), Qodiriy haqida |
| [bahodir-karimov-jadidlar-abdulla-qodiriy.md](asarlar/bahodir-karimov-jadidlar-abdulla-qodiriy.md) | Bahodir Karimov, «Jadidlar: Abdulla Qodiriy» (2024) — ilmiy-ommabop risola, Qodiriy haqida |
| [botu-sherlar.md](asarlar/botu-sherlar.md) | Botu, «Sheʼrlar» — lirik sheʼrlar saylanmasi; sanasiz (ijodi 1920-yillar) |
| [dilmurod-quronov-jadidlar-abdulhamid-cholpon.md](asarlar/dilmurod-quronov-jadidlar-abdulhamid-cholpon.md) | Dilmurod Quronov, «Jadidlar: Abdulhamid Choʻlpon» (2024) — ilmiy-ommabop risola, Choʻlpon haqida |
| [habibulla-qodiriy-otam-haqida.md](asarlar/habibulla-qodiriy-otam-haqida.md) | Habibulla Qodiriy, «Otam haqida» (toʻldirilgan 2-nashr) — memuar-hujjatli biografiya, Qodiriy haqida |
| [hamidulla-boltaboyev-jadidlar-abdurauf-fitrat.md](asarlar/hamidulla-boltaboyev-jadidlar-abdurauf-fitrat.md) | Hamidulla Boltaboyev, «Jadidlar: Abdurauf Fitrat» (2024) — ilmiy-ommabop risola, Fitrat haqida |
| [hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi.md](asarlar/hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi.md) | Hamza Hakimzoda Niyoziy, «Burungi qozilar yoki Maysaraning ishi» — sahna asari; 1926 (ziyouz) |
| [hamza-hakimzoda-niyoziy-sherlar.md](asarlar/hamza-hakimzoda-niyoziy-sherlar.md) | Hamza Hakimzoda Niyoziy, «Sheʼrlar» — lirik sheʼrlar saylanmasi; sanasiz (parallel matnlar 1907–1914) |
| [hamza-hakimzoda-niyoziy-tanlangan-asarlar.md](asarlar/hamza-hakimzoda-niyoziy-tanlangan-asarlar.md) | Hamza Hakimzoda Niyoziy, «Tanlangan asarlar» — sheʼrlar saylanmasi; 1907 – 1928-yil may |
| [ishoqxon-tora-ibrat-mezon-uz-zamon.md](asarlar/ishoqxon-tora-ibrat-mezon-uz-zamon.md) | Isʼhoqxon toʻra Ibrat, «Mezon uz-zamon» — islomiy-maʼrifiy risola, hajv unsurlari bilan; 1918–1919 (Zokiriy) / 1916–1925 (Boltaboyeva) / 1928 (Vikipediya) |
| [javlon-jovliyev-elbek.md](asarlar/javlon-jovliyev-elbek.md) | Javlon Jovliyev, «Elbek» (2024) — zamonaviy hikoya, jadid Elbekka aloqasi yoʻq |
| [mahmudxoja-behbudiy-bir-amo-bolaning-hasrati.md](asarlar/mahmudxoja-behbudiy-bir-amo-bolaning-hasrati.md) | Mahmudxoʻja Behbudiy, «Bir aʼmo bolaning hasrati» — lirik monolog, nasriy sheʼr (tabdil); «Oyina», 1914, 27-son |
| [mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida.md](asarlar/mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida.md) | Mahmudxoʻja Behbudiy, «Bir vafolik zaifaning xususida» — hikoya (tarjima-moslashtirma); TVG, 1903-yil 15-oktabr – 1904-yil 3-fevral, 11 boʻlak |
| [mahmudxoja-behbudiy-padarkush.md](asarlar/mahmudxoja-behbudiy-padarkush.md) | Mahmudxoʻja Behbudiy, «Padarkush» — drama; yozilgan 1911, nashr 1913, sahna 1914 |
| [olim-oltinbek-jadidlar-abdulla-avloniy.md](asarlar/olim-oltinbek-jadidlar-abdulla-avloniy.md) | Olim Oltinbek, «Jadidlar: Abdulla Avloniy» (2024) — ilmiy-ommabop risola, Avloniy haqida |
| [olim-usmonov-jadidlar-gulom-zafariy.md](asarlar/olim-usmonov-jadidlar-gulom-zafariy.md) | Olim Usmonov, «Jadidlar: Gʻulom Zafariy» (2024) — ilmiy-ommabop risola, Zafariy haqida |
| [sadriddin-ayniy-eski-maktab.md](asarlar/sadriddin-ayniy-eski-maktab.md) | Sadriddin Ayniy, «Eski maktab» — avtobiografik qissa; 1935 |
| [sadriddin-ayniy-sudxorning-olimi.md](asarlar/sadriddin-ayniy-sudxorning-olimi.md) | Sadriddin Ayniy, «Sudxoʻrning oʻlimi» — satirik-memuar qissa; 1937 (tg.wiki) / 1939 (uz/ru.wiki) |
| [sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov.md](asarlar/sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov.md) | Sotimjon Xolboyev, «Jadidlar: Munavvar qori Abdurashidxonov» (2024) — ilmiy-ommabop risola, Munavvar qori haqida |
| [tavallo-ey-vatan-ezgu-vatan.md](asarlar/tavallo-ey-vatan-ezgu-vatan.md) | Tavallo, «Ey Vatan, ezgu Vatan» — sheʼriy-publitsistik toʻplam + xotiralar; 1913–1930 |
| [tavallo-sherlar.md](asarlar/tavallo-sherlar.md) | Tavallo, «Sheʼrlar» — lirik sheʼrlar tanlamasi; 1913–1916 |
| [ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat.md](asarlar/ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat.md) | Ulugʻbek Dolimov, «Jadidlar: Isʼhoqxon toʻra Ibrat» (2024) — ilmiy-ommabop risola, Ibrat haqida |
| [zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy.md](asarlar/zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy.md) | Zaynobiddin Abdurashidov, «Jadidlar: Mahmudxoʻja Behbudiy» (2024) — ilmiy-ommabop risola, Behbudiy haqida |

### 3.5. `_holat/` — qurilish holati, oraliq maʼlumotlar va skriptlar

| Fayl | Tavsif |
|---|---|
| [_holat/HOLAT.md](_holat/HOLAT.md) | Bazani qurish jarayonining holati: qaysi bosqich tugagani, qanday davom ettirish (yangi sessiya yoki noutbukda) |
| [_holat/manifest.json](_holat/manifest.json) | 58 ta manba matnining roʻyxati (fayl, muallif, nom, slug, belgilar soni, boʻlaklar). Diqqat: boʻlak yoʻllari 1-sessiyadagi eski vaqtinchalik papkaga ishora qiladi; amalda ular `_holat/chunks/` da |
| [_holat/prep.py](_holat/prep.py) | Matnni 150 000 belgilik boʻlaklarga ajratuvchi va `manifest.json` ni yozuvchi Python skripti |
| [_holat/workflow_v1.js](_holat/workflow_v1.js) | 1-sessiyaning asl ish oqimi skripti (oʻqish, veb, mualliflar, tekshiruv, sintez); limit sababli yarmida toʻxtagan |
| [_holat/bosqich1_kitoblar.js](_holat/bosqich1_kitoblar.js) | 1-bosqich skripti: qolgan 11 ta koʻp boʻlakli kitob kartochkasi va 1995 imlo qoidalari |
| [_holat/bosqich2_web.js](_holat/bosqich2_web.js) | 2-bosqich skripti: 17 ta veb-tadqiqot fayli |
| [_holat/bosqich3_mualliflar.js](_holat/bosqich3_mualliflar.js) | 3-bosqich skripti: 13 ta muallif profili va adversarial fakt tekshiruvi |
| [_holat/bosqich4_sintez.js](_holat/bosqich4_sintez.js) | 4-bosqich skripti: sintez fayllari, tanqidchi, README va CORE |
| [_holat/digests.json](_holat/digests.json) | 54 ta kitob boʻyicha tuzilmali dayjestlar (janr, sana, mazmun, gʻoyalar, uslub, iqtiboslar, leksika, faktlar); 3 tasi yoʻq, ularning kartochkasini oʻqing |
| [_holat/style_input.json](_holat/style_input.json) | 45 ta asarning uslub dayjestlari va iqtiboslari: `02_uslub_qollanmasi.md` uchun kirish maʼlumoti |
| [_holat/lexicon.json](_holat/lexicon.json) | 2313 ta leksik yozuv (soʻz, maʼno, tur, muallif): `03_leksika_lugati.md` uchun kirish maʼlumoti |
| [_holat/journal_wf_72d16037-6bc.jsonl](_holat/journal_wf_72d16037-6bc.jsonl) | 1-sessiya ish oqimining jurnali (agentlarning ishga tushishi va natijalari, 265 yozuv) |

### 3.6. `_holat/chunks/` — 81 ta manba matni boʻlagi

Bu papkada EPUB kitoblar va 1995 imlo qoidalarining toʻliq matni turadi (250 belgidan uzun satrlar oʻralgan). Iqtiboslarni tekshirish va korpus hisoblari shu fayllar ustida qilinadi.

| Fayl | Tavsif |
|---|---|
| [339-24-08-1995__01.txt](_holat/chunks/339-24-08-1995__01.txt) | 1995-yilgi «Oʻzbek tilining asosiy imlo qoidalari» (VM 339-son qarori) toʻliq matni |
| [abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy__01.txt](_holat/chunks/abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy__01.txt) | «Odob-axloq kitobi» antologiyasi matni, 1/2-boʻlak |
| [abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy__02.txt](_holat/chunks/abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy__02.txt) | «Odob-axloq kitobi» antologiyasi matni, 2/2-boʻlak |
| [abdulhamid-cholpon-doxtur-muhammadiyor__01.txt](_holat/chunks/abdulhamid-cholpon-doxtur-muhammadiyor__01.txt) | Abdulhamid Choʻlpon, «Doʻxtur Muhammadiyor» matni (toʻliq) |
| [abdulhamid-cholpon-kecha-va-kunduz__01.txt](_holat/chunks/abdulhamid-cholpon-kecha-va-kunduz__01.txt) | Abdulhamid Choʻlpon, «Kecha va kunduz» matni, 1/4-boʻlak |
| [abdulhamid-cholpon-kecha-va-kunduz__02.txt](_holat/chunks/abdulhamid-cholpon-kecha-va-kunduz__02.txt) | Abdulhamid Choʻlpon, «Kecha va kunduz» matni, 2/4-boʻlak |
| [abdulhamid-cholpon-kecha-va-kunduz__03.txt](_holat/chunks/abdulhamid-cholpon-kecha-va-kunduz__03.txt) | Abdulhamid Choʻlpon, «Kecha va kunduz» matni, 3/4-boʻlak |
| [abdulhamid-cholpon-kecha-va-kunduz__04.txt](_holat/chunks/abdulhamid-cholpon-kecha-va-kunduz__04.txt) | Abdulhamid Choʻlpon, «Kecha va kunduz» matni, 4/4-boʻlak |
| [abdulhamid-cholpon-kleopatra__01.txt](_holat/chunks/abdulhamid-cholpon-kleopatra__01.txt) | Abdulhamid Choʻlpon, «Kleoʻpatra» matni (toʻliq) |
| [abdulhamid-cholpon-meros__01.txt](_holat/chunks/abdulhamid-cholpon-meros__01.txt) | Abdulhamid Choʻlpon, «Meros» matni (toʻliq) |
| [abdulhamid-cholpon-nonushta__01.txt](_holat/chunks/abdulhamid-cholpon-nonushta__01.txt) | Abdulhamid Choʻlpon, «Nonushta» matni (toʻliq) |
| [abdulhamid-cholpon-novvoy-qiz__01.txt](_holat/chunks/abdulhamid-cholpon-novvoy-qiz__01.txt) | Abdulhamid Choʻlpon, «Novvoy qiz» matni (toʻliq) |
| [abdulhamid-cholpon-oqposhshoning-inomi__01.txt](_holat/chunks/abdulhamid-cholpon-oqposhshoning-inomi__01.txt) | Abdulhamid Choʻlpon, «Oqposhshoning inʼomi» matni (toʻliq) |
| [abdulhamid-cholpon-oydin-kechalarda__01.txt](_holat/chunks/abdulhamid-cholpon-oydin-kechalarda__01.txt) | Abdulhamid Choʻlpon, «Oydin kechalarda» matni (toʻliq) |
| [abdulhamid-cholpon-qor-qoynida-lola__01.txt](_holat/chunks/abdulhamid-cholpon-qor-qoynida-lola__01.txt) | Abdulhamid Choʻlpon, «Qor qoʻynida lola» matni (toʻliq) |
| [abdulhamid-cholpon-qurboni-jaholat__01.txt](_holat/chunks/abdulhamid-cholpon-qurboni-jaholat__01.txt) | Abdulhamid Choʻlpon, «Qurboni jaholat» matni (toʻliq) |
| [abdulhamid-cholpon-seni-kob-kormasun__01.txt](_holat/chunks/abdulhamid-cholpon-seni-kob-kormasun__01.txt) | Abdulhamid Choʻlpon, «Seni koʻb koʻrmasun» matni (toʻliq) |
| [abdulhamid-cholpon-sherlar__01.txt](_holat/chunks/abdulhamid-cholpon-sherlar__01.txt) | Abdulhamid Choʻlpon, «Sheʼrlar» matni (toʻliq) |
| [abdulhamid-cholpon-taraqqiy__01.txt](_holat/chunks/abdulhamid-cholpon-taraqqiy__01.txt) | Abdulhamid Choʻlpon, «Taraqqiy» matni (toʻliq) |
| [abdulhamid-cholpon-yorqinoy__01.txt](_holat/chunks/abdulhamid-cholpon-yorqinoy__01.txt) | Abdulhamid Choʻlpon, «Yorqinoy» matni, 1/2-boʻlak |
| [abdulhamid-cholpon-yorqinoy__02.txt](_holat/chunks/abdulhamid-cholpon-yorqinoy__02.txt) | Abdulhamid Choʻlpon, «Yorqinoy» matni, 2/2-boʻlak |
| [abdulla-avloniy-advokatlik-osonmi__01.txt](_holat/chunks/abdulla-avloniy-advokatlik-osonmi__01.txt) | Abdulla Avloniy, «Advokatlik osonmi» matni (toʻliq) |
| [abdulla-avloniy-afgon-sayohati__01.txt](_holat/chunks/abdulla-avloniy-afgon-sayohati__01.txt) | Abdulla Avloniy, «Afgʻon sayohati» matni (toʻliq) |
| [abdulla-avloniy-togrilik__01.txt](_holat/chunks/abdulla-avloniy-togrilik__01.txt) | Abdulla Avloniy, «Toʻgʻrilik» matni (toʻliq) |
| [abdulla-avloniy-turkiy-guliston-yoxud-axloq__01.txt](_holat/chunks/abdulla-avloniy-turkiy-guliston-yoxud-axloq__01.txt) | Abdulla Avloniy, «Turkiy guliston yoxud axloq» matni (toʻliq) |
| [abdulla-avloniy-uygon-millat__01.txt](_holat/chunks/abdulla-avloniy-uygon-millat__01.txt) | Abdulla Avloniy, «Uygʻon, millat» matni (toʻliq) |
| [abdulla-qodiriy-baxtsiz-kuyov__01.txt](_holat/chunks/abdulla-qodiriy-baxtsiz-kuyov__01.txt) | Abdulla Qodiriy, «Baxtsiz kuyov» matni (toʻliq) |
| [abdulla-qodiriy-jinlar-bazmi__01.txt](_holat/chunks/abdulla-qodiriy-jinlar-bazmi__01.txt) | Abdulla Qodiriy, «Jinlar bazmi» matni (toʻliq) |
| [abdulla-qodiriy-mehrobdan-chayon-roman__01.txt](_holat/chunks/abdulla-qodiriy-mehrobdan-chayon-roman__01.txt) | Abdulla Qodiriy, «Mehrobdan chayon (roman)» matni, 1/4-boʻlak |
| [abdulla-qodiriy-mehrobdan-chayon-roman__02.txt](_holat/chunks/abdulla-qodiriy-mehrobdan-chayon-roman__02.txt) | Abdulla Qodiriy, «Mehrobdan chayon (roman)» matni, 2/4-boʻlak |
| [abdulla-qodiriy-mehrobdan-chayon-roman__03.txt](_holat/chunks/abdulla-qodiriy-mehrobdan-chayon-roman__03.txt) | Abdulla Qodiriy, «Mehrobdan chayon (roman)» matni, 3/4-boʻlak |
| [abdulla-qodiriy-mehrobdan-chayon-roman__04.txt](_holat/chunks/abdulla-qodiriy-mehrobdan-chayon-roman__04.txt) | Abdulla Qodiriy, «Mehrobdan chayon (roman)» matni, 4/4-boʻlak |
| [abdulla-qodiriy-obid-ketmon__01.txt](_holat/chunks/abdulla-qodiriy-obid-ketmon__01.txt) | Abdulla Qodiriy, «Obid ketmon» matni, 1/4-boʻlak |
| [abdulla-qodiriy-obid-ketmon__02.txt](_holat/chunks/abdulla-qodiriy-obid-ketmon__02.txt) | Abdulla Qodiriy, «Obid ketmon» matni, 2/4-boʻlak |
| [abdulla-qodiriy-obid-ketmon__03.txt](_holat/chunks/abdulla-qodiriy-obid-ketmon__03.txt) | Abdulla Qodiriy, «Obid ketmon» matni, 3/4-boʻlak |
| [abdulla-qodiriy-obid-ketmon__04.txt](_holat/chunks/abdulla-qodiriy-obid-ketmon__04.txt) | Abdulla Qodiriy, «Obid ketmon» matni, 4/4-boʻlak |
| [abdulla-qodiriy-otkan-kunlar__01.txt](_holat/chunks/abdulla-qodiriy-otkan-kunlar__01.txt) | Abdulla Qodiriy, «Oʻtkan kunlar» matni, 1/5-boʻlak |
| [abdulla-qodiriy-otkan-kunlar__02.txt](_holat/chunks/abdulla-qodiriy-otkan-kunlar__02.txt) | Abdulla Qodiriy, «Oʻtkan kunlar» matni, 2/5-boʻlak |
| [abdulla-qodiriy-otkan-kunlar__03.txt](_holat/chunks/abdulla-qodiriy-otkan-kunlar__03.txt) | Abdulla Qodiriy, «Oʻtkan kunlar» matni, 3/5-boʻlak |
| [abdulla-qodiriy-otkan-kunlar__04.txt](_holat/chunks/abdulla-qodiriy-otkan-kunlar__04.txt) | Abdulla Qodiriy, «Oʻtkan kunlar» matni, 4/5-boʻlak |
| [abdulla-qodiriy-otkan-kunlar__05.txt](_holat/chunks/abdulla-qodiriy-otkan-kunlar__05.txt) | Abdulla Qodiriy, «Oʻtkan kunlar» matni, 5/5-boʻlak |
| [abdulla-qodiriy-quyosh-bilan-ham-kurashaman__01.txt](_holat/chunks/abdulla-qodiriy-quyosh-bilan-ham-kurashaman__01.txt) | Abdulla Qodiriy, «Quyosh bilan ham kurashaman» matni (toʻliq) |
| [abdulla-qodiriy-tinch-ish__01.txt](_holat/chunks/abdulla-qodiriy-tinch-ish__01.txt) | Abdulla Qodiriy, «Tinch ish» matni (toʻliq) |
| [abdulla-qodiriy-uloqda__01.txt](_holat/chunks/abdulla-qodiriy-uloqda__01.txt) | Abdulla Qodiriy, «Uloqda» matni (toʻliq) |
| [abdurauf-fitrat-abulfayzxon__01.txt](_holat/chunks/abdurauf-fitrat-abulfayzxon__01.txt) | Abdurauf Fitrat, «Abulfayzxon» matni (toʻliq) |
| [abdurauf-fitrat-hind-ixtilolchilari__01.txt](_holat/chunks/abdurauf-fitrat-hind-ixtilolchilari__01.txt) | Abdurauf Fitrat, «Hind ixtilolchilari» matni (toʻliq) |
| [abdurauf-fitrat-hind-sayyohining-qissasi__01.txt](_holat/chunks/abdurauf-fitrat-hind-sayyohining-qissasi__01.txt) | Abdurauf Fitrat, «Hind sayyohining qissasi» matni (toʻliq) |
| [abdurauf-fitrat-najot-yoli__01.txt](_holat/chunks/abdurauf-fitrat-najot-yoli__01.txt) | Abdurauf Fitrat, «Najot yoʻli» matni, 1/3-boʻlak |
| [abdurauf-fitrat-najot-yoli__02.txt](_holat/chunks/abdurauf-fitrat-najot-yoli__02.txt) | Abdurauf Fitrat, «Najot yoʻli» matni, 2/3-boʻlak |
| [abdurauf-fitrat-najot-yoli__03.txt](_holat/chunks/abdurauf-fitrat-najot-yoli__03.txt) | Abdurauf Fitrat, «Najot yoʻli» matni, 3/3-boʻlak |
| [abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari__01.txt](_holat/chunks/abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari__01.txt) | Abdurauf Fitrat, «Oila yoki oila boshqarish tartiblari» matni, 1/2-boʻlak |
| [abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari__02.txt](_holat/chunks/abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari__02.txt) | Abdurauf Fitrat, «Oila yoki oila boshqarish tartiblari» matni, 2/2-boʻlak |
| [abdurauf-fitrat-sherlar__01.txt](_holat/chunks/abdurauf-fitrat-sherlar__01.txt) | Abdurauf Fitrat, «Sheʼrlar» matni (toʻliq) |
| [asqad-muxtor-qodiriyni-korganman-u__01.txt](_holat/chunks/asqad-muxtor-qodiriyni-korganman-u__01.txt) | Asqad Muxtor, «Qodiriyni koʻrganman-u...» matni (toʻliq) |
| [bahodir-karimov-jadidlar-abdulla-qodiriy__01.txt](_holat/chunks/bahodir-karimov-jadidlar-abdulla-qodiriy__01.txt) | Bahodir Karimov, «Jadidlar Abdulla Qodiriy» matni (toʻliq) |
| [botu-sherlar__01.txt](_holat/chunks/botu-sherlar__01.txt) | Botu, «Sheʼrlar» matni (toʻliq) |
| [dilmurod-quronov-jadidlar-abdulhamid-cholpon__01.txt](_holat/chunks/dilmurod-quronov-jadidlar-abdulhamid-cholpon__01.txt) | Dilmurod Quronov, «Jadidlar Abdulhamid Choʻlpon» matni (toʻliq) |
| [habibulla-qodiriy-otam-haqida__01.txt](_holat/chunks/habibulla-qodiriy-otam-haqida__01.txt) | Habibulla Qodiriy, «Otam haqida» matni, 1/4-boʻlak |
| [habibulla-qodiriy-otam-haqida__02.txt](_holat/chunks/habibulla-qodiriy-otam-haqida__02.txt) | Habibulla Qodiriy, «Otam haqida» matni, 2/4-boʻlak |
| [habibulla-qodiriy-otam-haqida__03.txt](_holat/chunks/habibulla-qodiriy-otam-haqida__03.txt) | Habibulla Qodiriy, «Otam haqida» matni, 3/4-boʻlak |
| [habibulla-qodiriy-otam-haqida__04.txt](_holat/chunks/habibulla-qodiriy-otam-haqida__04.txt) | Habibulla Qodiriy, «Otam haqida» matni, 4/4-boʻlak |
| [hamidulla-boltaboyev-jadidlar-abdurauf-fitrat__01.txt](_holat/chunks/hamidulla-boltaboyev-jadidlar-abdurauf-fitrat__01.txt) | Hamidulla Boltaboyev, «Jadidlar Abdurauf Fitrat» matni (toʻliq) |
| [hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi__01.txt](_holat/chunks/hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi__01.txt) | Hamza Hakimzoda Niyoziy, «Burungi qozilar yoki Maysaraning ishi» matni (toʻliq) |
| [hamza-hakimzoda-niyoziy-sherlar__01.txt](_holat/chunks/hamza-hakimzoda-niyoziy-sherlar__01.txt) | Hamza Hakimzoda Niyoziy, «Sheʼrlar» matni (toʻliq) |
| [hamza-hakimzoda-niyoziy-tanlangan-asarlar__01.txt](_holat/chunks/hamza-hakimzoda-niyoziy-tanlangan-asarlar__01.txt) | Hamza Hakimzoda Niyoziy, «Tanlangan asarlar» matni (toʻliq) |
| [ishoqxon-tora-ibrat-mezon-uz-zamon__01.txt](_holat/chunks/ishoqxon-tora-ibrat-mezon-uz-zamon__01.txt) | Isʼhoqxon Toʻra Ibrat, «Mezon uz-zamon» matni (toʻliq) |
| [javlon-jovliyev-elbek__01.txt](_holat/chunks/javlon-jovliyev-elbek__01.txt) | Javlon Jovliyev, «Elbek» matni (toʻliq) |
| [mahmudxoja-behbudiy-bir-amo-bolaning-hasrati__01.txt](_holat/chunks/mahmudxoja-behbudiy-bir-amo-bolaning-hasrati__01.txt) | Mahmudxoʻja Behbudiy, «Bir aʼmo bolaning hasrati» matni (toʻliq) |
| [mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida__01.txt](_holat/chunks/mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida__01.txt) | Mahmudxoʻja Behbudiy, «Bir vafolik zaifaning xususida» matni (toʻliq) |
| [mahmudxoja-behbudiy-padarkush__01.txt](_holat/chunks/mahmudxoja-behbudiy-padarkush__01.txt) | Mahmudxoʻja Behbudiy, «Padarkush» matni (toʻliq) |
| [olim-oltinbek-jadidlar-abdulla-avloniy__01.txt](_holat/chunks/olim-oltinbek-jadidlar-abdulla-avloniy__01.txt) | Olim Oltinbek, «Jadidlar Abdulla Avloniy» matni (toʻliq) |
| [olim-usmonov-jadidlar-gulom-zafariy__01.txt](_holat/chunks/olim-usmonov-jadidlar-gulom-zafariy__01.txt) | Olim Usmonov, «Jadidlar Gʻulom Zafariy» matni (toʻliq) |
| [sadriddin-ayniy-eski-maktab__01.txt](_holat/chunks/sadriddin-ayniy-eski-maktab__01.txt) | Sadriddin Ayniy, «Eski maktab» matni (toʻliq) |
| [sadriddin-ayniy-sudxorning-olimi__01.txt](_holat/chunks/sadriddin-ayniy-sudxorning-olimi__01.txt) | Sadriddin Ayniy, «Sudxoʻrning oʻlimi» matni, 1/2-boʻlak |
| [sadriddin-ayniy-sudxorning-olimi__02.txt](_holat/chunks/sadriddin-ayniy-sudxorning-olimi__02.txt) | Sadriddin Ayniy, «Sudxoʻrning oʻlimi» matni, 2/2-boʻlak |
| [sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov__01.txt](_holat/chunks/sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov__01.txt) | Sotimjon Xolboyev, «Jadidlar Munavvar qori Abdurashidxonov» matni (toʻliq) |
| [tavallo-ey-vatan-ezgu-vatan__01.txt](_holat/chunks/tavallo-ey-vatan-ezgu-vatan__01.txt) | Tavallo, «Ey Vatan, ezgu Vatan» matni, 1/2-boʻlak |
| [tavallo-ey-vatan-ezgu-vatan__02.txt](_holat/chunks/tavallo-ey-vatan-ezgu-vatan__02.txt) | Tavallo, «Ey Vatan, ezgu Vatan» matni, 2/2-boʻlak |
| [tavallo-sherlar__01.txt](_holat/chunks/tavallo-sherlar__01.txt) | Tavallo, «Sheʼrlar» matni (toʻliq) |
| [ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat__01.txt](_holat/chunks/ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat__01.txt) | Ulugʻbek Dolimov, «Jadidlar Isʼhoqxon toʻra Ibrat» matni (toʻliq) |
| [zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy__01.txt](_holat/chunks/zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy__01.txt) | Zaynobiddin Abdurashidov, «Jadidlar Mahmudxoʻja Behbudiy» matni (toʻliq) |

### 3.7. Baza tashqarisidagi bogʻliq fayllar (loyiha ildizida)

| Fayl | Tavsif |
|---|---|
| [../Jadidlar_kitoblari_epub/](../Jadidlar_kitoblari_epub/) | 57 ta manba EPUB kitob |
| [../Jadidlar_kitoblari_epub/royxat.csv](../Jadidlar_kitoblari_epub/royxat.csv) | Kitoblar roʻyxati (muallif, kitob, EPUB borligi, audio qismlar soni) |
| [../339 24.08.1995.doc](../339%2024.08.1995.doc) | 1995-yilgi imlo qoidalari haqidagi Vazirlar Mahkamasi qarorining asl fayli |

---

## 4. Qanday foydalanish kerak

### 4.1. Tadqiqot uchun

1. Umumiy manzara: [CORE.md](CORE.md), keyin [00_harakat_tarixi.md](00_harakat_tarixi.md) (mundarija boʻyicha kerakli boʻlimga oʻting).
2. Sana yoki voqea: [01_xronologiya.md](01_xronologiya.md). Sana bahsli boʻlsa, 12-boʻlimdagi jadvalga va tegishli profilning «Tekshiruv qaydlari» boʻlimiga qarang.
3. Shaxs: `mualliflar/<kalit>.md`. Profil boʻlmasa: [manbalar_web/boshqa-jadidlar.md](manbalar_web/boshqa-jadidlar.md).
4. Asar: [06_asarlar_katalogi.md](06_asarlar_katalogi.md) → `asarlar/<slug>.md` → asl matn `_holat/chunks/<slug>__NN.txt`.
5. Mavzu (matbuot, maktab, teatr, til, pedagogika): `manbalar_web/` dagi mavzu fayllari.
6. Iqtibos keltirishdan oldin uni `_holat/chunks/` dagi matn bilan solishtiring (masalan, `grep -F "iqtibos boshi" _holat/chunks/*.txt`). Apostroflar nashrga qarab ʻ, ‘ yoki ' boʻlishi mumkin, shuning uchun qidiruvda ularni bitta sinfga keltiring.
7. Manba URL manzillari: [05_manbalar_bibliografiya.md](05_manbalar_bibliografiya.md). Ilmiy ishda veb-maʼlumotni asl sahifada qayta tekshiring, ayniqsa «(qidiruv parchasi)» belgili maʼlumotni.

### 4.2. Uslub tahlili uchun

1. [02_uslub_qollanmasi.md](02_uslub_qollanmasi.md): 1-boʻlim (umumiy belgilar), 4-boʻlim (mualliflararo jadval), 5-boʻlim (har bir muallifning «uslub izi», [M] va [S] belgilar).
2. Muallif profilining «Uslubi» boʻlimi va «Uslub belgilari checklist»i.
3. Asar kartochkasining «Uslub tahlili» va «Uslub belgilari» boʻlimlari.
4. Leksika uchun [03_leksika_lugati.md](03_leksika_lugati.md), eski va hozirgi imlo farqi uchun [04_imlo_qoidalari_1995.md](04_imlo_qoidalari_1995.md) ning oxirgi boʻlimi.
5. Mualliflikni aniqlashda nashr modernizatsiyasiga sezgir [M] belgilardan koʻra [S] (sintaktik, ritorik, kompozitsion) belgilarga koʻproq tayaning.

### 4.3. Stilizatsiya va NLP uchun

1. Stilizatsiya: [02_uslub_qollanmasi.md](02_uslub_qollanmasi.md) 6-boʻlimi (tamoyillar, anaxronizmlar jadvali, imlo qoidalari, namunalar, tekshirish roʻyxati) va profillardagi «Shu muallif uslubida yozish» boʻlimi. Natijani doimo «stilizatsiya, asl matn emas» deb belgilang. Real gazeta soni, sana, oyat yoki iqtibosni toʻqimang.
2. NLP: [02_uslub_qollanmasi.md](02_uslub_qollanmasi.md) 7-boʻlimi (korpus hajmi, apostrof va kirill harflari, OCR qoldiqlari, transliteratsiya, imlo variantlarini normalizatsiya qilish jadvali, tokenizatsiya, stilometriya tavsiyalari) va 5.14-boʻlimdagi miqdoriy jadval.
3. Mashinada ishlov berish uchun tayyor maʼlumot: [`_holat/lexicon.json`](_holat/lexicon.json), [`_holat/digests.json`](_holat/digests.json), [`_holat/style_input.json`](_holat/style_input.json), [`_holat/manifest.json`](_holat/manifest.json).
4. Korpusni tokenlashdan oldin apostroflarni (ʻ ‘ ' ’ ʼ `) bitta shaklga keltiring va zamonaviy muharrirlarning qavs ichidagi tiklashlarini (masalan, «(ng)») alohida ishlang.

### 4.4. Sunʼiy intellekt yordamchisi uchun

Yangi sessiyada avval [CORE.md](CORE.md) ni yuklang. Undagi «Qaysi savolda qaysi faylga qarash kerak» jadvali boʻyicha kerakli faylni oching. Javobda iqtibos keltirilsa, uni `_holat/chunks/` bilan tekshiring. Manbada boʻlmagan faktni «[umumiy bilim — tekshirilmagan]» deb belgilang.

---

## 5. Maʼlum cheklovlar

1. **Korpus qamrovi notekis.** Gʻulom Zafariy va Elbekning oʻz matni bazada yoʻq: ularning profillari va uslub xulosalari tadqiqotchilar risolalaridagi va veb-sahifalardagi iqtiboslarga tayanadi. Munavvar qorining oʻz asari faqat antologiyadagi parchalar bilan berilgan. Javlon Jovliyevning «Elbek» kitobi jadid shoir Elbekka aloqasi boʻlmagan zamonaviy hikoya. Batafsil: [06_asarlar_katalogi.md](06_asarlar_katalogi.md), 4-boʻlim.
2. **Matnlar zamonaviy nashrlardan olingan.** Barcha EPUB kitoblar 2024-yilgi (bittasi 2026-yilgi) lotin yozuvidagi elektron nashrlar. Asl arab yozuvidagi nashrlar bilan solishtirilmagan. Nashrlar turli darajada modernizatsiya qilingan, shuning uchun morfologik va imloviy kuzatishlar (masalan, «-ub : -ib», «-gʻa : -ga» nisbati) asl muallifga emas, nashrga tegishli boʻlishi mumkin.
3. **Tarjima matnlar.** Fitratning «Hind sayyohining qissasi», «Najot yoʻli» va «Oila» asarlari forschadan qilingan tarjimalar. Ayniyning ikki qissasining oʻzbekcha matnida tarjimon koʻrsatilmagan. Bu matnlarning til belgilari muallifga emas, tarjimonga tegishli boʻlishi mumkin.
4. **OCR va texnik nuqsonlar.** Ayrim matnlarda kirill harflari (masalan, «х»), tushib qolgan chiziqchalar, soʻz boʻlinishlari va sahifa osti izoh raqamlari bor. 1995-yilgi qoidalar matnidagi terish xatolari [04_imlo_qoidalari_1995.md](04_imlo_qoidalari_1995.md) da belgilangan.
5. **Veb-tadqiqot cheklangan.** Veb-qidiruv limiti ish jarayonida tugagani uchun bir qator fayllar faqat oldindan maʼlum sahifalarga tayanadi. Baʼzi maʼlumotlar qidiruv tizimi parchasidan olingan va asl sahifada qayta tekshirilmagan. Kirill yozuvidagi veb-iqtiboslarning bir qismi va Adib Xolidning ingliz tilidagi iqtiboslari mahalliy matnlar bilan tekshirib boʻlmaydi. Veb-sahifalar 2026-yil oktabr holatida koʻrilgan.
6. **Ziddiyatli sanalar hal qilinmagan.** Koʻp sanalar (tugʻilish, hibs, qatl, oqlanish, asarlarning yozilish va nashr yillari) manbalarda turlicha beriladi. Baza ularni hal qilmaydi, faqat variantlarni koʻrsatadi. Arxiv hujjatlari koʻrilmagan.
7. **Miqdoriy hisoblar sodda.** [02_uslub_qollanmasi.md](02_uslub_qollanmasi.md) dagi koʻrsatkichlar oddiy regex bilan hisoblangan. Suffiks hisoblari shovqinli, kichik namunalar (Tavallo va Botu sheʼrlari, 1,4–1,6 ming token) ishonchsiz. Ulardan chiqarilgan ayrim xulosalar gipoteza sifatida berilgan.
8. **Dayjestlar toʻliq emas.** `_holat/digests.json` da 54 ta kitob dayjesti bor, 3 tasi yoʻq. Bu kitoblar uchun kartochkaning oʻzini oʻqing.
9. **Avtomatik tuzilgan lugʻat.** [03_leksika_lugati.md](03_leksika_lugati.md) dagi maʼnolar agentlar tomonidan matn kontekstidan chiqarilgan. Tuzatilgan va shubhali maqolalar lugʻatning B ilovasida sanab oʻtilgan, lekin qolgan maqolalar ham lugʻatshunos tomonidan tekshirilmagan.
10. **Yoʻllar.** `_holat/manifest.json` dagi boʻlak yoʻllari va bosqich skriptlaridagi `KB`, `CH`, `SRC` oʻzgaruvchilari boshqa muhit uchun yozilgan. Boshqa kompyuterda ishlatishdan oldin ularni almashtiring ([_holat/HOLAT.md](_holat/HOLAT.md) ga qarang).
11. **Mustaqil ekspert tekshiruvi yoʻq.** Baza sunʼiy intellekt agentlari tomonidan tuzilgan va avtomatik tekshirilgan. Ilmiy nashrda foydalanishdan oldin asosiy faktlar va iqtiboslarni birlamchi manbalar bilan qayta tekshiring.

---

*Tuzilgan sana: 2026-yil 21-oktabr.*
