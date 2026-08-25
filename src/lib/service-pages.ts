import { business } from "./business";
import type { FaqItem } from "./schema";

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
};

export type ServicePageContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: ServiceSection[];
  bullets: string[];
  faqs: FaqItem[];
  related: { href: string; label: string }[];
};

const ADRES = business.addressDisplay;
const SAAT = business.openingHours.display;

export const servicePages: Record<string, ServicePageContent> = {
  gozluk: {
    slug: "gozluk",
    path: "/gozluk",
    metaTitle: "Reçeteli Gözlük | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de reçeteli optik gözlük. Yüz şeklinize uygun çerçeve seçimi, cam montajı, ayar ve SGK ile gözlük alımı Ebrar Optik'te.",
    h1: "Kırıkkale'de Reçeteli Optik Gözlük",
    intro: [
      "Göz doktorunuzun yazdığı reçeteyi elinize aldıktan sonraki kısım bizim işimiz. Ebrar Optik olarak Kırıkkale Merkez'de, reçetenizdeki numaraya uygun camı seçmenize, o cama ve yüzünüze uyan çerçeveyi bulmanıza ve gözlüğü rahat kullanabileceğiniz şekilde ayarlamanıza yardımcı oluyoruz.",
      "Gözlük, kataloglardan seçilen bir aksesuar değil; kişiye göre hazırlanan bir üründür. Aynı numarada iki kişi aynı çerçeveyi taktığında ikisi de rahat etmeyebilir. Bu yüzden ölçü almadan, deneme yaptırmadan ve kullanım alışkanlığınızı sormadan satış yapmıyoruz.",
    ],
    sections: [
      {
        heading: "Reçetenizle mağazaya geldiğinizde ne oluyor?",
        paragraphs: [
          "Önce reçetenizi okuyup numaranızın hangi cam tipleriyle çalışabileceğini konuşuyoruz. Yüksek numaralarda cam kalınlığı, ilerleyen yaşlarda yakın-uzak ihtiyacının birleşmesi, ekran başında geçen süre gibi etkenler seçimi doğrudan değiştiriyor.",
          "Ardından çerçeve denemesine geçiyoruz. Seçtiğiniz çerçevenin göz merkezinizle hizalanması, camın çerçeveye doğru oturması ve gözlüğün burnunuzda ve kulağınızın arkasında baskı yapmaması için ölçü alıyoruz. Cam montajından sonra gözlüğü takıp yürümenizi, okumanızı ve telefonunuza bakmanızı istiyoruz; rahatsızlık varsa ayarı mağazada yapıyoruz.",
          "Ebrar Optik bir optisyenlik müessesesidir, muayene yapmaz. Numaranızı bilmiyorsanız veya reçeteniz eskiyse önce bir göz doktoruna gitmeniz gerekir; bu konuda sizi yönlendirebiliriz.",
        ],
      },
      {
        heading: "Çerçeve seçerken nelere bakıyoruz?",
        paragraphs: [
          "Yüz şekli işin görünen kısmı: yuvarlak hatlı bir yüzde köşeli çerçeveler dengeyi kurar, köşeli bir yüzde yumuşak hatlı modeller daha uyumlu durur. Ama tek ölçüt bu değil.",
          "Günlük kullanımınız en az yüz şekliniz kadar belirleyici. Gün boyu masa başında çalışan biriyle sahada hareket eden biri için farklı çerçeve önerileri çıkar. Sporla ilgileniyorsanız kaymayan ve darbeye dayanıklı modellere, çok sık gözlük çıkarıp takıyorsanız menteşesi güçlü olanlara yöneliriz.",
          "Numaranız da çerçeveyi sınırlayabilir. Yüksek numaralı camlar geniş ve ince çerçevelerde kalın görünür; bu durumda daha küçük göz açıklığına sahip bir çerçeve hem estetik hem konfor açısından daha iyi sonuç verir.",
        ],
      },
      {
        heading: "Cam seçenekleri",
        paragraphs: [
          "Reçetenizdeki numara camın gücünü belirler, ama camın kendisiyle ilgili birkaç karar daha var. İnceltilmiş camlar yüksek numaralarda kalınlığı azaltır. Anti-reflet kaplama gece araç kullanırken ve ekran karşısında yansımayı düşürür. Mavi ışık filtresi uzun süre ekran başında olanların tercih ettiği bir seçenek. Yakın ve uzak ihtiyacı bir aradaysa progresif camlar tek gözlükle çözüm sunar.",
          "Hangisinin gerekli olduğunu peşinen söylemek doğru olmaz; reçeteniz ve günlük rutininiz üzerinden birlikte karar veriyoruz. Güncel seçenekler ve stok durumu için mağazaya uğrayabilir veya telefonla sorabilirsiniz.",
        ],
      },
      {
        heading: "SGK ile gözlük alımı",
        paragraphs: [
          "Ebrar Optik SGK anlaşmalı bir optisyenlik müessesesidir. Reçetenizle geldiğinizde çerçeve ve cam hakkınızı mağazamızda kullanabilirsiniz; kurumun karşıladığı tutar toplam bedelden düşülür, aradaki farkı siz ödersiniz.",
          "Reçetenin geçerlilik süresi ve hakkınızın dolup dolmadığı gibi ayrıntıları ayrı bir sayfada topladık. Süreci baştan sona okumak isterseniz SGK anlaşmalı optik sayfamıza göz atın.",
        ],
      },
      {
        heading: "Gözlüğünüzü teslim aldıktan sonra",
        paragraphs: [
          "İlk günlerde hafif bir alışma süreci normaldir, özellikle numara değiştiyse veya ilk kez progresif kullanıyorsanız. Baş dönmesi ya da zorlanma birkaç gün içinde geçmiyorsa gözlüğü getirin, ayarına ve montajına yeniden bakalım.",
          "Gözlüğünüz zamanla gevşer, burunluğu yıpranır, vidası boşalır. Bunların hepsi mağazada çözülebilecek işler. Ayrıca camı kırıldığında veya numaranız değiştiğinde çerçevenizi atmanız gerekmez; mevcut çerçeveye yeni cam montajı yapıyoruz.",
        ],
      },
    ],
    bullets: [
      "Reçeteye uygun cam seçimi ve montaj",
      "Yüz şekli ve yaşam tarzına göre çerçeve danışmanlığı",
      "Çocuk ve yetişkin için optik gözlük seçenekleri",
      "SGK anlaşmalı: çerçeve ve cam hakkınızı mağazamızda kullanabilirsiniz",
      "Cam ve çerçeve değişimi, ayar ve bakım desteği",
    ],
    faqs: [
      {
        question: "Reçetem kaç gün geçerli?",
        answer:
          "SGK kapsamında kullanılacak reçetelerin belirli bir geçerlilik süresi vardır ve süre dolduğunda yenilenmesi gerekir. Reçetenizin tarihini kontrol edip mağazaya gelmeden önce bize sorabilirsiniz.",
      },
      {
        question: "Gözlüğüm ne kadar sürede hazır olur?",
        answer:
          "Süre seçtiğiniz camın tipine ve stok durumuna göre değişir. Standart camlarda süreç kısa sürerken inceltilmiş veya progresif camlarda hazırlık daha uzun sürebilir. Net süreyi seçim yaptığınızda söylüyoruz.",
      },
      {
        question: "Numaramı bilmiyorum, ölçüm yapıyor musunuz?",
        answer:
          "Ebrar Optik bir optik mağazasıdır, göz muayenesi yapmaz. Numaranızı öğrenmek için bir göz doktoruna başvurmanız gerekir. Reçetenizi aldıktan sonra gerisini birlikte hallederiz.",
      },
      {
        question: "Kendi çerçeveme cam taktırabilir miyim?",
        answer:
          "Evet. Çerçeveniz sağlamsa ve seçtiğiniz cam o çerçeveye uygunsa mevcut çerçevenize cam montajı yapıyoruz. Çerçeveyi getirin, birlikte değerlendirelim.",
      },
    ],
    related: [
      { href: "/sgk-anlasmali-optik", label: "SGK anlaşmalı optik" },
      { href: "/cam-cerceve-degisimi", label: "Cam ve çerçeve değişimi" },
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/lens", label: "Lens çeşitleri" },
      { href: "/cocuk-gozlugu", label: "Çocuk gözlüğü" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
    ],
  },

  "gunes-gozlugu": {
    slug: "gunes-gozlugu",
    path: "/gunes-gozlugu",
    metaTitle: "Güneş Gözlüğü ve Numaralı Güneş Gözlüğü | Ebrar Optik",
    metaDescription:
      "Kırıkkale'de UV korumalı güneş gözlüğü ve numaralı güneş gözlüğü. Polarize cam seçenekleri ve istediğiniz çerçeveye özel cam montajı Ebrar Optik'te.",
    h1: "Güneş Gözlüğü ve Numaralı Güneş Gözlüğü",
    intro: [
      "Güneş gözlüğü yazlık bir aksesuar değil, gözünüzü koruyan bir üründür. Kırıkkale'de yaz aylarındaki güneşin yanı sıra kışın kar ve asfalt yansıması da gözü yorar. Ebrar Optik'te hem korumayı hem görünümü birlikte düşünerek seçim yapmanıza yardımcı oluyoruz.",
      "Numara kullanıyorsanız güneşte gözlüğünüzü çıkarmak zorunda kalmanız gerekmiyor. Beğendiğiniz çerçeveye reçetenize uygun numaralı güneş camı monte ediyoruz.",
    ],
    sections: [
      {
        heading: "UV koruması neden pazarlık konusu değil?",
        paragraphs: [
          "Koyu renkli ama UV koruması olmayan bir cam, korumasız gözden daha zararlı olabilir. Camın koyuluğu göz bebeğinin genişlemesine yol açar, koruma yoksa daha fazla ultraviyole içeri girer. Bu yüzden fiyatı ne olursa olsun UV koruması bulunmayan gözlükleri önermiyoruz.",
          "Camın rengi ayrı bir konu. Gri camlar renkleri en az bozan seçenektir ve genel kullanım için uygundur. Kahverengi tonlar kontrastı artırır, bulutlu havalarda ve sürüşte tercih edilir. Yeşil camlar göz yorgunluğunu azaltmasıyla bilinir.",
        ],
      },
      {
        heading: "Polarize cam ne işe yarar?",
        paragraphs: [
          "Polarize camlar yatay yüzeylerden gelen yansımayı keser. Islak asfaltta, su üzerinde ve karda gözü rahatsız eden parlamayı belirgin şekilde azaltır. Araç kullananların ve balıkçılık, kayak gibi aktivitelerle uğraşanların en çok fayda gördüğü seçenek budur.",
          "Her durum için gerekli değildir; bazı dijital gösterge panellerinin okunmasını zorlaştırabilir. Kullanım alanınızı anlattığınızda polarize gerekip gerekmediğini birlikte netleştiriyoruz.",
        ],
      },
      {
        heading: "Numaralı güneş gözlüğü nasıl yapılıyor?",
        paragraphs: [
          "Süreç normal gözlükle aynı başlıyor: geçerli bir reçete ve uygun bir çerçeve. Fark, monte edilen camın hem numaralı hem güneş camı olması. Böylece dışarıda net görürken gözünüz de korunmuş oluyor.",
          "Her çerçeve her numaraya uygun olmayabilir. Özellikle yüksek numaralarda ve çok kavisli sporcu çerçevelerinde camın çerçeveye doğru oturması teknik sınırlar taşır. Seçtiğiniz modelin numaranızla çalışıp çalışmayacağını denemeden önce söylüyoruz ki boşuna beklenti kurmayın.",
          "Alternatif olarak mevcut numaralı gözlüğünüze takılan güneş klipsleri de bir çözüm. Tek gözlükle hem iç mekanda hem dışarıda idare etmek isteyenler için pratik bir seçenek.",
        ],
      },
      {
        heading: "Yüzünüze uyan modeli bulmak",
        paragraphs: [
          "Güneş gözlüğü yüzün büyük bir bölümünü kapladığı için model seçimi normal gözlüğe göre daha belirleyici. Aviator ve kelebek modeller geniş yüzlerde dengeli durur, kedi gözü formlar yüzü uzatır, kare modeller yumuşak hatlı yüzlerde karakter katar.",
          "Camın gözünüzü tam örtmesi de önemli. Yandan giren ışığı engellemeyen küçük bir cam, koruma açısından eksik kalır. Mağazada deneyerek hem oturuşu hem kapsama alanını birlikte kontrol ediyoruz.",
        ],
      },
    ],
    bullets: [
      "UV korumalı güneş gözlüğü seçenekleri",
      "Numaralı (dereceli) güneş gözlüğü camı montajı",
      "Polarize cam alternatifleri",
      "Mevcut gözlüğünüz için güneş klipsi seçeneği",
      "Farklı yüz şekillerine uygun modeller",
    ],
    faqs: [
      {
        question: "Numaralı güneş gözlüğü yaptırabilir miyim?",
        answer:
          "Evet. Beğendiğiniz çerçeveye reçetenize uygun numaralı güneş camı monte ediyoruz. Reçetenizle mağazamıza gelmeniz yeterli.",
      },
      {
        question: "Kendi güneş gözlüğüme numaralı cam taktırabilir miyim?",
        answer:
          "Çoğu durumda evet. Çerçevenin yapısı ve kavisi numaranıza uygunsa mevcut güneş gözlüğünüzün camlarını numaralı camla değiştirebiliriz. Çerçeveyi getirin, uygunluğunu birlikte kontrol edelim.",
      },
      {
        question: "Polarize cam ile normal güneş camı arasındaki fark ne?",
        answer:
          "İkisi de UV korur; polarize olan ek olarak asfalt, su ve kar gibi yüzeylerden gelen yansımayı keser. Araç kullanırken ve açık havada uzun süre kalanlarda fark belirgin hissedilir.",
      },
      {
        question: "Güneş gözlüğü SGK kapsamında mı?",
        answer:
          "SGK'nın optik ürünlerdeki katkısı reçeteye bağlı olarak işler ve her ürün için aynı şekilde uygulanmaz. Sizin durumunuzda hakkınızın nasıl işleyeceğini mağazada reçetenize bakarak netleştirebiliriz.",
      },
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/cam-cerceve-degisimi", label: "Cam ve çerçeve değişimi" },
      { href: "/sgk-anlasmali-optik", label: "SGK anlaşmalı optik" },
      { href: "/lens", label: "Lens çeşitleri" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
    ],
  },

  lens: {
    slug: "lens",
    path: "/lens",
    metaTitle: "Kontakt Lens | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de günlük, haftalık, aylık ve renkli kontakt lens. Lens tipi seçimi, hijyen ve kullanım danışmanlığı Ebrar Optik'te.",
    h1: "Kontakt Lens Çeşitleri",
    intro: [
      "Kontakt lens, gözlüğün yerine geçebilecek ya da yanında kullanılabilecek bir seçenek. Spor yaparken, özel günlerde ya da gün boyu gözlük takmak istemediğinizde işinizi görür. Ebrar Optik'te günlük, haftalık, aylık ve renkli lens alternatifleri bulabilirsiniz.",
      "Doğru lens tipi kişiden kişiye değişir. Reçeteniz, gözünüzün yapısı, ne sıklıkla kullanacağınız ve hijyen rutinine ne kadar vakit ayırabileceğiniz seçimi doğrudan etkiler.",
    ],
    sections: [
      {
        heading: "Günlük, haftalık, aylık: hangisi size uygun?",
        paragraphs: [
          "Günlük lensler her sabah yeni bir çift takıp akşam atmanız üzerine kuruludur. Temizlik solüsyonu, kutu ve saklama derdi yoktur; hijyen açısından en güvenli seçenektir. Ara sıra lens kullananlar ve alerjiye yatkın gözler için genellikle en uygun tip budur.",
          "Aylık lensler düzenli kullananlar için daha ekonomik bir düzen sunar, ancak her gün temizlenmesi ve doğru solüsyonda saklanması gerekir. Haftalık seçenekler ikisinin arasında kalır.",
          "Sürekli kullanacaksanız ve rutini aksatmayacağınıza güveniyorsanız aylık, düzensiz kullanacaksanız günlük mantıklıdır. Bu kararı verirken alışkanlıklarınızı sormamızın sebebi bu.",
        ],
      },
      {
        heading: "Renkli lensler",
        paragraphs: [
          "Renkli lensler hem numaralı hem numarasız olarak kullanılıyor. Numarasız olanlar da tıbbi ürün sayılır; gözün üzerine oturan her ürün gibi doğru ölçüde ve doğru şekilde kullanılması gerekir.",
          "Renk seçerken göz renginizin açıklığı belirleyici. Koyu gözlerde açık renkler daha örtücü lens gerektirir, açık gözlerde daha doğal geçişler mümkündür. Mağazada renk kartları üzerinden birlikte değerlendirebiliriz.",
        ],
      },
      {
        heading: "İlk kez lens kullanacaklar için",
        paragraphs: [
          "İlk günlerde lensi takıp çıkarmak zaman alır, bu normaldir. Elleri sabunla yıkayıp iyice kurulamak, tırnakları kısa tutmak ve lensi hep aynı gözle eşleştirmek işi kolaylaştırır.",
          "Lensin ters dönmüş olup olmadığını kenarından anlayabilirsiniz: düzgün duran lens kâse gibi, ters dönen ise kenarları dışa taşmış görünür. Gözde batma, kızarıklık veya bulanıklık varsa lensi çıkarın; geçmiyorsa göz doktoruna başvurun.",
          "Lens numarası gözlük numarasıyla birebir aynı olmayabilir; lens göze temas ettiği için hesaplama farklıdır. Bu yüzden lens için ayrı bir reçete ve ölçü gerekebilir.",
        ],
      },
      {
        heading: "Hijyen ve kullanım kuralları",
        paragraphs: [
          "Lens kutusunun ve solüsyonun düzenli değiştirilmesi, lensle uyunmaması ve lensle duş alıp havuza girilmemesi temel kurallar. Su, lens için steril değildir ve ciddi enfeksiyon riski taşır.",
          "Lensin kullanım süresi doldu diye atmakta tereddüt etmeyin; süresi geçmiş lens gözde tahrişe yol açar. Süreleri ve saklama koşullarını mağazada teslim sırasında tek tek anlatıyoruz.",
        ],
      },
    ],
    bullets: [
      "Günlük, haftalık ve aylık lens seçenekleri",
      "Numaralı ve numarasız renkli lens alternatifleri",
      "Kullanım ve hijyen konusunda bilgilendirme",
      "Reçeteli lens sipariş desteği",
      "Lens bakım solüsyonları",
    ],
    faqs: [
      {
        question: "Hangi lens çeşitlerini satıyorsunuz?",
        answer:
          "Günlük, haftalık, aylık ve renkli kontakt lens seçenekleri sunuyoruz. Uygun tip, reçetenize ve kullanım alışkanlığınıza göre belirlenir.",
      },
      {
        question: "Gözlük numaramla lens alabilir miyim?",
        answer:
          "Lens numarası gözlük numarasından farklı olabilir, çünkü lens doğrudan gözün üzerine oturur. Sağlıklı sonuç için lens reçetesiyle gelmeniz gerekir.",
      },
      {
        question: "Lensle uyunur mu?",
        answer:
          "Özel olarak uzun süreli kullanıma uygun olduğu belirtilmedikçe lensle uyumak önerilmez. Gözün oksijen almasını kısıtlar ve enfeksiyon riskini artırır.",
      },
      {
        question: "Numarasız renkli lens kullanmak sakıncalı mı?",
        answer:
          "Numarasız da olsa renkli lens tıbbi bir üründür. Doğru ölçüde seçilmesi, hijyen kurallarına uyulması ve kullanım süresine sadık kalınması gerekir.",
      },
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
    ],
  },

  "sgk-anlasmali-optik": {
    slug: "sgk-anlasmali-optik",
    path: "/sgk-anlasmali-optik",
    metaTitle: "SGK Anlaşmalı Optik | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de SGK anlaşmalı optik. Reçetenizle çerçeve ve cam hakkınızı kullanın; süreç, gerekli belgeler ve hak sorgulama adımları Ebrar Optik'te.",
    h1: "SGK Anlaşmalı Optik — Kırıkkale",
    intro: [
      "Ebrar Optik, Kırıkkale Merkez'de hizmet veren SGK anlaşmalı bir optisyenlik müessesesidir. Göz doktorunuzdan aldığınız reçeteyle mağazamıza gelip çerçeve ve cam hakkınızı doğrudan burada kullanabilirsiniz.",
      "Süreç çoğu kişinin sandığından basit, ama birkaç ayrıntıyı bilmeden gelirseniz ikinci kez gelmek zorunda kalabilirsiniz. Aşağıda sırayı, gerekenleri ve sık karıştırılan noktaları topladık.",
    ],
    sections: [
      {
        heading: "Süreç nasıl işliyor?",
        paragraphs: [
          "Birinci adım muayene. Devlet hastanesinde veya SGK ile anlaşmalı bir özel sağlık kuruluşunda göz doktoruna görünüp reçetenizi alıyorsunuz. Optik mağazaları muayene yapamaz; bizim de yapmadığımızı baştan söyleyelim.",
          "İkinci adım mağaza. Reçetenizle bize geliyorsunuz, çerçeve ve cam seçimini birlikte yapıyoruz. Kurumun karşıladığı tutar toplam bedelden düşülüyor, aradaki farkı siz ödüyorsunuz. Seçtiğiniz ürün kurumun karşıladığı tutarın altındaysa fark ödemezsiniz.",
          "Üçüncü adım teslim. Cam montajı tamamlandığında gözlüğünüzü takıp deniyorsunuz, gerekiyorsa ayarını yapıyoruz.",
        ],
      },
      {
        heading: "Yanınızda ne getirmeniz gerekiyor?",
        paragraphs: [
          "Geçerli bir göz doktoru reçetesi ve kimliğiniz yeterli. Reçete başkası adınaysa (örneğin bakmakla yükümlü olduğunuz bir yakınınız), o kişinin kimlik bilgileri gerekir.",
          "Mevcut gözlüğünüz varsa onu da getirin. Numaranızın nasıl değiştiğini görmek, önceki çerçevenizin size nasıl oturduğunu değerlendirmek ve gerekirse aynı çerçeveye yeni cam takmak için işimize yarıyor.",
        ],
      },
      {
        heading: "Hakkınız var mı, nasıl öğrenirsiniz?",
        paragraphs: [
          "SGK'nın optik yardımı süreye bağlı çalışır. Çerçeve için belirli bir süre geçmeden yeni hak doğmaz; cam için ise numaranızda belirli bir düzeyde değişiklik olması durumunda süre beklemeden hak kullanılabilir.",
          "Hakkınızın dolu olup olmadığını e-Devlet üzerinden \"Optik Cihaz Sorgulama\" hizmetiyle kendiniz görebilirsiniz. Emin değilseniz mağazaya geldiğinizde birlikte kontrol ediyoruz; boşuna çerçeve seçip sonunda hakkınız çıkmaması gibi bir durumla karşılaşmayın diye bu adımı başta yapmayı tercih ediyoruz.",
          "SGK'nın kuralları ve karşıladığı tutarlar zaman içinde güncellenebiliyor. Bu sayfadaki bilgiler genel işleyişi anlatır; sizin dosyanızdaki güncel durum için mağazadan teyit almanız en doğrusu.",
        ],
      },
      {
        heading: "Sık karıştırılan noktalar",
        paragraphs: [
          "Reçetenin süresiz olduğu sanılıyor, oysa belirli bir süre içinde kullanılması gerekiyor; süre dolarsa yeniden muayene gerekir. Tarihi geçmiş reçeteyle gelen çok oluyor, o yüzden reçeteyi aldıktan sonra fazla bekletmemenizi öneriyoruz.",
          "İkinci nokta: optik ürünler yalnızca ruhsatlı optisyenlik müesseselerinde, optisyen tarafından kişiye özel hazırlanır. İnternetten numaralı gözlük alıp SGK'ya saydırmak mümkün değil.",
          "Üçüncüsü: SGK katkısı bir indirim kuponu gibi çalışmaz. Kurumun karşıladığı tutar sabittir; daha pahalı bir ürün seçtiğinizde aradaki farkı siz ödersiniz. Bütçenizi baştan söylerseniz farkı en aza indiren seçenekleri gösterebiliriz.",
        ],
      },
    ],
    bullets: [
      "SGK anlaşmalı optisyenlik müessesesi",
      "Reçetenizle çerçeve ve cam hakkınızı mağazamızda kullanabilirsiniz",
      "Hak sorgulamasında yardımcı oluyoruz",
      "Farkı en aza indiren seçenekleri birlikte değerlendiriyoruz",
      `Adres: ${ADRES}`,
    ],
    faqs: [
      {
        question: "Ebrar Optik SGK anlaşmalı mı?",
        answer:
          "Evet. Ebrar Optik, Kırıkkale Merkez'de hizmet veren SGK anlaşmalı bir optisyenlik müessesesidir. Reçetenizle gelip hakkınızı mağazamızda kullanabilirsiniz.",
      },
      {
        question: "SGK gözlük hakkımı nasıl sorgularım?",
        answer:
          "e-Devlet üzerinden \"Optik Cihaz Sorgulama\" hizmetiyle hakkınızın durumunu görebilirsiniz. Dilerseniz mağazaya geldiğinizde birlikte de kontrol edebiliriz.",
      },
      {
        question: "SGK gözlüğün tamamını karşılıyor mu?",
        answer:
          "Kurumun karşıladığı tutar toplam bedelden düşülür; seçtiğiniz ürün bu tutarın üzerindeyse aradaki farkı siz ödersiniz. Fark ödemeden çıkabileceğiniz seçenekler de bulunuyor.",
      },
      {
        question: "Muayene için de size mi gelmeliyim?",
        answer:
          "Hayır. Optik mağazaları muayene yapamaz. Önce bir göz doktoruna görünüp reçetenizi almanız, sonra reçeteyle bize gelmeniz gerekiyor.",
      },
      {
        question: "Reçete başkasının adına olabilir mi?",
        answer:
          "Bakmakla yükümlü olduğunuz kişiler adına düzenlenmiş reçetelerle işlem yapılabilir. Bu durumda ilgili kişinin kimlik bilgilerine ihtiyaç duyuluyor.",
      },
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/cam-cerceve-degisimi", label: "Cam ve çerçeve değişimi" },
      { href: "/cocuk-gozlugu", label: "Çocuk gözlüğü" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
    ],
  },

  "cam-cerceve-degisimi": {
    slug: "cam-cerceve-degisimi",
    path: "/cam-cerceve-degisimi",
    metaTitle: "Gözlük Camı ve Çerçeve Değişimi | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de gözlük camı değişimi, çerçeve değişimi, menteşe ve burunluk onarımı. Mevcut çerçevenize yeni cam montajı Ebrar Optik'te.",
    h1: "Gözlük Camı ve Çerçeve Değişimi",
    intro: [
      "Gözlüğünüzün camı çizildiğinde, kırıldığında veya numaranız değiştiğinde baştan gözlük almanız gerekmiyor. Sevdiğiniz çerçeveyi koruyup yalnızca camını yenileyebilirsiniz. Ebrar Optik'te Kırıkkale Merkez'de cam değişimi, çerçeve değişimi ve gözlük onarımı yapıyoruz.",
      "Aynı şekilde camınız sağlamsa ama çerçeveniz kırıldıysa, uygun bir çerçeve bulup mevcut camlarınızı taşımak çoğu durumda mümkün.",
    ],
    sections: [
      {
        heading: "Cam değişimi",
        paragraphs: [
          "En sık gelen sebep numara değişikliği. Yeni reçetenizle geldiğinizde mevcut çerçevenizin durumunu kontrol ediyoruz; çerçeve sağlamsa ve yeni numaranız o çerçeveyle çalışıyorsa yalnızca camı değiştirmek yeterli oluyor.",
          "İkinci sık sebep çizik ve kırık. Yüzeyi çizilmiş cam, ışığı dağıttığı için hem görüntü kalitesini düşürür hem gözü yorar. Kaplaması yıpranmış camlarda da benzer bir durum olur; parlama ve halelenme artar.",
          "Cam değiştirirken kaplama ve tip seçimini yeniden gözden geçirmek mantıklı. Önceki gözlüğünüzde eksikliğini hissettiğiniz bir şey varsa (gece sürüşünde yansıma, ekran başında yorgunluk) bu değişim onu düzeltmek için iyi bir fırsat.",
        ],
      },
      {
        heading: "Çerçeve değişimi",
        paragraphs: [
          "Çerçeve kırıldığında camlarınızın yeni çerçeveye taşınıp taşınamayacağı camın şekline ve boyutuna bağlı. Cam, yeni çerçeveden büyükse tıraşlanarak uyarlanabilir; küçükse taşınamaz ve yeni cam gerekir. Çerçeveyi ve camı getirin, bakıp net cevap verelim.",
          "Bazen çerçeve kırılmamış olur ama artık size uymuyordur; numaranız yükselmiş ve cam kalın kalıyordur ya da modelden sıkılmışsınızdır. Bu durumda da mevcut reçetenizle yeni bir çerçeve seçebilirsiniz.",
        ],
      },
      {
        heading: "Bakım ve küçük onarımlar",
        paragraphs: [
          "Gözlük gün boyu takılan bir üründür ve zamanla ayarı kaçar. Bir tarafı düşük duran, burnunuzu sıkan ya da kulağınızın arkasında baskı yapan gözlüğün çoğu zaman tek ihtiyacı basit bir ayardır. Bu işlem için gözlüğü bizden almış olmanız gerekmiyor.",
          "Gevşeyen vida, yıpranmış burunluk, esneyen menteşe gibi sorunlar da mağazada çözülüyor. Gözlüğünüzü zorlayarak kendiniz düzeltmeye çalışmayın; özellikle metal çerçevelerde yanlış açıyla bükülen bir sap kolayca kırılır.",
          "Camlarınızı temizlerken kağıt havlu veya gömlek ucu yerine mikrofiber bez kullanın. Kuru silmek, cam üzerindeki toz taneciklerini sürterek zamanla çizik bırakır.",
        ],
      },
      {
        heading: "Numaralı güneş camına dönüştürme",
        paragraphs: [
          "Elinizde beğendiğiniz bir güneş gözlüğü varsa, camlarını numaralı güneş camıyla değiştirerek onu kullanılabilir hale getirebiliriz. Çerçevenin kavisi ve numaranız uyumluysa bu en pratik çözümlerden biri.",
          "Tersi de mümkün: normal gözlük çerçevenize güneş klipsi ekleyerek tek gözlükle hem iç mekanda hem dışarıda idare edebilirsiniz.",
        ],
      },
    ],
    bullets: [
      "Mevcut çerçevenize yeni cam montajı",
      "Kırık ve çizik cam değişimi",
      "Çerçeve değişimi ve cam uyarlama",
      "Vida, burunluk, menteşe onarımı ve ayar",
      "Numaralı güneş camına dönüştürme",
    ],
    faqs: [
      {
        question: "Başka yerden aldığım gözlüğün camını değiştirir misiniz?",
        answer:
          "Evet. Gözlüğü nereden aldığınız fark etmez; çerçeve sağlam olduğu sürece cam değişimi yapabiliriz. Çerçevenizi ve varsa yeni reçetenizi getirin.",
      },
      {
        question: "Sadece bir camım kırıldı, ikisini de değiştirmem gerekir mi?",
        answer:
          "Teknik olarak tek cam değiştirilebilir. Ancak eski camda kaplama yıpranmışsa iki cam arasında görüntü farkı oluşabilir; bu durumu gözlüğünüze bakarak birlikte değerlendiriyoruz.",
      },
      {
        question: "Gözlüğümün ayarı bozuldu, ücret alıyor musunuz?",
        answer:
          "Ayar ve küçük bakım işlemleri için gözlüğünüzü getirebilirsiniz. Durumu görüp ne gerektiğini söylüyoruz; parça değişimi gerekiyorsa önceden bilgilendiriyoruz.",
      },
      {
        question: "Cam değişimi SGK kapsamında mı?",
        answer:
          "SGK'nın cam yardımı numaranızdaki değişikliğe ve süre koşullarına bağlı olarak işler. Reçetenizle gelin, hakkınızın durumunu birlikte kontrol edelim.",
      },
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/sgk-anlasmali-optik", label: "SGK anlaşmalı optik" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
    ],
  },

  "cocuk-gozlugu": {
    slug: "cocuk-gozlugu",
    path: "/cocuk-gozlugu",
    metaTitle: "Çocuk Gözlüğü | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de çocuk gözlüğü. Hafif ve sağlam çerçeveler, doğru ölçü, dayanıklı cam seçenekleri ve aileyle birlikte deneme Ebrar Optik'te.",
    h1: "Çocuk Gözlüğü — Kırıkkale",
    intro: [
      "Çocuk gözlüğü, küçültülmüş bir yetişkin gözlüğü değildir. Çocuğun yüzü büyümeye devam eder, gözlüğü yetişkinlerden daha sert kullanır ve rahatsız olduğunda bunu her zaman söylemez. Bu yüzden seçim yaparken ölçü ve dayanıklılık, görünümden önce gelir.",
      "Ebrar Optik'te çocuğunuzun gözlüğünü sizinle birlikte, deneyerek seçiyoruz. Kırıkkale Merkez'deki mağazamıza reçetenizle uğramanız yeterli.",
    ],
    sections: [
      {
        heading: "Doğru ölçü neden bu kadar önemli?",
        paragraphs: [
          "Gözlük camının optik merkezi, çocuğun göz bebeğiyle hizalanmalıdır. Yüzüne göre büyük bir çerçevede cam merkezi kayar; çocuk camın doğru yerinden bakmadığı için gözlük işini görmez, hatta zorlanmaya yol açar.",
          "Büyük çerçeve ayrıca burundan kayar. Kayan gözlüğü çocuk sürekli yukarı iter, bir süre sonra takmayı reddeder. Ailelerin \"gözlüğü takmıyor\" dediği durumların önemli bir kısmı aslında bir uyum sorunudur, inatlaşma değil.",
          "Bu yüzden mağazada burun genişliği, sap uzunluğu ve göz mesafesi ölçülerini alıyoruz ve çerçeveyi çocuğun yüzüne göre ayarlıyoruz.",
        ],
      },
      {
        heading: "Çerçevede aradıklarımız",
        paragraphs: [
          "Hafiflik ilk sırada. Ağır çerçeve burun kökünde iz bırakır ve çocuğun gözlükten soğumasına yol açar. Esneyebilen malzemeler ise düşme ve çarpma durumlarında kırılmak yerine bükülerek şekline döner.",
          "Menteşe yapısı ikinci önemli nokta. Yaylı menteşeler sapın normalden fazla açılmasına izin verir; çocuk gözlüğü tek eliyle çıkardığında ya da üstüne oturduğunda çerçeveyi kurtaran şey genelde budur.",
          "Burunluk kısmı çoğu zaman gözden kaçar. Çocuğun burun kemiği henüz gelişmediği için yetişkin çerçeveleri kayar; çocuk modellerindeki daha dolgun burun oturması bu sorunu çözer.",
          "Rengi ve modeli çocuğun seçmesine izin verin. Beğendiği gözlüğü takar, beğenmediğini çantasında taşır. Ölçü ve dayanıklılık kriterlerine uyan seçenekler arasından tercihini kendisinin yapması işi kolaylaştırıyor.",
        ],
      },
      {
        heading: "Cam tarafında dikkat ettiklerimiz",
        paragraphs: [
          "Çocuk gözlüğünde darbeye dayanıklılık öncelik. Kırıldığında keskin parçalara ayrılmayan cam tipleri bu yüzden tercih ediliyor.",
          "Çocuklar gözlüğü daha fazla kirletir ve daha çok siler; bu da camı çizer. Kaplama seçenekleri camın ömrünü uzatır. Numaranın hızlı değişebildiği yaşlarda ise camın dayanma süresi kadar, kaç ayda bir kontrol gerektiği de konuşulması gereken bir konu.",
        ],
      },
      {
        heading: "Gözlüğe alışma süreci",
        paragraphs: [
          "İlk günlerde gözlüğü kısa aralıklarla takıp çıkarmak yerine, evde belirli aktiviteler sırasında sürekli takmasını sağlamak daha iyi sonuç veriyor. Kitap okurken, ödev yaparken ve televizyon izlerken gözlüklü olması alışmayı hızlandırır.",
          "Çocuk gözlükle görmenin daha iyi olduğunu fark ettiğinde direnç genelde kendiliğinden azalır. Birkaç hafta sonunda hâlâ takmak istemiyorsa gözlüğü getirin; çoğu zaman sorun ayarda ya da ölçüde çıkıyor.",
          "Okul çağındaki çocuklarda yedek bir gözlük ya da en azından sağlam bir kutu iyi bir yatırım. Gözlüğün çantada korumasız gezmesi, kırılmaların en sık sebebi.",
        ],
      },
    ],
    bullets: [
      "Çocuğun yüz ölçüsüne göre çerçeve seçimi ve ayar",
      "Hafif, esnek ve sağlam menteşeli modeller",
      "Darbeye dayanıklı cam seçenekleri",
      "Aileyle birlikte deneme ve bilgilendirme",
      "SGK anlaşmalı: çocuğunuzun hakkını mağazamızda kullanabilirsiniz",
    ],
    faqs: [
      {
        question: "Çocuk gözlüğü seçiminde nelere dikkat ediyorsunuz?",
        answer:
          "Çocuğun yüz ölçüsüne uygun hafif çerçeve, sağlam menteşe ve reçeteye doğru cam seçimi önceliğimizdir. Aileyle birlikte deneme yaparak konforlu bir çözüm buluyoruz.",
      },
      {
        question: "Çocuğum gözlüğünü takmak istemiyor, ne yapmalıyım?",
        answer:
          "Çoğu zaman sebep inatlaşma değil, uyumsuzluktur: kayan, sıkan ya da ölçüsü kaymış bir gözlük rahatsızlık verir. Gözlüğü getirin, ayarına ve ölçüsüne bakalım.",
      },
      {
        question: "Çocuk gözlüğü ne sıklıkla değişmeli?",
        answer:
          "Yüz yapısı büyüdükçe çerçeve küçük gelebilir ve numara değişebilir. Doktorunuzun önerdiği kontrol aralığına uymak ve gözlük kaymaya başladığında mağazaya uğramak en doğrusu.",
      },
      {
        question: "Çocuk gözlüğünde SGK hakkı kullanılabilir mi?",
        answer:
          "Bakmakla yükümlü olduğunuz çocuğunuz adına düzenlenmiş reçeteyle hakkınızı SGK anlaşmalı mağazamızda kullanabilirsiniz. Kimlik bilgileriyle birlikte gelmeniz yeterli.",
      },
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/sgk-anlasmali-optik", label: "SGK anlaşmalı optik" },
      { href: "/cam-cerceve-degisimi", label: "Cam ve çerçeve değişimi" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
    ],
  },

  "kirikkale-optik": {
    slug: "kirikkale-optik",
    path: "/kirikkale-optik",
    metaTitle: "Kırıkkale Optik | Ebrar Optik Mağazası",
    metaDescription: `Kırıkkale optik arıyorsanız Ebrar Optik: ${ADRES}. SGK anlaşmalı; gözlük, güneş gözlüğü, lens, cam değişimi ve bakım hizmetleri.`,
    h1: "Kırıkkale Optik — Ebrar Optik",
    intro: [
      `Kırıkkale'de güvenilir bir optik mağazası arıyorsanız Ebrar Optik ${business.address.streetAddress} adresinde hizmet veriyor. Çalışma saatlerimiz ${SAAT}; pazar günü kapalıyız.`,
      "Reçeteli gözlükten kontakt lense, numaralı güneş gözlüğünden cam-çerçeve değişimine kadar optik ihtiyaçlarınızı tek noktadan karşılıyoruz. SGK anlaşmalı bir müessese olduğumuz için reçetenizle gelip hakkınızı doğrudan burada kullanabilirsiniz.",
    ],
    sections: [
      {
        heading: "Hangi hizmetleri veriyoruz?",
        paragraphs: [
          "Reçeteli optik gözlükte cam ve çerçeve seçimi, montaj ve ayar yapıyoruz. Güneş gözlüğü tarafında UV korumalı modellerin yanı sıra numaralı güneş camı montajı da mümkün.",
          "Kontakt lens ihtiyacınız varsa günlük, haftalık, aylık ve renkli seçenekleri değerlendirebilirsiniz. Elinizdeki gözlüğün camı kırıldıysa ya da numaranız değiştiyse çerçevenizi koruyup yalnızca camı yenileyebiliriz.",
          "Bunların yanında gözlük bakım ve onarımı yapıyoruz: gevşeyen vida, yıpranmış burunluk, kaçmış ayar gibi işler için gözlüğü bizden almış olmanız gerekmiyor.",
        ],
      },
      {
        heading: "SGK anlaşmalı optisyenlik müessesesi",
        paragraphs: [
          "Ebrar Optik SGK ile anlaşmalıdır. Göz doktorunuzdan aldığınız reçeteyle geldiğinizde çerçeve ve cam hakkınızı mağazamızda kullanabilir, kurumun karşıladığı tutarın üzerindeki farkı ödeyerek işlemi tamamlayabilirsiniz.",
          "Hakkınızın dolu olup olmadığını bilmiyorsanız mağazada birlikte kontrol ediyoruz. Sürecin tamamını adım adım anlattığımız SGK anlaşmalı optik sayfamıza bakabilirsiniz.",
        ],
      },
      {
        heading: "Muayene ve reçete",
        paragraphs: [
          "Optik mağazaları göz muayenesi yapamaz; bu yetki hekimlerdedir. Numaranızı bilmiyorsanız veya son muayenenizin üzerinden uzun zaman geçtiyse önce bir göz doktoruna görünmeniz gerekir.",
          "Reçetenizi aldıktan sonraki her adımda yanınızdayız. Reçetedeki değerlerin ne anlama geldiğini, hangi cam tipinin size uygun olduğunu ve seçeneklerin farkını mağazada anlatıyoruz.",
        ],
      },
      {
        heading: "Hizmet verdiğimiz bölgeler",
        paragraphs: [
          "Mağazamız Kırıkkale Merkez'de, Ovacık Mahallesi'nde bulunuyor. Merkeze bağlı mahallelerin yanı sıra Bahşili, Yahşihan, Karakeçili, Balışeyh, Delice, Keskin, Sulakyurt ve Çelebi'den gelen müşterilerimize de hizmet veriyoruz.",
          "İlçelerden geleceklere önerimiz: yola çıkmadan önce telefonla arayın. Aradığınız ürün stokta mı, reçetenizle ilgili ek bir belge gerekiyor mu, işlem aynı gün tamamlanır mı gibi soruların cevabını baştan alırsanız ikinci kez gelmek zorunda kalmazsınız.",
        ],
      },
      {
        heading: "Mağazamıza ulaşmak",
        paragraphs: [
          `Adresimiz: ${ADRES}. Çalışma saatlerimiz ${SAAT}, pazar günü kapalıyız.`,
          `Önceden randevu almanız gerekmiyor; yoğun saatlerde vakit kaybetmemek isterseniz ${business.telephoneDisplay} numaralı telefondan veya WhatsApp üzerinden yazarak haber verebilirsiniz. Yol tarifi için sitemizdeki iletişim bölümündeki haritayı kullanabilirsiniz.`,
          "Gözlüğünüzün ayarı bozulduysa, vidası gevşediyse ya da burunluğu yıprandıysa uğramanız yeterli. Bu tür küçük işler için gözlüğü bizden almış olmanız gerekmiyor.",
        ],
      },
    ],
    bullets: [
      `Adres: ${ADRES}`,
      `Telefon: ${business.telephoneDisplay}`,
      `Çalışma saatleri: ${SAAT}`,
      "SGK anlaşmalı optisyenlik müessesesi",
      "Gözlük, güneş gözlüğü, lens, cam-çerçeve değişimi ve bakım",
    ],
    faqs: [
      {
        question: "Kırıkkale'de nerede bulunuyorsunuz?",
        answer: `${ADRES}. Harita ve yol tarifi için sitemizdeki İletişim bölümünü kullanabilirsiniz.`,
      },
      {
        question: "Çalışma saatleriniz nedir?",
        answer: `${SAAT} arasındayız. Pazar günü kapalıyız.`,
      },
      {
        question: "Randevu almam gerekir mi?",
        answer:
          "Çoğu işlem için önceden randevu zorunlu değildir; yine de yoğun saatlerde telefon veya WhatsApp ile haber vermeniz süreci hızlandırır.",
      },
      {
        question: "SGK anlaşmalı mısınız?",
        answer:
          "Evet. Reçetenizle gelip çerçeve ve cam hakkınızı mağazamızda kullanabilirsiniz.",
      },
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/lens", label: "Lens çeşitleri" },
      { href: "/sgk-anlasmali-optik", label: "SGK anlaşmalı optik" },
      { href: "/cam-cerceve-degisimi", label: "Cam ve çerçeve değişimi" },
      { href: "/cocuk-gozlugu", label: "Çocuk gözlüğü" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
      { href: "/#iletisim", label: "İletişim ve harita" },
    ],
  },
};
