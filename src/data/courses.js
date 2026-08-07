/*
  ========================================================================
  YOUR REAL COURSES (from the ICI prospectus). Edit freely — copy a block
  and change the text. Each `slug` must be UNIQUE (lowercase-with-dashes).

  Fields:
    slug, title, short, category, institute, duration, level,
    distance (self-paced), online (live classes), featured (home page),
    counsellingOnly (UG/PG note), description, highlights, eligibility

  INSTITUTE IDS (see src/data/site.js → institutes):
    "innovative-career-institute"  → UG & PG university degrees (counselling)
    "indian-computer-institute"    → computer / AISECT / RKCL courses (taught directly)

  ⚠️ PLEASE CONFIRM / ADJUST:
    1) The institute each course belongs to (the split above is our best guess).
    2) The full forms of the RKCL courses RS-CRM and RS-CEL (marked below).
  ========================================================================
*/

export const categories = [
  { id: "ug", label: "UG Courses", labelHi: "UG कोर्स" },
  { id: "pg", label: "PG Courses", labelHi: "PG कोर्स" },
  { id: "diploma", label: "Diploma", labelHi: "डिप्लोमा" },
  { id: "accounting", label: "Accounting", labelHi: "अकाउंटिंग" },
  { id: "design", label: "Design", labelHi: "डिज़ाइन" },
  { id: "programming", label: "Programming", labelHi: "प्रोग्रामिंग" },
  { id: "govt", label: "Govt / RKCL", labelHi: "सरकारी / RKCL" },
];

// Shown as a small note on every UG/PG (counsellingOnly) course.
export const COUNSELLING_NOTE =
  "Admission counselling only — we guide you to the right university program through our partners (Geduconnect Pvt. Ltd. / Suresh Gyan Vihar University). We do not conduct admissions directly.";

export const courses = [
  /* =====================  MAIN COURSE — RS-CIT (Govt. of Rajasthan)  ===================== */
  {
    slug: "rs-cit",
    title: "RS-CIT (Rajasthan State Certificate in IT)",
    short: "Rajasthan Government's flagship computer certificate — our most popular course.",
    category: "govt",
    institute: "indian-computer-institute",
    duration: "132 Hrs",
    level: "Beginner",
    distance: false,
    online: false,
    featured: true,
    description:
      "RS-CIT is the Government of Rajasthan's flagship computer literacy certificate, run by RKCL — and our most popular course. It's widely recognised for government jobs and departments, covering computer basics, internet, MS-Office, e-governance services and digital payments.",
    highlights: [
      "Computer & internet fundamentals",
      "MS-Office (Word, Excel, PowerPoint)",
      "e-Governance & online services",
      "Digital payments & safety",
      "Government-recognised certificate",
    ],
    eligibility: "Open to all. Recognised across Rajasthan Government departments.",
  },

  /* =====================  FLAGSHIP DIPLOMA  ===================== */
  {
    slug: "mdca",
    title: "Master Diploma in Computer Application (MDCA)",
    short: "Our flagship all-in-one diploma — office, programming, accounting & design.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "All-in-One",
    distance: true,
    online: true,
    featured: true,
    description:
      "MDCA is our flagship, most complete computer program — designed to make you fully job-ready. It combines everything: computer fundamentals and MS-Office, programming, computerised accounting with Tally & GST, web and graphic design, and the internet. If you want one course that covers it all, this is it.",
    highlights: [
      "Computer fundamentals & MS-Office",
      "Programming (C, C++ & more)",
      "Tally with GST & computerised accounting",
      "Web design & graphic design",
      "Internet, email & practical projects",
      "Complete, job-oriented curriculum",
    ],
    eligibility: "10th / 12th pass. No prior computer knowledge required.",
  },

  /* =====================  UG COURSES (university counselling)  ===================== */
  {
    slug: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    short: "Graduation in computer applications & IT.",
    category: "ug",
    institute: "innovative-career-institute",
    duration: "3 Years",
    level: "Graduation",
    distance: true,
    online: false,
    featured: true,
    counsellingOnly: true,
    description:
      "BCA is a popular IT graduation. We counsel you on the right BCA program and university (including Suresh Gyan Vihar University), and — with our Indian Computer Institute — you can build real practical skills alongside your degree.",
    highlights: [
      "Computer applications & programming focus",
      "Regular & distance learning options",
      "University selection guidance",
      "Practical computer training available at ICI",
    ],
    eligibility: "12th pass (any stream, Maths preferred) from a recognised board.",
  },
  {
    slug: "bba",
    title: "Bachelor of Business Administration (BBA)",
    short: "Graduation in management & business.",
    category: "ug",
    institute: "innovative-career-institute",
    duration: "3 Years",
    level: "Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Considering a career in management? Our counsellors help you choose the best BBA program and university partner, and support you through admission.",
    highlights: [
      "Management & business fundamentals",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "12th pass (any stream) from a recognised board.",
  },
  {
    slug: "ba",
    title: "Bachelor of Arts (BA)",
    short: "Graduation in arts & humanities.",
    category: "ug",
    institute: "innovative-career-institute",
    duration: "3 Years",
    level: "Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Get expert counselling for a Bachelor of Arts degree through our partner universities. We help you pick the right specialisation and guide you through the entire admission process.",
    highlights: [
      "Choice of subjects & specialisations",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "12th pass (any stream) from a recognised board.",
  },
  {
    slug: "bcom",
    title: "Bachelor of Commerce (B.Com)",
    short: "Graduation in commerce, accounting & finance.",
    category: "ug",
    institute: "innovative-career-institute",
    duration: "3 Years",
    level: "Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Plan your commerce graduation with our counselling team. We guide you to the right B.Com program and university partner based on your goals in accounting, finance or business.",
    highlights: [
      "Accounting, finance & taxation focus",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "12th pass (Commerce preferred) from a recognised board.",
  },
  {
    slug: "bsc",
    title: "Bachelor of Science (B.Sc)",
    short: "Graduation in science streams.",
    category: "ug",
    institute: "innovative-career-institute",
    duration: "3 Years",
    level: "Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Get guidance for a B.Sc degree in your preferred science stream through our partner universities, with full support during admission.",
    highlights: [
      "Multiple science specialisations",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "12th pass (Science) from a recognised board.",
  },

  /* =====================  PG COURSES (university counselling)  ===================== */
  {
    slug: "mba",
    title: "Master of Business Administration (MBA)",
    short: "Post-graduation in management & leadership.",
    category: "pg",
    institute: "innovative-career-institute",
    duration: "2 Years",
    level: "Post Graduation",
    distance: true,
    online: false,
    featured: true,
    counsellingOnly: true,
    description:
      "An MBA can transform your career. Our counsellors help you choose the right specialisation (marketing, finance, HR and more) and university partner, and support you through admission.",
    highlights: [
      "Specialisations: Marketing, Finance, HR & more",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "Graduation (any stream) from a recognised university.",
  },
  {
    slug: "mca",
    title: "Master of Computer Applications (MCA)",
    short: "Post-graduation in computer applications.",
    category: "pg",
    institute: "innovative-career-institute",
    duration: "2 Years",
    level: "Post Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "MCA is a strong IT post-graduation. We counsel you on the right program and university, with optional practical computer training at Indian Computer Institute.",
    highlights: [
      "Advanced computer applications & software",
      "Regular & distance learning options",
      "University selection guidance",
      "Practical computer training available at ICI",
    ],
    eligibility: "BCA / B.Sc (IT) / graduation with Maths, from a recognised university.",
  },
  {
    slug: "msc-maths",
    title: "Master of Science in Mathematics (M.Sc Maths)",
    short: "Post-graduation in mathematics.",
    category: "pg",
    institute: "innovative-career-institute",
    duration: "2 Years",
    level: "Post Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Advance your knowledge of mathematics with an M.Sc through our partner universities. We help you choose the right program and complete admission smoothly.",
    highlights: [
      "Advanced mathematics specialisation",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "Graduation with Mathematics from a recognised university.",
  },
  {
    slug: "ma",
    title: "Master of Arts (MA)",
    short: "Post-graduation in arts & humanities.",
    category: "pg",
    institute: "innovative-career-institute",
    duration: "2 Years",
    level: "Post Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Advance your qualifications with an MA. Our counsellors help you select the right specialisation and university partner and guide you through admission.",
    highlights: [
      "Choice of specialisations",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "Graduation (any stream) from a recognised university.",
  },
  {
    slug: "mcom",
    title: "Master of Commerce (M.Com)",
    short: "Post-graduation in commerce & finance.",
    category: "pg",
    institute: "innovative-career-institute",
    duration: "2 Years",
    level: "Post Graduation",
    distance: true,
    online: false,
    featured: false,
    counsellingOnly: true,
    description:
      "Take your commerce career further with an M.Com. We counsel you on the best program and university partner for your goals.",
    highlights: [
      "Advanced accounting & finance",
      "Regular & distance learning options",
      "University selection guidance",
      "Complete admission process support",
    ],
    eligibility: "B.Com or equivalent graduation from a recognised university.",
  },

  /* =====================  DIPLOMA (Indian Computer Institute)  ===================== */
  {
    slug: "dca",
    title: "Diploma in Computer Application (DCA)",
    short: "One-year foundation diploma for jobs & daily computer work.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Beginner",
    distance: true,
    online: true,
    featured: true,
    description:
      "Our most popular foundation diploma. Learn computer fundamentals, operating systems, MS-Office, the internet, programming basics and financial accounting — the complete skill-set every modern workplace expects.",
    highlights: [
      "Computer fundamentals & operating systems",
      "MS-Office (Word, Excel, PowerPoint)",
      "Internet & email",
      "Programming basics & FoxPro",
      "Introduction to financial accounting",
    ],
    eligibility: "10th pass or above. No prior computer knowledge required.",
  },
  {
    slug: "adca",
    title: "Advanced Diploma in Computer Application (ADCA)",
    short: "One-year advanced diploma — office, accounting, web & design.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "ADCA builds on DCA with more depth — office applications, computerised accounting with Tally & GST, web design and graphic design basics. A popular, job-oriented advanced diploma for students who want a strong all-round computer qualification.",
    highlights: [
      "Everything in DCA, in more depth",
      "Tally with GST & computerised accounting",
      "Web design basics (HTML & CSS)",
      "Graphic design (Photoshop / CorelDRAW)",
      "Practical projects & assignments",
    ],
    eligibility: "10th / 12th pass. Basic computer awareness helpful.",
  },
  {
    slug: "o-level",
    title: "'O' Level (NIELIT)",
    short: "Government-recognised NIELIT IT diploma, valued for jobs.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "The 'O' Level is a nationally recognised IT diploma from NIELIT (National Institute of Electronics & Information Technology, Govt. of India). It is widely valued for government and private jobs, covering IT tools, programming, web design and more — a strong qualification for a computer career.",
    highlights: [
      "IT tools & business systems",
      "Programming & problem solving",
      "Web design & internet technologies",
      "Introduction to ICT & databases",
      "NIELIT (Govt. of India) recognised certificate",
    ],
    eligibility: "10+2 pass or ITI certificate.",
  },
  {
    slug: "pgdca",
    title: "Post Graduate Diploma in Computer Application (PGDCA)",
    short: "Advanced one-year computer diploma for graduates.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Advanced",
    distance: true,
    online: true,
    featured: false,
    description:
      "A career-focused post graduate diploma for graduates who want strong, job-ready computer skills — covering office applications, programming, databases (RDBMS & SQL), Visual Basic and web & .Net technology.",
    highlights: [
      "Operating systems & MS-Office",
      "Programming (C++) & Visual Basic",
      "RDBMS & SQL",
      "Web & .Net technology",
      "Live project work",
    ],
    eligibility: "Graduate in any stream from a recognised university.",
  },
  {
    slug: "adchn",
    title: "Advanced Diploma in Computer Hardware & Networking (ADCHN)",
    short: "Assemble, repair & network computers — hands-on.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Intermediate",
    distance: false,
    online: false,
    featured: false,
    description:
      "A practical, hands-on diploma for those who love working with machines. Learn to assemble PCs, troubleshoot faults, install operating systems and set up networks — skills always in demand.",
    highlights: [
      "Computer assembling & components",
      "Troubleshooting & repairs",
      "Operating system installation",
      "Networking & LAN setup",
      "Internet & Wi-Fi configuration",
    ],
    eligibility: "10th / 12th pass with interest in hardware.",
  },
  {
    slug: "dctt",
    title: "Diploma in Computer Teachers Training (DCTT)",
    short: "Train to become a qualified computer teacher.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "Designed for those who want to teach computers. Along with computer fundamentals and office applications, you learn teaching methods, education technology and lesson planning through micro-teaching.",
    highlights: [
      "Computer fundamentals & MS-Office",
      "FoxPro & internet applications",
      "Teaching–learning process",
      "Education technology & management",
      "Micro-teaching & lesson planning",
    ],
    eligibility: "12th pass / graduate with interest in teaching.",
  },
  {
    slug: "cca",
    title: "Certificate in Computer Applications (CCA)",
    short: "Six-month certificate in essential computer skills.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "6 Months",
    level: "Beginner",
    distance: true,
    online: true,
    featured: false,
    description:
      "A focused certificate covering the everyday computer skills employers expect — operating systems, MS-Office, FoxPro basics and financial accounting fundamentals.",
    highlights: [
      "Computer fundamentals",
      "MS-Office (Word, Excel, PowerPoint)",
      "Programming basics & FoxPro",
      "Introduction to financial accounting",
    ],
    eligibility: "10th pass or above.",
  },
  {
    slug: "cac",
    title: "Computer Applied Course (CAC)",
    short: "Short three-month basic computer certificate.",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "3 Months",
    level: "Beginner",
    distance: true,
    online: true,
    featured: false,
    description:
      "A short, practical course to get comfortable with computers quickly — ideal for beginners, students and anyone starting their digital journey.",
    highlights: [
      "Basic computer operation",
      "MS-Office essentials",
      "Internet & email",
      "Hands-on practice",
    ],
    eligibility: "Open to all. 10th pass recommended.",
  },
  {
    slug: "typing",
    title: "Hindi & English Typing",
    short: "Build typing speed & accuracy with a personal tutor & mentor.",
    titleHi: "हिंदी एवं अंग्रेज़ी टाइपिंग",
    shortHi: "पर्सनल ट्यूटर व मेंटर के साथ टाइपिंग गति व शुद्धता बढ़ाएं।",
    category: "diploma",
    institute: "indian-computer-institute",
    duration: "2 Months",
    level: "Beginner",
    distance: true,
    online: true,
    featured: false,
    description:
      "Fast, accurate typing in both Hindi and English is a valuable skill for office jobs, data entry, government exams and daily computer work. At ICI you don't just practise on software — every student gets a personal tutor and a dedicated mentor who correct your technique one-on-one and steadily build your speed and accuracy. It's also great preparation for government typing tests such as the LDC exam.",
    highlights: [
      "Personal tutor for every student",
      "Dedicated mentor to guide & motivate you",
      "Hindi (Mangal / Kruti Dev) & English typing",
      "Touch-typing technique, speed & accuracy drills",
      "Regular practice tests",
      "Useful for office work & government typing exams (LDC, etc.)",
    ],
    eligibility: "Open to all — students, job-seekers and government-exam aspirants.",
  },

  /* =====================  ACCOUNTING (Indian Computer Institute)  ===================== */
  {
    slug: "tpa",
    title: "Tally Professional Accountant (TPA)",
    short: "One-year professional accounting & Tally program.",
    category: "accounting",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "Become a job-ready professional accountant. This comprehensive program covers computerised accounting, Tally, GST, taxation and payroll — skills in high demand at firms and businesses of every size.",
    highlights: [
      "Accounting concepts & vouchers",
      "Tally with GST",
      "Inventory & stock management",
      "Taxation, TDS & payroll",
      "Practical business case studies",
    ],
    eligibility: "10th / 12th pass. Great for students, accountants & business owners.",
  },
  {
    slug: "cfa",
    title: "Computer Financial Accounting (CFA)",
    short: "Six-month computerised accounting certificate.",
    category: "accounting",
    institute: "indian-computer-institute",
    duration: "6 Months",
    level: "Beginner",
    distance: true,
    online: true,
    featured: false,
    description:
      "Learn computerised financial accounting from scratch — bookkeeping, ledgers, GST and reporting using popular accounting software. Perfect for jobs in shops, firms and offices.",
    highlights: [
      "Accounting fundamentals",
      "Tally & computerised accounting",
      "GST billing & returns",
      "Financial reports",
    ],
    eligibility: "10th pass or above.",
  },
  {
    slug: "tally-accounting",
    title: "Tally Accounting (TA)",
    short: "Focused short course on Tally accounting.",
    category: "accounting",
    institute: "indian-computer-institute",
    duration: "3 Months",
    level: "Beginner",
    distance: true,
    online: true,
    featured: false,
    description:
      "A focused, practical course on India's most-used accounting software. Learn to manage accounts, inventory and GST in Tally — quickly and confidently.",
    highlights: [
      "Tally basics & vouchers",
      "Inventory management",
      "GST in Tally",
      "Practical exercises",
    ],
    eligibility: "10th pass or above. Good for shopkeepers & job-seekers.",
  },

  /* =====================  DESIGN (Indian Computer Institute)  ===================== */
  {
    slug: "dgd",
    title: "Diploma in Graphic Designing (DGD)",
    short: "Create logos, posters & print designs like a pro.",
    category: "design",
    institute: "indian-computer-institute",
    duration: "4 Months",
    level: "Beginner",
    distance: false,
    online: false,
    featured: true,
    description:
      "Step into the creative world of design. Learn industry tools to design logos, brochures, banners and visiting cards — opening doors to printing press, advertising and freelance work.",
    highlights: [
      "Adobe Photoshop — photo editing & posters",
      "CorelDRAW — logos & vector design",
      "Page layout & printing (DTP)",
      "Colour theory & typography",
      "Real client-style design projects",
    ],
    eligibility: "Anyone with a creative interest. 10th pass or above.",
  },

  /* =====================  PROGRAMMING (Indian Computer Institute)  ===================== */
  {
    slug: "hdse",
    title: "Honours Diploma in Software Efficiency (HDSE)",
    short: "One-year advanced software & programming diploma.",
    category: "programming",
    institute: "indian-computer-institute",
    duration: "1 Year",
    level: "Advanced",
    distance: true,
    online: true,
    featured: false,
    description:
      "A comprehensive software diploma for those aiming at a serious IT/software career. Build strong programming foundations along with databases, web technology and real project experience.",
    highlights: [
      "Programming logic & C / C++",
      "Databases (RDBMS & SQL)",
      "Web technology & design",
      "Software development basics",
      "Live projects",
    ],
    eligibility: "12th pass or above with interest in software.",
  },
  {
    slug: "cpp",
    title: "Certificate in C & C++ Programming",
    short: "Start coding with core programming logic.",
    category: "programming",
    institute: "indian-computer-institute",
    duration: "3 Months",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "Build a solid programming foundation. Learn logic building, problem solving and object-oriented programming with C and C++ — the perfect first step toward a software career.",
    highlights: [
      "Programming logic & flowcharts",
      "C: loops, arrays, functions, pointers",
      "C++: classes, objects & OOP",
      "Hands-on coding exercises",
    ],
    eligibility: "12th pass or students with basic computer knowledge.",
  },
  {
    slug: "cwt",
    title: "Certificate in Web Technology (CWT)",
    short: "Design and build modern websites.",
    category: "programming",
    institute: "indian-computer-institute",
    duration: "6 Months",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "Turn ideas into real websites. Learn HTML, CSS and web design, along with graphics, databases and PHP basics — finishing with your own live website project.",
    highlights: [
      "HTML & responsive web design",
      "Graphics for the web (Photoshop)",
      "Databases & MySQL",
      "Introduction to PHP",
      "Build & publish a website",
    ],
    eligibility: "10th / 12th pass with interest in web design.",
  },
  {
    slug: "python",
    title: "Python Programming",
    short: "Learn the world's most in-demand programming language.",
    category: "programming",
    institute: "indian-computer-institute",
    duration: "4 Months",
    level: "Intermediate",
    distance: true,
    online: true,
    featured: false,
    description:
      "Python powers everything from websites to data science and AI. This beginner-friendly course takes you from your first line of code to building real programs, with plenty of hands-on projects.",
    highlights: [
      "Python basics & data types",
      "Loops, functions & file handling",
      "Working with libraries & modules",
      "Introduction to data handling",
      "Project: build a small application",
    ],
    eligibility: "No prior coding needed. Suitable for students & professionals.",
  },

  /* =====================  GOVT / RKCL (Indian Computer Institute)  ===================== */
  {
    slug: "rs-cfa",
    title: "RS-CFA (RKCL Certificate in Financial Accounting)",
    short: "Government-certified computer financial accounting.",
    category: "govt",
    institute: "indian-computer-institute",
    duration: "100 Hrs",
    level: "Beginner",
    distance: false,
    online: false,
    featured: false,
    description:
      "An RKCL government-certified course in computer financial accounting. Learn practical accounting and Tally with a certificate recognised by the Rajasthan Government.",
    highlights: [
      "Accounting fundamentals",
      "Tally & computerised accounting",
      "GST basics",
      "Government-recognised certificate",
    ],
    eligibility: "10th pass or above.",
  },
  {
    slug: "rs-cbfsi",
    title: "RS-CBFSI (Banking, Financial Services & Insurance)",
    short: "Govt-certified course for BFSI sector careers.",
    category: "govt",
    institute: "indian-computer-institute",
    duration: "100 Hrs",
    level: "Beginner",
    distance: false,
    online: false,
    featured: false,
    description:
      "An RKCL government-certified course preparing you for jobs in the banking, financial services and insurance (BFSI) sector — a fast-growing field with strong demand.",
    highlights: [
      "Banking & financial services basics",
      "Insurance fundamentals",
      "Customer service skills",
      "Government-recognised certificate",
    ],
    eligibility: "12th pass or above.",
  },
  {
    slug: "rs-crm",
    title: "RS-CRM (RKCL Certified Course)",
    short: "Government-certified RKCL skill course.",
    category: "govt",
    institute: "indian-computer-institute",
    duration: "132 Hrs",
    level: "Beginner",
    distance: false,
    online: false,
    featured: false,
    // TODO: confirm the exact full form of RS-CRM and update the title/description.
    description:
      "An RKCL government-certified skill course recognised by the Government of Rajasthan. Please contact us for the full syllabus, schedule and career outcomes.",
    highlights: [
      "Practical, job-oriented skills",
      "Government-recognised certificate",
      "Experienced faculty & guidance",
    ],
    eligibility: "Open to all. Contact us for details.",
  },
  {
    slug: "rs-cel",
    title: "RS-CEL (RKCL Certified Course)",
    short: "Government-certified RKCL skill course.",
    category: "govt",
    institute: "indian-computer-institute",
    duration: "100 Hrs",
    level: "Beginner",
    distance: false,
    online: false,
    featured: false,
    // TODO: confirm the exact full form of RS-CEL and update the title/description.
    description:
      "An RKCL government-certified skill course recognised by the Government of Rajasthan. Please contact us for the full syllabus, schedule and career outcomes.",
    highlights: [
      "Practical, job-oriented skills",
      "Government-recognised certificate",
      "Experienced faculty & guidance",
    ],
    eligibility: "Open to all. Contact us for details.",
  },
];

// ---- Helper functions (used by the pages — no need to edit) ----
export const getCourseBySlug = (slug) =>
  courses.find((course) => course.slug === slug);

export const getFeaturedCourses = () =>
  courses.filter((course) => course.featured);

export const getDistanceCourses = () =>
  courses.filter((course) => course.distance);

// Courses you can study from home (live online or self-paced), taught by
// Indian Computer Institute — used on the Online Learning hub page.
export const getOnlineCourses = () =>
  courses.filter(
    (course) =>
      (course.online || course.distance) &&
      course.institute === "indian-computer-institute"
  );

export const getCoursesByInstitute = (instituteId) =>
  courses.filter((course) => course.institute === instituteId);

export const getCategoryLabel = (id) =>
  categories.find((category) => category.id === id)?.label ?? id;

export default courses;
