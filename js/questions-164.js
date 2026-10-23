(function (g) {
  function Q(itemId, q, options, answer, explain) {
    return { itemId: itemId, q: q, options: options, answer: answer, explain: explain || "" };
  }
  var B = ["Bəli", "Xeyr"];
  var D = ["Düzgündür", "Səhvdir"];
  var OP = ["Yalnız idxal", "Yalnız satış", "İdxal və satış", "İstehsal və satış"];
  var OP3 = ["İstehsal, idxal və satış", "İdxal və satış", "Yalnız idxal", "Yalnız satış"];
  g.Q164 = [
    Q("164.1.1", "Özəlləşdirmə qaydasında dövlət müəssisəsindən alınan əmlak ƏDV-dən azaddır?", B, "Bəli", "Özəlləşdirmə ilə alınan dövlət əmlakından ƏDV tutulmur."),
    Q("164.1.1", "Dövlət əmlakının icarəyə verilməsindən büdcəyə ödənilən icarə haqqı ƏDV-dən azaddır?", B, "Bəli", "Büdcəyə düşən icarə hissəsi azaddır."),
    Q("164.1.1", "Özəlləşdirmədən alınan zavod binası da bu qaydaya düşür?", B, "Bəli", "Əmlakın növündən asılı olmayaraq, özəlləşdirmə qaydasında alınırsa azaddır."),

    Q("164.1.2", "Bankın göstərdiyi maliyyə xidməti ƏDV-dən azaddır?", B, "Bəli", "Maliyyə xidmətləri ƏDV-dən azaddır."),
    Q("164.1.2", "Maliyyə lizinqində ödənilən faizlər ƏDV-dən azaddır?", B, "Bəli", "Lizinq faizləri də maliyyə xidməti sayılır."),
    Q("164.1.2", "Sığorta xidməti maliyyə xidməti kimi ƏDV-dən azad ola bilər?", B, "Bəli", "Sığorta da maliyyə xidmətlərinə daxildir."),

    Q("164.1.2-1", "ƏDV-dən azad alınmış əsas vəsait sonradan maliyyə lizinqi ilə verilirsə, bu da azaddır?", B, "Bəli", "Azad və ya ƏDV-yə cəlb olunmayan əməliyyatdan alınan aktivin maliyyə lizinqi azaddır."),

    Q("164.1.3", "Manatın və ya dolların göndərilməsi və idxalı ƏDV-dən azaddır?", B, "Bəli", "Milli və xarici valyuta azaddır."),
    Q("164.1.3", "Səhm və istiqrazın göndərilməsi ƏDV-dən azaddır?", B, "Bəli", "Qiymətli kağızlar da azaddır."),
    Q("164.1.3", "Kolleksiya üçün sikkə (numizmatika) da valyuta kimi azaddır?", B, "Xeyr", "Numizmatika məqsədi istisnadır, ƏDV tutulur."),
    Q("164.1.3", "Valyuta azadolması numizmatika məqsədini də əhatə edir. Bu fikir:", D, "Səhvdir", "Numizmatika ayrıca çıxarılıb."),

    Q("164.1.4", "Mərkəzi Bankın aktivinə qoyulacaq qızılın idxalı ƏDV-dən azaddır?", B, "Bəli", "Mərkəzi Bank və Neft Fondu aktivinə qızıl idxalı azaddır."),
    Q("164.1.4", "Neft Fondunun aktivinə qoyulacaq qızılın idxalı da azaddır?", B, "Bəli", "Həm Mərkəzi Bank, həm Neft Fondu."),
    Q("164.1.4", "Xaricdə çap olunmuş Azərbaycan pul nişanının idxalı ƏDV-dən azaddır?", B, "Bəli", "Pul nişanı, yubiley sikkəsi və oxşar qiymətlilər azaddır."),

    Q("164.1.5", "Nizamnamə kapitalına pay kimi əmlak qoyuluşu, bir qayda olaraq, ƏDV-dən azaddır?", B, "Bəli", "Pay şəklində əmlak qoyuluşu azaddır, amma üç istisna var."),
    Q("164.1.5", "Nizamnaməyə qoyulan əmlak idxal mallıdırsa, azadolma düşür?", B, "Xeyr", "İdxal olunan əmlak bu azadolmadan çıxarılıb."),
    Q("164.1.5", "Nizamnaməyə əsas vəsait qoyuluşu ƏDV-dən azaddır?", B, "Xeyr", "Əsas vəsaitlər istisnadır."),
    Q("164.1.5", "Pay qoyuluşu müqabilində dərhal başqa əmlak alınırsa, azadolma düşür?", B, "Xeyr", "Müqabilində başqa əmlak alınırsa, azad deyil."),

    Q("164.1.6", "Dövlət rüsumu və icazə haqqı ƏDV-dən azaddır?", B, "Bəli", "Rüsum, icazə və yığım tutulan məbləğ həddində azaddır."),
    Q("164.1.6", "Notariusun notariat hərəkətinə görə haqqı ƏDV-dən azaddır?", B, "Bəli", "Notariat haqqı və ona bağlı xidmət azaddır."),
    Q("164.1.6", "Notariat hərəkəti ilə bağlı xidmət də rüsum kimi azaddır?", B, "Bəli", "Hərəkətin özü və ona bağlı xidmət."),

    Q("164.1.7", "Təsdiq olunmuş siyahıdakı kağız kitabın idxalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Siyahıdakı kitab, media və dərsliyin idxalı və satışı azaddır."),
    Q("164.1.7", "Elektron kitabın idxalı və satışı da kağız kitab kimi azaddır?", B, "Xeyr", "Elektron kitablar bu azadolmadan çıxarılıb."),
    Q("164.1.7", "Dərslik komplektinin idxalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Dərslik komplektləri də daxildir."),
    Q("164.1.7", "Kitab çapı üçün rulon və ya vərəq kağızın idxalı və satışı azaddır?", B, "Bəli", "Nəşr üçün kağız da azaddır."),
    Q("164.1.7", "Siyahıya düşməyən kitab da avtomatik azaddır?", B, "Xeyr", "Siyahı təsdiq olunmalıdır."),

    Q("164.1.8", "Kitab və qəzetin çapı üçün redaksiya, nəşriyyat və poliqrafiya işi ƏDV-dən azaddır?", B, "Bəli", "Reklam çıxılmaqla bu fəaliyyət azaddır."),
    Q("164.1.8", "Nəşriyyatın reklam xidməti də çap işi kimi azaddır?", B, "Xeyr", "Reklam xidmətləri istisnadır."),
    Q("164.1.8", "Elektron kitabın istehsalı ilə bağlı nəşriyyat fəaliyyəti azaddır?", B, "Bəli", "İstehsalda elektron kitablar da daxildir. İdxal-satışda isə elektron kitab azad deyil."),
    Q("164.1.8", "Elektron kitab: idxal-satış azad deyil, amma istehsalı (nəşri) azad ola bilər. Bu fikir:", D, "Düzgündür", "İdxal-satışda elektron kitab istisnadır, nəşriyyat fəaliyyətində daxildir."),

    Q("164.1.8-1", "Televiziya və radio (audiovizual media) media azadolmasına düşür?", B, "Xeyr", "Audiovizual media subyektləri istisnadır."),
    Q("164.1.8-1", "Qəzet və sayt kimi qeyri-audiovizual medianın öz məhsulunu satması ƏDV-dən azaddır?", B, "Bəli", "Audiovizual olmayan medianın məhsulu azaddır."),
    Q("164.1.8-1", "Qeyri-audiovizual media azadolması nə vaxtdan və neçə ildir?", ["2023-cü ildən 6 il", "2023-cü ildən 3 il", "2024-cü ildən 3 il", "Müddətsiz"], "2023-cü ildən 6 il", "2023-cü il yanvarın 1-dən 6 il."),
    Q("164.1.8-1", "Ölkədə daimi nümayəndəliyi olmayan xarici şəxsin qeyri-audiovizual mediaya göstərdiyi, media fəaliyyətinə bağlı xidmət azaddır?", B, "Bəli", "Belə qeyri-rezidentin media ilə bağlı iş və xidməti də azaddır."),

    Q("164.1.9", "Dəfn və qəbiristanlıq mərasim xidməti ƏDV-dən azaddır?", B, "Bəli", "Dəfn və qəbiristanlıq xidmətləri azaddır."),
    Q("164.1.9", "Yalnız qəbir daşının satışı da avtomatik dəfn xidməti sayılır?", B, "Xeyr", "Azadolma mərasim xidmətlərinə aiddir."),

    Q("164.1.9-1", "Mərkəzi Bank öz vəzifəsi üçün mal gətirəndə ƏDV-dən azaddır?", B, "Bəli", "Vəzifəsi üçün idxal, iş və xidmət azaddır."),
    Q("164.1.9-1", "Mərkəzi Bank üçün göstərilən xidmət (nişanların daşınması, saxlanması, sığortası) azaddır?", B, "Bəli", "Bank üçün görülən iş və xidmətlər də azaddır."),
    Q("164.1.9-1", "Mərkəzi Bankın hər hansı kommersiya satışı da avtomatik azaddır?", B, "Xeyr", "Yalnız qanuni vəzifələri ilə bağlı əməliyyatlar."),

    Q("164.1.10", "Neft Fondunun vəzifəsi üçün gətirilən mal ƏDV-dən azaddır?", B, "Bəli", "Fondun vəzifəsi üçün idxal, iş və xidmət azaddır."),
    Q("164.1.10", "Neft Fondunun vəzifəsi ilə bağlı iş və xidmət də azaddır?", B, "Bəli", "Mal, iş və xidmət — üçü də."),

    Q("164.1.10-1", "Satmaq öhdəliyi ilə kirayə verilən yaşayışın kirayəçiyə verilməsi ƏDV-dən azaddır?", B, "Bəli", "Həmin qurumun kirayəçiyə təqdimi azaddır."),

    Q("164.1.11", "Pay bölgüsü sazişi üzrə dövlətə və Neft Fonduna verilən avadanlığın idxalı ƏDV-dən azaddır?", B, "Bəli", "Neft-qaz sazişi üzrə belə aktivlərin təqdimi və idxalı azaddır."),
    Q("164.1.11", "Həmin avadanlığın dövləti təmsil edən tərəfə verilməsi də azaddır?", B, "Bəli", "Təqdim və idxal — hər ikisi."),

    Q("164.1.12", "Metro ilə sərnişin daşıma ƏDV-dən azaddır?", B, "Bəli", "Metropoliten sərnişindaşıması azaddır."),
    Q("164.1.12", "Avtobusla sərnişin daşıma da metro kimi azaddır?", B, "Xeyr", "Yalnız metropoliten yazılıb."),
    Q("164.1.12", "Metro bileti ƏDV-dən azaddır?", B, "Bəli", "Sərnişindaşıma xidməti azaddır."),

    Q("164.1.13", "Universitetin ödənişli təhsil xidməti ƏDV-dən azaddır?", B, "Bəli", "Ödənişli təhsil xidməti azaddır."),
    Q("164.1.13", "Təhsil müəssisəsinin yataqxana, bufet kimi yan xidməti də azaddır?", B, "Xeyr", "Digər fəaliyyətlə bağlı xidmətlər istisnadır."),
    Q("164.1.13", "Ödənişli kursun təhsil xidməti azaddır?", B, "Bəli", "Təhsil xidmətinin özü azaddır, yan xidmət yox."),

    Q("164.1.14", "Qanunla müəyyən olunan əvəzsiz aktiv ötürülməsi ƏDV-dən azad ola bilər?", B, "Bəli", "Həmin aktivlərin dəyəri və təqdimi azaddır."),

    Q("164.1.15", "Sənaye və ya texnopark operatorunun infrastruktur üçün gətirdiyi texnika (siyahı və təsdiq sənədi ilə) azaddır?", B, "Bəli", "Operatorun belə idxalı azaddır."),
    Q("164.1.15", "Operator istədiyi hər malı gətirə bilər, siyahı vacib deyil?", B, "Xeyr", "Siyahı və təsdiqedici sənəd lazımdır."),

    Q("164.1.16", "Park rezidentinin istehsal üçün gətirdiyi texnika (siyahı və təsdiq sənədi ilə) azaddır?", B, "Bəli", "Rezidentin belə idxalı azaddır."),
    Q("164.1.16", "Park rezidentinin bu idxal azadolması neçə ildir?", ["3 il", "7 il", "10 il", "13 il"], "10 il", "Qeydiyyat tarixindən 10 il."),
    Q("164.1.16", "Park rezidentinin 10 ili qeydiyyata alındığı tarixdən sayılır?", B, "Bəli", "Parkda qeydiyyat tarixindən."),

    Q("164.1.17", "Şirkətin səhmini və ya payını satmaq ƏDV-dən azaddır?", B, "Bəli", "İştirak payı və səhmin təqdimi azaddır."),
    Q("164.1.17", "MMC-nin 20 faiz payını satmaq ƏDV-yə cəlb olunur?", B, "Xeyr", "Pay və səhm azaddır, tutulmur."),

    Q("164.1.18", "Fermer öz istehsalı buğdanı satır. Bu satış ƏDV-dən azaddır?", B, "Bəli", "İstehsalçının öz kənd təsərrüfatı məhsulunun satışı azaddır."),
    Q("164.1.18", "Fermerin öz südünü satması da azaddır?", B, "Bəli", "Öz istehsalı məhsul."),
    Q("164.1.18", "Sənaye üsulu ilə kənd təsərrüfatı məhsulu istehsal edən də bu satış azadolmasına düşür?", B, "Bəli", "Sənaye üsulu da daxildir."),
    Q("164.1.18", "Başqasının istehsal etdiyi tərəvəzi alıb satan tacir də azaddır?", B, "Xeyr", "Yalnız öz istehsalı məhsulun satışı azaddır."),
    Q("164.1.18", "Fermerin öz məhsulunun satış azadolması nə vaxtdan və neçə ildir?", ["2014-cü ildən 13 il", "2017-ci ildən 10 il", "2020-ci ildən 7 il", "Müddətsiz"], "2014-cü ildən 13 il", "2014-cü il yanvarın 1-dən 13 il."),

    Q("164.1.19", "Müdafiə məmulatı üçün xammal və avadanlığın idxalı (təsdiq sənədi ilə) ƏDV-dən azaddır?", B, "Bəli", "Həmin şəxslərin bu məqsədlə idxalı azaddır."),
    Q("164.1.19", "Müdafiə məmulatının satışı, təmiri və texniki xidməti də azaddır?", B, "Bəli", "Satış, təmir və texniki xidmət də daxildir."),
    Q("164.1.19-1", "Müdafiə və dövlət təhlükəsizliyi üçün silah-sursatın idxalı və satışı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Texnika, ehtiyat hissə, proqram və silah-sursat."),

    Q("164.1.20", "Qeydiyyatlı humanitar təşkilatın humanitar yardım kimi gətirdiyi mal ƏDV-dən azaddır?", B, "Bəli", "Humanitar yardım malları azaddır."),
    Q("164.1.21", "Dövlətlərin və beynəlxalq təşkilatların xeyriyyə və ya təmənnasız yardım kimi gətirdiyi mal azaddır?", B, "Bəli", "Texniki yardım da daxildir."),
    Q("164.1.22", "Fiziki şəxsin kommersiya məqsədi olmayan, qaydaya uyğun gətirdiyi mal ƏDV-dən azaddır?", B, "Bəli", "İstehsal və ya kommersiya üçün nəzərdə tutulmayan mallar."),
    Q("164.1.22", "Fiziki şəxs ticarət üçün mal gətirirsə, bu şəxsi idxal azadolması düşür?", B, "Xeyr", "Kommersiya və istehsal məqsədi olmamalıdır."),

    Q("164.1.23", "İxrac məqsədli neft-qaz üçün gətirilən avadanlıq (təsdiq olunmuş siyahı gömrükdədirsə) azaddır?", B, "Bəli", "Siyahı gömrükə təqdim olunmalıdır."),
    Q("164.1.23", "İxrac neft-qaz avadanlığı üçün siyahı gömrükə verilməsə də azaddır?", B, "Xeyr", "Təsdiq olunmuş siyahı gömrük orqanına təqdim edilməlidir."),

    Q("164.1.24", "Xüsusi iqtisadi zonaya gətirilən aksizsiz mal ƏDV-dən azaddır?", B, "Bəli", "Aksizli mallar çıxılmaqla zona idxalı azaddır."),
    Q("164.1.24", "Xüsusi iqtisadi zonaya aksizli mal gətirilsə, azadolma düşür?", B, "Xeyr", "Aksizli mallar istisnadır."),

    Q("164.1.25", "Təsdiq olunmuş siyahıdakı, lizinq müqaviləsinin obyekti olan əsas vəsaitin idxalı azaddır?", B, "Bəli", "Lizinq obyekti olan əsas vəsaitin idxalı azaddır."),

    Q("164.1.26", "İnvestisiya təşviqi alanın texnika idxalı (təsdiq sənədi ilə) ƏDV-dən azaddır?", B, "Bəli", "Texnika, avadanlıq və qurğu idxalı azaddır."),
    Q("164.1.26", "İnvestisiya təşviqi idxalı neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Sənədin alındığı tarixdən 7 il."),
    Q("164.1.26", "İnvestisiya təşviqinin 7 ili sənədin alındığı tarixdən sayılır?", B, "Bəli", "Alınma tarixindən, qeydiyyatdan yox."),

    Q("164.1.27", "Buğdanın idxalı ƏDV-dən azaddır?", B, "Bəli", "Buğdanın həm idxalı, həm satışı azaddır."),
    Q("164.1.27", "Buğdanın satışı da idxal kimi azaddır?", B, "Bəli", "İdxal və satış."),
    Q("164.1.27", "Buğda ununun istehsalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Unun istehsalı və satışı azaddır."),
    Q("164.1.27", "Çörəyin istehsalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Çörəyin istehsalı və satışı azaddır."),
    Q("164.1.27", "Buğda-un-çörək azadolması nə vaxtdan və neçə ildir?", ["2014-cü ildən 13 il", "2017-ci ildən 10 il", "2019-cu ildən 8 il", "2020-ci ildən 7 il"], "2017-ci ildən 10 il", "2017-ci il yanvarın 1-dən 10 il."),
    Q("164.1.27", "Buğda üçün nə azaddır, un və çörək üçün nə?", ["Buğda: idxal və satış. Un və çörək: istehsal və satış", "Hamısı yalnız idxal", "Hamısı yalnız satış", "Buğda: istehsal. Un: yalnız idxal"], "Buğda: idxal və satış. Un və çörək: istehsal və satış", "Buğdanın istehsalı burada yazılmayıb; un və çörəyin idxalı da."),

    Q("164.1.28", "Gəmiqayırma və gəmi təmiri üçün gətirilən mallar (təsdiq sənədi ilə) ƏDV-dən azaddır?", B, "Bəli", "Həmin fəaliyyətin məqsədi üçün bütün növ malların idxalı azaddır."),
    Q("164.1.28", "Gəmiqayırma idxal azadolması nə vaxtdan və neçə ildir?", ["2025-ci ildən 5 il", "2026-cı il mayın 1-dən 3 il", "2023-cü ildən 6 il", "2024-cü ildən 3 il"], "2026-cı il mayın 1-dən 3 il", "2026-cı il mayın 1-dən 3 il."),

    Q("164.1.29", "Damazlıq heyvanın idxalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Həm idxal, həm satış."),
    Q("164.1.29", "Damazlıq inəyin satışı azaddır?", B, "Bəli", "Damazlıq heyvan."),
    Q("164.1.30", "Toxum və tingin idxalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Həm idxal, həm satış."),
    Q("164.1.30", "Ting idxalı azaddır?", B, "Bəli", "Toxum və ting."),
    Q("164.1.31", "Siyahıdakı gübrə və pestisidin idxalı və satışı azaddır?", B, "Bəli", "Siyahıdakılar — idxal və satış."),
    Q("164.1.31", "Siyahıya düşməyən kimyəvi maddə də gübrə azadolmasına düşür?", B, "Xeyr", "Yalnız təsdiq olunmuş siyahıdakılar."),
    Q("164.1.32", "Siyahıdakı quşçuluq və arıçılıq avadanlığının idxalı və satışı azaddır?", B, "Bəli", "Laboratoriya avadanlığı və təmizləmə maşınları da daxil."),

    Q("164.1.33", "Siyahıdakı baytarlıq preparatının idxalı ƏDV-dən azaddır?", B, "Bəli", "İdxal azaddır."),
    Q("164.1.33", "Baytarlıq preparatının satışı da idxal kimi avtomatik azaddır?", B, "Xeyr", "Burada yalnız idxal yazılıb, satış yox."),
    Q("164.1.33", "Baytarlıq preparatı ilə damazlıq heyvanı müqayisə et: hansı doğrudur?", ["Preparat: yalnız idxal. Damazlıq: idxal və satış", "Hər ikisi yalnız satış", "Hər ikisi idxal və satış", "Preparat: idxal və satış. Damazlıq: yalnız idxal"], "Preparat: yalnız idxal. Damazlıq: idxal və satış", "Preparatda satış yazılmayıb."),

    Q("164.1.34", "Siyahıdakı kənd təsərrüfatı suvarma texnikasının istehsalı, idxalı və satışı azaddır?", B, "Bəli", "İstehsal, idxal və satış — üçü də."),
    Q("164.1.34", "Kənd təsərrüfatı texnikasının ehtiyat hissəsinin idxalı da azaddır?", B, "Bəli", "Ehtiyat hissələri də eyni qaydaya düşür."),
    Q("164.1.34-1", "Kənd təsərrüfatı texnikasını fermerə lizinqə vermək (mülkiyyət keçmədən) azaddır?", B, "Bəli", "Mülkiyyət keçmədən lizinq və icarə azaddır."),
    Q("164.1.34-1", "Texnikanın mülkiyyəti fermerə keçirsə, bu lizinq azadolması düşür?", B, "Xeyr", "Şərt: mülkiyyət hüququ keçməməlidir."),
    Q("164.1.34-2", "Fermerə göstərilən aqrotexniki xidmət ƏDV-dən azaddır?", B, "Bəli", "Aqrotexniki xidmətlər azaddır."),

    Q("164.1.35", "Dövlətin müəyyən etdiyi siyahıdakı xammal və materialın idxalı azaddır?", B, "Bəli", "Siyahıdakı xammal və material idxalı azaddır."),

    Q("164.1.36", "İflas və rezolyusiya çərçivəsində bankın toksik aktivinin satışı ƏDV-dən azaddır?", B, "Bəli", "Qeyri-işlək aktivlər və iflas aktivləri azaddır."),
    Q("164.1.36", "Bankın toksik aktivləri azadolması nə vaxtdan və neçə ildir?", ["2017-ci ildən 14 il", "2019-cu ildən 12 il", "2020-ci ildən 7 il", "2017-ci ildən 7 il"], "2017-ci ildən 14 il", "2017-ci il yanvarın 1-dən 14 il."),

    Q("164.1.37", "Heyvan və quş ətinin satışı ƏDV-dən azaddır?", B, "Bəli", "Satış azaddır."),
    Q("164.1.37", "Toyuq ətinin satışı da azaddır?", B, "Bəli", "Heyvan və quş əti."),
    Q("164.1.37", "Ət satış azadolması nə vaxtdan və neçə ildir?", ["2017-ci ildən 10 il", "2019-cu ildən 8 il", "2020-ci ildən 7 il", "2023-cü ildən 5 il"], "2020-ci ildən 7 il", "2020-ci il yanvarın 1-dən 7 il."),
    Q("164.1.37", "Kolbasa kimi emal olunmuş ət də bu satış azadolmasına düşür?", B, "Xeyr", "Emal olunmuş ətə şamil edilmir."),
    Q("164.1.37", "Sadəcə kəsilmiş və ya dondurulmuş ət güzəştdən çıxır?", B, "Xeyr", "Kəsilmə və dondurulma emal sayılmır, azadolma qalır."),

    Q("164.1.38", "Mülki aviasiya üçün təyyarə, mühərrik və ehtiyat hissəsinin idxalı azaddır?", B, "Bəli", "Hava gəmisi, ehtiyat hissə, mühərrik və güc qurğusu."),
    Q("164.1.38", "Hərbi təyyarə də mülki aviasiya azadolmasına düşür?", B, "Xeyr", "Yalnız mülki aviasiya məqsədi."),

    Q("164.1.40", "KOB klaster şirkətinin istehsal üçün texnika idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "İstehsal və ya emal məqsədilə."),
    Q("164.1.40", "KOB klaster idxal azadolması neçə ildir?", ["3 il", "5 il", "7 il", "10 il"], "7 il", "Reyestrə düşdüyü tarixdən 7 il."),
    Q("164.1.40", "KOB klasterin 7 ili reyestrə daxil edildiyi tarixdən sayılır?", B, "Bəli", "Reyestr tarixindən."),

    Q("164.1.41", "Sənaye parkı rezidentinin elektrik avtobusu (oturacaqsız) idxalı azaddır?", B, "Bəli", "İstehsal və ya yığım məqsədilə belə idxal azaddır."),
    Q("164.1.41", "Həmin avtobusu oturacaq quraşdırıb satmaq da azaddır?", B, "Bəli", "Quraşdırdıqdan sonra satış da azaddır."),
    Q("164.1.41", "Bu elektrik avtobus azadolması nə vaxtdan və neçə ildir?", ["2025-ci ildən 8 il", "2026-cı ildən 1 il", "2023-cü ildən 10 il", "2022-ci ildən 4 il"], "2026-cı ildən 1 il", "2026-cı il yanvarın 1-dən 1 il."),

    Q("164.1.41-1", "3 ildən yeni və 2500 sm³-dən kiçik hibrid avtomobilin idxalı və satışı azaddır?", B, "Bəli", "Həm idxal, həm satış."),
    Q("164.1.41-1", "Hibrid avtomobil azadolması nə vaxtdan və neçə ildir?", ["2022-ci ildən 4 il", "2022-ci ildən 5 il", "2023-cü ildən 10 il", "2026-cı ildən 1 il"], "2022-ci ildən 4 il", "2022-ci il yanvarın 1-dən 4 il."),
    Q("164.1.41-1", "Mühərriki 3000 sm³ olan hibrid də azaddır?", B, "Xeyr", "Həcm 2500 sm³-dən çox olmamalıdır."),
    Q("164.1.41-1", "İstehsal tarixi 5 il olan hibrid də azaddır?", B, "Xeyr", "İstehsal tarixi 3 ildən çox olmamalıdır."),

    Q("164.1.41-2", "Elektrik avtomobil üçün 2-ci və 3-cü səviyyə doldurucunun idxalı və satışı azaddır?", B, "Bəli", "Həm idxal, həm satış."),
    Q("164.1.41-2", "Elektrik doldurucu azadolması nə vaxtdan və neçə ildir?", ["2022-ci ildən 4 il", "2022-ci ildən 5 il", "2023-cü ildən 6 il", "2025-ci ildən 5 il"], "2022-ci ildən 5 il", "2022-ci il yanvarın 1-dən 5 il."),
    Q("164.1.41-2", "Hibrid avtomobil 4 il, doldurucu 5 ildir. Bu fikir:", D, "Düzgündür", "Hibrid: 2022-dən 4 il. Doldurucu: 2022-dən 5 il."),

    Q("164.1.41-3", "Azərbaycanda istehsal olunan minik avtomobilinin satışı ƏDV-dən azaddır?", B, "Bəli", "Yerli minik avtomobilinin satışı azaddır."),
    Q("164.1.41-3", "Yerli minik satışı azadolması nə vaxtdan və neçə ildir?", ["2022-ci ildən 4 il", "2023-cü il mayın 1-dən 10 il", "2025-ci ildən 8 il", "2023-cü ildən 5 il"], "2023-cü il mayın 1-dən 10 il", "2023-cü il mayın 1-dən 10 il."),
    Q("164.1.41-3", "Xaricdən gətirilmiş minik avtomobilinin satışı da yerli minik kimi azaddır?", B, "Xeyr", "Yalnız ölkədə istehsal olunan minik."),

    Q("164.1.41-4", "Azərbaycanda istehsal olunan avtobusun satışı ƏDV-dən azaddır?", B, "Bəli", "Yerli avtobus satışı azaddır."),
    Q("164.1.41-4", "Yerli yük avtomobilinin satışı da azaddır?", B, "Bəli", "Avtobus və yük avtomobili."),
    Q("164.1.41-4", "Avtobus ehtiyat hissəsinin istehsal məqsədilə idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Hüquqi şəxsin belə idxalı azaddır."),
    Q("164.1.41-4", "Yerli avtobus satışı azadolması nə vaxtdan və neçə ildir?", ["2025-ci ildən 8 il", "2026-cı ildən 7 il", "2023-cü ildən 10 il", "2025-ci ildən 5 il"], "2025-ci ildən 8 il", "Avtobus: 2025-ci il yanvarın 1-dən 8 il."),
    Q("164.1.41-4", "Yerli yük avtomobili satışı azadolması nə vaxtdan və neçə ildir?", ["2025-ci ildən 8 il", "2026-cı ildən 7 il", "2023-cü ildən 10 il", "2022-ci ildən 5 il"], "2026-cı ildən 7 il", "Yük avtomobili: 2026-cı il yanvarın 1-dən 7 il."),

    Q("164.1.41-5", "Raritet avtomobilin idxalı (təsdiq sənədi və hədd daxilində) azaddır?", B, "Bəli", "İldə 1 ədəd, ölkə üzrə 10 ədəd."),
    Q("164.1.41-5", "Bir şəxs eyni ildə 3 raritet avtomobil gətirsə, hamısı azad olar?", B, "Xeyr", "Təqvim ilində 1 ədəddən artıq olmaz."),

    Q("164.1.42", "Haqqı ödənilən ictimai işə işçi qüvvəsi vermək ƏDV-dən azaddır?", B, "Bəli", "İctimai işlərin təşkili ilə bağlı bu əməliyyat azaddır."),

    Q("164.1.43", "Kəpəyin istehsalı və satışı ƏDV-dən azaddır?", B, "Bəli", "Həm istehsal, həm satış."),
    Q("164.1.43", "Dəyirmanın kəpək satışı azaddır?", B, "Bəli", "Kəpəyin istehsalı və satışı."),
    Q("164.1.43", "Kəpək azadolması nə vaxtdan və neçə ildir?", ["2017-ci ildən 10 il", "2019-cu il martın 1-dən 8 il", "2020-ci ildən 7 il", "2014-cü ildən 13 il"], "2019-cu il martın 1-dən 8 il", "2019-cu il martın 1-dən 8 il."),

    Q("164.1.46", "Siyahıdakı yem və yem əlavəsinin satışı ƏDV-dən azaddır?", B, "Bəli", "Satış dövriyyəsi azaddır."),
    Q("164.1.46", "Yem satışı azadolması nə vaxtdan və neçə ildir?", ["2019-cu ildən 8 il", "2020-ci ildən 7 il", "2017-ci ildən 10 il", "2023-cü ildən 5 il"], "2020-ci ildən 7 il", "2020-ci il yanvarın 1-dən 7 il."),
    Q("164.1.46", "Ət satışı və yem satışı eyni vaxtdan başlayır: 2020-ci ildən 7 il. Bu fikir:", D, "Düzgündür", "Hər ikisi 2020-ci il yanvarın 1-dən 7 il."),

    Q("164.1.47", "Tikilən binanın dövlətə ayrılan yaşayış və qeyri-yaşayış hissəsinin verilməsi azaddır?", B, "Bəli", "Dövlətə ayrılan hissə azaddır."),
    Q("164.1.47", "Eyni binanın alıcıya satılan qalan mənzilləri də avtomatik azaddır?", B, "Xeyr", "Yalnız dövlətə ayrılan hissə."),

    Q("164.1.48", "Publik hüquqi şəxsin büdcə vəsaiti ilə, müqavilə əsasında gördüyü iş və xidmət azaddır?", B, "Bəli", "Nizamnamə vəzifəsi + büdcə + müqavilə."),
    Q("164.1.48", "Publik hüquqi şəxs azadolması nə vaxtdan və neçə ildir?", ["2018-ci ildən 9 il", "2020-ci ildən 7 il", "2023-cü ildən 6 il", "2024-cü ildən 3 il"], "2020-ci ildən 7 il", "2020-ci il yanvarın 1-dən 7 il."),
    Q("164.1.48", "Publik hüquqi şəxs öz kommersiya xidmətini büdcəsiz göstərsə, bu azadolma düşür?", B, "Xeyr", "Büdcə vəsaiti və müqavilə şərtidir."),

    Q("164.1.49", "Formula 1 və Formula 2 ilə bağlı müqavilə üzrə mal, iş və xidmət azaddır?", B, "Bəli", "Həmin müqavilə çərçivəsində."),
    Q("164.1.49", "Formula azadolması nə vaxtdan və neçə ildir?", ["2018-ci ildən 9 il", "2020-ci ildən 7 il", "2023-cü ildən 6 il", "2017-ci ildən 10 il"], "2018-ci ildən 9 il", "2018-ci il yanvarın 1-dən 9 il."),

    Q("164.1.50", "Ölkədə daimi nümayəndəliyi olmayan xarici şirkət təyyarəni rezidentə icarəyə verir. Bu ƏDV-dən azaddır?", B, "Bəli", "Mülki aviasiya çərçivəsində hava gəmisi və mühərrikin icarə və lizinqi azaddır."),
    Q("164.1.50", "Xaricinin daimi nümayəndəliyi varsa, bu təyyarə icarəsi azadolması düşür?", B, "Xeyr", "Daimi nümayəndəlik yaratmayan qeyri-rezident olmalıdır."),

    Q("164.1.51", "İcbari tibbi sığorta fondu hesabına göstərilən tibbi xidmət ƏDV-dən azaddır?", B, "Bəli", "İTS fondu və təsdiq olunmuş sosial fondlar hesabına."),
    Q("164.1.51", "İcbari tibbi sığorta xidməti azadolması nə vaxtdan və neçə ildir?", ["2023-cü ildən 6 il", "2024-cü ildən 3 il", "2025-ci ildən 5 il", "2020-ci ildən 7 il"], "2024-cü ildən 3 il", "2024-cü il yanvarın 1-dən 3 il."),
    Q("164.1.51", "Pasiyentin öz cibindən ödədiyi hər tibbi xidmət də İTS kimi azaddır?", B, "Xeyr", "Fond vəsaiti hesabına göstərilən xidmət azaddır."),
    Q("164.1.51-1", "Tədris bazası olan tibb müəssisəsində tibbi xidmət ƏDV-dən azaddır?", B, "Bəli", "Tədris bazası tibb müəssisələrində xidmət azaddır."),
    Q("164.1.51-1", "Tədris tibb azadolması nə vaxtdan və neçə ildir?", ["2024-cü ildən 3 il", "2025-ci ildən 5 il", "2023-cü ildən 6 il", "2020-ci ildən 7 il"], "2024-cü ildən 3 il", "2024-cü il yanvarın 1-dən 3 il."),

    Q("164.1.52", "İri neft emalı zavodunun yenidən qurulması üçün avadanlıq idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Avadanlıq və material idxalı azaddır."),
    Q("164.1.52", "Bu azadolma üçün zavodun illik emal gücü ən azı nə qədər olmalıdır?", ["1 milyon ton", "2 milyon ton", "3 milyon ton", "5 milyon ton"], "3 milyon ton", "Xam neft üzrə illik emal gücü 3 milyon tondan az olmamalıdır."),
    Q("164.1.52", "Neft emalı idxal azadolması nə vaxtdan və neçə ildir?", ["2021-ci ildən 8 il", "2021-ci ildən 6 il", "2023-cü ildən 5 il", "2020-ci ildən 7 il"], "2021-ci ildən 8 il", "2021-ci il yanvarın 1-dən 8 il."),

    Q("164.1.54", "Zərgərlik istehsalı üçün dəzgah idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Dəzgah, avadanlıq və qurğu idxalı azaddır."),
    Q("164.1.54", "Zərgərlik dəzgahı azadolması nə vaxtdan və neçə ildir?", ["2021-ci ildən 6 il", "2021-ci ildən 8 il", "2023-cü ildən 5 il", "2025-ci ildən 5 il"], "2021-ci ildən 6 il", "2021-ci il yanvarın 1-dən 6 il."),
    Q("164.1.54", "Hazır qızıl üzük istehsalı da dəzgah idxalı kimi avtomatik azaddır?", B, "Xeyr", "Burada dəzgahın idxalı azaddır, hazır məmulatın satışı yox."),

    Q("164.1.55", "Külçə, sikkə və ya qranul şəklində qızıl və gümüşün satışı ƏDV-dən azaddır?", B, "Bəli", "Bu formalarda satış azaddır."),
    Q("164.1.55", "Hazır qızıl üzüklərin satışı da külçə kimi azaddır?", B, "Xeyr", "Yalnız külçə, sikkə və ya qranul forması."),
    Q("164.1.55", "Qızıl külçənin satışı azaddır?", B, "Bəli", "Külçə, sikkə və ya qranul."),

    Q("164.1.56", "Minatəmizləmə üçün texnika, zirehli geyim və minaaxtaran itin idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "İşğaldan azad ərazilər və təhlükəli ərazilər üçün."),
    Q("164.1.56", "Minatəmizləmə idxalı nə vaxtdan və neçə ildir?", ["2023-cü il martın 1-dən 5 il", "2023-cü ildən 6 il", "2020-ci ildən 7 il", "2025-ci ildən 5 il"], "2023-cü il martın 1-dən 5 il", "2023-cü il martın 1-dən 5 il."),
    Q("164.1.56-1", "Minatəmizləmə texnikasının ölkədə istehsalı və satışı da azaddır?", B, "Bəli", "İstehsal və satış da eyni müddətə."),
    Q("164.1.56-1", "Minatəmizləmə istehsal-satış azadolması nə vaxtdan və neçə ildir?", ["2023-cü il martın 1-dən 5 il", "2023-cü ildən 10 il", "2020-ci ildən 7 il", "2025-ci ildən 5 il"], "2023-cü il martın 1-dən 5 il", "İdxal ilə eyni: 2023-cü il martın 1-dən 5 il."),

    Q("164.1.57", "Lotereya biletini agent qaydasında satmaq xidməti ƏDV-dən azaddır?", B, "Bəli", "Satıcı ilə müqavilə və ya tapşırıq əsasında."),
    Q("164.1.58", "Özəl baytarlıq xidməti ƏDV-dən azaddır?", B, "Bəli", "Özəl baytarlıq xidmətləri azaddır."),
    Q("164.1.58", "Kənddəki özəl baytarın xidmət haqqı azaddır?", B, "Bəli", "Özəl baytarlıq."),
    Q("164.1.59", "Vəkilin order markası üçün Kollegiyaya ödənişi ƏDV-dən azaddır?", B, "Bəli", "Order markası ödənişi azaddır."),

    Q("164.1.60", "Təsdiq olunmuş siyahıdakı əsas vəsaitin idxalı ƏDV-dən azaddır?", B, "Bəli", "Siyahıdakı əsas vəsait idxalı azaddır."),
    Q("164.1.61", "Qurumun yenidən qurulması üçün avadanlıq və ehtiyat hissəsi idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Yenidənqurma layihəsi çərçivəsində."),
    Q("164.1.61", "Bu yenidənqurma idxalı nə vaxtdan və neçə ildir?", ["2023-cü ildən 3 il", "2023-cü ildən 6 il", "2024-cü ildən 3 il", "2021-ci ildən 8 il"], "2023-cü ildən 3 il", "2023-cü il yanvarın 1-dən 3 il."),

    Q("164.1.62", "Svop çərçivəsində xam neft və təbii qazın idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Svop idxalı azaddır."),
    Q("164.1.62", "Svop idxalı nə vaxtdan və neçə ildir?", ["2023-cü ildən 3 il", "2024-cü ildən 3 il", "2021-ci ildən 8 il", "2025-ci ildən 5 il"], "2024-cü ildən 3 il", "2024-cü il yanvarın 1-dən 3 il."),

    Q("164.1.63.1", "Dövlət-özəl tərəfdaşlıq layihəsində özəl tərəfdaşın texnika idxalı (təsdiq sənədi ilə) azaddır?", B, "Bəli", "Müqavilə müddətində, amma ən çoxu 30 il."),
    Q("164.1.63.1", "Dövlət-özəl tərəfdaşlıq idxalı ən çoxu neçə il ola bilər?", ["10 il", "20 il", "30 il", "Müddətsiz"], "30 il", "Tikinti dövrü daxil, 30 ildən çox olmaz."),
    Q("164.1.63.2", "Dövlətin enerji alacağı bərpa olunan stansiyanın texnika idxalı azaddır?", B, "Bəli", "Satınalma müqaviləsi müddətində, ən çoxu 30 il."),
    Q("164.1.63.3", "Tərəfdaşlıq müqaviləsində vergi güzəşti yazılıbsa, tikinti podratçısının texnika idxalı da azad ola bilər?", B, "Bəli", "Mal layihənin dəyərinə düşəndə, tikinti müddətində."),
    Q("164.1.63.3", "Podratçının gətirdiyi mal layihənin dəyərinə yazılmasa da azadolma düşür?", B, "Xeyr", "İdxal malları layihənin dəyərinə aid edilməlidir."),

    Q("164.1.64", "Təsdiq sənədi və siyahı ilə rəsm, kolleksiya və əntiq əşyanın idxalı azaddır?", B, "Bəli", "Müəyyən kodlar üzrə siyahıdakı əşyalar."),

    Q("164.1.12", "Metro azaddır, taksi və avtobus da eyni qaydaya düşür. Bu fikir:", D, "Səhvdir", "Yalnız metropoliten."),
    Q("164.1.13", "Ödənişli təhsil azaddır, yataqxana isə azad deyil. Bu fikir:", D, "Düzgündür", "Yan xidmətlər istisnadır."),
    Q("164.1.7", "Kağız kitabın idxal-satışı azad ola bilər, elektron kitabın idxal-satışı isə yox. Bu fikir:", D, "Düzgündür", "Elektron kitab idxal-satışdan çıxarılıb."),
    Q("164.1.18", "Fermer başqasının pomidorunu alıb bazarda satır. Azaddır?", B, "Xeyr", "Yalnız öz istehsalı."),
    Q("164.1.5", "Nizamnaməyə dəzgah (əsas vəsait) qoyulur. Bu pay qoyuluşu azaddır?", B, "Xeyr", "Əsas vəsait istisnadır."),
    Q("164.1.24", "Xüsusi iqtisadi zonaya spirtli içki (aksizli mal) gətirilir. Azaddır?", B, "Xeyr", "Aksizli mallar istisnadır."),
    Q("164.1.37", "Dondurulmuş toyuq ətinin satışı azaddır?", B, "Bəli", "Dondurulma emal sayılmır."),
    Q("164.1.37", "Kolbasanın satışı ət azadolmasına düşür?", B, "Xeyr", "Emal olunmuş ət çıxarılıb."),
    Q("164.1.55", "Qızıl qranulun satışı azaddır, qızıl üzük isə yox. Bu fikir:", D, "Düzgündür", "Yalnız külçə, sikkə, qranul."),
    Q("164.1.3", "Kolleksiya sikkəsi valyuta azadolmasına düşür. Bu fikir:", D, "Səhvdir", "Numizmatika istisnadır."),
    Q("164.1.33", "Baytarlıq preparatını aptekdə satmaq da idxal kimi azaddır. Bu fikir:", D, "Səhvdir", "Yalnız idxal yazılıb."),
    Q("164.1.41-3", "Gəncədə istehsal olunan minik avtomobilinin satışı azaddır?", B, "Bəli", "Ölkə ərazisində istehsal."),
    Q("164.1.27", "Buğdanın istehsalı da un kimi ayrıca azad yazılıb?", B, "Xeyr", "Buğda üçün idxal və satış; un və çörək üçün istehsal və satış."),
    Q("164.1.1", "Özəlləşdirmədən alınan zavod ƏDV-dən azaddır?", B, "Bəli", "Özəlləşdirmə qaydasında alınan əmlak."),
    Q("164.1.2", "Kredit faizinin özü maliyyə xidməti kimi azad ola bilər?", B, "Bəli", "Maliyyə xidmətləri azaddır."),
    Q("164.1.9", "Dəfn xidməti ƏDV-dən azaddır?", B, "Bəli", "Dəfn və qəbiristanlıq mərasim xidmətləri."),
    Q("164.1.17", "Səhmin satışı ƏDV-yə cəlb olunur?", B, "Xeyr", "Səhm və pay azaddır."),
    Q("164.1.58", "Özəl baytarlıq xidməti tutulur, yalnız dövlət baytarlığı azaddır. Bu fikir:", D, "Səhvdir", "Özəl baytarlıq xidməti azaddır."),

    Q("164.1.33", "Baytarlıq preparatı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Satış, istehsal yazılmayıb — tək idxal."),
    Q("164.1.29", "Damazlıq heyvan üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Həm gətirmək, həm satmaq azaddır."),
    Q("164.1.30", "Toxum və ting üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Preparatdan fərqli: burada satış da var."),
    Q("164.1.31", "Siyahıdakı gübrə və pestisid üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "İdxal və satış. İstehsal yazılmayıb."),
    Q("164.1.32", "Quşçuluq və arıçılıq avadanlığı üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Siyahıdakı avadanlığın idxalı və satışı."),
    Q("164.1.33", "Damazlıq, toxum, gübrə — idxal və satış. Baytarlıq preparatı niyə fərqlidir?", ["Yalnız idxalı azaddır, satışı yox", "Yalnız satışı azaddır", "Heç biri azad deyil", "İstehsalı da azaddır"], "Yalnız idxalı azaddır, satışı yox", "Preparatda satış cümləsi yoxdur."),
    Q("164.1.33", "Baytarlıq preparatını ölkədə satmaq da gətirmək kimi azaddır?", B, "Xeyr", "Azadolma yalnız idxala aiddir."),
    Q("164.1.29", "Damazlıq inəyi ölkədə satmaq azaddır, gətirmək isə yox. Bu fikir:", D, "Səhvdir", "Həm idxal, həm satış azaddır."),

    Q("164.1.37", "Heyvan və quş əti üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "İdxal və istehsal yazılmayıb."),
    Q("164.1.37", "Ətin idxalı da satış kimi avtomatik azaddır?", B, "Xeyr", "Yalnız satış yazılıb."),
    Q("164.1.37", "Ətin istehsalı (emalı) da satış azadolmasına düşür?", B, "Xeyr", "Emal olunmuş ət hətta satışda da çıxarılıb. Kəsilmə və dondurulma istisnadır."),
    Q("164.1.46", "Siyahıdakı yem və yem əlavəsi üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "Yalnız satış dövriyyəsi. İdxal yazılmayıb."),
    Q("164.1.46", "Yemin idxalı da satış kimi azaddır?", B, "Xeyr", "Yemdə yalnız satış var."),
    Q("164.1.43", "Kəpək üçün hansı əməliyyatlar azaddır?", OP, "İstehsal və satış", "İstehsal və satış. İdxal yazılmayıb."),
    Q("164.1.43", "Kəpəyin idxalı da istehsal-satış kimi azaddır?", B, "Xeyr", "Kəpəkdə idxal yoxdur."),
    Q("164.1.37", "Ət, yem, kəpək. Hansı cütlük doğrudur?", ["Ət və yem: yalnız satış. Kəpək: istehsal və satış", "Üçü də idxal və satış", "Üçü də yalnız idxal", "Ət: idxal. Yem: istehsal. Kəpək: xidmət"], "Ət və yem: yalnız satış. Kəpək: istehsal və satış", "Kəpəkdə istehsal da var, ət və yemdə yox."),

    Q("164.1.27", "Buğda üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Buğda: gətirmək və satmaq. İstehsalı burada yoxdur."),
    Q("164.1.27", "Buğda unu üçün hansı əməliyyatlar azaddır?", OP, "İstehsal və satış", "Un: bişirmək/üyütmək və satmaq. İdxalı yazılmayıb."),
    Q("164.1.27", "Çörək üçün hansı əməliyyatlar azaddır?", OP, "İstehsal və satış", "Çörək un ilə eyni: istehsal və satış."),
    Q("164.1.27", "Buğdanın istehsalı da idxal-satış kimi azaddır?", B, "Xeyr", "Buğdada istehsal yoxdur."),
    Q("164.1.27", "Unun idxalı da istehsal-satış kimi azaddır?", B, "Xeyr", "Unda idxal yazılmayıb."),
    Q("164.1.27", "Çörəyin idxalı azaddır?", B, "Xeyr", "Çörəkdə istehsal və satış var, idxal yox."),
    Q("164.1.27", "Buğda, un, çörək. Hansı doğrudur?", ["Buğda: idxal və satış. Un və çörək: istehsal və satış", "Üçü də idxal və satış", "Üçü də istehsal və satış", "Buğda: yalnız idxal. Un: yalnız satış"], "Buğda: idxal və satış. Un və çörək: istehsal və satış", "Məhsula görə əməliyyat dəyişir."),

    Q("164.1.18", "Fermerin öz kənd təsərrüfatı məhsulu üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "Öz istehsalının satışı. İdxal bu qaydaya düşmür."),
    Q("164.1.18", "Fermer xaricdən pomidor gətirib satır. Bu, öz məhsul satışı kimi azaddır?", B, "Xeyr", "Yalnız özünün istehsal etdiyi məhsulun satışı."),
    Q("164.1.34", "Kənd təsərrüfatı suvarma texnikası üçün hansı əməliyyatlar azaddır?", OP3, "İstehsal, idxal və satış", "Üçü də: istehsal, idxal, satış."),
    Q("164.1.34", "Kənd təsərrüfatı texnikasının ehtiyat hissəsi də eyni üç əməliyyata düşür?", B, "Bəli", "Ehtiyat hissəsi də istehsal, idxal və satış."),
    Q("164.1.34-1", "Fermerə texnikanı lizinqə vermək hansı əməliyyatdır?", ["İcarə / lizinq", "Satış", "İdxal", "İstehsal"], "İcarə / lizinq", "Mülkiyyət keçmədən lizinq və icarə."),
    Q("164.1.34-2", "Fermerə aqrotexniki xidmət hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İstehsal"], "Xidmət", "İş görmək yox, xidmət göstərmək."),
    Q("164.1.34", "Kənd təsərrüfatı texnikası, onun lizinqi və aqrotexniki xidmət. Hansı doğrudur?", ["Texnika: istehsal-idxal-satış. Lizinq: icarə. Aqro: xidmət", "Üçü də yalnız satış", "Üçü də yalnız idxal", "Lizinq də satış sayılır"], "Texnika: istehsal-idxal-satış. Lizinq: icarə. Aqro: xidmət", "Üç ayrı əməliyyat növü."),

    Q("164.1.7", "Siyahıdakı kağız kitab üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "İdxal və satış. Nəşri ayrıca qaydadır."),
    Q("164.1.7", "Elektron kitabın idxalı və satışı da kağız kitab kimidir?", B, "Xeyr", "Elektron kitab idxal-satışdan çıxarılıb."),
    Q("164.1.8", "Kitab və qəzetin nəşri (redaksiya, poliqrafiya) hansı əməliyyatdır?", ["İstehsal / xidmət", "Yalnız idxal", "Yalnız satış", "İcarə"], "İstehsal / xidmət", "Nəşriyyat fəaliyyəti istehsal və xidmətdir, reklam çıxılır."),
    Q("164.1.8", "Nəşriyyatın reklam xidməti də çap işi kimi azaddır?", B, "Xeyr", "Reklam istisnadır."),
    Q("164.1.12", "Metro sərnişindaşıması hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İş"], "Xidmət", "Daşıma xidmətidir, mal satışı deyil."),
    Q("164.1.13", "Ödənişli təhsil hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İstehsal"], "Xidmət", "Təhsil xidməti. Yataqxana-bufet düşmür."),
    Q("164.1.9", "Dəfn və qəbiristanlıq mərasimi hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İstehsal"], "Xidmət", "Mərasim xidməti."),
    Q("164.1.2", "Bankın maliyyə əməliyyatı hansı əməliyyatdır?", ["Xidmət (faiz də daxil)", "Mal satışı", "İdxal", "İstehsal"], "Xidmət (faiz də daxil)", "Maliyyə xidməti və lizinq faizi."),
    Q("164.1.6", "Dövlət rüsumu və notariat haqqı hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İstehsal"], "Xidmət", "Rüsum və notariat xidməti."),
    Q("164.1.58", "Özəl baytarlıq hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İstehsal"], "Xidmət", "Xidmət. Preparatın idxalı ayrı qaydadır."),
    Q("164.1.57", "Lotereya biletini agent kimi satmaq hansı əməliyyatdır?", ["Xidmət", "Malın özünün satışı", "İdxal", "İstehsal"], "Xidmət", "Agent qaydasında satış xidməti azaddır."),
    Q("164.1.51", "İcbari tibbi sığorta fondu hesabına müalicə hansı əməliyyatdır?", ["Xidmət", "Satış", "İdxal", "İstehsal"], "Xidmət", "Tibbi xidmət."),

    Q("164.1.4", "Mərkəzi Bankın aktivinə qızıl üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Qızılın gətirilməsi. Satış yazılmayıb."),
    Q("164.1.15", "Park operatorunun infrastruktur texnikası üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Yalnız idxal, siyahı və təsdiq sənədi ilə."),
    Q("164.1.16", "Park rezidentinin istehsal texnikası üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Rezident də yalnız idxala düşür, 10 il."),
    Q("164.1.26", "İnvestisiya təşviqi alanın texnikası üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Yalnız idxal, 7 il."),
    Q("164.1.40", "KOB klaster şirkətinin texnikası üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "İstehsal-emal məqsədilə idxal. Satış yazılmayıb."),
    Q("164.1.28", "Gəmiqayırma üçün gətirilən mallarda hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Gəminin öz istehsalı burada yoxdur — malların idxalı."),
    Q("164.1.38", "Mülki aviasiya təyyarəsi, mühərrik, ehtiyat hissə üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Gətirmək azaddır. Satış yazılmayıb."),
    Q("164.1.50", "Daimi nümayəndəliyi olmayan xarici şirkətin təyyarəni rezidentə verməsi hansı əməliyyatdır?", ["İcarə / lizinq", "İdxal", "Satış", "Xidmət"], "İcarə / lizinq", "Təyyarə idxalı ayrı, icarəsi ayrıdır."),
    Q("164.1.38", "Təyyarənin idxalı azaddır, xarici icarəsi isə heç vaxt azad olmur. Bu fikir:", D, "Səhvdir", "İdxal ayrıca, icarə ayrıca azad ola bilər."),

    Q("164.1.41-1", "Hibrid avtomobil (3 ildən yeni, 2500 sm³-ədək) üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Həm gətirmək, həm satmaq."),
    Q("164.1.41-2", "Elektrik doldurucu (2-ci və 3-cü səviyyə) üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Həm idxal, həm satış."),
    Q("164.1.41-3", "Azərbaycanda istehsal olunan minik avtomobili üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "Yerli minikin satışı. İdxal bu qaydaya düşmür."),
    Q("164.1.41-3", "Xaricdən gətirilmiş minik avtomobilinin satışı da yerli minik kimi azaddır?", B, "Xeyr", "Yalnız ölkədə istehsal olunan."),
    Q("164.1.41-4", "Yerli avtobus və yük avtomobili üçün satış azaddır. Ehtiyat hissəsi üçün nə azaddır?", ["İstehsal məqsədilə idxal", "Yalnız satış", "Yalnız xidmət", "Heç nə"], "İstehsal məqsədilə idxal", "Hazır maşın: satış. Ehtiyat hissə: idxal."),
    Q("164.1.41-5", "Raritet avtomobil üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "İldə 1 ədəd həddində idxal. Satış yazılmayıb."),
    Q("164.1.41", "Sənaye parkının elektrik avtobusu (oturacaqsız) üçün hansılar azaddır?", OP, "İdxal və satış", "Oturacaqsız idxal + quraşdırıb satış."),
    Q("164.1.41-1", "Hibrid: idxal və satış. Yerli minik: yalnız satış. Bu fikir:", D, "Düzgündür", "Hibrid gətirilə də bilər, yerli minik isə ölkədə istehsal olunub satılır."),
    Q("164.1.41-3", "Bunlardan hansı azaddır?", ["Gəncədə istehsal olunub satılan minik", "Xaricdən gətirilib satılan minik", "Köhnə hibrid (5 illik)", "3000 sm³-lik hibrid"], "Gəncədə istehsal olunub satılan minik", "Yerli istehsal satışı. Digərləri şərtə düşmür."),

    Q("164.1.55", "Külçə, sikkə, qranul qızıl-gümüş üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "Satış. İdxal burada yoxdur."),
    Q("164.1.54", "Zərgərlik dəzgahı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Dəzgahın gətirilməsi. Hazır üzük satışı yox."),
    Q("164.1.55", "Qızıl üzük satışı da külçə satışı kimi azaddır?", B, "Xeyr", "Yalnız külçə, sikkə, qranul forması."),
    Q("164.1.54", "Zərgərlik dəzgahını gətirmək azaddır, hazır üzükləri satmaq isə bu qaydaya düşmür. Bu fikir:", D, "Düzgündür", "Dəzgah idxalı ayrı, məmulat satışı ayrı."),

    Q("164.1.56", "Minatəmizləmə texnikasını xaricdən gətirmək hansı əməliyyatdır?", OP, "Yalnız idxal", "İdxal ayrıca yazılıb."),
    Q("164.1.56-1", "Minatəmizləmə texnikasını ölkədə düzəldib satmaq hansı əməliyyatlardır?", OP, "İstehsal və satış", "İstehsal və satış idxaldan ayrıdır."),
    Q("164.1.56", "Minatəmizləmə: gətirmək ayrı, ölkədə istehsal-satış ayrı azadolmadır. Bu fikir:", D, "Düzgündür", "Biri idxal, biri istehsal-satış."),

    Q("164.1.19", "Müdafiə məmulatı üçün hansılar azad ola bilər?", ["İdxal, satış, təmir və texniki xidmət", "Yalnız idxal", "Yalnız satış", "Yalnız təmir"], "İdxal, satış, təmir və texniki xidmət", "Xammal-avadanlıq idxalı + satış + təmir + xidmət."),
    Q("164.1.19", "Müdafiə məmulatının təmiri də satış kimi azaddır?", B, "Bəli", "Təmir və texniki xidmət də daxildir."),
    Q("164.1.1", "Özəlləşdirmə ilə alınan əmlak hansı əməliyyata yaxındır?", ["Satış (alış)", "İdxal", "Xidmət", "İstehsal"], "Satış (alış)", "Dövlətdən alınan əmlakın dəyəri. İcarə haqqı isə ayrıca."),
    Q("164.1.1", "Dövlət əmlakının icarə haqqının büdcə hissəsi hansı əməliyyatdır?", ["İcarə", "İdxal", "İstehsal", "Xidmət"], "İcarə", "İcarə haqqı, mal satışı deyil."),
    Q("164.1.17", "Şirkət payı və səhmi hansı əməliyyatdır?", ["Satış", "İdxal", "Xidmət", "İstehsal"], "Satış", "Pay və səhmin təqdimi."),
    Q("164.1.3", "Valyuta və qiymətli kağız üçün hansı əməliyyatlar azaddır?", OP, "İdxal və satış", "Göndərmə və idxal. Numizmatika çıxılır."),
    Q("164.1.5", "Nizamnaməyə pay kimi əmlak qoyuluşu idxal mallına da düşür?", B, "Xeyr", "İdxal olunan əmlak istisnadır. Əsas vəsait də."),
    Q("164.1.20", "Humanitar yardım malı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Gətirilən mallar. Satış yazılmayıb."),
    Q("164.1.21", "Xeyriyyə və texniki yardım malı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Dövlət və beynəlxalq təşkilat xətti ilə gətirmə."),
    Q("164.1.22", "Fiziki şəxsin şəxsi (qeyri-kommersiya) malı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Sərhəddən keçirmə. Ticarət məqsədi olmamalıdır."),
    Q("164.1.24", "Xüsusi iqtisadi zonaya mal gətirmək hansı əməliyyatdır?", OP, "Yalnız idxal", "Zona idxalı. Aksizli mal çıxılır."),
    Q("164.1.24", "Xüsusi iqtisadi zonada həmin malı satmaq da avtomatik azaddır?", B, "Xeyr", "Yalnız zonaya idxal yazılıb."),
    Q("164.1.25", "Lizinq müqaviləsinin obyekti olan əsas vəsait üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Əsas vəsaitin gətirilməsi."),
    Q("164.1.35", "Siyahıdakı xammal və material üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Yalnız idxal."),
    Q("164.1.36", "Bankın toksik və iflas aktivi üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "Aktivlərin təqdimi (satışı)."),
    Q("164.1.47", "Binanın dövlətə ayrılan hissəsi üçün hansı əməliyyat azaddır?", OP, "Yalnız satış", "Dövlətə verilən hissənin təqdimi. Qalan mənzillər yox."),
    Q("164.1.48", "Publik hüquqi şəxsin büdcə ilə gördüyü iş hansı əməliyyatlardır?", ["İş və xidmət", "İdxal", "Satış", "İstehsal"], "İş və xidmət", "Müqavilə əsasında iş və xidmət."),
    Q("164.1.49", "Formula 1 müqaviləsi üzrə hansılar azad ola bilər?", ["Mal, iş və xidmət", "Yalnız idxal", "Yalnız satış", "Yalnız icarə"], "Mal, iş və xidmət", "Müqavilə çərçivəsində təqdim."),
    Q("164.1.52", "İri neft emalı zavodunun avadanlığı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Yenidənqurma üçün gətirmə. 3 milyon ton şərti."),
    Q("164.1.60", "Siyahıdakı əsas vəsait üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Yalnız idxal."),
    Q("164.1.61", "Qurumun yenidən qurulması avadanlığı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "İdxal, 2023-dən 3 il."),
    Q("164.1.62", "Svop neft-qazı üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Svop çərçivəsində idxal."),
    Q("164.1.63.1", "Dövlət-özəl tərəfdaşlıq texnikası üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Özəl tərəfdaşın idxalı, max 30 il."),
    Q("164.1.64", "Rəsm, kolleksiya, əntiq əşya üçün hansı əməliyyat azaddır?", OP, "Yalnız idxal", "Siyahı və təsdiq sənədi ilə idxal."),

    Q("164.1.33", "Bunlardan hansı azaddır?", ["Baytarlıq preparatının idxalı", "Baytarlıq preparatının aptek satışı", "Kolbasa satışı", "Elektron kitabın idxalı"], "Baytarlıq preparatının idxalı", "Satış, kolbasa və elektron kitab bu qaydalara düşmür."),
    Q("164.1.37", "Bunlardan hansı azaddır?", ["Dondurulmuş ətin satışı", "Kolbasanın satışı", "Ətin idxalı", "Ət emalı zavodunun xidməti"], "Dondurulmuş ətin satışı", "Kəsilmə-dondurulma qalır. Emal, idxal, xidmət yox."),
    Q("164.1.27", "Bunlardan hansı azaddır?", ["Buğdanın idxalı", "Unun idxalı", "Çörəyin idxalı", "Elektron kitabın satışı"], "Buğdanın idxalı", "Un və çörəkdə idxal yazılmayıb."),
    Q("164.1.27", "Bunlardan hansı azaddır?", ["Çörəyin istehsalı", "Buğdanın istehsalı", "Yemin idxalı", "Ətin idxalı"], "Çörəyin istehsalı", "Çörək: istehsal və satış. Digərləri bu cür yazılmayıb."),
    Q("164.1.43", "Bunlardan hansı azaddır?", ["Kəpəyin istehsalı", "Kəpəyin idxalı", "Yemin idxalı", "Preparatın satışı"], "Kəpəyin istehsalı", "Kəpək: istehsal və satış."),
    Q("164.1.41-3", "Bunlardan hansı azaddır?", ["Yerli minikin satışı", "Yerli minikin idxalı", "Raritetin satışı", "Köhnə hibridin idxalı"], "Yerli minikin satışı", "Yerli minikdə idxal yoxdur. Raritetdə satış yoxdur."),
    Q("164.1.12", "Bunlardan hansı azaddır?", ["Metro bileti", "Avtobus bileti", "Taksi", "Marşrut"], "Metro bileti", "Yalnız metropoliten xidməti."),
    Q("164.1.8", "Bunlardan hansı azaddır?", ["Kitabın çapı", "Nəşriyyatın reklamı", "Elektron kitabın idxalı", "Numizmatika sikkəsi"], "Kitabın çapı", "Reklam, elektron idxal və numizmatika çıxır."),
    Q("164.1.34-2", "Bunlardan hansı azaddır?", ["Fermerə aqrotexniki xidmət", "Başqasının pomidorunu alıb satmaq", "Texnikanı mülkiyyətlə satmaq (lizinq azadolması kimi)", "Siyahısız gübrə satışı"], "Fermerə aqrotexniki xidmət", "Xidmət azaddır. Digərləri şərtə düşmür."),
    Q("164.1.55", "Bunlardan hansı azaddır?", ["Qızıl külçənin satışı", "Qızıl üzüyün satışı", "Zərgərlik dəzgahının satışı", "Qızıl qranulun idxalı"], "Qızıl külçənin satışı", "Külçə-sikkə-qranul satışı. Dəzgahda idxal var, satış yox."),
    Q("164.1.2", "Bunlardan hansı azaddır?", ["Bankın kredit xidməti", "Park texnikasının ölkədə satışı (operator qaydası)", "Humanitar malın ölkədə satışı", "Zona idxalından sonra aksizli mal"], "Bankın kredit xidməti", "Maliyyə xidməti. Operator, humanitar və zona — əsasən idxaldır."),
    Q("164.1.18", "Fermerin öz buğdasını satması azaddır. Eyni buğdanı tacir alıb satsa?", ["Tacir azad deyil", "Tacir də azaddır", "Yalnız idxal edəndə azaddır", "Yalnız emal edəndə azaddır"], "Tacir azad deyil", "Yalnız istehsalçının öz məhsulu."),
    Q("164.1.7", "Kağız dərslik gətirmək azaddır. Elektron dərslik gətirmək?", ["Azad deyil", "Eyni qaydada azaddır", "Yalnız satışda azaddır", "Yalnız istehsalda azad deyil"], "Azad deyil", "Elektron kitablar idxal-satışdan çıxarılıb."),
    Q("164.1.24", "Xüsusi iqtisadi zonaya aksizsiz mal gətirmək azaddır. Aksizli mal?", ["Azad deyil", "Həm də azaddır", "Yalnız satışda azaddır", "Yalnız xidmətdə azaddır"], "Azad deyil", "Aksizli mallar istisnadır."),
    Q("164.1.13", "Universitetin dərs haqqı azaddır. Bufet və yataqxana?", ["Azad deyil", "Həm də azaddır", "Yalnız bufet azaddır", "Yalnız yataqxana azaddır"], "Azad deyil", "Yan xidmətlər istisnadır."),
    Q("164.1.3", "Dollar gətirmək azaddır. Kolleksiya sikkəsi gətirmək?", ["Azad deyil", "Eyni qaydada azaddır", "Yalnız satışda azaddır", "Yalnız xidmətdə azaddır"], "Azad deyil", "Numizmatika istisnadır."),

    Q("164.1.33", "Eyni cədvəldə: damazlıq — idxal+satış, preparat — yalnız idxal. Bu fikir:", D, "Düzgündür", "Yan-yana yazılıblar, əməliyyat fərqlidir."),
    Q("164.1.37", "Ət və yem eyni ildə başlayır, amma əməliyyat da eynidir: yalnız satış. Bu fikir:", D, "Düzgündür", "Hər ikisi 2020-dən 7 il, hər ikisi satış."),
    Q("164.1.34", "Kənd təsərrüfatı texnikasında istehsal da azaddır, damazlıq heyvanda isə istehsal yazılmayıb. Bu fikir:", D, "Düzgündür", "Texnika: üç əməliyyat. Damazlıq: iki."),
    Q("164.1.27", "Unun istehsalı azaddır, buğdanın istehsalı isə bu qaydada yoxdur. Bu fikir:", D, "Düzgündür", "Buğda idxal-satış, un istehsal-satış."),
    Q("164.1.41-4", "Yerli avtobusun satışı azaddır, ehtiyat hissəsinin istehsal məqsədilə idxalı da. Bu fikir:", D, "Düzgündür", "İki ayrı əməliyyat eyni qaydada."),
    Q("164.1.40", "KOB klaster gətirdiyi texnikanı sonra ölkədə satırsa, satış da avtomatik azaddır?", B, "Xeyr", "Yalnız idxal yazılıb."),
    Q("164.1.26", "İnvestisiya təşviqi ilə gətirilən dəzgahın sonrakı satışı da 7 il azaddır?", B, "Xeyr", "Azadolma idxala aiddir."),
    Q("164.1.16", "Park rezidenti gətirdiyi texnikanı satır. Satış da 10 il azaddır?", B, "Xeyr", "Rezident üçün yalnız idxal."),
    Q("164.1.15", "Park operatorunun gətirdiyi texnikanı satmaq da infrastruktur idxalı kimidir?", B, "Xeyr", "Operator qaydası idxaldır."),
    Q("164.1.4", "Mərkəzi Bankın gətirdiyi qızılı bazarda satmaq da aktiv idxalı kimidir?", B, "Xeyr", "Aktivə yerləşdirmə üçün idxal, bazar satışı yox."),
    Q("164.1.64", "Əntiq əşyanın idxalı azaddır. Ölkədə satışı da avtomatik azaddır?", B, "Xeyr", "Yalnız idxal yazılıb."),
    Q("164.1.9-1", "Mərkəzi Bank üçün xidmət azaddır, Bankın vəzifəsi üçün idxal da. Bu fikir:", D, "Düzgündür", "Həm idxal, həm Bank üçün iş-xidmət."),
    Q("164.1.10", "Neft Fondunun vəzifəsi üçün mal gətirmək azaddır, Fond üçün iş və xidmət də. Bu fikir:", D, "Düzgündür", "Mal, iş, xidmət."),
    Q("164.1.42", "Haqqı ödənilən ictimai işə işçi vermək mal satışı deyil, əməliyyat-xidmətdir. Bu fikir:", D, "Düzgündür", "İşçi qüvvəsinin təqdimi."),
    Q("164.1.59", "Vəkilin order markası ödənişi xidmət/ödənişdir, mal idxalı deyil. Bu fikir:", D, "Düzgündür", "Kollegiyaya ödəniş.")
  ];
})(typeof window !== "undefined" ? window : globalThis);
