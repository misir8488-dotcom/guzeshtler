const fs = require("fs");
const path = require("path");

const META = {
  "102": { short: "Gəlir vergisi", abbr: "GV", hue: 160 },
  "106": { short: "Mənfəət vergisi", abbr: "MV", hue: 220 },
  "164": { short: "ƏDV", abbr: "ƏDV", hue: 28 },
  "199": { short: "Əmlak vergisi", abbr: "ƏV", hue: 270 },
  "207": { short: "Torpaq vergisi", abbr: "TV", hue: 85 },
};

const TITLES = {
  "102.1": "Fiziki şəxslərin azad gəlirləri",
  "102.1.1": "Diplomatik ödənişlər",
  "102.1.2": "Qeyri-rezidentin iş yerindən gəlir",
  "102.1.3": "Hədiyyə, maddi yardım, miras",
  "102.1.3.1": "Hədiyyə 2500 / miras 20000 / müalicə",
  "102.1.3.2": "Ailə üzvlərindən hədiyyə və miras — tam",
  "102.1.3.3": "Şəhid ailəsi — maddi yardım 20000",
  "102.1.3.4": "Müharibə əlilliyi — maddi yardım 20000",
  "102.1.4": "Dövlət müavinəti, pensiya, təqaüd",
  "102.1.5": "Alimentlər",
  "102.1.6": "Əsas iş yeri — 200 / 2400 manat",
  "102.1.7": "Daşınan əmlakın təqdim edilməsi",
  "102.1.8": "Sığorta ödənişləri və haqları",
  "102.1.10": "Zərər kompensasiyası",
  "102.1.11": "Kənd təsərrüfatı istehsalı",
  "102.1.11-1": "KT dividend — 4 il",
  "102.1.12": "Sənətkarlıq gəliri",
  "102.1.14": "Kompensasiya xarakterli ödəmələr",
  "102.1.14.1": "Səyyar / çöl işi ezamiyyə əvəzi",
  "102.1.14.2": "Ezamiyyə xərcləri",
  "102.1.14.4": "Zərərli istehsalatda tibbi müayinə",
  "102.1.14.5": "Pulsuz yemək, süd, xüsusi geyim",
  "102.1.14.6": "İstehsalatdan ayrılmaqla təqaüd",
  "102.1.14.8": "Fəlakət və fövqəladə yardımlar",
  "102.1.14.9": "Donor kompensasiyası",
  "102.1.14.10": "Dalğıc işləri mükafatı",
  "102.1.14.13": "Xeyriyyə və ictimai yardımlar",
  "102.1.14.15": "Hərbi və hüquq mühafizə ödənişləri",
  "102.1.14.16": "Hərbi çağırış müavinəti",
  "102.1.14.33": "Dəniz donanması əlavə təminat",
  "102.1.15": "Yarış və müsabiqə mükafatları",
  "102.1.16": "Dövlət qulluqçusunun birdəfəlik haqqı",
  "102.1.17": "Təmsilçilik xərci əlavəsi",
  "102.1.18": "Torpaqların dövlət ehtiyacı — kompensasiya",
  "102.1.20": "Keçmiş Prezident və ailəsi",
  "102.1.21": "Sənaye / texnopark — 10 il",
  "102.1.21-1": "Texnopark dividend — 10 il",
  "102.1.22-1": "Kiçik müəssisə dividendi (200 min)",
  "102.1.22-2": "Birja səhm və istiqraz — 5 il",
  "102.1.22-3": "Depozit faizi — 200 manat",
  "102.1.22-4": "18 aylıq depozit faizi — 3 il",
  "102.1.23": "İnvestisiya təşviqi — 50%, 7 il",
  "102.1.25": "Vergi borcunun silinməsi",
  "102.1.25-1": "Vətən müharibəsi borcunun silinməsi",
  "102.1.26": "Lotereya / mərc uduşu — 500 manat",
  "102.1.27": "3 il səhm / pay — 50%",
  "102.1.28": "Dövlət maddi yardımı (dəstək)",
  "102.1.29": "Zəmanətli kreditin ödənilməsi",
  "102.1.30": "Mikro sahibkar — 75%",
  "102.1.30-1": "Xüsusi xidmətlər — 75% (45 min)",
  "102.1.30-1.1": "Proqram təminatı",
  "102.1.30-1.2": "Layihə-dizayn və dekorasiya",
  "102.1.30-1.3": "Tərcümə",
  "102.1.30-1.4": "Reklam",
  "102.1.30-1.5": "Araşdırma və tədqiqat",
  "102.1.30-1.6": "Elm, təhsil, mədəniyyət, idman",
  "102.1.30-1.7": "Hüquq, auditor, mühasibat",
  "102.1.30-1.8": "Jurnalist fəaliyyəti",
  "102.1.30-1.9": "Bazar konyukturu",
  "102.1.30-1.10": "Qiymətləndirmə",
  "102.1.30-1.11": "Kuryer / çatdırılma",
  "102.1.30-1.12": "Turizm bələdçiliyi",
  "102.1.30-1.13": "Xidmətlərin ixracı",
  "102.1.31": "Startap — 3 il",
  "102.1.32": "KOB klaster iştirakçısı — 7 il",
  "102.1.33": "Haqqı ödənilən ictimai işlər",
  "102.1.36": "Lotereya bileti agent satışı",
  "102.1.37": "Qida idxalını əvəzetmə — 50%, 7 il",
  "102.1.38": "Aktiv istehlakçı — 150 kVt",
  "102.1.39": "Media subyekti — 6 il",
  "102.1.40": "ƏDV-nin qaytarılmasından gəlir",
  "102.1.41": "İaşə / özəl tibb — ƏDV azalması",
  "102.1.42": "Teatr, muzey, film royaltisi — 5 il",
  "102.1.43": "Film istehsalı / dublyaj — 90%, 5 il",
  "102.1.44": "DÖT və bərpa olunan enerji — 30 il",
  "102.1-1": "Şəhid ailəsi — aylıq 800 manat",
  "102.2": "Aylıq gəlir 400 manat azaldılır",
  "102.2.1": "Vətən Müharibəsi Qəhrəmanları",
  "102.2.1-1": "Milli Qəhrəmanlar",
  "102.2.2": "Sovet İttifaqı və Sosialist Əməyi Qəhrəmanları",
  "102.2.4": "Müharibə ilə əlaqədar əlilliyi olanlar",
  "102.2.5": "Həlak olmuş döyüşçülərin ailəsi",
  "102.2.6": "1941–1945 arxa cəbhə ordenliləri",
  "102.2.7": "Müharibə veteranları",
  "102.2.8": "Çernobıl / radiasiya xəstələri",
  "102.2.9": "Minatəmizləyənlərin ailəsi",
  "102.3": "Əlillik / baxıcı — 200 manat",
  "102.4": "Aylıq gəlir 100 manat azaldılır",
  "102.4.1": "Həlak olmuşların valideynləri",
  "102.4.3": "Əfqanıstan və digər döyüşçülər",
  "102.4.5": "Məcburi köçkünlər",
  "102.5": "Azı 3 himayədar — 50 manat",
  "102.6": "Himayədə sayılmayanlar",
  "102.6.1": "Təqaüd, pensiya, işsizlik alanlar",
  "102.6.2": "Tam dövlət təminatında olanlar",
  "102.7": "Bir neçə güzəşt varsa — ən böyüyü",
  "102.8": "Güzəşt yalnız əsas iş yerində",
  "102.9": "102.1.30-1 məhdudiyyəti",

  "106.1": "Mənfəət vergisindən azad olanlar",
  "106.1.1": "Xeyriyyə təşkilatlarının gəliri",
  "106.1.2": "Qeyri-kommersiya — ianə, üzvlük",
  "106.1.3": "Beynəlxalq təşkilatlar",
  "106.1.4": "Dövlət orqanları və publik hüquqi şəxslər",
  "106.1.5": "MB, Neft Fondu, sığorta fondları",
  "106.1.6": "Alınmış sığorta ödənişləri",
  "106.1.7": "Təhsil müəssisələrinin mənfəəti",
  "106.1.8": "Vergi borcunun silinməsi",
  "106.1.9": "Törəməyə əvəzsiz aktiv ötürülməsi",
  "106.1.10": "İcra qərarı ilə əvəzsiz əsas vəsait",
  "106.1.11": "Neft-qaz / pay bölgüsü aktivləri",
  "106.1.12": "Park operatorunun infrastruktur mənfəəti",
  "106.1.13": "Sənaye / texnopark rezidenti — 10 il",
  "106.1.13-1": "Texnopark dividend — 10 il",
  "106.1.13-2": "Sənaye parkı xüsusi fəaliyyət — 6 il",
  "106.1.14": "Kənd təsərrüfatı mənfəəti — 13 il",
  "106.1.14-1": "KT satışdankənar, subsidiya, dividend — 4 il",
  "106.1.16": "Torpaqların dövlət ehtiyacı — kompensasiya",
  "106.1.17": "İnvestisiya təşviqi — 50%, 7 il",
  "106.1.18": "Elm, təhsil, səhiyyəyə 15% köçürmə — 5 il",
  "106.1.19": "3 il səhm / pay — 50%",
  "106.1.20": "Mikro sahibkar — 75%",
  "106.1.21": "KOB klaster şirkəti — 7 il",
  "106.1.22": "KOB klaster iştirakçısı — 7 il",
  "106.1.23": "Startap — 3 il",
  "106.1.24": "İctimai işlərin təşkili",
  "106.1.28": "Formula 1 / 2 royaltisi — 9 il",
  "106.1.29": "Lotereya bileti agent satışı",
  "106.1.30": "Vəkil order markası",
  "106.1.31": "Qida idxalını əvəzetmə — 50%, 7 il",
  "106.1.32": "Media subyekti — 6 il",
  "106.1.33": "Teatr, muzey, film — 90%, 5 il",
  "106.1.34": "İaşə / tibb — ƏDV azalması",
  "106.1.35": "DÖT və bərpa olunan enerji — 30 il",
  "106.1.36": "Sosial / işsizlik sığortası investisiyası",
  "106.2": "Əlilliyi olan şəxslərin müəssisəsi — 50%",
  "106.10": "Kiçik müəssisə dividendi (200 min)",

  "164.1": "ƏDV tutulmayan əməliyyatlar",
  "164.1.1": "Özəlləşdirmə və dövlət icarəsi",
  "164.1.2": "Maliyyə xidmətləri / lizinq faizləri",
  "164.1.2-1": "ƏDV-siz aktivin maliyyə lizinqi",
  "164.1.3": "Valyuta və qiymətli kağızlar",
  "164.1.4": "MB və Neft Fondu qızılı / nişanlar",
  "164.1.5": "Nizamnamə kapitalına əmlak qoyuluşu",
  "164.1.6": "Dövlət rüsumu, icazə, notariat",
  "164.1.7": "Kitab, media, kağız idxalı və satışı",
  "164.1.8": "Redaksiya, nəşriyyat, poliqrafiya",
  "164.1.8-1": "Media məhsulu — 6 il",
  "164.1.9": "Dəfn və qəbiristanlıq xidmətləri",
  "164.1.9-1": "Mərkəzi Bankın xidmət və idxalı",
  "164.1.10": "Dövlət Neft Fondunun idxalı",
  "164.1.10-1": "Satmaq öhdəliyi ilə kirayə mənzil",
  "164.1.11": "Neft-qaz / pay bölgüsü aktivləri",
  "164.1.12": "Metropoliten sərnişindaşıma",
  "164.1.13": "Ödənişli təhsil xidmətləri",
  "164.1.14": "106.1.9–11 aktivlərinin təqdimi",
  "164.1.15": "Park operatorunun texnika idxalı",
  "164.1.16": "Park rezidentinin texnika idxalı — 10 il",
  "164.1.17": "İştirak payı / səhmin təqdimi",
  "164.1.18": "Kənd təsərrüfatı satışı — 13 il",
  "164.1.19": "Müdafiə təyinatlı məmulatlar",
  "164.1.19-1": "Müdafiə və təhlükəsizlik texnikası",
  "164.1.20": "Humanitar yardım malları",
  "164.1.21": "Təmənnasız / xeyriyyə malları",
  "164.1.22": "Fiziki şəxsin qeyri-kommersiya malları",
  "164.1.23": "İxrac məqsədli neft-qaz avadanlığı",
  "164.1.24": "Xüsusi iqtisadi zona idxalı",
  "164.1.25": "Lizinq obyekti olan əsas vəsait",
  "164.1.26": "İnvestisiya təşviqi idxalı — 7 il",
  "164.1.27": "Buğda, un, çörək — 10 il",
  "164.1.28": "Gəmiqayırma / təmir idxalı — 3 il",
  "164.1.29": "Damazlıq heyvanlar",
  "164.1.30": "Toxum və tinglər",
  "164.1.31": "Gübrə və pestisidlər",
  "164.1.32": "Toxum / quşçuluq / arıçılıq avadanlığı",
  "164.1.33": "Baytarlıq preparatları",
  "164.1.34": "Kənd təsərrüfatı texnikası",
  "164.1.34-1": "KT texnikasının lizinqi",
  "164.1.34-2": "Aqrotexniki xidmətlər",
  "164.1.35": "Müəyyən xammal və material idxalı",
  "164.1.36": "Bank rezolyusiyası aktivləri — 14 il",
  "164.1.37": "Heyvan və quş ətinin satışı — 7 il",
  "164.1.38": "Mülki aviasiya hava gəmiləri",
  "164.1.40": "KOB klaster texnika idxalı — 7 il",
  "164.1.41": "Elektrik avtobus idxalı — 1 il",
  "164.1.41-1": "Hibrid avtomobil — 4 il",
  "164.1.41-2": "Elektrik doldurucu — 5 il",
  "164.1.41-3": "Yerli minik avtomobili — 10 il",
  "164.1.41-4": "Yerli avtobus və yük avtomobili",
  "164.1.41-5": "Raritet avtomobil (ildə 1 ədəd)",
  "164.1.42": "İctimai işlərə işçi qüvvəsi",
  "164.1.43": "Kəpək istehsalı və satışı — 8 il",
  "164.1.46": "Yem və yem əlavələri — 7 il",
  "164.1.47": "Binanın dövlətə ayrılan hissəsi",
  "164.1.48": "Publik hüquqi şəxsin büdcə işləri — 7 il",
  "164.1.49": "Formula 1 / 2 — 9 il",
  "164.1.50": "Qeyri-rezident hava gəmisi icarəsi",
  "164.1.51": "İcbari tibbi sığorta xidmətləri — 3 il",
  "164.1.51-1": "Tədris tibb müəssisəsi — 3 il",
  "164.1.52": "İri neft emalı zavodu — 8 il",
  "164.1.54": "Zərgərlik dəzgahı idxalı — 6 il",
  "164.1.55": "Külçə / sikkə qızıl və gümüş",
  "164.1.56": "Minatəmizləmə idxalı — 5 il",
  "164.1.56-1": "Minatəmizləmə istehsalı — 5 il",
  "164.1.57": "Lotereya bileti agent satışı",
  "164.1.58": "Özəl baytarlıq xidmətləri",
  "164.1.59": "Vəkil order markası",
  "164.1.60": "Müəyyən əsas vəsait idxalı",
  "164.1.61": "Qurumun yenidən qurulması — 3 il",
  "164.1.62": "Svop — xam neft və qaz — 3 il",
  "164.1.63": "DÖT / enerji layihəsi idxalı — 30 il",
  "164.1.63.1": "DÖT özəl tərəfdaşın idxalı",
  "164.1.63.2": "Bərpa olunan enerji idxalı",
  "164.1.63.3": "DÖT podratçısının idxalı",
  "164.1.64": "İncəsənət, kolleksiya, əntiq əşya",

  "199.1": "Dövlət orqanları, MB, əlillik QHT",
  "199.2": "Sənətkarlıq emalatxanası",
  "199.3": "102.1-1 / 102.2 / pensiyaçı — 30 manat",
  "199.4": "Əmlak dəyərinin azaldılması",
  "199.4.1": "Ekologiya və yanğından mühafizə",
  "199.4.1-1": "Mülki müdafiə əmlakı",
  "199.4.2": "Kəmər, yol, xətt, peyk",
  "199.4.3": "Sahibkarlıqda istifadə olunmayan minik",
  "199.4.4": "Təhsil, tibb, mədəniyyət, idman",
  "199.5": "Trolleybus və tramvay",
  "199.7": "Sənaye / texnopark rezidenti — 10 il",
  "199.7-1": "Sənaye parkı xüsusi fəaliyyət — 6 il",
  "199.8": "Park operatorunun əmlakı",
  "199.9": "Kənd təsərrüfatı əmlakı — 13 il",
  "199.11": "İnvestisiya təşviqi əmlakı — 7 il",
  "199.12": "Özəlləşdirilmiş əmlak vergisinin qaytarılması",
  "199.12.1": "Digər vergilər az olmasın",
  "199.12.2": "Büdcəyə borc olmasın",
  "199.13": "Qaytarma yalnız 1 il üçün",
  "199.14": "Mikro sahibkar — əmlak azad",
  "199.15": "KOB klaster əmlakı — 7 il",
  "199.16": "Bank rezolyusiyası əmlakı — 12 il",
  "199.17": "Qida idxalını əvəzetmə — 7 il",
  "199.18": "Müflis kredit təşkilatı",
  "199.19": "Özəlləşdirmə prosesi — 3 il",
  "199.20": "Kredit müqabilində əmlak — 2 il",
  "199.21": "Region hotel / sanatoriya — 75%, 3 il",
  "199.22": "DÖT və bərpa olunan enerji — 30 il",

  "207.1": "Torpaq vergisinə cəlb olunmayanlar",
  "207.1.1": "Ümumi istifadə torpaqları",
  "207.1.2": "Dövlət orqanları, MB, Neft Fondu",
  "207.1.3": "Dövlət, meşə, su fondu, Xəzər dibi",
  "207.1.4": "Sərhəd zolağı və müdafiə torpaqları",
  "207.2": "102.1-1 / 102.2 şəxslər — 10 manat",
  "207.3": "Sənaye / texnopark rezidenti — 10 il",
  "207.3-1": "Sənaye parkı xüsusi fəaliyyət — 6 il",
  "207.4": "Park operatorunun torpağı",
  "207.5": "İnvestisiya təşviqi — 7 il",
  "207.6": "KOB klaster — 7 il",
  "207.7": "Bank rezolyusiyası torpağı — 12 il",
  "207.8": "Geoloji kəşfiyyat — 75%",
  "207.9": "Müflis kredit təşkilatı",
  "207.10": "Qida idxalını əvəzetmə — 7 il",
  "207.11": "Özəlləşdirmə prosesi — 3 il",
  "207.12": "Kredit müqabilində torpaq — 2 il",
  "207.13": "DÖT və bərpa olunan enerji — 30 il",
  "207.14": "Teatr, muzey, film — 5 il",
};

const OVERLAPS = [
  {
    id: "park-rezident",
    title: "Sənaye / texnologiyalar parkı rezidenti",
    hint: "10 il — 5 vergi",
    duration: "10 il",
    taxes: ["102", "106", "164", "199", "207"],
    items: [
      { article: "102", code: "102.1.21", note: "fəaliyyətdən gəlir (əməkhaqqı istisna)" },
      { article: "106", code: "106.1.13", note: "parkdakı fəaliyyətdən gəlir" },
      { article: "164", code: "164.1.16", note: "texnika, avadanlıq, qurğu idxalı" },
      { article: "199", code: "199.7", note: "parkdakı əmlaka görə" },
      { article: "207", code: "207.3", note: "parkda istifadə olunan torpaq" },
    ],
  },
  {
    id: "texnopark-it",
    title: "Texnopark — parkdan kənar IT",
    hint: "sistem inteqrasiyası, proqram təminatı",
    duration: "10 il",
    taxes: ["102", "106", "199", "207"],
    items: [
      { article: "102", code: "102.1.21", note: "gəlirə də şamil edilir" },
      { article: "102", code: "102.1.21-1", note: "dividend — 10 il" },
      { article: "106", code: "106.1.13", note: "hüquqi şəxsin gəliri" },
      { article: "106", code: "106.1.13-1", note: "dividend — 10 il" },
      { article: "199", code: "199.7", note: "əmlak güzəşti də tətbiq edilir" },
      { article: "207", code: "207.3", note: "torpaq güzəşti də tətbiq edilir" },
    ],
  },
  {
    id: "investisiya",
    title: "İnvestisiya təşviqi sənədi",
    hint: "7 il — 5 vergi",
    duration: "7 il",
    taxes: ["102", "106", "164", "199", "207"],
    items: [
      { article: "102", code: "102.1.23", note: "gəlirin 50%-i" },
      { article: "106", code: "106.1.17", note: "mənfəətin 50%-i" },
      { article: "164", code: "164.1.26", note: "texnika, avadanlıq, qurğu idxalı" },
      { article: "199", code: "199.11", note: "layihə üzrə yeni əmlak (köhnə yox)" },
      { article: "207", code: "207.5", note: "mülkiyyət / istifadədəki torpaq" },
    ],
  },
  {
    id: "kob-klaster",
    title: "KOB klaster",
    hint: "7 il — şirkət + iştirakçı",
    duration: "7 il",
    taxes: ["102", "106", "164", "199", "207"],
    items: [
      { article: "102", code: "102.1.32", note: "iştirakçının kapital xərclərinə yönələn gəliri" },
      { article: "106", code: "106.1.21", note: "klaster şirkətinin mənfəəti" },
      { article: "106", code: "106.1.22", note: "iştirakçının kapital xərclərinə yönələn mənfəəti" },
      { article: "164", code: "164.1.40", note: "klaster şirkətinin texnika idxalı" },
      { article: "199", code: "199.15", note: "klaster fəaliyyətindəki əmlak" },
      { article: "207", code: "207.6", note: "klaster fəaliyyətindəki torpaq" },
    ],
  },
  {
    id: "dot-enerji",
    title: "DÖT və bərpa olunan enerji",
    hint: "müqavilə müddəti, max 30 il",
    duration: "30 ilədək",
    taxes: ["102", "106", "164", "199", "207"],
    items: [
      { article: "102", code: "102.1.44", note: "fərdi sahibkarın layihə gəliri" },
      { article: "106", code: "106.1.35", note: "hüquqi şəxsin layihə mənfəəti" },
      { article: "164", code: "164.1.63", note: "texnika, avadanlıq, qurğu idxalı" },
      { article: "199", code: "199.22", note: "layihədəki əmlak" },
      { article: "207", code: "207.13", note: "layihədəki torpaq" },
    ],
  },
  {
    id: "kend-teserrufati",
    title: "Kənd təsərrüfatı istehsalı",
    hint: "2014-dən 13 il — 4 vergi",
    duration: "13 il",
    taxes: ["102", "106", "164", "199"],
    items: [
      { article: "102", code: "102.1.11", note: "istehsal gəliri + subsidiya (müddətsiz)" },
      { article: "106", code: "106.1.14", note: "hüquqi şəxsin mənfəəti — 13 il" },
      { article: "164", code: "164.1.18", note: "öz istehsalı məhsulun satışı — 13 il" },
      { article: "199", code: "199.9", note: "bu fəaliyyətdəki əmlak — 13 il" },
    ],
  },
  {
    id: "qida-evazetme",
    title: "Qida idxalını yerli ilə əvəzetmə",
    hint: "50% + əmlak/torpaq — 7 il",
    duration: "7 il",
    taxes: ["102", "106", "199", "207"],
    items: [
      { article: "102", code: "102.1.37", note: "fərdi sahibkarın gəlirinin 50%-i" },
      { article: "106", code: "106.1.31", note: "hüquqi şəxsin mənfəətinin 50%-i" },
      { article: "199", code: "199.17", note: "bu fəaliyyətdəki əmlak" },
      { article: "207", code: "207.10", note: "bu fəaliyyətdəki torpaq" },
    ],
  },
  {
    id: "park-operator",
    title: "Parkın idarəedici təşkilatı / operatoru",
    hint: "infrastruktur + əmlak + torpaq",
    duration: "müddətsiz / idxal siyahısı ilə",
    taxes: ["106", "164", "199", "207"],
    items: [
      { article: "106", code: "106.1.12", note: "infrastruktur tikinti və saxlanmasına yönələn mənfəət" },
      { article: "164", code: "164.1.15", note: "texnika, avadanlıq, qurğu idxalı" },
      { article: "199", code: "199.8", note: "park / məhəllə ərazisindəki əmlak" },
      { article: "207", code: "207.4", note: "park / məhəllə ərazisindəki torpaq" },
    ],
  },
  {
    id: "senaye-park-6il",
    title: "Sənaye parkı — xüsusi fəaliyyət",
    hint: "2025-dən 6 il",
    duration: "6 il",
    taxes: ["106", "199", "207"],
    items: [
      { article: "106", code: "106.1.13-2", note: "müəyyən fəaliyyətdən mənfəət" },
      { article: "199", code: "199.7-1", note: "həmin fəaliyyətdəki əmlak" },
      { article: "207", code: "207.3-1", note: "həmin fəaliyyətdəki torpaq" },
    ],
  },
  {
    id: "media",
    title: "Media subyekti (audiovizual istisna)",
    hint: "2023-dən 6 il",
    duration: "6 il",
    taxes: ["102", "106", "164"],
    items: [
      { article: "102", code: "102.1.39", note: "fəaliyyət və reklam gəliri + maddi yardım" },
      { article: "106", code: "106.1.32", note: "eyni güzəşt hüquqi şəxsə" },
      { article: "164", code: "164.1.8-1", note: "media məhsulu + qeyri-rezident iş/xidmət" },
    ],
  },
  {
    id: "ictimai-isler",
    title: "Haqqı ödənilən ictimai işlər",
    hint: "Məşğulluq Qanunu",
    duration: "müddətsiz",
    taxes: ["102", "106", "164"],
    items: [
      { article: "102", code: "102.1.33", note: "cəlb olunan işçinin gəliri" },
      { article: "106", code: "106.1.24", note: "təşkilatçının gəliri" },
      { article: "164", code: "164.1.42", note: "işçi qüvvəsinin təqdimi" },
    ],
  },
  {
    id: "lotereya-agent",
    title: "Lotereya bileti — agent satışı",
    hint: "3 vergi",
    duration: "müddətsiz",
    taxes: ["102", "106", "164"],
    items: [
      { article: "102", code: "102.1.36", note: "agent xidmətindən gəlir" },
      { article: "106", code: "106.1.29", note: "agent xidmətindən gəlir" },
      { article: "164", code: "164.1.57", note: "agent xidmətinin göstərilməsi" },
    ],
  },
  {
    id: "sehid-102",
    title: "Şəhid ailəsi və 102.2 şəxslər",
    hint: "gəlir + əmlak 30 + torpaq 10",
    duration: "müddətsiz",
    taxes: ["102", "199", "207"],
    items: [
      { article: "102", code: "102.1-1", note: "şəhid ailəsi — aylıq 800 manat" },
      { article: "102", code: "102.2", note: "qəhrəman, veteran, əlil — 400 manat" },
      { article: "199", code: "199.3", note: "əmlak vergisi 30 manat azaldılır" },
      { article: "207", code: "207.2", note: "torpaq vergisi 10 manat azaldılır" },
    ],
  },
  {
    id: "bank-rezolyusiya",
    title: "Bank rezolyusiyası / problemli aktivlər",
    hint: "ƏDV 14 il, əmlak/torpaq 12 il",
    duration: "12–14 il",
    taxes: ["164", "199", "207"],
    items: [
      { article: "164", code: "164.1.36", note: "toksik aktivlərin təqdimi — 14 il" },
      { article: "199", code: "199.16", note: "əvəzində alınan əmlak — 12 il" },
      { article: "207", code: "207.7", note: "əvəzində alınan torpaq — 12 il" },
    ],
  },
  {
    id: "film-medeniyyet",
    title: "Teatr, muzey, simfonik orkestr, film",
    hint: "2025-dən 5 il",
    duration: "5 il",
    taxes: ["102", "106", "207"],
    items: [
      { article: "102", code: "102.1.42", note: "royalti gəlirləri" },
      { article: "102", code: "102.1.43", note: "istehsal / dublyaj / prodüser — 90%" },
      { article: "106", code: "106.1.33", note: "kinematografiya və prodüser — 90%" },
      { article: "207", code: "207.14", note: "bu fəaliyyətdəki torpaq" },
    ],
  },
  {
    id: "mikro",
    title: "Mikro sahibkarlıq",
    hint: "75% gəlir/mənfəət + əmlak azad",
    duration: "şərtlə",
    taxes: ["102", "106", "199"],
    items: [
      { article: "102", code: "102.1.30", note: "3 işçi + sosial borc yox — gəlirin 75%-i" },
      { article: "106", code: "106.1.20", note: "eyni şərtlə mənfəətin 75%-i" },
      { article: "199", code: "199.14", note: "əmlak azad (əsas vəsait 1 mln-dək)" },
    ],
  },
  {
    id: "startap",
    title: "Startap şəhadətnaməsi",
    hint: "innovasiya gəliri / mənfəəti — 3 il",
    duration: "3 il",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.31", note: "fərdi sahibkar startap" },
      { article: "106", code: "106.1.23", note: "hüquqi şəxs startap" },
    ],
  },
  {
    id: "sehm-3il",
    title: "3 il mülkiyyətdə səhm / pay — 50%",
    hint: "gəlir və mənfəət",
    duration: "azı 3 il saxlama",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.27", note: "fiziki şəxsin gəlirinin 50%-i" },
      { article: "106", code: "106.1.19", note: "hüquqi şəxsin gəlirinin 50%-i" },
    ],
  },
  {
    id: "dividend-200k",
    title: "Kiçik müəssisə dividendi (200 min)",
    hint: "uçot var, ƏDV yox, dövriyyə 200.000-dək",
    duration: "müddətsiz",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.22-1", note: "fiziki şəxs təsisçi / səhmdar" },
      { article: "106", code: "106.10", note: "hüquqi şəxs təsisçi / səhmdar" },
    ],
  },
  {
    id: "vergi-borcu",
    title: "Vergi borcunun silinməsi",
    hint: "gəlir və mənfəət",
    duration: "müddətsiz",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.25", note: "fiziki şəxsin gəliri" },
      { article: "106", code: "106.1.8", note: "hüquqi şəxsin gəliri" },
    ],
  },
  {
    id: "torpaq-kompensasiya",
    title: "Torpaqların dövlət ehtiyacı üçün alınması",
    hint: "kompensasiya azaddır",
    duration: "müddətsiz",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.18", note: "fiziki şəxsə ödənilən kompensasiya" },
      { article: "106", code: "106.1.16", note: "hüquqi şəxsə ödənilən kompensasiya" },
    ],
  },
  {
    id: "senetkarliq",
    title: "Sənətkarlıq (misgərlik, xalq sənəti)",
    hint: "gəlir + emalatxana əmlakı",
    duration: "müddətsiz",
    taxes: ["102", "199"],
    items: [
      { article: "102", code: "102.1.12", note: "fiziki şəxsin sənətkarlıq gəliri" },
      { article: "199", code: "199.2", note: "emalatxana binası əmlak vergisindən azad" },
    ],
  },
  {
    id: "kt-dividend",
    title: "Kənd təsərrüfatı dividendi / subsidiya",
    hint: "2023-dən 4 il",
    duration: "4 il",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.11-1", note: "rezident hüquqi şəxsin fiziki iştirakçısı" },
      { article: "106", code: "106.1.14-1", note: "satışdankənar, subsidiya, hüquqi iştirakçı dividendi" },
    ],
  },
  {
    id: "edv-azalma",
    title: "İaşə / tibb — ƏDV-nin azaldılması (174.5)",
    hint: "azalmadan yaranan gəlir azaddır",
    duration: "müddətsiz",
    taxes: ["102", "106"],
    items: [
      { article: "102", code: "102.1.41", note: "ictimai iaşə və özəl tibbi praktika" },
      { article: "106", code: "106.1.34", note: "iaşə şəxsləri və tibb müəssisələri" },
    ],
  },
  {
    id: "order-marka",
    title: "Vəkil order markası",
    hint: "Vəkillər Kollegiyasına ödəniş",
    duration: "qanun dəyişikliyi ilə",
    taxes: ["106", "164"],
    items: [
      { article: "106", code: "106.1.30", note: "mənfəət vergisindən azad" },
      { article: "164", code: "164.1.59", note: "ƏDV-dən azad" },
    ],
  },
  {
    id: "formula",
    title: "Formula 1 və Formula 2",
    hint: "2018-dən 9 il",
    duration: "9 il",
    taxes: ["106", "164"],
    items: [
      { article: "106", code: "106.1.28", note: "qeyri-rezidentə royalti" },
      { article: "164", code: "164.1.49", note: "mal, iş, xidmətin təqdimi" },
    ],
  },
  {
    id: "neft-psa",
    title: "Neft-qaz pay bölgüsü aktivləri",
    hint: "AR-ı təmsil edən tərəfə təqdim",
    duration: "müddətsiz",
    taxes: ["106", "164"],
    items: [
      { article: "106", code: "106.1.11", note: "əsas fond, daşınar əmlak, aktiv" },
      { article: "164", code: "164.1.11", note: "təqdim və idxal + 164.1.14" },
    ],
  },
  {
    id: "muflis-kredit",
    title: "Müflis kredit təşkilatı",
    hint: "məhkəmə qərarından etibarən",
    duration: "müflislik dövrü",
    taxes: ["199", "207"],
    items: [
      { article: "199", code: "199.18", note: "əmlak vergisi — qərarın qüvvəyə mindiyi aydan" },
      { article: "207", code: "207.9", note: "torpaq vergisi — qərarın qüvvəyə mindiyi ildən" },
    ],
  },
  {
    id: "ozellesdirme-3il",
    title: "Özəlləşdirmə prosesindəki dövlət şirkəti",
    hint: "2023-dən sonra qərar — max 3 il",
    duration: "3 ilədək",
    taxes: ["199", "207"],
    items: [
      { article: "199", code: "199.19", note: "əmlak vergisi" },
      { article: "207", code: "207.11", note: "torpaq vergisi" },
    ],
  },
  {
    id: "kredit-emlak-2il",
    title: "Kredit müqabilində keçən əmlak / torpaq",
    hint: "balansa götürüldüyü ildən 2 il",
    duration: "2 il",
    taxes: ["199", "207"],
    items: [
      { article: "199", code: "199.20", note: "mülkiyyətə keçən əmlak" },
      { article: "207", code: "207.12", note: "mülkiyyətə keçən torpaq" },
    ],
  },
  {
    id: "dovlet-mb",
    title: "Dövlət orqanları, MB, publik hüquqi şəxslər",
    hint: "sahibkarlıq istisna",
    duration: "müddətsiz",
    taxes: ["106", "164", "199", "207"],
    items: [
      { article: "106", code: "106.1.4", note: "mənfəət — dividend, sahibkarlıq, faiz istisna" },
      { article: "106", code: "106.1.5", note: "MB, Neft Fondu, sığorta fondları" },
      { article: "164", code: "164.1.9-1", note: "MB-nin idxalı və xidmətləri" },
      { article: "199", code: "199.1", note: "əmlak — sahibkarlıq əmlakı istisna" },
      { article: "207", code: "207.1.2", note: "torpaq — sahibkarlıq torpağı istisna" },
    ],
  },
];

function parseFile(name) {
  const raw = fs.readFileSync(path.join(__dirname, name), "utf8");
  const lines = raw.split(/\r?\n/);
  let code = "";
  let title = "";
  const items = [];
  let current = null;
  const itemRe = /^(?:\*\s*)?(\d+(?:[.\-]\d+)+)\.?\s*(.*)$/;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+/g, " ").trim();
    if (!line || line === "*") continue;

    const titleMatch = line.match(/^Maddə\s+(\d+)\.\s*(.+)$/);
    if (titleMatch) {
      code = titleMatch[1];
      title = titleMatch[2].trim();
      continue;
    }

    const isNote =
      line.startsWith("(") ||
      line.startsWith("*(") ||
      line.startsWith("* (") ||
      /^Qeyd\b/i.test(line);

    if (isNote) {
      if (current) current.notes.push(line.replace(/^\*\s*/, ""));
      continue;
    }

    const m = line.match(itemRe);
    if (m) {
      const id = m[1];
      const belongs =
        id === code ||
        id.startsWith(code + ".") ||
        id.startsWith(code + "-");
      if (belongs) {
        const text = (m[2] || "").trim();
        if (/^kənd təsərrüfatı məhsullarının$/i.test(text)) continue;
        const existing = items.find((it) => it.id === id);
        if (existing) {
          if (text.length > existing.text.length) existing.text = text;
          current = existing;
          continue;
        }
        current = { id, text, notes: [] };
        items.push(current);
        continue;
      }
    }

    if (current) current.text = (current.text ? current.text + " " : "") + line;
  }

  return { code, title, items };
}

function shortTitle(id, text) {
  if (TITLES[id]) return TITLES[id];
  const cleaned = (text || "")
    .replace(/^Çıxarılmışdır\.?$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return id;
  return cleaned.length > 72 ? cleaned.slice(0, 69).trim() + "…" : cleaned;
}

function isRemoved(text) {
  return /^çıxarılmışdır\.?$/i.test((text || "").trim());
}

const articles = {};
for (const f of ["102.txt", "106.txt", "164.txt", "199.txt", "207.txt"]) {
  const art = parseFile(f);
  const meta = META[art.code];
  articles[art.code] = {
    id: art.code,
    title: art.title,
    short: meta.short,
    abbr: meta.abbr,
    hue: meta.hue,
    items: art.items
      .filter((it) => !isRemoved(it.text))
      .map((it) => ({
        code: it.id,
        title: shortTitle(it.id, it.text),
        text: it.text,
        notes: it.notes,
      })),
  };
}

const missingTitles = [];
for (const art of Object.values(articles)) {
  for (const it of art.items) {
    if (!TITLES[it.code]) missingTitles.push(it.code + " | " + it.title);
  }
}

const out = `/* auto-generated — edit titles/overlaps in _build-data.js then rerun */
window.GUZESHT = ${JSON.stringify({ articles, overlaps: OVERLAPS }, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, "js", "data.js"), out);
console.log("Wrote js/data.js");
for (const [id, a] of Object.entries(articles)) {
  console.log(id, a.items.length, "items");
}
if (missingTitles.length) {
  console.log("\nNo curated title (" + missingTitles.length + "):");
  console.log(missingTitles.join("\n"));
}
