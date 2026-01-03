const chemicalData = [
  {
    id: "sodyum-klorur",
    name: "Sodyum Klörür (NaCl)",
    tagline: "Kristal yapısı ve iyonik bağların klasik örneği.",
    description:
      "Sodyum klorürün kristal örgüsü, tuzluluk dengesi ve gıda sanayisindeki rolüne odaklanan çalışma.",
    video: {
      title: "Sodyum klorür nasıl kristalleşir?",
      url: "video/video1.mp4",
    },
    article: {
      title: "Tuz: Hayatın Vazgeçilmezi, Sağlığın Sessiz Tehdidi",
      url: "https://news.bark1n.me/tuz-hayatin-vazgecilmezi-sagligin-sessiz-tehdidi/",
      cta: "Haberi oku",
    },
    report: {
      title:
        "Sodyum klorür kristal yapısı ve çözünürlük deneyleri raporu",
      url: "rapor/1.html",
      cta: "Raporu oku",
    },
  },
  {
    id: "asetik-asit",
    name: "Asetik Asit (CH3COOH)",
    tagline: "Zayıf asitlerin davranışını gösteren iyi bilinen bir örnek.",
    description:
      "Asetik asidin asidik özellikleri, pH üzerindeki etkisi ve günlük hayattaki kullanım alanları özetlenir.",
    video: {
      title: "video",
      url: "video/video2.mp4",
    },
    article: {
      title: "Sirkenin Gücü: Asetik Asit Hem Hayat Kurtarıyor Hem de Dikkat Gerektiriyor",
      url: "https://news.bark1n.me/sirkenin-gucu-asetik-asit-hem-hayat-kurtariyor-hem-de-dikkat-gerektiriyor/",
      cta: "Haberi oku",
    },
    report: {
      title:
        "Asetik asit titrasyonu ve tampon çözelti deney raporu",
      url: "rapor/2.html",
      cta: "Raporu oku",
    },
  },
  {
    id: "sodyum-hidroksit",
    name: "Sodyum Hidroksit (NaOH)",
    tagline: "Kuvvetli bazların reaksiyonlarını gözlemlemek için tercih edilir.",
    description:
      "Sodyum hidroksitin kostik özellikleri, sabunlaştırma reaksiyonları ve endüstriyel uygulamaları anlatılır.",
    video: {
      title: "video",
      url: "video/video3.mp4",
    },
    article: {
      title: "Görünmez Tehlike: Kostik Soda Hem Hayatı Kolaylaştırıyor Hem de Ciddi Riskler Taşıyor",
      url: "https://news.bark1n.me/gorunmez-tehlike-kostik-soda-hem-hayati-kolaylastiriyor-hem-de-ciddi-riskler-tasiyor/",
      cta: "Haberi oku",
    },
    report: {
      title:
        "Sodyum hidroksit ile nötrleşme ve sabunlaştırma deney raporu",
      url: "rapor/3.html",
      cta: "Raporu oku",
    },
  },
  {
    id: "amonyak",
    name: "Amonyak (NH3)",
    tagline: "Keskin kokulu bazik bir bileşik, soğutma ve gübre sektöründe kritik.",
    description:
      "Amonyağın bazik karakteri, Haber-Bosch süreci ve soğutma döngülerindeki rolü ayrıntılandırılır.",
    video: {
      title: "video",
      url: "video/video4.mp4",
    },
    article: {
      title: "Görünmez Gazın Gücü: Amonyak, Tarımı Besliyor ama Doğayı Zorluyor",
      url: "https://news.bark1n.me/gorunmez-gazin-gucu-amonyak-tarimi-besliyor-ama-dogayi-zorluyor/",
      cta: "Haberi oku",
    },
    report: {
      title:
        "Amonyak ile yapılan absorpsiyon ve güvenlik deneyleri raporu",
      url: "rapor/4.html",
      cta: "Raporu oku",
    },
  },
  {
    id: "hidrojen-peroksit",
    name: "Hidrojen Peroksit (H2O2)",
    tagline: "Güçlü oksitleyici yapısıyla dezenfeksiyon ve enerji uygulamalarında rol oynar.",
    description:
      "Hidrojen peroksitin bozunma reaksiyonları, katalizör kullanımı ve günlük hayattaki örnekleri açıklanır.",
    video: {
      title: "video",
      url: "video/video5.mp4",
    },
    article: {
      title: "Sessiz Güç: Hidrojen Peroksit Hayatı Temizliyor ama Dikkatsizlik Ölümcül Olabiliyor",
      url: "https://news.bark1n.me/sessiz-guc-hidrojen-peroksit-hayati-temizliyor-ama-dikkatsizlik-olumcul-olabiliyor/",
      cta: "Haberi oku",
    },
    report: {
      title:
        "Hidrojen peroksit bozunması ve kataliz deney raporu",
      url: "rapor/5.html",
      cta: "Raporu oku",
    },
  },
];

const state = {
  activeChemicalId: null,
};

const chemicalListElement = document.getElementById("chemicalOptions");
const chemicalTitle = document.getElementById("chemicalTitle");
const chemicalDescription = document.getElementById("chemicalDescription");
const videoContainer = document.getElementById("videoContainer");
const articleContainer = document.getElementById("articleContainer");
const reportButton = document.getElementById("reportButton");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function buildChemicalList() {
  if (!chemicalListElement) {
    return null;
  }

  let firstChemicalId = null;

  chemicalData.forEach((chemical, index) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.chemicalId = chemical.id;
    button.textContent = `${chemical.name}`;

    button.addEventListener("click", () => {
      setActiveChemical(chemical.id);
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveChemical(chemical.id);
      }
    });

    if (index === 0) {
      button.classList.add("active");
      firstChemicalId = chemical.id;
    }

    listItem.appendChild(button);
    chemicalListElement.appendChild(listItem);
  });

  return firstChemicalId;
}

function renderVideo(chemical) {
  if (!videoContainer) {
    return;
  }

  videoContainer.innerHTML = "";

  if (!chemical.video || !chemical.video.url) {
    const placeholder = document.createElement("p");
    placeholder.textContent = "Bu kimyasal icin video ici bos birakildi.";
    videoContainer.appendChild(placeholder);
    return;
  }

  const videoElement = document.createElement("video");
  videoElement.controls = true;
  videoElement.preload = "metadata";
  videoElement.setAttribute(
    "aria-label",
    chemical.video.title || `Video: ${chemical.name}`
  );
  videoElement.playsInline = true;

  const source = document.createElement("source");
  source.src = chemical.video.url;
  source.type = "video/mp4";

  const fallback = document.createElement("p");
  fallback.textContent =
    "Tarayiciniz video oynatmayi desteklemiyor. Videoyu indirmek icin baglantiya tiklayin.";

  const downloadLink = document.createElement("a");
  downloadLink.href = chemical.video.url;
  downloadLink.textContent = chemical.video.title || "Videoyu indir";

  fallback.append(" ", downloadLink);

  videoElement.appendChild(source);
  videoElement.appendChild(fallback);

  videoContainer.appendChild(videoElement);
}

function renderArticle(chemical) {
  if (!articleContainer) {
    return;
  }

  articleContainer.innerHTML = "";

  if (!chemical.article) {
    const empty = document.createElement("p");
    empty.textContent = "Bu kimyasal icin haber yazisi eklenmedi.";
    articleContainer.appendChild(empty);
    return;
  }

  const heading = document.createElement("p");
  heading.className = "content-line";
  heading.textContent = chemical.article.title || "Haber basligi";

  articleContainer.appendChild(heading);

  if (chemical.article.url) {
    const link = document.createElement("a");
    link.href = chemical.article.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = chemical.article.cta || "Haberi oku";
    link.className = "content-button";

    articleContainer.appendChild(link);
  }
}

function updateReportButton(chemical) {
  if (!reportButton) {
    return;
  }

  if (!chemical.report || !chemical.report.url) {
    reportButton.hidden = true;
    reportButton.removeAttribute("href");
    reportButton.removeAttribute("aria-label");
    return;
  }

  reportButton.hidden = false;
  reportButton.href = chemical.report.url;
  reportButton.textContent = chemical.report.cta || "Raporu oku";
  reportButton.setAttribute(
    "aria-label",
    chemical.report.title
      ? `${chemical.report.title} baglantisi`
      : "Raporu ac"
  );
}

function setActiveChemical(chemicalId, options = {}) {
  const { force = false } = options;

  if (state.activeChemicalId === chemicalId && !force) {
    return;
  }

  const chemical = chemicalData.find((item) => item.id === chemicalId);
  if (!chemical) {
    return;
  }

  state.activeChemicalId = chemicalId;

  document
    .querySelectorAll('[data-chemical-id]')
    .forEach((button) => button.classList.remove("active"));

  const activeButton = document.querySelector(
    `[data-chemical-id="${chemicalId}"]`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  if (chemicalTitle) {
    chemicalTitle.textContent = chemical.name;
  }

  if (chemicalDescription) {
    const tagline = chemical.tagline ? `${chemical.tagline} ` : "";
    chemicalDescription.textContent = `${tagline}${chemical.description}`;
  }

  renderVideo(chemical);
  renderArticle(chemical);
  updateReportButton(chemical);
}

function init() {
  const firstChemicalId = buildChemicalList();

  if (firstChemicalId) {
    setActiveChemical(firstChemicalId, { force: true });
  }
}

document.addEventListener("DOMContentLoaded", init);
