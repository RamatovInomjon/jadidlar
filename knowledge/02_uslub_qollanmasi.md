# Jadid adabiyoti uslubi: qiyosiy qoʻllanma

> **Maqsad.** Bu fayl bilim bazasining asosiy uslub qoʻllanmasi. Unda jadid adabiyotining (taxminan 1903–1937-yillar) til va uslub belgilari qiyosiy tarzda tasvirlanadi. Qoʻllanma uch ish uchun moʻljallangan: matnni tahlil qilish, muallifni aniqlash (stilometriya) va davr uslubida oʻquv stilizatsiyasi yaratish.
>
> **Manbalar.** (1) `mualliflar/` papkasidagi 13 ta muallif profili; (2) `asarlar/` papkasidagi asar kartochkalari va ularning uslub dayjestlari (`_holat/style_input.json`, 45 ta yozuv); (3) `manbalar_web/adabiyot-poetika-til.md`; (4) `_holat/chunks/` dagi matnlar ustida shu qoʻllanma uchun qilingan avtomatik hisoblar (7-boʻlim).
>
> **Belgilash qoidalari.**
> - «…» ichidagi iqtiboslar asar kartochkalari va manba matnlaridan **aynan** koʻchirilgan. Ularning imlosi, apostrof belgilari (ʻ, ‘, ’, ʼ) va tinish belgilari oʻzgartirilmagan, shuning uchun bir iqtibosda «oʻ», boshqasida «o‘» koʻrinishi mumkin. Bu nashrlardagi farq, xato emas.
> - Iqtibosdan keyin qavs ichida asar nomi beriladi. Asar sanasi kartochkadagi maʼlumotga tayanadi. Kartochkada ham, veb-manbada ham boʻlmagan sana yoki fakt «[umumiy bilim — tekshirilmagan]» deb belgilangan.
> - «Stilizatsiya, asl matn emas» deb belgilangan matnlarni shu qoʻllanma muallifi yozgan. Ularni hech qachon jadidlarning oʻz soʻzi sifatida keltirmang.
> - Morfologik va leksik misollar (qoʻshtirnoqsiz, kursivda yoki «» ichida yakka soʻz holida) profillar va kartochkalardagi kuzatuvlardan olingan.
>
> **Asosiy ogohlantirish.** Bazadagi barcha matnlar 2024–2026-yillardagi elektron nashrlar. Ular arab yozuvidan (baʼzan kirill orqali) zamonaviy lotin yozuviga oʻgirilgan va **turli darajada modernizatsiya qilingan**. Masalan, «Kecha va kunduz» va «Oʻtkan kunlar» nashrlarida «koʻb» shakli deyarli yoʻq, «Afgʻon sayohati» va «Mezon uz-zamon»da esa saqlangan (7.6-boʻlimga qarang). Fitratning «Najot yoʻli», «Oila» va «Hind sayyohining qissasi» asarlari forschadan qilingan **tarjima**. Ularda kompozitsiya va ritorika Fitratniki, til esa tarjimonniki. Uslubiy xulosa chiqarishda bu ikki omil doim hisobga olinishi kerak.

---

## Mundarija

1. Jadid adabiy tilining umumiy belgilari
2. Janrlar poetikasi
3. Davrlar boʻyicha evolyutsiya
4. Mualliflararo qiyosiy jadval
5. Mualliflarning «uslub izi» (fingerprint)
6. Stilizatsiya boʻyicha amaliy qoʻllanma
7. NLP va kompyuter lingvistikasi uchun eslatmalar

---

## 1. Jadid adabiy tilining umumiy belgilari

Jadid adabiy tili yagona meʼyorga ega boʻlmagan, **oʻtish davri tili** edi. Unda kamida toʻrt manba qoʻshilib ketgan:

1. **Chigʻatoy (eski oʻzbek) yozma anʼanasi:** -gʻa, -ub, -gʻon, -dur, -mak, ul/shul, erur.
2. **Gaspirali «Tarjimon»i orqali kelgan umumturkiy-usmonli va tatar matbuot tili:** oʻlmoq (= boʻlmoq), -inda, -ajak, ban/san, vor, -uv/-ov harakat nomlari. Vadud Mahmud 1925-yilda buni ochiq tan olgan: «Bizda yangi adabiyot Turkiya adabiyoti taqlidi bilan boshlang‘ondir.» (`adabiyot-poetika-til.md`, 1.1).
3. **Arab-fors kitobiy-ilmiy va diniy qatlami:** izofa, arabcha siniq koʻplik, muannas moslashuvi, «-ki/-kim» bilan qurilgan forscha qoʻshma gap.
4. **Jonli shahar va qishloq nutqi:** Toshkent, Fargʻona, Samarqand va Buxoro shevalari, maqol, qargʻish, erkalash.

Bu toʻrt qatlamning nisbati muallifga, janrga va davrga qarab oʻzgaradi. Stilometriya uchun eng foydali belgilar ham shu nisbatlardan kelib chiqadi.

### 1.1. Morfologiya va eski imlo

Quyidagi jadvaldagi shakllar bazadagi deyarli barcha jadid matnlarida turli chastotada uchraydi. «Kimda koʻp» ustuni profillar va kartochkalardagi kuzatuvlarga asoslangan.

| Hodisa | Eski shakl (misol) | Hozirgi meʼyor | Kimda ayniqsa koʻp |
|---|---|---|---|
| Joʻnalish kelishigi, jarangsiz undoshdan keyin ham | -gʻa/-qa: «xalqgʻa», «sonduqgʻa», «maktabgʻa», «tuproqg‘a» | -ga/-ka/-qa | Behbudiy, Fitrat (oʻzbekcha asl), Qodiriy («Oʻtkan kunlar»), Choʻlpon (1914–1927) |
| Usmonli-tatarcha joʻnalish | -a / -na: «millata», «ilma», «biza», «janoblarina» | -ga | Avloniy, Tavallo, Hamza, Munavvar qori, Ibrat |
| Oʻrin va chiqish kelishigi (pronominal *n*) | -inda/-indan: «orasinda», «arkinda», «ostindan» | -ida/-idan | Fitrat («Hind ixtilolchilari»da ~130 marta), Behbudiy, Avloniy, Qodiriy («Tinch ish») |
| Chiqish kelishigi | -din: «vaqtdin», «gʻaflatdin», «qoʻlidin» | -dan | Behbudiy (1903), Munavvar qori, Ibrat, Hamza |
| Qaratqich oʻrnida -ni | «Bizni Turkiston», «mulloni ilmi» | -ning | Behbudiy, Ibrat, Hamza («Bizni Turkiston eli»); nashrlar koʻpincha «(ng)» qoʻshib tiklaydi |
| Ravishdosh | -ub: «boʻlub», «kelub», «oʻqub» | -ib | Avloniy, Choʻlpon (1914), Behbudiy, Ibrat |
| Oʻtgan zamon sifatdoshi | -gʻan/-gʻon/-qon/-kan: «qolgʻon», «yotqon», «oʻtkan» | -gan | hamma; -gʻon/-qon Choʻlponda ayniqsa izchil |
| Hozirgi-kelasi zamon sifatdoshi | -aturgʻon/-adurgan/-ayturgan: «qiladurgʻon», «bilaturgʻan» | -adigan | Behbudiy, Avloniy, Choʻlpon, Qodiriy (1930-yillarda ham) |
| Kesimlik | -dur/-dir: «lozimdur», «muqarrardur» | -dir (kam ishlatiladi) | Avloniy («Turkiy guliston»da ≈470 marta), Fitrat (~170–200 marta bir dramada) |
| Aorist | -ur/-ar, inkor -mas: «boʻlur», «berilmas» | -adi/-maydi | hamma, ayniqsa remarkalarda: «Parda tushar» |
| Harakat nomi | -mak/-moq: «oʻqumoq», «bilmak istagi» | -ish, -moq | hamma |
| Istak va buyruq | -sun, -gʻil, -gay/-gʻay, -ayin, -ayluk | -sin, -gin, -ay, -aylik | -ayluk Behbudiyga xos; -gʻusi, -gʻali Fitratga xos |
| Usmonlicha «oʻlmoq» (= boʻlmoq) | «oʻldigʻindan», «oʻlur», «oʻlan» | boʻlmoq | Avloniy («Afgʻon sayohati»da «oʻldigʻindan» 36 marta), Ibrat, Munavvar qori (erta), Tavallo, Hamza |
| Usmonlicha kelasi zamon | -ajak: «ichajaksiz», «oʻqulajak» | -adigan, -ar | Avloniy, Ibrat, Choʻlpon (1914, «Kecha»), Fitrat tarjimalari, Ayniy |
| Shaxs qoʻshimchasi | -men/-sen: «istaymen», «soʻraymen» | -man/-san | Fitrat (1920-yillar), Choʻlpon (1919-yilgi «Goʻzal») |
| III shaxs koʻplik hozirgi zamon | -alar/-aylar: «kelalar», «istaylar» | -adilar | Fitrat |
| -liq/-lik va -lik = -li | «doʻstliq», «chiroylik», «kuchlik», «hasratlik» | -lik; -li | Qodiriy, Choʻlpon, Behbudiy |
| Eski olmoshlar | ul, bul, shul, oʻshal, mun-, menim/manim, man/san, ban/banim | u, bu, shu, mening | ban/banim Avloniy, Fitrat va Hamzada; man/san Behbudiy, Avloniy va Ibratda |
| Fonetik variantlar | koʻb, emdi, oltun, xotun, qarshu, koʻngul, nimarsa, oqcha/aqcha, Toshkand | koʻp, endi, oltin… | hamma, nashr modernizatsiyasiga qarab |
| Davomli hozirgi zamon | -yotir: «qaytayotir», «gapirayotirman» | -yapti | Choʻlpon (1930-yillar), Ayniy |
| Evidensial shakllar | emish/-mish, ekan | emish, ekan | hamma, lekin vazifasi farq qiladi (5-boʻlimga qarang) |

**Muhim kuzatishlar:**

- **Imlo beqarorligi meʼyor edi.** Bitta matn ichida «-gʻa» va «-ga», «-ub» va «-ib», «man» va «men» aralash keladi. Bu qisman davr imlosining tabiati, qisman zamonaviy nashrlarning qisman modernizatsiyasi natijasidir. Masalan, Avloniy «Turkiy guliston»ining epigrafi Oltinbek kitobida «man» bilan, 2024-yilgi nashrda esa «men» bilan berilgan (Avloniy profili).
- **Ayrim shakllar faqat bitta muallifga xos.** Behbudiyda -ayluk istak shakli («kirayluk», «etayluk»), Fitratda -alar/-aylar, Hamzada Fargʻona shevasidagi «qoʻrqam / koʻram», Ibratda dialektal «oʻranmoq» shular jumlasidan.
- **Tarjima matnlaridagi arxaik shakllar tarjimon stilizatsiyasi boʻlishi mumkin.** Fitrat profili «Najot yoʻli»dagi -ajak, -ur va «ul» shakllari haqida shuni ogohlantiradi.

### 1.2. Sintaksis

Jadid nasrining sintaksisi ikki qutb oʻrtasida harakatlanadi: **uzun kitobiy davr** va **qisqa, kesik zarba gapi**. Har bir muallifning oʻziga xosligi shu ikki qutbni qanday almashtirishidadir.

1. **Ravishdosh zanjiri bilan qurilgan uzun gap.** Kesim eng oxirida keladi. Misollar:
   - «Pishgan vaqtda qurutub olub, bordonga solub, boylarga tortuq qilub, pul olub, butun avqotini tut sotub o‘tkazur edi.» («Toʻgʻrilik», Avloniy)
   - «Qilgʻilik qilinib, bechora qizning qizligi olinib, boʻlar ish boʻlib bitgandan keyin, ikkalasi jimjit boʻlib ikki tomonga choʻzilishdilar.» («Novvoy qiz», Choʻlpon)
2. **Forscha tipdagi «-ki / -kim» qoʻshma gapi.** Bosh gap «…durki», «…dirkim», «Koʻrdiki», «maʼlum boʻldiki» bilan tugaydi va izoh undan keyin keladi:
   - «Ulfat. Xoqonimizg‘a ma’lumdirkim, podshohliq qon bilan sug‘orilaturg‘an bir og‘ochdir.» («Abulfayzxon», Fitrat)
   - «Eshmurod oʻz uyida oʻturub ediki, birov eshik qoqdi.» («Qurboni jaholat», Choʻlpon)
3. **Kesik, aforistik gap uzun davrdan keyin keladi.** Masalan, Behbudiyda «Oʻzimizdan duxtur yoʻq.» (profil), Ibratda «Turmoq asri emas.» («Mezon uz-zamon»), Ayniyda «Bu kishi domla edi.» («Eski maktab»).
4. **Polisindeton («va» zanjiri) va asindeton.** Behbudiyning 1903-yilgi tarjimasida «va» kamida 496 marta keladi («Bir vafolik zaifaning xususida» kartochkasi). Fitratning 1919–1924-yillardagi oʻzbekcha badiiy matnlarida esa «va» deyarli yoʻq (5-boʻlimga qarang).
5. **Ritorik soʻroqlar zanjiri va kutilmagan javob.** Masalan: «Bizni kemirguvchi illatlar deganda, zaxm-u maraznimi gumon etarsiz? Yoyinki, sil, (oʻpka sili) va maxavliknimi dersiz? Yoʻq, andan ham yamonroq» (Behbudiy, «Odob-axloq kitobi»).
6. **Faraziy eʼtiroz va javob (prolepsis).** Behbudiy («Albatta, munga javob berursizki…»), Munavvar qori («Baʼzi nodonlar dermishki…») va Fitrat («dersiz?», «Indamaysiz?») shu usuldan foydalanadi.
7. **Gradatsiya-zanjir:** «Chunki hukumat uchun xalq, xalq uchun hunar, hunar uchun ilm, ilm uchun aqcha lozimdur.» («Turkiy guliston», Avloniy)
8. **Gap oxirining modal tizimi:**
   - -dur/-dir qatʼiy hukmni bildiradi;
   - edi va -ar edi tasvir va odatni bildiradi;
   - ekan anglash, taajjub yoki eshitilgan gapni bildiradi;
   - emish/-mish eshitma xabarni yoki kinoyani bildiradi;
   - erur yuksak uslubga xos.
   Bu tizimdan foydalanish muallifni farqlashda muhim belgi. Masalan, Behbudiyning «Bir aʼmo bolaning hasrati»da «emish» butun matnning qurilish usuli, Ibratda mullolar fatvosiga istehzo vositasi.
9. **Tinish belgilari ham ifoda vositasi.** «!!!», «?!», «!..», koʻp nuqta va tire koʻp ishlatiladi. «Abulfayzxon»da 65 ta «?!» bor. Choʻlponning hikoyalarida deyarli har bir abzas «…» yoki «!..» bilan tugaydi.

### 1.3. Leksik qatlamlar

| Qatlam | Namunalar | Vazifasi | Kimda ustun |
|---|---|---|---|
| Arab-fors kitobiy va izofali | «ilmi zamoniy», «makotibi ibtidoiyya», «saodati dorayn», «vazifayi insoniya», «xizmati milliya» | ilmiy-axloqiy atama, nufuz | Behbudiy, Avloniy, Ibrat, Munavvar qori, Fitrat (1909–1916) |
| Arabcha diniy-fiqhiy | farzi ayn, hiylai sharʼ, isqot, bidʼat, fatvo, mahr | dalil yoki satira nishoni | Ibrat, Qodiriy («Baxtsiz kuyov»), Hamza (parodiya) |
| Jadid kalit soʻzlari | millat, taraqqiy, maorif, maʼrifat, jaholat, gʻaflat, ittifoq, istiqbol, hurriyat | dastur leksikasi | 1906–1918-yillardagi barcha mualliflar |
| Purist turkiy (chigʻatoychilar) | ulus, el, erk, ezgu, yozuq, tilchi, oʻron, unum, sezgu, kimsalar, yozgʻich, ochun, tegra, yogʻdu | «turkchalashtirish» dasturi | Fitrat (1919-yildan), Elbek, Botu, Choʻlpon sheʼriyati |
| Usmonli-tatar morfologik-leksik | vor, choʻq, onjaq, aqcha, afandi, ishta, cholishmoq, dagil | umumturkiy kitobiy til belgisi | Avloniy, Tavallo, Hamza, Munavvar qori, Zafariy (1918) |
| Rus-yevropa oʻzlashmalari (talaffuz boʻyicha) | duxtur, bonka, zakunchi, pristuf, veksil, gʻazita, lamfa, siyazd, ispasiba | mustamlaka zamonaviyligi, koʻpincha salbiy yoki kulgili | Behbudiy («Padarkush»), Ibrat, Avloniy, Qodiriy, Choʻlpon (satira) |
| Xalq-maishiy va sheva | moshkichiri, chandir, qumgʻon, soʻri, jindak, inaykin, egachi, oʻranmoq | realistik detal, satira, nutqiy portret | Choʻlpon (Andijon), Qodiriy (Toshkent), Hamza (Qoʻqon), Ayniy (Buxoro), Tavallo |
| Sovet atamalari (1920–1930-yillar) | kolxoz, brigadir, pioner, zayom, MTS, firqa, jenotdel | yangi voqelik, koʻpincha ironik | Qodiriy («Obid ketmon»), Choʻlpon («Meros»), Tavallo («Mushtum») |

**Leksik tanlov davr belgisi.** Masalan, Fitratning «Hind ixtilolchilari» va «Abulfayzxon»ida *millat, vatan, taraqqiy, maorif* soʻzlari ijobiy maʼnoda deyarli uchramaydi. «Hurriyat, musovot, adolat» faqat ingliz zobiti ogʻzida «maʼnosiz soʻzlar» sifatida keladi (Fitrat profili). Ayniyning «Eski maktab»ida jadid kalit soʻzlari umuman yoʻq (Ayniy profili). Avloniyning «Advokatlik osonmi?» asarida esa senzura sharoitida «millat», «vatan», «hurriyat» oʻrniga «xalq», «el», «turkistonliklar» ishlatiladi.

### 1.4. Maʼrifatparvar ritorika: asosiy metafora tizimlari

Jadid ritorikasi bir necha barqaror metafora tizimiga tayanadi. Ular bir-birini toʻldiradi.

1. **Uyqu va uygʻonish (gʻaflat).** Misollar: «Yotursan tobakay g‘aflat quchog‘inda, uyon, millat,» («Uygʻon, millat», Avloniy); «Uxlama ko‘p, o‘zbek eli, asri taraqqiy vaqtida.» (Hamza, «Sheʼrlar»); «Bu bizning Turkistonimiz gʻaflatdan uygʻonurmi? Yoʻqmi?» («Qurboni jaholat», Choʻlpon).
2. **Kasal va tabib.** Millat bemor, jaholat kasallik, ilm davo, tarbiyachi tabib sifatida tasvirlanadi. Behbudiyda «illat», Avloniyda «jahl maraz», Tavalloda «Tabibo, tort qoʻlingni! Doru darmoning asar etmaz,» («Ey Vatan, ezgu Vatan»).
3. **Nur va zulmat.** «Olamning xurshidi kundir, odamning xurshidi ilm, / Olamning zulmoti tundir, odamning nodori ilm.» (Hamza, «Sheʼrlar»). Choʻlponda bu tizim taxallusning oʻziga ham singgan.
4. **«Biz» va «ular» (boshqa millatlar) antitezasi.** Misollar: «Yevrupolilardan odati qabihalarin kasb qilurmiz. Ammo madaniyat, funun va sanoiʼlariga koʻz yumub tururmiz.» («Qurboni jaholat»); «O‘zgalar etmoqda har kun bing sanoyi ixtiro, / Biz aqalli topmoqqa beranj bir non istamas,» (Hamza).
5. **Bogʻ va bulbul allegoriyasi siyosiy maʼnoda.** Bulbul millat yoki shoir, gul Vatan, xor zolim, qafas asorat sifatida keladi. Fitratda: «Mungli bulbul, mungdosh boʻldik, kel sayra, / Bir qip-qizil gulga men ham tutildim.» («Hind ixtilolchilari»).
6. **Texnika ironik metafora sifatida.** Avloniyda poyezd «madaniyat aygʻiri» («Afgʻon sayohati»), Choʻlponning 1914-yilgi hikoyasida «XX asr madaniyati keldi ajdar kabi pishillab» («Doʻxtur Muhammadiyor»).
7. **Tarozu va mezon (Ibrat), daraxt va qon (Fitrat), kishan va qafas (Choʻlpon, Elbek).** Bular har bir muallifning oʻz markaziy metaforasi.

### 1.5. Murojaat shakllari

| Shakl | Misol | Kimda xarakterli |
|---|---|---|
| Millatga, xalqqa xitob | «Ey xalq! Ey musulmonlar!» (Behbudiy); «Ey bechora millat!» (Fitrat, «Hind sayyohi»); «Ey qardoshlar, voy millatdoshlar!!!» (Munavvar qori) | 1906–1918 publitsistikasi |
| Tinglovchiga hurmatli murojaat | «Muhtaram birodarlar!», «Hamiyatparvar turkistonliklar!» (Zafariy), «Jamoat!» (Munavvar qori) | maqola va nutq |
| Iliq-siyosiy murojaat | «Chirogʻlarim!», «Bovurlar!» (Behbudiy, 1917–1918) | muxtoriyat davri |
| Oʻquvchiga «biz» va «siz» bilan murojaat | «muhtaram oʻqugʻuchi» (Qodiriy); «deysiz?», «boqchaga tushasiz» (Choʻlpon, «Kecha») | roman |
| Jonlantirilgan obyektga «sen» deb murojaat | «Goʻzal Turkiston, senga ne boʻldi?» (Choʻlpon); «Onam! Seni qutqarmoq uchun jonmi kerakdir?» (Fitrat) | 1917–1925 lirikasi |
| Taxallus orqali oʻziga murojaat (maqtaʼ) | «Basdur, ey Hijron, jaholatdan gapurmak shunchalar,» (Avloniy); «Ey Nihon, boʻyla musulmonlik ila sharmandasen,» (Hamza) | aruzdagi gʻazal |
| Xudoga munojot | «Xayr, Ollohim! Xayr!» (Behbudiy, «Bir aʼmo…»); «yo Rab» (Avloniy, Zafariy) | sheʼr va lirik nasr |
| Kamtarlik formulasi | «Kamina», «Faqir», «banda oʻzum», «asari nochizonim», «Bandai ojiz» | risola, muqaddima, xat |
| Saroy va ijtimoiy hurmat shakli | «Taqsir…», «Mir Vafo qulingiz oʻtdilar» («Abulfayzxon») | drama, satira |

### 1.6. Publitsistik usullar

1. **Statistika va raqam dalil sifatida.** Masalan: «30 sana muqaddam Samarqandni Yomini mahallasinda 300 alochabof ishchi bor edi.» (Behbudiy profili); Munavvar qorida «yuzdan toʻqson»; Ibratda «uch soatda toʻrt soʻm».
2. **Qiyos: «boshqa millatlar» va «biz».** Munavvar qorida bu qolip «X … ekan, bizda Y» shaklida keladi (profil, 1923-yilgi matn).
3. **Hikoyat yoki latifa dalil sifatida.** Ibratning samovar va lampa latifalari, Fitratning «yapon sayyohi» hikoyati, Munavvar qori masallaridagi «Hissa:».
4. **Oyat va hadis, keyin tarjima.** Avloniyda hadis «…afandimiz: “…”, – demishlar» formulasi bilan keltiriladi. Ibratda oyatdan keyin «Yaʼni…» bilan sharh keladi.
5. **Chekinishni boshqarish formulalari.** Masalan: «Oʻtayluk.», «Maqsaddan uzoq tushdik.» (Behbudiy); «Endi asl maqsadga qaytaylik» (Fitrat); «Bir oz jiddiylashaylik, mavzudan uzoqlashmaylik.» («Obid ketmon», Qodiriy).
6. **Yakun formulalari.** «Xulosa, …», «Bas, maʼlum boʻldiki», «Alhosil», «Hosili kalom», «Mana…» ishlatiladi. Matn duo («Omin!»), shior («Yashasun…») yoki «Hissa:» bilan tugaydi.
7. **Ellipsisli satira va istehzoli qoʻshtirnoq.** Masalan: «Biznikilar juft oti-la, arobasi-la, toʻyi ila va… la faxr etar.» (Behbudiy, «Odob-axloq kitobi»); Choʻlponda «“moʻmin va soʻfi”», Ayniyda «“tabarruk”».
8. **Qavs ichida izoh berish.** Masalan: «eʼtiroz (prutest)» (Behbudiy), «aʼyon (senator)» (Choʻlpon), «el tomosha (teatru)si» (Zafariy), «sifr (nol)» (Ayniy).

### 1.7. Kalit tushunchalar lugʻati

Jadvalda jadid matnlaridagi asosiy tushunchalar berilgan. «Davr» ustuni soʻz qachon eng faol boʻlganini koʻrsatadi. Bu bazadagi matnlar boʻyicha qilingan umumlashma.

| Soʻz | Maʼnosi | Eng faol davri | Izoh |
|---|---|---|---|
| millat | xalq, din-millat jamoasi | 1906–1918 | 1920-yillarda Fitrat va Botuda *ulus, el* bilan almashadi |
| vatan | ona yurt | 1906–1918 | Hamzada «jonlarni jononi Vatan»; Fitratda *yurt* |
| taraqqiy (va taoliy) | rivojlanish, yuksalish | 1906–1918 | Choʻlponning 1924-yilgi «Taraqqiy» hikoyasida ironik refren: «Shuning bilan taraqqiy qilib boʻlurmi?» |
| maorif, maʼrifat, ilm (-u funun) | taʼlim, bilim | butun davr | Ibratda «ilmu hunar» markaziy shior |
| jaholat, nodonlik, beilmlik | ilmsizlik | 1906–1918 | Behbudiyda jonlantiriladi: «Uyingizni nodonlik buzdi.» |
| gʻaflat (uyqusi) | befarqlik, uyqu | 1906–1918 | uygʻonish metaforasining markazi |
| usuli jadid / usuli savtiya / usuli taʼlim | yangi usul maktabi | 1901–1917 | Ibratda «usuli qadim» bilan qarama-qarshi |
| ittifoq / nifoq, iftiroq | birlik / boʻlinish | 1906–1918 | Ibratda 2-mezonning oʻqi |
| hamiyyat, gʻayrat, himmat | millatparvarlik shijoati | 1906–1918 | Zafariy: «Hamiyatparvar turkistonliklar!» |
| istiqbol | kelajak | 1906–1923 | Choʻlponda kinoya: «istiqbol-mistiqbol degan oʻruscha soʻzlar» |
| hurriyat | erkinlik | 1917–1919 | 1919-yildan Avloniyda ironik; Fitratda *erk* bilan almashadi |
| muxtoriyat | avtonomiya | 1917–1918 | Behbudiy: «Yashasun Turkiston muxtoriyati!» (profil) |
| erk, erkin | hurriyat (purist) | 1919–1930 | Botuda kult soʻz; Choʻlpon va Elbekda ham bor |
| istiqlol | mustaqillik | 1917–1925 | Fitrat: «Yashasun Hinduston, yashasun istiqlol!» |
| madaniyat | tamaddun | butun davr | Avloniyda apostrofa: «Oh, zolim madaniyat»; Fitratda «Madaniyat degan g‘arbli olbosti» |
| ulus, el, yurt | millat, xalq, vatan (purist) | 1919–1930 | Fitrat, Elbek, Botu |
| ezgu, tilak, unum, sezgu | xayrli, orzu, foyda, his | 1919–1930 | purist yasamalar |
| yoʻqsil | kambagʻal, proletar | 1919–1930 | Choʻlpon va Botu sheʼriyatida |
| kolxoz, zayom, pioner, brigadir | sovet voqeligi | 1930-yillar | Qodiriy va Choʻlponning kech nasrida |
| ibrat, ibratnoma | saboq, didaktik drama | 1911–1916 | «Padarkush»ning janr taʼrifi |
| hissa | masal xulosasi | 1907–1916 | Munavvar qori, Hamza |
| mezon, vazn qilmoq | tarozu, oʻlchamoq | 1916–1920 | Ibratning ramka-atamasi |

---

## 2. Janrlar poetikasi

Jadid adabiyoti janrlar tizimini deyarli yangidan qurdi. Drama, roman, zamonaviy hikoya va gazeta maqolasi oʻzbek adabiyotiga shu davrda kirib keldi. Mumtoz janrlar (gʻazal, masnaviy, risola, safarnoma) esa yangi mazmun bilan toʻldirildi. Vadud Mahmud 1925-yilda yangi adabiyotning vazifasini shunday taʼriflagan: «bu kungi adabiyotimiz jamiyatimizning islohi uchun xizmat qiladir» (`adabiyot-poetika-til.md`, 1.3). Har bir janrda bu vazifa oʻziga xos uslubiy vositalar bilan bajarilgan.

### 2.1. Publitsistika va maqola

**Asosiy qolip** (Behbudiy profilidagi kompozitsiya tahliliga koʻra):

1. murojaat yoki tezis;
2. misol, statistika, «boshqa millatlar» bilan qiyos;
3. faraziy eʼtiroz va unga javob;
4. «Bas, maʼlum boʻldiki» yoki «Xulosa»;
5. amaliy taklif (pul miqdori, muddat, manzil);
6. duo yoki undov.

**Uslubiy belgilari:**

- «biz» ovozi, ritorik savol, izofa va sinonimik juftlar («ravshan va ayon», «hamiyyat va gʻayrat»);
- bir zarbali qisqa gaplar;
- qavs ichida ruscha atama;
- tahririyat ovozining uchinchi shaxsda gapirishi («“Oyna” kamoli ehtirom ila … arz etarki», Behbudiy profili).

**Variantlar:**

- *Behbudiy*: hisob-kitob va minbar uslubi. Masalan: «Biznikilar juft oti-la, arobasi-la, toʻyi ila va… la faxr etar.» («Odob-axloq kitobi»)
- *Munavvar qori*: mantiqiy, moʻtadil uslub. Taʼrif, keyin «chunki», keyin xulosa. Haqoratli soʻzlardan qochadi.
- *Fitrat (1917–1919)*: patetik, asindetonli uslub. Masalan, «Hurriyat» maqolasidan: «Qo‘limiz bog‘landi, tilimiz kesildi, og‘zimiz qoplandi, yerimiz bosildi, molimiz talandi…» (Fitrat profili, Boltaboyev orqali).
- *Ibrat*: qozining vaʼzi. Oyat, keyin «Yaʼni», keyin latifa, keyin «Mana» bilan xulosa.
- *Tavallo (nasr)*: «Ogoh oʻlingizki, har bir millat jurnal va gazet chiqarmoq oʻlsa, oʻshal millat bolalari jon-u dil birla suyunub, quvonib qarshi olurlar» («Ey Vatan, ezgu Vatan»).
- *Zafariy (1918)*: «-aylik» zanjiri bilan safarbar qiluvchi murojaat (profil, «Quvvatimiz askardir»).

### 2.2. Drama

Jadid dramasi «minbar sahnasi» sifatida tugʻildi. «Padarkush» (1911-yilda yozilgan, 1913-yilda bosilgan, 1914-yilda sahnalashtirilgan; `adabiyot-poetika-til.md`, 2.1) janrni «milliy birinchi fojia» va «ibratnoma» deb ataydi. Ikkinchi sarlavhasi: «Yoxud oʻqimagan bolaning holi».

**Umumiy poetik belgilar:**

- **Remarkalar aorist (-ar/-ur) shaklida yoziladi.** Masalan, «Parda ochilur», «kirar», «Parda tushar» (Avloniy); «Parda inar» (Behbudiy); «Parda tushadir.» (Choʻlpon, «Yorqinoy»); «Toʻsuq tushar» (Hamza). Remarkalar baholovchi boʻlishi ham mumkin: «Toshmurod kirar, salomsiz, beadabona» («Padarkush»).
- **Rezoner.** Muallif gʻoyasini aytuvchi personaj: Domulla va Ziyoli («Padarkush»), Davronbek («Advokatlik osonmi?»), ellikboshi («Baxtsiz kuyov»), Lolahardiyol («Hind ixtilolchilari»). Rezonerning nutqi aslida maqola.
- **Tomoshabinga ochiq murojaat.** «(odamlarga qarab)», «(xalqqa qarab)», «xalqga qarab» remarkalari bor. Hamza dramasida 14 ta «(chetga)» replikasi bor.
- **Nutqning ijtimoiy-etnik tabaqalanishi.** Bu jadid dramasining eng boy uslubiy qatlami. Bir necha misol:
  - oʻgʻuzcha gapiruvchi arman: «Ban sana demishimki, Liza aqcha olmayincha gelmaz, bana ne? Sen oʻzing bilirsanki, u gavur qizi, banim degil.» («Padarkush»);
  - olmosh va qoʻshimchalarni chalkashtiruvchi tojik: «Akunki, abdivakat boʻlgʻonsan, gapga tushunmaysan.» («Advokatlik osonmi?»);
  - Toshkent ayolining formulalari: «Opaginang aylansun, ijoraxoʻr imom ila poraxoʻr ellikboshi qachon man mushtiparni tarafi boʻladi deysan.» (oʻsha asar);
  - sajʼli qiziqchi: «Ana mana bu oʻzi yosh, soʻzi tosh, koʻzi bebosh, qoraqosh, esi chosh, vosh-vosh» («Yorqinoy»).
- **Final ikki qavatli.** Avval ibrat nutqi keladi, keyin hokimiyat vakilining qisqa soʻzi («Padarkush»da politsiya buyrugʻi, «Baxtsiz kuyov»da soʻnggi soʻz politsiyachida).

**1920-yillar dramasi** boshqacha:

- *Fitrat* romantik-shekspirona fojiaga oʻtadi. Unda tush va arvoh motivlari, «Kimsalar» va «Eskarma» kabi purist atamalar bor, «va» bogʻlovchisi ishlatilmaydi. Misol: «Hakimbiy (tom ustidan ko‘rulgan minorga qarab). O‘lum minoridir bu! Buning ko‘lkasinda yashaganlar o‘lumdan qo‘rqmaylar.» («Abulfayzxon»)
- *Choʻlpon* «afsonaviy drama»da Yevropa akt-koʻrinish tizimini qoʻllaydi: «Bu parda … majlisdan iboratdir» («Yorqinoy»).
- *Hamza* xalq latifasi va karnavaliga tayangan musiqali komediya yozadi: «Qani, podani haydang!» («Burungi qozilar»).
- *Zafariy* esa kuy nomlari bilan «partitura» qilingan musiqali drama yozadi (profil).

### 2.3. Hikoya

Jadid hikoyasi ikki bosqichda rivojlandi. Birinchisi 1914–1916-yillardagi didaktik «felyeton-hikoya», ikkinchisi 1920-yillardagi ramziy-psixologik novella.

**1914–1916: didaktik hikoya.** «Qurboni jaholat» va «Doʻxtur Muhammadiyor» gazetada «felyeton» rukni ostida chiqqan (kartochkalar).

- Hikoyachi ochiq aralashadi, «biz» deb gapiradi va nola qiladi: «Oh, bunlarga sabab boʻlgʻon jaholat... Ket! Yoʻqol!.. Oʻl!..» («Doʻxtur Muhammadiyor»).
- Uch karra takror ishlatiladi: «oʻquv, oʻquv, oʻquv».
- Final sarlavhani qaytaradi: «Na foydaki, bechora Eshmurod oʻldi… Jaholatga qurbon boʻldi…».
- Qodiriyning «Uloqda» (1915/1916) hikoyasi bu qolipdan chiqqan: unda didaktika yoʻq va u bir jumlali puent bilan tugaydi: «Mening uyqum oʻchdi.».

**1920-yillar: ramziy-psixologik novella** (asosan Choʻlpon).

- Hikoya in medias res boshlanadi.
- Manzara ruhiy holatga parallel boʻladi.
- Erkin bilvosita nutq ishlatiladi: «Bu kim? Kechalari uxlamasdan yigʻlab chiqgʻuchi kim?» («Oydin kechalarda»).
- Yakuniy hikmat personaj ogʻzidan chiqadi: «– Nimasini aytasiz, yigitlar, dunyo oʻzi shunday teskari dunyo ekan… Lolaning ustiga qor yogʻdi!.. – dedi.» («Qor qoʻynida lola»).
- Halqa kompozitsiya va sana-joy imzosi bor («1927-yil, 25-iyun, Samarqand», «Novvoy qiz»).

**Satirik hikoya va skaz.**

- Qodiriyning «Tinch ish» (1920) hikoyasida istehzoli egalik ishlatiladi («Oxund domlamiz»). Hurmat koʻpligi masxara vositasi: «uzlatni ixtiyor qilmishlar edi».
- Choʻlponning «Taraqqiy» (1924) hikoyasi makaronik nutq bilan quriladi: «– Nu, oʻrtoqlar, voprosni men reshil! – dedi.».
- «Oqposhshoning inʼomi» (1934) latifaga oʻxshash satira, unda pafos yoʻq.

**1930-yillar.** Hikoyada sovet mavzusi bor, lekin eski usullar saqlangan:

- tarixiy hozirgi zamon, statistika va xalq yumori («Quyosh bilan ham kurashaman»);
- skaz-final: «Munaqa gaplar bor ekan dunyoda-yu! Munaqa yurtlar bor ekan-u!» («Meros»).

### 2.4. Roman va qissa

**Roman.** Qodiriy romanni «yangi zamon ro‘monchilig‘i bilan tanishish yo‘lida kichkina bir tajriba» deb atagan («Oʻtkan kunlar» kartochkasi). «Oʻtkan kunlar» «Inqilob» jurnalida 1922–1925-yillarda boʻlib-boʻlib bosilgan, 1926-yilda kitob holida chiqqan (`adabiyot-poetika-til.md`, 2.2.2).

Qodiriy romanining uslubiy formulasi:

- **«Biz» deb gapiruvchi roviy oʻquvchini yetaklaydi.** Masalan: «Endi biz tashqari havlini qo‘yib… ichkariga kiramiz» («Oʻtkan kunlar»).
- **Boblar «fasl» deb ataladi.**
- **Hijriy sana bilan ochilish:** «1264-hijriy, dalv oyining o‘n yettinchisi, qishki kunlarning biri, quyosh botqan, tevarakdan shom azoni eshitiladir…».
- **Egadan oldin keladigan portret-zanjir:** «Og‘ir tabiatlik, ulugʻ gavdalik, ko‘rkam va oq yuzlik, kelishgan, qora ko‘zlik, mutanosib qora qoshliq va endigina murti sabz urgan bir yigit.».
- **Hujjat montaji:** xatlar, yorliq, qabr lavhasi.
- **Uchlik parallelizm:** «Xon musulmon, bek musulmon, xalq musulmon, buning ustiga yurish-turish ham musulmoncha, hukmlar ham shari’atcha edi.».

«Mehrobdan chayon» (soʻzboshi 1928-yil fevral, nashr 1929) yuqoridagilarga detektiv usulini, «(mual.)» izohlarini va hayvon allegoriyasini qoʻshadi: «Xon – hazmi har bir iflosliqni ham ko‘taradirgan katta bir hayvon.».

Choʻlponning «Kecha va kunduz» romanida (birinchi kitobi 1936-yilda chiqqan [umumiy bilim — tekshirilmagan]) quyidagi yangiliklar bor:

- erkin bilvosita nutq;
- «ichki sud»: «Uning miyasida yana ikkita Miryoqub paydo bo‘ldi: biri – tergovchi, yana biri – javobgar.»;
- kundalik va hujjat-parodiyasi;
- lirik ochilish: «Hayot nega bu qadar go‘zal va shirin bo‘ladi bahorda?».

**Qissa (memuar-satirik).** Ayniyning «Eski maktab» (1935, veb-manba) va «Sudxoʻrning oʻlimi» asarlari birinchi shaxsda yozilgan retrospektiv qissalar.

- Ular xotira formulasi bilan ochiladi: «Agar unutmagan boʻlsam, olti yasharlik vaqtim edi.».
- Baho bir soʻzga sigʻadi: «vahshiylikdan хabarsiz».
- Final bir jumladan iborat: «U oʻlgan edi!».

Qodiriyning «Obid ketmon» qissasi tarixiy hozirgi zamonda yozilgan, unda hujjatlar montaji bor.

### 2.5. Sheʼr: aruz va barmoq

**Aruz (1905–1918 asosiy, keyin ham saqlangan).**

- Avloniy, Hamza, Tavallo va Ibrat mumtoz shakllarni saqlaydi: gʻazal, muxammas, musaddas, murabbaʼ, qitʼa, taʼrix. Ularga jadid mazmuni beriladi. Qosimov Tavallo haqida aytgan formula bu tamoyilni yaxshi ifodalaydi: «Vazn va ohang anʼanaviy – aruzda. Biroq mazmun tamom yangi.» (Tavallo profili).
- Asosiy bahrlar: hazaj, ramal, muzoriʼ, mujtass, mutaqorib, sareʼ.
- Maqtaʼda doim taxallus keladi (Hijron, Nihon/Nihoniy, Tavallo, Ibrat).
- **Naqarot-baytli musaddas va musamman** (tarjeʼband tamoyilida) jadid tashviqot sheʼrining asosiy shakli. Ular qoʻshiq qilib aytishga va yodlashga moʻljallangan. Misol: «Ko‘zing och, yotma, g‘aflatdan o‘son, millat, o‘son, millat,» (Avloniy profili).
- **Kesim vazifasidagi uzun radif.** Misollar: «Siza arzim budur, ey shoiron, ishqiya nazm etmang, / Qalam qosh, zulfi sunbul, sarvi qomatdan gapurmanglar!» (Avloniy); Tavalloda «na sud?», «hanuz», «teskari» radiflari.

**Aruzdan barmoqqa oʻtish (1917–1925).** Bu jarayon bosqichma-bosqich kechgan. Quronov ham buni «sekin-asta voyaga yetgan adabiy hodisa» deb atagan (`adabiyot-poetika-til.md`, 3.2). Oʻtish dastlab grafik shaklda boʻlgan: gʻazal bayt shaklida emas, band shaklida yozila boshlagan. Masalan, Choʻlponning «Koʻngil» sheʼri hazajda yozilgan, lekin barmoq bandiga oʻxshatib bandlarga ajratilgan (oʻsha manba, 3.3).

**Barmoq.**

- Asosiy oʻlchov 11 hijo (4+4+3 yoki 6+5). Bundan tashqari 7–8 hijoli xalq qoʻshigʻi va alla oʻlchovi, 12 va 15 hijoli misralar ham bor.
- Choʻlponda: «Xayol... xayol... yolgʻiz xayol goʻzaldir, / Haqiqatning koʻzlaridan qoʻrqaman.».
- Fitratda («Mirrix yulduziga»): «Bormi senda qorin-qursoq yo‘lida / Elin, yurtin, borin-yo‘g‘in sotqonlar?».
- Botuda 5 hijodan 15 hijogacha boʻlgan oʻlchovlar bor, aruz izi yoʻq.

**Erkin va zinapoya sheʼr, sochma.**

- Fitratning «Sharq», «Mening kecham» va «Nega boʻyla?» sheʼrlari, Choʻlponning «Binafsha»si, Botuning «Qon, / Qon, / Qon!..» sheʼri shu shaklda.
- Sochma (mansur sheʼr) namunalari: Fitratning «Yurt qaygʻusi», Choʻlponning «Kleoʻpatra»si, Behbudiyning «Bir aʼmo bolaning hasrati» (tabdil), Botuning «Sevgan qiz».
- Fitrat «Adabiyot qoidalari»da (1926) «tizim» (vaznli-qofiyali) va «soch» (vaznsiz) sheʼrni farqlagan (`adabiyot-poetika-til.md`, 2.5.1).

**Sheʼrning poetik tamoyillari** (Vadud Mahmud, 1925): «muhovara tiliga yoqlashmoq», eski sanʼatlardan voz kechish va «bir oz ramziy (simvolicheskiy) ifoda» (oʻsha manba, 1.4).

### 2.6. Darslik va axloqiy risola

**Saʼdiy «Guliston»i modeli** (Avloniy, «Turkiy guliston yoxud axloq», 1913; 2-nashr 1917). Bob tuzilishi:

1. taʼrif formulasi «X deb ... -ni aytilur» (47 marta);
2. «Chunki / Zeroki» bilan asoslash;
3. Turkistonga koʻchirish;
4. hadis («– demishlar»);
5. hakim soʻzi;
6. aruzdagi sheʼriy xulosa.

Misol: «Jism ila ruh ikkisi bir choponning oʻng ila terisi kabidur.».

**Islom axloq ilmi sxemasi** (Fitrat, «Najot yoʻli», «Oila», tarjimada). Bunda raqamlangan tasniflar, ifrot – eʼtidol – tafrit jadvallari, sillogizmlar va savol-javob qoliplari ishlatiladi: «Bu qurol nimadan iborat? U AQLdir.».

**«Mezon» sxemasi** (Ibrat, «Mezon uz-zamon»). Har bir mezon besh bosqichda quriladi: tezis, oyat yoki hadis, «Yaʼni…», «Chunonchi…» bilan latifa, «Mana…» bilan xulosa. Misol: «Mezon – barobar qiladurgon tarozudur. Bu asrlarni, zamonlarni vazn qiladur.».

**Bolalar darsligi va masal** (Munavvar qori, Avloniy, Hamza, Elbek):

- ertakcha ochilish («… bor edi»), 3–6 gapdan iborat voqea va «Hissa:» bilan xulosa;
- Avloniyning «Toʻgʻrilik» ertagi: «Bir kampirning uyida bir tup balx tuti bor edi. Nihoyatda to‘g‘ri o‘sgan edi.»;
- Hamzaning masali: «Hissa: kimi gʻayrni ulfat etar. / Oʻz-oʻzicha boshiga kulfat yetar.» («Tanlangan asarlar»).

### 2.7. Sayohatnoma

**Kundalik-safarnoma** (Avloniy, «Afgʻon sayohati», 1919).

- Kunlik yozuvlar bir formulaga tushadi: «17-iyunda saboh soat 8 da Xavosdan Samarqandgʻa qarab ravona boʻlduk.» (profil).
- Rubrikali etnografik ocherklar («Hirot», «Kobul shahri»), pyesaga oʻxshab yozilgan dialog («Man:» / «Bek:») va hissiyot choʻqqisida sheʼr bor.
- Usmonlicha qatlam eng zich: «oʻldigʻindan» 36 marta, «ila» 387 marta keladi.
- Ironik leytmotiv: «Bizim bu mingan madaniyat aygʻirimiz pishqira-pishqira ravon boʻldi.».

**Niqobli sayyoh** (Fitrat, «Hind sayyohining qissasi», 1909–1913, forschadan tarjima). Bu yerda «begona koʻz» usuli ishlatiladi: hikoyachi ataylab sodda boʻlib turadi va haqiqat dialog orqali ochiladi. Misol: «Chehrasi yoqimli, qiyofasidan nur yogʻilib turgan yigit orqamdan kelib: “Jaholat!” dedi.».

**Kundalik-xotira** (Behbudiy, «Sayohat xotiralari», 1914). Unda aniq sana va imzo bor («31-may, Bahri Hazar, Mahmudxo‘ja»), uzun munojot-duo ham bor (Behbudiy profili).

### 2.8. Xotira (memuar)

- **Ayniy.** Retrospektiv «men», xotira formulalari, ikki qatlamli koʻz (bola va katta), «Endi oʻylaymanki, … ekan» qolipi.
- **Qodiriy.** «Mehrobdan chayon» soʻnggi soʻzidagi va «Oʻtkan kunlar»dagi avtobiografik chekinishlar: «Men – yozg‘uchi… otam marhumdan… eshitsam» (kartochka).
- **Munavvar qori (1929–1930).** Qamoq xotiralari va arizalar sodda xronika uslubida, birinchi shaxsda yozilgan. Izofa va «oʻl-» shakli deyarli yoʻq (profil).
- **Bazadagi ikkilamchi memuarlar.** Habibulla Qodiriyning «Otam haqida» va Asqad Muxtorning «Qodiriyni koʻrganman-u…» asarlari jadidlar haqidagi xotiralar. Ular jadidlarning oʻz uslubi emas, keyingi davr uslubida yozilgan. Stilometriyada ularni **nazorat (kontrast) korpusi** sifatida ishlatish mumkin.

---

## 3. Davrlar boʻyicha evolyutsiya

Quyidagi davrlashtirish tahlil uchun berilgan ishchi chegaralar. Har bir muallifning oʻz evolyutsiyasi bu chegaralarga toʻliq mos kelmaydi. Batafsil maʼlumot muallif profillarining «Uslub evolyutsiyasi» boʻlimlarida.

### 3.1. 1900–1916: maʼrifatparvarlik

**Ijtimoiy-adabiy fon:**

- usuli jadid maktablari;
- «Taraqqiy» (1906), «Xurshid», «Samarqand», «Oyna» (1913–1915), «Sadoyi Turkiston» matbuoti;
- 1914-yildan teatr truppalari («Turon»).

**Til:**

- Chigʻatoy, usmonli-tatar va arab-fors qatlamlari eng kuchli aralashgan davr.
- Gaspirali «Tarjimon»i va tatar muharrirlari taʼsiri kuchli: «Taraqqiy» muharriri Ismoil Obidiy tatar-boshqird boʻlgan (`adabiyot-poetika-til.md`, 6.4).
- Morfologiyada -gʻa, -ub, -gʻon, -dur, -mak, «oʻlmoq», -inda, -ajak bor.

**Leksika:**

- Jadid kalit soʻzlarining choʻqqisi: millat, taraqqiy, maorif, jaholat, gʻaflat, ittifoq.
- «Sadoi Turkiston»da (1914–1915) 80 dan ortiq ruscha soʻz ishlatilgan (oʻsha manba, 6.1).
- Behbudiy va Rauf Muzaffarzoda oʻrtasida til sofligi haqida bahs boʻlgan. Behbudiy amaliy yondashuv tarafdori edi: «“Tilimizdan forsiy va arabiyni quvayluk”, bu ko‘p yengil orzu, ammo ijrosi mumkin emas orzulardandur.» (oʻsha manba, 5.2).

**Janrlar:** maqola, darslik, axloqiy risola, aruzdagi tashviqot sheʼri, ilk drama («Padarkush», «Advokatlik osonmi?», «Baxtsiz kuyov»), felyeton-hikoya.

**Ohang va ritorika:** xitob, nola, nasihat; «uyqu» va «kasallik» metaforalari; «biz» tilidan oʻzini ayblash. Misollar: «Biz odam boʻlmaymiz… bitamiz… inqiroz boʻlamiz… Oh, jaholat!!!» («Qurboni jaholat», 1914); «Alhosil, tarbiya bizlar uchun yo hayot – yo mamot , yo najot – yo halokat, yo saodat – yo falokat masalasidur.» («Turkiy guliston», 1913).

**Ichki farqlar:**

- Erta davrda (1903–1909) jadid kalit soʻzlari hali kam. Behbudiyning TVG dagi tarjimasida ular umuman yoʻq, oʻrnida ertakona «…bor ekan» rivoyat uslubi bor.
- 1913–1915-yillarda publitsistik «biz» ovozi va statistika dalili toʻla shakllanadi.

### 3.2. 1917–1920: inqilob va muxtoriyat

**Fon:** fevral inqilobi, Turkiston muxtoriyati (1917-yil noyabr – 1918-yil fevral [umumiy bilim — tekshirilmagan]), sovet hokimiyati, Behbudiyning qatl etilishi (1919), «Chigʻatoy gurungi» (1918/1919-yildan).

**Til:**

- Siyosiy atamalar kirib keladi: hurriyat, muxtoriyat, saylov, firqa, syezd.
- 1919-yildan «Chigʻatoy gurungi» va Fitratning «Tilimiz» maqolasi bilan **ongli purizm** boshlanadi: «Unlarni olurmiz, lekin o‘zi mizniki qilurmiz. Turkchalashtirurmiz.» (oʻsha manba, 4.6.3).

**Ohang:**

- 1917-yilda hurriyat pafosi va tantana bor: «Qalqing! Qonib iching hurriyat sharobidin!» («Uygʻon, millat», Avloniy).
- Muxtoriyat yemirilgach, elegiya va tushkunlik keladi. Zafariyning 1918-yil bahoridagi «gotik» elegiyasi va Avloniyning ironik «Marhabo, ey hurriyat, sandan muruvvat koʻrmadim.» satri (profil) shu kayfiyatni koʻrsatadi.
- Qodiriyning «Tinch ish» (1920) hikoyasi 1917-yil voqealarini satira bilan beradi: «yerdan “Hurriyat”, koʻkdan “Hurriyat”, bugun saylov, erta saylov! Xudoyo toʻba! Xudoyo toʻba!..».

**Shakl:**

- Sheʼrda patetik sochma va asindeton ishlatiladi.
- Barmoqdagi ilk tajribalar paydo boʻladi (Choʻlponning «Goʻzal» sheʼri, 1919, Toshkent).
- Usmonli-tatarcha shakllar 1918-yilgi sheʼr va publitsistikada hali kuchli: «Endi Muxtoriyatimiz barqaror o‘lsun, desak, bizga quvvat lozim.» (Zafariy profili).

**Memuar-publitsistika:** «Afgʻon sayohati» (1919) shu davr hujjati. Unda achchiq kinoya bor: «Oh, na insoniyat, na barobarlik, na sotsiolistlik, na millat tafriqa qilmaydirgʻon internatsiyolistlar dunyo yuzinda topilamukin?» (Avloniy profili).

### 3.3. 1920-yillar: «yangi adabiyot»

**Fon:**

- «Chigʻatoy gurungi», 1921-yilgi Til-imlo qurultoyi;
- yangi arab imlosi (1921–1923), lotin yozuviga oʻtish (1929);
- «Inqilob» jurnali, «Mushtum» hajviy jurnali, «Qizil qalam» (1926–1930).

**Til:**

- Purist turkiy leksika ustun: ulus, erk, ezgu, tilchi, unum, sezgu, yozgʻich.
- Fitratning badiiy matnlarida «va» yoʻq.
- Jadid kalit soʻzlari kamayadi yoki ironik maʼno oladi: «Shuning bilan taraqqiy qilib boʻlurmi?» («Taraqqiy», 1924).
- Eski morfologiya hali saqlanadi (-gʻa, -gʻon, -ub, -dir, ul/shul, menim).

**Janrlar:**

- birinchi oʻzbek romanlari («Oʻtkan kunlar», «Mehrobdan chayon»);
- ramziy-psixologik hikoya (Choʻlpon);
- romantik-tarixiy va siyosiy drama («Hind ixtilolchilari», «Abulfayzxon», «Yorqinoy»);
- musiqali drama va komediya (Zafariy, Hamza);
- barmoqdagi lirika (Choʻlpon, Fitrat, Botu, Elbek);
- «Mushtum» hajviyasi (Tavallo, Avloniy, Qodiriy).

**Poetika:**

- Gʻoya ochiq daʼvatdan **ramz, allegoriya va niqob**ga koʻchadi. Misol: «Dengiz shu qadar buyukligi bilan hamma vaqt qirgʻoqlardan yengiladi.» («Novvoy qiz», 1927).
- Hindiston Turkistonning, Buxoro taxti har qanday zulmning niqobi boʻladi (Fitrat).
- Vadud Mahmud yangi sheʼrni «muhovara tiliga yoqlashmoq» va «bir oz ramziy (simvolicheskiy) ifoda» deb taʼriflagan.

**Nutq va dialog:**

- Ijtimoiy registrlar keskin farqlanadi.
- Sheva qatlami kuchayadi: Choʻlponda Andijon, Qodiriyda Toshkent, Hamzada Qoʻqon shevasi.

### 3.4. 1930-yillar: bosim ostida

**Fon:** jadidlarga qarshi kampaniyalar, «Milliy ittihod» ishi boʻyicha hibslar (1929–1930), proletar uyushmalari (1932-yilgacha), Yozuvchilar uyushmasi (1934), 1937–1938-yillardagi qatagʻon.

**Til:**

- Sovet leksikasi va rus maʼmuriy soʻzlari keng kiradi: kolxoz, brigadir, pioner, zayom, MTS, firqa.
- Eski morfologiya qisman saqlanadi: -aturgʻan, -yotir, -liq, menim, koʻb, -gʻon. Bu bazadagi nashrlarga bogʻliq.
- Jadid lugʻati yoʻqoladi yoki parodiya qilinadi. Masalan, «Kecha va kunduz»dagi hujjat-parodiyalarda «mudavvardur», «millat bolalarina» kabi arxaik shakllar ataylab ishlatiladi (kartochka).

**Poetika:** Quronov Choʻlponning bu davrdagi uslubini «six ham kuymasin, kabob ham» poetikasi deb taʼriflaydi: yuzada bir maʼno, tubida boshqa maʼno (Choʻlpon profili). Bu davrning asosiy usullari:

- erkin bilvosita nutq, istehzoli hikoyachi, skaz;
- «biz» tilidan sovet targʻiboti tilini takrorlash yoki ikki maʼnoli qilib berish. Misol: «– Bu kolxoz tovushi, – deydi hammani o‘z og‘ziga qaratib, – biz kolxozning suratini yasadik, hukumat bo‘lsa bu suratga jon yuboryapti…» («Obid ketmon»);
- bolaning targʻibot tiliga kinoyali munosabat: «Yigʻlaydi Hojar. “Pioner yigʻlamasin” degan boʻlsa ham, birovga koʻrsatmasdan, yashirinib-yashirinib, achchigʻ-achchigʻ yigʻlaydi qiz bechora.» («Meros»).

**Janrlar:** kolxoz hikoyasi va qissasi, memuar-satirik qissa (Ayniy), psixologik roman («Kecha»). Bu davrdagi «oʻzbekcha» Ayniy qissalari tojikcha asl matnlar bilan bogʻliq boʻlishi mumkin, tarjimon esa nashrda koʻrsatilmagan («Eski maktab» kartochkasi).

**Ohang:** yengil yumordan («Quyosh bilan ham kurashaman») achchiq satiragacha. Choʻlponning «Oqposhshoning inʼomi» (1934) asarida pafos ham, nasihat ham yoʻq.

### 3.5. Evolyutsiyaning qisqa jadvali

| Belgi | 1900–1916 | 1917–1920 | 1920-yillar | 1930-yillar |
|---|---|---|---|---|
| Asosiy til qatlami | arab-fors + usmonli-tatar + chigʻatoy | shunday, siyosiy atamalar qoʻshiladi | purist turkiy + sheva | sovet-rus + sheva |
| «va» bogʻlovchisi | juda koʻp (Behbudiy, Ibrat) | koʻp | Fitratda yoʻq, boshqalarda oʻrtacha | oʻrtacha |
| Kalit soʻz | millat, taraqqiy | hurriyat, muxtoriyat | erk, ulus, el, kelgusi | kolxoz, mehnat (ironik) |
| Vazn | aruz | aruz + ilk barmoq | barmoq, erkin sheʼr | barmoq, qoʻshiq vazni |
| Hikoyachi | ochiq vaiz | notiq | yashirin, ramziy | istehzoli, niqobli |
| Asosiy janr | maqola, risola, drama | sheʼr, maqola, sochma | roman, novella, drama | qissa, kolxoz hikoyasi, roman |
| Murojaat | «Ey millat!» | «Ey ulug‘ Turon…» | «sen» (koʻngil, yulduz) | oʻquvchiga «siz», skaz |

---

## 4. Mualliflararo qiyosiy jadval

Jadvalda bazadagi 13 muallif solishtiriladi. «Namunaviy jumla» ustunidagi iqtiboslar asar kartochkalari yoki profillardagi verbatim namunalardan aynan olingan. «Oʻziga xos soʻzlar» ustuni muallif profillaridagi lugʻatchalar asosida tuzilgan.

| Muallif | Asosiy janr | Til qatlami | Gap tuzilishi | Ohang | Sevimli vositalar | Oʻziga xos soʻzlar | Namunaviy jumla |
|---|---|---|---|---|---|---|---|
| **Behbudiy** (1875–1919) | publitsistika, drama, darslik | arab-fors izofa + Samarqand nutqi + talaffuz boʻyicha yozilgan ruscha | «-durki» davri, keyin kesik gap; «va» zanjiri; faraziy eʼtiroz | vaʼz, hisob-kitob, kinoya, duo | statistika, «biz» va «boshqa millatlar» qiyosi, tibbiy metafora, ellipsis | ilmi zamoniy, al-on, Valloh, Xulosa, Oʻtayluk, -ayluk, duxtur, bonka | «Uyingizni nodonlik buzdi. Oʻgʻlingizni beilmlik Sibirga yuboradi.» («Padarkush») |
| **Munavvar qori** (1878–1931) | darslik, maqola, nutq, masal | izofa + usmonli-tatar kelishiklari + xalq maqoli | taʼrif-gap, «chunki» zanjiri, «X … ekan, bizda Y» | vazmin, nazokatli, didaktik | «Hissa:», «ikkinchi beshik» metaforasi, adolatli «ayb kimda?» tahlili | jahli murakkab, benizom, Ajabo, emasmu, muallim afandi | «Maktabda muallim va xalfalar koʻkrak kuchlari ila tarbiya qilurlar. Bunga qaraganda, maktab bolalarning ikkinchi beshiklaridur.» («Odob-axloq kitobi») |
| **Ibrat** (1862–1937) | risola, taʼrix sheʼr, maqola, ilmiy nasr | fiqhiy arab-fors + usmonlicha shakllar + buzilgan ruscha + sheva | oyat → «Yaʼni» → «Chunonchi» → «Mana»; uzun dalil, qisqa hukm | vaizona, kinoyali, xayrixoh | tarozu metaforasi, latifa, «emish» istehzosi, uch karra takror | mezon, vazn qilmoq, oʻranmoq, lamfa, siyazd, hosili kalom | «Oʻranmoq kerak, tanballik ila maqsadga erishilmaz. Oʻranung, oʻranung, oʻranung.» («Mezon uz-zamon») |
| **Avloniy** (1878–1934) | axloq darsligi, aruzdagi lirika, drama, safarnoma | eng kuchli usmonlicha qatlam + arab-fors + Toshkent nutqi | «X deb … aytilur»; 5–8 ta -ub zanjiri; sajʼli antiteza | murabbiy-notiq, nola, satira | hadis formulasi, nasrni bayt bilan muhrlash, naqarotli musaddas, maishiy tashbeh | oʻldigʻindan, ban/san, aqcha, Hayhot, Yohu, Alhosil, Hijron | «Ammo biz osiyoliklar, xususan, turkistonliklar, dumba sotub, chandir chaynaymiz: qaymoq berub, sut oshiymiz, non oʻrniga kesak tishlaymiz.» («Turkiy guliston») |
| **Tavallo** (1883–1937) | gʻazal-hajv, «Mushtum» felyetoni | arab-fors + tatar-usmonli + Toshkent maishiy + buzilgan ruscha | yopiq bayt, inversiya, parallel misralar | nola va kulgi bir baytda | «biz» tilidan oʻzini fosh qilish, radif-tashxis, teskari dunyo | yoʻx, kibi, vor, gʻromofun, ayruplon, «na sud?» | «Qadah zarrin sinib, oʻrnigʻa bu kun ityalogʻ oʻldi.» («Ey Vatan, ezgu Vatan») |
| **Hamza** (1889–1929) | gʻazal, maktab sheʼri, ashula, musiqali komediya | oʻgʻuzcha shakllar + mumtoz izofa + Qoʻqon shevasi | aruz inversiyasi; dramada ikki registr (dostoniy va bozor nutqi) | iltijo, nasihat, karnaval kulgisi | naqarot, «Hissa:», rolli lirika, maqol «degandek» bilan | bani, bing, oʻl-, qoʻrqam, zinhor, Filhaqiqat | «Olamning xurshidi kundir, odamning xurshidi ilm, / Olamning zulmoti tundir, odamning nodori ilm.» («Sheʼrlar») |
| **Zafariy** (1889–1938/1944) | musiqali drama, sheʼr, folklorshunoslik maqolasi | 1918: usmonli-tatar; 1920-yillar: xalq qoʻshigʻi tili; ilmiy nasr: chigʻatoycha-purist | «-aylik» zanjiri; «Negakim», «Shundoqki»; raqamlab sanash | daʼvat, elegiya, sokin romantika | refren, kuy nomlari, qavs ichida izoh beruvchi turkiy atama | shul choq, oʻtunar edim, el tomosha (teatru)si | «Ey gunafsha, hammadan oldin ochil mishsan nega?» (Zafariy profili, «Gunafsha») |
| **Fitrat** (1886–1938) | risola (forscha), drama, sheʼr, ilmiy nasr | erta: forscha (tarjimada); 1919-yildan purist turkiy | «va»siz; -kim, «negakim»; stixomifiya; sanash katalogi | pafos, gʻazab, ironiya, aforizm | apostrofa, anafora, juft buyruqlar, Turon va arslon obrazlari, niqobli joy | ulus, erk, ezgu, tilchi, kimsalar, eskarma, onglamoq, biroq | «Tiriklik tebranish demakdir. Turgʻunliq esa oʻlimdir.» («Hind ixtilolchilari») |
| **Choʻlpon** (1897–1938) | lirika, hikoya, roman, drama | 1914: kitobiy; 1920-yillar: xalq tili + purist sheʼriy til; 1930-yillar: sovet-ironik | uzun davr va bir soʻzli abzas almashinadi; «-kim»; tire bilan antiteza | lirik-mungli, isyonkor, istehzoli | ramz va allegoriya, ironik qoʻshtirnoq, koʻp nuqta, halqa kompozitsiya | chechak, tegra, yogʻdu, koʻlanka, kishan, faqat (= lekin), bechora qiz | «Qulgan boshqalardir, yigʻlagan menman, / Oʻynagan boshqalar, inglagan menman.» («Sheʼrlar») |
| **Qodiriy** (1894–1938) | roman, hikoya, felyeton, drama | arab-fors + Toshkent shevasi + 1920-yillar morfologiyasi + buzilgan ruscha | portret-zanjir; «-kim»; uchlik parallelizm; lakonik replika | lirik, yumorli, satirik, fojiaviy | «biz»-roviy, maqol, hujjat montaji, istehzoli egalik («Domlamiz») | roʻmon, fasl, oʻqugʻuchi, yozgʻuchi, ersa, -sumon, Voqiʼan, Bitdi. | «Siz o‘z qipchog‘ingiz uchun qabr qazig‘an fursatda, sizga ikkinchilar tobut chopadir.» («Oʻtkan kunlar») |
| **Ayniy** (1878–1954) | memuar-satirik qissa | Buxoro etnografiyasi + tojikcha-arabcha maktab leksikasi; jadid atamalari yoʻq | uzun sanash, keyin bir jumlali xatboshi; «-ki»; «-gan holda» | istehzoli guvoh, sovuqqon | xotira formulalari, hayvon oʻxshatishlari, ironik qoʻshtirnoq | birov, -ma- takrori (uymauy), -yotir, -ajak, machit | «Soʻzlar uzildi, qoʻllar tovoqqa choʻzildi, boshlar egildi, koʻzlar oshga tikildi.» («Sudxoʻrning oʻlimi») |
| **Elbek** (1898–1939) | allegorik lirika, masal, bolalar sheʼri, darslik | soddalashgan chigʻatoy-purist + xalq tili | misra bilan gap mos keladi; murojaat, keyin xulosa; anadiplos | mungli-samimiy, umidli | qush va hayvon allegoriyasi, tautogramma, refren, «chin» sifati | ochun, qutli, koʻrk, tutqun, boʻgʻov, chin havo | «Oltindan to‘qulg‘on tor bir qafasda / Yotardi bir qushcha doim qayg‘uda.» (Elbek profili, «Tutqun qushcha») |
| **Botu** (1904–1938) | barmoqdagi lirika | purist turkiy; ruscha va jadid atamalari yoʻq | qisqa misra-gap, anafora, inversiya | nozik alla-lirika va shiorona gʻazab, optimistik | apostrofa, «eski va yosh» antitezasi, toʻlqin va qon ramzlari | erk, kelgusi, yoʻqsil, yozgʻich, tamal, ezgu | «Ey muarrix, ushla yozg‘ich, bizni esla shon bilan.» («Sheʼrlar») |

---

## 5. Mualliflarning «uslub izi» (fingerprint)

Bu boʻlim mualliflikni aniqlash (authorship attribution) va stilometriya uchun moʻljallangan. Har bir muallif uchun **ishonchli farqlovchi belgilar** berilgan. Ular ikki turga boʻlinadi:

- **[M]** — morfologik va imloviy belgi. Bunday belgi nashr modernizatsiyasiga sezgir, shuning uchun nashrlar oʻrtasida solishtirishda ehtiyot boʻlish kerak.
- **[S]** — sintaktik, leksik, ritorik yoki kompozitsion belgi. Bunday belgilar nashrga kamroq bogʻliq va mualliflikni aniqlashda ishonchliroq.

Har bir muallifdan keyin «koʻp adashtiriladigan qoʻshni» va uni ajratish yoʻli koʻrsatilgan.

### 5.1. Mahmudxoʻja Behbudiy

1. [S] Bosh gap «-durki/-dirki» bilan tugaydigan davriy jumla, undan keyin uzun izoh keladi: «…mavjuddurki, … mashgʻuldurlar».
2. [S] Uzun davrdan keyin bir zarbli qisqa gap keladi: «Oʻzimizdan duxtur yoʻq.».
3. [S] Faraziy eʼtiroz va uning qabul qilinishi: «Albatta, munga javob berursizki, …» va «Biz ham dermizki, javobingiz durust.».
4. [S] Statistika va aniq sanoq dalil sifatida: «sana», «nafar», «al-on» soʻzlari bilan.
5. [S] Chekinishni boshqaruvchi formulalar: «Oʻtayluk.», «Maqsaddan uzoq tushdik.», «Qisqa qilaylik…».
6. [M] I shaxs koʻplik istak shakli **-ayluk**: «kirayluk», «etayluk», «qilayluk». Bu belgi bazadagi mualliflar orasida deyarli faqat Behbudiyga xos.
7. [S] «Valloh» qasami (bir maqolada toʻrt martagacha) va «Xulosa, …» bilan yakun.
8. [S] Ellipsisli satira: «toʻyi ila va… la faxr etar».
9. [S] Ruscha soʻz talaffuz boʻyicha yoziladi va koʻpincha qavs ichida izohlanadi: «eʼtiroz (prutest)».
10. [M] Qaratqich oʻrnida -ni: «Bizni Turkiston», «Samarqandni Yomini mahallasinda».
11. [S] «va» zanjiri va «zeroki», «nechukkim», «va lekin» bogʻlovchilari (1903–1904-yillardagi tarjima nasrida).
12. [S] Dramada «(odamlarga qarab)» remarkasi va baholovchi remarkalar («salomsiz, beadabona»).
13. [S] «Bir aʼmo bolaning hasrati»da «Eshitarmanki» anaforasi va «emish» epiforasi. Bu tabdil, shuning uchun mualliflik belgisi sifatida ehtiyot bilan ishlatiladi.

*Adashtiriladigan qoʻshnilar: Munavvar qori va Avloniy.* Behbudiyda -ayluk shakli, statistika, «Valloh» va «-durki» davri bor. Munavvar qorida taʼrif-gap, «Hissa:» va moʻtadil «ayb kimda?» tahlili bor. Avloniyda «X deb … aytilur» formulasi va usmonlicha «oʻldigʻindan» shakli bor. Behbudiyda usmonlicha qatlam kuchsizroq (Behbudiy profili).

### 5.2. Munavvar qori Abdurashidxonov

1. [S] Taʼrif-gap: «Ilm – … -moqdir», «… ilmni joʻgʻrofiya deyilur».
2. [S] Masal ertakcha ochiladi («Oʻtgan zamonda … bor edi») va «Hissa:» bilan yopiladi.
3. [S] Parallel-qofiyali xulosa: «Orif toʻgʻri soʻzladi, qutildi. Sodiq yolgʻon soʻzladi, tutildi».
4. [S] «Chunki …» sabab-dalil zanjiri. Ayb adolatli taqsimlanadi: «otada ayb yoʻq, chunki…; muallimda ham ayb yoʻq, chunki…».
5. [S] «X … ekan, bizda Y» shaklidagi Yevropa va Turkiston antitezasi.
6. [S] «Ajabo, … boʻlurmi?», «… emasmu?».
7. [S] «Baʼzi nodonlar dermishki…» qolipi: satirik gap «begona ogʻiz»ga solinadi.
8. [M] Usmonli-tatarcha kelishiklar: «janoblarina», «maktabinda», «ostindan»; erta matnlarda «oʻl-».
9. [S] Nutq va xatlarda kamtarlik formulalari: «ojizona rijo qilurman», «Siz hurmatludan», «Muhibingiz».
10. [S] Haqoratli epitetlardan ongli ravishda qochish. Bu uning muharrir sifatidagi tamoyili: illatni «qilgʻan ishlarining yomonligi ila» koʻrsatish.
11. [S] Bolalar sheʼri barmoqdagi marsh ritmida yozilgan, ichki qofiyali: «Ish qilichin, tur, qo‘lga ol! Yovga qarshi chindan qo‘zg‘ol!».
12. [S] «muallim afandi», «afandim» kabi usmonlicha murojaatlar (Ostroumov ham buni qayd etgan, profil).

*Qoʻshni: Behbudiy.* Munavvar qorida statistika kamroq, ohang vazminroq, qasam va «Valloh» yoʻq. Uning oʻziga xos belgisi «Hissa:».

### 5.3. Isʼhoqxon toʻra Ibrat

1. [S] Ramka-metafora: «mezon», «tarozu», «vazn qilmoq», «hosili mezon».
2. [S] Besh bosqichli sxema: tezis → oyat/hadis → «Yaʼni…» → «Chunonchi…» → «Mana…».
3. [S] Kiritma soʻzlar profili. Taxminan 6 500 soʻzlik matnda «Chunonchi» 28 marta, «Yaʼni» 31 marta, «Mana» ~41 marta keladi. «Lekin» va «chunki» deyarli yoʻq (Ibrat profili, grep hisobi). Bu jadid nasrida noyob kombinatsiya.
4. [S] Bogʻlovchilar arabcha-forscha: «Ammoki», «Zeroki», «Vaholanki», «Binobarin», «Hosili kalom», «Gʻaraz».
5. [S] Mullolar fatvosi «emish» istehzosi bilan beriladi: «yogʻi harom emish».
6. [S] Shaxsiy guvohlik: «banda oʻzum», «Banda ul majlisda edum».
7. [M] Dialektal «oʻranmoq / oʻranung», «toʻffi».
8. [S] Buzilgan ruscha soʻzlar: «lamfa», «siyazd», «firusent», «torilka», «sinimatagrof».
9. [S] Uch karra takror bilan chaqiriq: «Oʻranung, oʻranung, oʻranung.».
10. [S] Soʻz oʻyini bilan kinoya: «Ani(ng) otini xayrot derlar. Vaholanki, sayyiot boʻlsa keraqdur.».
11. [M] «keraqdur», «koʻb», «emdi», «hama», «nimarsa» kabi fonetik shakllar.
12. [S] «Vatan», «hurriyat» va «Ey millat!» xitobi deyarli yoʻq. Ularning oʻrnida «ummat», «ittifoq», «ilmu hunar», «madaniyat» keladi.

*Qoʻshni: Avloniy (fiqh va usmonlicha qatlam umumiy).* Ibratda taʼrif formulasi va naqarotli sheʼr yoʻq. Uning belgilari tarozu metaforasi va «Chunonchi / Mana» juftligi.

### 5.4. Abdulla Avloniy

1. [S] «X deb … -ni aytilur» taʼrif formulasi («Turkiy guliston»da 47 marta).
2. [S] Hadis formulasi «…afandimiz: “…”, – demishlar», hakim soʻzi uchun «– demish».
3. [M] Usmonlicha «oʻldigʻindan» («Afgʻon sayohati»da 36 marta) va «-an», «-ajak», «-aram», «ban/san», «vor», «choʻq», «onjaq».
4. [M] Koʻmakchi deyarli faqat «ila»: «Afgʻon sayohati»da 387 marta keladi, «bilan» esa 2 marta.
5. [S] 5–8 ta «-ub» ravishdoshidan iborat zanjir.
6. [S] Sajʼli uchlik antiteza: «yo hayot – yo mamot, yo najot – yo halokat…».
7. [S] «…yerina» antiteza zanjiri: «Odillar yerina zolimlar, olimlar yerina abu jahllar…».
8. [S] «Hayhot!», «Yohu! Bizga na boʻldi?», «Ajabo», «Alhosil» nidolari.
9. [S] Nasriy fikr aruzdagi bayt bilan muhrlanadi (Saʼdiy modeli).
10. [S] Maqtaʼda «Hijron» taxallusi va u bilan soʻz oʻyini.
11. [S] Maishiy tashbeh: chopon, moshkichiri, dumba va chandir.
12. [S] Naqarot-baytli musaddas («…uyon, millat», «o‘son, millat»).
13. [S] Ironik texnika metaforasi: «madaniyat aygʻiri», «suv aygʻiri».
14. [S] Dramada refren-sarlavha («advokatlik osonmi?») va etnik nutqiy niqoblar.

*Qoʻshni: Tavallo (aruzdagi lirika).* Avloniy sheʼrida jamoaviy «biz» va nasihat ustun, oʻziga xos belgisi «Hijron». Tavalloda hajv, rolli monolog va «Tavallo» taxallusi keladi.

### 5.5. Tavallo

1. [S] Matlaʼ «Ey…» murojaati bilan ochiladi: «Ey Vatan, ezgu Vatan, afu ayla, qadring bilmaduk,».
2. [S] Maqtaʼda kamtarlik yoki uzr formulasi: «afv ayla», «Kel, Tavallo…», «Bas emdi, yozma Tavallo».
3. [S] Ijtimoiy tashxisni koʻtaruvchi radiflar: «na sud?», «hanuz», «yoʻx, yoʻx, yoʻx», «teskari», «gʻalat».
4. [S] Tanqid «biz» tilidan, oʻzini fosh qilish orqali beriladi.
5. [S] Teskari dunyo motivi: «Qadah zarrin sinib, oʻrnigʻa bu kun ityalogʻ oʻldi.».
6. [M] Joʻnalishda -a: «millata», «biza». Bundan tashqari «oʻlmoq», «vor», «kibi», «yoʻx», «choʻq».
7. [S] Ruscha soʻzlar xalqona buzilgan holda va istehzo bilan: «gʻromofun», «ayruplon», «iliktrichistvo».
8. [S] Rolli sheʼr («… tilindan»), unda personaj oʻzini fosh qiladi.
9. [S] Hasrat va kulgi bir baytda keladi.
10. [S] Gʻazal ichida «dedim — dedi» dialogi.
11. [S] «Mushtum» davrida «xabar + Mushtum: izoh» juftligi va barmoqdagi kupletlar.
12. [S] «-mayin» inkor ravishdoshlarining zanjiri.

*Qoʻshni: Hamza.* Tavallo hajvga moyil, Hamza esa iltijo, nasihat va naqarotga. Hamzada oʻgʻuzcha «bani» va «bing», Fargʻona shevasidagi «qoʻrqam» shakli bor.

### 5.6. Hamza Hakimzoda Niyoziy

1. [S] Maqtaʼda taxallus bilan oʻziga murojaat: «Ey Nihon…», keyinroq «Niyoziy».
2. [M] Oʻgʻuzcha shakllar: «bani / banga», «bing», «oʻl-», «-maz», «vor», dativ -a («bizlara», «bilmoqa»).
3. [M] Fargʻona-Qoʻqon shevasidagi I shaxs: «qoʻrqam», «koʻram», «suyam».
4. [S] Uzun, feʼlli va erkalash ohangidagi radif: «-ga oʻxshaydi-ku», «oʻrgulsun quling», «bir kelub ketsun».
5. [S] Naqarot va takror: «Uxlama ko‘p, o‘zbek eli…», «Ilm ista, ilm ista», «Filhaqiqat».
6. [S] Matn ichida ijro koʻrsatmalari: «(Ashula)», «(Naqarot)», kuy nomlari.
7. [S] «Hissa:» bilan tugaydigan masal.
8. [S] Rolli lirika: mardikor, eshon, marhuma Tursunoy tilidan.
9. [S] Dramada ikki registrning kontrasti: lirik qahramonlar dostoniy tilda, qiziqchilar bozor tilida gapiradi.
10. [S] Maishiy-qoʻpol hajviy oʻxshatishlar: «ixlosim achitma goʻjadek qaytdi».
11. [S] Ichki qofiyali sajʼ va erkalama zanjiri.
12. [S] «zinhor», «beshak», «darkor» kabi qatʼiy nasihat soʻzlari.

*Qoʻshni: Tavallo va Avloniy.* Hamzaning eng ishonchli belgilari ijro koʻrsatmalari va Fargʻona shevasidagi I shaxs shakllari.

### 5.7. Gʻulom Zafariy

1. [S] Ochilishda murojaat-xitob: «Ey ilm», «Ey gunafsha», «Hamiyatparvar turkistonliklar!».
2. [M] «-aylik» istak zanjiri: «…etaylik, …unutmaylik».
3. [S] «buning ila … buning ila …» anaforasi va uchlik sanash.
4. [M] «ila», «ul / bul / shul», «shul choq».
5. [S] Turkiy atama va qavs ichida yevropacha izoh: «el tomosha (teatru)si».
6. [S] «Negakim, …» va «Shundoqki, …» bilan boshlanadigan izohli gaplar (ilmiy nasrda).
7. [S] Kuy-cholgʻu nomlarining katalogi va geografik parallelizm.
8. [S] Meros yoʻqolishi haqidagi xavotir formulasi: «unutilib bormoqdalar», «oʻlim holida yotadir».
9. [S] Kamtarlik va ochiq savol: «kuchim yetmaydur … oʻtunar edim».
10. [M] 1918-yil sheʼrlarida usmonlicha shakllar: «oʻlsun», «erdi», «-ayur», «-ina».
11. [S] Musiqa sahna remarkasi vazifasini bajaradi: har bir holat aniq kuy bilan bogʻlanadi.

*Qoʻshni: Hamza (musiqali drama).* Zafariyda ilmiy-folklorshunoslik leksikasi bor va satira kam. Hamzada esa karnaval kulgisi va maqollar ustun.

### 5.8. Abdurauf Fitrat

Belgilar asosan 1919–1924-yillardagi oʻzbekcha asl matnlarga tegishli.

1. [S] **«va» bogʻlovchisi yoʻq.** Avtomatik hisobda «Abulfayzxon», «Hind ixtilolchilari» va «Sheʼrlar»da 1000 tokenga ~0,7 ta «va» chiqdi (7-boʻlim). Fitratning tarjima qilingan risolalarida esa 30,6 ta.
2. [S] «biroq» asosiy zidlov bogʻlovchisi. «lekin» va «ammo» deyarli yoʻq.
3. [S] Purist leksika: ulus, el, erk, ezgu, yozuq, Tangri, tilchi, oʻron, orqadosh, unum, sezgu, tilak, onglamoq.
4. [S] Teatr atamalari: «Kimsalar», «Eskarma», «Parda tushar».
5. [M] -alar/-aylar: «kelalar», «istaylar», «oʻynaylar».
6. [M] -men/-sen: «istaymen», «Goʻzalsen».
7. [M] -inda/-sinda (~130 marta bitta dramada), -gʻusi, -gʻuchi, -gʻali, -ayoz-.
8. [S] «negakim» va qoʻshib yoziladigan «-kim»: «Xoqonimizg‘a ma’lumdirkim».
9. [S] Aforistik «-dir» gaplar va anadiplos: «Ishning qulayini axtarmoq yalqovlikdir. Qulay ishdan buyuk unum chiqmas.».
10. [S] Stixomifiya: «Buyuk… / Har narsadan buyuk.».
11. [S] Juft buyruqlar: «Turma – yugur, tinma – tirish…»; uch feʼlli gradatsiya: «Yiqil, yo‘qol, ket!».
12. [S] Turon, arslon, Temur, olbosti obrazlari, podshohlikni qon bilan sugʻoriladigan daraxtga oʻxshatish («podshohliq qon bilan sug‘orilaturg‘an bir og‘ochdir»).
13. [S] Joyni boshqa joy niqobi ostida koʻrsatish: Hindiston orqali Turkiston.
14. [S] Tarjima risolalarda: «Bu qurol nimadan iborat? U AQLdir.» tipidagi savol-javob, raqamlangan tasnif, «Ajabo…» bilan ochiladigan savol.

*Qoʻshnilar: Botu va Elbek («Chigʻatoy gurungi» maktabi).* Fitratda drama va nazariy nasr, «-alar/-men» shakllari, «Kimsalar» bor. Botuda barmoq, «erk» kulti va optimistik shior bor. Elbekda masal, qush allegoriyasi va tautogramma bor.

### 5.9. Abdulhamid Choʻlpon

1. [S] Gʻoya ochiq daʼvat bilan emas, ramz va allegoriya orqali beriladi: lola va qor, dengiz va qirgʻoq, kishan, yulduz.
2. [S] Yakuniy hikmat personaj ogʻzidan chiqadi: qorovul, kampir, xalq.
3. [S] Uzun davriy tasvirdan keyin bir-ikki soʻzli alohida xatboshi: «Sezmading.» / «Bilmading.» («Kleoʻpatra»), «Sud. / Ibratli sud.» («Novvoy qiz»).
4. [S] «faqat» soʻzi «lekin» maʼnosida keladi, «ammo» va «chunki» kam.
5. [S] Tire bilan qurilgan nominal antiteza yoki ilova: «U – osmonda, men – yerda», «Misr – u sirlar va yashirinliklar uyasi boʻlgʻon Misr».
6. [S] Ironik qoʻshtirnoq: «“moʻmin va soʻfi”», «“sukut”».
7. [S] Doimiy baholovchi epitet «bechora»: «bechora qiz / qiz bechora».
8. [S] Koʻp nuqta va «!..» deyarli har bir abzas oxirida.
9. [S] Halqa kompozitsiya va sana-joy imzosi.
10. [M] -gʻon/-qon shaklining izchilligi. «Qor qoʻynida lola»da -gʻon/-qon taxminan 46 marta, -gan esa 16 marta keladi.
11. [S] Andijon-Fargʻona ayollar nutqi: «Salaybush», «oʻla qolay», «yashshamagʻur».
12. [S] Sheʼrda jonlantirilgan obyektga «sen» deb murojaat, ostida joy va yil.
13. [S] 1930-yillarda erkin bilvosita nutq, «-gani holda» qurilmasi va evidensial «emish».
14. [S] Purist sheʼriy leksika: chechak, tegra, yogʻdu, koʻlanka, isrik, yoʻqsil.

*Qoʻshni: Qodiriy (hikoya).* Choʻlponda hikoyachi yashirin, ramz va lirik peyzaj bor. Qodiriyning roviysi esa ochiq: u «biz» deydi, hazilni izohlaydi va «oʻqugʻuchi»ga murojaat qiladi.

### 5.10. Abdulla Qodiriy

1. [S] «Biz» deb gapiruvchi roviy «oʻqugʻuchi»ni yetaklaydi va hazilni oʻzi izohlaydi: «biz ham bundan soʻng Roziqning asil ismini atamay “Poʻlagʻur” deb yurutamiz».
2. [S] Boblar «fasl» deb ataladi, romanlar aniq sana bilan ochiladi.
3. [S] Egadan oldin keladigan portret-zanjir, sifatlari -lik/-liq bilan yasaladi.
4. [S] Uchlik parallelizm va anafora: «vijdon bor, din bor, diyonat bor».
5. [S] Istehzoli egalik («Oxund domlamiz») va masxara vazifasidagi hurmat koʻpligi.
6. [S] Hujjat montaji: xat, yorliq, fatvo, ariza, qabr lavhasi.
7. [S] Muallif izohlari «(mual.)» va ojizlik formulasi «qalam kuchi ojizdir».
8. [M] Eski shakllar: «ersa», «-sumon» («achingʻansumon»), «Toshkand», «roʻmon».
9. [S] Lakonik replika va muallifning uzun davri kontrast hosil qiladi: «– Siz o‘shami? – Men o‘sha».
10. [S] Xalqona qargʻish va laqablar iliq hazil vositasi sifatida: «Poʻlagʻur», «toʻymagʻur».
11. [S] Buzib yozilgan ruscha soʻzlar: «mastravoy», «Nekalay», «basport».
12. [S] «Tinch ish»da «lokin» izchil ishlatiladi, «lekin» esa umuman yoʻq. Bu felyeton davrining nozik belgisi.
13. [S] Hikoyada didaktik xulosa yoʻq, ular bir jumlali puent bilan tugaydi: «Mening uyqum oʻchdi.».

*Qoʻshni: Choʻlpon.* 5.9-bandga qarang.

### 5.11. Sadriddin Ayniy

1. [S] Birinchi shaxsdagi retrospektiv memuar ovozi, aniq sana bilan: «1895-yilda Buxoro madrasalaridan oʻzimga bir turar joy axtarar edim.».
2. [S] Xotira formulalari: «Agar unutmagan boʻlsam», «Agar yanglishmasam», «aniq esimda yoʻq».
3. [S] Kattaning bahosi «Endi oʻylaymanki, … ekan» qolipida keladi.
4. [S] Jadid atamalari va «Ey millat!» xitobi yoʻq.
5. [S] Hayvon oʻxshatishlari: «hadiksiragan tipratikanday», «it koʻrgan mushukning juniday».
6. [S] Odat foni «-ar edi / -ar edilar» bilan beriladi («Eski maktab»da edi ≈126, edilar ≈33 marta).
7. [M] Tojikcha «-ma-» takrori: «uymauy», «navbatmanavbat», «tarafmataraf».
8. [S] Arab-fors atamasi yonida qavs ichida izoh: «sifr (nol)».
9. [S] Hokimiyat nutqi faqat imperativlardan iborat: «– Ur!», «– Ozod!», «Zakon shu.».
10. [S] Uzun sanashdan keyin bir jumlali xatboshi: «Bu kishi domla edi.».
11. [S] Laqab-epitetlar: Ishkamba, Qand.
12. [S] Bir jumlali final: «U oʻlgan edi!».

*Qoʻshni: Qodiriyning kech nasri.* Ayniyda roviy «biz» emas, «men». Unda xotira formulalari bor, Toshkent shevasi yoʻq, Buxoro realiyalari koʻp.

### 5.12. Elbek

1. [S] Sheʼr murojaat yoki buyruq bilan boshlanadi: «Mungli qushim…», «Uyg‘on, ko‘nglim…».
2. [S] Qush yoki hayvon allegoriyasi, oxirida ochiq maslahat beriladi («Tutqun qushcha», «Qargʻa», «Kiyikka»).
3. [S] Erk va tutqunlik motivlari: «oltin qafas», «kulliq», «boʻgʻov».
4. [S] Purist leksika: ochun, ezgu, qutli, tegra, koʻrk, yel, tomugʻ.
5. [M] -gʻuvchi shakli radif yoki qofiyada: «sotg‘uvchi / otg‘uvchi / yotg‘uvchi».
6. [S] Alliteratsiya va tautogramma: «Qor qarshisida qarg‘a qag‘irlab quvonchda».
7. [S] Paronomaziya: «el / yel», «kezar / sezar».
8. [S] «chin» sifati qarama-qarshi qoʻyish uchun: «chin havo», «chin daryo».
9. [S] «ham» bogʻlovchisi «va» maʼnosida: «buzuq ham qiyin».
10. [S] Ilmiy matnda turkiy atama va qavs ichida izoh: «siylamaslik (hurmatsizlik)».
11. [S] Takror-juftlar: «sayrab-sayrab», «xo‘rlab-xo‘rlab».
12. [S] Final doim chidam yoki daʼvat bilan tugaydi, pessimizm yoʻq.

### 5.13. Botu

1. [S] Faqat barmoq vazni, aruz izi yoʻq. Misra uzunligi 5 hijodan 15 hijogacha.
2. [S] «Erk» soʻzi kult darajasida: «erk», «chin erk», «erk bulogʻi».
3. [S] Jadid kalit soʻzlari yoʻq. Ularning oʻrnida «erk», «ong», «kelgusi», «yangi turmush» keladi.
4. [S] «Eski» va «yosh / yangi» antitezasi: «eski kuch», «Yosh bilak».
5. [S] Anafora va parallelizm: «Chin erkinlik, chin saodat, chin rohat».
6. [S] «chunki» refren vazifasida keladi. «ammo» va «lekin» yoʻq.
7. [S] Diniy-mumtoz obrazlar dunyoviy maʼnoda: kaʼba, sajda, fotiha, sanam.
8. [M] «-gay», «-gil», «-mak», «-mayin», «-shur», «-la», «-mam» shakllari.
9. [M] Qisqargan shakllar: «ocholmas», «kamaytmas», «tovshi».
10. [S] Bagʻishlovlar va bosh harfli adresatlar: «Oʻgʻlim Erkliga».
11. [S] Qon va qizil rang ikki maʼnoli ramz sifatida.
12. [S] Final optimistik buyruq: «Ilgarila!», «Keta ber!».

### 5.14. Miqdoriy koʻrsatkichlar (avtomatik hisob)

Quyidagi jadval shu qoʻllanma uchun `_holat/chunks/` dagi matnlarda oddiy regex bilan hisoblangan. Hisoblashda apostroflar U+02BB ga keltirilgan, matn kichik harfga oʻgirilgan, tokenlar boʻshliq va tinish belgilari boʻyicha ajratilgan. Raqamlar 1000 tokenga toʻgʻri keladi.

**Ogohlantirishlar:**

- «-ub/-ib» va «-gʻa/-ga» ustunlarida sodda suffiks mosligi hisoblangan. Ularga «kitob», «boshqa» kabi shovqinli soʻzlar ham tushadi. Shuning uchun ular faqat nashrlararo qiyos uchun yaraydi.
- Kichik namunalar (Tavallo «Sheʼrlar» ~1,4 ming, Botu ~1,6 ming token) ishonchli emas.
- «Choʻlpon (hikoya)» guruhida 1914–1934-yillardagi 11 ta hikoya birlashtirilgan.

| Guruh (matnlar) | Token | va | lekin | ammo | biroq | chunki | ila | ekan* | emish | koʻb | koʻp | ul/bul/shul | -ub : -ib | -gʻa/-qa : -ga |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Behbudiy (3 asar) | 11 297 | 55,8 | 4,0 | 0,4 | 0,0 | 0,3 | 10,9 | 4,5 | 0,6 | 6,0 | 2,3 | 23,9 | 189 : 390 | 378 : 330 |
| Avloniy (5 asar) | 41 711 | 14,8 | 0,7 | 0,5 | 0,0 | 1,3 | 13,0 | 1,9 | 0,4 | 0,8 | 1,3 | 2,6 | 1117 : 261 | 649 : 1196 |
| Ibrat («Mezon») | 7 648 | 30,3 | 0,0 | 0,4 | 0,0 | 0,3 | 6,5 | 3,4 | 0,8 | 2,5 | 0,4 | 6,3 | 131 : 114 | 65 : 271 |
| Fitrat, oʻzbekcha asl (3) | 22 957 | **0,7** | 0,0 | 0,0 | **1,7** | 0,1 | 0,1 | 4,5 | 0,2 | 2,7 | 0,6 | 2,4 | 179 : 703 | 433 : 680 |
| Fitrat, tarjimalar (3) | 86 670 | 30,6 | 3,0 | 1,5 | 1,0 | 1,3 | 0,1 | 3,3 | 0,0 | 0,0 | 3,3 | 0,2 | 22 : 2818 | 319 : 4654 |
| Choʻlpon, hikoyalar (11) | 14 720 | 12,2 | 0,5 | 0,3 | 0,1 | 0,1 | 3,2 | 3,9 | 0,6 | 0,9 | 0,8 | 2,0 | 372 : 578 | 271 : 628 |
| Choʻlpon, «Kecha va kunduz» | 66 755 | 9,8 | 1,2 | 0,3 | 0,0 | 0,3 | 0,2 | 3,0 | 0,4 | 0,0 | 2,7 | 0,0 | 313 : 3466 | 460 : 3715 |
| Qodiriy, «Oʻtkan kunlar» | 89 102 | 16,2 | 1,2 | 3,0 | 0,5 | 1,3 | 0,7 | 3,8 | 0,6 | 0,7 | 0,4 | 3,3 | 107 : 4169 | 2068 : 3399 |
| Qodiriy, hikoyalar (4) | 8 702 | 9,1 | 2,0 | 1,3 | 0,9 | 1,0 | 0,0 | 3,6 | 0,2 | 1,0 | 1,1 | 0,7 | 25 : 502 | 206 : 319 |
| Hamza, «Burungi qozilar» | 11 422 | **0,7** | 1,4 | 0,5 | 0,0 | 0,8 | 0,1 | 3,0 | 0,2 | 0,0 | 1,9 | 0,4 | 1 : 705 | 68 : 487 |
| Ayniy (2 qissa) | 40 055 | 17,7 | 2,7 | 2,0 | 0,2 | 0,7 | 0,0 | 2,5 | 0,0 | 0,0 | 2,0 | 0,0 | 8 : 2209 | 246 : 2491 |
| Tavallo («Sheʼrlar») | 1 422 | 1,4 | 0 | 0 | 0 | 0 | 0,7 | 0 | 0 | 0 | 1,4 | 2,8 | 17 : 21 | 12 : 55 |
| Botu («Sheʼrlar») | 1 641 | 1,2 | 0 | 0 | 1,2 | 1,2 | 0 | 0,6 | 0,6 | 0 | 3,0 | 0,6 | 0 : 31 | 12 : 80 |

*ekan\* — «ekan» bilan boshlanuvchi barcha shakllar.

**Jadvaldan kelib chiqadigan xulosalar** (bu shu jadval asosidagi tahlil):

1. **«va» eng kuchli yagona farqlovchi belgilardan biri.** Behbudiy (55,8) va Ibratda (30,3) u juda koʻp. Fitratning oʻzbekcha asl matnlarida (0,7) deyarli yoʻq. Profillardagi «“va”siz uslub» haqidagi kuzatuv shu bilan tasdiqlanadi. Hamzaning 1926-yilgi dramasida ham «va» deyarli yoʻq (0,7). Bu muallif profilida qayd etilmagan yangi kuzatuv. Uni «Chigʻatoy gurungi» purizmining taʼsiri deb talqin qilish mumkin, lekin nashr tahriri ham sabab boʻlishi mumkin. Bu masala arab yozuvidagi asl nashr bilan tekshirilishi kerak.
2. **«ila» usmonli-umumturkiy qatlamning koʻrsatkichi.** Avloniy (13,0), Behbudiy (10,9) va Ibratda (6,5) koʻp, 1920-yillar matnlarida deyarli yoʻq.
3. **«ul/bul/shul» Behbudiyda (23,9) keskin ustun.** Bu asosan 1903–1904-yillardagi tarjima nasriga tegishli.
4. **Tarjima matnlari alohida klaster hosil qiladi.** Fitrat tarjimalarida «-ub» deyarli yoʻq (22 : 2818), «koʻb» umuman yoʻq. Demak, tarjimon zamonaviy morfologiyani ishlatgan va arxaizmni faqat leksika va sintaksis orqali bergan.
5. **Bir muallifning turli nashrlari turlicha modernizatsiya qilingan.** Choʻlponning hikoyalarida «-ub : -ib» nisbati 372 : 578, «Kecha va kunduz»da esa 313 : 3466. Bu farqning bir qismi davrga (1914–1927 va 1936), bir qismi nashrga bogʻliq. Shuning uchun morfologik belgilar [M] bir nashr ichida yoki bir xil darajada modernizatsiya qilingan nashrlar orasida solishtirilishi kerak.
6. **«biroq» Fitrat va Botuda boshqa zidlov bogʻlovchilaridan ustun.** Bu «Chigʻatoy gurungi» maktabining umumiy belgisi boʻlishi mumkin (gipoteza, katta namuna bilan tekshirish kerak).

---

## 6. Stilizatsiya boʻyicha amaliy qoʻllanma

Bu boʻlim jadid uslubida oʻquv, sahna yoki ilmiy-namoyish maqsadida matn yaratmoqchi boʻlganlar uchun. **Asosiy etik qoida:** stilizatsiya hech qachon asl matn sifatida taqdim etilmasligi kerak. Har bir stilizatsiya ochiq belgilanadi va unga jadid muallifining nomi iqtibos tarzida qoʻyilmaydi.

### 6.1. Umumiy tamoyillar

1. **Avval muallif, davr va janrni tanlang.** «Jadid uslubi» degan yagona uslub yoʻq. 1913-yilgi Behbudiy maqolasi va 1927-yilgi Choʻlpon hikoyasi bir-biridan Choʻlpon va hozirgi zamon nasri kabi farq qiladi.
2. **Morfologiyani izchil saqlang, lekin oʻlchov bilan.** Bitta matnda -gʻa, -ub, -gʻon va -dur kabi shakllar bir xil izchillik bilan qoʻllanishi kerak. Biroq har bir soʻzni arxaiklashtirish ham notoʻgʻri: asl matnlarda ham «-ga» va «-ib» aralash keladi. Hikoyalar uchun taxminiy nisbat 5.14-boʻlimdagi jadvalda bor.
3. **Leksik qatlamlarni davrga moslang.** 1913-yil uchun «millat, taraqqiy, maorif», 1922-yil uchun «erk, el, ulus» (purist mualliflarda), 1934-yil uchun «kolxoz, brigadir» (ironik kontekstda).
4. **Ritorik kompozitsiyani muallifdan oling.** Masalan, Behbudiyda tezis → raqam → eʼtiroz → xulosa → duo, Ibratda tezis → oyat → «Yaʼni» → latifa → «Mana», Choʻlponda sahna → detal → ramz → personaj ogʻzidagi hikmat.
5. **Tinish belgilariga eʼtibor bering.** «?!», «!..», koʻp nuqta va tire davr belgisi. Lekin haddan oshirish parodiyaga olib keladi.
6. **Sana va faktlarni toʻqimang.** Stilizatsiyada real gazeta soni, sana yoki boshqa jadidning «iqtibos»ini oʻylab chiqarmang. Ibrat profili alohida ogohlantiradi: stilizatsiyada oyat va hadislarni oʻylab topmaslik, faqat keng maʼlum formulalardan foydalanish yoki «Kalomi qadimda aytur…» deb umumiy tarzda tilga olish kerak.

### 6.2. Anaxronizmlar: davrga mos boʻlmagan soʻz va shakllar

| Kategoriya | Davrga mos emas (qochish kerak) | Davrga mos variant | Izoh |
|---|---|---|---|
| Hozirgi siyosiy-mafkuraviy leksika | «Yangi Oʻzbekiston», «Uchinchi Renessans», «mustaqillik yillari», «milliy gʻoya» | — | Munavvar qori profili Xolboyev kitobining zamonaviy ovozi haqida shunday ogohlantiradi |
| Sovet sinfiy leksikasi 1917-yildan oldingi matnda | «mehnatkash xalq», «burjuaziya», «sinfiy kurash», «feodal» | «faqir», «kambagʻal», «agʻniyo», «mardikor» | «feodal», «tuban sinf» atamalari Qodiriyda 1928-yilgi soʻzboshida paydo boʻladi |
| Kech sovet atamalari 1920-yillar matnida | «kolxozchi», «zarbdor», «pioner» (1930-yillardan) | 1920-yillarda «yoʻqsil», «ishchi», «ekinchi» | «Meros» va «Obid ketmon» 1930-yillarga tegishli |
| Hozirgi ilmiy-texnik soʻzlar | «kompyuter», «internet», «samolyot» (1910-yillarda) | «tayyora», «ayruplon / ayruflon», «otasharava», «shayton aravasi» (velosiped), «madaniyat aygʻiri» (poyezd, ironik) | Ibrat va Tavalloda buzilgan ruscha shakllar, Fitratda kalkalar |
| Zamonaviy oʻzlashma talaffuzi | «doktor», «bank», «gazeta», «zakon» (jadid nasrida) | «duxtur / doʻxtur», «bonka», «gazet / gʻazita», «zakun / zakunchi» | talaffuz boʻyicha yozilgan |
| Bogʻlovchini muallifga moslamaslik | Fitratning 1920-yillardagi badiiy matnida «va», «lekin»; Behbudiy maqolasida «biroq» | Fitratda «biroq», «ham / hamda», «-da»; Behbudiyda «va», «Chunonchi», «Modomiki», «Azbaski» | 5.8 va 5.1-boʻlimlarga qarang |
| Hozirgi meʼyoriy morfologiya (ataylab arxaiklashtirilgan matnda) | -adigan, -yapti, mening, -ga (izchil), -ib (izchil) | -aturgʻon / -adurgan, -yotir, menim / manim, -gʻa, -ub | aralash qoʻllash meʼyor, lekin izchil hozirgi shakl anaxronizm |
| Til va xalq nomi 1910-yillar matnida | «oʻzbek tili», «oʻzbek adabiyoti» | «turkiy», «turkcha», «turk tili», «sartiya» (Ibrat), «chigʻatoy» | «oʻzbek» nomi 1920-yillarda faollashgan (`adabiyot-poetika-til.md`, 4.5) |
| Hozirgi sevgi lirikasi klishelari | «sevgilim», «yurak urishim» | «yor», «maʼshuqa», «mahbub», «sanam», «dilbar» (aruzda); «sevgan qiz» (Botu) | |
| Hozirgi ish yuritish uslubi | «eʼtiboringiz uchun rahmat», «hurmat bilan» | «Muhibingiz», «Boqi:», «rijo qilurmiz», «ojizona arz» | xat odobi |

**Anaxronizmning nozik turlari:**

- **Purist soʻzlar 1913-yilgi Behbudiy matnida.** «Ulus», «erk», «ezgu» Behbudiyga xos emas. Uning profilida aniq aytilgan: u sof turkiy soʻz yasamagan, arab-fors atamalarini saqlagan.
- **«millat, taraqqiy» Fitratning 1920-yillardagi dramasida.** Bu soʻzlar u yerda ijobiy maʼnoda kelmaydi.
- **Jadid daʼvati Ayniy qissasida.** Ayniyda gʻoya xitobsiz, voqea orqali beriladi.
- **«Ey millat!» xitobi Ibrat yoki Choʻlponning 1920-yillardagi hikoyasida.** Ibratda bu registr deyarli yoʻq. Choʻlpon esa 1920-yillarda ochiq xitobdan ramzga oʻtgan.
- **Usmonlicha «ban», «verar», «edar» Munavvar qori matnida.** Profilga koʻra, bu shakllar Avloniyga xos, Munavvar qoriga emas.

### 6.3. Imlo stilizatsiyasi boʻyicha amaliy qoidalar

1. **Belgi tanlang va izchil boʻling.** Zamonaviy oʻzbek lotin yozuvida oʻ va gʻ uchun ʻ (U+02BB), tutuq belgisi uchun ʼ (U+02BC) ishlatiladi. Bazadagi nashrlar esa ‘ (U+2018) va ’ (U+2019) belgilarini ham ishlatadi (7.2-boʻlim). Stilizatsiyada bitta tizimni tanlang.
2. **Davr imlosini koʻrsatishning eng arzon va ishonchli yoʻli** quyidagi oʻnta belgi: -gʻa/-qa, -ub, -gʻon, -dur, -mak, ul/shul, koʻb, emdi, menim, -sun.
3. **Muallifga xos bitta-ikkita «imzo» shaklini qoʻshing.** Behbudiyga -ayluk, Avloniyga «oʻldigʻindan», Fitratga -alar va «negakim», Ibratga «oʻranung», Hamzaga «bani», Ayniyga «uymauy» xos.
4. **Ruscha soʻzni talaffuz boʻyicha yozing va uni salbiy yoki kulgili kontekstga qoʻying** (1914–1920 satirasi uchun).
5. **Qavs ichidagi izoh usulidan foydalaning:** «tayyora (aeroplan)». Bu Behbudiy, Zafariy, Ayniy va Choʻlpon satirasiga xos.

### 6.4. Har bir muallif uchun qisqa stilizatsiya namunalari

> **Diqqat: quyidagi 13 ta matnning hammasi STILIZATSIYA, ASL MATN EMAS.** Ularni shu qoʻllanma muallifi oʻquv maqsadida yozgan. Ulardagi birorta jumla jadid mualliflariga tegishli emas. Ularni iqtibos sifatida keltirmang va mualliflikni aniqlash modellarida «haqiqiy» namuna sifatida ishlatmang. Ular faqat salbiy yoki sinov namunasi boʻlishi mumkin.

**6.4.1. Behbudiy uslubida** (publitsistika, 1913–1915) — *stilizatsiya, asl matn emas*

> Muhtaram birodarlar! Barchamizgʻa oftob kabi ravshandurki, Samarqandda qiroatxona yoʻqdur. Oʻn sana muqaddam shahrimizda ikki kitobfurush bor edi, al-on bittasi ham qolmadi. Muning sababi nadur? Albatta, javob berursizki, xalq kitob olmas. Biz ham dermizki, durust. Ammo boshqa millatlar kitobni toʻydan ziyoda suyarlar, bizniki toʻy ila faxr etar. Oʻtayluk. Xulosa, bizgʻa lozimki, har mahallada bir qiroatxona ochayluk. Endi gʻayrat sizlardan, tavfiq Ollodandur.

**6.4.2. Munavvar qori uslubida** (darslik masali) — *stilizatsiya, asl matn emas*

> Ikki dehqon. Oʻtgan zamonda ikki dehqon bor edi. Biri yerini kuzda haydadi, biri bahorgʻacha uxladi. Yoz kelganda birining bugʻdoyi oltun kabi boʻldi, ikkinchisining yerida yovvoyi oʻt oʻsdi. Ikkinchi dehqon qoʻshnisidan soʻradi: «Sening yeringda nima sir bordur?» Qoʻshnisi aytdi: «Sir yoʻqdur, chunki men vaqtida ishladim.»
> Hissa: Ilm ham ekin kabidur. Kim vaqtida eksa, oʻrar. Kim uxlasa, qurur.

**6.4.3. Ibrat uslubida** («Mezon» shaklida) — *stilizatsiya, asl matn emas*

> Bu mezon – soatni vazn qilur. Chunonchi, avvalgi zamonda xalq vaqtni quyosh soyasi ila bilur erdi. Alhol choʻntakda soat yurguzurlar. Banda oʻzum bir majlisda edum, bir mullo aytdiki: «Soat nasorodan chiqqon, namoz vaqtini buzar emish». Banda aytdum: «Taqsir, oʻzingizning soatingiz ham bor ekan.» Kuldilar. Mana xalqimizni(ng) soddaligi. Bas, vaqtni qadrlang, vaqt darkor. Mana soatning mezoni vazn boʻldi.

**6.4.4. Avloniy uslubida** («Turkiy guliston» bobi) — *stilizatsiya, asl matn emas*

> Mehnat. Mehnat deb oʻz qoʻl kuchimiz ila halol rizq topmakni aytilur. Chunki mehnatsiz inson qanotsiz qush kabidur. Biz turkistonlilar ota-bobolarimizdan qolgʻon yerlarni sotub, bekor oʻlturub, qarzgʻa botduk. Hayhot! Boshqalar yerimizni ishlab, mevasini yerlar. Alhosil, mehnat bizlar uchun yo izzat – yo zillat masalasidur.
> Qoʻl ishlasa, non topar, til ishlasa – gʻavgʻo,
> Mehnat ila topilur, ey Hijron, har ne savdo.

(Baytlar vaznga solinmagan, faqat shaklni koʻrsatish uchun.)

**6.4.5. Tavallo uslubida** (gʻazal-hajv bayti) — *stilizatsiya, asl matn emas*

> Ilm uchun dunyo uyondi, biz uyonmasmiz hanuz,
> Oʻzgalar oʻt aravada uchdi, biz yayov yurmiz hanuz.
> Gazet olmoqqa pul yoʻq, toʻy uchun qarz olgʻumiz,
> Shul ekan bizlarda gʻayrat, shul ekan himmat hanuz.
> Bas emdi, yozma, Tavallo, afv tila millatdin,
> Kimga aytay dardimi, yoʻq eshitguvchi hanuz.

(Radifli gʻazal shakli koʻrsatilgan, vazn tekshirilmagan.)

**6.4.6. Hamza uslubida** (maktab sheʼri, naqarot bilan) — *stilizatsiya, asl matn emas*

> Tong otdi, ey bolalar, maktabga yugurmoq kerak,
> Jahl tunin ilm chirogʻi birla yoritmoq kerak.
> (Naqarot) Hay, bolalar, ilm sari, ilm sari!
> Bizni Fargʻona eli uxlar ekan, ey Nihon,
> Bizlara uygʻonmoq-u oʻzgalara yetmoq kerak.

(Radif «kerak», oʻgʻuzcha dativ «bizlara», qaratqichda «Bizni» va maqtaʼda taxallus koʻrsatilgan. Vazn tekshirilmagan.)

**6.4.7. Zafariy uslubida** (ilmiy-folklorshunoslik maqolasi, 1920-yillar) — *stilizatsiya, asl matn emas*

> Bizning el qoʻshiqlari (ashulalari) uch turli boʻladir: 1. yor-yorlar, 2. ish qoʻshiqlari, 3. allalar. Negakim, har bir el oʻz turmushini kuy ila ifoda qilur. Taassufki, shul choqda bu qoʻshiqlar unutilib bormoqdalar. Bularni yigʻib, ilmiy yoʻsinda tekshirmak uchun kuchim yetmaydur, shuning uchun bilimli oʻrtoqlardan yordam oʻtunar edim.

**6.4.8. Fitrat uslubida** (1920-yillar dramasi parchasi) — *stilizatsiya, asl matn emas*

> KIMSALAR: Ulugʻbek, Tilchi.
> (Kecha. Sham yorugʻi. Ulugʻbek yulduzlar jadvali ustida.)
> TILCHI. Xoqonim, ulus sizdan qoʻrqadir.
> ULUGʻBEK. Ulus qoʻrqmasin, onglasin. Qoʻrquv qul yasar, onglash erk yasar.
> TILCHI. Biroq mullalar…
> ULUGʻBEK. Mullalar yulduzdan qoʻrqalar, negakim yulduz yolgʻon soʻylamas. (Oʻylar.) Bilim bir ogʻochdir, uni kesmoq bilan yer qurumas, el qurur. (Soʻylar.) Chiq!
> (Parda tushar.)

(Bu namunada ataylab «va» ishlatilmagan, purist leksika va -alar shakli bor.)

**6.4.9. Choʻlpon uslubida** (1920-yillar hikoyasining finali) — *stilizatsiya, asl matn emas*

> Ertasi kuni qishloqning hamma xotinlari ariq boʻyida edi. Kir yuvildi, gap yuvildi, qizning nomi ham yuvildi…
> Kech kirdi.
> Qari tutning shoxida bir qushcha yolgʻiz sayrab oʻtirar edi. Bechora qush! Uyasi qayda? Kim bilsin…
> Qorovul chol hassasini yerga urdi-da:
> – Ha, bolalar, qush ham inini tanlab qoʻyolmas ekan bu dunyoda!.. – dedi.

**6.4.10. Qodiriy uslubida** (roman bobining ochilishi) — *stilizatsiya, asl matn emas*

> 1270-hijriy, hamal oyining oxirlari, bahorning iliq kechalaridan biri. Endi biz, izzatlik oʻqugʻuchimizni bozor shovqinidan olib chiqib, Shayxontohurdagi bir tor koʻchaga boshlaymiz. Bu koʻchaning oxirida, pastqam, lekin ozoda bir havlida, oʻrta boʻyliq, qorachadan kelgan, soqoli endi oqara boshlagan, koʻzlari kulib turgʻan bir kishi chiroq yoqib, nimadir yozar edi. Bu kishi bizning qissamizning bosh qahramoni boʻlmasa ham, uni tanib qoʻyishning ziyoni yoʻq.

**6.4.11. Ayniy uslubida** (memuar-qissa) — *stilizatsiya, asl matn emas*

> Agar yanglishmasam, oʻn yasharlik vaqtim edi. Bir kuni otam meni bozorga olib bordi. Rastada bir «tabarruk» duoxon oʻtirar edi. Uning oldida qogʻozga oʻralgan tumorlar navbatmanavbat sotilar edi. Men bu duolar hamma kasalga davo, deb oʻylaganman. Endi oʻylaymanki, u kishi faqat bitta kasalni davolar ekan: oʻz choʻntagining boʻshligʻini.
> Shundan keyin otam meni ul rastaga boshqa olib bormadi.

**6.4.12. Elbek uslubida** (allegorik sheʼr) — *stilizatsiya, asl matn emas*

> Hoy, soʻyla, kichik qaldirgʻoch,
> Qaydan kelding bu ochunga?
> Qanoting ingichka, koʻngling och,
> Qoʻrqmaysanmi qish tuniga?
> «Qoʻrqmayman, – dedi qaldirgʻoch, –
> Koʻklam chin, men koʻklamchiman!
> Qish oʻtar, ochilur yogʻoch,
> Men el uchun quvonchiman!»

**6.4.13. Botu uslubida** (barmoq, 8 hijo) — *stilizatsiya, asl matn emas*

> Eski tunlar ketdi, ketdi,
> Yosh tong otdi, erk yetishdi.
> Ey yoʻqsil el, boshing koʻtar,
> Kelgusi bor, qaygʻu oʻtar!
> Chunki bizda yosh bilak bor,
> Chunki bizda chin yurak bor,
> Toʻxtama, oldinga, ket!
> Erk yoʻlidan qaytma, ket!

### 6.5. Stilizatsiyani tekshirish roʻyxati

1. Matn ustida «stilizatsiya, asl matn emas» belgisi bormi?
2. Morfologiya bitta davr meʼyoriga mosmi? Bir gapda «-ga» va «-gʻa», «-ib» va «-ub» aralash kelishi mumkin, lekin umumiy nisbat muallifga mos boʻlishi kerak.
3. 6.2-boʻlimdagi anaxronizmlardan birortasi bormi?
4. Muallifning kamida uchta [S] belgisi (5-boʻlim) bormi?
5. Muallifga xos boʻlmagan belgilar bormi? Masalan, Fitratning 1920-yillar matnida «va», Behbudiyda purist soʻzlar, Ayniyda xitob.
6. Real gazeta, sana, oyat yoki iqtibos toʻqilmaganmi?
7. Tinish belgilari parodiya darajasiga yetmaganmi?

---

## 7. NLP va kompyuter lingvistikasi uchun eslatmalar

### 7.1. Korpus tarkibi (ushbu papkadagi matnlar hajmi)

**Manba va hisoblash usuli:**

- Matnlar `Jadidlar_kitoblari_epub/` papkasidagi 57 ta EPUB fayldan olingan. Ular pandoc orqali matnga aylantirilgan, 250 belgidan uzun satrlar `textwrap` bilan oʻralgan va `knowledge/_holat/chunks/` papkasiga boʻlaklab yozilgan (81 ta fayl; jarayon `_holat/prep.py` da).
- `_holat/manifest.json` da 58 ta yozuv bor: 57 ta kitob va 1995-yilgi imlo qoidalari hujjati.
- «Belgi» ustuni manifestdagi `chars` qiymatidan olingan. «Token» ustuni boʻlaklardagi boʻshliq bilan ajratilgan soʻzlar soni. U shu qoʻllanma uchun hisoblangan va taxminiy.

**Asosiy (birlamchi) matnlar:**

| Muallif | Asar | Belgi | Token (taxm.) | Janr |
|---|---|---|---|---|
| Behbudiy | Padarkush | 20 563 | 2 657 | drama |
| Behbudiy | Bir vafolik zaifaning xususida | 59 781 | 8 621 | tarjima-moslashtirma qissa |
| Behbudiy | Bir aʼmo bolaning hasrati | 1 411 | 169 | lirik tabdil |
| Ibrat | Mezon uz-zamon | 58 661 | 7 657 | risola |
| Avloniy | Turkiy guliston yoxud axloq | 122 421 | 16 000 | axloqiy darslik |
| Avloniy | Afgʻon sayohati | 99 352 | 12 629 | safarnoma-kundalik |
| Avloniy | Uygʻon, millat | 73 718 | 9 531 | sheʼrlar |
| Avloniy | Advokatlik osonmi | 32 808 | 4 153 | komediya |
| Avloniy | Toʻgʻrilik | 906 | 119 | ertak |
| Fitrat | Najot yoʻli | 314 811 | 39 982 | risola (tarjima) |
| Fitrat | Oila yoki oila boshqarish tartiblari | 229 022 | 29 417 | risola (tarjima) |
| Fitrat | Hind sayyohining qissasi | 139 762 | 18 020 | qissa (tarjima) |
| Fitrat | Hind ixtilolchilari | 96 594 | 11 564 | drama |
| Fitrat | Abulfayzxon | 80 678 | 9 909 | tragediya |
| Fitrat | Sheʼrlar | 14 686 | 1 769 | sheʼrlar |
| Choʻlpon | Kecha va kunduz | 527 437 | 69 747 | roman |
| Choʻlpon | Yorqinoy | 190 383 | 25 023 | drama |
| Choʻlpon | Doʻxtur Muhammadiyor | 25 799 | 3 292 | hikoya |
| Choʻlpon | Kleoʻpatra | 14 480 | 1 906 | lirik nasr |
| Choʻlpon | Sheʼrlar | 13 737 | 1 657 | sheʼrlar |
| Choʻlpon | Meros | 12 579 | 1 632 | hikoya |
| Choʻlpon | Nonushta | 12 141 | 1 588 | hikoya |
| Choʻlpon | Novvoy qiz | 11 420 | 1 497 | hikoya |
| Choʻlpon | Qor qoʻynida lola | 11 213 | 1 453 | hikoya |
| Choʻlpon | Qurboni jaholat | 7 959 | 1 043 | hikoya |
| Choʻlpon | Oqposhshoning inʼomi | 6 188 | 791 | hikoya |
| Choʻlpon | Oydin kechalarda | 6 092 | 809 | hikoya |
| Choʻlpon | Seni koʻb koʻrmasun | 5 270 | 701 | hikoya |
| Choʻlpon | Taraqqiy | 3 962 | 542 | hikoya |
| Qodiriy | Oʻtkan kunlar | 706 650 | 93 284 | roman |
| Qodiriy | Obid ketmon | 504 468 | 65 809 | qissa |
| Qodiriy | Mehrobdan chayon | 494 321 | 65 584 | roman |
| Qodiriy | Baxtsiz kuyov | 34 958 | 4 396 | drama |
| Qodiriy | Quyosh bilan ham kurashaman | 30 362 | 3 948 | hikoya |
| Qodiriy | Uloqda | 17 810 | 2 319 | hikoya |
| Qodiriy | Tinch ish | 11 969 | 1 551 | hikoya |
| Qodiriy | Jinlar bazmi | 9 116 | 1 209 | hikoya |
| Hamza | Burungi qozilar yoki Maysaraning ishi | 90 259 | 11 460 | komediya |
| Hamza | Tanlangan asarlar | 69 587 | 9 157 | sheʼrlar |
| Hamza | Sheʼrlar | 10 353 | 1 346 | sheʼrlar |
| Ayniy | Sudxoʻrning oʻlimi | 237 313 | 32 551 | qissa |
| Ayniy | Eski maktab | 66 492 | 9 178 | qissa |
| Tavallo | Ey Vatan, ezgu Vatan | 285 811 | 35 672 | sheʼr, publitsistika va zamonaviy xotiralar (aralash) |
| Tavallo | Sheʼrlar | 11 289 | 1 432 | sheʼrlar |
| Botu | Sheʼrlar | 13 413 | 1 656 | sheʼrlar |
| Antologiya | Odob-axloq kitobi (Choʻlpon, Fitrat, Qodiriy, Behbudiy, Munavvar qori) | 243 460 | 31 728 | aralash |

**Ikkilamchi adabiyot (tadqiqot va xotira):**

| Muallif | Asar | Belgi | Token (taxm.) |
|---|---|---|---|
| Habibulla Qodiriy | Otam haqida | 490 695 | 61 741 |
| Ulugʻbek Dolimov | Jadidlar. Isʼhoqxon toʻra Ibrat | 142 312 | 17 523 |
| Dilmurod Quronov | Jadidlar. Abdulhamid Choʻlpon | 127 804 | 15 263 |
| Olim Usmonov | Jadidlar. Gʻulom Zafariy | 120 303 | 14 706 |
| Zaynobiddin Abdurashidov | Jadidlar. Mahmudxoʻja Behbudiy | 117 834 | 14 270 |
| Bahodir Karimov | Jadidlar. Abdulla Qodiriy | 116 413 | 14 316 |
| Hamidulla Boltaboyev | Jadidlar. Abdurauf Fitrat | 116 221 | 14 356 |
| Sotimjon Xolboyev | Jadidlar. Munavvar qori Abdurashidxonov | 113 348 | 13 817 |
| Olim Oltinbek | Jadidlar. Abdulla Avloniy | 107 023 | 13 592 |
| Javlon Jovliyev | Elbek | 8 746 | 1 131 |
| Asqad Muxtor | Qodiriyni koʻrganman-u… | 1 509 | 192 |
| (hujjat) | 1995-yilgi imlo qoidalari (339-son qaror) | 27 918 | 3 692 |

**Jami:** 58 ta yozuv, 6 521 591 belgi, ~840 ming token.

**Mualliflar boʻyicha birlamchi matn hajmi** (antologiyasiz):

| Muallif | Belgi | ~Token | Asarlar |
|---|---|---|---|
| Qodiriy | 1 809 654 | 238 100 | 8 |
| Fitrat | 875 553 | 110 661 | 6 (3 tasi tarjima) |
| Choʻlpon | 848 660 | 111 681 | 14 |
| Avloniy | 329 205 | 42 432 | 5 |
| Ayniy | 303 805 | 41 729 | 2 |
| Tavallo | 297 100 | 37 104 | 2 (zamonaviy apparat bilan) |
| Hamza | 170 199 | 21 963 | 3 |
| Behbudiy | 81 755 | 11 447 | 3 |
| Ibrat | 58 661 | 7 657 | 1 |
| Botu | 13 413 | 1 656 | 1 |
| Munavvar qori | — | — | faqat antologiya ichida |
| Elbek | — | — | faqat ikkilamchi manbadagi iqtiboslar orqali |
| Zafariy | — | — | faqat Usmonov kitobidagi iqtiboslar orqali |

**Korpusning nomutanosibligi stilometriya uchun jiddiy muammo:**

1. Qodiriy va Choʻlponning romanlari birlamchi matnning katta qismini tashkil etadi. Munavvar qori, Elbek va Zafariyning esa alohida birlamchi matni yoʻq.
2. Behbudiyning oʻz asl nasri faqat ~2,7 ming tokenlik «Padarkush»dan iborat. Qolganlari tarjima-moslashtirma va tabdil.
3. Fitrat matnlarining 80 % dan koʻprogʻi forschadan zamonaviy tarjima.
4. «Ey Vatan, ezgu Vatan» va «Tanlangan asarlar» kabi toʻplamlarda muharrir apparati (soʻzboshi, izoh, xotira) bor. Ularni muallif matnidan ajratish kerak.
5. **Tavsiya:** mualliflikni aniqlash tajribalarida matnlarni 1–2 ming tokenlik teng boʻlaklarga ajrating, har bir muallifdan bir xil sondagi boʻlak oling, tarjima va antologiya matnlarini alohida yorliq bilan belgilang.

### 7.2. Apostrof va belgi variantlari

Boʻlaklarda oʻ, gʻ va tutuq belgisi uchun besh xil belgi uchraydi (shu qoʻllanma uchun hisoblangan):

| Belgi | Unicode | Korpusdagi soni | Qayerda ustun |
|---|---|---|---|
| ‘ | U+2018 LEFT SINGLE QUOTATION MARK | 80 936 | «Oʻtkan kunlar», «Mehrobdan chayon», «Obid ketmon», «Kecha va kunduz», «Abulfayzxon», «Oila», Fitrat, Botu va Hamza «Sheʼrlar»i, «Uygʻon, millat», «Toʻgʻrilik», «Jadidlar» seriyasi |
| ʻ | U+02BB MODIFIER LETTER TURNED COMMA | 60 988 | qolgan nashrlarning aksariyati |
| ’ | U+2019 RIGHT SINGLE QUOTATION MARK | 7 238 | ‘ ishlatilgan nashrlarda tutuq belgisi sifatida |
| ʼ | U+02BC MODIFIER LETTER APOSTROPHE | 4 977 | ʻ ishlatilgan nashrlarda tutuq belgisi sifatida |
| ' | U+0027 APOSTROPHE | 18 | tasodifiy («Oʻtkan kunlar», «Oila», imlo hujjati) |

**Amaliy xulosalar:**

- **Normalizatsiya majburiy.** Oʻ va gʻ ichidagi ‘ (U+2018) belgisini ʻ (U+02BB) ga, tutuq vazifasidagi ’ (U+2019) belgisini ʼ (U+02BC) ga keltiring.
- **Lekin ‘ va ’ belgilari qoʻshtirnoq vazifasida ham kelishi mumkin.** Ehtiyot qoidasi: ‘ belgisi o yoki g harfidan keyin kelsa, u harf qismi. ’ belgisi unli va undosh orasida kelsa (maʼrifat, sheʼr), u tutuq belgisi. Boshqa holatlarda tinish belgisi sifatida qoldiring.
- **Bitta nashrning oʻzida aralash belgilar bor.** Masalan, «Uygʻon, millat»da 1 560 ta ‘ va 106 ta ʻ, «Ey Vatan, ezgu Vatan»da ʻ va ʼ bilan birga 227 ta kirill harfi bor.
- **Hisob va qidiruvni faqat normalizatsiyadan keyin qiling.** Aks holda «koʻb» va «ko‘b» ikki xil soʻz sifatida sanaladi.

### 7.3. Kirill harflari va OCR qoldiqlari

- **Lotin matn ichida kirill harflari bor.** Ayniyning «Eski maktab»ida 317 ta, Xolboyev kitobida 273 ta, «Oʻtkan kunlar»da 253 ta, «Ey Vatan, ezgu Vatan»da 227 ta, Dolimov kitobida 198 ta.
- **Ularning bir qismi OCR yoki konvertatsiya xatosi.** Masalan, lotincha «x» oʻrnida kirillcha «х» kelgan: «vahshiylikdan хabarsiz», «iхlos» («Eski maktab» kartochkasidagi iqtiboslarda shunday saqlangan).
- **Boshqa qismi ataylab berilgan kirill iqtibos.** Masalan, «Obid ketmon»dagi «пусть по ихнему будеть» yoki ikkilamchi manbalardagi kirill yozuvidagi iqtiboslar.
- **Tavsiya:** kirill harfini lotin harfi bilan qurshalgan soʻz ichida qidiring (aralash skriptli tokenlar) va uni gomoglif xaritasi bilan almashtiring (х→x, о→o, а→a, е→e, с→s, р→r). Toʻliq kirill soʻzlar va gaplarni esa alohida til yorligʻi bilan saqlang.

### 7.4. Transliteratsiya muammolari

Jadid matnlari arab yozuvida (1921–1923-yillardan isloh qilingan arab imlosida), 1929–1940-yillarda lotin yozuvida (1934-yilgacha 9 unli bilan), keyin kirillda chop etilgan. Zamonaviy nashrlar shu yozuvlardan birontasidan qilingan transliteratsiya (`adabiyot-poetika-til.md`, 7-boʻlim). Natijada quyidagi muammolar kelib chiqadi:

1. **Unlilar noaniqligi.** Arab yozuvida unlilar toʻliq yozilmaydi. Shuning uchun «koʻb/koʻp», «-ub/-ib», «-gʻon/-gʻan», «yamon/yomon», «oltun/oltin» kabi farqlarning bir qismi transliteratorning tanlovi boʻlishi mumkin, muallifniki emas.
2. **Modernizatsiya darajasi nashrdan nashrga farq qiladi.** Profillarda shunday misollar bor:
   - Munavvar qori: bir matn turli nashrlarda «ko‘rulmaydur» va «ko‘rilmaydur»;
   - Avloniy: «man» va «men»;
   - Fitrat: Oltinbek va Boltaboyev kitoblaridagi iqtiboslar asl nashrdan farq qiladi.
   5.14-boʻlimdagi jadvalda bu farq miqdoriy jihatdan ham koʻrinadi: Fitrat tarjimalarida «-ub» deyarli yoʻq, Choʻlponning hikoyalarida esa koʻp.
3. **Muharrir qoʻshimchalari.** «(ng)» tiklashi («Bizni(ng)», «ani(ng)»), «[…]» belgisi, qavs ichidagi izohlar va «(mual.)» belgisi uchraydi. Qodiriyda «(mual.)» muallifniki. Ibrat va Behbudiyda «(ng)» esa nashriyotniki. Tokenizatsiyadan oldin «(ng)» kabi qoʻshimchalarni olib tashlang yoki alohida belgilang.
4. **Arabcha va forscha iqtiboslar lotin transkripsiyasida** («Va la tanozaʼu fatafshalu…», «chahor tarafash maʼlum shud»). Ular tilni aniqlashda (language ID) shovqin beradi. Ularni ajratib, yorliq bilan belgilash tavsiya etiladi.
5. **Atoqli otlarning variantlari:** «Kleoʻpatra / Kileoʻpatra», «Hindiston / Hinduston», «Toshkand / Toshkent», «Ovrupo / Ovroʻpa / Yevropa / Yovrupa», «doʻxtur / duxtur / doʻktur / doʻxtir». Shaxs va joy nomlarini aniqlashda (NER) bunday variantlar uchun lugʻat kerak.
6. **Eski transliteratsiyaning «oʻ» belgisi ruscha oʻzlashmalarda:** «gubernatoʻr», «telefoʻn», «vagoʻn», «Lohoʻr», «boʻmba». Bu 1920–1930-yillardagi lotin yozuvi anʼanasining izi. Bunday soʻzlarni ruscha asliga bogʻlash uchun alohida normalizatsiya qoidasi kerak.

### 7.5. Imlo variantlarini normalizatsiya qilish jadvali

Quyidagi jadval leksik normalizatsiya (lemmatizatsiyadan oldingi bosqich) uchun moʻljallangan. **Ogohlantirish:** stilometriyada asl shakllarni saqlang, chunki ular muallif va nashr belgisi. Normalizatsiyani faqat mazmuniy qidiruv (IR) va mavzu modellashtirish uchun qiling.

| Eski / variant shakl | Hozirgi shakl | Shart yoki ehtiyot |
|---|---|---|
| -gʻa, -qa (jarangsiz undoshdan keyin) | -ga, -ka, -qa | «xalqgʻa» → «xalqqa», «sonduqgʻa» → «sandiqqa» |
| -a, -na (dativ) | -ga | «millata» → «millatga»; faqat ot negizidan keyin. «-a» ravishdosh qoʻshimchasi bilan adashtirmang |
| -inda, -indan | -ida, -idan | «orasinda» → «orasida» |
| -din | -dan | «vaqtdin» → «vaqtdan» |
| -ub | -ib | «boʻlub» → «boʻlib»; lekin «yurub» → «yurib» |
| -gʻon, -qon, -gʻan, -kan | -gan | «yotqon» → «yotgan», «oʻtkan» → «oʻtgan» |
| -aturgʻon, -adurgan, -ayturgan | -adigan | |
| -dur | -dir (yoki tushirib qoldiriladi) | |
| -mak | -moq | |
| -sun | -sin | |
| -gʻil, -gil | -gin | |
| -ayluk | -aylik | |
| -men, -sen | -man, -san | |
| -alar, -aylar (III shaxs koʻplik hozirgi zamon) | -adilar | |
| -yotir | -yapti / -yotibdi | |
| oʻl- (= boʻl-) | boʻl- | **juda ehtiyot boʻling:** «oʻl-» «oʻlmoq» (vafot etmoq) feʼli ham boʻlishi mumkin. Kontekst yoki «oʻldigʻindan», «oʻlan», «oʻlub» kabi qoliplar bilan aniqlang |
| ul, bul, shul, oʻshal | u, bu, shu, oʻsha | |
| menim, manim; man, san; ban, banim | mening; men, sen; men, mening | |
| mun-, an- (muning, aning, mundan, andin) | bu-, u- (buning, uning) | |
| koʻb, emdi, qarshu, oltun, xotun, koʻngul, nimarsa | koʻp, endi, qarshi, oltin, xotin, koʻngil, narsa | |
| oqcha / aqcha | pul | leksik almashtirish |
| -liq (oʻrta qator) | -lik | «doʻstliq» → «doʻstlik» |
| -lik (= -li) | -li | «chiroylik» → «chiroyli», «kuchlik» → «kuchli»; oddiy -lik bilan adashtirmang |
| duxtur, doʻxtur, doʻxtir | doktor | |
| ila, ilan, bila, birla, birlan | bilan | |

### 7.6. Tokenizatsiya

1. **Apostrofli harflar.** ʻ, ‘ va ʼ belgilarini harf qismi deb hisoblang. Aks holda «oʻ» soʻzning ikki boʻlagiga ajralib ketadi.
2. **Chiziqcha bilan yozilgan yuklama va juft soʻzlar.** «-da» kuchaytiruvchisi («Men-da», «menim-da»), «-u/-yu» («ilm-u maorif», «bitta-yu»), «-ku», «-chi», juft soʻzlar («qop-qorongʻi», «sayrab-sayrab»). Tavsiya: asosiy tokenni va yuklamani alohida token qiling, lekin asl shaklni ham saqlang. Avloniyda kuchaytiruvchi «-da» 142 marta keladi («Afgʻon sayohati»), shuning uchun u uslub belgisi sifatida qimmatli.
3. **Qoʻshib yozilgan «-ki/-kim».** «maʼlumdirkim», «Koʻrdiki», «ediki», «bordurki». Bular ergash gapni ochadi. Klitikani alohida ajratsangiz, sintaktik belgi sifatida foydalanish oson boʻladi. Lekin «-ki» yasovchi qoʻshimchasi ham bor («kechagi», «bundagi»). Ularni gap chegarasidagi pozitsiya boʻyicha farqlang.
4. **Satr oʻrash muammosi.** Boʻlaklar `textwrap.fill(…, 250)` bilan oʻralgan. Python `textwrap` sukut boʻyicha chiziqchada ham satrni uzishi mumkin (`break_on_hyphens=True`). Shuning uchun «qop-qorongʻi» kabi soʻz ikki satrga boʻlinib qolishi mumkin. Tokenizatsiyadan oldin abzas ichidagi satr uzilishlarini birlashtiring.
5. **Dialog belgilari.** Tire (–), qoʻshtirnoq («», “”) va «– dedi» ramka gaplari nutqni muallif bayonidan ajratish uchun kerak. Muallif uslubini oʻrganishda personaj nutqini (ayniqsa shevali, ruscha yoki makaronik nutqni) alohida ajratish tavsiya etiladi. Aks holda, masalan, «Padarkush»dagi arman personajning oʻgʻuzcha nutqi Behbudiyning oʻz morfologiyasi sifatida sanaladi.
6. **Dramada personaj nomlari va remarkalar.** «Ulfat.», «Boy (…).», «(Parda tushar.)» kabi elementlar. Remarkalar aorist «-ar/-ur» shaklida yoziladi va janr belgisi hisoblanadi. Ularni alohida qatlam qilib belgilang.
7. **Sheʼriy matn.** Misra chegarasi (satr uzilishi) va «/» belgisi saqlanishi kerak. Vazn tahlili uchun hijolarni sanashda apostrofli harflar bitta harf deb olinishi kerak.
8. **Raqamlar va sanalar.** Hijriy («1264-hijriy», «Shaʼbonu-l-muazzam, 1332-yil») va milodiy sanalar, «20-chi chirogʻ» kabi shakllar uchraydi. Sana uchun normalizatorga hijriy oy nomlari (dalv, hamal) kiritilishi kerak.

### 7.7. Stilometriya boʻyicha tavsiyalar

**Tavsiya etiladigan belgilar toʻplami:**

- **Funksional soʻzlar chastotasi.** va, lekin, ammo, biroq, faqat, chunki, ila, bilan, ham, -da, ekan, emish, erur, ersa, zero, binobarin, Chunonchi, Mana, Yaʼni, Bas, Xulosa. 5.14-boʻlimdagi jadval bu belgilarning muallif va janrni yaxshi ajratishini koʻrsatadi.
- **Morfologik nisbatlar.** -gʻa:-ga, -ub:-ib, -gʻon:-gan, koʻb:koʻp, -dur:-dir, «oʻl-» (= boʻl-), -inda. Ular faqat bir xil modernizatsiya darajasidagi nashrlar ichida solishtirilishi kerak.
- **Muallif «imzolari» (kam uchraydigan, lekin yuqori informativ belgilar).** -ayluk (Behbudiy), «oʻldigʻindan» (Avloniy), -alar/-aylar va -men (Fitrat), «oʻranung» (Ibrat), «qoʻrqam/koʻram» (Hamza), «-ma-» takrori (Ayniy), «-sumon» (Qodiriy), «faqat» = lekin (Choʻlpon), «Hissa:» (Munavvar qori, Hamza).
- **Tinish belgilari profili.** «?!», «!..», «!!!», koʻp nuqta va tirening 1000 belgiga chastotasi.
- **Gap uzunligi taqsimoti.** Uzun davr va qisqa gapning almashinuvi Behbudiy, Choʻlpon va Ayniy uchun xarakterli. Taqsimotning dispersiyasi va ikki choʻqqili boʻlishi foydali belgi.
- **Belgi n-grammalari (char 3–5-gram).** Ular imlo variantlarini ham qamrab oladi, lekin nashr signali bilan muallif signalini aralashtirib yuboradi.

**Chalgʻituvchi omillar (confounders):**

1. **Nashr va transliterator.** Bir nashrdagi matnlar (masalan, Mirjalol Madvaliyev yoki Nodir Madrahimov elektron shaklga keltirgan Choʻlpon hikoyalari) oʻzaro oʻxshab ketishi mumkin. Tajribada «transliterator» oʻzgaruvchisini nazorat qiling. Kartochkalarda u har bir asar uchun koʻrsatilgan.
2. **Tarjima.** Fitratning forscha risolalari va Ayniy qissalari (tarjimon koʻrsatilmagan) tarjimon uslubini aks ettiradi.
3. **Janr.** Drama, sheʼr va risola bir-biridan har qanday mualliflik farqidan kuchliroq farq qiladi. Modelni bir janr ichida oʻqiting yoki janrni kovariata sifatida kiriting.
4. **Personaj nutqi.** 7.6-boʻlimning 5-bandiga qarang.
5. **Muharrir apparati va ikkilamchi iqtiboslar.** «Jadidlar» seriyasidagi kitoblar mualliflarning iqtiboslarini oʻz uslubida (koʻpincha modernizatsiya qilib) keltiradi. Ularni birlamchi matn sifatida ishlatmang.
6. **Ochiq mualliflik muammolari.** Bunday masalalar uchun bu qoʻllanmadagi belgilarni gipoteza sifatida ishlating. Misollar:
   - Qodiriyning 50 ga yaqin taxallusi (Qodiriy profili);
   - Avloniyning «Mushtum»dagi taxalluslari;
   - Tavalloning «Magʻzava», «Muxbir “J”» kabi imzolari;
   - antologiyadagi imzosiz yoki noaniq matnlar.

**Tekshirish kerak boʻlgan ochiq savollar:**

1. Fitrat badiiy matnlarida «va» yoʻqligi asl arab yozuvidagi nashrda ham saqlanganmi yoki bu nashrga xosmi? Fitrat profili buni tekshirishni tavsiya qiladi.
2. Hamzaning «Burungi qozilar» asaridagi past «va» chastotasi (0,7) muallifga xosmi yoki qoʻlyozmani tayyorlagan muharrirga? Bu shu qoʻllanmadagi yangi kuzatuv.
3. «Biroq» bogʻlovchisining «Chigʻatoy gurungi» doirasidagi mualliflarda (Fitrat, Botu, Elbek, Choʻlpon sheʼriyati) koʻpligi maktab belgisi boʻla oladimi?
4. Choʻlponning 1914, 1920-yillar va 1930-yillar hikoyalari bitta muallif sifatida klasterlanadimi, yoki davr signali muallif signalidan kuchliroqmi?

---

*Qoʻllanma `mualliflar/`, `asarlar/`, `_holat/style_input.json` va `manbalar_web/adabiyot-poetika-til.md` asosida tuzildi. 5.14, 7.1, 7.2 va 7.3-boʻlimlardagi miqdoriy maʼlumotlar `_holat/chunks/` va `_holat/manifest.json` ustida shu qoʻllanma uchun bajarilgan avtomatik hisoblar natijasi. Ular taxminiy va qayta hisoblanishi mumkin.*
