(function (g) {
  function Q(itemId, q, options, answer, explain) {
    return { itemId: itemId, q: q, options: options, answer: answer, explain: explain || "" };
  }
  var B = ["Bəli", "Xeyr"];
  var D = ["Düzgündür", "Səhvdir"];
  g.Q106 = [
    Q("106.1.1", "Xeyriyyə təşkilatının ianə və üzvlükdən gəliri mənfəət vergisindən azaddır?", B, "Bəli", "Xeyriyyə gəliri azaddır, amma sahibkarlıq çıxılır."),
    Q("106.1.1", "Xeyriyyə təşkilatı kafe açıb pul qazanır. Bu sahibkarlıq gəliri də azaddır?", B, "Xeyr", "Sahibkarlıq fəaliyyətindən gəlir azadolmadan çıxarılıb."),
    Q("106.1.2", "Qeyri-kommersiya təşkilatının əvəzsiz köçürmə, üzvlük haqqı və ianəsi azaddır?", B, "Bəli", "Yalnız bu üç növ: əvəzsiz köçürmə, üzvlük, ianə."),
    Q("106.1.2", "Qeyri-kommersiya təşkilatının mağaza satışından mənfəəti də ianə kimi azaddır?", B, "Xeyr", "Satış sahibkarlıqdır, bu siyahıda yoxdur."),
    Q("106.1.3", "Beynəlxalq, dövlətlərarası və hökumətlərarası təşkilatın gəliri (sahibkarlıq çıxılmaqla) azaddır?", B, "Bəli", "Sahibkarlıqdan başqa gəlirləri azaddır."),
    Q("106.1.3", "Beynəlxalq təşkilatın sahibkarlıq gəliri də avtomatik azaddır?", B, "Xeyr", "Sahibkarlıq istisnadır."),
    Q("106.1.1", "Xeyriyyə və beynəlxalq təşkilatda eyni tələ: sahibkarlıq azad deyil. Bu fikir:", D, "Düzgündür", "Hər ikisində sahibkarlıq çıxılır."),

    Q("106.1.4", "Dövlət orqanı, büdcə təşkilatı və yerli özünüidarənin gəliri, bir qayda olaraq, mənfəət vergisindən azaddır?", B, "Bəli", "Amma dividend, sahibkarlıq və faiz çıxılır."),
    Q("106.1.4", "Dövlətin adından yaradılan publik hüquqi şəxsin gəliri də bu qaydaya düşür?", B, "Bəli", "Publik hüquqi şəxs də daxildir, eyni istisnalarla."),
    Q("106.1.4", "Dövlət orqanının dividend gəliri də azaddır?", B, "Xeyr", "Dividend istisnadır."),
    Q("106.1.4", "Dövlət orqanının faiz gəliri azaddır?", B, "Xeyr", "Faiz gəliri istisnadır."),
    Q("106.1.4", "Publik hüquqi şəxsin adi ödənişli kommersiya xidmətindən gəliri azaddır?", B, "Xeyr", "Sahibkarlıq və digər ödənişli iş-xidmət istisnadır."),
    Q("106.1.4", "Publik hüquqi şəxsin büdcə vəsaiti ilə, nizamnamə vəzifəsi üzrə müqavilə işindən gəliri (həmin müddətdə) azad qala bilər?", B, "Bəli", "Büdcə-nizamnamə-müqavilə işi istisnanın istisnasıdır, azad qalır."),

    Q("106.1.5", "Mərkəzi Bankın və onun qurumlarının gəliri mənfəət vergisindən azaddır?", B, "Bəli", "MB və qurumları azaddır."),
    Q("106.1.5", "Neft Fondunun gəliri mənfəət vergisindən azaddır?", B, "Bəli", "Neft Fondu azaddır."),
    Q("106.1.5", "Əmanətlərin Sığortalanması Fondunun gəliri azaddır?", B, "Bəli", "ƏSF azaddır."),
    Q("106.1.5", "İcbari Sığorta Bürosunun gəliri azaddır?", B, "Bəli", "İcbari Sığorta Bürosu azaddır."),
    Q("106.1.5", "İpoteka kreditləşməsi və sahibkar kreditinə təminat verən qurumun gəliri azaddır?", B, "Bəli", "Həmin sahədə fəaliyyət göstərən qurum."),
    Q("106.1.5", "Güzəştli kreditlər üzrə müvəkkil bankın həmin quruma ödədiyi faiz gəliri azaddır?", B, "Bəli", "Nizamnaməyə uyğun güzəştli kredit faizləri."),
    Q("106.1.5", "Adi kommersiya bankının bütün gəliri Mərkəzi Bank kimi azaddır?", B, "Xeyr", "Yalnız sadalanan qurumlar və güzəştli kredit faizi."),

    Q("106.1.6", "Alınmış sığorta ödənişi, bir qayda olaraq, mənfəət vergisindən azaddır?", B, "Bəli", "Sığorta ödənişi azaddır, bir istisna ilə."),
    Q("106.1.6", "Sığorta hadisəsi ilə bağlı zərərə aid edilən məbləğ də sığorta ödənişi kimi azaddır?", B, "Xeyr", "Zərərə aid edilən hissə istisnadır, azad deyil."),

    Q("106.1.7", "Təhsil müəssisəsinin (uşaq bağçası və xüsusi təhsil də daxil) mənfəəti azaddır?", B, "Bəli", "Mənfəətin dividendlərə gedən hissəsi çıxılır."),
    Q("106.1.7", "Təhsil müəssisəsinin mənfəətindən dividendlərə yönəldilən hissə də azaddır?", B, "Xeyr", "Dividendlərə gedən hissə istisnadır."),
    Q("106.1.7", "Məktəbəqədər təhsil müəssisəsinin mənfəəti də universitet kimi azaddır?", B, "Bəli", "Məktəbəqədər də daxildir."),
    Q("106.1.7", "Sağlamlıq imkanları məhdud şəxslər üçün xüsusi təhsil müəssisəsinin mənfəəti azaddır?", B, "Bəli", "Xüsusi təhsil də daxildir."),
    Q("106.1.7", "Təhsil müəssisəsi mənfəəti azaddır, amma həmin mənfəəti dividend kimi paylasa, o hissə tutulur. Bu fikir:", D, "Düzgündür", "Azadolma dividendə gedən hissəyə şamil edilmir."),

    Q("106.1.8", "Hüquqi şəxsin büdcəyə vergi borcunun qanunla silinməsindən gəliri azaddır?", B, "Bəli", "Vergi borcunun silinməsi gəliri azaddır."),

    Q("106.1.9", "Şirkət özünün və tam mülkiyyətindəki rezident törəməsinin balansları arasında əvəzsiz aktiv ötürür (müəyyən hallarda). Bu dəyər azaddır?", B, "Bəli", "Ana və tam mülkiyyətdəki rezident törəmə arasında."),
    Q("106.1.9", "Törəmə 80% mülkiyyətdədirsə (tam deyil), əvəzsiz aktiv ötürülməsi bu qayda ilə azaddır?", B, "Xeyr", "Tam mülkiyyətdə olan rezident törəmə lazımdır."),
    Q("106.1.9", "Qeyri-rezident törəməyə əvəzsiz aktiv ötürmə də bu qaydaya düşür?", B, "Xeyr", "Törəmə rezident olmalıdır."),
    Q("106.1.10", "İcra hakimiyyəti qərarı ilə bir hüquqi şəxsin balansından digərinə əvəzsiz verilən əsas vəsaitin dəyəri azaddır?", B, "Bəli", "Qərar əsasında əsas vəsait."),
    Q("106.1.10", "İcra qərarı olmadan iki yad şirkət arasında əvəzsiz əsas vəsait də bu qayda ilə azaddır?", B, "Xeyr", "Müvafiq icra qərarı lazımdır."),
    Q("106.1.11", "Pay bölgüsü və ixrac boru kəməri sazişi üzrə aktivlərin Azərbaycanı təmsil edən tərəfə verilməsi azaddır?", B, "Bəli", "Əsas fond, daşınar əmlak və digər aktivlər."),

    Q("106.1.12", "Sənaye və ya texnopark operatorunun mənfəətinin infrastruktura tikinti və saxlanmaya yönələn hissəsi azaddır?", B, "Bəli", "Yalnız infrastruktura yönələn hissə, bütün mənfəət yox."),
    Q("106.1.12", "Park operatorunun bütün mənfəəti avtomatik 10 il azaddır?", B, "Xeyr", "Operator üçün yalnız infrastruktura yönələn hissə. 10 il rezidentə aiddir."),
    Q("106.1.13", "Park rezidenti hüquqi şəxsin parkdakı fəaliyyətindən gəliri neçə il azaddır?", ["3 il", "6 il", "7 il", "10 il"], "10 il", "Qeydiyyat ilindən 10 il. Sənaye parkının xüsusi fəaliyyəti isə 2025-dən 6 ildir — qarışdırma."),
    Q("106.1.13", "Park rezidentinin 10 ili nə vaxtdan sayılır?", ["Parkın yarandığı ildən", "Qeydiyyata alındığı hesabat ilindən", "İlk mənfəət ilindən", "Müqavilə günündən"], "Qeydiyyata alındığı hesabat ilindən", "Parkda qeydiyyat ili."),
    Q("106.1.13", "Texnopark rezidentinin parkdan kənar proqram təminatı və sistem inteqrasiyası gəliri də 10 ilə düşür?", B, "Bəli", "Parkdan kənar IT də daxildir."),
    Q("106.1.13", "Parkdan kənar IT üzrə alıcıya texniki dəstək və təlim gəliri də 10 ilə düşür?", B, "Bəli", "Həmin fəaliyyətdən irəli gələn dəstək və təlim."),
    Q("106.1.13-1", "Texnoparkın parkdan kənar IT fəaliyyəti üzrə ödədiyi dividend neçə il azaddır?", ["4 il", "6 il", "7 il", "10 il"], "10 il", "Şəhadətnamənin alındığı ildən 10 il. KT hüquqi iştirakçı dividendi 4 ildir."),
    Q("106.1.13-1", "Texnopark IT dividendi şəhadətnamənin alındığı hesabat ilindən başlayır?", B, "Bəli", "Şəhadətnamə ili."),
    Q("106.1.13-2", "Sənaye parkında dövlətin müəyyən etdiyi fəaliyyətlə məşğul rezidentin həmin mənfəəti nə vaxtdan və neçə il azaddır?", ["2014-cü ildən 13 il", "2023-cü ildən 10 il", "2025-ci ildən 6 il", "Qeydiyyatdan 10 il"], "2025-ci ildən 6 il", "2025-ci il yanvarın 1-dən 6 il. Ümumi park rezidenti 10 ildir — bu ayrıca qaydadır."),
    Q("106.1.13", "Ümumi park rezidenti 10 il (qeydiyyatdan), sənaye parkının xüsusi fəaliyyəti 2025-dən 6 il. Bu fikir:", D, "Düzgündür", "İki ayrı park azadolması, iki ayrı müddət."),

    Q("106.1.14", "Kənd təsərrüfatı məhsulu istehsal edən hüquqi şəxsin bu fəaliyyətdən mənfəəti nə vaxtdan və neçə il azaddır?", ["2014-cü ildən 13 il", "2017-ci ildən 10 il", "2023-cü ildən 4 il", "2020-ci ildən 7 il"], "2014-cü ildən 13 il", "2014-cü il yanvarın 1-dən 13 il. Satışdankənar və dividend isə 2023-dən 4 ildir."),
    Q("106.1.14", "Sənaye üsulu ilə kənd təsərrüfatı istehsal edən hüquqi şəxs də 13 illik mənfəət azadolmasına düşür?", B, "Bəli", "Sənaye üsulu da daxildir."),
    Q("106.1.14", "Hüquqi şəxs başqasının buğdasını alıb satır. Bu, KT istehsal mənfəəti kimi 13 il azaddır?", B, "Xeyr", "Yalnız istehsaldan mənfəət."),
    Q("106.1.14-1", "Kənd təsərrüfatı hüquqi şəxsinin satışdankənar gəliri nə vaxtdan və neçə il azaddır?", ["2014-cü ildən 13 il", "2023-cü ildən 4 il", "2025-ci ildən 6 il", "Müddətsiz"], "2023-cü ildən 4 il", "Satışdankənar, subsidiya və hüquqi iştirakçı dividendi: 2023-cü il yanvarın 1-dən 4 il."),
    Q("106.1.14-1", "KT istehsalı ilə bağlı büdcə subsidiyası hüquqi şəxsə 2023-dən 4 il azaddır?", B, "Bəli", "Subsidiya da 4 illik qaydadadır, 13 illik istehsal mənfəətindən ayrı."),
    Q("106.1.14-1", "KT ilə məşğul rezident hüquqi şəxsin hüquqi iştirakçısının bu sahədən dividendi 2023-dən 4 il azaddır?", B, "Bəli", "Hüquqi iştirakçının KT dividendi 4 il."),
    Q("106.1.14", "KT istehsal mənfəəti 2014-dən 13 il, satışdankənar-subsidiya-dividend 2023-dən 4 ildir. Bu fikir:", D, "Düzgündür", "İki ayrı müddət. Qarışdırma."),

    Q("106.1.16", "Dövlət ehtiyacı üçün torpaq alınmasına görə hüquqi şəxsə kompensasiya azaddır?", B, "Bəli", "Həmin qanun üzrə kompensasiya."),
    Q("106.1.16", "Torpaq kompensasiyasının yalnız 50 faizi azaddır?", B, "Xeyr", "Kompensasiya tam azaddır."),

    Q("106.1.17", "İnvestisiya təşviqi alan hüquqi şəxsin mənfəətinin neçə faizi azaddır?", ["25%", "50%", "75%", "90%"], "50%", "Mənfəətin 50 faizi, sənədi aldığı tarixdən 7 il. Mikro 75%-dir."),
    Q("106.1.17", "İnvestisiya təşviqi alan hüquqi şəxsin 50% azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Sənədi aldığı tarixdən 7 il. Park 10 il, startap 3 il."),
    Q("106.1.17", "İnvestisiya təşviqinin 7 ili sənədin alındığı tarixdən başlayır?", B, "Bəli", "Alınma tarixindən, qeydiyyat ilindən yox."),

    Q("106.1.18", "Hesabat ilinin mənfəətinin elm, təhsil, səhiyyə, idman, mədəniyyət və ya sosial fondlara köçürülən hissəsi ən çoxu neçə faiz azad ola bilər?", ["10%", "15%", "25%", "50%"], "15%", "Mənfəətin 15%-dən çox olmayan hissəsi. 2024-dən 5 il. Nağdsız."),
    Q("106.1.18", "Elm-təhsil-səhiyyə köçürmə azadolması nə vaxtdan və neçə ildir?", ["2023-cü ildən 6 il", "2024-cü ildən 5 il", "2025-ci ildən 5 il", "2024-cü ildən 3 il"], "2024-cü ildən 5 il", "2024-cü il yanvarın 1-dən 5 il."),
    Q("106.1.18", "Elm-təhsil-səhiyyəyə mənfəətin 15%-lik köçürməsi nağd da ola bilər?", B, "Xeyr", "Yalnız nağdsız ödənilən xərclər."),
    Q("106.1.18", "Dövlətin adından yaradılan publik hüquqi şəxs də mənfəətinin 15%-ni bu qayda ilə azad köçürə bilər?", B, "Xeyr", "Publik hüquqi şəxslər bu azadolmadan çıxarılıb."),
    Q("106.1.18", "Mənfəətin 20%-ni məktəbə nağdsız köçürsə, hamısı azaddır?", B, "Xeyr", "Ən çoxu 15% azad ola bilər."),
    Q("106.1.18", "Köçürmə dövlətin müəyyən etdiyi meyarlara cavab verən elm, təhsil, səhiyyə, idman, mədəniyyət müəssisəsinə və ya təsdiq olunmuş sosial fonda olmalıdır?", B, "Bəli", "Meyar və ya təsdiq olunmuş fond siyahısı."),

    Q("106.1.19", "Azı 3 il mülkiyyətdə saxlanılan səhm və ya payın satışından gəlirin neçə faizi azaddır?", ["25%", "50%", "75%", "100%"], "50%", "Gəlirin 50 faizi. İnvestisiya təşviqi də 50%-dir, amma o mənfəətə aiddir."),
    Q("106.1.19", "Səhm 2 il saxlanılıbsa, satışından 50% azadolma düşür?", B, "Xeyr", "Azı 3 il mülkiyyətdə olmalıdır."),
    Q("106.1.19", "İştirak payı da səhm kimi 3 illik 50% satış azadolmasına düşür?", B, "Bəli", "İştirak payı və ya səhm."),

    Q("106.1.20", "Mikro sahibkar hüquqi şəxsin sahibkarlıq mənfəətinin neçə faizi azaddır?", ["50%", "75%", "90%", "100%"], "75%", "75%. İnvestisiya 50%, film 90%."),
    Q("106.1.20", "Mikro hüquqi şəxsin 75%-i üçün orta aylıq muzdlu işçi sayı ən azı neçə nəfər olmalıdır?", ["1", "2", "3", "5"], "3", "3 nəfərdən az olmamalıdır."),
    Q("106.1.20", "Sosial sığorta borcu olsa da mikro hüquqi şəxsə 75% düşür?", B, "Xeyr", "Məcburi dövlət sosial sığorta borcu olmamalıdır."),
    Q("106.1.20", "Mikro hüquqi şəxsdə orta aylıq işçi sayı necə hesablanır?", ["İlin sonundakı say", "Ən çox olduğu ay", "İl ərzində sayların cəmi 12-yə bölünür", "Yalnız tam ştat"], "İl ərzində sayların cəmi 12-yə bölünür", "Cəmlənib 12-yə bölünür."),
    Q("106.1.20", "Şərt ödənməyib növbəti il mikro kateqoriyadan çıxanda əvvəlki mikro illər necə nəzərə alınır?", ["Güzəşt tam itirilir", "Əvvəlki 3 ilin ödənilmiş mənfəət vergisinin 75%-i çıxılır", "Yalnız son il", "Cərimə hesablanır"], "Əvvəlki 3 ilin ödənilmiş mənfəət vergisinin 75%-i çıxılır", "Keçid ilində əvvəlki 3 mikro ilin 75%-i çıxılır."),
    Q("106.1.20", "Əmtəəsiz əməliyyatlardan gəlirə də mikro 75% düşür?", B, "Xeyr", "Əmtəəsiz əməliyyat gəlirlərinə şamil edilmir."),
    Q("106.1.20", "Mikro hüquqi şəxsin 2 işçisi varsa, 75% düşür?", B, "Xeyr", "Ən azı 3 muzdlu işçi."),

    Q("106.1.21", "KOB klaster şirkətinin mənfəəti neçə il azaddır?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Reyestrə düşdüyü tarixdən 7 il. İştirakçı isə yalnız kapital xərcinə yönələn hissəni alır."),
    Q("106.1.21", "KOB klaster şirkətinin 7 ili nə vaxtdan sayılır?", ["Park qeydiyyatından", "KOB klaster reyestrinə daxil edildiyi tarixdən", "İlk müqavilədən", "Sənədin alındığı ildən"], "KOB klaster reyestrinə daxil edildiyi tarixdən", "Reyestr tarixi."),
    Q("106.1.21", "KOB klaster şirkətinin bütün mənfəəti 7 il azaddır?", B, "Bəli", "Şirkətin mənfəəti. İştirakçıda isə yalnız kapital hissəsi."),
    Q("106.1.22", "KOB klaster iştirakçısı hüquqi şəxsin klaster şirkətinə verdiyi mal/iş/xidmət mənfəətinin hansı hissəsi azaddır?", ["Tam mənfəət", "Mənfəətin 50%-i", "Kapital xərclərinə yönələn hissə", "Mənfəətin 75%-i"], "Kapital xərclərinə yönələn hissə", "Yalnız kapital xərclərinə yönəldilən hissə, 7 il."),
    Q("106.1.22", "KOB klaster iştirakçısının kapital xərcinə yönələn mənfəət azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "7 il. Şirkətin tam mənfəəti də 7 ildir, amma dairə fərqlidir."),
    Q("106.1.22", "KOB klaster iştirakçısı üçün müqavilə klaster şirkəti ilə bağlanmalıdır?", B, "Bəli", "Klaster şirkəti ilə müqavilə şərtdir."),
    Q("106.1.21", "KOB klaster şirkəti: tam mənfəət 7 il. İştirakçı: yalnız kapital xərcinə yönələn hissə 7 il. Bu fikir:", D, "Düzgündür", "Şirkət və iştirakçı eyni müddət, fərqli əhatə."),

    Q("106.1.23", "Mikro və ya kiçik hüquqi şəxs startapın innovasiya mənfəəti şəhadətnamədən neçə il azaddır?", ["1 il", "3 il", "7 il", "10 il"], "3 il", "Şəhadətnamə tarixindən 3 il. Park 10, investisiya 7."),
    Q("106.1.23", "Startap azadolması üçün hüquqi şəxs mikro və ya kiçik olmalıdır?", B, "Bəli", "Mikro və ya kiçik + hüquqi şəxs."),
    Q("106.1.23", "Startapın istənilən mənfəəti (innovasiya olmasa da) 3 il azaddır?", B, "Xeyr", "Yalnız innovasiya fəaliyyətindən mənfəət."),

    Q("106.1.24", "Haqqı ödənilən ictimai işlərin təşkili ilə bağlı fəaliyyətdən gəlir azaddır?", B, "Bəli", "Məşğulluq qanunu üzrə təşkilatçının gəliri."),

    Q("106.1.28", "Formula 1 və Formula 2 hüquqları üzrə qeyri-rezidentə ödənilən royalti nə vaxtdan və neçə il azaddır?", ["2018-ci ildən 9 il", "2020-ci ildən 7 il", "2023-cü ildən 6 il", "2018-ci ildən 5 il"], "2018-ci ildən 9 il", "2018-ci il yanvarın 1-dən 9 il. Müqavilə həmin qurumla olmalıdır."),
    Q("106.1.28", "Formula royaltisi yalnız müvafiq qurumla bağlanmış müqavilə əsasında qeyri-rezident hüquqi şəxsə ödəniləndə azaddır?", B, "Bəli", "Qurum + müqavilə + qeyri-rezident."),
    Q("106.1.28", "Formula royaltisini rezident şirkətə ödəmək də eyni 9 illik qaydaya düşür?", B, "Xeyr", "Qeyri-rezident hüquqi şəxsə ödənilən royalti."),

    Q("106.1.29", "Lotereya biletini agent qaydasında satmaqdan xidmət gəliri azaddır?", B, "Bəli", "Satıcı ilə müqavilə və ya tapşırıq əsasında."),
    Q("106.1.29", "Lotereya biletini öz hesabına alıb satanın ticarət gəliri də agent xidməti kimi azaddır?", B, "Xeyr", "Yalnız agent qaydasında xidmət."),

    Q("106.1.30", "Vəkilin və vəkil qurumunun order markası üçün Kollegiyaya ödənişi azaddır?", B, "Bəli", "Order markası ödənişi."),

    Q("106.1.31", "İdxalı əvəz edən qida istehsalı ilə məşğul hüquqi şəxsin həmin mənfəətinin neçə faizi azaddır?", ["25%", "50%", "75%", "90%"], "50%", "50%, siyahının təsdiq edildiyi ildən 7 il. İnvestisiya təşviqi də 50% və 7 ildir."),
    Q("106.1.31", "İdxalı əvəz edən qida istehsalının 50% azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Siyahının təsdiq edildiyi ildən 7 il."),
    Q("106.1.31", "Qida istehsalı 50%-inin 7 ili siyahının təsdiq edildiyi ildən başlayır?", B, "Bəli", "Siyahı ili. İnvestisiya təşviqində isə sənədin alındığı tarix."),

    Q("106.1.32", "Audiovizual olmayan (qəzet, sayt) media subyektinin fəaliyyət və reklam gəliri nə vaxtdan və neçə il azaddır?", ["2023-cü ildən 4 il", "2023-cü ildən 6 il", "2025-ci ildən 5 il", "2023-cü ildən 10 il"], "2023-cü ildən 6 il", "2023-cü il yanvarın 1-dən 6 il. Televiziya düşmür. Film 90% isə 2025-dən 5 ildir."),
    Q("106.1.32", "Televiziya və radio kimi audiovizual media da qəzet-sayt media azadolmasına düşür?", B, "Xeyr", "Audiovizual media subyektləri istisnadır."),
    Q("106.1.32", "Qeyri-audiovizual mediaya dövlətin verdiyi maddi yardım da 6 illik azadolmaya düşür?", B, "Bəli", "Maddi yardımlar da daxildir."),

    Q("106.1.33", "Qeydiyyatlı teatr, muzey, simfonik orkestr, kinematoqrafiya müəssisəsi və film prodüserinin həmin fəaliyyətdən mənfəətinin neçə faizi azaddır?", ["50%", "75%", "90%", "100%"], "90%", "90%, 2025-ci ildən 5 il. Media gəliri isə tam və 2023-dən 6 ildir."),
    Q("106.1.33", "Teatr-muzey-film 90% azadolması nə vaxtdan və neçə ildir?", ["2023-cü ildən 6 il", "2025-ci ildən 5 il", "2025-ci ildən 7 il", "2024-cü ildən 5 il"], "2025-ci ildən 5 il", "2025-ci il yanvarın 1-dən 5 il."),
    Q("106.1.33", "Film dublyajı da 90%-lik kinematoqrafiya azadolmasına düşür?", B, "Bəli", "İstehsal və dublyaj."),
    Q("106.1.33", "Teatr-film 90% azadolması üçün kinematoqrafiya müəssisəsi Azərbaycanda qanuni qeydiyyatda olmalıdır?", B, "Bəli", "Qanunla qeydiyyatdan keçən müəssisə."),
    Q("106.1.32", "Media reklam gəliri 2023-dən 6 il (tam), teatr-film mənfəəti 2025-dən 5 il (90%). Bu fikir:", D, "Düzgündür", "Faiz, tarix və dairə fərqlidir."),

    Q("106.1.34", "İctimai iaşə və tibb müəssisəsinin ƏDV-nin azaldılmasından gəliri azaddır?", B, "Bəli", "ƏDV məbləğinin azaldılmasından yaranan gəlir."),
    Q("106.1.34", "ƏDV-nin azaldılmasından gəlir yalnız iaşəyə aiddir, tibb müəssisəsinə yox?", B, "Xeyr", "Həm iaşə, həm tibb müəssisələri."),

    Q("106.1.35", "Dövlət-özəl tərəfdaşlıq və bərpa olunan enerji layihəsi mənfəəti ən çoxu neçə il azad ola bilər?", ["10 il", "15 il", "20 il", "30 il"], "30 il", "Tikinti dövrü daxil, 30 ildən çox olmaz."),
    Q("106.1.35", "DÖT/enerji 30 illik yuxarı həddə tikinti dövrü daxildir?", B, "Bəli", "Tikinti dövrü də daxil."),
    Q("106.1.35", "DÖT/enerji müddəti müqavilə ilə müəyyən olunur, amma 30 ili keçə bilməz?", B, "Bəli", "Müqavilə müddəti, maksimum 30 il."),
    Q("106.1.35", "DÖT-də özəl tərəfdaş və ya layihə şirkəti olan hüquqi şəxsin həmin layihə mənfəəti bu qaydaya düşür?", B, "Bəli", "Özəl tərəfdaş və ya layihə şirkəti."),

    Q("106.1.36", "Sosial sığorta və işsizlik sığortası qanunları üzrə sərbəst vəsaitin investisiyasından gəlir azaddır?", B, "Bəli", "Sərbəst vəsaitlərin investisiyaya yönəldilməsindən gəlir."),

    Q("106.2", "Əlilliyi olan şəxslərin QHT-sinə məxsus istehsal müəssisəsində işçilərin azı 50 faizi əlil olduqda mənfəət vergisi necə dəyişir?", ["Tam azad olunur", "Dərəcə 50% azaldılır", "Mənfəətin 50%-i azaddır", "Dərəcə 75% azaldılır"], "Dərəcə 50% azaldılır", "Bu tam azadolma deyil — dərəcə yarıya enir."),
    Q("106.2", "Əlil QHT istehsal müəssisəsində işçilərin 40 faizi əlildirsə, dərəcə 50% azalır?", B, "Xeyr", "Ən azı 50% əlil işçi lazımdır."),
    Q("106.2", "Əlil QHT istehsal müəssisəsində 50%-lik əlil işçi sayına əvəzçilik, podrat və mülki-hüquqi müqavilə ilə işləyən əlillər daxil edilir?", B, "Xeyr", "Əvəzçilik, podrat və mülki-hüquqi müqavilə üzrə işləyənlər orta siyahıya düşmür."),
    Q("106.2", "Əlil QHT müəssisəsinin mənfəəti park rezidenti kimi 10 il tam azaddır?", B, "Xeyr", "Burada yalnız dərəcə 50% azalır, tam azadolma yoxdur."),

    Q("106.10", "ƏDV-yə düşməyən, dövriyyəsi 200000-ədək, uçot aparan rezident müəssisənin hüquqi təsisçi və səhmdarının dividendi azaddır?", B, "Bəli", "Hüquqi şəxs təsisçi, payçı və ya səhmdar. Fiziki şəxs bu qaydanın gəlir vergisi cütüdür."),
    Q("106.10", "Dövriyyəsi 200000-ədək kiçik müəssisənin hüquqi səhmdar dividendi üçün şirkət ƏDV-yə qeydiyyatda olmalıdır?", B, "Xeyr", "Əksinə: ƏDV məqsədilə qeydiyyata alınmamalıdır."),
    Q("106.10", "Kiçik müəssisə dividendi üçün əməliyyat həcmi ardıcıl 12 ayın istənilən ayında ən çoxu nə qədər ola bilər?", ["45000 manat", "100000 manat", "200000 manat", "300000 manat"], "200000 manat", "200.000 manatadək. 15%-lik köçürmə ilə qarışdırma."),
    Q("106.10", "Kiçik müəssisə dividendi üçün gəlir və xərc uçotu aparılmalıdır?", B, "Bəli", "Uçot şərtdir."),
    Q("106.10", "ƏDV-yə düşən və dövriyyəsi 250000 olan şirkətin hüquqi səhmdarının dividendi bu qayda ilə azaddır?", B, "Xeyr", "ƏDV-də olmamalı və 200000-i keçməməlidir."),

    Q("106.1.12", "Park operatoru: yalnız infrastruktura yönələn hissə. Park rezidenti: park fəaliyyəti 10 il. Bu fikir:", D, "Düzgündür", "Operator və rezident fərqli əhatə."),
    Q("106.1.17", "İnvestisiya təşviqi 50% və 7 il, mikro hüquqi şəxs 75% və 3 işçi, startap 3 il innovasiya. Bu fikir:", D, "Düzgündür", "Faiz, müddət və şərt fərqlidir."),
    Q("106.1.31", "Qida idxalını əvəz edən istehsal 50% və 7 il, investisiya təşviqi də 50% və 7 ildir. Fərq nədədir?", ["Qidada müddət siyahının təsdiq ilindən, təşviqdə sənədin alındığı tarixdən", "Heç bir fərq yoxdur", "Qida 10 ildir", "Təşviq yalnız fiziki şəxsə aiddir"], "Qidada müddət siyahının təsdiq ilindən, təşviqdə sənədin alındığı tarixdən", "Eyni faiz, fərqli başlanğıc."),
    Q("106.1.7", "Təhsil müəssisəsinin mənfəəti azaddır, xeyriyyə təşkilatının sahibkarlığı isə azad deyil. Bu fikir:", D, "Düzgündür", "Təhsildə dividend istisnadır, xeyriyyədə sahibkarlıq."),
    Q("106.1.18", "Mənfəətin 15%-ni məktəbə nağd verdilər. Azaddır?", B, "Xeyr", "Yalnız nağdsız."),
    Q("106.1.13-2", "Sənaye parkının xüsusi fəaliyyəti 2025-dən 6 il, ümumi park rezidenti qeydiyyatdan 10 ildir. Bu fikir:", D, "Düzgündür", "Xüsusi fəaliyyət ayrıca, daha qısa və sabit tarixdən."),
    Q("106.1.14-1", "KT hüquqi şəxsin istehsal mənfəəti 13 il, eyni şirkətin subsidiyası 4 ildir. Bu fikir:", D, "Düzgündür", "İstehsal mənfəəti uzun, subsidiya-dividend qısa."),
    Q("106.2", "Əlil QHT müəssisəsində dərəcə yarıya enir, mikro hüquqi şəxsdə isə mənfəətin 75%-i azaddır. Bu fikir:", D, "Düzgündür", "Biri dərəcə endirimi, biri mənfəətin hissəsi."),
    Q("106.1.4", "Dövlət orqanının faiz və dividend gəliri tutulur, əsas büdcə gəliri isə azad ola bilər. Bu fikir:", D, "Düzgündür", "Faiz və dividend istisnadır."),
    Q("106.1.5", "Mərkəzi Bank, Neft Fondu, Əmanət Sığortası Fondu və İcbari Sığorta Bürosu — dördünün də gəliri azaddır. Bu fikir:", D, "Düzgündür", "Hamısı eyni siyahıdadır."),
    Q("106.1.9", "Ana şirkət ilə 100% rezident törəmə arasında əvəzsiz aktiv ötürülməsi azad ola bilər, 60%-lik törəməyə yox. Bu fikir:", D, "Düzgündür", "Tam mülkiyyət və rezidentlik şərtdir."),
    Q("106.1.23", "Startap 3 il yalnız innovasiya mənfəətinə, park rezidenti 10 il park fəaliyyətinə. Bu fikir:", D, "Düzgündür", "Müddət və dairə fərqlidir."),
    Q("106.1.35", "DÖT mənfəəti müqavilə müddətinə, amma tikinti daxil 30 ildən çox ola bilməz. Bu fikir:", D, "Düzgündür", "Müqavilə + tavan 30 il."),
    Q("106.1.1", "Bunlardan hansı azaddır?", ["Xeyriyyə təşkilatının ianəsi", "Xeyriyyə təşkilatının kafe mənfəəti", "Qeyri-kommersiyanın mağaza satışı", "Dövlət orqanının faiz gəliri"], "Xeyriyyə təşkilatının ianəsi", "Sahibkarlıq, satış və faiz çıxır."),
    Q("106.1.13", "Bunlardan hansı 10 ildir?", ["Park rezidentinin park fəaliyyəti", "Sənaye parkının xüsusi fəaliyyəti (2025-dən)", "KT istehsal mənfəəti", "Startap innovasiyası"], "Park rezidentinin park fəaliyyəti", "Xüsusi fəaliyyət 6 il, KT 13 il, startap 3 il."),
    Q("106.1.21", "Bunlardan hansı doğrudur?", ["KOB klaster şirkətinin bütün mənfəəti 7 il azad ola bilər", "KOB klaster şirkəti yalnız 50% alır", "İştirakçı da bütün mənfəəti alır", "Hər ikisi 10 ildir"], "KOB klaster şirkətinin bütün mənfəəti 7 il azad ola bilər", "İştirakçı yalnız kapital hissəsini alır."),
    Q("106.1.33", "Bunlardan hansı doğrudur?", ["Film-teatr mənfəətinin 90%-i 2025-dən 5 il azad ola bilər", "Film tam azaddır 2023-dən 6 il", "Televiziya da 90%-ə düşür", "Prodüser düşmür"], "Film-teatr mənfəətinin 90%-i 2025-dən 5 il azad ola bilər", "Media 6 il tam, audiovizual media isə o qaydaya düşmür."),
    Q("106.1.18", "Bunlardan hansı azaddır?", ["Mənfəətin 12%-nin məktəbə nağdsız köçürülməsi (2024-dən 5 il, publik hüquqi şəxs deyil)", "Mənfəətin 20%-nin nağd köçürülməsi", "Publik hüquqi şəxsin 15%-lik köçürməsi", "Nağd ianə"], "Mənfəətin 12%-nin məktəbə nağdsız köçürülməsi (2024-dən 5 il, publik hüquqi şəxs deyil)", "Nağdsız, 15%-ədək, publik hüquqi şəxs yox."),
    Q("106.1.7", "Təhsil müəssisəsi mənfəətinin hamısını dividendlərə yönəldirsə, azadolma qalır?", B, "Xeyr", "Dividendlərə gedən hissə tutulur. Hamısı dividenddirsə, azadolma qalmır."),
    Q("106.1.20", "Mikro hüquqi şəxs 75% (3 işçi, borcsuz), əlil QHT müəssisəsi isə dərəcəni 50% azaldır. Bu fikir:", D, "Düzgündür", "Biri hissə, biri dərəcə."),
    Q("106.10", "Kiçik müəssisə dividendi 200000 və ƏDV-siz şərtə bağlıdır, KT hüquqi iştirakçı dividendi isə 2023-dən 4 ildir. Bu fikir:", D, "Düzgündür", "İki ayrı dividend qaydası.")
  ];
})(typeof window !== "undefined" ? window : globalThis);
