/*
  ========================================================================
  EDIT THIS FILE to update your institute's contact details everywhere.
  These values are used across the whole website (header, footer, contact
  page, enquiry form, WhatsApp button, etc.).

  Once the ICI Portal is connected (NEXT_PUBLIC_PORTAL_URL), contact details,
  announcements, the offer banner, stats and library details are edited in
  the portal (Staff › Website) and override these. The values here stay as
  the backup the site shows if the portal can't be reached.
  ========================================================================
*/

export const site = {
  name: "ICI Group",
  shortName: "ICI",
  tagline: "Careers, computers & higher education — all under one roof",
  foundedYear: 1998,
  // A one-line description used for SEO and the footer.
  description:
    "ICI Group, Jhunjhunu — since 1998. Home to Innovative Career Institute (UG & PG admission counselling) and Indian Computer Institute (job-oriented computer courses). An authorized center of Geduconnect Pvt. Ltd. and AISECT SKP Knowledge Provider.",

  // ---- Contact details ----
  phone: "+91 96499 00888", // primary number (used for header & call links)
  phoneAlt: "+91 96676 72768", // secondary number (shown on contact pages)
  // Digits only, with country code, no spaces/+ — used for WhatsApp links.
  whatsapp: "919649900888",
  email: "iciedu.info@gmail.com",
  address: {
    line1: "1/147, Housing Board, Near Power House",
    line2: "Jhunjhunu, Rajasthan - 333001",
  },
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",

  // Google Maps embed URL (Maps → Share → Embed a map → copy the src URL).
  // For a precise pin, replace this with the embed link of your exact location.
  mapEmbedSrc:
    "https://www.google.com/maps?q=ICI+Computer+Institute,+Housing+Board,+Near+Power+House,+Jhunjhunu,+Rajasthan+333001&output=embed",

  // ---- Social links (leave blank "" to hide an icon) ----
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  },

  // ---- Analytics (both optional — leave "" to keep them off) ----
  // Google Analytics 4: create a property at https://analytics.google.com,
  // copy your Measurement ID (looks like "G-XXXXXXXXXX") and paste it here.
  gaId: "",
  // Microsoft Clarity (free heatmaps + recordings): create a project at
  // https://clarity.microsoft.com, copy the project ID and paste it here.
  clarityId: "",

  // ---- Trust stats shown on the site (edit freely) ----
  stats: [
    { value: "27+", label: "Years of Experience", labelHi: "वर्षों का अनुभव" },
    { value: "10,000+", label: "Students Trained", labelHi: "प्रशिक्षित विद्यार्थी" },
    { value: "25+", label: "Courses & Programs", labelHi: "कोर्स व कार्यक्रम" },
    { value: "1998", label: "Established In", labelHi: "स्थापना वर्ष" },
  ],

  // ---- Scrolling announcement ticker (edit / add / remove freely) ----
  announcements: [
    "Admissions & Counselling open for 2026 — enrol now!",
    "New batches for Master Diploma in Computer Application (MDCA) starting soon",
    "RS-CIT (Govt. of Rajasthan) batches now enrolling",
    "Library memberships available — half-day & full-day seats",
  ],
  announcementsHi: [
    "प्रवेश एवं काउंसलिंग 2026 के लिए खुले हैं — अभी नामांकन करें!",
    "मास्टर डिप्लोमा इन कंप्यूटर एप्लीकेशन (MDCA) के नए बैच जल्द शुरू",
    "RS-CIT (राजस्थान सरकार) बैच में अभी नामांकन जारी",
    "लाइब्रेरी सदस्यता उपलब्ध — आधे-दिन व पूरे-दिन की सीट",
  ],

  // ---- FREE-for-women scheme (top banner + homepage section) ----
  // Set active:false to hide it, or change the deadline (yyyy-mm-dd). The
  // banner also auto-hides after the deadline passes.
  womenOffer: {
    active: true,
    deadline: "2026-08-25",
    // Short banner (pinned above the header on every page)
    bannerTitle: "FREE for Women",
    bannerTitleHi: "महिलाओं के लिए निःशुल्क",
    bannerText: "RS-CIT & RS-CFA (Tally) — free admission till 25 August 2026",
    bannerTextHi: "RS-CIT व RS-CFA (Tally) — 25 अगस्त 2026 तक निःशुल्क प्रवेश",
    cta: "Enrol Free",
    ctaHi: "निःशुल्क नामांकन",
    // Homepage section
    eyebrow: "Special Scheme for Women",
    eyebrowHi: "महिलाओं के लिए विशेष योजना",
    title: "Free Computer Courses for Women",
    titleHi: "महिलाओं के लिए निःशुल्क कंप्यूटर कोर्स",
    text: "Under our special women's empowerment scheme, RS-CIT and RS-CFA (Tally) are completely FREE for women — enrol before 25 August 2026. No course fee, with study material and certification support included.",
    textHi: "हमारी विशेष महिला-सशक्तिकरण योजना के तहत RS-CIT और RS-CFA (Tally) महिलाओं के लिए पूरी तरह निःशुल्क हैं — 25 अगस्त 2026 से पहले नामांकन करें। कोई कोर्स शुल्क नहीं, अध्ययन सामग्री व प्रमाणपत्र सहायता शामिल।",
    deadlineLabel: "Free till 25 August 2026",
    deadlineLabelHi: "25 अगस्त 2026 तक निःशुल्क",
    courses: [
      {
        name: "RS-CIT",
        slug: "rs-cit",
        desc: "Govt. of Rajasthan computer certificate",
        descHi: "राजस्थान सरकार कंप्यूटर प्रमाणपत्र",
      },
      {
        name: "RS-CFA (Tally)",
        slug: "rs-cfa",
        desc: "Computerised accounting with Tally",
        descHi: "Tally के साथ कंप्यूटरीकृत अकाउंटिंग",
      },
    ],
  },

  // ---- The two institutes under ICI Group ----
  // `id` must match the `institute` field used in src/data/courses.js
  institutes: [
    {
      id: "innovative-career-institute",
      name: "Innovative Career Institute",
      nameHi: "इनोवेटिव करियर इंस्टीट्यूट",
      short: "UG & PG admission counselling",
      shortHi: "UG व PG प्रवेश काउंसलिंग",
      focus:
        "Personalised counselling and guidance for graduation (UG) and post-graduation (PG) programs through our university partners. We help you choose the right course and university — we do not conduct admissions directly.",
      focusHi:
        "हमारे विश्वविद्यालय साझेदारों के माध्यम से स्नातक (UG) और स्नातकोत्तर (PG) कार्यक्रमों के लिए व्यक्तिगत काउंसलिंग व मार्गदर्शन। हम आपको सही कोर्स और विश्वविद्यालय चुनने में मदद करते हैं — हम सीधे प्रवेश नहीं कराते।",
      icon: "GraduationCap",
    },
    {
      id: "indian-computer-institute",
      name: "Indian Computer Institute",
      nameHi: "इंडियन कंप्यूटर इंस्टीट्यूट",
      short: "Job-oriented computer courses",
      shortHi: "रोज़गारोन्मुखी कंप्यूटर कोर्स",
      focus:
        "Practical, hands-on computer training taught directly at our institute — diplomas, accounting (Tally/GST), programming, design and more, in classroom and distance modes.",
      focusHi:
        "हमारे संस्थान में सीधे दिया जाने वाला प्रैक्टिकल, हैंड्स-ऑन कंप्यूटर प्रशिक्षण — डिप्लोमा, अकाउंटिंग (Tally/GST), प्रोग्रामिंग, डिज़ाइन और भी बहुत कुछ, कक्षा व डिस्टेंस दोनों मोड में।",
      icon: "Laptop",
    },
  ],

  // ---- Approvals & affiliations (shown on Home strip + About page) ----
  approvals: {
    geduconnect: {
      title: "Authorized Center — Geduconnect Pvt. Ltd.",
      titleHi: "अधिकृत केंद्र — Geduconnect Pvt. Ltd.",
      note: "Geduconnect Pvt. Ltd. collaborates with many recognised universities across India for UG & PG programs.",
    },
    aisect: {
      title: "AISECT — SKP Knowledge Provider",
      titleHi: "AISECT — SKP नॉलेज प्रोवाइडर",
      note: "Associated with AISECT, Bhopal since 2002 as an SKP (Skill Knowledge Provider) center, including AISECT–NSDC skill programs.",
    },
    rkcl: {
      title: "RKCL — Govt. of Rajasthan Authorised Centre",
      titleHi: "RKCL — राजस्थान सरकार अधिकृत केंद्र",
      note: "Authorised centre of Rajasthan Knowledge Corporation Ltd. (Govt. of Rajasthan) since 2010 for RS-CIT and other RKCL courses.",
    },
    // Other recognitions shown as badges on the About page.
    partners: [
      { name: "NSDC (via AISECT)" },
      { name: "Microsoft" },
      { name: "Tally Academy" },
    ],
    // Universities we counsel & facilitate admissions for.
    universities: [
      { name: "Suresh Gyan Vihar University, Jaipur" },
    ],
  },

  // ---- Library facilities (shown on the Library page) ----
  library: {
    timing: "7:00 AM – 9:00 PM",
    options: ["Half Day", "Full Day"],
    openTo: "Open to ICI students and outside learners",
    highlight:
      "Many students who prepared in our library have gone on to secure government jobs.",
    facilities: [
      { title: "Air-Conditioned Hall", icon: "Snowflake" },
      { title: "RO Drinking Water", icon: "Droplets" },
      { title: "Comfortable Chairs", icon: "Armchair" },
      { title: "Peaceful Environment", icon: "Leaf" },
    ],
  },

  // ---- Events & festivals we conduct (shown on the Events section) ----
  events: [
    {
      title: "Skill Development Yatra",
      titleHi: "कौशल विकास यात्रा",
      text: "An annual outreach drive across rural Shekhawati, spreading awareness about computer skills and self-employment.",
      textHi:
        "ग्रामीण शेखावाटी में हर साल निकलने वाली यात्रा, जो कंप्यूटर कौशल और स्वरोज़गार के प्रति जागरूकता फैलाती है।",
      icon: "Route",
    },
    {
      title: "Festivals & Celebrations",
      titleHi: "त्योहार एवं उत्सव",
      text: "We celebrate festivals and special days together — building a warm, friendly community beyond the classroom.",
      textHi:
        "हम त्योहार और खास दिन साथ मनाते हैं — कक्षा से परे एक गर्मजोशी भरा, मित्रवत समुदाय बनाते हैं।",
      icon: "PartyPopper",
    },
    {
      title: "Competitions & Workshops",
      titleHi: "प्रतियोगिताएँ एवं कार्यशालाएँ",
      text: "Typing contests, project showcases and skill workshops that keep learning fun and hands-on.",
      textHi:
        "टाइपिंग प्रतियोगिताएँ, प्रोजेक्ट प्रदर्शन और कौशल कार्यशालाएँ जो सीखने को रोचक व प्रैक्टिकल बनाती हैं।",
      icon: "Trophy",
    },
    {
      title: "Seminars & Career Guidance",
      titleHi: "सेमिनार एवं करियर मार्गदर्शन",
      text: "Regular seminars on careers, government exams and new technology to guide our students.",
      textHi:
        "करियर, सरकारी परीक्षाओं और नई तकनीक पर नियमित सेमिनार जो हमारे विद्यार्थियों का मार्गदर्शन करते हैं।",
      icon: "Presentation",
    },
  ],
};

// ---- Helper (used by the pages — no need to edit) ----
export const getInstitute = (id) =>
  site.institutes.find((institute) => institute.id === id);

export default site;
