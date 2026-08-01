/*
  ========================================================================
  EDIT THIS FILE to update your institute's contact details everywhere.
  These values are used across the whole website (header, footer, contact
  page, enquiry form, WhatsApp button, etc.).
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

  // ---- Enquiry form delivery ----
  // 1) Create a free account at https://formspree.io
  // 2) Make a new form, copy its endpoint (looks like https://formspree.io/f/abcdwxyz)
  // 3) Paste it below. Until then, the form falls back to WhatsApp.
  formspreeEndpoint: "",

  // ---- Trust stats shown on the site (edit freely) ----
  stats: [
    { value: "27+", label: "Years of Experience" },
    { value: "10,000+", label: "Students Trained" },
    { value: "25+", label: "Courses & Programs" },
    { value: "1998", label: "Established In" },
  ],

  // ---- Scrolling announcement ticker (edit / add / remove freely) ----
  announcements: [
    "Admissions & Counselling open for 2026 — enrol now!",
    "New batches for Master Diploma in Computer Application (MDCA) starting soon",
    "RS-CIT (Govt. of Rajasthan) batches now enrolling",
    "Library memberships available — half-day & full-day seats",
  ],

  // ---- The two institutes under ICI Group ----
  // `id` must match the `institute` field used in src/data/courses.js
  institutes: [
    {
      id: "innovative-career-institute",
      name: "Innovative Career Institute",
      short: "UG & PG admission counselling",
      focus:
        "Personalised counselling and guidance for graduation (UG) and post-graduation (PG) programs through our university partners. We help you choose the right course and university — we do not conduct admissions directly.",
      icon: "GraduationCap",
    },
    {
      id: "indian-computer-institute",
      name: "Indian Computer Institute",
      short: "Job-oriented computer courses",
      focus:
        "Practical, hands-on computer training taught directly at our institute — diplomas, accounting (Tally/GST), programming, design and more, in classroom and distance modes.",
      icon: "Laptop",
    },
  ],

  // ---- Approvals & affiliations (shown on Home strip + About page) ----
  approvals: {
    geduconnect: {
      title: "Authorized Center — Geduconnect Pvt. Ltd.",
      note: "Geduconnect Pvt. Ltd. collaborates with many recognised universities across India for UG & PG programs.",
    },
    aisect: {
      title: "AISECT — SKP Knowledge Provider",
      note: "Associated with AISECT, Bhopal since 2002 as an SKP (Skill Knowledge Provider) center, including AISECT–NSDC skill programs.",
    },
    rkcl: {
      title: "RKCL — Govt. of Rajasthan Authorised Centre",
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
      text: "An annual outreach drive across rural Shekhawati, spreading awareness about computer skills and self-employment.",
      icon: "Route",
    },
    {
      title: "Festivals & Celebrations",
      text: "We celebrate festivals and special days together — building a warm, friendly community beyond the classroom.",
      icon: "PartyPopper",
    },
    {
      title: "Competitions & Workshops",
      text: "Typing contests, project showcases and skill workshops that keep learning fun and hands-on.",
      icon: "Trophy",
    },
    {
      title: "Seminars & Career Guidance",
      text: "Regular seminars on careers, government exams and new technology to guide our students.",
      icon: "Presentation",
    },
  ],
};

// ---- Helper (used by the pages — no need to edit) ----
export const getInstitute = (id) =>
  site.institutes.find((institute) => institute.id === id);

export default site;
