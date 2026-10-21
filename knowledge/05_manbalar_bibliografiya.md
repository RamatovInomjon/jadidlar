# Manbalar va bibliografiya

> **Maqsad.** Bu fayl bilim bazasining manbalar xaritasi. U uch qismdan iborat: (1) loyiha papkasidagi mahalliy korpus (EPUB kitoblar, 1995-yilgi imlo qarori va `royxat.csv`); (2) `manbalar_web/` va `mualliflar/` fayllarida keltirilgan barcha veb-manbalar (takrorlar olib tashlangan, sayt boʻyicha guruhlangan); (3) jadidlar boʻyicha tavsiya etiladigan ilmiy adabiyot (oʻzbek, rus, ingliz va boshqa tillarda). 3-qismdagi har bir yozuv 2026-yil 21-oktabrda veb-qidiruv orqali tekshirildi va holati belgilandi.
>
> **Belgilash qoidalari.** Fayl hajmi va matn hajmi avtomatik hisoblangan (`_holat/manifest.json`, `ls`). Tavsifiy maʼlumotlar (tur, janr) `asarlar/` kartochkalaridan olingan. Manba matnida ham, keltirilgan veb-sahifada ham yoʻq fakt «[umumiy bilim — tekshirilmagan]» deb belgilangan.

---

## 1. Mahalliy korpus

### 1.1. Umumiy koʻrsatkichlar

- `Jadidlar_kitoblari_epub/` papkasida **57 ta EPUB** fayl va `royxat.csv` bor. Loyiha ildizida yana bitta meʼyoriy hujjat bor: **`339 24.08.1995.doc`** (56 KB).
- Har bir EPUB uchun `asarlar/` papkasida kartochka mavjud (jami 57 ta). Imlo qarorining kartochkasi `04_imlo_qoidalari_1995.md` fayli.
- Turlar boʻyicha taqsimot (bu jadvaldagi tasnif boʻyicha):
  - **asl asar:** 46 ta. Ulardan 3 tasi Fitratning forschadan qilingan tarjimalari, 2 tasi Behbudiyning tabdil yoki tarjima-moslashtirmalari, 1 tasi antologiya («Odob-axloq kitobi»).
  - **tadqiqot:** 8 ta. Hammasi «Jadidlar» turkumidagi ilmiy-ommabop risolalar.
  - **xotira:** 2 ta (Habibulla Qodiriy, Asqad Muxtor).
  - **boshqa:** 1 ta (Javlon Jovliyev, «Elbek»). Kartochkaga koʻra, bu zamonaviy badiiy hikoya boʻlib, jadid shoir Elbek haqida emas.
  - **meʼyoriy hujjat:** 1 ta (1995-yilgi imlo qarori).
- **Nashr haqida.** Kartochkalarga koʻra, EPUB fayllar zamonaviy elektron nashrlardir. Ularning aksariyati titulida «Toshkent / 2024» yozuvi va «Mutolaa» logotipi bor. Masalan, «Otam haqida» muqovasida «Toshkent, 2026» deyilgan. Bu matnlar arab yozuvidan zamonaviy lotin yozuviga oʻgirilgan va turli darajada modernizatsiya qilingan (qarang: `02_uslub_qollanmasi.md`). Ilmiy iqtibos uchun bosma akademik nashrlar bilan solishtirish tavsiya etiladi.
- «Jadidlar» turkumi: Wikipediadagi havolaga koʻra, D. Quronovning «Abdulhamid Choʻlpon» kitobi «Jadidlar» turkumining 2-jildi sifatida 2022-yilda Toshkentdagi «Yoshlar nashriyot uyi»da chiqqan (<https://en.wikipedia.org/wiki/Cho%CA%BBlpon>). H. Boltaboyevning «Jadidlar, Abdurauf Fitrat» kitobi ham ilmiy maqolalarda «Toshkent, Yoshlar nashriyot uyi, 2022» deb keltiriladi (<https://inlibrary.uz/index.php/cajar/article/view/127461>). Korpusdagi 8 ta «Jadidlar: …» EPUB fayli shu turkumning elektron nusxalari boʻlsa kerak. Bu taxmin tekshirilmagan.

**Ustunlar izohi.** *EPUB hajmi* — faylning diskdagi hajmi (rasm va bezaklar ham kiradi). *Matn hajmi* — EPUBdan pandoc orqali olingan matndagi belgilar soni (`_holat/manifest.json`). *Audio* — `royxat.csv` dagi «Audio qismlar soni» ustuni.

### 1.2. EPUB kitoblar jadvali

| Muallif | Asar | Turi | Janr (kartochkadan) | EPUB hajmi | Matn hajmi (belgi) | Audio | Kartochka |
|---|---|---|---|---|---|---|---|
| Abdulhamid Choʻlpon | «Doʻxtur Muhammadiyor» | asl asar | hikoya | 25 KB | ~26 ming | 1 | [abdulhamid-cholpon-doxtur-muhammadiyor.md](asarlar/abdulhamid-cholpon-doxtur-muhammadiyor.md) |
| Abdulhamid Choʻlpon | «Kecha va kunduz» | asl asar | roman | 254 KB | ~527 ming | 35 | [abdulhamid-cholpon-kecha-va-kunduz.md](asarlar/abdulhamid-cholpon-kecha-va-kunduz.md) |
| Abdulhamid Choʻlpon | «Kleoʻpatra» | asl asar | lirik nasr (sochma) | 26 KB | ~14 ming | 1 | [abdulhamid-cholpon-kleopatra.md](asarlar/abdulhamid-cholpon-kleopatra.md) |
| Abdulhamid Choʻlpon | «Meros» | asl asar | hikoya | 21 KB | ~13 ming | 1 | [abdulhamid-cholpon-meros.md](asarlar/abdulhamid-cholpon-meros.md) |
| Abdulhamid Choʻlpon | «Nonushta» | asl asar | hikoya | 21 KB | ~12 ming | 1 | [abdulhamid-cholpon-nonushta.md](asarlar/abdulhamid-cholpon-nonushta.md) |
| Abdulhamid Choʻlpon | «Novvoy qiz» | asl asar | hikoya | 22 KB | ~11 ming | 1 | [abdulhamid-cholpon-novvoy-qiz.md](asarlar/abdulhamid-cholpon-novvoy-qiz.md) |
| Abdulhamid Choʻlpon | «Oqposhshoning inʼomi» | asl asar | satirik hikoya | 19 KB | ~6 ming | 1 | [abdulhamid-cholpon-oqposhshoning-inomi.md](asarlar/abdulhamid-cholpon-oqposhshoning-inomi.md) |
| Abdulhamid Choʻlpon | «Oydin kechalarda» | asl asar | hikoya | 18 KB | ~6 ming | 0 | [abdulhamid-cholpon-oydin-kechalarda.md](asarlar/abdulhamid-cholpon-oydin-kechalarda.md) |
| Abdulhamid Choʻlpon | «Qor qoʻynida lola» | asl asar | hikoya | 20 KB | ~11 ming | 1 | [abdulhamid-cholpon-qor-qoynida-lola.md](asarlar/abdulhamid-cholpon-qor-qoynida-lola.md) |
| Abdulhamid Choʻlpon | «Qurboni jaholat» | asl asar | hikoya | 18 KB | ~8 ming | 1 | [abdulhamid-cholpon-qurboni-jaholat.md](asarlar/abdulhamid-cholpon-qurboni-jaholat.md) |
| Abdulhamid Choʻlpon | «Seni koʻb koʻrmasun» | asl asar | hikoya | 18 KB | ~5 ming | 1 | [abdulhamid-cholpon-seni-kob-kormasun.md](asarlar/abdulhamid-cholpon-seni-kob-kormasun.md) |
| Abdulhamid Choʻlpon | «Sheʼrlar» | asl asar | sheʼrlar saylanmasi (15 sheʼr) | 30 KB | ~14 ming | 0 | [abdulhamid-cholpon-sherlar.md](asarlar/abdulhamid-cholpon-sherlar.md) |
| Abdulhamid Choʻlpon | «Taraqqiy» | asl asar | satirik hikoya-lavha | 17 KB | ~4 ming | 1 | [abdulhamid-cholpon-taraqqiy.md](asarlar/abdulhamid-cholpon-taraqqiy.md) |
| Abdulhamid Choʻlpon | «Yorqinoy» | asl asar | drama | 94 KB | ~190 ming | 0 | [abdulhamid-cholpon-yorqinoy.md](asarlar/abdulhamid-cholpon-yorqinoy.md) |
| Abdulhamid Choʻlpon, Abdurauf Fitrat, Abdulla Qodiriy, Mahmudxoʻja Behbudiy, Munavvarqori Abdurashidxonov | «Odob-axloq kitobi» | asl asar (antologiya) | axloqiy-didaktik matnlar majmuasi | 190 KB | ~243 ming | 0 | [abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy.md](asarlar/abdulhamid-cholpon-abdurauf-fitrat-abdulla-qodiriy-mahmudxoja-behbudiy.md) |
| Abdulla Avloniy | «Advokatlik osonmi?» | asl asar | bir pardali komediya | 30 KB | ~33 ming | 1 | [abdulla-avloniy-advokatlik-osonmi.md](asarlar/abdulla-avloniy-advokatlik-osonmi.md) |
| Abdulla Avloniy | «Afgʻon sayohati» | asl asar | safarnoma-kundalik | 66 KB | ~99 ming | 7 | [abdulla-avloniy-afgon-sayohati.md](asarlar/abdulla-avloniy-afgon-sayohati.md) |
| Abdulla Avloniy | «Toʻgʻrilik» | asl asar | ibratli hikoyat | 16 KB | ~906 | 1 | [abdulla-avloniy-togrilik.md](asarlar/abdulla-avloniy-togrilik.md) |
| Abdulla Avloniy | «Turkiy guliston yoxud axloq» | asl asar | taʼlimiy-axloqiy darslik | 109 KB | ~122 ming | 9 | [abdulla-avloniy-turkiy-guliston-yoxud-axloq.md](asarlar/abdulla-avloniy-turkiy-guliston-yoxud-axloq.md) |
| Abdulla Avloniy | «Uygʻon, millat» | asl asar | sheʼrlar toʻplami | 85 KB | ~74 ming | 0 | [abdulla-avloniy-uygon-millat.md](asarlar/abdulla-avloniy-uygon-millat.md) |
| Abdulla Qodiriy | «Baxtsiz kuyov» | asl asar | drama | 34 KB | ~35 ming | 4 | [abdulla-qodiriy-baxtsiz-kuyov.md](asarlar/abdulla-qodiriy-baxtsiz-kuyov.md) |
| Abdulla Qodiriy | «Jinlar bazmi» | asl asar | hikoya | 19 KB | ~9 ming | 1 | [abdulla-qodiriy-jinlar-bazmi.md](asarlar/abdulla-qodiriy-jinlar-bazmi.md) |
| Abdulla Qodiriy | «Mehrobdan chayon (roman)» | asl asar | roman | 429 KB | ~494 ming | 33 | [abdulla-qodiriy-mehrobdan-chayon-roman.md](asarlar/abdulla-qodiriy-mehrobdan-chayon-roman.md) |
| Abdulla Qodiriy | «Obid ketmon» | asl asar | qissa | 240 KB | ~504 ming | 21 | [abdulla-qodiriy-obid-ketmon.md](asarlar/abdulla-qodiriy-obid-ketmon.md) |
| Abdulla Qodiriy | «Oʻtkan kunlar» | asl asar | roman | 349 KB | ~707 ming | 16 | [abdulla-qodiriy-otkan-kunlar.md](asarlar/abdulla-qodiriy-otkan-kunlar.md) |
| Abdulla Qodiriy | «Quyosh bilan ham kurashaman» | asl asar | hikoya | 27 KB | ~30 ming | 1 | [abdulla-qodiriy-quyosh-bilan-ham-kurashaman.md](asarlar/abdulla-qodiriy-quyosh-bilan-ham-kurashaman.md) |
| Abdulla Qodiriy | «Tinch ish» | asl asar | satirik hikoya | 20 KB | ~12 ming | 1 | [abdulla-qodiriy-tinch-ish.md](asarlar/abdulla-qodiriy-tinch-ish.md) |
| Abdulla Qodiriy | «Uloqda» | asl asar | hikoya | 23 KB | ~18 ming | 1 | [abdulla-qodiriy-uloqda.md](asarlar/abdulla-qodiriy-uloqda.md) |
| Abdurauf Fitrat | «Abulfayzxon» | asl asar | besh pardali tarixiy fojia | 66 KB | ~81 ming | 1 | [abdurauf-fitrat-abulfayzxon.md](asarlar/abdurauf-fitrat-abulfayzxon.md) |
| Abdurauf Fitrat | «Hind ixtilolchilari» | asl asar | besh pardali drama | 86 KB | ~97 ming | 0 | [abdurauf-fitrat-hind-ixtilolchilari.md](asarlar/abdurauf-fitrat-hind-ixtilolchilari.md) |
| Abdurauf Fitrat | «Hind sayyohining qissasi» | asl asar (tarjima) | sayohatnoma-publitsistik qissa; forschadan oʻzbekcha tarjima | 72 KB | ~140 ming | 8 | [abdurauf-fitrat-hind-sayyohining-qissasi.md](asarlar/abdurauf-fitrat-hind-sayyohining-qissasi.md) |
| Abdurauf Fitrat | «Najot yoʻli» | asl asar (tarjima) | axloqiy-ijtimoiy risola; forschadan tarjima | 204 KB | ~315 ming | 41 | [abdurauf-fitrat-najot-yoli.md](asarlar/abdurauf-fitrat-najot-yoli.md) |
| Abdurauf Fitrat | «Oila yoki oila boshqarish tartiblari» | asl asar (tarjima) | maʼrifiy-axloqiy risola; forschadan tarjima | 153 KB | ~229 ming | 7 | [abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari.md](asarlar/abdurauf-fitrat-oila-yoki-oila-boshqarish-tartiblari.md) |
| Abdurauf Fitrat | «Sheʼrlar» | asl asar | sheʼrlar saylanmasi (17 sheʼr) | 31 KB | ~15 ming | 0 | [abdurauf-fitrat-sherlar.md](asarlar/abdurauf-fitrat-sherlar.md) |
| Asqad Muxtor | «Qodiriyni koʻrganman-u...» | xotira | xotira-hikoya (miniatyura) | 16 KB | ~2 ming | 1 | [asqad-muxtor-qodiriyni-korganman-u.md](asarlar/asqad-muxtor-qodiriyni-korganman-u.md) |
| Bahodir Karimov | «Jadidlar: Abdulla Qodiriy» | tadqiqot | ilmiy-ommabop risola | 70 KB | ~116 ming | 8 | [bahodir-karimov-jadidlar-abdulla-qodiriy.md](asarlar/bahodir-karimov-jadidlar-abdulla-qodiriy.md) |
| Botu | «Sheʼrlar» | asl asar | sheʼrlar saylanmasi (22 sheʼr) | 33 KB | ~13 ming | 0 | [botu-sherlar.md](asarlar/botu-sherlar.md) |
| Dilmurod Quronov | «Jadidlar: Abdulhamid Choʻlpon» | tadqiqot | ilmiy-ommabop risola | 72 KB | ~128 ming | 8 | [dilmurod-quronov-jadidlar-abdulhamid-cholpon.md](asarlar/dilmurod-quronov-jadidlar-abdulhamid-cholpon.md) |
| Habibulla Qodiriy | «Otam haqida» | xotira | memuar-hujjatli biografiya | 331 KB | ~491 ming | 19 | [habibulla-qodiriy-otam-haqida.md](asarlar/habibulla-qodiriy-otam-haqida.md) |
| Hamidulla Boltaboyev | «Jadidlar: Abdurauf Fitrat» | tadqiqot | ilmiy-ommabop risola | 69 KB | ~116 ming | 8 | [hamidulla-boltaboyev-jadidlar-abdurauf-fitrat.md](asarlar/hamidulla-boltaboyev-jadidlar-abdurauf-fitrat.md) |
| Hamza Hakimzoda Niyoziy | «Burungi qozilar yoki Maysaraning ishi» | asl asar | sahna asari | 56 KB | ~90 ming | 0 | [hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi.md](asarlar/hamza-hakimzoda-niyoziy-burungi-qozilar-yoki-maysaraning-ishi.md) |
| Hamza Hakimzoda Niyoziy | «Sheʼrlar» | asl asar | sheʼrlar saylanmasi (13 sheʼr) | 26 KB | ~10 ming | 0 | [hamza-hakimzoda-niyoziy-sherlar.md](asarlar/hamza-hakimzoda-niyoziy-sherlar.md) |
| Hamza Hakimzoda Niyoziy | «Tanlangan asarlar» | asl asar | sheʼrlar saylanmasi | 90 KB | ~70 ming | 0 | [hamza-hakimzoda-niyoziy-tanlangan-asarlar.md](asarlar/hamza-hakimzoda-niyoziy-tanlangan-asarlar.md) |
| Isʼhoqxon Toʻra Ibrat | «Mezon uz-zamon» | asl asar | maʼrifiy-publitsistik risola | 81 KB | ~59 ming | 0 | [ishoqxon-tora-ibrat-mezon-uz-zamon.md](asarlar/ishoqxon-tora-ibrat-mezon-uz-zamon.md) |
| Javlon Jovliyev | «Elbek» | boshqa (zamonaviy badiiy hikoya) | hikoya; kartochkaga koʻra jadid shoir Elbek haqida emas | 19 KB | ~9 ming | 1 | [javlon-jovliyev-elbek.md](asarlar/javlon-jovliyev-elbek.md) |
| Mahmudxoʻja Behbudiy | «Bir aʼmo bolaning hasrati» | asl asar (tabdil) | lirik monolog; usmonlichadan tabdil | 16 KB | ~1 ming | 1 | [mahmudxoja-behbudiy-bir-amo-bolaning-hasrati.md](asarlar/mahmudxoja-behbudiy-bir-amo-bolaning-hasrati.md) |
| Mahmudxoʻja Behbudiy | «Bir vafolik zaifaning xususida» | asl asar (tarjima-moslashtirma) | hikoya | 35 KB | ~60 ming | 1 | [mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida.md](asarlar/mahmudxoja-behbudiy-bir-vafolik-zaifaning-xususida.md) |
| Mahmudxoʻja Behbudiy | «Padarkush» | asl asar | drama | 27 KB | ~21 ming | 4 | [mahmudxoja-behbudiy-padarkush.md](asarlar/mahmudxoja-behbudiy-padarkush.md) |
| Olim Oltinbek | «Jadidlar: Abdulla Avloniy» | tadqiqot | ilmiy-ommabop risola | 67 KB | ~107 ming | 8 | [olim-oltinbek-jadidlar-abdulla-avloniy.md](asarlar/olim-oltinbek-jadidlar-abdulla-avloniy.md) |
| Olim Usmonov | «Jadidlar: Gʻulom Zafariy» | tadqiqot | ilmiy-ommabop risola | 69 KB | ~120 ming | 9 | [olim-usmonov-jadidlar-gulom-zafariy.md](asarlar/olim-usmonov-jadidlar-gulom-zafariy.md) |
| Sadriddin Ayniy | «Eski maktab» | asl asar | avtobiografik qissa | 52 KB | ~66 ming | 3 | [sadriddin-ayniy-eski-maktab.md](asarlar/sadriddin-ayniy-eski-maktab.md) |
| Sadriddin Ayniy | «Sudxoʻrning oʻlimi» | asl asar | satirik qissa | 131 KB | ~237 ming | 16 | [sadriddin-ayniy-sudxorning-olimi.md](asarlar/sadriddin-ayniy-sudxorning-olimi.md) |
| Sotimjon Xolboyev | «Jadidlar: Munavvar qori Abdurashidxonov» | tadqiqot | ilmiy-ommabop risola | 67 KB | ~113 ming | 7 | [sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov.md](asarlar/sotimjon-xolboyev-jadidlar-munavvar-qori-abdurashidxonov.md) |
| Tavallo | «Ey Vatan, ezgu Vatan» | asl asar (+ muharrir apparati, xotiralar) | sheʼriy-publitsistik toʻplam | 314 KB | ~286 ming | 0 | [tavallo-ey-vatan-ezgu-vatan.md](asarlar/tavallo-ey-vatan-ezgu-vatan.md) |
| Tavallo | «Sheʼrlar» | asl asar | sheʼrlar tanlamasi | 25 KB | ~11 ming | 0 | [tavallo-sherlar.md](asarlar/tavallo-sherlar.md) |
| Ulugʻbek Dolimov | «Jadidlar: Isʼhoqxon toʻra Ibrat» | tadqiqot | ilmiy-ommabop risola | 77 KB | ~142 ming | 10 | [ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat.md](asarlar/ulugbek-dolimov-jadidlar-ishoqxon-tora-ibrat.md) |
| Zaynobiddin Abdurashidov | «Jadidlar: Mahmudxoʻja Behbudiy» | tadqiqot | ilmiy-ommabop biografik risola | 66 KB | ~118 ming | 9 | [zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy.md](asarlar/zaynobiddin-abdurashidov-jadidlar-mahmudxoja-behbudiy.md) |
### 1.3. Meʼyoriy hujjat

| Hujjat | Turi | Hajm | Kartochka |
|---|---|---|---|
| `339 24.08.1995.doc`: Oʻzbekiston Respublikasi Vazirlar Mahkamasining 1995-yil 24-avgustdagi 339-son qarori va unga ilova «Oʻzbek tilining asosiy imlo qoidalari» (kartochkadagi tavsif) | meʼyoriy hujjat | 56 KB (.doc); ~28 ming belgi | [04_imlo_qoidalari_1995.md](04_imlo_qoidalari_1995.md) |

Kartochkaga koʻra, qaror «Lotin yozuviga asoslangan oʻzbek alifbosini joriy etish toʻgʻrisida»gi Qonunni bajarish uchun qabul qilingan. Bazadagi barcha zamonaviy nashrlar shu imlo meʼyoriga yaqin, shuning uchun bu hujjat jadid matnlarining asl imlosi bilan zamonaviy tabdil oʻrtasidagi farqni koʻrsatuvchi asosiy meʼyor sifatida olingan.

### 1.4. `royxat.csv` (ROʻYXAT) maʼlumotlari

Fayl: `Jadidlar_kitoblari_epub/royxat.csv` (UTF-8 BOM). Ustunlari: `Muallif, Kitob, EPUB, Audio qismlar soni`.

- **Jami yozuvlar:** 59 ta. Ulardan 57 tasida `EPUB = ha` (papkadagi 57 ta faylga mos keladi), 2 tasida `EPUB = yo'q`.
- **Audio qismlar jami:** 316 ta. 14 ta yozuvda audio yoʻq (0). Har bir asar uchun qismlar soni 1.2-jadvalning «Audio» ustunida berilgan.
- **Eng koʻp audio qismli asarlar:** Fitrat, «Najot yoʻli» (41); Choʻlpon, «Kecha va kunduz» (35); Qodiriy, «Mehrobdan chayon (roman)» (33); Qodiriy, «Obid ketmon» (21); Habibulla Qodiriy, «Otam haqida» (19); Qodiriy, «Oʻtkan kunlar» (16); Ayniy, «Sudxoʻrning oʻlimi» (16).
- **EPUB fayli yoʻq yozuvlar** (faqat audio bor, matni korpusda yoʻq, kartochkasi ham yoʻq):

| Muallif | Kitob | EPUB | Audio qismlar | Izoh |
|---|---|---|---|---|
| Abdulhamid Choʻlpon | Kulgan boshqalar | yo'q | 1 | Matni korpusda yoʻq. Bu asar haqida bazada boshqa maʼlumot yoʻq. |
| Abdulla Qodiriy | Mehrobdan chayon (radiospektakl) | yo'q | 4 | Romanning radiospektakl talqini. Roman matni EPUB sifatida bor ([abdulla-qodiriy-mehrobdan-chayon-roman.md](asarlar/abdulla-qodiriy-mehrobdan-chayon-roman.md)). Radiospektaklning muallifi, rejissyori va yozilgan yili CSVda koʻrsatilmagan. |

- **Nomlardagi farqlar:** CSVda «Advokatlik osonmi?» (fayl nomida soʻroq belgisi yoʻq) va «Jadidlar: …» (fayl nomlarida ikki nuqta yoʻq) shakllari bor. Ularning hammasi tegishli EPUB fayllar bilan bir xil asar.
- **Kodlash:** CSVda `yo'q` oddiy apostrof bilan yozilgan, qolgan nomlarda esa `ʻ` (U+02BB) va `ʼ` (U+02BC) ishlatilgan. Avtomatik ishlov berishda buni hisobga olish kerak.

---

## 2. Veb-manbalar (manbalar_web/ va mualliflar/)

**Qamrov.** Bu roʻyxat `knowledge/manbalar_web/*.md` (18 ta fayl) va `knowledge/mualliflar/*.md` (13 ta fayl) ichidagi barcha `http(s)://` havolalardan avtomatik yigʻilgan. Takrorlar olib tashlangan: `http`/`https`, `www.`, oxirgi `/` va URL-kodlash farqlari birlashtirilgan. Natija: **468 ta noyob havola, 117 ta sayt**.

**Sarlavhalar.** Sarlavhalar fayllardagi «Manbalar» / «Veb-manbalar» roʻyxatlaridan qanday yozilgan boʻlsa, shunday koʻchirilgan. Ulardagi izohlar ham saqlangan:
- «(qidiruv parchasi)» — sahifa ochilmagan, faqat qidiruv natijasidagi parcha koʻrilgan;
- «(ochilmadi)» yoki «(403)» — sahifaga kirib boʻlmagan.

Sarlavhasi roʻyxatlarda berilmagan havolalar *(sarlavha bazada qayd etilmagan)* deb belgilangan. Bunday hollarda sarlavha URLdan taxmin qilib yozilmagan.

**Qaysi faylda keltirilgan.** Har bir yozuv oxiridagi kod havola qaysi faylda uchrashini koʻrsatadi: `w:` = `manbalar_web/<nom>.md`, `m:` = `mualliflar/<nom>.md`.

**Ishonchlilik boʻyicha eslatma.** Roʻyxatda har xil darajadagi manbalar bor:
- ensiklopediyalar (Wikipedia, Iranica, TDV, BRE, Britannica);
- ilmiy jurnallar (Oriens, inlibrary.uz, inscience.uz, FDU, BuxDU, CyberLeninka, Cambridge);
- matn kutubxonalari (Vikimanba / Wikisource, Ziyouz, kh-davron.uz);
- OAV (UzA, Yuz.uz, Kun.uz);
- talabalar referatlari (oefen.uz, arxiv.uz).

PhD ishida asosan birlamchi matnlarga, ilmiy jurnallarga va akademik nashrlarga tayaning. Referat saytlari va qidiruv parchalari faqat yoʻnaltiruvchi maʼlumot sifatida ishlatilsin.

### 2.1. Saytlar boʻyicha (3 va undan ortiq havola)

#### en.wikipedia.org (43)

- Abdulla Avloniy — <https://en.wikipedia.org/wiki/Abdulla_Avloniy> — `w:boshqa-jadidlar, w:matbuot-maktab-teatr, w:muallif-avloniy, w:taʼlim-pedagogika, m:avloniy`
- Abdulla Qodiriy — Wikipedia (inglizcha) — <https://en.wikipedia.org/wiki/Abdulla_Qodiriy> — `w:muallif-qodiriy, m:qodiriy`
- Abdulvohid Burhonov — <https://en.wikipedia.org/wiki/Abdulvohid_Burhonov> — `w:boshqa-jadidlar, w:taʼlim-pedagogika, m:ayniy`
- Abduqodir Shakuriy (en.wikipedia) — <https://en.wikipedia.org/wiki/Abduqodir_Shakuriy> — `w:boshqa-jadidlar, w:matbuot-maktab-teatr`
- Abdurauf Fitrat — English Wikipedia — <https://en.wikipedia.org/wiki/Abdurauf_Fitrat> — `w:adabiyot-poetika-til, w:matbuot-maktab-teatr, w:muallif-fitrat, w:taʼlim-pedagogika, m:fitrat`
- Wikipedia: Bukhara-yi Sharif — <https://en.wikipedia.org/wiki/Bukhara-yi_Sharif> — `w:matbuot-maktab-teatr`
- Bukharan People's Soviet Republic — Wikipedia — <https://en.wikipedia.org/wiki/Bukharan_People%27s_Soviet_Republic> — `w:jadidchilik-tarixi`
- Choʻlpon — English Wikipedia — <https://en.wikipedia.org/wiki/Cho%CA%BBlpon> — `w:adabiyot-poetika-til, w:muallif-cholpon, m:cholpon`
- Cholpon (disambiguation) — English Wikipedia — <https://en.wikipedia.org/wiki/Cholpon> — `w:muallif-cholpon`
- Inglizcha Vikipediya «Elbek» (ism sahifasi, shoir haqida emas) — <https://en.wikipedia.org/wiki/Elbek> — `w:muallif-elbek`
- Fayzulla Khodzhayev — <https://en.wikipedia.org/wiki/Fayzulla_Khodzhayev> — `w:boshqa-jadidlar`
- Fayzulla Xoʻjayev — Wikipedia — <https://en.wikipedia.org/wiki/Fayzulla_Xo%CA%BBjayev> — `w:jadidchilik-tarixi`
- Wikipedia: Hamza Hakimzade Niyazi — <https://en.wikipedia.org/wiki/Hamza_Hakimzade_Niyazi> — `w:matbuot-maktab-teatr, w:muallif-hamza, w:taʼlim-pedagogika, m:hamza`
- Ismail Gasprinski — Wikipedia — <https://en.wikipedia.org/wiki/Ismail_Gasprinski> — `w:jadidchilik-tarixi`
- Ismail Gasprinsky — <https://en.wikipedia.org/wiki/Ismail_Gasprinsky> — `w:boshqa-jadidlar, m:tavallo`
- Jadid — Wikipedia (en) — <https://en.wikipedia.org/wiki/Jadid> — `w:jadidchilik-tarixi, w:taʼlim-pedagogika`
- Khivan Revolution — Wikipedia — <https://en.wikipedia.org/wiki/Khivan_Revolution> — `w:jadidchilik-tarixi`
- Khorezm People's Soviet Republic — Wikipedia — <https://en.wikipedia.org/wiki/Khorezm_People%27s_Soviet_Republic> — `w:jadidchilik-tarixi`
- Mahmud Khoja Behbudiy — English Wikipedia — <https://en.wikipedia.org/wiki/Mahmud_Khoja_Behbudiy> — `w:adabiyot-poetika-til, w:jadidchilik-tarixi, w:matbuot-maktab-teatr, w:muallif-behbudiy, m:behbudiy`
- Mahmud Tarzi — <https://en.wikipedia.org/wiki/Mahmud_Tarzi> — `w:boshqa-jadidlar`
- Mirmuhsin — <https://en.wikipedia.org/wiki/Mirmuhsin> — `w:boshqa-jadidlar`
- Muhammadsharif Soʻfizoda (en.wikipedia) — <https://en.wikipedia.org/wiki/Muhammadsharif_So%CA%BBfizoda> — `w:boshqa-jadidlar`
- Wikipedia: Munawwar Qari — <https://en.wikipedia.org/wiki/Munawwar_Qari> — `w:matbuot-maktab-teatr, w:muallif-munavvarqori, w:taʼlim-pedagogika, m:munavvarqori`
- Museum of Victims of Political Repression in Tashkent — Wikipedia — <https://en.wikipedia.org/wiki/Museum_of_Victims_of_Political_Repression_in_Tashkent> — `w:jadidchilik-tarixi`
- Wikipedia: Mushtum — <https://en.wikipedia.org/wiki/Mushtum> — `w:matbuot-maktab-teatr`
- Mustafa Shokay — <https://en.wikipedia.org/wiki/Mustafa_Shokay> — `w:boshqa-jadidlar`
- Oʻtkan kunlar — English Wikipedia — <https://en.wikipedia.org/wiki/O%CA%BBtkan_kunlar> — `w:adabiyot-poetika-til`
- Wikipedia: Oʻzbekiston Ovozi — <https://en.wikipedia.org/wiki/O%CA%BBzbekiston_Ovozi> — `w:matbuot-maktab-teatr`
- Osman Kocaoğlu — <https://en.wikipedia.org/wiki/Osman_Kocao%C4%9Flu> — `w:boshqa-jadidlar`
- Oyina — Wikipedia — <https://en.wikipedia.org/wiki/Oyina> — `w:jadidchilik-tarixi, w:matbuot-maktab-teatr`
- Polvonniyoz Yusupov — <https://en.wikipedia.org/wiki/Polvonniyoz_Yusupov> — `w:boshqa-jadidlar, w:jadidchilik-tarixi`
- Sadriddin Ayni — English Wikipedia — <https://en.wikipedia.org/wiki/Sadriddin_Ayni> — `w:muallif-ayniy, m:ayniy`
- Seraj al-Akhbar — <https://en.wikipedia.org/wiki/Seraj_al-Akhbar> — `w:boshqa-jadidlar`
- Shura-i-Islam — Wikipedia — <https://en.wikipedia.org/wiki/Shura-i-Islam> — `w:jadidchilik-tarixi`
- *(sarlavha bazada qayd etilmagan)* — <https://en.wikipedia.org/wiki/State_Hamza_Prize> — `m:hamza`
- Wikipedia: Taraggi (newspaper) [Boku gazetasi, farqlash uchun] — <https://en.wikipedia.org/wiki/Taraggi_(newspaper)> — `w:matbuot-maktab-teatr`
- *(sarlavha bazada qayd etilmagan)* — <https://en.wikipedia.org/wiki/Tavallo> — `w:muallif-tavallo`
- The Politics of Muslim Cultural Reform (Vikipediya) — <https://en.wikipedia.org/wiki/The_Politics_of_Muslim_Cultural_Reform> — `w:muallif-ibrat, m:ibrat`
- Toshmuhammad Qori-Niyoziy — <https://en.wikipedia.org/wiki/Toshmuhammad_Qori-Niyoziy> — `w:boshqa-jadidlar`
- Turkestan Autonomy — <https://en.wikipedia.org/wiki/Turkestan_Autonomy> — `w:boshqa-jadidlar, w:jadidchilik-tarixi`
- Uzbek alphabet — English Wikipedia — <https://en.wikipedia.org/wiki/Uzbek_alphabet> — `w:adabiyot-poetika-til`
- Young Bukharans — Wikipedia — <https://en.wikipedia.org/wiki/Young_Bukharans> — `w:jadidchilik-tarixi, w:matbuot-maktab-teatr, w:muallif-ayniy`
- Young Khivans — Wikipedia — <https://en.wikipedia.org/wiki/Young_Khivans> — `w:jadidchilik-tarixi`

#### uz.wikipedia.org (30)

- Sadriddin Ayniy (manba kodi, adabiyotlar roʻyxati) — Oʻzbek Vikipediyasi — <https://uz.wikipedia.org/w/index.php?title=Sadriddin_Ayniy&action=raw> — `w:muallif-ayniy`
- Abdulhamid Choʻlpon — Oʻzbekcha Vikipediya — <https://uz.wikipedia.org/wiki/Abdulhamid_Choʻlpon> — `w:muallif-cholpon, m:cholpon`
- Abdulla Avloniy — Oʻzbekcha Vikipediya — <https://uz.wikipedia.org/wiki/Abdulla_Avloniy> — `w:muallif-avloniy, w:muallif-tavallo, m:avloniy, m:tavallo`
- Abdulla Qodiriy — Vikipediya (oʻzbekcha) — <https://uz.wikipedia.org/wiki/Abdulla_Qodiriy> — `w:muallif-qodiriy, m:qodiriy`
- Abdurauf Fitrat — Vikipediya (oʻzbekcha) — <https://uz.wikipedia.org/wiki/Abdurauf_Fitrat> — `w:muallif-fitrat, m:fitrat`
- Botu — Vikipediya (oʻzbekcha) — <https://uz.wikipedia.org/wiki/Botu> — `w:muallif-botu, m:botu`
- Chigʻatoy gurungi — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Chig%CA%BBatoy_gurungi> — `w:muallif-elbek, m:elbek`
- Elbek — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Elbek> — `w:muallif-elbek, m:elbek`
- Gʻulom Zafariy — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/G%CA%BBulom_Zafariy> — `w:muallif-elbek, w:muallif-zafariy, m:elbek, m:zafariy`
- Hamza Hakimzoda Niyoziy — Vikipediya (oʻzbekcha) — <https://uz.wikipedia.org/wiki/Hamza_Hakimzoda_Niyoziy> — `w:muallif-hamza, m:hamza`
- Hoji Muin (uz.wikipedia) — <https://uz.wikipedia.org/wiki/Hoji_Muin> — `w:boshqa-jadidlar`
- Ishoqxon Ibrat — Oʻzbekcha Vikipediya — <https://uz.wikipedia.org/wiki/Ishoqxon_Ibrat> — `w:muallif-ibrat, m:ibrat`
- Jadidchilik — Vikipediya (uz) — <https://uz.wikipedia.org/wiki/Jadidchilik> — `w:jadidchilik-tarixi`
- Kecha va kunduz — Oʻzbekcha Vikipediya — <https://uz.wikipedia.org/wiki/Kecha_va_kunduz> — `w:muallif-cholpon, m:cholpon`
- Mahmudali Yunusov — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Mahmudali_Yunusov> — `w:muallif-elbek`
- Mahmudxoʻja Behbudiy — Oʻzbekcha Vikipediya — <https://uz.wikipedia.org/wiki/Mahmudxo%CA%BBja_Behbudiy> — `w:muallif-behbudiy, m:ayniy, m:behbudiy`
- Mehrobdan chayon — Vikipediya — <https://uz.wikipedia.org/wiki/Mehrobdan_chayon> — `w:muallif-qodiriy, m:qodiriy`
- Mushtum — Vikipediya — <https://uz.wikipedia.org/wiki/Mushtum> — `w:muallif-qodiriy, m:qodiriy`
- Oʻzbek yozuvi islohoti — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/O%CA%BBzbek_yozuvi_islohoti> — `w:muallif-elbek, m:elbek`
- Obid ketmon — Vikipediya — <https://uz.wikipedia.org/wiki/Obid_ketmon> — `w:muallif-qodiriy, m:qodiriy`
- Oʻtkan kunlar — Vikipediya — <https://uz.wikipedia.org/wiki/Oʻtkan_kunlar> — `w:muallif-qodiriy, m:qodiriy`
- Oʻzbek alifbosi — Oʻzbekcha Vikipediya — <https://uz.wikipedia.org/wiki/Oʻzbek_alifbosi> — `w:adabiyot-poetika-til`
- Sadriddin Ayniy — Oʻzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Sadriddin_Ayniy> — `w:muallif-ayniy, m:ayniy`
- Salohiddin Mamajonov — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Salohiddin_Mamajonov> — `w:muallif-elbek`
- Sidqiy Xondayliqiy (uz.wikipedia) — <https://uz.wikipedia.org/wiki/Sidqiy_Xondayliqiy> — `w:boshqa-jadidlar`
- Tavallo — Vikipediya (oʻzbekcha) — <https://uz.wikipedia.org/wiki/Tavallo> — `w:muallif-tavallo, m:tavallo`
- Toshkent viloyati — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Toshkent_viloyati> — `w:muallif-elbek`
- Vadud Mahmudov — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Vadud_Mahmudov> — `w:muallif-elbek, m:elbek`
- Yosh turkiston — Uzbek Vikipediyasi — <https://uz.wikipedia.org/wiki/Yosh_turkiston> — `w:muallif-elbek, m:elbek`
- Тавалло — Vikipediya (oʻzbekcha, kirill sahifasi; batafsilroq: Obi Nazir, otasining ismi) — <https://uz.wikipedia.org/wiki/Тавалло> — `w:muallif-tavallo, m:tavallo`

#### wikisource.org (30)

- Choʻlpon. 1921-yil 2-yanvardagi Imlo qurultoyi 2-oʻltirishi — Vikimanba — <https://wikisource.org/wiki/1921-yil_2-yanvarda_o%CA%BBtkazilgan_%E2%80%9EImlo_qurultoyi%E2%80%9Cning_2-o%CA%BBltirishida_so%CA%BBzlangan_nutq> — `w:adabiyot-poetika-til`
- A’molimiz yoinki murodimiz — Wikisource — <https://wikisource.org/wiki/A%E2%80%99molimiz_yoinki_murodimiz> — `w:muallif-behbudiy`
- Author:Abdulla Avloniy — Wikisource — <https://wikisource.org/wiki/Author:Abdulla_Avloniy> — `w:muallif-avloniy, m:avloniy`
- Vikimanba: Author: Abdulla Qodiriy — <https://wikisource.org/wiki/Author:Abdulla_Qodiriy> — `w:matbuot-maktab-teatr, w:muallif-qodiriy, m:qodiriy`
- Fitrat — mualliflar sahifasi — Vikimanba — <https://wikisource.org/wiki/Author:Abdurauf_Fitrat> — `w:adabiyot-poetika-til, m:fitrat`
- [ushbu sessiyada koʻrildi] — <https://wikisource.org/wiki/Author:Botu> — `m:botu`
- Wikisource, Author:Elbek — <https://wikisource.org/wiki/Author:Elbek> — `m:elbek`
- Author: Isʼhoqxon Ibrat (Vikimanba) — <https://wikisource.org/wiki/Author:Is%CA%BChoqxon_Ibrat> — `w:muallif-ibrat, m:ibrat`
- Author: Mahmudxoʻja Behbudiy — Wikisource — <https://wikisource.org/wiki/Author:Mahmudxo%CA%BBja_Behbudiy> — `w:muallif-behbudiy, m:behbudiy`
- Author: Munavvarqori Abdurashidxon oʻgʻli — Wikisource — <https://wikisource.org/wiki/Author:Munavvarqori_Abdurashidxon_o%CA%BBg%CA%BBli> — `w:muallif-munavvarqori, w:taʼlim-pedagogika, m:munavvarqori`
- Author:Otajon Hoshimov (Wikisource) — <https://wikisource.org/wiki/Author:Otajon_Hoshimov> — `w:boshqa-jadidlar`
- *(sarlavha bazada qayd etilmagan)* — <https://wikisource.org/wiki/Author:Tavallo> — `m:tavallo`
- Author:Vadud Mahmud (Wikisource) — <https://wikisource.org/wiki/Author:Vadud_Mahmud> — `w:boshqa-jadidlar`
- Vadud Mahmud. Bu kungi sheʼrlarimiz va sanʼatkorlarimiz (1925) — Vikimanba — <https://wikisource.org/wiki/Bu_kungi_she%E2%80%99rlarimiz_va_san%E2%80%99atkorlarimiz> — `w:adabiyot-poetika-til, m:cholpon, m:fitrat`
- Ehtiyoji millat — Behbudiy (Wikisource) — <https://wikisource.org/wiki/Ehtiyoji_millat> — `w:taʼlim-pedagogika`
- “Eski maktablar xususida” (Vikimanba) — <https://wikisource.org/wiki/Eski_maktablar_xususida> — `w:muallif-ibrat, m:ibrat`
- Behbudiy. Ikki emas, toʻrt til lozim (1913) — Vikimanba — <https://wikisource.org/wiki/Ikki_emas,_to%E2%80%98rt_til_lozim> — `w:adabiyot-poetika-til, w:muallif-behbudiy, m:behbudiy`
- “Millatni kim isloh etar?” (Vikimanba) — <https://wikisource.org/wiki/Millatni_kim_isloh_etar%3F> — `w:muallif-ibrat, m:ibrat`
- Nikoh to‘g‘risida — Munavvarqori (Wikisource) — <https://wikisource.org/wiki/Nikoh_to%E2%80%98g%E2%80%98risida> — `w:taʼlim-pedagogika`
- *(sarlavha bazada qayd etilmagan)* — <https://wikisource.org/wiki/Nonushta> — `m:cholpon`
- [1909, Samarqand; ochilish jumlasi: «Sung‘iy mamlakati aholisidan Chung‘ichin nom zot bir adib bor edi.» Bu satr WebFetch vositachi modeli orqali olingan, harfma-harf tekshirilmagan] — <https://wikisource.org/wiki/Oq_yelpog%E2%80%98ichli_chinli_xotun> — `m:behbudiy`
- *(sarlavha bazada qayd etilmagan)* — <https://wikisource.org/wiki/Oqposhshoning_in%E2%80%99omi> — `m:cholpon`
- Padarkush — Wikisource — <https://wikisource.org/wiki/Padarkush> — `w:muallif-behbudiy, m:behbudiy`
- Vikimanba: Qiroatxonalarimiz — <https://wikisource.org/wiki/Qiroatxonalarimiz> — `w:matbuot-maktab-teatr`
- *(sarlavha bazada qayd etilmagan)* — <https://wikisource.org/wiki/Taraqqiy> — `m:cholpon`
- Behbudiy. Til masalasi (1915) — Vikimanba — <https://wikisource.org/wiki/Til_masalasi> — `w:adabiyot-poetika-til, m:behbudiy`
- Fitrat. Tilimiz (1919) — Vikimanba — <https://wikisource.org/wiki/Tilimiz> — `w:adabiyot-poetika-til, m:fitrat`
- Choʻlpon. Turkistonda matbuot (Vikimanba) — <https://wikisource.org/wiki/Turkistonda_matbuot> — `w:matbuot-maktab-teatr, m:avloniy, m:cholpon`
- Vikimanba: Turkiy Guliston yoxud axloq (1917-yilgi 2-nashr; 1-nashr 1913 — Oltinbek 2024) — <https://wikisource.org/wiki/Turkiy_Guliston_yoxud_axloq> — `w:matbuot-maktab-teatr, w:muallif-avloniy, m:avloniy`
- Wikisource, Author:Elbek —  Matnlar — <https://wikisource.org/wiki/Tutqun_qushcha> — `m:elbek`

#### yuz.uz (26)

- G. Majid kitobi haqida (yuz.uz, 08.07.2022) — <https://yuz.uz/oz/news/adabiyot-kitob-javonini-bezovchi-ajoyib-bir-ganjina-nashrdan-chiqdi> — `w:muallif-ibrat`
- Nafas Shodmonov, "Behbudiyning vasiyati" — yuz.uz — <https://yuz.uz/oz/news/behbudiyning-vasiyati> — `w:muallif-behbudiy, m:behbudiy`
- yuz.uz: Birinchi oʻzbek agronomi Abduvahhob Murodiy — <https://yuz.uz/oz/news/birinchi-ozbek-agronomi-abduvahhob-murodiy-nimalarni-orzu-qilgan-> — `w:matbuot-maktab-teatr`
- yuz.uz (kirill): oʻsha maqola — <https://yuz.uz/oz/news/mahmudxoja-behbudiy-turkiston-jadidchilik-harakatining-yolboshchisi-milliy-marifat-rahnamosi> — `w:matbuot-maktab-teatr`
- Millat maʼrifatining unutilmas siymosi (N. Aslonov) — Yuz.uz, 2023 — <https://yuz.uz/oz/news/millat-marifatining-unutilmas-siymosi> — `w:muallif-munavvarqori, m:munavvarqori`
- Oʻsha maqola (kirill) — <https://yuz.uz/oz/news/mingdin-biri--qoyubdur-olamga-bir-nishona> — `w:muallif-ibrat`
- По пути джадидов (Yuz.uz, ru; qidiruv parchasi) — <https://yuz.uz/ru/news/po-puti-djadidov> — `w:taʼlim-pedagogika`
- 110 yilda xalqqa qaytgan kitob (Sh. Nazarova) — Yuz.uz — <https://yuz.uz/uz/news/110-yilda-xalqqa-qaytgan-kitob> — `w:muallif-munavvarqori, w:muallif-tavallo, m:munavvarqori, m:tavallo`
- Aruzning mangu va oʻlmas ohanglari — Yuz.uz (qidiruv parchasi) — <https://yuz.uz/uz/news/aruzning-mangu-va-olmas-ohanglari> — `w:adabiyot-poetika-til`
- Birinchi oʻzbek agronomi Abduvahhob Murodiy nimalarni orzu qilgan (Yuz.uz) — <https://yuz.uz/uz/news/birinchi-ozbek-agronomi-abduvahhob-murodiy-nimalarni-orzu-qilgan-> — `w:taʼlim-pedagogika`
- Ulugʻbek Dolimov, Buyuk ijtimoiy ish — Yangi Oʻzbekiston (yuz.uz) — <https://yuz.uz/uz/news/buyuk-ijtimoiy-ish> — `w:muallif-avloniy, m:avloniy`
- N. Karimov, «Choʻlpon va Gʻulom Zafariy» — yuz.uz, 2023-yil 2-mart — <https://yuz.uz/uz/news/cholpon-va-gulom-zafariy> — `m:zafariy`
- Choʻlpon va turk adabiy hayoti — yuz.uz (qidiruv parchasi) — <https://yuz.uz/uz/news/cholpon-va-turk-adabiy-hayoti> — `w:jadidchilik-tarixi`
- Dunyoda turmoq uchun dunyoviy fan va ilm lozim (Yuz.uz, 2025) — <https://yuz.uz/uz/news/dunyoda-turmoq-uchun-dunyoviy-fan-va-ilm-lozim> — `w:taʼlim-pedagogika`
- Jadidchilik va oʻzbek matbuoti taraqqiyotining faol namoyondasi (yuz.uz) — <https://yuz.uz/uz/news/jadidchilik-va-ozbek-matbuoti-taraqqiyotining-faol-namoyondasi> — `w:boshqa-jadidlar, w:matbuot-maktab-teatr`
- Jabborov N. Jadidchilikni nega va qanday oʻrganishimiz kerak — Yuz.uz / „Yangi Oʻzbekiston“, 2023 — <https://yuz.uz/uz/news/jadidchilikni-nega-va-qanday-organishimiz-kerak> — `w:adabiyot-poetika-til`
- Jadidona ruhiyatli milliy matbuot — Yuz.uz (qidiruv parchasi) — <https://yuz.uz/uz/news/jadidona-ruhiyatli-milliy-matbuotodamlar-ongu-shuurining-quyoshi-vijdon-ovozi-bolishni-orzulagan-edi> — `w:adabiyot-poetika-til`
- Mahmudxoʻja Behbudiy — Turkiston jadidchilik harakatining yoʻlboshchisi — Yuz.uz — <https://yuz.uz/uz/news/mahmudxoja-behbudiy-turkiston-jadidchilik-harakatining-yolboshchisi-milliy-marifat-rahnamosi> — `w:adabiyot-poetika-til, w:matbuot-maktab-teatr, w:muallif-behbudiy, w:taʼlim-pedagogika, m:behbudiy`
- Maʼrifiy islohot jonkuyarlari — yuz.uz (qidiruv parchasi) — <https://yuz.uz/uz/news/marifiy-islohot-jonkuyarlari> — `w:jadidchilik-tarixi, w:taʼlim-pedagogika, m:ayniy`
- D. Alimova. “Mingdin biri qoʻyubdur olamgʻa bir nishona” (yuz.uz, 25.03.2021) — <https://yuz.uz/uz/news/mingdin-biri--qoyubdur-olamga-bir-nishona> — `w:muallif-ibrat, m:ibrat`
- Mirzo Sirojiddin — yosh maʼrifatparvar (yuz.uz) — <https://yuz.uz/uz/news/mirzo-sirojiddin--yosh-marifatparvar> — `w:boshqa-jadidlar`
- U. Dolimov. “Mohir publitsist, matbaachi va noshir” (yuz.uz, 24.06.2022) — <https://yuz.uz/uz/news/mohir-publitsist-matbaachi-va-noshir> — `w:muallif-ibrat, m:ibrat`
- Qayu millatda maktab oʻlmasa, beshak xarob oʻlgay… — Yuz.uz (faqat sarlavhasi, uz Vikipediya orqali) — <https://yuz.uz/uz/news/qayu-millatda-maktab-olmasa-beshak-xarob-olgay> — `w:muallif-hamza, w:taʼlim-pedagogika, m:hamza`
- Qodiriy maʼrifati — yuz.uz (qidiruv parchasi) — <https://yuz.uz/uz/news/qodiriy-marifati--ozlikni-anglash-ehtiyoji> — `w:jadidchilik-tarixi, m:qodiriy`
- «Sadoi Fargʻona» 110 yil (yuz.uz) — <https://yuz.uz/uz/news/sadoi-fargona-gazetasining-ilk-soni-chop-etilganiga-110-yil-boldi-> — `w:boshqa-jadidlar, m:tavallo`
- yuz.uz: Yoshlarni ilm-fanda yuksalishga undagan maʼrifatparvar (Fitrat) — <https://yuz.uz/uz/news/yoshlarni-ilm-fanda-yuksalishga-undagan-marifatparvar> — `w:matbuot-maktab-teatr, w:muallif-fitrat, m:fitrat`

#### inlibrary.uz (21)

- Inlibrary.uz — "Kumak" jamiyati haqida maqola (qidiruv parchasi) — <https://inlibrary.uz/index.php/ajsshr/article/view/38433> — `w:taʼlim-pedagogika`
- Ilk jadid maktablari haqidagi maqola (inlibrary.uz, qidiruv parchasi) — <https://inlibrary.uz/index.php/arims/article/view/49841> — `w:jadidchilik-tarixi`
- Inlibrary.uz — Fitratning "Munozara"si haqida maqola (qidiruv parchasi) — <https://inlibrary.uz/index.php/cajar/article/view/127461> — `w:taʼlim-pedagogika`
- inlibrary.uz maqolasi (Hirot bosh konsulligi; faqat qidiruv parchasi) — <https://inlibrary.uz/index.php/ijai/article/view/92363> — `w:muallif-avloniy, m:avloniy`
- Inlibrary.uz — Avloniy "Turkiy guliston" haqida (qidiruv parchasi) — <https://inlibrary.uz/index.php/ijai/article/view/98033> — `w:taʼlim-pedagogika`
- Jadid sheʼriyati vazni haqida maqola (qidiruv parchasi; 403) — <https://inlibrary.uz/index.php/ijsr/article/view/69266> — `w:adabiyot-poetika-til`
- inlibrary.uz (Ustodi avval haqida maqola) — <https://inlibrary.uz/index.php/jasss/article/view/114169> — `w:matbuot-maktab-teatr, w:taʼlim-pedagogika`
- Qidiruv natijalari (sahifalar ochilmadi) — <https://inlibrary.uz/index.php/mead/article/view/86055> — `m:munavvarqori`
- [Qurbonova 2025, «Doxunda»] — <https://inlibrary.uz/index.php/mead/article/view/94988> — `m:ayniy`
- Shoʻroi Islomiya asoschilari haqidagi maqola (inlibrary.uz, qidiruv parchasi) — <https://inlibrary.uz/index.php/mpttp/article/view/59704> — `w:jadidchilik-tarixi`
- Inlibrary.uz — Munavvarqori darsliklari haqida (qidiruv parchasi) — <https://inlibrary.uz/index.php/science-research/article/view/20618> — `w:taʼlim-pedagogika`
- inlibrary.uz (Mirzo Siroj) — <https://inlibrary.uz/index.php/science-research/article/view/29502> — `w:boshqa-jadidlar`
- inlibrary.uz (Saʼdiy darsligi) — <https://inlibrary.uz/index.php/science-research/article/view/34820> — `w:boshqa-jadidlar`
- Fitratning adabiy-nazariy risolalari haqida maqola (qidiruv parchasi) — <https://inlibrary.uz/index.php/science-research/article/view/65968> — `w:adabiyot-poetika-til`
- Inlibrary.uz — Turkistonda xotin-qizlar taʼlimi (qidiruv parchasi) — <https://inlibrary.uz/index.php/science-shine/article/view/98853> — `w:taʼlim-pedagogika`
- Hamza haqida maqola (qidiruv parchasi) — <https://inlibrary.uz/index.php/scin/article/view/87745> — `w:adabiyot-poetika-til, w:matbuot-maktab-teatr`
- Begali Qosimov haqida maqola (qidiruv parchasi) — <https://inlibrary.uz/index.php/sies/article/view/106469> — `w:adabiyot-poetika-til`
- inlibrary.uz (Poʻlatxoʻjayev) — <https://inlibrary.uz/index.php/tafps/article/view/51338> — `w:boshqa-jadidlar`
- inlibrary.uz maqolasi (Sh. Rizayevga havola, qidiruv parchasi) — <https://inlibrary.uz/index.php/tinnint/article/view/95399> — `w:muallif-behbudiy`
- inlibrary.uz maqolasi (Boltaboyev haqida; qidiruv parchasi) — <https://inlibrary.uz/index.php/yosc/article/view/108918> — `w:muallif-fitrat`
- inlibrary.uz maqolasi (taxalluslar; faqat qidiruv parchasi) — <https://inlibrary.uz/index.php/yosc/article/view/87756> — `w:muallif-avloniy, m:avloniy`

#### oriens.uz (21)

- O. Madiyeva (2022) — <https://oriens.uz/en/journal/article/abdulla-avloniyning-ozbek-tamaddunidagi-orni-xususida-bazi-mulohazalar/> — `m:avloniy`
- R. Sharipov. Turkistonda milliy matbuotning shakllanishi va jadidchilik (Oriens, 2023) — <https://oriens.uz/media/conferencearticles/60._Rustam_SHARIPOV_368-372.pdf> — `w:matbuot-maktab-teatr, m:avloniy`
- Sh. Mirzayeva. Jadid maʼrifatparvarlari davrida oʻzbek teatrining ilk bosqichi (Oriens, 2024) — <https://oriens.uz/media/conferencearticles/86._Mirzayeva_Shahrizoda_Shuhratjon_qizi_522-525.pdf> — `w:matbuot-maktab-teatr, m:avloniy`
- Oriens.uz — Boltaboyeva H. H. maqolasi (Istanbuldagi talabalar soni; qidiruv parchasi) — <https://oriens.uz/media/journalarticles/14._Boltaboyeva_H.H._130-139.pdf> — `w:taʼlim-pedagogika`
- Shomuqimov L.R. maqolasi (Oriens) — <https://oriens.uz/media/journalarticles/15_Shomuqimov_L.R._101-109.pdf> — `w:boshqa-jadidlar`
- Togʻayev T. maqolasi (Oriens, 10–15) — <https://oriens.uz/media/journalarticles/2_Togayev_Tolqin_Mamanazarovich_10-15.pdf> — `w:boshqa-jadidlar`
- S. Baratova (oriens.uz, faqat qidiruv parchasi) — <https://oriens.uz/media/journalarticles/41_Sevara_Baratova_300-304.pdf> — `m:hamza`
- D. Muxamatova, «Abdulla Avloniy asarlarining lingvopoetikasi xususida» (2022):  (PDF — <https://oriens.uz/media/journalarticles/43_Muxamatova_Dilbar_Xayot_qizi_316-320.pdf> — `m:avloniy`
- M. Azizov maqolasi (“Tarixi Fargʻona”dagi arabizmlar; qidiruv parchasi) — <https://oriens.uz/media/journalarticles/53_Murodjon_Azizov_387-393.pdf> — `w:muallif-ibrat, m:ibrat`
- M. Kadirov maqolasi (ruscha, qidiruv parchasi) — oriens.uz — <https://oriens.uz/media/journalarticles/69_М.Кадиров_470-474.pdf> — `w:muallif-behbudiy`
- N. Roʻziyeva. “Isʼhoqxon toʻra Ibrat shoir va olim, noshir va pedagog, din arbobi va tarjimon” (Oriental Renaissance, 1(11), 2021) — <https://oriens.uz/media/journalarticles/88_Roziyeva_Nasiba_Kenjayevna_678-685.pdf> — `w:muallif-ibrat, m:ibrat`
- O. Boltaboyeva. “Ibrat adabiy merosining qoʻlyozma, toshbosma va nashriy manbalari xususida” (Oriental Renaissance, 5(5), 2025) — <https://oriens.uz/media/journalarticles/94_Boltaboyeva_Ozodaxon_Yuldashaliyevna_644-650.pdf> — `w:muallif-ibrat, m:ibrat`
- D. Muxamatova, «Abdulla Avloniy asarlarining lingvopoetikasi xususida» (2022) — <https://www.oriens.uz/en/journal/article/abdulla-avloniy-asarlarining-lingvopoetikasi-xususida/> — `m:avloniy`
- Oʻsha maqola sahifasi — <https://www.oriens.uz/en/journal/article/ibrat-adabiy-merosining-qolyozma-toshbosma-va-nashriy-manbalari-xususida/> — `w:muallif-ibrat`
- Oʻsha maqola sahifasi — <https://www.oriens.uz/en/journal/article/ishoqxon-tora-ibrat-shoir-va-olim-noshir-va-pedagog-din-arbobi-va-tarjimon/> — `w:muallif-ibrat`
- Togʻayev T. M. Oʻzbek jadid yetakchilarining til va yozuv masalalariga munosabati // Oriental Renaissance, 3(12), 2023 — <https://www.oriens.uz/media/journalarticles/12_Togayev_Tolqin_Mamanazarovich_72-77.pdf> — `w:adabiyot-poetika-til, w:boshqa-jadidlar, w:muallif-botu, w:muallif-elbek, m:botu, m:elbek, m:fitrat`
- N. Furkatova, "Mahmudxo‘ja Behbudiyning publitsistik va ijtimoiy-siyosiy faoliyatida…" — Oriental Renaissance 6(1), 2026 — <https://www.oriens.uz/media/journalarticles/2_Furkatova_Nilufar_Furkat_qizi_11-15.pdf> — `w:muallif-behbudiy`
- Otaxanova M. Chustiy hayoti va ijodining oʻrganilishiga doir // Oriental Renaissance, 2026 — <https://www.oriens.uz/media/journalarticles/50_Otaxanova__Mahmuda_Mamadaliyevna_388-395.pdf> — `w:adabiyot-poetika-til, w:muallif-botu, w:muallif-elbek, m:botu, m:elbek`
- *(sarlavha bazada qayd etilmagan)* — <https://www.oriens.uz/media/journalarticles/50_Umarov_Davron_Odiljon_ogli_342-347.pdf> — `m:cholpon`
- Togʻayev T. M. „Чиғатой гурунги“ фаолияти тўғрисида баъзи мулоҳазалар // Oriental Renaissance, 2(9), 2022 — <https://www.oriens.uz/media/journalarticles/57_Тоғаев_Тўлқин_Маманазарович_422-429.pdf> — `w:adabiyot-poetika-til, w:muallif-elbek, m:elbek, m:fitrat`
- Bazarova X. „Choʻlponning munojotlari“ga taxmislar // Oriental Renaissance, 2025 — <https://www.oriens.uz/media/journalarticles/5_Xolida_Ergashevna_Bazarova_33-50.pdf> — `w:adabiyot-poetika-til`

#### kh-davron.uz (19)

- kh-davron.uz saytidagi «Ayniy» boʻyicha qidiruv — <https://kh-davron.uz/?s=Ayniy> — `w:muallif-ayniy`
- Abdulla Qodiriy. 20-yillar felyetonlari — <https://kh-davron.uz/kutubxona/multimedia/abdulla-qodiriy-20-yillar-felyetonlari.html> — `w:muallif-qodiriy, m:qodiriy`
- Abdulla Qodiriy. O'tgan kunlar. Roman, film, serial, spektakl — <https://kh-davron.uz/kutubxona/multimedia/abdulla-qodiriy-otgan-kunlar-roman-film-spektakl.html> — `w:muallif-qodiriy`
- «Diydor» teatr-studiyasi taqdim etadi: Gʻulom Zafariy. Halima (N. Umarova taqrizi) — kh-davron.uz — <https://kh-davron.uz/kutubxona/multimedia/gulom-zafariy-halima.html> — `w:muallif-zafariy, m:zafariy`
- Ibrohim Haqqul. Ulugʻlarni ulugʻlar tiriltirgay & Sadriddin Ayniyning uch kitobi — kh-davron.uz — <https://kh-davron.uz/kutubxona/multimedia/ibrohim-haqqul-uluglarni-uluglar-tiriltirgay.html> — `w:muallif-ayniy, m:ayniy`
- Umarali Normatov. «O'tgan kunlar» va qo'rquv saltanati — <https://kh-davron.uz/kutubxona/multimedia/umarali-normatov-otgan-kunlar-va-qorquv-saltanati.html> — `w:muallif-qodiriy, m:qodiriy`
- Xurshid Do'stmuhammad. Abdulla Qodiriy haqida — <https://kh-davron.uz/kutubxona/multimedia/xurshid-dostmuhammad-abdulla-qodiriy-haqida.html> — `w:muallif-qodiriy, m:qodiriy`
- Abdulhamid Choʻlpon. Adabiyot nadir? — kh-davron.uz — <https://kh-davron.uz/kutubxona/uzbek/abdulhamid-cholpon.html> — `w:muallif-cholpon, m:cholpon`
- Maftuna Shomurodova. Sadriddin Ayniy — mumtoz adabiyot tadqiqotchisi — kh-davron.uz — <https://kh-davron.uz/kutubxona/uzbek/maftuna-shomurodova-sadriddin-ayniy-mumtoz-adabiyot-tadqiqotchisi.html> — `w:muallif-ayniy, m:ayniy`
- Tekshirilgan, ammo Ayniy haqida maʼlumot topilmagan — <https://kh-davron.uz/kutubxona/uzbek/memuarlar/sharifjon-ahmedov-ayniy-siymolar-muvoziyligi-borxesning-xaroba-doiralariga-boglama.html> — `w:muallif-ayniy`
- Naim Karimov. Abdulla Qodiriy qayerda o'qigan? — <https://kh-davron.uz/kutubxona/uzbek/naim-karimov-abdulla-qodiriy-qayerda-oqigan.html> — `w:muallif-qodiriy, m:qodiriy`
- Abdulla Qodiriy: O'zbek tili kambag'al emas… — <https://kh-davron.uz/kutubxona/uzbek/ona-tili/abdulla-qodiriy-ozbek-tili-kambagal-emas.html> — `w:muallif-qodiriy, m:qodiriy`
- Sadriddin Ayniy tavalludining 145 yilligiga bagʻishlov — kh-davron.uz — <https://kh-davron.uz/kutubxona/uzbek/sadriddin-ayniy-145.html> — `w:muallif-ayniy, m:ayniy`
- Shodmon Vohidov & Enver Xurshut. Abdulla Qodiriy va tarixchi Hakimxon to'ra — <https://kh-davron.uz/kutubxona/uzbek/shodmon-vohidov-hakimxon-tora-va-uning-muntaxab-at-tavorix-asari-enver-xurshut-abdulla-qodiriy-va-tarixchi-hakimxon-tora.html> — `w:muallif-qodiriy`
- Ulugʻbek Hamdam. Hamza – yangi oʻzbek adabiyoti asoschilaridan birimi? — <https://kh-davron.uz/kutubxona/uzbek/ulugbek-hamdam-hamza-yangi-ozbek-adabiyoti-asoschilaridan-birimi.html> — `w:muallif-hamza, m:hamza`
- Mahmudxoʻja Behbudiy. Maqolalar — Xurshid Davron kutubxonasi — <https://kh-davron.uz/yangiliklar/mahmudxoja-behbudiy-maqolalar.html> — `w:muallif-behbudiy, m:behbudiy`
- Begali Qosimov, "Maxmudxo'ja Behbudiy (1875–1919)" — Xurshid Davron kutubxonasi — <https://kh-davron.uz/yangiliklar/muborak-kin/19-yanvar-buyuk-marifastchi-mahmudxoja-behbudiy-1875-1919-tugilgan-kun.html> — `w:muallif-behbudiy, m:behbudiy`
- Abdulla Qodiriy. Haqiqiy yozuvchi bo'lmoq uchun — <https://kh-davron.uz/yangiliklar/muborak-kin/abdulla-qodiriy-haqiqiy-yozuvchi-bolmoq-uchun.html> — `w:muallif-qodiriy, m:qodiriy`
- Ulugʻbek Dolimov. Hamza Hakimzoda Niyoziy; Hamza. Tarjimai hol (1926) — Xurshid Davron kutubxonasi — <https://kh-davron.uz/yangiliklar/muborak-kin/ulugbek-dolimov-hamza-hakimzoda-niyoziy.html> — `w:muallif-hamza, m:hamza`

#### uza.uz (19)

- UzA: Abdulla Avloniy jamiyatdagi ijtimoiy illatlarga qarshi qanday kurashgan? — <https://uza.uz/ar/posts/abdulla-avloniy-jamiyatdagi-ijtimoiy-illatlarga-qarshi-qanday-kurashgan_876309> — `w:matbuot-maktab-teatr, w:muallif-avloniy, m:avloniy`
- F. Ubaydullayev, «Choʻlpon — yurt, millat ozodligi kurashchisi» — UzA, 2026-10-03 — <https://uza.uz/ar/posts/cholpon-yurt-millat-ozodligi-kurashchisi_916739> — `w:muallif-cholpon, m:cholpon`
- Alisher Egamberdiyev, "Ибратхонага айланган томошагоҳ…" — UzA — <https://uza.uz/ar/posts/ibratxonaga-aylangan-tomoshagoh-behbudiy-turkiston-uchun-nega-aynan-teatrni-tanladi_875558> — `w:muallif-behbudiy, m:behbudiy`
- UzA: «Ibratxona»ga aylangan tomoshagoh — <https://uza.uz/ar/posts/ibratxonaga-aylangan-tomoshagoh-behbudiy-turkiston-uchun-nega-aynan-teatrni-tanladi_875559> — `w:matbuot-maktab-teatr`
- UzA: Jadid matbuoti: «Samarqand» gazetasi va «Oyina» jurnali — <https://uza.uz/ar/posts/jadid-matbuoti-samarqand-gazetasi-va-oyina-jurnali-video_775715> — `w:matbuot-maktab-teatr`
- Jadidchilik harakatining tarixiy-pedagogik ahamiyati — uza.uz (qidiruv parchasi) — <https://uza.uz/ar/posts/jadidchilik-harakatining-tarixiy-pedagogik-ahamiyati_883645> — `w:jadidchilik-tarixi`
- UzA: Jadidlarning matbuot haqida aytgan fikrlari bugun ham dolzarb — <https://uza.uz/ar/posts/jadidlarning-matbuot-haqida-aytgan-fikrlari-bugun-ham-dolzarb_875189> — `w:matbuot-maktab-teatr`
- UzA: Jadidlarning xayriya jamiyatlari: «Jamiyati imdodiya» — <https://uza.uz/ar/posts/jadidlarning-xayriya-jamiyatlari-jamiyati-imdodiya-video_879522> — `w:matbuot-maktab-teatr, w:taʼlim-pedagogika`
- UzA (kirill): Жадидларнинг хайрия жамиятлари — <https://uza.uz/ar/posts/jadidlarning-xayriya-zhamiyatlari-jamiyati-imdodiya-video_879521> — `w:matbuot-maktab-teatr`
- Shuhrat Hayitov, "Маҳмудхўжа Беҳбудий – она юрт фидойиси" — UzA — <https://uza.uz/ar/posts/mahmudxozha-behbudiy-ona-yurt-fidoyisi_191156> — `w:muallif-behbudiy`
- Maktab, yoshlar kelajagi, taʼlim, millat taqdiri Munavvarqori hayotining mazmuni edi — UzA, 2023 — <https://uza.uz/ar/posts/maktab-yoshlar-kelajagi-talim-millat-taqdiri-munavvarqori-hayoting-mazmuni-edi_540397> — `w:muallif-munavvarqori, w:taʼlim-pedagogika, m:munavvarqori`
- Maʼrifatparvar alloma Ibrat merosi yod etildi (UzA, 31.08.2026) — <https://uza.uz/ar/posts/marifatparvar-alloma-ibrat-merosi-yod-etildi_902249> — `w:muallif-ibrat, m:ibrat`
- Odamlarning ogʻirini yengil qilish… (UzA, 04.05.2018) — <https://uza.uz/ar/posts/odamlarning-og-irini-yengil-qilish-barchasohalarda-adolatni--04-05-2018> — `w:muallif-ibrat, m:ibrat`
- Qatagʻon qurbonlari xotirasi — tarixiy adolat va milliy xotira sabogʻi — uza.uz (2026-10-06) — <https://uza.uz/ar/posts/qatagon-qurbonlari-xotirasi-tarixiy-adolat-va-milliy-xotira-sabogi_917966> — `w:jadidchilik-tarixi`
- UzA: Fitrat va uning «Abulfayzxon» fojiasi — <https://uza.uz/ar/posts/taxt-soyasidagi-haqiqat-fitrat-va-uning-abulfayzxon-fojiasi-haqida_876856> — `w:matbuot-maktab-teatr, w:muallif-fitrat, m:fitrat`
- Jadidlar merosi davlat muzeyini tashkil etish toʻgʻrisida (Prezident qarori, 30.05.2024) — <https://uza.uz/posts/603428> — `w:jadidchilik-tarixi`
- Jadidlar ayollarning ijtimoiy-siyosiy hayotdagi rolini qanday baholagan? (UzA, 2025) — <https://uza.uz/posts/681610> — `w:taʼlim-pedagogika, m:behbudiy`
- Мунаввар Қори илм-маърифат тарғиботчиси — UzA, 2025 — <https://uza.uz/posts/700904> — `w:muallif-munavvarqori, m:munavvarqori`
- Namangan davlat chet tillari institutining tashkil etilishi (UzA) — <https://www.uza.uz/ru/posts/ob-obrazovanii-namanganskogo-gosudarstvennogo-instituta-inostrannyx-yazykov-imeni-isxokxona-ibrata_380033> — `w:muallif-ibrat, m:ibrat`

#### ru.wikipedia.org (17)

- Ruscha Vikipediya qidiruvi (natija yoʻq) — <https://ru.wikipedia.org/w/index.php?search=Эльбек+Машрик+Юнусов&ns0=1> — `w:muallif-elbek`
- Айни, Садриддин (manba kodi, adabiyotlar) — Rus Vikipediyasi — <https://ru.wikipedia.org/w/index.php?title=Айни,_Садриддин&action=raw> — `w:muallif-ayniy`
- Абдулла Кадыри — Википедия (ruscha) — <https://ru.wikipedia.org/wiki/Абдулла_Кадыри> — `w:muallif-qodiriy, m:qodiriy`
- Авлони, Абдулла — Русская Википедия — <https://ru.wikipedia.org/wiki/Авлони,_Абдулла> — `w:muallif-avloniy, m:avloniy`
- Айни, Садриддин — Rus Vikipediyasi — <https://ru.wikipedia.org/wiki/Айни,_Садриддин> — `w:muallif-ayniy, m:ayniy`
- Бехбуди, Махмудходжа — Русская Википедия — <https://ru.wikipedia.org/wiki/Бехбуди,_Махмудходжа> — `w:muallif-behbudiy, m:behbudiy`
- Джадидизм — Википедия (ru) — <https://ru.wikipedia.org/wiki/Джадидизм> — `w:jadidchilik-tarixi`
- Tekshirilgan, ammo Ayniy haqida maʼlumot topilmagan — <https://ru.wikipedia.org/wiki/Младобухарцы> — `w:muallif-ayniy`
- Мунаввар Кары Абдурашидханов — Русская Википедия — <https://ru.wikipedia.org/wiki/Мунаввар_Кары_Абдурашидханов> — `w:muallif-munavvarqori, m:munavvarqori`
- Смерть ростовщика (фильм) — Rus Vikipediyasi — <https://ru.wikipedia.org/wiki/Смерть_ростовщика> — `w:muallif-ayniy, m:ayniy`
- *(sarlavha bazada qayd etilmagan)* — <https://ru.wikipedia.org/wiki/Тавалло> — `w:muallif-tavallo`
- Узбекская письменность — Русская Википедия — <https://ru.wikipedia.org/wiki/Узбекская_письменность> — `w:adabiyot-poetika-til`
- Фитрат, Абдурауф — Википедия (ruscha) — <https://ru.wikipedia.org/wiki/Фитрат,_Абдурауф> — `w:muallif-fitrat, m:fitrat`
- Хамза Хакимзаде Ниязи — Википедия (ruscha) — <https://ru.wikipedia.org/wiki/Хамза_Хакимзаде_Ниязи> — `w:muallif-hamza, m:hamza`
- Бату (поэт) — Википедия (ruscha; «Ходиев, Махмуд» yoʻnaltirishi) — <https://ru.wikipedia.org/wiki/Ходиев,_Махмуд> — `w:muallif-botu, m:botu`
- Чулпан (значения) — Русская Википедия — <https://ru.wikipedia.org/wiki/Чулпан> — `w:muallif-cholpon`
- Чулпан, Абдулхамид Сулейман угли — Русская Википедия — <https://ru.wikipedia.org/wiki/Чулпан,_Абдулхамид_Сулейман_угли> — `w:muallif-cholpon, m:cholpon`

#### kun.uz (16)

- Berlin archive reveals rare documents on Uzbekistan and Turkestan (Kun.uz, en, 2026; qidiruv parchasi) — <https://kun.uz/en/news/2026/08/11/berlin-archive-reveals-rare-documents-on-uzbekistan-and-turkestan> — `w:taʼlim-pedagogika`
- 2017-yilda Choʻlpon tavalludining 120 yilligi nishonlanadi — kun.uz (qidiruv parchasi) — <https://kun.uz/news/2016/11/15/2017-jilda-culpon-tavalludining-120-jilligi-nisonlanadi> — `w:jadidchilik-tarixi`
- Lola Karimova Munavvar qori Abdurashidxonovni yodga oldi — Kun.uz, 2017 — <https://kun.uz/news/2017/03/19/lola-karimova-munavvar-kori-abdurasidhonovni-edga-oldi> — `w:muallif-munavvarqori, m:munavvarqori`
- [oqlanish 1956 — qidiruv parchasi] — <https://kun.uz/news/2018/02/21/abdulla-kodirijning-ovlisi-nega-ali-am-muzejga-ajlantirilmagan> — `m:qodiriy`
- Abdulla Qodiriy otilgan tun — kun.uz (qidiruv parchasi) — <https://kun.uz/news/2019/10/05/abdulla-qodiriy-otilgan-tun-adibning-songgi-iltijosi-nima-edi> — `w:jadidchilik-tarixi`
- Kun.uz. Bugun Qodiriyning tug'ilgan kuni — biz uning o'limidan saboq chiqara oldikmi? (2020-04-11) — <https://kun.uz/news/2020/04/11/bugun-qodiriyning-tugilgan-kuni-biz-uning-olimidan-saboq-chiqara-oldikmi> — `w:muallif-qodiriy, m:qodiriy`
- kun.uz: Jadidlar barcha mavzular uchun ochiq edi (B. Irzayev bilan suhbat, 2020) — <https://kun.uz/news/2020/06/27/jadidlar-barcha-mavzular-uchun-ochiq-edi-tarixchi-bilan-milliy-matbuot-tarixi-va-qatagonlar-haqida-suhbat> — `w:matbuot-maktab-teatr`
- Lotin yozuvli oʻzbek alifbosi: oʻzgarishlar xronologiyasi — Kun.uz, 2021 — <https://kun.uz/news/2021/04/06/lotin-yozuvli-ozbek-alifbosi-ozgarishlar-xronologiyasi> — `w:adabiyot-poetika-til`
- Biri otilgan, ikkinchisi surgun qilingan: Germaniyada o‘qigani uchun qatag‘on qilingan o‘zbek ayollari (Kun.uz, 2022) — <https://kun.uz/news/2022/05/03/biri-otilgan-ikkinchisi-surgun-qilingan-germaniyada-oqigani-uchun-qatagon-qilingan-ozbek-ayollari> — `w:taʼlim-pedagogika`
- Kun.uz. Abdulla Qodiriy «hukumatni obro'sizlantirish»da ayblanganidan qariyb 100 yil o'tib oqlandi (2023-12-02) — <https://kun.uz/news/2023/12/02/abdulla-qodiriy-hukumatni-obrosizlantirishda-ayblanganidan-100-yil-otib-oqlandi> — `w:muallif-qodiriy, m:qodiriy`
- Munavvarqori haqida (Kun.uz, 2024) — <https://kun.uz/news/2024/01/05/unga-hech-kim-toshkentda-sen-deb-gapirgan-emas-munavvar-qori-abdurashidxonovning-hayoti-va-faoliyatiga-nazar> — `w:boshqa-jadidlar, w:jadidchilik-tarixi, w:muallif-elbek, w:muallif-munavvarqori, w:taʼlim-pedagogika, m:elbek, m:munavvarqori`
- Umri qisqa boʻlgan Turkiston muxtoriyati… (Kun.uz, 2024) — <https://kun.uz/news/2024/02/21/umri-qisqa-bolgan-turkiston-muxtoriyati-uning-yetakchilari-taqdiri-qanday-kechgan> — `w:boshqa-jadidlar, w:jadidchilik-tarixi`
- "Mahmudxoʻja Behbudiy tavalludining 150 yilligi nishonlanadi" — kun.uz — <https://kun.uz/news/2025/01/04/mahmudxoja-behbudiy-tavalludining-150-yilligi-nishonlanadi> — `w:muallif-behbudiy`
- 100 yil oldingi tashabbuslar: jadidlar kambagʻallikka qarshi qanday kurashgan edi (Kun.uz, 2026) — <https://kun.uz/news/2026/04/02/100-yil-oldingi-tashabbuslar-jadidlar-kambagallikka-qarshi-qanday-kurashgan-edi> — `w:taʼlim-pedagogika`
- kun.uz: «Mushtum» faoliyati qayta tiklanadi (2021) — <https://www.kun.uz/news/2021/10/07/ozbekistonning-yagona-hajv-satira-jurnali-mushtum-faoliyati-qayta-tiklanadi> — `w:matbuot-maktab-teatr`
- 4269-sonli soxta jinoyat ishi: Fitrat — kun.uz (2022-04-29) — <https://www.kun.uz/news/2022/04/29/4269-sonli-soxta-jinoyat-ishi-fitrat-yurtga-ozodlik-istagan-olim-va-siyosatchi> — `w:jadidchilik-tarixi, w:muallif-fitrat, m:fitrat`

#### ziyouz.uz (15)

- Siddiki Ajzi (1864–1927) (Ziyouz; ochilmadi) — <https://www.ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/102-siddiki-ajzi-1864-1927> — `w:boshqa-jadidlar`
- Abdulhamid Chulpon (1897–1938) — Ziyouz (qidiruv parchasi; sahifa 403 qaytardi) — <https://www.ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/91-abdulhamid-chulpon-1897-1938> — `w:adabiyot-poetika-til, w:muallif-cholpon, m:cholpon`
- Ishoqhon Ibrat (1862–1937) (ziyouz.uz; faqat qidiruv parchasi, sahifa 403) — <https://ziyouz.uz/en/uzbek-literature/39-literature-of-national-renaissance-period/82-ishoqhon-ibrat-1862-1937> — `w:muallif-ibrat, m:ibrat`
- Munavvarqori Abdurashidhon (1878–1931) — ziyouz.uz — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/100-munavvarqori-abdurashidhon-1878-1931> — `w:jadidchilik-tarixi, w:matbuot-maktab-teatr, w:muallif-munavvarqori, w:taʼlim-pedagogika, m:munavvarqori`
- *(sarlavha bazada qayd etilmagan)* — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/93-abdulla-qodiriy-1894-1938> — `w:muallif-qodiriy`
- ziyouz.uz: Hamza Hakimzoda Niyoziy (1889–1929) — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/94-hamza-hakimzoda-niyozi-1889-1929> — `w:matbuot-maktab-teatr, m:hamza`
- Abdurauf Fitrat (1886–1938) — ziyouz.uz (inglizcha; faqat qidiruv parchasi, sahifa 403) — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/95-abdurauf-fitrat-1886-1938> — `w:muallif-fitrat, m:fitrat`
- Sidqiy Hondayliqiy (1884–1934) (Ziyouz; ochilmadi) — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/96-sidqiy-hondayliqiy-1884-1934> — `w:boshqa-jadidlar`
- Hoji Muin (1883–1942) (Ziyouz; ochilmadi) — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/97-hoji-muin-1883-1942> — `w:boshqa-jadidlar`
- Muhammadsharif Sofizoda (1880–1937) (Ziyouz; ochilmadi) — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/98-muhammadsharif-sofizoda-1880-1937> — `w:boshqa-jadidlar`
- ziyouz.uz: Abdulla Avloniy (1878–1934) — <https://ziyouz.uz/en/uzbek-literature/40-literature-of-jadids-period/99-abdulla-avloni-1878-1934> — `w:matbuot-maktab-teatr, w:muallif-avloniy, m:avloniy`
- Begali Qosimov, «Toʻlagan Xoʻjamyorov — Tavallo (1883–1937)» — Ziyouz.uz (403) — <https://ziyouz.uz/ilm-va-fan/adabiyot/milliy-uygonish/begali-qosimov-tulagan-xujamyorov-tavallo-1883-1937/> — `w:muallif-tavallo, m:tavallo`
- Naim Karimov. Hamzani kim oʻldirgan yoxud Shohimardonning qora bahori (1991) — ochilmadi — <https://ziyouz.uz/matbuot/qayta-qurish-davri-matbuoti/naim-karimov-hamzani-kim-oldirgan-yoxud-shohimardonning-qora-bahori-1991/> — `w:muallif-hamza, m:hamza`
- *(sarlavha bazada qayd etilmagan)* — <https://ziyouz.uz/ozbek-nasri/abdulla-qodiriy/> — `w:muallif-qodiriy`
- Ғулом Зафарий (1889-1938) — Ziyouz.uz, «Ўзбек зиёлилари» — <https://ziyouz.uz/ozbek-ziyolilari/gulom-zafariy/> — `w:muallif-zafariy, m:zafariy`

#### ziyouz.com (12)

- Репрессия. 1937–1938 годы. Вып. 1 (PDF) — Ziyouz kutubxonasi — <https://www.ziyouz.com/books/uzbeklib_ru/literatury_po_istorii_tjurkskih_narodov/Repressiya.%201937-1938%20gody.%20Vypusk%201.pdf> — `w:muallif-botu, m:botu`
- ziyouz.com kutubxonasida «Ayniy» boʻyicha qidiruv natijalari — <https://www.ziyouz.com/index.php?option=com_search&searchword=Ayniy> — `w:muallif-ayniy, m:ayniy`
- Ziyouz.com qidiruvi «Elbek» — <https://www.ziyouz.com/index.php?option=com_search&searchword=Elbek> — `w:muallif-elbek`
- Sherali Turdiyev, «Elbek» («Maʼrifat», 2008) — ziyouz.com PDF — <https://www.ziyouz.com/kutubxona/category/24-ilmiy-tarixiy-adabiy-maqolalar-risolalar?download=1652:sherali-turdiyev-sirojiddin-ahmad-elbek-va-vadud-mahmud> — `w:muallif-elbek, m:elbek`
- Elbek. Tanlangan asarlar (H. Uzoqov soʻzboshisi), T.: Sharq, 1999 — ziyouz.com PDF — <https://www.ziyouz.com/kutubxona/category/7-o-zbek-zamonaviy-she-riyati?download=2019:elbek-tanlangan-asarlar&start=100> — `w:muallif-elbek, m:elbek`
- Mahmudxo'ja Behbudiy. Bizni kemirguvchi illatlar (1915) — ziyouz.com — <https://www.ziyouz.com/portal-haqida/xarita/matbuot/jadid-matbuoti/mahmudxo-ja-behbudiy-bizni-kemirguvchi-illatlar-1915> — `w:muallif-behbudiy`
- Suvon Meliyev. «Boy ila xizmatchi» yoki tiklangan nusxa muammosi (1989) — <https://www.ziyouz.com/portal-haqida/xarita/matbuot/qayta-qurish-davri-matbuoti/suvon-meliyev-boy-ila-xizmatchi-yoki-tiklangan-nusxa-muammosi-1989> — `w:muallif-hamza, m:hamza`
- Botu (1904-1938) — Ziyouz (biografiya) — <https://www.ziyouz.com/portal-haqida/xarita/uzbek-nasri/botu-1904-1938> — `w:muallif-botu, m:botu`
- Botu. Hoshimjon (hikoya) — Ziyouz — <https://www.ziyouz.com/portal-haqida/xarita/uzbek-nasri/botu-1904-1938/botu-hoshimjon-hikoya> — `w:muallif-botu, m:botu`
- Botu. Yangi qishloq (hikoya) — Ziyouz — <https://www.ziyouz.com/portal-haqida/xarita/uzbek-nasri/botu-1904-1938/botu-yangi-qishloq-hikoya> — `w:muallif-botu, m:botu`
- Mahmudxo'ja Behbudiy (1875-1919) — ziyouz.com — <https://www.ziyouz.com/portal-haqida/xarita/uzbek-nasri/mahmudxo-ja-behbudiy-1875-1919> — `w:muallif-behbudiy, m:behbudiy`
- Sadriddin Ayniy (1878–1954) — ziyouz.com — <https://www.ziyouz.com/portal-haqida/xarita/uzbek-nasri/sadriddin-ayniy-1878-1954> — `w:muallif-ayniy, m:ayniy`

#### zenodo.org (9)

- Zenodo yozuvi (2024) — <https://zenodo.org/records/11257960> — `w:boshqa-jadidlar`
- Zenodo yozuvi (Saʼdiy) — <https://zenodo.org/records/11743792> — `w:boshqa-jadidlar`
- Sh. R. Saparova, «Teaching Children's Literature…» (2025) — <https://zenodo.org/records/15420509> — `w:muallif-elbek, m:elbek`
- Sultonova Sh., Munavvarqori Abdurashidxonovning maorif tizimini isloh qilish haqidagi gʻoyalari — Zenodo, 2025 — <https://zenodo.org/records/15620280> — `w:muallif-munavvarqori, m:munavvarqori`
- Zenodo — Z. Xoʻjamiyarova, "Turkiy guliston yoxud axloq" tahlili (2025; qidiruv parchasi) — <https://zenodo.org/records/17458441> — `w:taʼlim-pedagogika`
- Munavvarqorining taʼlimiy asarlari tahlili (qidiruv parchasi) — Zenodo, 2026 — <https://zenodo.org/records/18835078> — `w:muallif-munavvarqori, m:munavvarqori`
- [2026, Ayniy merosi va oʻzbek-tojik adabiy aloqalari tadqiqotlari sharhi; toʻliq oʻqilmagan] — <https://zenodo.org/records/20524151> — `m:ayniy`
- Sobirova Z. Choʻlpon sheʼriyatida barmoq vazniga oʻtish tamoyillari // Results of National Scientific Research, 2023 — <https://zenodo.org/records/8011399> — `w:adabiyot-poetika-til, m:cholpon`
- Sobirova Z. Choʻlpon sheʼriyatida barmoq vazniga oʻtish tamoyillari // Results of National Scientific Research, 2023 —  (PDF — <https://zenodo.org/records/8011399/files/265-270.pdf?download=1> — `w:adabiyot-poetika-til`

#### cyberleninka.ru (8)

- Abdulla Avlani: Founder of Uzbek Pedagogy of the National Renaissance — CyberLeninka — <https://cyberleninka.ru/article/n/abdulla-avlani-founder-of-uzbek-pedagogy-of-the-national-renaissance> — `w:muallif-avloniy, m:avloniy`
- Ashurali Zokhiry's article «When will it be?» (CyberLeninka) — <https://cyberleninka.ru/article/n/ashurali-zokhirys-article-when-will-it-be-as-a-historical-source> — `w:boshqa-jadidlar`
- Behbudi's Activity on Education Reform (Jabborov N., Açık F., 2023, CyberLeninka) — <https://cyberleninka.ru/article/n/behbudi-s-activity-on-education-reform> — `w:taʼlim-pedagogika`
- Tatar va oʻzbek teatri aloqalari (qidiruv parchasi) — <https://cyberleninka.ru/article/n/creative-relations-between-tatar-and-uzbek-theater-history-and-today> — `w:adabiyot-poetika-til`
- M. F. Tashpoʻlatov, «Gulam Zafari and the development of Uzbek music», 2022 — <https://cyberleninka.ru/article/n/gulam-zafari-and-the-development-of-uzbek-music> — `m:zafariy`
- «Musical views of Gulam Zafari» — CyberLeninka (bu seansda ochilmadi) — <https://cyberleninka.ru/article/n/musical-views-of-gulam-zafari> — `m:zafariy`
- M. Nasriddinov. “The role of Iskhak Khan Tura Ibrat in the development of culture and enlightenment” (Scientific Progress, 2021) — <https://cyberleninka.ru/article/n/the-role-of-iskhak-khan-tura-ibrat-in-the-development-of-culture-and-enlightenment> — `w:muallif-ibrat, m:ibrat`
- Qidiruv natijalari (sahifalar ochilmadi) — <https://cyberleninka.ru/article/n/the-role-of-munavvarqori-abdurashidkhanov-in-the-jadidist-movement> — `m:munavvarqori`

#### inscience.uz (8)

- Xalimova S. Mahmudxoʻja Behbudiyning Rauf Muzaffarzoda bilan til xususidagi bahsi // Xorijiy lingvistika, 2025 — <https://inscience.uz/index.php/foreign-linguistics/article/download/6398/6190/18861> — `w:adabiyot-poetika-til, m:behbudiy`
- Hamza „Yangi saodat“ haqida maqola (qidiruv parchasi) — <https://inscience.uz/index.php/foreign-linguistics/article/download/7133/6921/21710> — `w:adabiyot-poetika-til`
- inscience.uz (lugʻatshunoslik) — <https://inscience.uz/index.php/foreign-linguistics/article/download/7616/7365/23512> — `w:boshqa-jadidlar`
- Inscience.uz — Behbudiyning "Oyina"dagi diniy mavzulari (qidiruv parchasi) — <https://inscience.uz/index.php/foreign-linguistics/article/view/7438> — `w:taʼlim-pedagogika`
- inscience.uz (Xorazm, 1921) — <https://inscience.uz/index.php/socinov/article/download/2774/2922/9519> — `w:boshqa-jadidlar`
- Muhammadiyev B. Mahmudxoʻja Behbudiy // Jamiyat va innovatsiyalar — <https://inscience.uz/index.php/socinov/article/download/6174/6123/18554> — `w:adabiyot-poetika-til, w:taʼlim-pedagogika`
- Abdurasulov A. Turkiston vaqtli matbuotining shakllanishida tatar-boshqird maʼrifatparvarlarining roli // Jamiyat va innovatsiyalar, 2025 — <https://inscience.uz/index.php/socinov/article/download/6785/6563/20278> — `w:adabiyot-poetika-til, w:matbuot-maktab-teatr`
- inscience.uz (Shoʻroi Islomiya) — <https://inscience.uz/index.php/socinov/article/download/7356/7174/22730> — `w:boshqa-jadidlar`

#### journal.fdu.uz (8)

- Oybek hikoyalari haqida maqola (qidiruv parchasi) — <https://journal.fdu.uz/index.php/sjfsu/article/download/3604/3017/6246> — `w:adabiyot-poetika-til, m:cholpon`
- FDU jurnali (Choʻlpon bibliografiyasi) — <https://journal.fdu.uz/index.php/sjfsu/article/view/1781> — `w:boshqa-jadidlar`
- FDU jurnali, «Toʻy» haqida — <https://journal.fdu.uz/index.php/sjfsu/article/view/1795> — `w:boshqa-jadidlar`
- Journal.fdu.uz — Koʻmak jamiyati va xorijdagi talabalar (qidiruv parchasi) — <https://journal.fdu.uz/index.php/sjfsu/article/view/2551> — `w:taʼlim-pedagogika`
- FarDU jurnali («Afgʻon sayohati» janri; matni koʻrilmagan) — <https://journal.fdu.uz/index.php/sjfsu/article/view/4751> — `m:avloniy`
- FarDU ilmiy xabarlari: “Isʼhoqxon Ibrat: yangi maʼlumotlar” — <https://journal.fdu.uz/index.php/sjfsu/article/view/63> — `w:muallif-ibrat, m:ibrat`
- FarDU ilmiy xabarlari: “Isʼhoqxon toʻra Ibrat ilmiy merosining falsafiy tahlili” — <https://journal.fdu.uz/index.php/sjfsu/article/view/8349> — `w:muallif-ibrat, m:ibrat`
- FDU jurnali (Zohiriy) — <https://journal.fdu.uz/index.php/sjfsu/article/view/8456> — `w:boshqa-jadidlar`

#### oefen.uz (8)

- Oʻzbek milliy uygʻonish adabiyotida Sharq va Gʻarb (referat; qidiruv parchasi) — <https://oefen.uz/ru/documents/referatlar/umumiy/o-zbek-milliy-uyg-onish-adabiyotida-sharq-va-g-arb-madanaiyati-masalalari-talqini> — `w:adabiyot-poetika-til`
- oefen.uz: Milliy matbuot va adabiyotshunoslik muammolari (referat) — <https://oefen.uz/uz/documents/referatlar/umumiy/milliy-matbuot-va-adabiyotshunoslik-muammolari-ijodiy-oqimlar-metodlar-masalasi> — `w:matbuot-maktab-teatr`
- Oefen.uz — Abdulla Avloniy (qidiruv parchasi) — <https://oefen.uz/uz/documents/slaydlar/umumiy/abdulla-avloniy> — `w:taʼlim-pedagogika`
- «Abdurauf Fitrat Abulfayzxon dramasi» (slayd; qidiruv parchasi) — <https://oefen.uz/uz/documents/slaydlar/umumiy/abdurauf-fitrat-abulfayzxon-dramasi> — `w:muallif-fitrat`
- Begali Qosimovning milliy uygʻonish davri adabiyotini oʻrganish masalalari (slaydlar; qidiruv parchasi) — <https://oefen.uz/uz/documents/slaydlar/umumiy/begali-qosimovning-milliy-uyg-onish-davri-adabiyotini-o-rganishning-dolzarb-masalalari> — `w:adabiyot-poetika-til`
- Jadid dramaturgiyasini davrlashtirish masalasi — <https://oefen.uz/uz/documents/slaydlar/umumiy/jadid-dramaturgiyasini-davrlashtirish-masalasi> — `w:boshqa-jadidlar, w:matbuot-maktab-teatr`
- Saidahmad Siddiqiy Ajziy hayoti va faoliyati (oefen.uz) — <https://oefen.uz/uz/documents/slaydlar/umumiy/saidahmad-siddiqiy-ajziy-hayoti-va-foliyati> — `w:boshqa-jadidlar`
- Turkiston oʻlka musulmonlar qurultoyi tarixi (oefen.uz) — <https://oefen.uz/uz/documents/slaydlar/umumiy/turkiston-o-lka-musulmonlar-qurultoyi-tarixi> — `w:boshqa-jadidlar`

#### uniwork.buxdu.uz (7)

- Sh. R. Saparova, «Implementation of Elbek's Works in Teaching Children's Literature», *Excellencia IMJE*, 2(3), 2024, 191–198 — <https://uniwork.buxdu.uz/resurs/12279_1_C56717788ADE2ACB2C66B4C190C9923D5562ADFD.pdf> — `m:elbek`
- [Saparova 2025] — <https://uniwork.buxdu.uz/resurs/12279_1_E1C8BF7C4E9991A2A169E078D48830FCD2E27E0F.pdf> — `m:ayniy`
- uniwork.buxdu.uz (Yosh buxoroliklar) — <https://uniwork.buxdu.uz/resurs/12677_1_0F485A718BBC916D8A90F8054F2EB68F3FFE4454.pdf> — `w:matbuot-maktab-teatr`
- BuxDU konferensiya toʻplami (N. Karimov kitobiga bibliografik havola, qidiruv parchasi) — <https://uniwork.buxdu.uz/resurs/12764_1_63E47E1372CD5AE54B094D575C2123DE971364AD.pdf> — `w:muallif-behbudiy`
- BuxDU resursi (Mirzo Siroj) — <https://uniwork.buxdu.uz/resurs/12902_1_C154E15308F5D7D480092B79D6F593ED8E6D74F1.pdf> — `w:boshqa-jadidlar`
- BuxDU resursi (Gaspirali, 1893) — <https://uniwork.buxdu.uz/resurs/13371_1_5BBCB3DEC058DB53D2D367688AA4F626C41C48A7.pdf> — `w:boshqa-jadidlar`
- BuxDU resursi (1908 uchrashuv) — <https://uniwork.buxdu.uz/resurs/13371_1_E1E54EAB38CD9951ED2BF0BDA5228FB7AD2797EC.pdf> — `w:boshqa-jadidlar, w:jadidchilik-tarixi`

#### iranicaonline.org (5)

- Rahim Hashem (Iranica; ochilmadi) — <https://www.iranicaonline.org/?p=3276> — `w:boshqa-jadidlar`
- Oʻqib boʻlmagan (403): Encyclopaedia Iranica — <https://www.iranicaonline.org/articles/ayni-sadr-al-din> — `w:muallif-ayniy, m:ayniy`
- Encyclopaedia Iranica: Behbudi — <https://www.iranicaonline.org/articles/behbudi-molla-mahmud-kaja/> — `w:matbuot-maktab-teatr, w:muallif-behbudiy, m:behbudiy`
- Encyclopaedia Iranica: Bokara-ye sarif — <https://www.iranicaonline.org/articles/bokara-ye-sarif-first-central-asian-newspaper-published-in-persian/> — `w:matbuot-maktab-teatr`
- Ochilmagan (403): Encyclopædia Iranica, «Feṭrat» — <https://www.iranicaonline.org/articles/fetrat-abd-al-rauf-bokari> — `w:muallif-fitrat, m:fitrat`

#### zamin.uz (5)

- U. Bekmuhammad. «Abdurauf Fitratning omadagi xotini» — zamin.uz, 2024 — <https://zamin.uz/jamiyat/140311-abdurauf-fitratning-amodagi-hotini.html> — `w:muallif-fitrat, m:fitrat`
- Мунаввар қори қандай шахс бўлган? — zamin.uz (qidiruv parchasi) — <https://zamin.uz/jamiyat/58961-munavvar-qori-qanday-shahs-bulgan.html> — `w:jadidchilik-tarixi`
- Munavvar qori qanday shaxs boʻlgan? (S. Abashin posti asosida) — Zamin.uz — <https://zamin.uz/uz/jamiyat/58961-munavvar-qori-qanday-shahs-bulgan.html> — `w:muallif-munavvarqori, m:munavvarqori`
- Munavvar qorining merosxoʻri — Zamin.uz — <https://zamin.uz/uz/jamiyat/65530-munavvar-qorining-meroshuri.html> — `w:muallif-munavvarqori, m:munavvarqori`
- Z. Abdirashidov, "Mahmudxo‘ja Behbudiyning til borasidagi qarashlari" — zamin.uz — <https://zamin.uz/uz/jamiyat/79822-mamudhzha-bebudijning-til-borasidagi-arashlari.html> — `w:muallif-behbudiy, m:behbudiy`

#### bukhari.uz (4)

- Saidrasul Saidazizov (bukhari.uz) — <https://bukhari.uz/?p=4037> — `w:boshqa-jadidlar, w:matbuot-maktab-teatr, w:taʼlim-pedagogika`
- Abdukodir Shakuriy (bukhari.uz) — <https://www.bukhari.uz/?p=4400> — `w:boshqa-jadidlar, w:matbuot-maktab-teatr`
- bukhari.uz: Fitrat / Tarbiyai atfol — <https://www.bukhari.uz/?p=4555> — `w:matbuot-maktab-teatr, w:taʼlim-pedagogika, m:fitrat`
- Muhammadsharif Sufizoda (bukhari.uz) — <https://www.bukhari.uz/?p=4737> — `w:boshqa-jadidlar`

#### president.uz (4)

- Shahidlar xotirasi xiyobonidagi marosim (31.08.2023) — <https://president.uz/oz/lists/view/6633> — `w:jadidchilik-tarixi`
- «Jadidlar: milliy oʻzlik, istiqlol va davlatchilik gʻoyalari» konferensiyasiga murojaat (11.12.2023) — <https://president.uz/oz/lists/view/6919> — `w:jadidchilik-tarixi`
- Prezident qarori, 150 yillik (03.01.2025) — president.uz — <https://president.uz/oz/lists/view/7797> — `w:muallif-behbudiy, m:behbudiy`
- Prezident Isʼhoqxon Ibrat nomidagi majmuaga tashrif buyurdi (president.uz, 07.07.2017) — <https://president.uz/uz/lists/view/756> — `w:muallif-ibrat, m:ibrat`

#### academy.uz (3)

- Fanlar akademiyasi: "Mahmudxoʻja Behbudiy: millat ehtiyojiga baxshida umr" risolasi — <https://academy.uz/ru/page/pdf/mahmudxoja-behbudiy-millat-ehtiyojiga-baxshida-umr-risolasi-nashr-etildi> — `w:muallif-behbudiy`
- Qori Niyozov Toshmuhammad Niyozovich (academy.uz) — <https://academy.uz/uz/page/pdf/qori-niyozov-toshmuhammad-niyozovich> — `w:boshqa-jadidlar`
- Hamza Hakimzoda Niyoziy tavalludiga bagʻishlangan anjuman (2019) — Fanlar akademiyasi — <https://www.academy.uz/uz/page/pdf/hamza-hakimzoda-niyoziy-tavalludiga-bagishlangan-anjuman-bolib-otdi> — `w:muallif-hamza, m:hamza`

#### britannica.com (3)

- *(sarlavha bazada qayd etilmagan)* — <https://www.britannica.com/biography/Abdullah-Qadiri> — `w:muallif-qodiriy`
- Encyclopaedia Britannica, «Elbek» — <https://www.britannica.com/biography/Elbek> — `m:elbek`
- Oʻqib boʻlmagan (403): Encyclopaedia Iranica —  Britannica — <https://www.britannica.com/biography/Sadriddin-Ayni> — `w:muallif-ayniy`

#### gov.uz (3)

- Remembering Qodiriy — gov.uz (qidiruv parchasi) — <https://gov.uz/en/cirns/news/view/45852> — `w:adabiyot-poetika-til`
- gov.uz (Muqimiy teatri tarixi) — <https://gov.uz/en/madaniyat/news/view/28401> — `m:hamza`
- Jadidchilik merosi va ilmiy nashrlar taqdimoti — gov.uz (qidiruv parchasi) — <https://gov.uz/oz/academy/news/view/232964> — `w:jadidchilik-tarixi`

#### iccu.uz (3)

- ICCU yangiligi — <https://iccu.uz/en/news/121> — `w:boshqa-jadidlar`
- «A new media project dedicated to Fitrat’s work…» — Oʻzbekistondagi Islom sivilizatsiyasi markazi, 2025 — <https://iccu.uz/en/news/261> — `w:muallif-fitrat, m:fitrat`
- ICCU yangiligi (Germaniyada oʻqigan oʻzbek qizlari) — <https://iccu.uz/en/news/576> — `w:taʼlim-pedagogika`

#### irajbashiri.com (3)

- Iraj Bashiri, "Mahmud Khoja Behbudi" — <https://irajbashiri.com/Behbudi/BhbdiBiog.html> — `w:muallif-behbudiy`
- Behbudi Foundation bylaws (Bashiri sayti, qidiruv parchasi) — <https://irajbashiri.com/Behbudi/Bylaws.html> — `w:muallif-behbudiy`
- [I. Bashiri, «A Brief Note on Sadriddin Aini's Life»; 2026-yil oktabrda oʻqildi] — <https://www.irajbashiri.com/AiniChron/Ainichrn.html> — `m:ayniy`

#### islamansiklopedisi.org.tr (3)

- GASPIRALI, İsmâil Bey — TDV İslâm Ansiklopedisi — <https://islamansiklopedisi.org.tr/gaspirali-ismail-bey> — `w:jadidchilik-tarixi`
- *(sarlavha bazada qayd etilmagan)* — <https://islamansiklopedisi.org.tr/recaizade-mahmud-ekrem> — `m:behbudiy`
- SAʻDÎ, Abdurrahman b. Nâsır (TDV) — <https://islamansiklopedisi.org.tr/sadi-abdurrahman-b-nasir> — `w:boshqa-jadidlar`

#### journal.buxdu.uz (3)

- BuxDU jurnali (Munzim maktabi) — <https://journal.buxdu.uz/index.php/journals_buxdu/article/download/13561/8907/32063> — `w:boshqa-jadidlar`
- BuxDU jurnali maqolasi ("Shuhrat" 1907-yil 4-dekabr; faqat qidiruv parchasi) — <https://journal.buxdu.uz/index.php/journals_buxdu/article/download/3259/2055/8856> — `w:muallif-avloniy`
- Buxoro davlat universiteti jurnali — 1909-yil maktab yopilishi (qidiruv parchasi) — <https://journal.buxdu.uz/index.php/journals_buxdu/article/download/9606/6196/25461> — `w:taʼlim-pedagogika`

#### n.ziyouz.com (3)

- Hoji Muin. Mahmudxo'ja Behbudiy (1923) — ziyouz.com — <https://n.ziyouz.com/portal-haqida/xarita/matbuot/jadid-matbuoti/hoji-muin-mahmudxo-ja-behbudiy-1923> — `w:muallif-behbudiy, m:behbudiy`
- Mahmudxo‘ja Behbudiy. Xayrul umuri avsatuho (1906) — ziyouz.com — <https://n.ziyouz.com/portal-haqida/xarita/matbuot/jadid-matbuoti/mahmudxo-ja-behbudiy-xayrul-umuri-avsatuho-1906> — `w:muallif-behbudiy, m:behbudiy`
- Naim Karimov. Hamza Hakimzoda Niyoziy (1889–1929) — Ziyouz — <https://n.ziyouz.com/portal-haqida/xarita/uzbek-nasri/hamza-hakimzoda-niyoziy-1889-1929> — `w:muallif-hamza, m:hamza`

#### resolve.cambridge.org (3)

- Allworth, Uzbek Literary Politics — BSOAS taqrizi — <https://resolve.cambridge.org/core/journals/bulletin-of-the-school-of-oriental-and-african-studies/article/edward-allworth-uzbek-literary-politics-publications-in-near-and-middle-east-studies-columbia-university-series-a-v-366-pp-the-hague-etc-mouton-and-co1964-guilders-42/0BEB76C6131C19F35C7211EB1753EE67> — `w:adabiyot-poetika-til`
- Khalid, *Politics of Muslim Cultural Reform* taqrizi — IJMES/Cambridge — <https://resolve.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/adeeb-khalid-the-politics-of-muslim-cultural-reform-jadidism-in-central-asia-comparative-studies-on-muslim-societies-berkeley-los-angeles-and-london-university-of-california-press-1998-pp-353/F1B8CEF8AB5526F10B18DAB2488DC38E> — `w:jadidchilik-tarixi`
- Beginnings of the Modern Turkestanian Theater // Slavic Review (qidiruv parchasi) — <https://resolve.cambridge.org/core/journals/slavic-review/article/beginnings-of-the-modern-turkestanian-theater/7388AD4A14FF7C1C255C5024FD052C1F> — `w:adabiyot-poetika-til`

#### scitepress.org (3)

- O. Usmanov, «Ghulam Zafari’s Role in the History of Uzbek Dramaturgy», PAMIR 2023 — <https://scitepress.org/PublishedPapers/2023/124908> — `m:zafariy`
- O. Usmanov, «Ghulam Zafari’s Role in the History of Uzbek Dramaturgy», PAMIR 2023:  (PDF — <https://scitepress.org/publishedPapers/2023/124908/pdf/index.html> — `m:zafariy`
- Scitepress: Political Endeavors of Mustafa Shokay and Ahmed Zaki Validii (2023) — <https://scitepress.org/publishedPapers/2023/126806/pdf/index.html> — `w:matbuot-maktab-teatr`

### 2.2. Boshqa saytlar (har birida 1–2 havola; 85 ta sayt, 103 ta havola)

- **aa.com.tr** — Gaspirali İsmail, pioneer for Turkic world — Anadolu Agency (qidiruv parchasi) — <https://www.aa.com.tr/en/culture/gaspirali-ismail-pioneer-for-turkic-world/1773774> — `w:jadidchilik-tarixi`
- **academics.hamilton.edu** — Khalid resources (bibliografiya) — Hamilton College — <https://academics.hamilton.edu/central-asian-history/khalid-resources> — `w:jadidchilik-tarixi`
- **acdf.uz** — Jadids: Letters to Turkestan — ACDF (qidiruv parchasi) — <https://acdf.uz/news/uzbekistan-art-and-culture-development-foundation-concludes-jadids-letters-to-turkestan-multimedia-exhibition> — `w:jadidchilik-tarixi`
- **afisha.uz** — Buxoroda Jadidlar merosi davlat muzeyi tashkil etiladi — afisha.uz — <https://www.afisha.uz/uz/gorod/2024/05/31/jadidlar> — `w:jadidchilik-tarixi`
- **afisha.uz** — afisha.uz: Toshkentdagi kutubxonalar — <https://www.afisha.uz/uz/gorod/2026/01/13/kutubxonalar> — `w:matbuot-maktab-teatr`
- **anhor.uz** — Shavkat Mirziyoyev: Eng katta maktab, eng katta tarbiya – tarixning oʻzi — anhor.uz (2024) — <https://anhor.uz/uzl/news/shavkat-mirziyoyev-eng-katta-maktab-eng-katta-tarbiya-tarixning-o-zi/> — `w:jadidchilik-tarixi, m:fitrat`
- **aniq.uz** — Mutlaqo maxfiy sud materiallari: Hamzaning sirli oʻlimi haqida — Aniq.uz (ochilmadi) — <https://aniq.uz/uz/yangiliklar/mutlaqo-maxfiy-sud-materiallari-hamzaning-sirli-ulimi-haqida> — `w:muallif-hamza, m:hamza`
- **api.unilibrary.uz** — Quvvatova D. Fitrat's views on literature // Electronic Journal of Actual Problems…, 2021 — <https://api.unilibrary.uz/storage/PublisherResourceFile/127839/images/1667555009.pdf> — `w:adabiyot-poetika-til, w:muallif-botu, w:muallif-elbek, m:botu, m:elbek, m:fitrat`
- **api.unilibrary.uz** — M. Sariboyeva. “An Exemplary Way of Life” (Linguistics and Culture Review, 2021) — <https://api.unilibrary.uz/storage/PublisherResourceFile/72823/images/1665469161.pdf> — `w:muallif-ibrat, m:ibrat`
- **api.ziyonet.uz** — Qahharova D. Oʻzbek adabiyoti (oʻquv qoʻllanma), 2026 — <https://api.ziyonet.uz/uploads/books/10000184/OLiLXVDeWWRKzbK.pdf> — `w:adabiyot-poetika-til`
- **aps.tsuos.uz** — 2023-yilgi jadidlar konferensiyasi (TDShU, qidiruv parchasi) — <https://aps.tsuos.uz/storage/users/137/articles/SkJzJW3yDGpxYAGJltzhXSnJHD9JdwjxZ8ZyImiy.pdf> — `w:jadidchilik-tarixi`
- **arboblar.uz** — Hamza Hakimzoda Niyoziy — Arboblar.uz — <https://arboblar.uz/uz/people/khamza-khakimzade-niyazi> — `w:muallif-hamza, m:hamza`
- **archontology.org** — Fayzulla Khodzhayev — Archontology — <https://archontology.org/nations/ussr/ussr_state1/khodjayev.php> — `w:jadidchilik-tarixi`
- **ark.cdlib.org** — Adeeb Khalid, The Politics of Muslim Cultural Reform: Jadidism in Central Asia — UC Press E-Books —  (ARK — <http://ark.cdlib.org/ark:/13030/ft8g5008rv> — `w:muallif-avloniy, w:muallif-munavvarqori, m:avloniy, m:hamza, m:munavvarqori`
- **arxiv.uz** — Fitrat, Choʻlpon, Vadud Mahmud… adabiy-tanqidiy jarayon (arxiv.uz) — <https://arxiv.uz/ru/documents/referatlar/adabiyot/fitrat-cho-lpon-vadud-mahmud-abdurahmon-sa-diy-otajon-hoshim-sotti-husayn-adabiy-tanqidiy-jarayondagi-faoliyati> — `w:boshqa-jadidlar`
- **arxiv.uz** — «Abdurauf Fitrat — oʻzbek adabiyotshunosligi va adabiy tanqidchiligining asoschisi» (qidiruv parchasi) — <https://arxiv.uz/uz/documents/referatlar/adabiyot/abdurauf-fitrat-o-zbek-adabiyotshunosligi-va-adabiy-tanqidchiligining-asoschisi> — `w:muallif-fitrat`
- **astanatimes.com** — Nazir Torekulov (Astana Times, 2022) — <https://astanatimes.com/2022/07/legendary-20th-century-diplomat-nazir-torekulovs-legacy-honored-as-kazakh-diplomatic-service-turns-30-years/> — `w:boshqa-jadidlar`
- **bigenc.ru** — Джадидизм — Большая российская энциклопедия (qidiruv parchasi) — <https://bigenc.ru/c/dzhadidizm-3c08e5> — `w:jadidchilik-tarixi`
- **bigenc.ru** — Kadimizm (BRE / bigenc.ru; qidiruv parchasi) — <https://bigenc.ru/c/kadimizm-952d9f> — `w:taʼlim-pedagogika`
- **books.yandex.ru** — Munavvar qori Abdurashidxonov, «Tanlangan asarlar» (kirill), Yandex Kitoblar ochiq matni — <https://books.yandex.ru/books/LeJJ50cf/read-online> — `w:muallif-munavvarqori, w:muallif-tavallo, m:munavvarqori, m:tavallo`
- **cambridge.org** — E. Allworth. The Beginnings of the Modern Turkestanian Theater (Slavic Review, 1964) — <https://www.cambridge.org/core/journals/slavic-review/article/beginnings-of-the-modern-turkestanian-theater/7388AD4A14FF7C1C255C5024FD052C1F> — `w:matbuot-maktab-teatr`
- **centrasia.org** — БАТУ (ХОДИЕВ) Махмуд Максудович — CentrAsia — <https://centrasia.org/person2.php?st=1297783211> — `w:muallif-botu, m:botu`
- **cisc.uz** — «A new media project dedicated to Fitrat’s work…» — Oʻzbekistondagi Islom sivilizatsiyasi markazi, 2025 —  (asl havola — <https://cisc.uz/en/news-item/261> — `w:muallif-fitrat`
- **cisc.uz** — cisc.uz: Abduqodir Shakuriy — <https://cisc.uz/en/news-item/392> — `w:matbuot-maktab-teatr`
- **cmeslibrary.sbs.arizona.edu** — Khalid, *Making Uzbekistan* — CMES library — <https://cmeslibrary.sbs.arizona.edu/book/making-uzbekistan-nation-empire-and-revolution-early-ussr> — `w:jadidchilik-tarixi`
- **cmeslibrary.sbs.arizona.edu** — Allworth, *The Modern Uzbeks* — CMES library — <https://cmeslibrary.sbs.arizona.edu/index.php/node/2064> — `w:jadidchilik-tarixi`
- **crwflags.com** — Kokand flag page — FOTW (qidiruv parchasi) — <https://crwflags.com/FOTW/FLAGS/su_cak.html> — `w:jadidchilik-tarixi`
- **dailysabah.com** — Daily Sabah — Gaspirali 169 yilligi (qidiruv parchasi) — <https://www.dailysabah.com/arts/portrait/turkic-world-honors-169th-anniversary-of-crimean-tatar-enlightener-ismail-gaspirali/amp> — `w:taʼlim-pedagogika`
- **daryo.uz** — Ismoil Gasprinskiy jadidchilik harakatining asoschisi (Daryo; ochilmadi) — <https://daryo.uz/2021/03/21/ismoil-gasprinskiy-jadidchilik-harakatining-asoschisi> — `w:boshqa-jadidlar`
- **daryo.uz** — Choʻlpon — Daryo.uz (qidiruv parchasi) — <https://daryo.uz/persona/cholpon/> — `w:adabiyot-poetika-til`
- **degruyterbrill.com** — [Night and Day, inglizcha tarjima; 2026-10-21 qidiruv parchasi] — <https://www.degruyterbrill.com/document/doi/10.1515/9781644690482/html> — `m:cholpon`
- **degruyterbrill.com** — [Z. Abdirashidov, 2023] — <https://www.degruyterbrill.com/isbn/9783110774856> — `m:fitrat`
- **dergipark.org.tr** — Konferans bildirisi (DergiPark) — <https://dergipark.org.tr/en/pub/atdd/article/843204> — `w:boshqa-jadidlar`
- **dergipark.org.tr** — Rehber-i Muallimîn risolesi (DergiPark) — <https://dergipark.org.tr/tr/pub/gttad/article/1825439> — `w:boshqa-jadidlar, w:taʼlim-pedagogika`
- **e-history.kz** — e-history.kz — <https://e-history.kz/en/news/show/7119> — `w:boshqa-jadidlar`
- **en.everybodywiki.com** — Ajziy (EverybodyWiki) — <https://en.everybodywiki.com/Ajziy> — `w:boshqa-jadidlar`
- **en.everybodywiki.com** — Ishoqxon Ibrat (EverybodyWiki; faqat qidiruv parchasi) — <https://en.everybodywiki.com/Ishoqxon_Ibrat> — `w:muallif-ibrat, m:ibrat`
- **estudogeral.sib.uc.pt** — Fazendeiro B. Review of A. Khalid, Making Uzbekistan // Nationalities Papers, 2018 — <https://estudogeral.sib.uc.pt/bitstream/10316/83473/1/Making%20Uzbekistan.pdf> — `w:adabiyot-poetika-til`
- **eurasia.expert** — Родился узбекский поэт и просветитель Хамза Ниязи — Евразия Эксперт — <https://eurasia.expert/rodilsya-uzbekskiy-poet-i-prosvetitel-khamza-niyazi/> — `w:muallif-hamza, m:hamza`
- **eurasianet.org** — Uzbekistan: the mixed legacy of Bukhara's 1920 uprising — Eurasianet (qidiruv parchasi) — <https://eurasianet.org/uzbekistan-the-mixed-legacy-of-bukharas-1920-uprising> — `w:jadidchilik-tarixi`
- **ideopol.org** — Finko, taqriz-esse (2025) — <https://www.ideopol.org/wp-content/uploads/2025/12/2.1.-Finko-review-essay-final.pdf> — `w:jadidchilik-tarixi`
- **ilmlar.uz** — Hamza Hakimzoda Niyoziy haqida. Hamza hayoti va ijodi — Ilmlar.uz — <https://ilmlar.uz/hamza-hakimzoda-niyoziy-haqida-hamza-hayoti-va-ijodi/> — `w:muallif-hamza, m:hamza`
- **islom.uz** — Abdurauf Fitrat / Choʻlpon biografiyasi — islom.uz (qidiruv parchasi) — <https://islom.uz/article/135> — `w:jadidchilik-tarixi`
- **jenubiturkistan.wordpress.com** — Naim Karimov. Oʻzbekistonda adabiy harakatlar (blogdagi qayta nashr, 2011) — <https://jenubiturkistan.wordpress.com/2011/02/26/o%E2%80%98zbekistonda-adabiy-harakatlar/> — `w:adabiyot-poetika-til, w:muallif-botu, w:muallif-elbek, m:botu, m:elbek, m:fitrat`
- **journal.fledu.uz** — Vadud Mahmud haqida maqola (fledu) — <https://journal.fledu.uz/wp-content/uploads/sites/3/2019/04/article-573-6720.pdf> — `w:boshqa-jadidlar`
- **journal.fledu.uz** — journal.fledu.uz: Hoji Muinning siyosiy publitsistikasi — <https://journal.fledu.uz/wp-content/uploads/sites/3/2022/05/hoji-muinning-siyosiy-publitsistikasi.pdf> — `w:matbuot-maktab-teatr`
- **journal.namdu.uz** — Latipov M. Ibrat asarlarida morfologik kategoriyalarning nutqiy voqelanishi // NamDU ilmiy axborotnomasi, 2024 — <https://journal.namdu.uz/archive/2024-issue-11/maqola-56680-1728390030/pdf?download=1> — `w:adabiyot-poetika-til, m:ibrat`
- **journals.nuu.uz** — Jadidlar adabiy merosini oʻrganish (NUU jurnali, qidiruv parchasi) — <https://journals.nuu.uz/index.php/1/article/download/2108/1003> — `w:jadidchilik-tarixi`
- **journals.nuu.uz** — journals.nuu.uz (dastlabki jadid maktablari) — <https://journals.nuu.uz/index.php/1/article/download/6483/2830> — `w:matbuot-maktab-teatr`
- **journals.openedition.org** — S. Dudoignon, *Tanlangan asarlar* (1997) taqrizi — Abstracta Iranica 22 — <https://journals.openedition.org/abstractairanica/37091> — `w:muallif-behbudiy, m:behbudiy`
- **journals.rudn.ru** — Bukhara and the World… Mirzo Sirodjiddin Hakim (RUDN) — <https://journals.rudn.ru/russian-history/article/view/34946> — `w:boshqa-jadidlar`
- **journals.vu.lt** — Lietuvos istorijos studijos maqolasi — <https://www.journals.vu.lt/lietuvos-istorijos-studijos/article/view/33452> — `w:boshqa-jadidlar`
- **jowvpzmpwgpbesligray.supabase.co** — D. Jumayeva. «Hamid Olimjon — ilk fitratshunoslardan biri» — «Oʻzbekiston madaniyati va sanʼati», 2025 — <https://jowvpzmpwgpbesligray.supabase.co/storage/v1/object/public/article-pdfs/madaniyat/hamid-olimjon-ilk-fitratshunoslardan-biri-1786621167243.pdf> — `w:muallif-fitrat, m:fitrat`
- **kitapyurdu.com** — Kitapyurdu — "Almanya'da eğitim görmüş Türkistan gençleri" (qidiruv parchasi) — <https://www.kitapyurdu.com/kitap/almanyada-egitim-gormus-turkistan-gencleri/633544.html> — `w:taʼlim-pedagogika`
- **korolevperevody.co.uk** — 1917 — The National Movement in Central Asia (Chokaev tarjimasi) — <https://korolevperevody.co.uk/chokaev1917-1.html> — `w:boshqa-jadidlar`
- **kultura.uz** — Kultura.uz (Botu 110 yilligi maqolasi; maqola matni ochilmadi) — <http://www.kultura.uz/view_9_r_2021.html> — `w:muallif-botu`
- **library.oapen.org** — OAPEN — Fitrat va "Munozara" haqidagi ilmiy toʻplam (qidiruv parchasi) — <https://library.oapen.org/bitstream/20.500.12657/63502/1/9783110774856.pdf> — `w:taʼlim-pedagogika`
- **library.oapen.org** — Making Uzbekistan (OAPEN yozuvi; ochilmadi) — <https://library.oapen.org/handle/20.500.12657/88187> — `w:adabiyot-poetika-til, m:cholpon`
- **maremagnum.com** — «Fitrat ve eserleri» (kitob; qidiruv parchasi) — <https://www.maremagnum.com/en/libri/fitrat-ve-eserleri/156341413> — `w:muallif-fitrat`
- **marxists.org** — Bukharin trial archive — marxists.org — <https://www.marxists.org/archive/bukharin/works/1938/trial/> — `w:jadidchilik-tarixi`
- **minbar.su** — Minbar.su — Gasprinskiy maktabi haqida maqola (qidiruv parchasi) — <https://www.minbar.su/jour/article/download/1142/643> — `w:taʼlim-pedagogika`
- **mytashkent.uz** — Хамза-Хакимзода Ниёзий — родитель, прародитель узбекского профессионального театра — MyTashkent — <https://mytashkent.uz/2017/05/23/hamza-hakimzoda-niyozij/> — `w:muallif-hamza, m:hamza`
- **nmkav.ru** — Rol gazety «Terdzhiman»… (2019) — <https://www.nmkav.ru/en/archive/2019/1/rol-gazety-terdzhiman-v-protsesse-modernizatsii-rossijskikh-tyurok-musulman-na-rubezhe-xix-xx-vv> — `w:boshqa-jadidlar`
- **nomadit.co.uk** — [«Bayonoti sayyohi hindi» sanasi] — <https://nomadit.co.uk/conference/cess2019/paper/50851> — `m:fitrat`
- **nuu.uz** — Educational event dedicated to the memory of Munavvarkori Abdurashidkhanov held at NUUz (qidiruv parchasi) — <https://nuu.uz/en/?p=37422> — `w:muallif-munavvarqori`
- **nuu.uz** — OʻzMU: Fitrat tavalludining 140 yilligi tadbiri (qidiruv parchasi) — <https://nuu.uz/en/?p=37502> — `w:muallif-fitrat`
- **openaccess.marmara.edu.tr** — A. F. Gʻuney dissertatsiyasi (2007), Marmara universiteti (2026-yil oktabrda koʻrildi) — <https://openaccess.marmara.edu.tr/entities/publication/3497997a-1471-4268-9166-513e38506573> — `m:hamza`
- **oxussociety.org** — Paying Tribute to Edward Allworth — Oxus Society — <https://oxussociety.org/publications/paying-tribute-to-the-last-of-the-great-masters-of-central-asian-studies-edward-allworth> — `w:jadidchilik-tarixi`
- **oyina.uz** — «Milliy ittihod» — oyina.uz (ochilmadi, qidiruv parchasi) — <https://oyina.uz/uz/article/896> — `w:jadidchilik-tarixi`
- **ozodlik.org** — «Xalq soʻzi» Hamzani yana toshboʻron qildi — Ozodlik — <https://www.ozodlik.org/a/26554151.html> — `w:muallif-hamza, m:hamza`
- **podrobno.uz** — Po initsiative Shavkata Mirziyoyeva… memorialnyy kompleks Iskhokkhon Tura Ibrat (podrobno.uz, 11.01.2017) — <https://podrobno.uz/cat/calche/po-initsiative-shavkata-mirzieeva-v-namanganskoy-oblasti-sozdadut-memorialnyy-kompleks-iskhokkhon-tu/> — `w:muallif-ibrat, m:ibrat`
- **proza.ru** — В. Фетисов. Дети Бату — Proza.ru — <https://proza.ru/2015/01/23/430> — `w:muallif-botu, m:botu`
- **publishing.cdlib.org** — Khalid, *The Politics of Muslim Cultural Reform* — UC Press sahifasi — <https://publishing.cdlib.org/ucpressebooks/public/book/the-politics-of-muslim-cultural-reform-jadidism-in-central-asia.html> — `w:jadidchilik-tarixi, w:muallif-avloniy, w:muallif-behbudiy, w:taʼlim-pedagogika, m:avloniy, m:behbudiy, m:cholpon`
- **real-eod.mtak.hu** — Baldauf, Schriftreform und Schriftwechsel (qidiruv parchasi) — <https://real-eod.mtak.hu/15864> — `w:adabiyot-poetika-til`
- **repositorium.zmo.de** — O memuarakh Palvanniyaza Yusupova (ZMO) — <https://repositorium.zmo.de/receive/zmo_mods_00001850> — `w:boshqa-jadidlar`
- **ru.ruwiki.ru** — Шура-и-Ислам (Ruwiki; qidiruv parchasi) — <https://ru.ruwiki.ru/wiki/%D0%A8%D1%83%D1%80%D0%B0-%D0%B8-%D0%98%D1%81%D0%BB%D0%B0%D0%BC> — `w:taʼlim-pedagogika`
- **ru.ruwiki.ru** — Tyuryakulov, Nazir Tyuryakulovich (Ruwiki; ochilmadi) — <https://ru.ruwiki.ru/wiki/Тюрякулов,_Назир_Тюрякулович> — `w:boshqa-jadidlar`
- **ru.wikisource.org** — *(sarlavha bazada qayd etilmagan)* — <https://ru.wikisource.org/wiki/Аскалонский_злодей_(Лесков)> — `m:behbudiy`
- **samarkand.uz** — Samarqand viloyati hokimligi yangiligi (qidiruv parchasi) — <https://samarkand.uz/en/press/news/bugun-buyuk-marifatparvar-mahmudxoja-behbudiy-tugilgan-kun> — `w:muallif-behbudiy`
- **samarkand.uz** — Bugun tugʻilgan kun (Behbudiy) — samarkand.uz (qidiruv parchasi) — <https://samarkand.uz/en/press/news/bugun-tugilgan-kun> — `w:jadidchilik-tarixi, w:taʼlim-pedagogika`
- **saviya.uz** — Gʻulom Zafariy-1889-1938 — saviya.uz (Vikipediyada keltirilgan, bu seansda ochilmadi) — <https://saviya.uz/hayot/tarjimai-hol/gulom-zafariy-1889-1938/> — `w:muallif-zafariy, m:zafariy`
- **shosh.uz** — «Milliy ittihod» jadidlar tashkiloti — shosh.uz (ochilmadi, qidiruv parchasi) — <https://shosh.uz/milliy-ittihod-jadidlar-tashkiloti-2/> — `w:jadidchilik-tarixi`
- **src-h.slav.hokudai.ac.jp** — Adeeb Khalid, "The Fascination of Revolution: Central Asian Intellectuals, 1917–1927" (Hokkaido SRC) — <https://src-h.slav.hokudai.ac.jp/coe21/publish/no14_ses/05_khalid.pdf> — `w:taʼlim-pedagogika, m:fitrat`
- **storage.academy.uz** — Fan va turmush jurnali 2023-4 — <https://storage.academy.uz/source/1/journals/Fan> — `w:boshqa-jadidlar`
- **tafakkur.net** — Abdulhamid Choʻlpon haqida — tafakkur.net — <https://tafakkur.net/abdulhamid-cholpon.haqida> — `w:muallif-cholpon, m:cholpon`
- **talimxabarlari.uz** — Berlin arxivida Germaniyada tahsil olgan ilk oʻzbek talabalari haqidagi hujjatlar topildi (Taʼlim xabarlari, 2026) — <https://talimxabarlari.uz/73147/> — `w:taʼlim-pedagogika`
- **tandfonline.com** — E. Allworth, *Central Asian Survey* (ochilmadi) — <https://www.tandfonline.com/doi/abs/10.1080/02634938408400455> — `m:hamza`
- **tandfonline.com** — E. Allworth. «Shohimardon»: Forging a link in the Chain of Soviet Uzbek literary orthodoxy — Central Asian Survey (ochilmadi, 403) — <https://www.tandfonline.com/doi/abs/10.1080/02634938408400455?journalCode=ccas20> — `w:muallif-hamza`
- **tarix.sinaps.uz** — Milliy Ittihod, «Milliy Istiqlol» — tarix.sinaps.uz lugʻati — <https://tarix.sinaps.uz/lugat/milliy-ittihod-milliy-istiqlol/> — `w:jadidchilik-tarixi`
- **tekedergisi.com** — M. Halmet, «Türkistanlı Ceditçi Şair Elbek'in dil konusundaki fikirleri ve fikirleri uğrunda verdiği mücadele hakkında bir değerlendirme», *Uluslararası Türkçe Edebiyat Kültür Eğitim Dergisi*, 8(4), 2019, 2125–2142 — <https://tekedergisi.com/DergiPdfDetay.aspx?ID=4581> — `m:elbek`
- **teletype.in** — Teletype (Ustodi avval) — <https://teletype.in/@aktamov_amirbek/oOJjS3L6cT> — `w:boshqa-jadidlar`
- **teletype.in** — Jadid gazetasi, Teletype (2024-yil 7-yanvar) — <https://teletype.in/@jadidgzt/4v-S9yOyD2f> — `w:taʼlim-pedagogika`
- **tg.wikipedia.org** — Садриддин Айнӣ — Tojik Vikipediyasi — <https://tg.wikipedia.org/wiki/Садриддин_Айнӣ> — `w:muallif-ayniy, m:ayniy`
- **timesca.com** — Jadids in Germany: Uzbekistan looks to past to inspire young people (Times of Central Asia) — <https://timesca.com/jadids-in-germany-uzbekistan-looks-to-past-to-inspire-young-people/> — `w:taʼlim-pedagogika`
- **tma.uz** — [oqlanish 1957 — qidiruv parchasi] — <https://tma.uz/en/?p=45191> — `m:qodiriy`
- **topwar.ru** — Хамза. Неистовый певец войны с басмачеством — Topwar — <https://topwar.ru/88796-hamza-neistovyy-pevec-voyny-s-basmachestvom.html> — `w:muallif-hamza, m:hamza`
- **tsuull.uz** — TDOʻTAU monografiyasi („Qizil qalam“ haqida; qidiruv parchasi) — <https://tsuull.uz/sites/default/files/gulzodaning_monografiyasi_0.pdf> — `w:adabiyot-poetika-til`
- **uz.kursiv.media** — Buxoroda Jadidlar merosi davlat muzeyi ochiladi — kursiv.media — <https://uz.kursiv.media/uz/2024-05-31/buxoroda-jadidlar-merosi-davlat-muzeyi-ochiladi/amp/> — `w:jadidchilik-tarixi`
- **uz.sputniknews.ru** — Хамза Хакимзаде Ниязи — биография — Sputnik Oʻzbekiston — <https://uz.sputniknews.ru/20230223/xamza-xakimzade-niyazi--biografiya-32455891.html> — `w:muallif-hamza, m:hamza`
- **uzfi.uz** — [«Doxunda» va «Qullar» tarjimalari haqida] — <https://uzfi.uz/es/news/content/148> — `m:ayniy`
- **visitsilkroad.org** — Ishkhon Ibrat Complex (visitsilkroad.org) — <https://visitsilkroad.org/destination/ishkhon-ibrat-complex/> — `w:muallif-ibrat, m:ibrat`
- **weekend.rambler.ru** — Татары и джадидизм в Средней Азии — Rambler (qidiruv parchasi) — <https://weekend.rambler.ru/read/51556255-tatary-i-dzhadidizm-v-sredney-azii-stranitsy-istorii> — `w:jadidchilik-tarixi`
- **xabar.uz** — «Hamza bahonasida dindorlar mahv etilgan» — «Qizil toshboʻron» — Xabar.uz — <https://www.xabar.uz/uz/madaniyat/hamza-bahonasida-dindorlar-mahv-etilgan-qizil-toshbor> — `w:muallif-hamza, m:hamza`
---

## 3. Tavsiya etiladigan ilmiy adabiyot

**Tekshiruv.** Har bir yozuv 2026-yil 21-oktabrda veb-qidiruv orqali tekshirildi. Holat belgilari:

- **[tasdiqlangan]** — nashriyot, kutubxona katalogi yoki ilmiy taqriz sahifasida muallif, sarlavha, nashriyot va yil topildi. Tekshiruvda foydalanilgan havola yozuv yonida berilgan.
- **[qisman tasdiqlangan]** — asar faqat boshqa ilmiy ishlardagi iqtiboslar orqali topildi yoki baʼzi tafsilotlari (yil, nashriyot, hammualliflar) mos kelmadi. Iqtibos keltirishdan oldin kutubxona katalogida tekshiring.
- **[tekshirilmagan]** — qidiruvda bunday nashr topilmadi. Yozuv xotiradagi maʼlumotga asoslanadi va oʻzgarishsiz ishlatilmasin.

Mahalliy korpusdagi kitoblar (1-qism) bu yerda takrorlanmagan.

### 3.1. Ingliz tilida: monografiyalar va dissertatsiyalar

1. **Khalid, Adeeb.** *The Politics of Muslim Cultural Reform: Jadidism in Central Asia.* Berkeley: University of California Press, 1998 (Comparative Studies on Muslim Societies). ISBN 0-520-21355-6. **[tasdiqlangan]**
   - Manba: <https://publishing.cdlib.org/ucpressebooks/public/book/the-politics-of-muslim-cultural-reform-jadidism-in-central-asia.html>; <https://en.wikipedia.org/wiki/The_Politics_of_Muslim_Cultural_Reform>
   - Sahifalar soni manbalarda har xil koʻrsatilgan (xxiii+335, 353). Turkiston jadidchiligi boʻyicha asosiy monografiya.
2. **Khalid, Adeeb.** *The Politics of Muslim Cultural Reform: Jadidism in Tsarist Central Asia.* PhD dissertation, University of Wisconsin–Madison, 1993 (ilmiy rahbar: Kemal Karpat). **[tasdiqlangan]**
   - Manba: <https://dissdb.dev.rrchnm.org/scholar/16890>
   - Shu muallifning MA ishi ham bor: *The Politicization of Turkestani Jadidism, 1917–1920: A Study in Muslim Modernism* (1988). Manba: <https://minds.wisconsin.edu/handle/1793/38273>
3. **Khalid, Adeeb.** *Making Uzbekistan: Nation, Empire, and Revolution in the Early USSR.* Ithaca: Cornell University Press, 2015. ISBN 9780801454097. **[tasdiqlangan]**
   - Manba: <https://muse.jhu.edu/book/57712>
   - Project MUSEda ochiq kirishli nashri bor. 1917–1920-yillardagi jadidlar va sovet hokimiyati mavzusi.
4. **Khalid, Adeeb.** *Central Asia: A New History from the Imperial Conquests to the Present.* Princeton: Princeton University Press, 2021. ISBN 9780691161396. **[tasdiqlangan]**
   - Manba: <https://press.princeton.edu/node/45252>
5. **Khalid, Adeeb.** «The Fascination of Revolution: Central Asian Intellectuals, 1917–1927». Hokkaido universiteti Slavyan tadqiqotlari markazi nashrida, 137-betdan boshlanadi. **[tasdiqlangan]** (PDF ochib koʻrildi)
   - Manba: <https://src-h.slav.hokudai.ac.jp/coe21/publish/no14_ses/05_khalid.pdf>
   - Toʻplamning nomi va muharriri PDFdan aniqlanmadi.
6. **Allworth, Edward.** *Uzbek Literary Politics.* The Hague: Mouton, 1964 (Columbia University Publications in Near and Middle East Studies, Series A). **[tasdiqlangan]**
   - Manba: <https://en.wikipedia.org/wiki/Edward_A._Allworth_bibliography>; BSOAS taqrizi Cambridge Coreda.
7. **Allworth, Edward A.** *The Modern Uzbeks: From the Fourteenth Century to the Present. A Cultural History.* Stanford: Hoover Institution Press, 1990. **[tasdiqlangan]**
   - Manba: <https://cmeslibrary.sbs.arizona.edu/index.php/node/2064>
8. **Allworth, Edward A.** *Evading Reality: The Devices of ʻAbdalrauf Fitrat, Modern Central Asian Reformist.* Leiden–Boston: Brill, 2002 (Brill’s Inner Asian Library, 4). ISBN 9004125167. **[tasdiqlangan]**
   - Manba: <https://catalog.hathitrust.org/Record/003615577>
   - Kitobda W. L. Hanaway tarjimalari ham bor. Fitrat boʻyicha asosiy ingliz tilidagi monografiya.
9. **Allworth, Edward (ed.).** *Central Asia: 130 Years of Russian Dominance, A Historical Overview.* 3rd ed. Durham: Duke University Press, 1994. **[tasdiqlangan]**
   - Manba: <https://catalog.hathitrust.org/Record/002952479>
   - Avvalgi nashrlari: 1967 va 1989.
10. **Carrère d’Encausse, Hélène.** *Islam and the Russian Empire: Reform and Revolution in Central Asia.* Ingliz tiliga tarjimon Quintin Hoare. London: I. B. Tauris / Berkeley: University of California Press, 1988. **[tasdiqlangan]**
    - Manba: <https://catalog.hathitrust.org/Record/000951226>
    - Fransuzcha asli: *Réforme et révolution chez les musulmans de l’Empire russe*, 1966. Tauris nashrining ISBN raqami kataloglarda har xil berilgan.
11. **Becker, Seymour.** *Russia’s Protectorates in Central Asia: Bukhara and Khiva, 1865–1924.* Cambridge, MA: Harvard University Press, 1968. **[tasdiqlangan]**
    - Manba: <https://ci.nii.ac.jp/ncid/BA01296278>
    - 2004-yilda RoutledgeCurzon qayta nashr qilgan.
12. **Kamp, Marianne.** *The New Woman in Uzbekistan: Islam, Modernity, and Unveiling under Communism.* Seattle: University of Washington Press, 2006. **[tasdiqlangan]**
    - Manba: <https://libcat.wellesley.edu/Record/ocn757822988>
    - «Jadid reform of women» degan alohida bobi bor.
13. **Dudoignon, Stéphane A.; Komatsu Hisao (eds.).** *Islam in Politics in Russia and Central Asia (Early Eighteenth to Late Twentieth Centuries).* London–New York: Kegan Paul, 2001 (Islamic Area Studies, 3). **[tasdiqlangan]**
    - Manba: <https://catalog.hathitrust.org/Record/004281990>
14. **Pickett, James.** *Polymaths of Islam: Power and Networks of Knowledge in Central Asia.* Ithaca: Cornell University Press, 2020. **[tasdiqlangan]**
    - Manba: <https://muse.jhu.edu/article/841201/summary>
    - Buxoro ulamosi haqida. Jadidlarning raqiblari va muhitini tushunish uchun foydali.
15. **Kanlıdere, Ahmet.** *Reform within Islam: The Tajdid and Jadid Movement among the Kazan Tatars (1809–1917). Conciliation or Conflict?* Istanbul: Eren, 1997. **[tasdiqlangan]**
    - Manba: <https://relbib.de/Record/269069704>
    - Tatar jadidchiligi haqida. Qiyosiy fon uchun foydali.
16. **Abdirashidov, Zaynabidin.** *ʻAbdurraʼuf Fitrat in Istanbul: Quest for Freedom.* Berlin–Boston: De Gruyter, 2023. ISBN 9783110774856. **[tasdiqlangan]**
    - Manba: <https://www.degruyterbrill.com/isbn/9783110774856>
    - Ochiq kirishli PDF: <https://library.oapen.org/bitstream/20.500.12657/63502/1/9783110774856.pdf>

### 3.2. Ingliz tilida: maqolalar

17. **Komatsu Hisao.** «The Evolution of Group Identity among Bukharan Intellectuals in 1911–1928: An Overview». *Memoirs of the Research Department of the Toyo Bunko*, 47 (1989), 115–144. **[tasdiqlangan]**
    - Manba: <https://toyo-bunko.repo.nii.ac.jp/records/3276>

### 3.3. Fransuz va nemis tillarida

18. **Dudoignon, Stéphane A.** «Djadidisme, mirasisme, islamisme». *Cahiers du monde russe*, 37/1–2 (1996), 13–40. **[tasdiqlangan]**
    - Manba: <https://signal.sciencespo-lyon.fr/numero/26476>
    - Xuddi shu sonda: Dudoignon, «La question scolaire à Boukhara et au Turkestan russe, du « premier renouveau » à la soviétisation (fin du XVIIIe siècle–1937)», 133–210-betlar.
19. **Baldauf, Ingeborg.** *Schriftreform und Schriftwechsel bei den muslimischen Russland- und Sowjettürken (1850–1937): Ein Symptom ideengeschichtlicher und kulturpolitischer Entwicklungen.* Budapest: Akadémiai Kiadó, 1993 (Bibliotheca Orientalis Hungarica, 40). **[tasdiqlangan]**
    - Manba: <https://real-eod.mtak.hu/15864>
    - Imlo va yozuv islohoti mavzusi uchun asosiy manba.
20. **Kleinmichel, Sigrid.** *Aufbruch aus orientalischen Dichtungstraditionen: Studien zur usbekischen Dramatik und Prosa zwischen 1910 und 1934.* Budapest: Akadémiai Kiadó, 1993 (Bibliotheca Orientalis Hungarica, 39). **[tasdiqlangan]**
    - Manba: <https://real-eod.mtak.hu/15945>
    - Jadid dramasi va nasri poetikasi boʻyicha.
21. **Hayit, Baymirza.** *Turkestan im XX. Jahrhundert.* Darmstadt: Leske, 1956. **[tasdiqlangan]**
    - Manba: <https://opendata.uni-halle.de/handle/1981185920/36126>
    - Raqamlashtirilgan ochiq nusxasi bor.

### 3.4. Rus tilida

22. **Абдирашидов З.** *Исмаил Гаспринский и Туркестан в начале ХХ века: связи — отношения — влияние.* Ташкент: Akademnashr, 2011. **[qisman tasdiqlangan]**
    - Qidiruv natijasi sarlavha, nashriyot va yilni Oxus Society sahifasiga tayanib berdi. Lekin <https://oxussociety.org/?p=8144> ochilganda u yerda boshqa kitob chiqdi.
    - Shu muallifning maqolasi: «Во имя просвещения… Исмаил Гаспринский и Туркестанская дворцовая элита». *Minbar. Islamic Studies*, 15/3 (2022), 549–575, DOI 10.31162/2618-9569-2022-15-3-549-575. Qidiruv natijasida berilgan, maqola ochilmadi.
23. **Гафаров А. А.** «Эволюция взглядов на проблему джадидизма в советской историографии 30–60-х гг. XX в.». *Вестник РУДН. Серия: История России*, 2014, № 2. **[tasdiqlangan]** (PDF ochib koʻrildi)
    - Manba: <https://journals.rudn.ru/russian-history/article/download/3874/3328>
    - Sovet tarixshunosligida jadidchilikka qanday baho berilgani haqida.
24. «Джадидизм». *Большая российская энциклопедия* (onlayn). **[qisman tasdiqlangan]**
    - Manba: <https://bigenc.ru/c/dzhadidizm-3c08e5>
    - `manbalar_web/jadidchilik-tarixi.md` da faqat qidiruv parchasi sifatida qayd etilgan.
25. **Алимова Д. А.** *Джадидизм в Средней Азии: пути обновления, реформа, борьба за независимость.* Ташкент, 1999. **[tekshirilmagan]**
    - Qidiruvda bunday nashr topilmadi. Muallifning jadidchilik tarixi bilan shugʻullanishi gov.uz profilida tasdiqlanadi: <https://gov.uz/ru/academy/pages/alimova-dilorom-agzamovna>. Sarlavha va yil esa tasdiqlanmadi.

### 3.5. Oʻzbek tilida: monografiyalar, manbalar nashri, dissertatsiyalar

26. **Behbudiy, Mahmudxoʻja.** *Tanlangan asarlar.* Tuzuvchi va soʻzboshi muallifi Begali Qosimov. Toshkent: Maʼnaviyat, 1997, 231 b. («Istiqlol qahramonlari» turkumi). **[tasdiqlangan]**
    - Manba: S. Dudoignon taqrizi, *Abstracta Iranica*: <https://journals.openedition.org/abstractairanica/37091>
    - Taqrizga koʻra, toʻplamga «Padarkush», safar xotiralari, maqolalar hamda Fitrat, Ayniy va Choʻlponning Behbudiy haqidagi xotiralari kiritilgan.
27. **Qosimov, Begali.** *Milliy uygʻonish: jasorat, maʼrifat, fidoyilik.* Toshkent: Maʼnaviyat, 2002. **[qisman tasdiqlangan]**
    - Faqat boshqa ilmiy ishlardagi iqtiboslar orqali topildi. Koʻpchilik iqtiboslar 400 bet deydi, bittasi 448 bet. Bitta iqtibosda 1999-yil koʻrsatilgan.
    - Katalog yozuvi topilmadi.
28. **Qosimov B. va boshq.** *Milliy uygʻonish davri oʻzbek adabiyoti* (oliy oʻquv yurtlari uchun darslik). **[qisman tasdiqlangan]**
    - Bunday darslik yaratilgani va B. Qosimov unga bosh-qosh boʻlgani tilga olingan: <https://yuz.uz/uz/news/jadidchilikni-nega-va-qanday-organishimiz-kerak>.
    - Hammualliflar, nashriyot va yil tasdiqlanmadi. 2004-yil deb koʻrsatish [umumiy bilim — tekshirilmagan].
29. **Fitrat, Abdurauf.** *Tanlangan asarlar.* 1-jild. Toshkent: Maʼnaviyat, 2000. **[qisman tasdiqlangan]**
    - Ilmiy maqolalardagi iqtiboslar orqali topildi; 3-jild 2003-yilda chiqqan deb keltiriladi: <https://journal.fdu.uz/index.php/sjfsu/article/view/7120>.
    - Jildlar soni va tuzuvchisi tasdiqlanmadi.
30. **Sharafiddinov, Ozod.** *Choʻlponni anglash.* Toshkent: Xazina, 1994. **[tasdiqlangan]**
    - Manba: <https://en.wikipedia.org/wiki/Ozod_Sharafiddinov>
    - Wikipedia maqolasining bir joyida 1993-yil deyilgan. Inglizcha tarjimasi *Understanding Choʻlpon* (tarjimon Sh. Ochildiyeva) haqida: <https://fledu.uz/language/en/reviving-classics-shahnoza-ochildiyevas-journey-through-understanding-cholpon/>.
31. **Karimov, Naim.** *Choʻlpon (maʼrifiy roman).* Toshkent: Sharq, 2003. **[tasdiqlangan]**
    - Manba: ilmiy maqoladagi iqtibos va yuz.uz maqolasi: <https://yuz.uz/uz/news/cholpon-va-turk-adabiy-hayoti>
    - Muallif KGB jinoyat ishi materiallaridan foydalangan.
32. **Boltaboyev, Hamidulla.** *Fitrat va jadidchilik.* Toshkent: Alisher Navoiy nomidagi Oʻzbekiston Milliy kutubxonasi nashriyoti, 2007. **[tasdiqlangan]**
    - Manba: bir necha ilmiy maqoladagi iqtiboslar, masalan <https://inlibrary.uz/index.php/cajar/article/view/127461>
33. **Rizayev, Shuhrat.** *Jadid dramasi.* Toshkent: Sharq, 1997. **[qisman tasdiqlangan]**
    - 1997-yil muallifning biografik maʼlumotnomasida berilgan, «Sharq» nashriyoti esa yilsiz iqtibosda koʻrsatilgan.
34. **Karimov, Bahodir.** *XX asr oʻzbek adabiyotshunosligida talqin muammosi (qodiriyshunoslik misolida).* Dissertatsiya, Toshkent, 2002 (ilmiy maslahatchi: U. Normatov). **[tasdiqlangan]**
    - Manba: <https://journals.nuu.uz/index.php/1/article/download/3705/1492>
    - Shu muallifning (B. Karim) *Abdulla Qodiriy va germenevtik tafakkur* (Toshkent: Akademnashr, 2014) kitobi **[qisman tasdiqlangan]**: faqat iqtibosda uchradi.
35. **Aliyev, A.** *Mahmudxoʻja Behbudiy.* Toshkent: Yozuvchi, 1994. **[qisman tasdiqlangan]**
    - Faqat bitta maqoladagi izohda uchradi: <https://oriens.uz/media/journalarticles/4_Maxsudova_Onorxon_Bekmurod_qizi_19-23.pdf>
36. **Turdiyev, Sherali.** Germaniyada oʻqigan turkistonlik talabalar haqidagi kitob. Maqolada inglizcha «They studied in Germany» deb berilgan; oʻzbekcha asl sarlavhasi va yili koʻrsatilmagan. **[qisman tasdiqlangan]**
    - Manba: <https://cyberleninka.ru/article/n/uzbek-scholar-sherali-turdiev-discoverer-of-the-closed-pages>
    - Shu manbaga koʻra, u Zaki Validiy Toʻgʻonning xotiralarini oʻzbek tiliga tarjima qilgan («Boʻlinganni boʻri yer», 1997).
37. **Quronov, Dilmurod.** «Choʻlpon nasri poetikasi» (doktorlik dissertatsiyasi). **[tekshirilmagan]**
    - Lotin va kirill yozuvidagi qidiruvda topilmadi. D. Quronovning Choʻlpon ijodini tadqiq qilgani esa tasdiqlangan (ziyouz.uz; 1-qismdagi risolasi).
38. **Dolimov, Ulugʻbek.** *Turkistonda jadid maktablari.* Toshkent, 2006. **[tekshirilmagan]**
    - Qidiruvda topilmadi.
39. **Ziyoyev, Hamid.** *Turkistonda Rossiya tajovuzi va hukmronligiga qarshi kurash.* Toshkent: Sharq, 1998. **[tekshirilmagan]**
    - Bu nashr topilmadi. UzA xabariga koʻra, H. Ziyoyevning shu mavzudagi asari Turkiyada turk tilida chiqqan: <https://uza.uz/ar/posts/professor-hamid-ziyoyev-asari-turkiyada-turk-tilida-dunyo-yuzini-kordi_875588>.
40. **Boltaboyev, Hamidulla.** Fitrat ilmiy merosi boʻyicha doktorlik dissertatsiyasi (1996). **[tekshirilmagan]**
    - Uning filologiya fanlari doktori ekanligi va ilmiy yoʻnalishi («Fitrat’s scientific heritage») tasdiqlangan: <https://nuu.uz/en/?p=15116>. Dissertatsiya nomi va yili esa tasdiqlanmadi.

### 3.6. Jadid asarlarining ingliz tiliga tarjimalari

41. **Choʻlpon.** *Night and Day: A Novel.* Tarjimon Christopher Fort. Boston: Academic Studies Press, 2019 (Central Asian Literatures in Translation). ISBN 9781644690475. **[tasdiqlangan]**
    - Manba: <https://www.degruyterbrill.com/document/doi/10.1515/9781644690482/html>
42. **Qodiriy, Abdulla.** *Bygone Days.* Tarjimon Mark Reese. **[tasdiqlangan]** (tarjima mavjudligi tasdiqlandi)
    - Manbalar: <https://kun.uz/en/news/2019/12/30/abdullah-qodiriys-bygone-days-presented-in-english-in-us>; <https://en.wikipedia.org/wiki/O%CA%BBtkan_kunlar>
    - Nashr yili (2018, 2019 yoki 2020), sahifalar soni va nashriyot (Bowker / Muloqot) manbalarda har xil berilgan.

### 3.7. Keyingi qidiruv uchun tavsiyalar

- [tekshirilmagan] va [qisman tasdiqlangan] yozuvlarni quyidagi joylarda tekshiring:
  - Alisher Navoiy nomidagi Oʻzbekiston Milliy kutubxonasi katalogi;
  - OAK dissertatsiyalar bazasi;
  - ZiyoNet;
  - WorldCat.
- Ingliz tilidagi qoʻshimcha adabiyot uchun Hamilton Collegedagi Khalid bibliografiyasi foydali: <https://academics.hamilton.edu/central-asian-history/khalid-resources>. U 2-qismda ham bor.
- 2-qismdagi ilmiy maqolalar (Oriens, inlibrary.uz, inscience.uz, FDU, BuxDU, CyberLeninka) koʻpincha yangi (2020–2026) nashrlar. Ularning roʻyxatlaridan 1990–2000-yillardagi asosiy monografiyalarni topish mumkin.
