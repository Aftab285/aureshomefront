// ── TRANSLATIONS ──
const translations = {
  en: {
    navHome: "Home", navProject: "The Home", navSustainability: "Sustainability",
    navLocation: "Location", navProcess: "Process", navFaq: "FAQ", navContact: "Contact",
    heroTag: "Aureus Homes AG — Smart Living",
    heroTitle: "More Home.<br>Fewer Compromises.",
    heroSub: "Modern houses for a new generation. Thoughtfully designed, sustainably built, and move-in ready in just 5 months.",
    heroBtn1: "Discover the Project", heroBtn2: "Request Information",
    scrollText: "Scroll",
    brandTag: "Our Philosophy",
    brandTitle: "Architecture You Can Actually Afford",
    brandSub: "Aureus Homes represents a new generation of family homes in Switzerland — modern, high-quality, and thoughtfully designed for real life.",
    val1Title: "Premium Quality", val1Desc: "High-quality materials and finishes that stand the test of time.",
    val2Title: "Modern Design", val2Desc: "Clean architecture with generous light and space.",
    val3Title: "Fair Pricing", val3Desc: "Transparent pricing without hidden costs or luxury markups.",
    val4Title: "Fast Handover", val4Desc: "Move-in ready in just 5 months from signing. Efficient and reliable.",
    featTag: "Key Features",
    featTitle: "Designed for Modern Living",
    feat1Title: "Floor-length Windows", feat1Desc: "Premium metal-clad, floor-length windows with triple glazing flood every room with natural daylight.",
    feat2Title: "Underfloor Heating", feat2Desc: "Even warmth throughout with energy-efficient air-to-water heat pump technology.",
    feat3Title: "Premium Oak Flooring", feat3Desc: "Three color options available. Durable, warm, and timeless.",
    feat4Title: "Smart-Home Ready", feat4Desc: "Pre-wired infrastructure for your choice of smart home system.",
    feat5Title: "Modern Security Doors", feat5Desc: "Security doors meeting the highest modern safety and locking standards.",
    feat6Title: "Photovoltaic Ready", feat6Desc: "Prepared for solar panel installation.",
    feat7Title: "Motorized Blinds", feat7Desc: "All windows equipped with electric, motorized blinds for maximum comfort and privacy.",
    specTag: "Quality Details",
    specTitle: "Premium Standard Equipment",
    spec1Title: "Entrance & Doors", spec1Desc: "Modern security entrance doors and designer handles throughout.",
    spec2Title: "Windows & Blinds", spec2Desc: "Triple-glazed windows with high-end handles and motorized blinds.",
    spec3Title: "Bathroom Fixtures", spec3Desc: "Premium washbasins with vanity units, bathtubs, and modern fittings.",
    spec4Title: "Interiors & Storage", spec4Desc: "Bespoke built-in closets and high-quality furniture solutions.",
    spec5Title: "Lighting & Electrical", spec5Desc: "Recessed ceiling spotlights and comprehensive electrical layout plans.",
    spec6Title: "Finishing Options", spec6Desc: "Choose from up to 4 different oak flooring options and premium tiling.",
    showTag1: "Interior Living",
    showTitle1: "Generous Spaces,<br>Premium Finishes",
    showSub1: "This is not a small smart house. It offers spacious family living with 131 m² of net living area and 2.40 m ceiling height.",
    showList1a: "Open-plan living and dining areas",
    showList1b: "Premium oak flooring throughout",
    showList1c: "Floor-length windows for maximum daylight",
    showList1d: "Smart-home ready infrastructure",
    showTag2: "Bathrooms",
    showTitle2: "Modern Bathrooms,<br>Functional & Comfortable",
    showSub2: "Modern bathroom spaces designed to combine functionality and comfort.",
    showList2a: "Full bathroom with bathtub and shower",
    showList2b: "Second bathroom with walk-in shower",
    showList2c: "Additional guest toilet",
    showList2d: "Premium fittings throughout",
    fact1Label: "Net Living Area", fact2Label: "Ceiling Height",
    fact3Label: "Wood Content", fact4Label: "Bedrooms",
    susTag: "Sustainability",
    susTitle: "Sustainably Built.<br>Designed for Modern Living.",
    susSub: "With an exceptional wood content of approximately 80%, our homes set a new standard for sustainable family housing.",
    susStatLabel: "Wood Construction",
    susFeat1: "Air-to-water heat pump",
    susFeat2: "Photovoltaic preparation",
    susFeat3: "Energy-efficient construction",
    susFeat4: "Durable materials",
    susFeat5: "Low-maintenance solutions",
    susFeat6: "Modern timber prefabrication",
    terraceTag: "Outdoor Living",
    terraceTitle: "Your Private Retreat",
    terraceSub: "A generous 20 m² garden terrace with premium Fundermax surface — slip-resistant, maintenance-free, and built to last.",
    terraceList1: "Approx. 20 m² premium timber terrace",
    terraceList2: "Slip-resistant Fundermax surface",
    terraceList3: "Maintenance-free and highly durable",
    terraceList4: "Modern concrete slabs at entrance",
    locTag: "Location",
    locTitle: "Herbstweg, 5722 Gränichen AG",
    locSub: "A quiet, family-friendly residential location with excellent infrastructure — close to nature, close to everything.",
    locZurich: "Zürich", locBasel: "Basel", locBern: "Bern", locLuzern: "Luzern",
    locMin: "min", locKm: "km",
    locInfraTag: "Family Infrastructure",
    locInfraTitle: "Everything Within Reach",
    locInfra1: "Kindergarten and primary school nearby",
    locInfra2: "Secondary school within the region",
    locInfra3: "Shopping within walking distance",
    locInfra4: "Public transportation connections",
    locInfra5: "Restaurants and daily amenities",
    locInfra6: "Nature and recreation nearby",
    processTag: "Purchase Process",
    processTitle: "Transparent. Structured. Secure.",
    processSub: "A clearly structured purchasing process creates trust and planning security.",
    step1Title: "Reservation", step1Amount: "CHF 50,000", step1Desc: "Reservation deposit",
    step2Title: "Notary", step2Amount: "CHF 660,000", step2Desc: "Land + first payment",
    step3Title: "Production", step3Amount: "CHF 200,000", step3Desc: "Start of construction",
    step4Title: "Assembly", step4Amount: "CHF 120,000", step4Desc: "On-site assembly",
    step5Title: "Handover", step5Amount: "CHF 30,000", step5Desc: "Final payment",
    priceTag: "Investment",
    priceTitle: "Premium home ownership",
    priceAmount: "CHF 1,060,000",
    priceSub: "Architecture, quality, and sustainability — at a price that still feels attainable.",
    floorTag: "Floor Plans",
    floorTitle: "Intelligent Room Layout",
    floorSub: "Optimized for family life with generous spaces, natural light, and practical storage.",
    tabGround: "Ground Floor", tabUpper: "Upper Floor",
    floorPlaceholder: "Interactive floor plans coming soon.",
    faqTag: "Common Questions",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Why is there no basement?",
    faq1A: "Instead of an expensive basement, we provide 26 m² of practical net storage space right where you need it: 10 m² right next to the carport, 6 m² right next to the entrance door, and 10 m² inside the house (including 4 m² of built-in closets). This keeps costs transparent and living efficient.",
    faq2Q: "Why is the kitchen not included?",
    faq2A: "Every family lives differently. The kitchen is intentionally left open for individual choice, allowing buyers maximum flexibility regarding style, equipment, and budget.",
    faq3Q: "What customization options are available?",
    faq3A: "You can choose from three premium oak flooring colors and have full freedom in kitchen design. The home is smart-home ready and photovoltaic prepared for future upgrades.",
    faq4Q: "How does the construction method work?",
    faq4A: "The homes are based on modern timber construction and high-quality prefabrication, combining sustainable materials with precise engineering for exceptional quality and efficiency.",
    faq5Q: "Is the home prepared for future extensions?",
    faq5A: "Yes. The flat roof is structurally prepared for a future attic extension, giving you room to grow with your family.",
    faq6Q: "What about the landscaping?",
    faq6A: "The outdoor areas are designed with a clear focus on simplicity, functionality and long-term flexibility. To keep overall project costs efficient while allowing homeowners to personalize their property over time, the landscaping concept is intentionally clean and low-maintenance. The garden is delivered levelled and prepared, with grass seeding where required, creating a solid and practical foundation for future individual landscaping ideas. The carport area features compacted gravel, while concrete paving slabs provide a clean and durable access path to the house. This approach keeps the exterior tidy, functional and move-in ready from day one — while leaving room for personal touches and future enhancements at the homeowner’s own pace.",
    contactTag: "Get in Touch",
    contactTitle: "Request Information",
    contactSub: "Interested in learning more? Reach out to us and we'll send you the complete project documentation.",
    contactAddr: "Herbstweg, 5722 Gränichen AG, Switzerland",
    contactPhone: "+41 79 874 13 22",
    formName: "Full Name", formEmail: "Email Address", formPhone: "Phone",
    formInterest: "Interest", formOptDoc: "Project Documentation", formOptViewing: "Register for Viewing",
    formOptFloor: "Receive Floor Plan", formOptGeneral: "General Inquiry",
    formMsg: "Message", formSend: "Send Request",
    formSuccessTitle: "Thank You!",
    formSuccessMsg: "We've received your inquiry and will get back to you shortly.",
    footerDesc: "Modern family homes in Switzerland. Premium. Attainable. Sustainable.",
    footerNav: "Navigation", footerLegal: "Legal", footerFollowUs: "Connect",
    footerPrivacy: "Privacy Policy", footerImprint: "Imprint", footerTerms: "Terms",
    copyright: "© 2026 Aureus Homes AG. All rights reserved."
  },
  de: {
    navHome: "Start", navProject: "Das Haus", navSustainability: "Nachhaltigkeit",
    navLocation: "Standort", navProcess: "Kaufprozess", navFaq: "FAQ", navContact: "Kontakt",
    heroTag: "Aureus Homes AG — Smart Living",
    heroTitle: "Mehr Zuhause.<br>Weniger Kompromisse.",
    heroSub: "Moderne Häuser für eine neue Generation. Durchdacht geplant, nachhaltig gebaut und in nur 5 Monaten bezugsbereit.",
    heroBtn1: "Projekt entdecken", heroBtn2: "Informationen anfordern",
    scrollText: "Scrollen",
    brandTag: "Unsere Philosophie",
    brandTitle: "Architektur, die man sich leisten kann",
    brandSub: "Aureus Homes steht für eine neue Generation von Familienhäusern in der Schweiz — modern, hochwertig und durchdacht für das echte Leben.",
    val1Title: "Premium Qualität", val1Desc: "Hochwertige Materialien und Oberflächen, die bestehen.",
    val2Title: "Modernes Design", val2Desc: "Klare Architektur mit grosszügigem Licht und Raum.",
    val3Title: "Faire Preise", val3Desc: "Transparente Preisgestaltung ohne versteckte Kosten.",
    val4Title: "Schneller Einzug", val4Desc: "Bezugsbereit in nur 5 Monaten nach Unterzeichnung. Effizient und sicher.",
    featTag: "Ausstattung",
    featTitle: "Für modernes Wohnen konzipiert",
    feat1Title: "Bodentiefe Fenster", feat1Desc: "Premium Metallfenster mit Dreifachverglasung für maximales Tageslicht.",
    feat2Title: "Fussbodenheizung", feat2Desc: "Gleichmässige Wärme durch energieeffiziente Luft-Wasser-Wärmepumpe.",
    feat3Title: "Premium Eichenparkett", feat3Desc: "Drei Farboptionen verfügbar. Langlebig, warm und zeitlos.",
    feat4Title: "Smart-Home Ready", feat4Desc: "Vorinstallierte Infrastruktur für Ihr Smart-Home-System.",
    feat5Title: "Moderne Sicherheitstüren", feat5Desc: "Sicherheitstüren, die modernsten Sicherheits- und Schliessstandards entsprechen.",
    feat6Title: "Photovoltaic Ready", feat6Desc: "Vorbereitet für die Installation von Solarmodulen.",
    feat7Title: "Elektrische Lamellenstoren", feat7Desc: "Alle Fenster mit elektrisch betriebenen Lamellenstoren für maximalen Komfort.",
    specTag: "Qualitäts-Details",
    specTitle: "Premium Grundausstattung",
    spec1Title: "Eingang & Türen", spec1Desc: "Moderne Sicherheitstüren und Designer-Türgriffe im ganzen Haus.",
    spec2Title: "Fenster & Storen", spec2Desc: "Dreifachverglasung mit hochwertigen Griffen und elektrischen Storen.",
    spec3Title: "Sanitäre Anlagen", spec3Desc: "Waschtische mit Unterbaumöbeln, Badewannen und moderne Armaturen.",
    spec4Title: "Innenausbau & Stauraum", spec4Desc: "Massgefertigte Einbauschränke und hochwertige Möbellösungen.",
    spec5Title: "Licht & Elektro", spec5Desc: "Deckenspotlights und umfassende Elektro-Layoutpläne für volle Kontrolle.",
    spec6Title: "Bodenbeläge", spec6Desc: "Wahl aus bis zu 4 Eichenparkett-Optionen und Premium-Plattenbelägen.",
    showTag1: "Wohnräume",
    showTitle1: "Grosszügige Räume,<br>Premium Ausstattung",
    showSub1: "Dies ist kein kleines Smart House. Es bietet grosszügiges Familienwohnen mit 131 m² Nettowohnfläche und 2,40 m Raumhöhe.",
    showList1a: "Offener Wohn- und Essbereich",
    showList1b: "Premium Eichenparkett durchgehend",
    showList1c: "Bodentiefe Fenster für maximales Tageslicht",
    showList1d: "Smart-Home-fähige Infrastruktur",
    showTag2: "Badezimmer",
    showTitle2: "Moderne Badezimmer,<br>Funktional & Komfortabel",
    showSub2: "Moderne Badezimmer, die Funktionalität und Komfort vereinen.",
    showList2a: "Vollbad mit Badewanne und Dusche",
    showList2b: "Zweites Bad mit begehbarer Dusche",
    showList2c: "Zusätzliches Gäste-WC",
    showList2d: "Premium Armaturen durchgehend",
    fact1Label: "Nettowohnfläche", fact2Label: "Raumhöhe",
    fact3Label: "Holzanteil", fact4Label: "Schlafzimmer",
    susTag: "Nachhaltigkeit",
    susTitle: "Nachhaltig gebaut.<br>Für modernes Wohnen konzipiert.",
    susSub: "Mit einem aussergewöhnlichen Holzanteil von ca. 80% setzen unsere Häuser neue Massstäbe für nachhaltiges Familienwohnen.",
    susStatLabel: "Holzbauweise",
    susFeat1: "Luft-Wasser-Wärmepumpe",
    susFeat2: "Photovoltaik-Vorbereitung",
    susFeat3: "Energieeffiziente Bauweise",
    susFeat4: "Langlebige Materialien",
    susFeat5: "Wartungsarme Lösungen",
    susFeat6: "Moderne Holz-Vorfertigung",
    terraceTag: "Aussenbereich",
    terraceTitle: "Ihr privater Rückzugsort",
    terraceSub: "Eine grosszügige 20 m² Gartenterrasse mit Premium Fundermax-Oberfläche — rutschfest, wartungsfrei und äusserst langlebig.",
    terraceList1: "Ca. 20 m² Premium Holzterrasse",
    terraceList2: "Rutschfeste Fundermax-Oberfläche",
    terraceList3: "Wartungsfrei und hochbeständig",
    terraceList4: "Moderne Betonplatten am Eingang",
    locTag: "Standort",
    locTitle: "Herbstweg, 5722 Gränichen AG",
    locSub: "Eine ruhige, familienfreundliche Wohnlage mit hervorragender Infrastruktur — naturnah und trotzdem zentral.",
    locZurich: "Zürich", locBasel: "Basel", locBern: "Bern", locLuzern: "Luzern",
    locMin: "Min.", locKm: "km",
    locInfraTag: "Familien-Infrastruktur",
    locInfraTitle: "Alles in Reichweite",
    locInfra1: "Kindergarten und Primarschule in der Nähe",
    locInfra2: "Sekundarschule in der Region",
    locInfra3: "Einkaufen in Gehdistanz",
    locInfra4: "Anbindung an den öffentlichen Verkehr",
    locInfra5: "Restaurants und tägliche Versorgung",
    locInfra6: "Natur und Erholung in der Nähe",
    processTag: "Kaufprozess",
    processTitle: "Transparent. Strukturiert. Sicher.",
    processSub: "Ein klar strukturierter Kaufprozess schafft Vertrauen und Planungssicherheit.",
    step1Title: "Reservation", step1Amount: "CHF 50'000", step1Desc: "Reservationsanzahlung",
    step2Title: "Notar", step2Amount: "CHF 660'000", step2Desc: "Grundstück + erste Rate",
    step3Title: "Produktion", step3Amount: "CHF 200'000", step3Desc: "Produktionsstart",
    step4Title: "Montage", step4Amount: "CHF 120'000", step4Desc: "Montage vor Ort",
    step5Title: "Übergabe", step5Amount: "CHF 30'000", step5Desc: "Schlusszahlung",
    priceTag: "Investition",
    priceTitle: "Premium Wohneigentum",
    priceAmount: "CHF 1'060'000",
    priceSub: "Architektur, Qualität und Nachhaltigkeit — zu einem Preis, der erreichbar bleibt.",
    floorTag: "Grundrisse",
    floorTitle: "Intelligente Raumaufteilung",
    floorSub: "Optimiert für das Familienleben mit grosszügigen Räumen, natürlichem Licht und praktischem Stauraum.",
    tabGround: "Erdgeschoss", tabUpper: "Obergeschoss",
    floorPlaceholder: "Interaktive Grundrisse in Kürze verfügbar.",
    faqTag: "Häufige Fragen",
    faqTitle: "Häufig gestellte Fragen",
    faq1Q: "Warum gibt es keinen Keller?",
    faq1A: "Anstelle eines teuren Kellers bieten wir 26 m² praktischen Netto-Stauraum genau dort, wo Sie ihn brauchen: 10 m² direkt beim Carport, 6 m² direkt bei der Eingangstür und 10 m² im Haus (davon ca. 4 m² in Einbauschränken). Das hält die Kosten transparent und das Wohnen effizient.",
    faq2Q: "Warum ist die Küche nicht enthalten?",
    faq2A: "Jede Familie lebt anders. Die Küche bleibt bewusst offen für die individuelle Wahl — maximale Flexibilität bei Stil, Ausstattung und Budget.",
    faq3Q: "Welche Anpassungsmöglichkeiten gibt es?",
    faq3A: "Sie können aus drei Premium-Eichenparkett-Farben wählen und haben volle Freiheit bei der Küchengestaltung. Das Haus ist Smart-Home- und Photovoltaik-fähig.",
    faq4Q: "Wie funktioniert die Bauweise?",
    faq4A: "Die Häuser basieren auf modernem Holzbau und hochwertiger Vorfertigung — nachhaltige Materialien kombiniert mit präziser Ingenieurskunst.",
    faq5Q: "Ist das Haus für Erweiterungen vorbereitet?",
    faq5A: "Ja. Das Flachdach ist statisch für einen zukünftigen Dachgeschossausbau vorbereitet — Raum zum Wachsen mit Ihrer Familie.",
    faq6Q: "Wie sieht es mit der Umgebungsgestaltung aus?",
    faq6A: "Die Aussenanlagen sind mit klarem Fokus auf Einfachheit, Funktionalität und langfristige Flexibilität gestaltet. Um die Gesamtprojektkosten effizient zu halten und es den Hausbesitzern zu ermöglichen, ihr Grundstück im Laufe der Zeit zu personalisieren, ist das Landschaftskonzept bewusst sauber und pflegeleicht gehalten. Der Garten wird planiert und vorbereitet übergeben, wo nötig mit Rasensaat, was ein solides und praktisches Fundament für zukünftige individuelle Gestaltungsideen schafft. Der Carport-Bereich ist mit verdichtetem Kies versehen, während Betonplatten einen sauberen und langlebigen Zugangsweg zum Haus bieten. Dieser Ansatz hält das Äussere aufgeräumt, funktional und ab dem ersten Tag bezugsbereit — und lässt gleichzeitig Raum für persönliche Akzente und zukünftige Erweiterungen im eigenen Tempo.",
    contactTag: "Kontakt",
    contactTitle: "Informationen anfordern",
    contactSub: "Interessiert? Kontaktieren Sie uns und wir senden Ihnen die vollständige Projektdokumentation.",
    contactAddr: "Herbstweg, 5722 Gränichen AG, Schweiz",
    contactPhone: "+41 79 874 13 22",
    formName: "Vollständiger Name", formEmail: "E-Mail-Adresse", formPhone: "Telefon",
    formInterest: "Interesse", formOptDoc: "Projektdokumentation", formOptViewing: "Besichtigung vereinbaren",
    formOptFloor: "Grundriss erhalten", formOptGeneral: "Allgemeine Anfrage",
    formMsg: "Nachricht", formSend: "Anfrage senden",
    formSuccessTitle: "Vielen Dank!",
    formSuccessMsg: "Wir haben Ihre Anfrage erhalten und melden uns in Kürze.",
    footerDesc: "Moderne Familienhäuser in der Schweiz. Premium. Erreichbar. Nachhaltig.",
    footerNav: "Navigation", footerLegal: "Rechtliches", footerFollowUs: "Verbinden",
    footerPrivacy: "Datenschutz", footerImprint: "Impressum", footerTerms: "AGB",
    copyright: "© 2026 Aureus Homes AG. Alle Rechte vorbehalten."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  document.querySelector('.lang-switch').textContent = lang === 'en' ? 'DE' : 'EN';
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'de' : 'en');
}

// ── NAVBAR SCROLL ──
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  if (window.scrollY > 600) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ── MOBILE MENU ──
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── BACK TO TOP ──
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── REVEAL ON SCROLL ──
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// ── FAQ ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── FLOOR PLAN TABS ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    document.querySelector('.form-success').classList.add('show');
  });
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    const isDecimal = target.includes('.');
    const end = parseFloat(target);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      
      if (isDecimal) {
        counter.textContent = current.toFixed(2) + suffix;
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
      
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const factsSection = document.querySelector('.facts-bar');
if (factsSection) {
  const factsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        factsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  factsObserver.observe(factsSection);
}

// ── INIT LANGUAGE ──
setLanguage('en');
