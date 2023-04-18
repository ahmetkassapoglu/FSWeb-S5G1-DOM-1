const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


/* Kodlar Buradan aşağıya */
// images
let imageSrc = Object.values(siteContent["images"])
let images = document.querySelectorAll("img")
for (let i =0; i<images.length; i++){
  images[i].setAttribute("src",imageSrc[i])
}

// header-nav
let navLinks = document.querySelector("nav").querySelectorAll("a")
navLinks.forEach(element=> element.setAttribute("class","italic"))
let linkContents = Object.values(siteContent["nav"])
navLinks.forEach((element,index)=> element.textContent = linkContents[index])

// cta texts
let h1 ="h1"
let button = "button"
let ctaText = document.querySelector(".cta-text")
let h1Content = ctaText.querySelector(h1)
h1Content.textContent= siteContent["cta"].h1
let buttonContent = ctaText.querySelector("button")
buttonContent.textContent=siteContent["cta"].button
// main-content
let texts = document.querySelector(".main-content").querySelectorAll("h4, p")
let textContents = Object.values(siteContent["ana-içerik"])
texts.forEach((element,index) => element.textContent = textContents[index] )

//footer
let footerLink = document.querySelector("footer").querySelectorAll("a")
footerLink[0].setAttribute("class","bold");
footerLink[0].textContent = "Copyright Bir Şirket Sitesi 2022"

//contact
let contactTexts= Object.values(siteContent["iletisim"])
let contact = document.querySelector(".contact").querySelectorAll("h4,p")
contact.forEach((element, index) => element.textContent = contactTexts[index] )