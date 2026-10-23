(function (g) {
  function Q(itemId, q, options, answer, explain) {
    return { itemId: itemId, q: q, options: options, answer: answer, explain: explain || "" };
  }
  var B = ["Bəli", "Xeyr"];
  var D = ["Düzgündür", "Səhvdir"];
  g.Q207 = [
    Q("207.1.1", "Yaşayış məntəqəsinin ümumi istifadədə olan torpağı torpaq vergisinə cəlb olunur?", B, "Xeyr", "Ümumi istifadə torpaqları cəlb olunmur."),
    Q("207.1.1", "Şəhər parkı və küçə torpağı ümumi istifadə kimi azad ola bilər?", B, "Bəli", "Yaşayış məntəqəsinin ümumi istifadə torpaqları."),
    Q("207.1.1", "Vətəndaşın həyətyanı torpağı da küçə kimi ümumi istifadə azadolmasına düşür?", B, "Xeyr", "Ümumi istifadə, şəxsi həyət deyil."),

    Q("207.1.2", "Dövlət orqanı, büdcə təşkilatı və yerli özünüidarənin torpağı, bir qayda olaraq, torpaq vergisindən azaddır?", B, "Bəli", "Sahibkarlıq üçün istifadə olunan torpaq çıxılır (publik hüquqi şəxsdə)."),
    Q("207.1.2", "Mərkəzi Bankın və qurumlarının torpağı azaddır?", B, "Bəli", "MB və qurumları."),
    Q("207.1.2", "Dövlətin adından yaradılan publik hüquqi şəxsin torpağı, bir qayda olaraq, azaddır?", B, "Bəli", "Sahibkarlıq məqsədilə istifadə olunan torpaq istisnadır."),
    Q("207.1.2", "Publik hüquqi şəxs torpağı ticarət mərkəzi kimi istifadə edir. Azaddır?", B, "Xeyr", "Sahibkarlıq məqsədilə istifadə olunan torpaq tutulur."),
    Q("207.1.2", "Neft Fondunun mülkiyyətində və ya istifadəsində olan torpaq azaddır?", B, "Bəli", "Neft Fondu ayrıca yazılıb."),
    Q("207.1.2", "Neft Fondunun torpağı əmlak vergisindəki «dövlət fondları» kimi, torpaqda da adıyla azaddır. Bu fikir:", D, "Düzgündür", "Torpaqda Fond ayrıca göstərilib."),

    Q("207.1.3", "Fiziki və hüquqi şəxslərin istifadəsinə verilməmiş dövlət, meşə və su fondu torpağı cəlb olunur?", B, "Xeyr", "İstifadəyə verilməmiş fond torpaqları cəlb olunmur."),
    Q("207.1.3", "Xəzərin Azərbaycana məxsus sektorunun altındakı torpaq torpaq vergisinə cəlb olunur?", B, "Xeyr", "Xəzər sektorunun altındakı torpaq cəlb olunmur."),
    Q("207.1.3", "Meşə fondu torpağı vətəndaşa istifadəyə verilibsə, «istifadəyə verilməmiş» azadolması qalır?", B, "Xeyr", "Azadolma istifadəyə verilməmiş torpaqlara aiddir."),
    Q("207.1.4", "Dövlət sərhəd zolağı torpağı torpaq vergisinə cəlb olunur?", B, "Xeyr", "Sərhəd zolaqları azaddır."),
    Q("207.1.4", "Müdafiə təyinatlı torpaq torpaq vergisinə cəlb olunur?", B, "Xeyr", "Müdafiə torpaqları azaddır."),
    Q("207.1.4", "Hərbi hissənin müdafiə torpağı azaddır, sərhəd zolağı da. Bu fikir:", D, "Düzgündür", "Hər ikisi eyni bənddədir."),

    Q("207.2", "Şəhidin valideyni, dul ər/arvadı, övladı, qəhrəman və müharibə veteranının torpaq vergisi nə qədər azaldılır?", ["10 manat", "20 manat", "30 manat", "Tam azad"], "10 manat", "Torpaqda 10 manat. Əmlakda eyni dairə + pensiyaçı üçün 30 manat. Pensiyaçı bu 10 manata düşmür."),
    Q("207.2", "Pensiyaçının torpaq vergisi də şəhid ailəsi kimi 10 manat azaldılır?", B, "Xeyr", "Pensiyaçı torpaq 10 manatında yoxdur. Əmlakda 30 manat var."),
    Q("207.2", "Müddətli hərbi xidmətçinin torpaq vergisi də 10 manat azaldılır?", B, "Xeyr", "Müddətli xidmətçi əmlakın 30 manatındadır, torpağın 10 manatında yox."),
    Q("207.2", "Vətən Müharibəsi Qəhrəmanının mülkiyyətindəki torpağa 10 manat çıxılma düşür?", B, "Bəli", "Qəhrəman, veteran, şəhid ailəsi bu dairədədir."),
    Q("207.2", "Əmlak vergisi çıxılması 30 manat, torpaq vergisi çıxılması 10 manatdır. Bu fikir:", D, "Düzgündür", "Məbləğ və dairə fərqlidir."),

    Q("207.3", "Sənaye və ya texnopark rezidenti parkda istifadə etdiyi torpağa görə neçə il azaddır?", ["6 il", "7 il", "10 il", "13 il"], "10 il", "Qeydiyyat ilindən 10 il. Sənaye parkının xüsusi fəaliyyəti 2025-dən 6 ildir."),
    Q("207.3", "Park rezidentinin 10 illik torpaq azadolması nə vaxtdan sayılır?", ["Parkın yarandığı ildən", "Qeydiyyata alındığı hesabat ilindən", "Torpaq aktı günündən", "Müqavilə günündən"], "Qeydiyyata alındığı hesabat ilindən", "Parkda qeydiyyat ili."),
    Q("207.3", "Texnopark rezidentinin parkdan kənar IT (proqram, sistem inteqrasiyası) torpaq azadolmasına da düşür?", B, "Bəli", "Parkdan kənar IT-yə də şamil edilir."),
    Q("207.3-1", "Sənaye parkında dövlətin müəyyən etdiyi fəaliyyətlə məşğul rezident həmin torpağa görə nə vaxtdan və neçə il azaddır?", ["Qeydiyyatdan 10 il", "2025-ci ildən 6 il", "2014-cü ildən 13 il", "2024-cü ildən 3 il"], "2025-ci ildən 6 il", "2025-ci il yanvarın 1-dən 6 il."),
    Q("207.3", "Ümumi park rezidenti torpaqda 10 il, sənaye parkının xüsusi fəaliyyəti 2025-dən 6 il. Bu fikir:", D, "Düzgündür", "Əmlak vergisi ilə eyni məntiq."),
    Q("207.4", "Park və sənaye məhəlləsi operatoru ərazidə istifadə etdiyi torpağa görə azaddır?", B, "Bəli", "Operator və idarəedici, ərazidə istifadə etdiyi torpaq."),
    Q("207.4", "Park operatorunun şəhərin başqa yerindəki torpağı da operator azadolmasına düşür?", B, "Xeyr", "Yalnız park və məhəllə ərazisində istifadə olunan torpaq."),

    Q("207.5", "İnvestisiya təşviqi alan hüquqi şəxs və fərdi sahibkar torpaq vergisindən neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Sənədi aldığı tarixdən 7 il. Mülkiyyətində VƏ YA istifadəsində olan müvafiq torpaq."),
    Q("207.5", "İnvestisiya təşviqi torpaq azadolması yalnız mülkiyyətdəki torpağa aiddir, istifadəyə yox?", B, "Xeyr", "Mülkiyyətində və ya istifadəsində olan müvafiq torpaqlar."),
    Q("207.5", "İnvestisiya təşviqinin 7 ili sənədin alındığı tarixdən başlayır?", B, "Bəli", "Alınma tarixindən."),
    Q("207.5", "Əmlak vergisində təşviq yalnız layihədən SONRA alınan əmlaka aiddir. Torpaqda isə mülkiyyət və ya istifadədəki müvafiq torpaq 7 ildir. Bu fikir:", D, "Düzgündür", "Torpaqda «sənəddən əvvəlki əmlak düşmür» şərti yoxdur, əmlakda var."),

    Q("207.6", "KOB klaster şirkəti klaster fəaliyyətindəki torpağa görə neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Reyestrə düşdüyü tarixdən 7 il."),
    Q("207.6", "KOB klaster torpaq azadolması nə vaxtdan sayılır?", ["Park qeydiyyatından", "Reyestrə daxil edildiyi tarixdən", "Torpaq aktından", "İlin əvvəlindən"], "Reyestrə daxil edildiyi tarixdən", "Reyestr tarixi."),
    Q("207.6", "KOB klasterin klasterdə istifadə olunmayan torpağı da 7 ilə düşür?", B, "Xeyr", "Yalnız KOB klaster fəaliyyətində istifadə olunan torpaq."),

    Q("207.7", "Bank rezolyusiyası çərçivəsində alınan problemli aktiv əvəzindəki torpaq nə vaxtdan və neçə il azaddır?", ["2017-ci ildən 14 il", "2019-cu ildən 12 il", "2020-ci ildən 7 il", "2019-cu ildən 7 il"], "2019-cu ildən 12 il", "2019-cu il yanvarın 1-dən 12 il. Siyahı razılaşdırılmalıdır."),
    Q("207.7", "Rezolyusiya torpağı üçün siyahı razılaşdırılmalıdır?", B, "Bəli", "Müvafiq qurumla razılaşdırılmış siyahı."),

    Q("207.8", "Geoloji ayırma sənədi ilə (neft-qaz çıxılmaqla) axtarış-kəşfiyyat torpağında vergi necə dəyişir?", ["Tam azad", "75% azaldılır", "50% azaldılır", "Dərəcə yarıya enir"], "75% azaldılır", "İşə başlanılan təqvim ili üzrə 75%. Eyni ildə hasilat varsa, düşmür."),
    Q("207.8", "Geoloji kəşfiyyatın 75%-lik endirimi neft və qaz yatağına da düşür?", B, "Xeyr", "Neft və qaz yataqları istisnadır."),
    Q("207.8", "Kəşfiyyat 75%-i işə başlanılan təqvim ili üzrə tətbiq olunur?", B, "Bəli", "Həmin təqvim ili."),
    Q("207.8", "Eyni ildə həm kəşfiyyat, həm də hasilat (çıxarılma) varsa, 75%-lik endirim düşür?", B, "Xeyr", "Eyni vergi ilində kəşfiyyat + istismar/çıxarılma olanda tətbiq edilmir."),
    Q("207.8", "75%-lik kəşfiyyat endirimi üçün podrat müqaviləsi, kəşfiyyat planı və hesabat lazımdır?", B, "Bəli", "Təsdiqedici sənədlər şərtidir."),
    Q("207.8", "Hotel əmlak vergisi də 75% azalır, kəşfiyyat torpağı da 75%. Eyni güzəştdir?", B, "Xeyr", "Biri hotel-sanatoriya əmlakı (3 il, yer şərti), biri kəşfiyyat torpağı (həmin il, hasilat olmasın)."),

    Q("207.9", "Məhkəmə müflis elan etmiş kredit təşkilatı torpaq vergisindən nə vaxtdan azaddır?", ["Qərarın qüvvəyə mindiyi aydan", "Qərarın qüvvəyə mindiyi ildən", "İddia açılan gündən", "Ləğvetmə bitəndən"], "Qərarın qüvvəyə mindiyi ildən", "Torpaqda İL. Əmlakda AY. Qarışdırma."),
    Q("207.9", "Müflislik torpaq azadolması üçün məhkəmə qərarı qanuni qüvvəyə minməlidir?", B, "Bəli", "Qanuni qüvvəyə minmiş qərar."),
    Q("207.9", "Müflis bank: əmlak vergisi qərarın ayından, torpaq vergisi qərarın ilindən. Bu fikir:", D, "Düzgündür", "Ay/il fərqi klassik imtahan sualıdır."),

    Q("207.10", "İdxalı əvəz edən qida istehsalında istifadə olunan torpaq neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Siyahının təsdiq edildiyi ildən 7 il."),
    Q("207.10", "Qida istehsalı torpaq azadolmasının 7 ili nədən başlayır?", ["Sənədin alındığı tarixdən", "Siyahının təsdiq edildiyi ildən", "Qeydiyyat ilindən", "İlk məhsul günündən"], "Siyahının təsdiq edildiyi ildən", "Siyahı ili. Təşviqdə sənəd tarixi."),
    Q("207.10", "Qida istehsalçısının bu fəaliyyətdə istifadə olunmayan torpağı da 7 ilə düşür?", B, "Xeyr", "Yalnız həmin fəaliyyət prosesində istifadə olunan torpaq."),

    Q("207.11", "2023-cü il 1 yanvardan sonra özəlləşdirilməsi barədə qərar çıxan dövlət hüquqi şəxsi ən çoxu neçə il torpaq vergisindən azad ola bilər?", ["1 il", "2 il", "3 il", "7 il"], "3 il", "Qərar ilindən, proses müddətində, max 3 il. Əmlakda da eyni."),
    Q("207.11", "2023-dən sonrakı özəlləşdirmə torpaq azadolması qərarın qəbul edildiyi ildən başlayır?", B, "Bəli", "Qərar ili + proses, max 3 il."),
    Q("207.11", "2021-ci ildə özəlləşdirilən dövlət müəssisəsi də bu 3 illik torpaq azadolmasına düşür?", B, "Xeyr", "Yalnız 2023-cü il 1 yanvardan sonra qərar çıxanlar."),

    Q("207.12", "Kredit təşkilatının kredit müqabilində mülkiyyətinə keçən torpaq neçə il azaddır?", ["1 il", "2 il", "3 il", "7 il"], "2 il", "Balansa götürüldüyü təqvim ilindən 2 il. Əmlakda da 2 il."),
    Q("207.12", "Kredit müqabilində keçən torpağın 2 ili hansı tarixdən sayılır?", ["Satış günündən", "Balansa götürüldüyü təqvim ilindən", "Kreditin verildiyi gündən", "Məhkəmə qərarından"], "Balansa götürüldüyü təqvim ilindən", "Təqvim ili."),

    Q("207.13", "Dövlət-özəl tərəfdaşlıq və bərpa olunan enerji layihəsindəki torpaq ən çoxu neçə il azad ola bilər?", ["10 il", "20 il", "30 il", "Müddətsiz"], "30 il", "Müqavilə müddəti, tikinti daxil, 30 ildən çox olmaz."),
    Q("207.13", "DÖT/enerji torpaq azadolmasının 30 illik tavanına tikinti dövrü daxildir?", B, "Bəli", "Tikinti dövrü də daxil."),
    Q("207.13", "DÖT torpaq azadolması yalnız layihə çərçivəsində istifadə olunan torpağa aiddir?", B, "Bəli", "Həmin layihələrdə istifadə olunan torpaq."),

    Q("207.14", "Qeydiyyatlı teatr, muzey, simfonik orkestr, kinematoqrafiya müəssisəsi və film prodüseri həmin fəaliyyətin torpağına görə nə vaxtdan və neçə il azaddır?", ["2023-cü ildən 6 il", "2025-ci ildən 5 il", "2025-ci ildən 7 il", "2024-cü ildən 3 il"], "2025-ci ildən 5 il", "2025-ci il yanvarın 1-dən 5 il. Əmlak vergisində belə teatr-film azadolması yoxdur."),
    Q("207.14", "Film dublyajı ilə məşğul kinematoqrafiya müəssisəsi də 5 illik torpaq azadolmasına düşür?", B, "Bəli", "İstehsal və dublyaj."),
    Q("207.14", "Teatr-film torpaq azadolması üçün Azərbaycanda qanuni qeydiyyat lazımdır?", B, "Bəli", "Qanunla qeydiyyatdan keçən müəssisə və prodüser."),
    Q("207.14", "Teatrın bu fəaliyyətdə istifadə etmədiyi boş torpaq da 5 ilə düşür?", B, "Xeyr", "Yalnız həmin fəaliyyət üzrə istifadə etdikləri torpaq."),
    Q("207.14", "Teatr-film 2025-dən 5 il torpaqda azaddır, əmlak vergisində belə bənd yoxdur. Bu fikir:", D, "Düzgündür", "Mənfəətdə 90%, torpaqda tam azad, əmlakda yox."),

    Q("207.1.3", "İstifadəyə verilməmiş meşə fondu azaddır, vətəndaşa icarəyə verilmiş meşə sahəsi isə bu qaydaya düşmür. Bu fikir:", D, "Düzgündür", "Şərt: istifadəyə verilməmiş."),
    Q("207.2", "Şəhidin dul arvadı torpaqda 10, əmlakda 30 manat çıxılma ala bilər. Pensiyaçı isə yalnız əmlakda 30. Bu fikir:", D, "Düzgündür", "Dairə eyni deyil."),
    Q("207.5", "Təşviq torpaqda 7 il (mülkiyyət və ya istifadə), əmlakda 7 il amma sənəddən sonrakı layihə əmlakı. Bu fikir:", D, "Düzgündür", "Əmlakda əlavə şərt var."),
    Q("207.8", "Kəşfiyyat 75%-i neft-qaza düşmür və eyni ildə hasilat varsa da düşmür. Bu fikir:", D, "Düzgündür", "İki istisna: neft-qaz və eyni ildə çıxarılma."),
    Q("207.9", "Müflis kredit təşkilatı: torpaq — ildən, əmlak — aydan. Bu fikir:", D, "Düzgündür", "Eyni hadisə, fərqli başlanğıc."),
    Q("207.14", "Bunlardan hansı torpaq vergisindən azad ola bilər?", ["2025-dən 5 il ərzində teatrın səhnə torpağı", "Eyni teatrın əmlak vergisi avtomatik 5 il", "Neft kəşfiyyatı torpağı 75%", "Pensiyaçının torpağı 10 manat"], "2025-dən 5 il ərzində teatrın səhnə torpağı", "Əmlakda teatr bəndi yoxdur. Neft kəşfiyyatı istisnadır. Pensiyaçı torpaq 10-luğuna düşmür."),
    Q("207.1.1", "Bunlardan hansı cəlb olunmur?", ["Şəhərin ümumi istifadə küçə torpağı", "Vətəndaşın həyəti", "İcarəyə verilmiş meşə sahəsi", "Publik hüquqi şəxsin ticarət torpağı"], "Şəhərin ümumi istifadə küçə torpağı", "Şəxsi həyət, icarəli meşə və sahibkarlıq torpağı düşmür."),
    Q("207.3", "Park rezidenti torpaqda 10 il, KOB klaster 7 il, təşviq 7 il, özəlləşdirmə max 3 il. Bu fikir:", D, "Düzgündür", "Dörd fərqli müddət."),
    Q("207.10", "Qida istehsalı torpağı 7 il (siyahı ili), eyni fəaliyyətin əmlakı da 7 il (siyahı ili). Bu fikir:", D, "Düzgündür", "Əmlak və torpaq burada eyni məntiqlə gedir."),
    Q("207.13", "DÖT torpaq və əmlak hər ikisində max 30 il, tikinti daxil. Bu fikir:", D, "Düzgündür", "Eyni tavan."),
    Q("207.1.2", "Publik hüquqi şəxsin sahibkarlıq torpağı tutulur, eyni məntiq əmlak vergisində də var. Bu fikir:", D, "Düzgündür", "Sahibkarlıq istisnası hər iki vergədə."),
    Q("207.8", "Kəşfiyyat 75%-i üçün geoloji ayırma sənədi olmadan yalnız şifahi razılıq kifayətdir?", B, "Xeyr", "Geoloji ayırma sənədi və təsdiqedici sənədlər lazımdır."),
    Q("207.12", "Kredit müqabilində keçən torpaq 2 il, özəlləşdirmə prosesi max 3 il. Bu fikir:", D, "Düzgündür", "2 və 3 — qarışdırılan rəqəmlər."),
    Q("207.2", "10 manatlıq torpaq çıxılması mülkiyyətdəki torpağa aiddir?", B, "Bəli", "Həmin şəxslərin mülkiyyətində olan torpaqlar."),
    Q("207.14", "Televiziya şirkəti də teatr-muzey torpaq azadolmasına düşür?", B, "Xeyr", "Audiovizual media burada yoxdur. Teatr, muzey, orkestr, kinematoqrafiya və prodüser.")
  ];
})(typeof window !== "undefined" ? window : globalThis);
