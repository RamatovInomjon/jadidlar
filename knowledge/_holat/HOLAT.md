# Bilim bazasi qurilishi — holat (2026-10-21)

1-ishga tushirish (workflow `wf_72d16037-6bc`) sessiya limitiga yetib, yarmida toʻxtadi.

## Tayyor
- `../asarlar/` ichida **46 ta asar kartochkasi** (hammasi toʻliq, 9 boʻlimdan iborat). Bular bitta boʻlakdan iborat barcha kitoblar.
- `../manbalar_web/jadidchilik-tarixi.md` toʻliq (16 boʻlim, URL manbalar bilan).
- `digests_43.json`: 43 ta kitob boʻyicha tuzilmali dayjestlar (janr, sana, mazmun, gʻoyalar, uslub dayjesti, iqtiboslar, leksika, faktlar). Qolgan 3 tasi (dolimov-ibrat, tavallo-sherlar, abdurashidov-behbudiy) uchun fayl yozilgan, lekin dayjest qaytmagan.
- `chunks/`: kitoblarning 250 belgidan oʻralgan matn boʻlaklari (81 ta fayl). `manifest.json` va `prep.py` ham shu yerda (EPUB → pandoc → boʻlaklar).
- `workflow_v1.js`: boʻlaklar yoʻllari `_holat/chunks/` ga oʻzgartirilgan asl workflow skripti.

## Qilinmagan (davom ettirish kerak)
1. Koʻp boʻlakli 11 kitob, hali kartochkasi yoʻq: Kecha va kunduz (4), Yorqinoy (2), Odob-axloq kitobi (2), Mehrobdan chayon (4), Obid ketmon (4), Oʻtkan kunlar (5), Najot yoʻli (3), Oila (2), Otam haqida (4), Sudxoʻrning oʻlimi (2), Ey Vatan, ezgu Vatan (2).
2. `04_imlo_qoidalari_1995.md`: manba matni `chunks/339-24-08-1995__01.txt`.
3. 17 ta web tadqiqot (`jadidchilik-tarixi` dan tashqari hammasi): matbuot-maktab-teatr, adabiyot-poetika-til, boshqa-jadidlar, taʼlim-pedagogika, hamda 13 ta `muallif-<key>`.
4. 13 ta muallif profili (`../mualliflar/<key>.md`) va har biri uchun faktlarni tekshirish agenti.
5. Sintez: 00_harakat_tarixi, 01_xronologiya, 02_uslub_qollanmasi, 03_leksika_lugati, 05_manbalar_bibliografiya.
6. Tanqidchi agent, keyin README.md va CORE.md.

## Qanday davom ettiriladi
`workflow_v1.js` ni qayta ishlatib boʻladi, lekin keshdan tiklash (resume) faqat oʻsha sessiya ichida ishlaydi. Yangi sessiyada skriptni quyidagicha tahrirlab ishga tushiring:
- kartochkasi mavjud kitoblarni oʻtkazib yuboring (`../asarlar/<slug>.md` bor boʻlsa): ularning dayjestini `digests_43.json` dan oling (skriptga `args` orqali bering) yoki kartochkaning oʻzini oʻqing;
- `manbalar_web/<slug>.md` allaqachon bor web mavzularni oʻtkazib yuboring;
- limit tugab qolmasligi uchun bir vaqtda ishlaydigan agentlar sonini kamaytiring yoki ishni bir necha workflowga boʻling (masalan: 1) qolgan kitoblar + imlo, 2) web, 3) mualliflar + tekshiruv, 4) sintez + indeks).
