(function (g) {
  function Q(itemId, q, options, answer, explain) {
    return { itemId: itemId, q: q, options: options, answer: answer, explain: explain || "" };
  }
  var B = ["Bəli", "Xeyr"];
  var D = ["Düzgündür", "Səhvdir"];
  g.Q199 = [
    Q("199.1", "Dövlət orqanı, büdcə təşkilatı və yerli özünüidarə əmlak vergisindən azaddır?", B, "Bəli", "Dövlət, büdcə və bələdiyyə orqanları azaddır."),
    Q("199.1", "Mərkəzi Bank və onun qurumları əmlak vergisindən azaddır?", B, "Bəli", "MB və qurumları azaddır."),
    Q("199.1", "Dövlətin adından yaradılan publik hüquqi şəxs, bir qayda olaraq, əmlak vergisindən azaddır?", B, "Bəli", "Sahibkarlıq üçün istifadə olunan əmlak çıxılır."),
    Q("199.1", "Publik hüquqi şəxsin sahibkarlıq üçün istifadə etdiyi əmlak da azaddır?", B, "Xeyr", "Sahibkarlıq məqsədilə istifadə olunan əmlaka görə vergi tutulur."),
    Q("199.1", "Dövlət fondları əmlak vergisindən azaddır?", B, "Bəli", "Dövlət fondları azaddır."),
    Q("199.1", "Əlilliyi olan şəxslərin qeyri-hökumət təşkilatı əmlak vergisindən azaddır?", B, "Bəli", "Əlil QHT-ləri azaddır."),
    Q("199.1", "Adi MMC dövlət orqanı kimi avtomatik əmlak vergisindən azaddır?", B, "Xeyr", "Yalnız sadalanan subyektlər."),

    Q("199.2", "Misgərlik, dulusçuluq, bədii tikmə kimi sadalanan sənətkarlıq emalatxanasının binası əmlak vergisinə cəlb olunur?", B, "Xeyr", "Hüquqi şəxs yaratmadan fəaliyyət göstərən fiziki şəxsin emalatxana binası (və ya hissəsi) cəlb olunmur."),
    Q("199.2", "Sənətkarlıq emalatxanası azadolması hüquqi şəxsə də düşür?", B, "Xeyr", "Yalnız hüquqi şəxs yaratmadan fəaliyyət göstərən fiziki şəxs."),
    Q("199.2", "Sənətkarın emalatxana yerləşən bina hissəsi də bütöv bina kimi azad ola bilər?", B, "Bəli", "Bina və ya emalatxananın yerləşdiyi hissə."),
    Q("199.2", "Avtomobil təmiri sexi də sənətkarlıq emalatxanası azadolmasına düşür?", B, "Xeyr", "Yalnız qanunda sadalanan sənətkarlıq sahələri."),

    Q("199.3", "Pensiyaçının yaşayış binasına görə əmlak vergisi nə qədər azaldılır?", ["10 manat", "20 manat", "30 manat", "Tam azad"], "30 manat", "Pensiyaçı, müddətli hərbi xidmətçi və şəhid ailəsi/qəhrəman/veteran üçün 30 manat. Torpaqda isə 10 manatdır."),
    Q("199.3", "Müddətli hərbi xidmətçinin və ailə üzvlərinin binaya görə əmlak vergisi xidmət dövründə 30 manat azaldılır?", B, "Bəli", "Yalnız müddətli xidmət dövründə."),
    Q("199.3", "Şəhidin valideyni, dul ər/arvadı, övladı, qəhrəman və müharibə veteranının binaya görə əmlak vergisi 30 manat azaldılır?", B, "Bəli", "Həmin şəxslər də 30 manatlıq çıxılmaya düşür."),
    Q("199.3", "Pensiyaçı binanı icarəyə verirsə, 30 manatlıq azalma qalır?", B, "Xeyr", "İcarə, kirayə, sahibkarlıq və kommersiya istisnadır."),
    Q("199.3", "Veteran evi mağaza kimi istifadə edir. 30 manatlıq əmlak azadolması düşür?", B, "Xeyr", "Sahibkarlıq və ya kommersiya üçün istifadə istisnadır."),
    Q("199.3", "Müddətli xidmət bitəndən sonra ailə üzvlərinə 30 manat avtomatik qalır?", B, "Xeyr", "Yalnız xidmət dövründə."),
    Q("199.3", "Əmlak vergisində bu çıxılma 30 manat, torpaq vergisində oxşar çıxılma 10 manatdır. Bu fikir:", D, "Düzgündür", "Əmlak 30, torpaq 10. Pensiyaçı yalnız əmlakda var."),

    Q("199.4.1", "Ekologiya və yanğından mühafizə üçün istifadə edilən əsas vəsaitin dəyəri vergitutma bazasından çıxılır?", B, "Bəli", "Ekologiya və yanğın mühafizəsi əsas vəsaitləri."),
    Q("199.4.1-1", "Müəssisənin balansındakı, siyahıya düşən mülki müdafiə əmlakının dəyəri bazadan çıxılır?", B, "Bəli", "Təsdiq olunmuş siyahıdakı mülki müdafiə əmlakı."),
    Q("199.4.2", "Məhsul kəməri, dəmir yolu, avtomobil yolu, rabitə və enerji xətti bazadan çıxılır?", B, "Bəli", "Həmçinin meliorasiya, suvarma, peyk və kosmik obyektlər."),
    Q("199.4.2", "Peyk və kosmik obyekt də kəmər-yol kimi bazadan çıxılır?", B, "Bəli", "Peyklər və digər kosmik obyektlər yazılıb."),
    Q("199.4.3", "Fiziki şəxsin sahibkarlıqda istifadə etmədiyi minik avtomobili əmlak bazasından çıxılır?", B, "Bəli", "Sahibkarlıqda istifadə olunmayan minik."),
    Q("199.4.3", "Fərdi sahibkar taksi kimi işlətdiyi minik avtomobilini də bu qayda ilə bazadan çıxara bilər?", B, "Xeyr", "Sahibkarlıqda istifadə olunmamalıdır."),
    Q("199.4.4", "Təhsil, tibb, mədəniyyət və idman təyinatı ilə istifadə olunan əsas vəsait bazadan hansı həddə çıxılır?", ["Tam dəyər", "Dəyərin 50 faizi", "Dəyərin 75 faizi", "Dəyərin 25 faizi"], "Dəyərin 75 faizi", "Yalnız bu sahələrin təyinatı üzrə istifadə. Digər çıxılmalar tam dəyərlə, bu 75%-lə."),
    Q("199.4.4", "Məktəbin idarə binasını kirayə mağaza etmişlərsə, 75%-lik çıxılma düşür?", B, "Xeyr", "Yalnız təhsil təyinatı üzrə istifadə."),
    Q("199.4.4", "Yanğın nasosu tam dəyərlə, məktəb laboratoriyası isə dəyərin 75%-i ilə bazadan çıxılır. Bu fikir:", D, "Düzgündür", "75% yalnız təhsil-tibb-mədəniyyət-idman əsas vəsaitinə aiddir."),

    Q("199.5", "Şəhərdə sərnişin daşıması üçün trolleybus və tramvay əmlak vergisindən azaddır?", B, "Bəli", "Yalnız şəhər sərnişin daşıması üçün trolleybus və tramvay."),
    Q("199.5", "Şəhər avtobusu da trolleybus kimi əmlak vergisindən azaddır?", B, "Xeyr", "Yalnız trolleybus və tramvay yazılıb."),
    Q("199.5", "Tramvay muzey eksponatı kimi dayanıbsa, sərnişin daşıması azadolması düşür?", B, "Xeyr", "Şəhərlərdə sərnişin daşımaları üçün istifadə şərtdir."),

    Q("199.7", "Sənaye və ya texnopark rezidenti parkdakı əmlaka görə neçə il əmlak vergisindən azaddır?", ["6 il", "7 il", "10 il", "13 il"], "10 il", "Qeydiyyat ilindən 10 il. Sənaye parkının xüsusi fəaliyyəti isə 2025-dən 6 ildir."),
    Q("199.7", "Park rezidentinin 10 illik əmlak azadolması nə vaxtdan sayılır?", ["Parkın yarandığı ildən", "Qeydiyyata alındığı hesabat ilindən", "İlk əmlak alındığı gündən", "Müqavilə günündən"], "Qeydiyyata alındığı hesabat ilindən", "Parkda qeydiyyat ili."),
    Q("199.7", "Texnopark rezidentinin parkdan kənar proqram təminatı və sistem inteqrasiyası əmlakı da 10 ilə düşür?", B, "Bəli", "Parkdan kənar IT fəaliyyətinə də şamil edilir."),
    Q("199.7-1", "Sənaye parkında dövlətin müəyyən etdiyi fəaliyyətlə məşğul rezident həmin əmlaka görə nə vaxtdan və neçə il azaddır?", ["Qeydiyyatdan 10 il", "2025-ci ildən 6 il", "2014-cü ildən 13 il", "2024-cü ildən 3 il"], "2025-ci ildən 6 il", "2025-ci il yanvarın 1-dən 6 il. Ümumi park 10 ildir."),
    Q("199.7", "Ümumi park rezidenti 10 il, sənaye parkının xüsusi fəaliyyəti 2025-dən 6 il. Bu fikir:", D, "Düzgündür", "İki ayrı müddət."),
    Q("199.8", "Park və sənaye məhəlləsi operatoru ərazidəki əmlakına görə əmlak vergisindən azaddır?", B, "Bəli", "Operator və idarəedici təşkilat, ərazidə yerləşən əmlak."),
    Q("199.8", "Park operatorunun parkdan kənar ofis binası da operator azadolmasına düşür?", B, "Xeyr", "Yalnız park və məhəllə ərazisində yerləşən əmlak."),

    Q("199.9", "Kənd təsərrüfatı istehsalçısının həmin fəaliyyətdə istifadə etdiyi əmlak nə vaxtdan və neçə il azaddır?", ["2014-cü ildən 13 il", "2017-ci ildən 10 il", "2023-cü ildən 4 il", "2020-ci ildən 7 il"], "2014-cü ildən 13 il", "2014-cü il yanvarın 1-dən 13 il. Sənaye üsulu da daxil. Torpaq vergisində belə 13 illik KT azadolması yoxdur."),
    Q("199.9", "Sənaye üsulu ilə KT istehsal edən də 13 illik əmlak azadolmasına düşür?", B, "Bəli", "Sənaye üsulu da daxildir."),
    Q("199.9", "Fermerin yaşayış evi də KT əmlak azadolmasına düşür?", B, "Xeyr", "Yalnız həmin fəaliyyət prosesində istifadə olunan əmlak."),
    Q("199.9", "Hüquqi və fiziki şəxs KT istehsalçısı bu 13 illik əmlak azadolmasına düşür?", B, "Bəli", "Həm hüquqi, həm fiziki şəxs."),

    Q("199.11", "İnvestisiya təşviqi alanın layihə çərçivəsində aldığı əmlak neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Sənədi aldığı tarixdən 7 il. Sənəddən əvvəlki əmlak düşmür."),
    Q("199.11", "İnvestisiya təşviqi sənədindən ƏVVƏL alınıb sahibkarlıqda işlədilən dəzgah da 7 ilə düşür?", B, "Xeyr", "Sənəd tarixinədək əldə edilən və sahibkarlıqda istifadə edilən əmlak çıxarılıb."),
    Q("199.11", "Təşviq sənədindən sonra layihə vəsaiti ilə gətirilən, istehsal edilən və ya tikilən əmlak 7 ilə düşür?", B, "Bəli", "Alınmış, gətirilmiş, istehsal, tikilmiş və ya quraşdırılmış."),
    Q("199.11", "Əvvəllər sahibkarlıqda istifadə olunmayan bina indi investisiya layihəsinə cəlb olunur. 7 illik azadolma düşə bilər?", B, "Bəli", "Əvvəl sahibkarlıqda istifadə edilməyən binalar da şamil edilir."),
    Q("199.11", "İnvestisiya təşviqi: yeni layihə əmlakı 7 il azad, köhnə işlək dəzgah yox. İstifadəsiz bina cəlb olunsa düşə bilər. Bu fikir:", D, "Düzgündür", "Üç şərt: tarix, layihə, əvvəlki istifadə."),

    Q("199.12", "2019–2022-ci illərdə özəlləşdirilməsi bitmiş dövlət əmlakına görə ödənilmiş əmlak vergisi qaytarıla bilər?", B, "Bəli", "Ərizə ilə qaytarılır və ya sonrakı öhdəliyə aid edilir. İki şərt var."),
    Q("199.12.1", "Özəlləşdirilmiş əmlakın əmlak vergisinin qaytarılması üçün həmin ildə digər vergilər üzrə ödənilən məbləğ bu əmlakın əmlak vergisindən az olmamalıdır?", B, "Bəli", "Digər vergilər ≥ həmin əmlaka görə əmlak vergisi."),
    Q("199.12.2", "Qaytarma ərizəsi günü vergi, faiz və maliyyə sanksiyası borcu olsa, qaytarma düşür?", B, "Xeyr", "Ərizə tarixinə borc olmamalıdır."),
    Q("199.12", "Özəlləşdirilmiş əmlak vergisi avtomatik qaytarılır, ərizə lazım deyil?", B, "Xeyr", "Ödəyicinin ərizəsi lazımdır."),
    Q("199.12", "Qaytarılan məbləğ ödəyicinin razılığı ilə sonrakı vergi öhdəliyinə də aid edilə bilər?", B, "Bəli", "Qaytarma və ya əvəzləşdirmə."),
    Q("199.13", "2019–2022 özəlləşdirmə qaytarması eyni əmlaka görə neçə hesabat ili tətbiq olunur?", ["Hər il", "Yalnız bir hesabat ili", "İki il", "Üç il"], "Yalnız bir hesabat ili", "Eyni əmlaka görə yalnız bir il."),
    Q("199.12", "2024-cü ildə özəlləşdirilən dövlət əmlakı da 2019–2022 qaytarma qaydasına düşür?", B, "Xeyr", "Yalnız 2019-cu il yanvarın 1-dən 2022-ci il yanvarın 1-dək başa çatan özəlləşdirmə. 2023-dən sonrakı üçün ayrı, 3 illik azadolma var."),

    Q("199.14", "Mikro sahibkar əmlak vergisindən azaddır?", B, "Bəli", "İstisna: ilin əvvəlinə əsas vəsaitin qalıq dəyəri 1 000 000 manatdan artıqdırsa, azad deyil."),
    Q("199.14", "Mikro sahibkarın ilin əvvəlinə əsas vəsaitinin qalıq dəyəri 1 200 000 manatdır. Əmlak vergisindən azaddır?", B, "Xeyr", "1 000 000 manatdan artıq olanda istisnadır."),
    Q("199.14", "Mikro sahibkarın əsas vəsait qalığı ilin əvvəlinə 800 000 manatdır. Azaddır?", B, "Bəli", "1 000 000-u keçməyib."),
    Q("199.14", "Mikro azadolmasında 1 milyon həddi ilin sonuna, yoxsa əvvəlinə baxılır?", ["İlin əvvəlinə qalıq dəyər", "İlin sonuna", "Orta illik", "Alış dəyəri"], "İlin əvvəlinə qalıq dəyər", "İlin əvvəlinə qalıq dəyəri."),
    Q("199.14", "Torpaq vergisində də mikro sahibkar avtomatik azaddır?", B, "Xeyr", "Mikro azadolması əmlak vergisində yazılıb, torpaqda yox."),

    Q("199.15", "KOB klaster şirkəti klaster fəaliyyətindəki əmlaka görə neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Reyestrə düşdüyü tarixdən 7 il."),
    Q("199.15", "KOB klaster əmlak azadolması nə vaxtdan sayılır?", ["Park qeydiyyatından", "Reyestrə daxil edildiyi tarixdən", "İlk müqavilədən", "İlin əvvəlindən"], "Reyestrə daxil edildiyi tarixdən", "KOB klaster reyestrinin tarixi."),
    Q("199.15", "KOB klaster şirkətinin klasterdə istifadə olunmayan ofisi də 7 ilə düşür?", B, "Xeyr", "Yalnız KOB klaster fəaliyyətində istifadə olunan əmlak."),

    Q("199.16", "Bankların rezolyusiyası çərçivəsində alınan problemli aktiv əvəzindəki əmlak nə vaxtdan və neçə il azaddır?", ["2017-ci ildən 14 il", "2019-cu ildən 12 il", "2020-ci ildən 7 il", "2019-cu ildən 7 il"], "2019-cu ildən 12 il", "2019-cu il yanvarın 1-dən 12 il. Siyahı razılaşdırılmalıdır."),
    Q("199.16", "Rezolyusiya əmlakı azadolması üçün əmlak siyahısı razılaşdırılmalıdır?", B, "Bəli", "Müvafiq qurumla razılaşdırılmış siyahı."),

    Q("199.17", "İdxalı əvəz edən qida istehsalında istifadə olunan əmlak neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Siyahının təsdiq edildiyi ildən 7 il. İnvestisiya təşviqi də 7 ildir, amma sənəd tarixindən."),
    Q("199.17", "Qida istehsalı əmlak azadolmasının 7 ili nədən başlayır?", ["Sənədin alındığı tarixdən", "Siyahının təsdiq edildiyi ildən", "Qeydiyyat ilindən", "İlk istehsal günündən"], "Siyahının təsdiq edildiyi ildən", "Siyahı ili. Təşviqdə isə sənədin alındığı tarix."),
    Q("199.17", "Qida istehsalçısının bu fəaliyyətdə istifadə olunmayan anbarı da 7 ilə düşür?", B, "Xeyr", "Yalnız həmin fəaliyyət prosesində istifadə olunan əmlak."),

    Q("199.18", "Məhkəmə müflis elan etmiş kredit təşkilatı əmlak vergisindən nə vaxtdan azaddır?", ["Qərarın qüvvəyə mindiyi aydan", "Qərarın qüvvəyə mindiyi ildən", "İddia açılan gündən", "Ləğvetmə bitəndən"], "Qərarın qüvvəyə mindiyi aydan", "Əmlakda AYD. Torpaqda isə İLDƏN. Qarışdırma."),
    Q("199.18", "Kredit təşkilatının müflislik azadolması üçün məhkəmə qərarı qanuni qüvvəyə minməlidir?", B, "Bəli", "Qanuni qüvvəyə minmiş qərar."),

    Q("199.19", "2023-cü il 1 yanvardan sonra özəlləşdirilməsi barədə qərar çıxan dövlət hüquqi şəxsi ən çoxu neçə il əmlak vergisindən azad ola bilər?", ["1 il", "2 il", "3 il", "7 il"], "3 il", "Qərar ilindən, özəlləşdirmə prosesi müddətində, lakin 3 ildən çox olmaz."),
    Q("199.19", "2023-dən sonrakı özəlləşdirmə azadolması qərarın qəbul edildiyi ildən başlayır?", B, "Bəli", "Qərar ili + proses müddəti, max 3 il."),
    Q("199.19", "2020-ci ildə özəlləşdirilməsi bitmiş əmlak da 3 illik bu azadolmaya düşür?", B, "Xeyr", "Yalnız 2023-cü il 1 yanvardan SONRA qərar çıxanlar. 2019–2022 üçün qaytarma qaydası var."),
    Q("199.12", "2019–2022 özəlləşdirmə: ödənilmiş vergi qaytarıla bilər. 2023-dən sonra: proses müddətində max 3 il azad. Bu fikir:", D, "Düzgündür", "İki ayrı özəlləşdirmə qaydası, iki ayrı dövr."),

    Q("199.20", "Kredit təşkilatının kredit müqabilində mülkiyyətinə keçən əmlak neçə il azaddır?", ["1 il", "2 il", "3 il", "7 il"], "2 il", "Balansa götürüldüyü təqvim ilindən 2 il. Torpaqda da 2 il."),
    Q("199.20", "Kredit müqabilində keçən əmlakın 2 ili hansı tarixdən sayılır?", ["Satış günündən", "Balansa götürüldüyü təqvim ilindən", "Kreditin verildiyi gündən", "Məhkəmə qərarından"], "Balansa götürüldüyü təqvim ilindən", "Təqvim ili."),

    Q("199.21", "Bakıdan kənar (Sumqayıt, Xırdalan, Abşeron da çıxılmaqla) hotel və sanatoriyanın əmlak vergisi nə qədər azaldılır?", ["50%", "75%", "90%", "Tam azad"], "75%", "2024-cü ildən 3 il. Bakı, Sumqayıt, Xırdalan və Abşeron istisnadır."),
    Q("199.21", "Hotel-sanatoriya 75%-lik əmlak endirimi nə vaxtdan və neçə ildir?", ["2023-cü ildən 6 il", "2024-cü ildən 3 il", "2025-ci ildən 5 il", "2024-cü ildən 7 il"], "2024-cü ildən 3 il", "2024-cü il yanvarın 1-dən 3 il."),
    Q("199.21", "Bakıdakı hotel də 75%-lik əmlak endiriminə düşür?", B, "Xeyr", "Bakı, Sumqayıt, Xırdalan şəhərləri və Abşeron rayonu istisnadır."),
    Q("199.21", "Sumqayıtdakı sanatoriya 75%-lik endirimə düşür?", B, "Xeyr", "Sumqayıt istisnadır."),
    Q("199.21", "Gəncədəki hotel 75%-lik endirimə düşə bilər?", B, "Bəli", "Bakı-Sumqayıt-Xırdalan-Abşeron xaricində."),
    Q("199.21", "Naxçıvandakı hotel 75%-lik endirimə düşə bilər?", B, "Bəli", "NMR də daxildir."),
    Q("199.21", "Sahibkarlıq müvəqqəti dayandırıldığı dövrdə hotel 75%-lik endirim qalır?", B, "Xeyr", "Müvəqqəti dayandırma dövrü istisnadır."),
    Q("199.21", "Hotel endirimi torpaq vergisində də 75%-dir?", B, "Xeyr", "Bu 75% yalnız əmlak vergisində yazılıb."),

    Q("199.22", "Dövlət-özəl tərəfdaşlıq və bərpa olunan enerji layihəsindəki əmlak ən çoxu neçə il azad ola bilər?", ["10 il", "20 il", "30 il", "Müddətsiz"], "30 il", "Müqavilə müddəti, tikinti daxil, 30 ildən çox olmaz."),
    Q("199.22", "DÖT/enerji 30 illik tavanına tikinti dövrü daxildir?", B, "Bəli", "Tikinti dövrü də daxil."),
    Q("199.22", "DÖT əmlak azadolması yalnız layihə çərçivəsində istifadə olunan əmlaka aiddir?", B, "Bəli", "Həmin layihələrdə istifadə olunan əmlak."),

    Q("199.1", "Publik hüquqi şəxs kafe üçün istifadə etdiyi binaya görə əmlak vergisi ödəyir, dövlət tapşırığı üçün istifadə etdiyi bina isə azad ola bilər. Bu fikir:", D, "Düzgündür", "Sahibkarlıq əmlakı istisnadır."),
    Q("199.3", "Pensiyaçı 30 manat (əmlak), şəhid ailəsi həm 30 manat əmlak, həm torpaqda 10 manat ala bilər. Pensiyaçı torpaqda 10 manatlıq bu qaydaya düşmür. Bu fikir:", D, "Düzgündür", "Əmlak 30-luğa pensiyaçı daxildir, torpaq 10-luğuna yox."),
    Q("199.4.4", "Təhsil əsas vəsaiti 75% çıxılır, hotel əmlak vergisi 75% azaldılır. Bunlar eyni güzəştdir?", B, "Xeyr", "Biri baza çıxılması, biri verginin 75% azaldılması. Hoteldə yer də şərtdir."),
    Q("199.7", "Park rezidenti 10 il, investisiya təşviqi 7 il, KOB klaster 7 il, startap əmlakda yoxdur. Bu fikir:", D, "Düzgündür", "Əmlakda startap azadolması yazılıb? Xeyr."),
    Q("199.11", "Bunlardan hansı 7 illik təşviqə düşür?", ["Sənəddən sonra layihə ilə alınan dəzgah", "Sənəddən 2 il əvvəl alınıb sexdə işləyən dəzgah", "Şəxsi minik (sahibkarlıqda)", "Bakı hoteli"], "Sənəddən sonra layihə ilə alınan dəzgah", "Köhnə işlək əmlak düşmür."),
    Q("199.14", "Bunlardan hansı azaddır?", ["Mikro sahibkar, əsas vəsait qalığı 400 000 manat", "Mikro sahibkar, qalıq 1 500 000 manat", "Bakı hoteli tam", "İcarəyə verilən veteran evi 30 manat"], "Mikro sahibkar, əsas vəsait qalığı 400 000 manat", "1 milyonu keçən mikro istisnadır."),
    Q("199.18", "Müflis bankın əmlak vergisi qərarın qüvvəyə mindiyi AYDAN, torpaq vergisi isə İLDƏN dayanır. Bu fikir:", D, "Düzgündür", "Ay və il fərqi imtahan tələsidir."),
    Q("199.21", "Bunlardan hansı 75% əmlak endiriminə düşə bilər?", ["Şəkidə işlək hotel", "Bakıda hotel", "Sumqayıtda sanatoriya", "Abşeronda hotel"], "Şəkidə işlək hotel", "Dörd şəhər-rayon çıxılır."),
    Q("199.5", "Bunlardan hansı azaddır?", ["Şəhər tramvayı", "Şəhər avtobusu", "Taksi", "Yük maşını"], "Şəhər tramvayı", "Yalnız trolleybus və tramvay."),
    Q("199.9", "KT istehsal əmlakı 2014-dən 13 il azaddır. Eyni fəaliyyətin torpağı da avtomatik 13 il azaddır?", B, "Xeyr", "Torpaq vergisində belə 13 illik KT azadolması yoxdur."),
    Q("199.20", "Kredit müqabilində keçən əmlak 2 il, özəlləşdirmə prosesi max 3 il, müflislik isə qərardan sonra davam edir. Bu fikir:", D, "Düzgündür", "Üç ayrı kredit/özəlləşdirmə qaydası.")
  ];
})(typeof window !== "undefined" ? window : globalThis);
