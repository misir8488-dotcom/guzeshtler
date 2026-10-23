(function (g) {
  function Q(itemId, q, options, answer, explain) {
    return { itemId: itemId, q: q, options: options, answer: answer, explain: explain || "" };
  }
  var B = ["Bəli", "Xeyr"];
  var D = ["Düzgündür", "Səhvdir"];
  g.Q102 = [
    Q("102.1.1", "Konsulluqda işləyən və Azərbaycan vətəndaşı olmayan işçinin əməkhaqqı gəlir vergisindən azaddır?", B, "Bəli", "Vətəndaş olmayan konsulluq işçisinin əməkhaqqı azaddır."),
    Q("102.1.1", "Diplomatik müavinət, kompensasiya və aylıq əlavə gəlir vergisindən azaddır?", B, "Bəli", "Diplomatik xidmət üzrə bu ödənişlər azaddır."),
    Q("102.1.1", "Xaricdəki nümayəndəyə ödənilən dövlət məvacibi də diplomatik azadolmaya düşür?", B, "Xeyr", "Dövlət məvacibi istisnadır, azad deyil."),
    Q("102.1.1", "Xaricdəki nümayəndəyə qaydaya uyğun ödənilən bütün növ ödənişlər (dövlət məvacibi çıxılmaqla) azaddır?", B, "Bəli", "Məvacib çıxılır, qalan qaydaya uyğun ödənişlər azaddır."),

    Q("102.1.2", "Qeyri-rezidentin Azərbaycandakı iş yerindən gəliri həmişə gəlir vergisindən azaddır?", B, "Xeyr", "İki şərt lazımdır: ödəyən də qeyri-rezident olsun və daimi nümayəndəliklə bağlı olmasın."),
    Q("102.1.2", "Qeyri-rezident işəgötürən ödəyir və daimi nümayəndəliklə bağlı deyil. Qeyri-rezident işçinin əməkhaqqı azaddır?", B, "Bəli", "Bu iki şərt birlikdə olanda azaddır."),
    Q("102.1.2", "Qeyri-rezidentin daimi nümayəndəliyi adından ödənilən əməkhaqqı da azaddır?", B, "Xeyr", "Daimi nümayəndəliklə bağlı ödəniş bu azadolmaya düşmür."),

    Q("102.1.3.1", "Ailə üzvü olmayan şəxsdən alınan hədiyyənin gəlir vergisindən azad hissəsi nə qədərdir?", ["200 manatadək", "2500 manatadək", "10000 manatadək", "20000 manatadək"], "2500 manatadək", "Hədiyyə 2500 manatadək. Miras 20000-dir, qarışdırma."),
    Q("102.1.3.1", "Təhsil haqqı üçün maddi yardımın (sənəd olanda) azad hissəsi nə qədərdir?", ["2500 manatadək", "10000 manatadək", "20000 manatadək", "50000 manatadək"], "2500 manatadək", "Təhsil yardımı hədiyyə ilə eyni: 2500."),
    Q("102.1.3.1", "Ailə üzvü olmayan şəxsdən alınan mirasın azad hissəsi nə qədərdir?", ["2500 manatadək", "10000 manatadək", "20000 manatadək", "50000 manatadək"], "20000 manatadək", "Miras 20000. Hədiyyə isə 2500."),
    Q("102.1.3.1", "Ölkə daxilində müalicə (cərrahiyyə də daxil) üçün maddi yardımın azad həddi nə qədərdir?", ["2500 manatadək", "10000 manatadək", "20000 manatadək", "50000 manatadək"], "10000 manatadək", "Daxili müalicə 10000. Xarici 50000."),
    Q("102.1.3.1", "Xaricdə müalicə (cərrahiyyə də daxil) üçün maddi yardımın azad həddi nə qədərdir?", ["10000 manatadək", "20000 manatadək", "50000 manatadək", "Tam məbləğ"], "50000 manatadək", "Xarici müalicə 50000. Daxili 10000."),
    Q("102.1.3.1", "Təhsil və ya müalicə yardımı sənədsiz də azad olunur?", B, "Xeyr", "Təyinatı üzrə ödənildiyini göstərən sənəd lazımdır."),
    Q("102.1.3.1", "3 000 manatlıq hədiyyənin hamısı azaddır?", B, "Xeyr", "Yalnız 2500 manatadək hissə azaddır."),
    Q("102.1.3.1", "Birdəfəlik müavinətin təhsil üçün azad həddi hədiyyə ilə eynidir (2500)?", B, "Bəli", "Hədiyyə, təhsil yardımı və birdəfəlik müavinət 2500 manatadək."),
    Q("102.1.3.1", "Hədiyyə 2500, miras 20000, daxili müalicə 10000, xarici müalicə 50000. Bu sıra:", D, "Düzgündür", "Dörd fərqli hədd. Qarışdırma."),
    Q("102.1.3.1", "Xaricdə müalicə yardımı da daxili müalicə kimi 10000 manatadək azaddır?", B, "Xeyr", "Xarici müalicə 50000-ə qədərdir."),

    Q("102.1.3.2", "Atadan alınan 30 000 manatlıq mirasın hamısı azaddır, yoxsa yalnız 20 000-i?", ["Hamısı azaddır", "Yalnız 20000 manatı", "Yalnız 2500 manatı", "Heç nə azad deyil"], "Hamısı azaddır", "Ailə üzvündən olanda hədd yoxdur, tam dəyər azaddır."),
    Q("102.1.3.2", "Ailə üzvündən alınan hədiyyə, maddi yardım və mirasın tam dəyəri azaddır?", B, "Bəli", "Ailə üzvündən olanda 2500/20000 həddi işləmir."),
    Q("102.1.3.2", "Qonşudan alınan miras da ata-anadan alınan kimi tam azaddır?", B, "Xeyr", "Qonşu ailə üzvü deyil, 20000 həddi qalır."),

    Q("102.1.3.3", "Şəhid ailəsinin aldığı maddi yardımın azad hissəsi nə qədərdir?", ["2500 manatadək", "8000 manatadək", "20000 manatadək", "Tam məbləğ"], "20000 manatadək", "Şəhid ailəsinin yardımı 20000-ə qədər. Əməkhaqqı güzəşti isə 800 manatdır — qarışdırma."),
    Q("102.1.3.3", "Şəhid ailəsinin 15 000 manatlıq maddi yardımı tam azaddır?", B, "Bəli", "20000-dən kiçik olduğu üçün hamısı azaddır."),
    Q("102.1.3.3", "Şəhid ailəsinin maddi yardımı 20000, şəhidin valideyninin əməkhaqqı güzəşti isə 800 manatdır. Bu fikir:", D, "Düzgündür", "Yardım ayrı, əməkhaqqından çıxılma ayrı."),

    Q("102.1.3.4", "Ərazi bütövlüyü uğrunda hərbi əməliyyatdan əlil olmuş şəxsin maddi yardımının azad həddi nə qədərdir?", ["800 manat", "10000 manat", "20000 manatadək", "50000 manat"], "20000 manatadək", "Həm hərbi qulluqçuya, həm mülki şəxsə 20000."),
    Q("102.1.3.4", "Ərazi bütövlüyü uğrunda hərbi əməliyyatdan əlillik üçün 20000 manatlıq yardım yalnız hərbi qulluqçuya aiddir, mülki şəxsə yox?", B, "Xeyr", "Hərbi qulluqçu və mülki şəxsə də şamil edilir."),
    Q("102.1.3.4", "Mülki şəxsə bu 20000 manatlıq yardım üçün əlilliyin hərbi əməliyyatdan olduğunu göstərən arayış lazımdır?", B, "Bəli", "Mülki şəxs arayış təqdim etməlidir."),

    Q("102.1.4", "Dövlət pensiyası gəlir vergisindən azaddır?", B, "Bəli", "Dövlət pensiyaları azaddır."),
    Q("102.1.4", "Dövlət təqaüdü gəlir vergisindən azaddır?", B, "Bəli", "Dövlət təqaüdləri azaddır."),
    Q("102.1.4", "Əmək qabiliyyətinin müvəqqəti itirilməsinə görə müavinət də dövlət pensiyası kimi azaddır?", B, "Xeyr", "Müvəqqəti əmək qabiliyyəti itirmə müavinəti istisnadır."),
    Q("102.1.4", "Ştat ixtisarı ilə işdən çıxanda Əmək Məcəlləsinə görə ödənilən təminat azaddır?", B, "Bəli", "İxtisar və ləğvetmə təminatları azaddır."),
    Q("102.1.4", "İşçi vəfat edəndə vərəsələrə ödənilən Əmək Məcəlləsi təminatı azaddır?", B, "Bəli", "Vərəsələrə belə təminat azaddır."),
    Q("102.1.4", "Büdcədən qanun və qərar əsasında fərdi birdəfəlik ödəmə və ya maddi yardım azaddır?", B, "Bəli", "Büdcə vəsaiti hesabına belə ödəmələr azaddır."),

    Q("102.1.5", "Aliment gəlir vergisindən azaddır?", B, "Bəli", "Alimentlər azaddır."),
    Q("102.1.5", "Alimentin yalnız 2500 manatadək hissəsi azaddır?", B, "Xeyr", "Aliment tam azaddır, hədd yoxdur."),

    Q("102.1.6", "Əsas iş yerində aylıq muzdlu gəlir 2500 manatadəkdirsə, gəlirdən çıxılan məbləğ nə qədərdir?", ["50 manat", "100 manat", "200 manat", "400 manat"], "200 manat", "Aylıq 2500-ədək olanda 200 manat. Bu, əlillik 200 manatı deyil."),
    Q("102.1.6", "Əsas iş yerində illik muzdlu gəlir 30000 manatadəkdirsə, çıxılan məbləğ nə qədərdir?", ["200 manat", "2400 manat", "2500 manat", "30000 manat"], "2400 manat", "200 × 12 = 2400. İllik ifadə."),
    Q("102.1.6", "Əsas iş yerindəki bu 200 manat çıxılma əlavə iş yerində də tətbiq olunur?", B, "Xeyr", "Yalnız əsas iş yerində muzdlu gəlirə."),
    Q("102.1.6", "Aylıq muzdlu gəlir 2600 manatdırsa, 2500-ədək olan 200 manatlıq çıxılma düşür?", B, "Xeyr", "Aylıq gəlir 2500 manatadək olmalıdır."),
    Q("102.1.6", "200 manat (aylıq) və 2400 manat (illik) eyni çıxılmanın iki ifadəsidir?", B, "Bəli", "200 × 12 = 2400."),
    Q("102.1.6", "Əsas iş yerində gəlir 2500-ədək olanda 200 manat çıxılır. 61–100% əlillikdə də aylıq 200 manat çıxılır. Bunlar eyni güzəştdir?", B, "Xeyr", "Biri gəlir həddinə görə, biri əlillik statusuna görə. Toplanmır, ayrı qaydalar."),

    Q("102.1.7", "Adi daşınan əmlakı (məsələn, köhnə mebel) satmaqdan gəlir, bir qayda olaraq, azaddır?", B, "Bəli", "Bir sıra istisnalarla daşınan əmlakın satışı azaddır."),
    Q("102.1.7", "Qızıl üzük və ya qiymətli daş satmaqdan gəlir də adi mebel kimi azaddır?", B, "Xeyr", "Qiymətli daş, metal və onların məmulatı istisnadır."),
    Q("102.1.7", "Rəsm və əntiq əşya satmaqdan gəlir daşınan əmlak azadolmasına düşür?", B, "Xeyr", "İncəsənət əsəri və əntiq əşya istisnadır."),
    Q("102.1.7", "Sahibkarlıqda istifadə etdiyi avadanlığı satan şəxsin bu gəliri azaddır?", B, "Xeyr", "Sahibkarlıqda istifadə olunan və ya olunmuş əmlak istisnadır."),
    Q("102.1.7", "Fermer öz istehsalı kənd təsərrüfatı məhsulunu satır. Daşınan əmlak istisnaları buna mane olur?", B, "Xeyr", "Fermerin öz məhsulu həmin istisnalardan çıxarılıb, azadolma qalır."),

    Q("102.1.8", "Sığorta hadisəsində həyat və əmlaka dəymiş zərərin əvəzi (pul və ya natura) azaddır?", B, "Bəli", "Zərər əvəzi azaddır."),
    Q("102.1.8", "İşəgötürənin ödədiyi icbari sığorta haqqı işçinin gəlirindən azaddır?", B, "Bəli", "Bütün növ icbari sığorta haqları."),
    Q("102.1.8", "İşəgötürənin ödədiyi könüllü tibbi sığorta haqqı da azaddır?", B, "Bəli", "Könüllü tibbi sığorta da daxildir."),
    Q("102.1.8", "Həyatın yığım və pensiya sığortasında işəgötürənin haqqının azad olması üçün müqavilə ən azı neçə il olmalıdır?", ["1 il", "2 il", "3 il", "5 il"], "3 il", "Müqavilə 3 ildən az olmamalıdır."),
    Q("102.1.8", "Qeyri-dövlət işəgötürən yığım/pensiya sığortası haqqını gəlirin ən çoxu neçə faizindən ödəyə bilər ki, azad olsun?", ["10%", "25%", "50%", "75%"], "50%", "Vergiyə cəlb olunan gəlirin 50%-dən çox olmayan hissəsindən."),
    Q("102.1.8", "Yığım və pensiya sığortası üzrə sığorta olunana ödəniş müqavilə qüvvəyə mindikdən neçə il sonra azaddır?", ["1 il", "2 il", "3 il", "5 il"], "3 il", "3 il keçəndən sonra ödənilən məbləğlər azaddır."),
    Q("102.1.8", "Yığım sığortası müqaviləsi 2 illikdirsə, işəgötürənin haqqı bu qayda ilə azaddır?", B, "Xeyr", "Ən azı 3 illik müqavilə lazımdır."),

    Q("102.1.10", "Dəymiş zərərin ödənilməsi ilə bağlı kompensasiya azaddır?", B, "Bəli", "Zərər kompensasiyası azaddır."),
    Q("102.1.10", "Zərər kompensasiyasının yalnız 2500 manatadək hissəsi azaddır?", B, "Xeyr", "Burada məbləğ həddi yoxdur."),

    Q("102.1.11", "Fermerin kənd təsərrüfatı məhsulunun birbaşa istehsalından gəliri azaddır?", B, "Bəli", "Sənaye üsulu da daxil, istehsal gəliri azaddır."),
    Q("102.1.11", "Fermerin bu istehsal fəaliyyəti üzrə satışdankənar gəliri də azaddır?", B, "Bəli", "Satışdankənar gəlirlər də daxildir."),
    Q("102.1.11", "Kənd təsərrüfatı istehsalı ilə bağlı büdcədən subsidiya azaddır?", B, "Bəli", "Büdcə subsidiyaları azaddır."),
    Q("102.1.11", "Fermer başqasının pomidorunu alıb satır. Bu, öz istehsal gəliri kimi azaddır?", B, "Xeyr", "Yalnız birbaşa istehsaldan gəlir azaddır."),

    Q("102.1.11-1", "Kənd təsərrüfatı ilə məşğul rezident şirkətin fiziki iştirakçısının bu sahədən dividendi nə vaxtdan və neçə il azaddır?", ["2023-cü ildən 4 il", "2023-cü ildən 10 il", "2023-cü il fevralın 1-dən 5 il", "Müddətsiz"], "2023-cü ildən 4 il", "KT dividendi: 2023-cü il yanvarın 1-dən 4 il. Texnopark dividendi 10 ildir — qarışdırma."),
    Q("102.1.11-1", "Kənd təsərrüfatı şirkətinin fiziki iştirakçısının dividendi sənaye üsulu istehsala da düşür?", B, "Bəli", "Sənaye üsulu da daxildir."),
    Q("102.1.11-1", "Kənd təsərrüfatı dividendi 4 ildir. Texnoparkın parkdan kənar IT dividendi isə 10 il. Bu fikir:", D, "Düzgündür", "İki ayrı dividend, iki ayrı müddət."),

    Q("102.1.12", "Misgərlik, qalayçılıq, xalq musiqi aləti düzəltmək kimi sadalanan sənətkarlıq gəliri azaddır?", B, "Bəli", "Yalnız qanunda sadalanan sənətkarlıq sahələri."),
    Q("102.1.12", "Bədii tikmə və keramikanın bədii işlənməsi də bu sənətkarlıq siyahısındadır?", B, "Bəli", "Bədii tikmə və keramika da var."),
    Q("102.1.12", "Avtomobil təmiri də sənətkarlıq azadolmasına düşür?", B, "Xeyr", "Yalnız sadalanan sahələr. Avtomobil təmiri yoxdur."),

    Q("102.1.14.1", "Daimi yolda, səyyar və ya çöl işində ezamiyyə əvəzinə verilən əlavə vəsaitin qanuni məbləği azaddır?", B, "Bəli", "Qanunvericilikdə nəzərdə tutulan məbləğ."),
    Q("102.1.14.1", "Daimi yol, səyyar və çöl işindəki ezamiyyə əvəzi yalnız ofisdən ezamiyyətə gedən işçiyə aiddir?", B, "Xeyr", "Daimi yolda, səyyar işdə və çöl təşkilatında çalışanlara aiddir."),
    Q("102.1.14.2", "İcra hakimiyyəti qərarı ilə müəyyən edilən ezamiyyə xərci azaddır?", B, "Bəli", "Müəyyən edilmiş ezamiyyə məbləğləri."),
    Q("102.1.14.4", "Zərərli istehsalatda işəgötürənin ödədiyi tibbi müayinə xərci azaddır?", B, "Bəli", "Ağır, zərərli və təhlükəli istehsalatda qanuni müayinə."),
    Q("102.1.14.5", "Zərərli və yeraltı işdə pulsuz süd və müalicə-profilaktik yeməyin dəyəri azaddır?", B, "Bəli", "Yemək, süd və bərabər məhsullar."),
    Q("102.1.14.5", "Xüsusi geyim, ayaqqabı və fərdi mühafizə vasitəsinin dəyəri azaddır?", B, "Bəli", "Müəyyən müddət və çeşiddə verilənlər."),
    Q("102.1.14.6", "İstehsalatdan ayrılmaqla oxumağa göndərilən tələbə, magistr və doktorantın müəssisə təqaüdü azaddır?", B, "Bəli", "Müəssisənin ödədiyi belə təqaüd."),
    Q("102.1.14.6", "Tələbənin öz cibindən ödədiyi təhsil haqqı da müəssisə təqaüdü kimi azaddır?", B, "Xeyr", "Yalnız müəssisə və təşkilatın ödədiyi təqaüd."),
    Q("102.1.14.8", "Təbii fəlakət və fövqəladə hallarla bağlı icra qərarı əsasında birdəfəlik yardım azaddır?", B, "Bəli", "Dövlət qərarı və xarici yardım."),
    Q("102.1.14.8", "Xarici dövlətin göstərdiyi birdəfəlik fəlakət yardımı da azaddır?", B, "Bəli", "Xarici dövlət və digər təşkilatlar da daxil."),
    Q("102.1.14.9", "Donorun qana görə aldığı kompensasiya azaddır?", B, "Bəli", "Qana görə donor kompensasiyası."),
    Q("102.1.14.10", "Dalğıc işləri üçün pul mükafatı azaddır?", B, "Bəli", "Dalğıc mükafatı."),
    Q("102.1.14.13", "Xeyriyyə cəmiyyəti və fondunun maddi yardımı azaddır?", B, "Bəli", "İctimai təşkilat, xeyriyyə cəmiyyəti və fond."),
    Q("102.1.14.15", "Hərbi qulluqçunun vəzifə maaşı (vəzifə və rütbəyə görə) bu kompensasiya azadolmasına düşür?", B, "Xeyr", "Vəzifə və hərbi (xüsusi) rütbə maaşı istisnadır."),
    Q("102.1.14.15", "Hərbi qulluqçu, hakim, prokuror və xüsusi rütbəli hüquq mühafizə əməkdaşının maaşdan başqa ödənişləri azaddır?", B, "Bəli", "Vəzifə və rütbə maaşı çıxılmaqla bütün növ ödənişlər."),
    Q("102.1.14.15", "Kəşfiyyat və əməliyyat-axtarışa kömək edən şəxslərə ödənilən əməkhaqqı və mükafat azaddır?", B, "Bəli", "Onlara bütün növ əməkhaqqı, mükafat və maddi təminat."),
    Q("102.1.14.16", "Hərbi və ya alternativ xidmətə çağırışla bağlı işəgötürənin müavinətinin qanuni məbləği azaddır?", B, "Bəli", "Qanunvericilikdə nəzərdə tutulan məbləğ."),
    Q("102.1.14.33", "Xarici dəniz daşımalarında ticarət donanması heyətinin aylıq əlavə pul təminatının təsdiq edilmiş məbləği azaddır?", B, "Bəli", "Təsdiq edilən məbləğ həddində."),

    Q("102.1.15", "Yarış və müsabiqədə əşya şəklində alınan mükafatın tam dəyəri azaddır?", B, "Bəli", "Əşya mükafatı tam azaddır, hədd yoxdur."),
    Q("102.1.15", "Beynəlxalq qeyri-idman yarışında pul mükafatının azad həddi nə qədərdir?", ["200 manatadək", "4000 manatadək", "50000 manatadək", "Tam dəyər"], "4000 manatadək", "Beynəlxalq qeyri-idman: 4000. Yerli qeyri-idman: 200."),
    Q("102.1.15", "Respublika, şəhər və rayon qeyri-idman yarışında pul mükafatının azad həddi nə qədərdir?", ["200 manatadək", "4000 manatadək", "2500 manatadək", "50000 manatadək"], "200 manatadək", "Yerli qeyri-idman pul mükafatı 200."),
    Q("102.1.15", "Beynəlxalq idman yarışının təşkilatçısı və respublika federasiyasının verdiyi mükafatın tam dəyəri azaddır?", B, "Bəli", "Beynəlxalq və ölkələrarası idman mükafatı tam azaddır."),
    Q("102.1.15", "Ölkədaxili idmanda federasiya və klubun pul mükafatının azad həddi nə qədərdir?", ["4000 manatadək", "10000 manatadək", "20000 manatadək", "50000 manatadək"], "50000 manatadək", "Ölkədaxili idman pul mükafatı 50000."),
    Q("102.1.15", "Beynəlxalq qeyri-idman yarışının 5000 manatlıq pul mükafatının hamısı azaddır?", B, "Xeyr", "Qeyri-idman beynəlxalq pul yalnız 4000-ə qədər."),
    Q("102.1.15", "Beynəlxalq idman mükafatı tam azaddır, beynəlxalq qeyri-idman pul mükafatı isə 4000-ə qədər. Bu fikir:", D, "Düzgündür", "İdman və qeyri-idman fərqlidir."),

    Q("102.1.16", "Dövlət qulluqçusu pensiya yaşına görə öz arzusu ilə çıxanda birdəfəlik haqq azaddır?", B, "Bəli", "Pensiya yaşı və ya yaş həddinə görə çıxma."),
    Q("102.1.16", "Dövlət qulluğunun yaş həddinə görə işdən çıxmada pensiya çıxışı birdəfəlik haqqı da azaddır?", B, "Bəli", "Pensiya yaşı və yaş həddi — hər iki çıxma əsası."),
    Q("102.1.16", "Dövlət qulluqçusu intizam tənbehi ilə çıxarılsa da pensiya çıxışı haqqı azaddır?", B, "Xeyr", "Yalnız pensiya yaşı və ya yaş həddi əsası."),

    Q("102.1.17", "Təyinatla vəzifəyə qoyulan rəhbərin təmsilçilik üçün aylıq əlavə pul təminatı azaddır?", B, "Bəli", "Təmsilçilik xərci üçün vəzifə maaşına əlavə."),
    Q("102.1.17", "Təmsilçilik əlavəsi Mərkəzi Bank və publik hüquqi şəxs rəhbərlərinə də düşür?", B, "Bəli", "İcra hakimiyyəti, dövlət orqanı, MB və publik hüquqi şəxs rəhbərləri."),
    Q("102.1.17", "Rəhbərin təmsilçilik əlavəsi adi mükafat üçündür, təmsilçilik xərci üçün deyil?", B, "Xeyr", "Yalnız səlahiyyətin icrası ilə bağlı təmsilçilik xərci."),

    Q("102.1.18", "Dövlət ehtiyacı üçün torpaq alınmasına görə fiziki şəxsə kompensasiya azaddır?", B, "Bəli", "Həmin qanun üzrə kompensasiya tam azaddır."),
    Q("102.1.18", "Dövlət ehtiyacı üçün torpaq kompensasiyasının yalnız 50 faizi azaddır?", B, "Xeyr", "Kompensasiya tam azaddır."),

    Q("102.1.20", "Keçmiş Prezidentə ödənilən pensiya və müavinət azaddır?", B, "Bəli", "Pensiya, müavinət və digər ödənişlər."),
    Q("102.1.20", "Keçmiş Prezidentin ailə üzvlərinə ödənişlər də azaddır?", B, "Bəli", "Ailə üzvlərinə ödənişlər də."),

    Q("102.1.21", "Sənaye və ya texnopark rezidenti fiziki şəxsin parkdakı fəaliyyət gəliri neçə il azaddır?", ["3 il", "7 il", "10 il", "13 il"], "10 il", "Parkda qeydiyyat ilindən 10 il. Əməkhaqqı vergisi bu 10 ilə düşmür."),
    Q("102.1.21", "Park rezidentinin 10 illik gəlir azadolması nə vaxtdan sayılır?", ["Parkın yarandığı ildən", "Qeydiyyata alındığı hesabat ilindən", "İlk gəlir götürülən aydan", "Müqavilə imzalanan gündən"], "Qeydiyyata alındığı hesabat ilindən", "Parkda qeydiyyat ili."),
    Q("102.1.21", "Park rezidentinin əməkhaqqından tutulan gəlir vergisi də parkdakı 10 illik gəlir azadolmasına düşür?", B, "Xeyr", "Əməkhaqqından tutulan gəlir vergisi istisnadır."),
    Q("102.1.21", "Texnopark rezidentinin parkdan kənar proqram təminatı və sistem inteqrasiyası gəliri də 10 illik azadolmaya düşür?", B, "Bəli", "Parkdan kənar IT fəaliyyəti də daxildir."),
    Q("102.1.21", "Parkdan kənar IT üzrə alıcıya göstərilən texniki dəstək və təlim gəliri də 10 ilə düşür?", B, "Bəli", "Həmin fəaliyyətdən irəli gələn dəstək və təlim də."),

    Q("102.1.21-1", "Texnopark rezidentinin parkdan kənar IT fəaliyyəti üzrə ödədiyi dividend neçə il azaddır?", ["4 il", "5 il", "7 il", "10 il"], "10 il", "Qeydiyyat şəhadətnaməsinin alındığı ildən 10 il. KT dividendi isə 4 ildir."),
    Q("102.1.21-1", "Texnoparkın parkdan kənar IT dividendi şəhadətnamənin alındığı hesabat ilindən başlayır?", B, "Bəli", "Şəhadətnamə ili başlanğıcdır."),
    Q("102.1.21-1", "Texnopark IT dividendi 10 il, kənd təsərrüfatı şirkətinin fiziki iştirakçı dividendi 4 ildir. Bu fikir:", D, "Düzgündür", "İki ayrı dividend."),

    Q("102.1.22-1", "Kiçik müəssisənin fiziki təsisçisinin dividendi azad olsun deyə şirkət ƏDV-yə qeydiyyatda olmalıdır?", B, "Xeyr", "Əksinə: ƏDV məqsədilə qeydiyyata alınmamalıdır."),
    Q("102.1.22-1", "ƏDV-yə düşməyən kiçik müəssisənin fiziki təsisçi dividendi üçün əməliyyat həcmi ardıcıl 12 ayın istənilən ayında ən çoxu nə qədər ola bilər?", ["45000 manat", "100000 manat", "200000 manat", "300000 manat"], "200000 manat", "200.000 manatadək. Xüsusi fəaliyyətin 45000-i ilə qarışdırma."),
    Q("102.1.22-1", "Kiçik müəssisə dividendi üçün gəlir və xərc uçotu aparılmalıdır?", B, "Bəli", "Uçot aparmaq şərtdir."),
    Q("102.1.22-1", "ƏDV-yə düşməyən, dövriyyəsi 200000-ədək kiçik müəssisənin dividendi fiziki təsisçi, payçı və səhmdara aiddir?", B, "Bəli", "Fiziki şəxs təsisçi, payçı və ya səhmdar."),
    Q("102.1.22-1", "ƏDV-yə düşən və dövriyyəsi 250 000 manat olan şirkətin fiziki səhmdarının dividendi bu kiçik müəssisə qaydası ilə azaddır?", B, "Xeyr", "ƏDV-də olmamalı və 200.000-i keçməməlidir."),

    Q("102.1.22-2", "Birjada kütləvi təklif olunmuş səhm və istiqrazın dividend, diskont və faiz gəliri nə vaxtdan və neçə il azaddır?", ["2023-cü il yanvarın 1-dən 4 il", "2023-cü il fevralın 1-dən 5 il", "2023-cü ildən 10 il", "2025-ci ildən 5 il"], "2023-cü il fevralın 1-dən 5 il", "Birja qiymətli kağızı: 2023-cü il fevralın 1-dən 5 il. KT dividendi yanvardan 4 ildir."),
    Q("102.1.22-2", "Birjada istiqrazın nominaldan aşağı yerləşdirilməsindən diskont da dividend kimi azaddır?", B, "Bəli", "Diskont, dividend və faiz — üçü də."),
    Q("102.1.22-2", "Səhm ölkə hüdudlarından kənarda da buraxıla bilər, şərt rezident hüquqi şəxs və tənzimlənən bazardır?", B, "Bəli", "Həm ölkədə, həm xaricdə, rezident hüquqi şəxs tərəfindən."),
    Q("102.1.22-2", "Birja səhm dividendi 5 il, kənd təsərrüfatı dividendi 4 il, texnopark IT dividendi 10 ildir. Bu fikir:", D, "Düzgündür", "Üç ayrı dividend, üç ayrı müddət."),

    Q("102.1.22-3", "Milli valyutada depozitin aylıq faizinin (18 ay şərti olmadan) azad hissəsi nə qədərdir?", ["50 manatadək", "200 manatadək", "500 manatadək", "2400 manatadək"], "200 manatadək", "Hər bank üzrə aylıq 200 manat. 18 aylıq tam azadolma ayrı qaydadır."),
    Q("102.1.22-3", "Depozit faizinin 200 manatlıq həddi bütün banklardakı depozitlərin cəminə görə bir dəfə tətbiq olunur?", B, "Xeyr", "Hər bir bank (və xarici bankın yerli filialı) üzrə ayrı."),
    Q("102.1.22-3", "Xarici bankın Azərbaycandakı filialındakı milli valyuta depoziti də aylıq 200 manatlıq faiz azadolmasına düşür?", B, "Bəli", "Yerli bank və xarici bankın yerli filialı."),
    Q("102.1.22-3", "Aylıq 200 manatlıq depozit faiz azadolması dollar depozitinə də düşür?", B, "Xeyr", "Yalnız milli valyutada depozit."),

    Q("102.1.22-4", "Depozit neçə ay və daha artıq müddətə yerləşdirilməlidir ki, faiz tam azad olsun?", ["6 ay", "12 ay", "18 ay", "24 ay"], "18 ay", "18 ay və daha artıq, və 18 aydan tez ödənilməsin."),
    Q("102.1.22-4", "18 ay və daha artıq milli valyuta depozitinin tam faiz azadolması neçə il müddətinədir?", ["1 il", "2 il", "3 il", "5 il"], "3 il", "3 il. Aylıq 200 manatlıq qayda isə müddətsiz ayrı qaydadır."),
    Q("102.1.22-4", "Depozit 18 aydan tez qaytarılsa da faiz tam azaddır?", B, "Xeyr", "Məbləğ 18 aydan tez olmayaraq ödənilməlidir."),
    Q("102.1.22-4", "18 aylıq tam faiz azadolması yalnız milli valyutada depozitə aiddir?", B, "Bəli", "Milli valyutada olan depozitlər."),
    Q("102.1.22-4", "12 aylıq manat depozitinin faizi tam azaddır, yoxsa yalnız aylıq 200 manatadək?", ["Yalnız aylıq 200 manatadək", "Tam faiz azaddır", "Heç nə azad deyil", "50% azaddır"], "Yalnız aylıq 200 manatadək", "Tam azadolma üçün 18 ay lazımdır."),

    Q("102.1.23", "İnvestisiya təşviqi alan fərdi sahibkarın gəlirinin neçə faizi azaddır?", ["25%", "50%", "75%", "90%"], "50%", "Gəlirin 50 faizi, sənədi aldığı tarixdən 7 il. Mikro 75%-dir — qarışdırma."),
    Q("102.1.23", "İnvestisiya təşviqi alan fərdi sahibkarın 50% gəlir azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Sənədi aldığı tarixdən 7 il. Park 10 ildir."),
    Q("102.1.23", "İnvestisiya təşviqinin 7 ili sənədin alındığı tarixdən başlayır?", B, "Bəli", "Alınma tarixindən, qeydiyyat ilindən yox."),

    Q("102.1.25", "Vergi borcunun qanunla silinməsindən yaranan gəlir azaddır?", B, "Bəli", "Büdcəyə olan vergi borcunun silinməsi."),
    Q("102.1.25-1", "Vətən müharibəsi iştirakçısının bank borcunun silinməsindən gəlir azaddır?", B, "Bəli", "İştirakçı, şəhid ailəsi və əlilliyi müəyyən edilənlər."),
    Q("102.1.25-1", "Müharibədən sonra ərazi bütövlüyü uğrunda döyüşdə şəhid ailəsi statusu alanın borc silinməsi də azaddır?", B, "Bəli", "Müharibədən sonrakı döyüş və təxribatlar da daxil."),

    Q("102.1.26", "Lotereya və idman mərcinin pul uduşunun azad həddi nə qədərdir?", ["200 manatadək", "500 manatadək", "2500 manatadək", "4000 manatadək"], "500 manatadək", "Pul uduş 500-ə qədər. Hədiyyə 2500, yerli qeyri-idman mükafatı 200 — qarışdırma."),
    Q("102.1.26", "800 manatlıq lotereya uduşunun hamısı azaddır?", B, "Xeyr", "Yalnız 500 manatadək hissə."),
    Q("102.1.26", "500 manatlıq uduş azadolması yalnız lotereyaya aiddir, idman mərcinə yox?", B, "Xeyr", "Həm lotereya, həm idman mərc oyunu."),

    Q("102.1.27", "Azı 3 il mülkiyyətdə saxlanılan səhm və ya payın satışından gəlirin neçə faizi azaddır?", ["25%", "50%", "75%", "100%"], "50%", "Gəlirin 50 faizi. İnvestisiya təşviqi də 50%-dir, amma o sahibkar gəlirinə aiddir."),
    Q("102.1.27", "Səhm 2 il saxlanılıbsa, satışından 50% gəlir azadolması düşür?", B, "Xeyr", "Azı 3 il mülkiyyətdə olmalıdır."),
    Q("102.1.27", "MMC iştirak payı da səhm kimi 3 illik 50% satış azadolmasına düşür?", B, "Bəli", "İştirak payı və ya səhm."),

    Q("102.1.28", "Müvafiq dövlət orqanının ödədiyi maddi yardım (dəstək) azaddır?", B, "Bəli", "Həmin orqanın maddi yardımı."),
    Q("102.1.29", "Dövlət zəmanətli kreditin ödənilməsi nəticəsində borcalanın əldə etdiyi gəlir azaddır?", B, "Bəli", "Zəmanət üzrə ödəniş nəticəsində yaranan gəlir."),

    Q("102.1.30", "Mikro sahibkar fərdi sahibkarın sahibkarlıq gəlirinin neçə faizi azaddır?", ["50%", "75%", "90%", "100%"], "75%", "75%. İnvestisiya təşviqi 50%-dir. Film 90%-dir."),
    Q("102.1.30", "Mikro sahibkarın 75% güzəşti üçün orta aylıq muzdlu işçi sayı ən azı neçə nəfər olmalıdır?", ["1", "2", "3", "5"], "3", "3 nəfərdən az olmamalıdır."),
    Q("102.1.30", "Məcburi dövlət sosial sığorta haqqı borcu olsa da mikro 75% düşür?", B, "Xeyr", "Sosial sığorta borcu olmamalıdır."),
    Q("102.1.30", "Mikro sahibkarda orta aylıq işçi sayı necə hesablanır?", ["İlin sonundakı işçi sayı", "Ən çox olduğu ay", "İl ərzində sayların cəmi 12-yə bölünür", "Yalnız tam ştatlılar sayılır"], "İl ərzində sayların cəmi 12-yə bölünür", "Cəmlənib 12-yə bölünür."),
    Q("102.1.30", "Şərt ödənməyib növbəti il mikro kateqoriyadan çıxanda əvvəlki mikro illər necə nəzərə alınır?", ["Güzəşt tam itirilir", "Əvvəlki 3 ilin ödənilmiş gəlir vergisinin 75%-i güzəşt kimi çıxılır", "Yalnız son il nəzərə alınır", "Cərimə hesablanır"], "Əvvəlki 3 ilin ödənilmiş gəlir vergisinin 75%-i güzəşt kimi çıxılır", "Keçid ilində əvvəlki 3 mikro ilin 75%-i çıxılır."),
    Q("102.1.30", "Əmtəəsiz əməliyyatlardan gəlirə də mikro 75% düşür?", B, "Xeyr", "Əmtəəsiz əməliyyat gəlirlərinə şamil edilmir."),
    Q("102.1.30", "Mikro sahibkarın 2 işçisi varsa, 75% düşür?", B, "Xeyr", "Ən azı 3 muzdlu işçi lazımdır."),

    Q("102.1.30-1", "Proqramçı, tərcüməçi, reklamçı kimi xüsusi xidmət siyahısında 75% üçün illik gəlir (xərclərsiz) ən çoxu nə qədər ola bilər?", ["20000 manat", "45000 manat", "200000 manat", "Hədd yoxdur"], "45000 manat", "Təqvim ili üzrə 45000. Kiçik müəssisə dividendi 200000-dir — qarışdırma."),
    Q("102.1.30-1", "Xüsusi xidmət siyahısındakı 45000 manat xərclər çıxıldıqdan sonrakı mənfəətdir?", B, "Xeyr", "Xərclər nəzərə alınmadan gəlirin həcmi."),
    Q("102.1.30-1", "Proqramçı, tərcüməçi, reklamçı və digər xüsusi xidmət siyahısından gəlirin (45000-ədək olanda) neçə faizi azaddır?", ["50%", "75%", "90%", "100%"], "75%", "Həmin fəaliyyətdən gəlirin 75 faizi."),
    Q("102.1.30-1.1", "Proqram təminatının işlənməsi 75%-lik xüsusi fəaliyyət siyahısındadır?", B, "Bəli", "Proqram təminatının işlənməsi daxildir."),
    Q("102.1.30-1.2", "Layihə-dizayn və dekorasiya xidməti bu 75%-lik siyahıdadır?", B, "Bəli", "Dizayn və dekorasiya."),
    Q("102.1.30-1.3", "Tərcümə xidməti bu 75%-lik siyahıdadır?", B, "Bəli", "Tərcümə."),
    Q("102.1.30-1.4", "Reklam xidməti bu 75%-lik siyahıdadır?", B, "Bəli", "Reklam."),
    Q("102.1.30-1.5", "Araşdırma və tədqiqat fəaliyyəti bu 75%-lik siyahıdadır?", B, "Bəli", "Araşdırma və tədqiqat."),
    Q("102.1.30-1.6", "Elm, təhsil, mədəniyyət və idman xidməti bu 75%-lik siyahıdadır?", B, "Bəli", "Bu dörd sahə."),
    Q("102.1.30-1.7", "Hüquq, auditor, mühasibat və maliyyə məsləhəti bu 75%-lik siyahıdadır?", B, "Bəli", "Bu məsləhət xidmətləri."),
    Q("102.1.30-1.8", "Jurnalist fəaliyyəti bu 75%-lik siyahıdadır?", B, "Bəli", "Jurnalistlərin fəaliyyəti."),
    Q("102.1.30-1.9", "Bazar konyukturunun öyrənilməsi bu 75%-lik siyahıdadır?", B, "Bəli", "Bazar konyukturu."),
    Q("102.1.30-1.10", "Qiymətləndirmə fəaliyyəti bu 75%-lik siyahıdadır?", B, "Bəli", "Qiymətləndirmə."),
    Q("102.1.30-1.11", "Avtonəqliyyatla yükdaşıma kuryer 75%-nə daxildirmi?", B, "Xeyr", "Yükdaşımalar istisnadır. Yalnız sifariş çatdırılması və kuryer."),
    Q("102.1.30-1.11", "Sifarişlərin çatdırılması və kuryer (yükdaşıma çıxılmaqla) 75%-lik siyahıdadır?", B, "Bəli", "Yükdaşıma çıxılır, kuryer qalır."),
    Q("102.1.30-1.12", "Turizm bələdçiliyi bu 75%-lik siyahıdadır?", B, "Bəli", "Turizm bələdçiliyi."),
    Q("102.1.30-1.13", "Xidmətlərin ixracı bu 75%-lik siyahıdadır?", B, "Bəli", "Xidmət ixracı."),
    Q("102.1.30-1", "Tərcüməçinin illik gəliri (xərclərsiz) 60 000 manatdır. 75%-lik xüsusi fəaliyyət azadolması düşür?", B, "Xeyr", "Hədd 45000-dir."),

    Q("102.1.31", "Mikro və ya kiçik fərdi sahibkar startapın innovasiya gəliri şəhadətnamədən neçə il azaddır?", ["1 il", "2 il", "3 il", "5 il"], "3 il", "Şəhadətnamə tarixindən 3 il. Park 10 il, investisiya 7 il."),
    Q("102.1.31", "Startap azadolması üçün şəxs mikro və ya kiçik olmalı və fərdi sahibkar kimi fəaliyyət göstərməlidir?", B, "Bəli", "Mikro və ya kiçik + fərdi sahibkar."),
    Q("102.1.31", "Startapın istənilən gəliri (innovasiya olmasa da) 3 il azaddır?", B, "Xeyr", "Yalnız innovasiya fəaliyyətindən gəlir."),

    Q("102.1.32", "KOB klaster iştirakçısının klaster şirkətinə verdiyi mal/iş/xidmət gəlirinin hansı hissəsi azaddır?", ["Tam gəlir", "Gəlirin 50%-i", "Kapital xərclərinə yönələn hissə", "Gəlirin 75%-i"], "Kapital xərclərinə yönələn hissə", "Yalnız kapital xərclərinə yönəldilən hissə, 7 il."),
    Q("102.1.32", "KOB klaster iştirakçısının bu kapital-xərc azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "7 il. İnvestisiya təşviqi də 7 ildir, amma o 50%-dir."),
    Q("102.1.32", "KOB klaster azadolması üçün müqavilə KOB klaster şirkəti ilə bağlanmalıdır?", B, "Bəli", "Klaster şirkəti ilə müqavilə şərtdir."),

    Q("102.1.33", "Haqqı ödənilən ictimai işə cəlb olunan işçinin bu fəaliyyətdən gəliri azaddır?", B, "Bəli", "Məşğulluq qanunu üzrə ictimai iş gəliri."),
    Q("102.1.36", "Lotereya biletini agent qaydasında satmaqdan xidmət gəliri azaddır?", B, "Bəli", "Satıcı ilə müqavilə və ya tapşırıq əsasında."),
    Q("102.1.36", "Lotereya biletini öz hesabına alıb satanın ticarət gəliri də agent xidməti kimi azaddır?", B, "Xeyr", "Yalnız agent qaydasında xidmət, öz ticarəti yox."),

    Q("102.1.37", "İdxalı əvəz edən qida istehsalı ilə məşğul fərdi sahibkarın həmin gəlirinin neçə faizi azaddır?", ["25%", "50%", "75%", "90%"], "50%", "50%, siyahının təsdiq edildiyi ildən 7 il. İnvestisiya təşviqi də 50% və 7 ildir."),
    Q("102.1.37", "İdxalı əvəz edən qida istehsalının 50% azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Siyahının təsdiq edildiyi ildən 7 il."),
    Q("102.1.37", "Qida istehsalı 50%-inin 7 ili siyahının təsdiq edildiyi ildən başlayır?", B, "Bəli", "Siyahı ili başlanğıcdır. İnvestisiya təşviqində isə sənədin alındığı tarix."),

    Q("102.1.38", "Aktiv istehlakçının şəbəkəyə ötürdüyü bərpa olunan elektrik enerjisi üçün güc həddi nə qədərdir?", ["50 kVt", "100 kVt", "150 kVt (daxil)", "250 kVt"], "150 kVt (daxil)", "150 kVt daxil olmaqla, əhali qrupundakı aktiv istehlakçı."),
    Q("102.1.38", "150 kVt-lıq güc də bu elektrik azadolmasının həddinə daxildir?", B, "Bəli", "150 kVt daxil olmaqla."),
    Q("102.1.38", "Şəbəkəyə ötürülən bərpa olunan elektrik azadolması əhali qrupundakı aktiv istehlakçıya aiddir?", B, "Bəli", "Əhali qrupundakı aktiv istehlakçı."),

    Q("102.1.39", "Audiovizual olmayan (qəzet, sayt) media subyektinin fəaliyyət və reklam gəliri nə vaxtdan və neçə il azaddır?", ["2023-cü ildən 4 il", "2023-cü ildən 6 il", "2025-ci ildən 5 il", "2023-cü ildən 10 il"], "2023-cü ildən 6 il", "2023-cü il yanvarın 1-dən 6 il. Televiziya düşmür. Royalti isə 2025-dən 5 ildir."),
    Q("102.1.39", "Televiziya və radio kimi audiovizual media da qəzet-sayt media azadolmasına düşür?", B, "Xeyr", "Audiovizual media subyektləri istisnadır."),
    Q("102.1.39", "Qeyri-audiovizual mediaya dövlət orqanının verdiyi maddi yardım da 6 illik azadolmaya düşür?", B, "Bəli", "Maddi yardımlar da daxildir."),

    Q("102.1.40", "İstehlakçıya qaytarılan ƏDV-dən fiziki şəxsin əldə etdiyi gəlir azaddır?", B, "Bəli", "ƏDV-nin qaytarılmasına görə gəlir."),
    Q("102.1.41", "İctimai iaşə və özəl tibbi praktika ilə məşğul fiziki şəxsin ƏDV-nin azaldılmasından gəliri azaddır?", B, "Bəli", "ƏDV məbləğinin azaldılmasından yaranan gəlir."),
    Q("102.1.41", "ƏDV-nin azaldılmasından gəlir yalnız iaşəyə aiddir, özəl tibbə yox?", B, "Xeyr", "Həm iaşə, həm özəl tibbi praktika."),

    Q("102.1.42", "Teatr, muzey, simfonik orkestr və film hüquqlarından royalti nə vaxtdan və neçə il azaddır?", ["2023-cü ildən 6 il", "2025-ci ildən 5 il", "2025-ci ildən 7 il", "2024-cü ildən 5 il"], "2025-ci ildən 5 il", "2025-ci il yanvarın 1-dən 5 il. Media gəliri isə 2023-dən 6 ildir."),
    Q("102.1.42", "Film yayımı və dublyajı üzrə müəllif hüququ royaltisi də teatr-muzey royaltisinə daxildir?", B, "Bəli", "İstehsal, yayım və dublyaj hüquqları."),
    Q("102.1.42", "Media reklam gəliri 2023-dən 6 il, royalti 2025-dən 5 ildir. Bu fikir:", D, "Düzgündür", "İki ayrı azadolma, iki ayrı tarix."),

    Q("102.1.43", "Film istehsalı, dublyaj və prodüser gəlirinin neçə faizi azaddır?", ["50%", "75%", "90%", "100%"], "90%", "90%, 2025-ci ildən 5 il. Mikro 75%, investisiya 50%."),
    Q("102.1.43", "Film istehsalı və prodüserin 90% azadolması nə vaxtdan və neçə ildir?", ["2023-cü ildən 6 il", "2025-ci ildən 5 il", "2025-ci ildən 7 il", "2024-cü ildən 5 il"], "2025-ci ildən 5 il", "2025-ci il yanvarın 1-dən 5 il. Royalti də eyni vaxtdan 5 ildir, amma royalti tam, bu 90%-dir."),

    Q("102.1.44", "Dövlət-özəl tərəfdaşlıq və bərpa olunan enerji layihəsi gəliri ən çoxu neçə il azad ola bilər?", ["10 il", "15 il", "20 il", "30 il"], "30 il", "Tikinti dövrü daxil, 30 ildən çox olmaz."),
    Q("102.1.44", "DÖT/enerji 30 illik yuxarı həddə tikinti dövrü daxildir?", B, "Bəli", "Tikinti dövrü də daxil olmaqla 30 ildən çox olmaz."),
    Q("102.1.44", "DÖT/enerji müddəti müqavilə ilə müəyyən olunur, amma 30 ili keçə bilməz?", B, "Bəli", "Müqavilə müddəti, lakin maksimum 30 il."),

    Q("102.1-1", "Şəhidin valideyni, dul əri/arvadı və övladının muzdlu aylıq gəlirindən nə qədər çıxılır?", ["200 manat", "400 manat", "800 manat", "100 manat"], "800 manat", "800 manat. Həlak olmuş döyüşçünün (şəhid olmayan) duluna 400, valideyninə 100 düşür."),
    Q("102.1-1", "800 manatlıq şəhid ailəsi çıxılması şəhidin qardaşına da düşür?", B, "Xeyr", "Yalnız valideyn, dul ər/arvad və övlad."),
    Q("102.1-1", "800 manat hər hansı muzdlu işdən vergi tutulan aylıq gəlirdən çıxılır?", B, "Bəli", "Hər hansı muzdlu iş. Amma yalnız əsas iş yerində tətbiq olunur."),

    Q("102.2", "Vətən Müharibəsi Qəhrəmanı, müharibə veteranı və müharibə əlilinin muzdlu aylıq gəlirindən nə qədər çıxılır?", ["100 manat", "200 manat", "400 manat", "800 manat"], "400 manat", "400 manat. Şəhidin valideyni 800-dür."),
    Q("102.2.1", "Vətən Müharibəsi Qəhrəmanına 400 manat əməkhaqqı çıxılması düşür?", B, "Bəli", "Vətən Müharibəsi Qəhrəmanları 400-lük siyahıdadır."),
    Q("102.2.1-1", "Azərbaycanın Milli Qəhrəmanına 400 manat əməkhaqqı çıxılması düşür?", B, "Bəli", "Milli Qəhrəmanlar ayrıca 400-lük bənddədir."),
    Q("102.2.2", "Sovet İttifaqı və Sosialist Əməyi Qəhrəmanına 400 manat çıxılma düşür?", B, "Bəli", "Hər iki qəhrəmanlıq adı."),
    Q("102.2.4", "Müharibə ilə əlaqədar əlilliyi olan şəxsə 400 manat çıxılma düşür?", B, "Bəli", "Müharibə əlilliyi 400-lük siyahıdadır. Digər əlillik 200-dür."),
    Q("102.2.5", "Həlak olmuş döyüşçünün (şəhid statusu almayan) dul ər/arvadı və övladına 400 manat düşür?", B, "Bəli", "Şəhid statusu alanlar bu 400-dən çıxarılıb, çünki onlara 800 düşür."),
    Q("102.2.5", "Şəhid statusu almış şəxsin duluna 400 manat yox, 800 manat düşür?", B, "Bəli", "Şəhid ailəsi 800-lük qaydadadır, 400-lükdən istisna olunub."),
    Q("102.2.6", "1941–1945 arxa cəbhədə orden və medalla təltif olunanlara 400 manat düşür?", B, "Bəli", "Arxa cəbhə ordenliləri."),
    Q("102.2.7", "Müharibə veteranı adı almış şəxsə 400 manat düşür?", B, "Bəli", "Qanunvericiliklə veteran adı almış şəxslər."),
    Q("102.2.8", "Çernobıl və digər radiasiya qəzası nəticəsində şüa xəstəliyi keçirənlərə 400 manat düşür?", B, "Bəli", "Şüa xəstəliyi tutulan və keçirmiş şəxslər."),
    Q("102.2.9", "Minatəmizləmə zamanı həlak olanın valideyni, dul ər/arvadı və övladına 400 manat düşür?", B, "Bəli", "Partlayıcı sursatın işə düşməsi ilə həlak olma və xəsarətdən ölüm."),

    Q("102.3", "61–100% funksiya pozuntusu ilə əlilliyi olan şəxsin (müharibə əlilliyi çıxılmaqla) aylıq gəlirindən nə qədər çıxılır?", ["100 manat", "200 manat", "400 manat", "800 manat"], "200 manat", "200 manat. Müharibə əlilinə 400 düşür."),
    Q("102.3", "Müharibə ilə əlaqədar əlilliyi olan şəxs də 61–100% əlilliyin 200 manatına düşür?", B, "Xeyr", "Müharibə əlilliyi bu 200-dən istisnadır, onlara 400 düşür."),
    Q("102.3", "Əlilliyi olan uşağa baxan və onunla yaşayan valideynlərdən birinə 200 manat düşür?", B, "Bəli", "Öz istəyi ilə valideynlərdən biri, ər/arvad, himayəçi və ya qəyyum."),
    Q("102.3", "81–100% pozuntu ilə əlilliyi olan şəxsə baxan və onunla yaşayan ər/arvada da 200 manat düşür?", B, "Bəli", "Daimi qulluq tələb edən belə şəxsə baxanlara da."),
    Q("102.3", "Hər iki valideyn eyni vaxtda əlil uşağa görə 200 manatı ala bilər?", B, "Xeyr", "Valideynlərdən yalnız biri, öz istəyi ilə."),

    Q("102.4.1", "Həlak olmuş döyüşçünün (şəhid statusu almayan) valideyninin aylıq gəlirindən nə qədər çıxılır?", ["50 manat", "100 manat", "200 manat", "400 manat"], "100 manat", "Valideynə 100. Duluna isə 400. Şəhidin valideyninə 800."),
    Q("102.4.1", "Vəzifə başında həlak olmuş dövlət qulluqçusunun ər/arvadına 100 manat təkrar nikahda da qalır?", B, "Xeyr", "Təkrar nikaha girmişlərsə verilmir."),
    Q("102.4.1", "Vəzifə başında həlak olmuş dövlət qulluqçusunun valideyninə 100 manat düşür?", B, "Bəli", "Valideynlər və ər/arvad (təkrar nikah şərti ilə)."),
    Q("102.4.3", "Əfqanıstana və döyüş gedən başqa ölkələrə göndərilmiş hərbi qulluqçuya 100 manat düşür?", B, "Bəli", "Həm hərbi qulluqçu, həm təlim-yoxlama toplanışına çağırılmış hərbi vəzifəli."),
    Q("102.4.5", "Məcburi köçkünə aylıq gəlirdən 100 manat çıxılma düşür?", B, "Bəli", "Məcburi köçkün və onlara bərabər tutulanlar."),
    Q("102.4.5", "Ayrıca mənzil alıb daimi məskunlaşmış məcburi köçkünə də 100 manat qalır?", B, "Xeyr", "Mənzil qanunu və ya əqdlə ayrıca mənzil alıb daimi məskunlaşmışlara şamil edilmir."),

    Q("102.5", "Himayəsində azı üç nəfər olan ər və ya arvaddan birinin gəlirindən nə qədər çıxılır?", ["50 manat", "100 manat", "200 manat", "400 manat"], "50 manat", "Aylıq 50 manat. Ən kiçik əməkhaqqı çıxılması."),
    Q("102.5", "Üç uşağa görə 50 manat eyni vaxtda həm ərə, həm arvada verilir?", B, "Xeyr", "Ər və ya arvaddan yalnız biri."),
    Q("102.5", "Gündüz təhsil alan 23 yaşınadək şagird və tələbə himayədə sayılır?", B, "Bəli", "23 yaşınadək gündüz təhsil alanlar daxildir."),
    Q("102.5", "Uşaq 18 yaşına çatanda 50 manatlıq himayə çıxılması həmin ay dayanır?", B, "Xeyr", "18 yaşa çatdığı ilin sonunadək saxlanılır."),
    Q("102.5", "Tələbə 23 yaşına çatanda 50 manat ilin sonunadək qalır?", B, "Bəli", "23 yaşa çatdığı ilin sonunadək."),
    Q("102.5", "Himayədəki uşaq öləndə 50 manat ölüm ilinin sonunadək saxlanılır?", B, "Bəli", "Ölüm ilinin sonunadək."),
    Q("102.5", "50 manatlıq himayə çıxılması uşağın doğulduğu aydan başlayır?", B, "Bəli", "Doğulduğu və ya himayəyə götürüldüyü aydan."),
    Q("102.5", "Himayədəkilərin sayı azalandıqda (ölüm istisna) 50 manat nə vaxt dayanır?", ["Həmin ay", "Növbəti aydan", "İlin sonundan", "Dərhal, günü dəqiq"], "Növbəti aydan", "Azaldığı aydan sonrakı aydan xitam verilir."),
    Q("102.5", "Qohumluq dərəcəsi bu üç nəfər himayə çıxılmasına təsir edir?", B, "Xeyr", "Qohumluq dərəcəsindən asılı olmayaraq."),

    Q("102.6.1", "Pensiya alan böyüklər himayədə sayılır (50 manat üçün)?", B, "Xeyr", "Təqaüd, pensiya və işsizlik ödənişi alanlar (uşaqlar istisna) himayədə sayılmır."),
    Q("102.6.1", "Pensiya alan uşaq da himayədə sayılmır?", B, "Xeyr", "Uşaqlar bu qadağadan istisna olunur, uşaq himayədə qala bilər."),
    Q("102.6.2", "Tam dövlət təminatında olan şəxs himayədə sayılır?", B, "Xeyr", "Tam dövlət təminatındakılar himayədə sayılmır."),

    Q("102.7", "Şəxsin həm 800 manat (şəhid ailəsi), həm 400 manat (veteran) hüququ varsa, ikisi də eyni vaxtda verilir?", B, "Xeyr", "Yalnız məbləğcə ən böyük olanı — 800."),
    Q("102.7", "800, 400, 200 və 100 manatlıq əməkhaqqı çıxılmalarından eyni vaxtda yalnız biri — ən böyüyü — verilir?", B, "Bəli", "Bir neçə hüquq olanda ən böyük məbləğ seçilir. 50 manat himayə bu qaydaya düşmür."),
    Q("102.7", "800 manatlıq şəhid ailəsi hüququ olan şəxs 400 manat veteranı da üstünə əlavə edə bilər?", B, "Xeyr", "Toplanmır, yalnız ən böyüyü."),

    Q("102.8", "Əməkhaqqı çıxılması (800, 400, 200, 100, 50) hansı iş yerində tətbiq olunur?", ["Hər iş yerində", "Yalnız əsas iş yerində", "Yalnız əlavə işdə", "Vergi orqanının seçimi ilə"], "Yalnız əsas iş yerində", "Yalnız əsas iş yeri."),
    Q("102.8", "Əməkhaqqı çıxılması sənədlər təqdim ediləndən tətbiq olunur?", B, "Bəli", "Müəyyənləşdirilmiş sənədlərin təqdim edildiyi andan."),
    Q("102.8", "Güzəşt sənədi müqavilə qüvvəyə mindikdən sonra gəlibsə, çıxılma hansı tarixdən hesablanır?", ["Sənədin gəldiyi gündən", "Növbəti aydan", "Əmək müqaviləsinin qüvvəyə mindiyi tarixdən", "İlin əvvəlindən"], "Əmək müqaviləsinin qüvvəyə mindiyi tarixdən", "Status varsa, müqavilə tarixindən hesablanır."),
    Q("102.8", "Status olub sənəd gecikəndə əməkhaqqı çıxılması itir?", B, "Xeyr", "Müqavilənin qüvvəyə mindiyi tarixdən hesablanır."),

    Q("102.9", "İşçi eyni xidməti fərdi sahibkar kimi 1 il ərzində əvvəlki işəgötürənə göstərsə, 75%-lik xüsusi fəaliyyət azadolması düşürmü?", B, "Xeyr", "1 il ərzində əvvəlki işəgötürənə eyni xidmət göstərilsə düşmür."),
    Q("102.9", "Xüsusi fəaliyyətdə 75%-in 1 illik əvvəlki işəgötürən qadağası əmək müqaviləsinə xitamdan sonra fərdi sahibkar olan şəxsə aiddir?", B, "Bəli", "Muzdlu işdən çıxıb eyni işi FS kimi əvvəlki işəgötürənə vermək."),
    Q("102.9", "Xüsusi fəaliyyətlə yanaşı başqa sahə də varsa, 75% üçün xüsusi sahənin illik gəlirdə payı ən azı neçə faiz olmalıdır?", ["25%", "40%", "50%", "75%"], "50%", "Xüsusi sahədən gəlirin ümumi gəlirdə payı 50%-dən az olmasın."),
    Q("102.9", "Xüsusi fəaliyyətdən gəlir ümumi gəlirin 40%-idirsə, 75% düşür?", B, "Xeyr", "Pay 50%-dən az olmamalıdır."),
    Q("102.9", "Eyni xidmətin qismən əvvəlki işəgötürənə göstərilməsi də 1 illik qadağanı işə salır?", B, "Bəli", "Tam və ya qismən eyni xidmət."),

    Q("102.1.11-1", "Bunlardan hansı doğrudur?", ["KT şirkətinin fiziki iştirakçı dividendi 2023-dən 4 ildir", "KT dividendi 10 ildir", "KT dividendi 2023 fevraldan 5 ildir", "KT dividendi müddətsizdir"], "KT şirkətinin fiziki iştirakçı dividendi 2023-dən 4 ildir", "Texnopark IT 10 il, birja 5 il, KT 4 il."),
    Q("102.1.22-2", "Bunlardan hansı doğrudur?", ["Birja səhm-istiqraz gəliri 2023-cü il fevralın 1-dən 5 ildir", "Birja gəliri 2023 yanvardan 4 ildir", "Birja gəliri 10 ildir", "Birja gəliri yalnız dividenddir, faiz yox"], "Birja səhm-istiqraz gəliri 2023-cü il fevralın 1-dən 5 ildir", "Dividend, diskont və faiz. Fevralın 1-i, 5 il."),
    Q("102.1.22-4", "Bunlardan hansı doğrudur?", ["18 aylıq manat depozitinin faizi 3 il tam azad ola bilər", "Hər depozitin faizi avtomatik tam azaddır", "Aylıq 200 manat yalnız 18 ay olanda işləyir", "Dollar depoziti də 18 ay qaydasına düşür"], "18 aylıq manat depozitinin faizi 3 il tam azad ola bilər", "Qısa depozitdə yalnız aylıq 200 manat."),
    Q("102.1-1", "Bunlardan hansı doğrudur?", ["Şəhidin valideyni 800, həlak döyüşçünün (şəhid olmayan) valideyni 100", "Hər iki valideyn 800 alır", "Hər iki valideyn 400 alır", "Şəhidin valideyni 400, digəri 800"], "Şəhidin valideyni 800, həlak döyüşçünün (şəhid olmayan) valideyni 100", "Status fərqi məbləği dəyişir."),
    Q("102.2.4", "Müharibə əlili 400, digər 61–100% əlil 200 manat çıxılma alır. Bu fikir:", D, "Düzgündür", "Müharibə əlilliyi 200-lük qaydadan çıxarılıb."),
    Q("102.1.3.1", "Bunlardan hansı doğrudur?", ["Hədiyyə 2500, daxili müalicə 10000, xarici müalicə 50000, miras 20000", "Hamısı 2500", "Hamısı 20000", "Hədiyyə 20000, miras 2500"], "Hədiyyə 2500, daxili müalicə 10000, xarici müalicə 50000, miras 20000", "Dörd fərqli hədd."),
    Q("102.1.30", "Mikro sahibkar 75% (3 işçi), xüsusi xidmət 75% (45000), investisiya təşviqi 50% (7 il). Bu fikir:", D, "Düzgündür", "Faiz və şərt fərqlidir."),
    Q("102.1.43", "Film istehsalı 90% (2025-dən 5 il), media gəliri isə tam (2023-dən 6 il, audiovizual yox). Bu fikir:", D, "Düzgündür", "Faiz, tarix və dairə fərqlidir."),
    Q("102.7", "Şəhidin dul arvadı həm 800, həm veteran 400 hüququ olsa, nə verilir?", ["Yalnız 800", "800 + 400 = 1200", "Yalnız 400", "800 + 50 himayə mütləq"], "Yalnız 800", "800/400/200/100 içindən ən böyüyü. Himayə 50 ayrı mövzudur."),
    Q("102.1.6", "Əsas işdə gəlir 2400 manatdır. 2500-ədək qayda ilə neçə manat çıxılır?", ["200 manat", "400 manat", "800 manat", "Çıxılmır, çünki 2400 2500 deyil"], "200 manat", "2500-ədək olanda 200. 2400 bu həddə düşür."),
    Q("102.8", "Əlavə iş yerində şəhid ailəsi 800 manatı da tələb edə bilər?", B, "Xeyr", "Əməkhaqqı çıxılması yalnız əsas iş yerində.")
  ];
})(typeof window !== "undefined" ? window : globalThis);
