/* ================================================
   HAIR LAB CO – MULTI-LINGUAL, VIDEO, BOOKING
   ================================================ */
const translations = {
  en: {
    home: 'Home', services: 'Services', about: 'About', gallery: 'Gallery', team: 'Team',
    reservations: 'Reservations', contact: 'Contact', bookNow: 'Book Now',
    heroLabel: 'Manama, Bahrain', heroTitle: 'Precision Cuts,<br>Elevated Style',
    heroSubtitle: 'Where luxury grooming meets expert barbering. Discover your signature look at Hair Lab co.',
    exploreServices: 'Explore Services', reserve: 'Reserve Your Seat',
    aboutLabel: 'Our Philosophy', aboutTitle: 'The Art of Masculine Grooming',
    aboutText1: 'At Hair Lab co, we believe a haircut is more than a routine — it’s a ritual of self‑respect. Nestled in the heart of Manama Centre, our space is a sanctuary for the modern gentleman. From the fragrance of premium pomades to the sound of precise scissors, every detail is designed to elevate your experience.',
    aboutText2: 'Our master barbers are trained in both classic techniques and cutting‑edge trends, ensuring you leave not just looking your best, but feeling unstoppable. We use only the finest tools and products, because your hair deserves the same attention as your bespoke suit.',
    servicesLabel: 'Our Packages', servicesTitle: 'Tailored Grooming Experiences',
    teamLabel: 'The Craftsmen', teamTitle: 'Meet Your Barbers',
    galleryLabel: 'Portfolio', galleryTitle: 'Proof of Mastery',
    reservationLabel: 'Book Your Appointment',
    contactLabel: 'Get in Touch',
    langText: 'عربي',
    confirmationTitle: 'Appointment Booked!',
    confirmationMsg: 'Thank you! We’ll send a confirmation to your phone shortly.',
    footerRights: 'All rights reserved.'
  },
  ar: {
    home: 'الرئيسية', services: 'الخدمات', about: 'عنّا', gallery: 'المعرض', team: 'الفريق',
    reservations: 'الحجوزات', contact: 'اتصل بنا', bookNow: 'احجز الآن',
    heroLabel: 'المنامة، البحرين', heroTitle: 'قصات دقيقة،<br>أناقة عصرية',
    heroSubtitle: 'حيث تلتقي العناية الشخصية الفاخرة مع الخبرة الاحترافية. اكتشف إطلالتك المميزة في Hair Lab co.',
    exploreServices: 'استكشف الخدمات', reserve: 'احجز مقعدك',
    aboutLabel: 'فلسفتنا', aboutTitle: 'فن العناية الرجولية',
    aboutText1: 'في Hair Lab co، نؤمن بأن قصة الشعر ليست مجرد روتين — بل طقوس احترام الذات. يقع صالوننا في قلب مركز المنامة، وهو ملاذ للرجل العصري. من عبق المستحضرات الفاخرة إلى صوت المقص الدقيق، كل تفصيلة صممت لترتقي بتجربتك.',
    aboutText2: 'حلاقونا المهرة مدربون على الأساليب الكلاسيكية وأحدث الصيحات، مما يضمن لك مغادرة ليس فقط بأفضل مظهر بل بإحساس لا يُقهر. نستخدم أفضل الأدوات والمنتجات، لأن شعرك يستحق نفس العناية التي تحظى بها بدلتك المفصلة.',
    servicesLabel: 'باقاتنا', servicesTitle: 'تجارب عناية مخصصة',
    teamLabel: 'الحرفيون', teamTitle: 'تعرف على حلاقيك',
    galleryLabel: 'معرض الأعمال', galleryTitle: 'دليل الإتقان',
    reservationLabel: 'احجز موعدك',
    contactLabel: 'تواصل معنا',
    langText: 'English',
    confirmationTitle: 'تم الحجز!',
    confirmationMsg: 'شكراً لك! سنرسل تأكيداً إلى هاتفك قريباً.',
    footerRights: 'جميع الحقوق محفوظة.'
  }
};

let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  document.documentElement.lang = lang;
  // update lang toggle button text
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = translations[lang].langText;
  });
  // update active nav
  // ...
}

document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => { setTimeout(() => { loader.classList.add('hidden'); document.body.style.overflow = ''; }, 600); });
    document.body.style.overflow = 'hidden';
  }

  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const hero = document.querySelector('.hero');
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) navbar.classList.remove('scrolled'); else navbar.classList.add('scrolled'); }); }, { threshold: 0 });
    if (hero) observer.observe(hero); else navbar.classList.add('scrolled');
  }

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));
  }

  // Language toggle
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      switchLanguage(newLang);
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.15 });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // Accordion for services
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      body.classList.toggle('open');
    });
  });

  // Reservation form
  const form = document.getElementById('reservationForm');
  const confirmMsg = document.getElementById('confirmationMsg');
  if (form && confirmMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      confirmMsg.style.display = 'block';
      confirmMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Initialize language on page load to 'en'
  switchLanguage('en');
});
