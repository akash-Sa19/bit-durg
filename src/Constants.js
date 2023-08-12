import { global_icon, news_icon, } from "./assets/asset";


// const NavbarItems = ['About', 'Academics', 'Admission', 'Department', 'Placement', 'CampusLife', 'Connect']
const NavbarItems = [
  {
    title: "About",
    content: [
      {
        heading: "Glance At BIT-Durg",
        links: [
          ["About", "https://https://bitdurg.ac.in/about.ac.in/", { key: 1 }],

          ["Mission", "https://bitdurg.ac.in/mission", { key: 2 }],

          ["Quality Policy", "https://bitdurg.ac.in/mission", { key: 3 }],

          ["Visionaries", "https://bitdurg.ac.in/chairman-message", { key: 4 }],

          ["Principal", "https://bitdurg.ac.in/director-message", { key: 5 }],

          [
            "Vice Principal",
            "https://bitdurg.ac.in/vice-principal-message",
            { key: 6 },
          ],

          [
            "Mandatory Disclosures",
            "https://bitdurg.ac.in/downloads/Mandatory_Disclosure_2022-23.pdf",
            { key: 7 },
          ],

          [
            "NAAC-NBA Status",
            "https://bitdurg.ac.in//pdf/IQAC_Meeting_2017-2022.pdf",
            { key: 8 },
          ],

          [
            "Committees (2022-2024)",
            "https://bitdurg.ac.in/downloads/Committees_2022-2024.pdf",
            { key: 9 },
          ],
        ],
        key: 1,
      },
      {
        heading: "Administration",
        links: [
          ["Audit Report", "https://bitdurg.ac.in/audit-report", { key: 1 }],

          ["Governance", "https://bitdurg.ac.in/governance", { key: 2 }],

          [
            "Governance Member",
            "https://bitdurg.ac.in/pdf/Members_of_Trusties_Governors_AcademicCouncil.pdf",
            { key: 3 },
          ],
        ],
        key: 2,
      },
      {
        heading: "Collaboration",
        links: [
          ["MOU & Tie-Ups", "https://bitdurg.ac.in/mou", { key: 1 }],

          [
            "Professional Membership",
            "https://bitdurg.ac.in/professional-membership",
            { key: 2 },
          ],

          [
            "ERASMUS + Staff & Student Mobility",
            "https://bitdurg.ac.in/erasmus",
            { key: 3 },
          ],
        ],
        key: 3,
      },
      {
        heading: "Care @ BIT-Durg",
        links: [
          ["Anti Ragging", "https://bitdurg.ac.in/anti-ragging", { key: 1 }],

          [
            "Women Security Cell",
            "https://bitdurg.ac.in/women-security-cell",
            { key: 2 },
          ],

          // Empty Link - Down
          ["Grievance Redressal", "#", { key: 3 }],
        ],
        key: 4,
      },
      {
        heading: "Another Campus",
        links: [["BIT Raipur", "https://www.bitraipur.ac.in/", { key: 1 }]],
        key: 5,
      },
      {
        heading: "More...",
        links: [
          [
            "Awards & Achievement",
            "https://bitdurg.ac.in/institute",
            { key: 1 },
          ],

          [
            "Panorama Magazine",
            "https://bitdurg.ac.in/pdf/BIT_Panorama_2022.pdf",
            { key: 2 },
          ],

          ["Newspaper", "https://bitdurg.ac.in/newspaper", { key: 3 }],
        ],
        key: 6,
      },
    ],
    key: 1,
  },
  {
    title: "Academics",
    content: [
      {
        heading: "Centres @ BIT-Durg",
        links: [
          ["D Link", "https://bitdurg.ac.in/dlink", { key: 1 }],

          // Empty Link - Down
          ["NMEICT", "#", { key: 2 }],

          ["NPTEL", "https://bitdurg.ac.in/nptel", { key: 3 }],

          [
            "Spoken Tutorial",
            "https://bitdurg.ac.in/spoken-tutorial",
            { key: 4 },
          ],

          ["Texas Innovation", "https://bitdurg.ac.in/texas", { key: 5 }],
        ],
        key: 1,
      },
      {
        heading: "UG Programme",
        links: [
          [
            "Bachelor Of Technology (B.Tech)",
            "https://bitdurg.ac.in/ug-programme",
            { key: 1 },
          ],

          [
            "Bachelor Of Vocational (B.Voc.)",
            "https://bitdurg.ac.in/ug-programme#bvoc",
            { key: 2 },
          ],
        ],
        key: 2,
      },
      {
        heading: "PG Programme",
        links: [
          [
            "Master Of Technology (M.Tech)",
            "https://bitdurg.ac.in/pg-programme",
            { key: 1 },
          ],

          [
            "Master Of Computer Applications (MCA)",
            "https://bitdurg.ac.in/pg-programme",
            { key: 2 },
          ],

          [
            "Master Of Business Administration (MBA)",
            "https://bitdurg.ac.in/pg-programme",
            { key: 3 },
          ],
        ],
        key: 3,
      },
      {
        heading: "Doctoral Programme",
        links: [
          [
            "Doctor Of Philosophy (PhD)",
            "https://bitdurg.ac.in/doctoral-programme",
            { key: 1 },
          ],
        ],
        key: 4,
      },
      {
        heading: "Research @ BIT-Durg",
        links: [
          [
            "Research Overview",
            "https://bitdurg.ac.in/research-overview",
            { key: 1 },
          ],

          [
            "Patent & Copyright",
            "https://bitdurg.ac.in/patent-copyright",
            { key: 2 },
          ],

          [
            "Research Policies & Guidelines",
            "https://bitdurg.ac.in/research-policies",
            { key: 3 },
          ],

          [
            "Sponsored Research",
            "https://bitdurg.ac.in/research-project",
            { key: 4 },
          ],

          [
            "Annual Conference (BITCON)",
            "https://bitdurg.ac.in/bitcon/",
            { key: 5 },
          ],

          [
            "ISC-2019",
            "http://isca.net.co/past-isc/past-isc-2019.php",
            { key: 6 },
          ],

          [
            "AICTE ATAL EDP",
            "https://bitdurg.ac.in/aicte_atal_fdp",
            { key: 7 },
          ],

          [
            "International Conference",
            "https://bitdurg.ac.in/SIDSET-23/",
            { key: 8 },
          ],
        ],
        key: 5,
      },
      {
        heading: "Achievements",
        links: [
          ["Faculty Achievements", "https://bitdurg.ac.in/faculty", { key: 1 }],

          ["Student Achievements", "https://bitdurg.ac.in/student", { key: 2 }],
        ],
        key: 6,
      },
      {
        heading: "More..",
        links: [
          [
            "Academic Calender",
            "https://bitdurg.ac.in/academic-calendar",
            { key: 1 },
          ],

          [
            "Academic Regulation",
            "https://bitdurg.ac.in/images/pdf/Academic_Reglations.pdf",
            { key: 2 },
          ],

          [
            "Exam Manual",
            "https://bitdurg.ac.in/images/pdf/Exam_Manual.pdf",
            { key: 3 },
          ],

          [
            "Syllabus (CSVTU)",
            "https://csvtu.ac.in/ew/programs-and-schemes/",
            { key: 4 },
          ],

          ["Syllabus (BIT)", "https://bitdurg.ac.in/syllabus", { key: 5 }],
        ],
        key: 7,
      },
    ],
    key: 2,
  },
  {
    title: "Admission",
    content: [
      {
        heading: "Get Started",
        links: [
          [
            "Admission Procedure",
            "https://bitdurg.ac.in/admission",
            { key: 1 },
          ],

          [
            "Reservation Policy",
            "https://bitdurg.ac.in/admission#reservation",
            { key: 2 },
          ],

          [
            "Tuition Fees Waiver Scheme",
            "https://bitdurg.ac.in/admission#tuition",
            { key: 3 },
          ],

          [
            "Scholarship",
            "https://bitdurg.ac.in/admission#scholarship",
            { key: 4 },
          ],

          [
            "Fees Structure (2022-23)",
            "https://bitdurg.ac.in/downloads/Fees_Structure_2022-23.pdf",
            { key: 5 },
          ],

          [
            "Fees Structure (2021-22)",
            "https://bitdurg.ac.in/downloads/Fees_Structure_2021-22.pdf",
            { key: 6 },
          ],
        ],
        key: 1,
      },
      {
        heading: "Regular Course",
        links: [
          ["B.Tech", "https://bitdurg.ac.in/ug-programme", { key: 1 }],

          ["M.Tech", "https://bitdurg.ac.in/pg-programme", { key: 2 }],

          ["MCA", "https://bitdurg.ac.in/pg-programme#mca", { key: 3 }],

          ["MBA", "https://bitdurg.ac.in/pg-programme#mba", { key: 4 }],

          ["Ph.D", "https://bitdurg.ac.in/doctoral-programme", { key: 5 }],

          ["B.Voc", "https://bitdurg.ac.in/ug-programme#bvoc", { key: 6 }],
        ],
        key: 2,
      },
      {
        heading: "Lateral Entry Courses",
        links: [["B.Tech Lateral Entry", "https://bitdurg.ac.in/", { key: 1 }]],
        key: 3,
      },
    ],
    key: 3,
  },
  {
    title: "Department",
    content: [
      {
        heading: "First Year",
        links: [
          [
            "B.Tech 1st Year",
            "https://bitdurg.ac.in/department/btech_first_year",
            { key: 1 },
          ],
        ],
        key: 1,
      },
      {
        heading: "Engineering",
        links: [
          [
            "Mechanical Engineering",
            "https://bitdurg.ac.in/department/mechanical-engineering",
            { key: 1 },
          ],

          [
            "Civil Engineering",
            "https://bitdurg.ac.in/department/civil-engineering",
            { key: 2 },
          ],

          [
            "Computer Science And Engineering",
            "https://bitdurg.ac.in/department/computer-science-and-engineering",
            { key: 3 },
          ],

          [
            "Information Technology",
            "https://bitdurg.ac.in/department/information-technology",
            { key: 4 },
          ],

          [
            "Electrical Engineering",
            "https://bitdurg.ac.in/department/electrical-engineering",
            { key: 5 },
          ],

          [
            "Electrical & Electronics Engineering",
            "https://bitdurg.ac.in/department/electrical-and-electronics-engineering",
            { key: 6 },
          ],

          [
            "Electronic & Telecommunication Engineering",
            "https://bitdurg.ac.in/department/electronics-and-telecommunication-engineering",
            { key: 7 },
          ],
        ],
        key: 2,
      },
      {
        heading: "Sciences",
        links: [
          [
            "Applied Chemistry",
            "https://bitdurg.ac.in/department/applied-chemistry",
            { key: 1 },
          ],

          [
            "Applied Mathematics",
            "https://bitdurg.ac.in/department/applied-mathematics",
            { key: 2 },
          ],

          [
            "Applied Physics",
            "https://bitdurg.ac.in/department/applied-physics",
            { key: 3 },
          ],

          [
            "Humanities",
            "https://bitdurg.ac.in/department/humanities",
            { key: 4 },
          ],
        ],
        key: 3,
      },
      {
        heading: "Management",
        links: [
          [
            "Master Of Business Administration",
            "https://bitdurg.ac.in/department/master-of-business-administration",
            { key: 1 },
          ],
        ],
        key: 4,
      },
      {
        heading: "Computer Application",
        links: [
          [
            "Master Of Computer Applications",
            "https://bitdurg.ac.in/department/master-of-computer-application",
            { key: 1 },
          ],
        ],
        key: 5,
      },
    ],
    key: 4,
  },
  {
    title: "Placement",
    content: [
      {
        heading: "Overview",
        links: [
          ["About T&P", "https://bitdurg.ac.in/about-tnp", { key: 1 }],

          ["Placement Team", "https://bitdurg.ac.in/tnp-team", { key: 2 }],

          [
            "Placement Gallery",
            "https://bitdurg.ac.in/gallery-tnp",
            { key: 3 },
          ],

          ["Contact T&P Cell", "https://bitdurg.ac.in/contact-tnp", { key: 4 }],
        ],
        key: 1,
      },
      {
        heading: "Udaan Incubation Centre",
        links: [
          ["About BrainTech", "https://bitdurg.ac.in/udaan-centre", { key: 1 }],
        ],
        key: 2,
      },
      {
        heading: "For Companies",
        links: [
          [
            "Why Recruit BITians",
            "https://bitdurg.ac.in/recruit-bitians",
            { key: 1 },
          ],

          [
            "Placement Procedure",
            "https://bitdurg.ac.in/placement-procedure",
            { key: 2 },
          ],

          [
            "Placement Statistics",
            "https://bitdurg.ac.in/placement-statics",
            { key: 3 },
          ],

          [
            "Infrastructure For T&P",
            "https://bitdurg.ac.in/placement-infrastructure",
            { key: 4 },
          ],
        ],
        key: 3,
      },
      {
        heading: "International Relations Office",
        links: [["About IR Office", "https://bitdurg.ac.in/ncut", { key: 1 }]],
        key: 4,
      },
      {
        heading: "Esteemed Recruiters",
        links: [
          ["Recruiters", "https://bitdurg.ac.in/our-recruiter", { key: 1 }],

          [
            "Recruiters Feedback",
            "https://bitdurg.ac.in/recruiter-feedback",
            { key: 2 },
          ],
        ],
        key: 5,
      },
      {
        heading: "Entrepreneurship Development Cell",
        links: [
          [
            "About ED Cell",
            "https://bitdurg.ac.in/entrepreneurship",
            { key: 1 },
          ],

          [
            "Programs Conducted",
            "https://bitdurg.ac.in/program-conducted",
            { key: 2 },
          ],
        ],
        key: 6,
      },
    ],
    key: 5,
  },
  {
    title: "CampusLife",
    content: [
      {
        heading: "Clubs @ BIT-Durg",
        links: [
          ["Astro Club", "https://bitdurg.ac.in/astro-club", { key: 1 }],

          ["Clicks Club", "https://bitdurg.ac.in/click-club", { key: 2 }],

          ["Techno Hub", "https://bitdurg.ac.in/yantra-club", { key: 3 }],

          [
            "Developer Student Community",
            "https://bitdurg.ac.in/hacker-club",
            { key: 4 },
          ],

          [
            "Professional Activity Club",
            "https://bitdurg.ac.in/activity-club",
            { key: 5 },
          ],

          ["Robotics Club", "https://bitdurg.ac.in/robotics-club", { key: 6 }],

          ["Vista Club", "https://bitdurg.ac.in/vista-club", { key: 7 }],

          ["Quizbizz Club", "https://bitdurg.ac.in/quizbizz-club", { key: 8 }],

          ["Startup Club", "https://bitdurg.ac.in/startup-club", { key: 9 }],

          // Empty Link - down
          ["Public Speaking Club", "#", { key: 10 }],

          ["Literary Club", "https://bitdurg.ac.in/literary_club", { key: 11 }],
        ],
        key: 1,
      },
      {
        heading: "Amenities",
        links: [
          ["Library", "https://bitdurg.ac.in/central-library", { key: 1 }],

          ["Wifi Campus", "https://bitdurg.ac.in/wifi-campus", { key: 2 }],

          ["Bank", "https://bitdurg.ac.in/bank", { key: 3 }],

          ["Medical Facility", "https://bitdurg.ac.in/dispensary", { key: 4 }],

          [
            "Shopping Complex",
            "https://bitdurg.ac.in/student-store",
            { key: 5 },
          ],

          ["Gymnasium", "https://bitdurg.ac.in/gym", { key: 6 }],
        ],
        key: 2,
      },
      {
        heading: "Highlights",
        links: [
          ["Techfest (OJAS)", "https://bitdurg.ac.in/techfest", { key: 1 }],

          ["Spicmacy", "https://bitdurg.ac.in/spicmacay", { key: 2 }],

          ["Hostels", "https://bitdurg.ac.in/hostels", { key: 3 }],

          ["Sports", "https://bitdurg.ac.in/sports", { key: 4 }],

          ["NCC", "https://bitdurg.ac.in/ncc", { key: 5 }],

          ["NSS", "https://bitdurg.ac.in/nss", { key: 6 }],

          // empty link
          ["Auditorium", "#", { key: 7 }],
        ],
        key: 3,
      },
    ],
    key: 6,
  },
  {
    title: "Connect",
    content: [
      {
        heading: "Whats's Happening",
        links: [
          ["OJAS", "https://bitdurg.ac.in/techfest", { key: 1 }],

          ["BITCON", "https://bitdurg.ac.in/bitcon/", { key: 2 }],

          ["Media Coverage"],
          "https://bitdurg.ac.in/all-media-coverage-list",
          { key: 3 },
        ],

        key: 1,
      },
      {
        heading: "Event Gallery",
        links: [
          ["Image Gallery", "https://bitdurg.ac.in/album", { key: 1 }],

          ["Video Gallery"],
          "https://bitdurg.ac.in/video-gallery",
          { key: 2 },
        ],

        key: 2,
      },
      {
        heading: "Alumni",
        links: [
          ["Alumni Connect", "https://alumni.bitdurg.ac.in/", { key: 1 }],

          [
            "Success Stories",
            "https://bitdurg.ac.in/success-story",
            { key: 2 },
          ],

          ["Testimonial", "https://bitdurg.ac.in/testimonials", { key: 3 }],
        ],

        key: 3,
      },
      {
        heading: "Download",
        links: [
          ["Brochure", "#", { key: 1 }],

          ["Newsletter", "https://bitdurg.ac.in/news-letter", { key: 2 }],

          [
            "Magazine",
            "https://bitdurg.ac.in/downloads/annual-magazine.pdf",
            { key: 3 },
          ],
        ],

        key: 4,
      },
    ],
    key: 7,
  },
  {
    title: "Blogs",
    content: [
      {
        heading: "Explore BIT",
        links: [
          [
            "Blogs At BIT",
            "https://bitdurg.ac.in/best-colleges-in-india",
            { key: 1 },
          ],
        ],
        key: 1,
      },
    ],
    key: 8,
  },
];


const SearchItems = [
  {
    heading: "All of BIT.in",
    img: global_icon,
    alt: 'Global Icon',
    selected: true,
    key: 1,
  },
  {
    heading: "People",
    img: global_icon,
    alt : 'People Icon',
    selected: false,
    key: 2,
  },
  {
    heading: "News",
    img: news_icon,
    alt: 'News Icon',
    selected: false,
    key: 3,
  },
];

const news = [
  {
    heading: "Solar Energy workshop 2022",
    description: "BIT is conducting Solar Energy workshop for three days.",
    date: "01",
    month: "APR",
    id: 1,
    imgSrc: 'https://source.unsplash.com/random/cak',
  },
  {
    heading: "Smart India Hackathon Project 2022",
    description: "Smart India Hackathon is here in our BIT Read About it.",
    date: "02",
    month: "MAR",
    id: 2,
    imgSrc: 'https://source.unsplash.com/random/ca',
  },
  {
    heading: "BIT honors RDC Cadet",
    description: "BIT will honors our RDC Cadet in close auditorium.",
    date: "03",
    month: "APR",
    id: 3,
    imgSrc: 'https://source.unsplash.com/random/cakfd',
  },
  {
    heading: "ATAL FDP @ Department of ETC",
    description: "Department of ETC are having ATAL FDP  ",
    date: "04",
    month: "JUN",
    id: 4,
    imgSrc: 'https://source.unsplash.com/random/cak',
  },
  {
    heading: "Speech Competition",
    description:
      "Poet's and Author's of BIT it's time to showcase your talent.",
    date: "05",
    month: "JAN",
    id: 5,
    imgSrc: 'https://source.unsplash.com/random/cadk',
  },
  {
    heading: "FDP on Green Technology",
    description: "BIT is taking steps toward green Energy",
    date: "06",
    month: "DEC",
    id: 6,
    imgSrc: 'https://source.unsplash.com/random/cadfk',
  },
  {
    heading: "Solar Energy workshop 2022",
    description: "BIT is conducting Solar Energy workshop for three days.",
    date: "07",
    month: "APR",
    id: 7,
    imgSrc: 'https://source.unsplash.com/random/cak',
  },
  {
    heading: "Smart India Hackathon Project 2022",
    description: "Smart India Hackathon is here in our BIT Read About it.",
    date: "08",
    month: "MAR",
    id: 8,
    imgSrc: 'https://source.unsplash.com/random/cak',
  },
  {
    heading: "BIT honors RDC Cadet",
    description: "BIT will honors our RDC Cadet in close auditorium.",
    date: "09",
    month: "APR",
    id: 9,
    imgSrc: 'https://source.unsplash.com/random/cak',
  },
];
const events = [
  {
    heading: "Sor Engy workho 2022",
    description: "BIT is conducting Solar Energy workshop for three days.",
    date: "01",
    month: "APR",
    id: 1,
    imgSrc: 'https://source.unsplash.com/random/cakdfg',
  },
  {
    heading: "SmartIndia Hacathn Pojct 2022",
    description: "Smart India Hackathon is here in our BIT Read About it.",
    date: "02",
    month: "MAR",
    imgSrc: 'https://source.unsplash.com/random/dff',
    id: 2,
  },
  {
    heading: "BITonors RC adet",
    description: "BIT will honors our RDC Cadet in close auditorium.",
    date: "03",
    month: "APR",
    imgSrc: 'https://source.unsplash.com/random/cakdfdfg',
    id: 3,
  },
  {
    heading: "ATL FDP @ artent of ETC",
    description: "Department of ETC are having ATAL FDP  ",
    date: "04",
    month: "JUN",
    imgSrc: 'https://source.unsplash.com/random/cakfdfdfdfg',
    id: 4,
  },
  {
    heading: "Speech Competition",
    description:
      "Poet's and Author's of BIT it's time to showcase your talent.",
    date: "05",
    month: "JAN",
    imgSrc: 'https://source.unsplash.com/random/cakdfdfdfg',
    id: 5,
  },
  {
    heading: "FDP on Green Technology",
    description: "BIT is taking steps toward green Energy",
    date: "06",
    month: "DEC",
    imgSrc: 'https://source.unsplash.com/random/cakddfsfdfg',
    id: 6,
  },
  {
    heading: "Solar Energy workshop 2022",
    description: "BIT is conducting Solar Energy workshop for three days.",
    date: "07",
    month: "APR",
    imgSrc: 'https://source.unsplash.com/random/cakrgdfdfg',
    id: 7,
  },
  {
    heading: "Smart India Hackathon Project 2022",
    description: "Smart India Hackathon is here in our BIT Read About it.",
    date: "08",
    month: "MAR",
    imgSrc: 'https://source.unsplash.com/random/cakdfdfg',
    id: 8,
  },
  {
    heading: "BIT honors RDC Cadet",
    description: "BIT will honors our RDC Cadet in close auditorium.",
    date: "09",
    month: "APR",
    id: 9,
  },
];

const footerLinks = [
  {
    heading: "ADDRESS",
    links: [
      "Institute Code: 01",
      `Bhilai House, Durg, Chhattishgarh - 491001`,
      "0788-2359297",
      "bit@bitdurg.ac.in",
    ],
  },
  {
    heading: "QUICK LINKS",
    links: [
      "Online Fee Payment",
      "Sitemap",
      "Uco Bank ",
      "Gymnasium",
      "E-Book",
      "Facilities",
    ],
  },
  {
    heading: "Downloads",
    links: [
      "Backlog Exam Form",
      "Transfer & Provisional,<br/>Certificate Form",
      "Revaluation Form",
      "Calendar",
      "Prospectus",
      "Magazine",
    ],
  },
  {
    heading: "IMPORTANT LINKS",
    links: [
      "CSVTU Calendar",
      "BIT Alumni",
      "AICTE",
      "University Grants<br/>Commission",
      "DTE Raipur",
    ],
  },
];

const LearnAboutBit = [
  {
    id: 1,
    link: "https://bitdurg.ac.in/downloads/prospectus2021.pdf",
    heading: "1st Year Student Information",
    img: "https://source.unsplash.com/random/cake",
  },
  {
    id: 2,
    link: "https://bitdurg.ac.in/anti-ragging",
    heading: "Anti Ragging Cell",
    img: "https://source.unsplash.com/random/kiwi",
  },
  {
    id: 3,
    link: "https://bitdurg.ac.in/women-security-cell",
    heading: "Women Security Cell",
    img: "https://source.unsplash.com/random/cake1",
  },
  {
    id: 4,
    link: "https://bitdurg.ac.in/home#",
    heading: "Parent Zone",
    img: "https://source.unsplash.com/random/cake3",
  },
  {
    id: 5,
    link: "http://bitdurg.ac.in/bit_durg/grievance/Login/index/Student",
    heading: "Grievance Redressal",
    img: "https://source.unsplash.com/random/cake4",
  },
  {
    id: 6,
    link: "https://bitdurg.ac.in/home#",
    heading: "Faculty Corner",
    img: "https://source.unsplash.com/random/cak",
  },
];
const AcademicOffering = [
  {
    id: 1,
    link: "https://bitdurg.ac.in/department/mechanical-engineering ",
    heading: "Mechanical Engineering",
    img: "https://source.unsplash.com/random/cdake",
  },
  {
    id: 2,
    link: "https://bitdurg.ac.in/department/civil-engineering",
    heading: "Civil Engineering",
    img: "https://source.unsplash.com/random/cake65",
  },
  {
    id: 3,
    link: "https://bitdurg.ac.in/department/computer-science-and-engineering",
    heading: "Computer Science And Engineering",
    img: "https://source.unsplash.com/random/cake454",
  },
  {
    id: 4,
    link: "https://bitdurg.ac.in/department/information-technology",
    heading: "Information Technology",
    img: "https://source.unsplash.com/random/cake454",
  },
  {
    id: 5,
    link: "https://bitdurg.ac.in/department/electrical-engineering",
    heading: "Electrical Engineering",
    img: "https://source.unsplash.com/random/cake",
  },
  {
    id: 6,
    link: "https://bitdurg.ac.in/department/electrical-and-electronics-engineering",
    heading: "Electrical & Electronics Engineering",
    img: "https://source.unsplash.com/random/cakedfs",
  },
  {
    id: 7,
    link: "https://bitdurg.ac.in/department/applied-chemistry",
    heading: "Applied Chemistry",
    img: "https://source.unsplash.com/random/cakedffgs",
  },
  {
    id: 8,
    link: "https://bitdurg.ac.in/department/applied-mathematics",
    heading: "Applied Mathematics",
    img: "https://source.unsplash.com/random/cgfakedfs",
  },
  {
    id: 9,
    link: "https://bitdurg.ac.in/department/applied-physics",
    heading: "Applied Physics",
    img: "https://source.unsplash.com/random/cfdgakedfs",
  },
  {
    id: 10,
    link: "https://bitdurg.ac.in/department/humanities",
    heading: "Humanities",
    img: "https://source.unsplash.com/random/cfdgasdkedfs",
  },
];
const CampusCommunity = [

  {
    id: 1,
    link: "https://bitdurg.ac.in/astro-club",
    heading: "Astro Club",
    img: "https://source.unsplash.com/random/cdakdfe",
  },
  {
    id: 2,
    link: "https://bitdurg.ac.in/click-club",
    heading: "Clicks Club",
    img: "https://source.unsplash.com/random/cdafgdkdfe",
  },
  {
    id: 3,
    link: "https://bitdurg.ac.in/yantra-club",
    heading: "Techno Hub",
    img: "https://source.unsplash.com/random/cdagdkdfe",
  },
  {
    id: 4,
    link: "https://bitdurg.ac.in/hacker-club",
    heading: "Developer Student Community",
    img: "https://source.unsplash.com/random/cdargfekdfe",
  },
  {
    id: 5,
    link: "https://bitdurg.ac.in/activity-club",
    heading: "Professional Activity Club",
    img: "https://source.unsplash.com/random/cdassdfrgkdfe",
  },
  {
    id: 6,
    link: "https://bitdurg.ac.in/robotics-club",
    heading: "Robotics Club",
    img: "https://source.unsplash.com/random/csddargkdfe",
  },
  {
    id: 7,
    link: "https://bitdurg.ac.in/vista-club",
    heading: "Vista Club",
    img: "https://source.unsplash.com/random/cdargkdjfdfe",
  },
  {
    id: 8,
    link: "https://bitdurg.ac.in/quizbizz-club",
    heading: "Quizbizz Club",
    img: "https://source.unsplash.com/random/cddargkdfdfe",
  },
  {
    id: 9,
    link: "https://bitdurg.ac.in/startup-club",
    heading: "Startup Club",
    img: "https://source.unsplash.com/random/cdarghkdfdfe",
  },
  {
    id: 10,
    link: "#",
    heading: "Public Speaking Club",
    img: "https://source.unsplash.com/random/cdagfrgkdfdfe",
  },
  {
    id: 11,
    link: "https://bitdurg.ac.in/literary_club",
    heading: "Literary Club",
    img: "https://source.unsplash.com/random/cdafgrgkdfdfe",
  },
];

const color = {
  bitLightBlue: "#7EB2DD",
  bitBlue: "#062242",
  bitRed: "#800000",
  bitWhite: "#ffffff",
  bitCreamLite: "rgba(231, 215, 193, 0.25)",
  bitCream: '#E7D7C1',

};
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "",
  paragraph: "",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",
  flexEnd: "flex justify-end items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export default styles;
export {
  color,
  news,
  events,
  footerLinks,
  LearnAboutBit,
  NavbarItems,
  SearchItems,
  AcademicOffering,
  CampusCommunity,
};
