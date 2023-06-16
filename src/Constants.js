import { img1 } from "./assets/asset";

const About = [
  {
    heading: "Glance At BIT-Durg",
    links: [
      "About",
      "Mission",
      "Quality Policy",
      "Visionaries",
      "Principal",
      "Vice Principal",
      "Mandatory Disclosures",
      "NAAC-NBA Status",
      "Committees (2022-2024)",
    ],
    key: 1,
  },
  {
    heading: "Administration",
    links: ["Audit Report", "Governance", "Governance Member"],
    key: 2,
  },
  {
    heading: "Collaboration",
    links: [
      "MOU & Tie-Ups",
      "Professional Membership",
      "ERASMUS + Staff & Student Mobility",
    ],
    key: 3,
  },
  {
    heading: "Care @ BIT-Durg",
    links: ["Anti Ragging", "Women Security Cell", "Grievance Redressal"],
    key: 4,
  },
  {
    heading: "Another Campus",
    links: ["BIT Raipur"],
    key: 5,
  },
  {
    heading: "More...",
    links: ["Awards & Achievement", "Panorama Magazine", "Newspaper"],
    key: 6,
  },
];
const Academics = [
  {
    heading: "Centres @ BIT-Durg",
    links: ["D Link", "NMEICT", "NPTEL", "Spoken Tutorial", "Texas Innovation"],
    key: 1,
  },
  {
    heading: "UG Programme",
    links: [
      "Bachelor Of Technology (B.Tech)",
      "Bachelor Of Vocational (B.Voc.)",
    ],
    key: 2,
  },
  {
    heading: "PG Programme",
    links: [
      "Master Of Technology (M.Tech)",
      "Master Of Computer Applications (MCA)",
      "Master Of Business Administration (MBA)",
    ],
    key: 3,
  },
  {
    heading: "Doctoral Programme",
    links: ["Doctor Of Philosophy (PhD)"],
    key: 4,
  },
  {
    heading: "Research @ BIT-Durg",
    links: [
      "Research Overview",
      "Patent & Copyright",
      "Research Policies & Guidelines",
      "Sponsored Research",
      "Annual Conference (BITCON)",
      "ISC-2019",
      "AICTE ATAL EDP",
      "International Conference",
    ],
    key: 5,
  },
  {
    heading: "Achievements",
    links: ["Faculty Achievements", "Student Achievements"],
    key: 6,
  },
  {
    heading: "More..",
    links: [
      "Academic Calender",
      "Academic Regulation",
      "Exam Manual",
      "Syllabus (CSVTU)",
      "Syllabus (BIT)",
    ],
    key: 7,
  },
];
const Admission = [
  {
    heading: "Get Started",
    links: [
      "Admission Procedure",
      "Reservation Policy",
      "Tuition Fees Waiver Scheme",
      "Scholarship",
      "Fees Structure (2022-23)",
      "Fees Structure (2021-22)",
    ],
    key: 1,
  },
  {
    heading: "Regular Course",
    links: ["B.Tech", "M.Tech", "MCA", "MBA", "Ph.D", "B.Voc"],
    key: 2,
  },
  {
    heading: "Lateral Entry Courses",
    links: ["B.Tech Lateral Entry"],
    key: 3,
  },
];
const Department = [
  {
    heading: "First Year",
    links: ["B.Tech 1st Year"],
    key: 1,
  },
  {
    heading: "Engineering",
    links: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Computer Science And Engineering",
      "Information Technology",
      "Electrical Engineering",
      "Electrical & Electronics Engineering",
      "Electronic & Telecommunication Engineering",
    ],
    key: 2,
  },
  {
    heading: "Sciences",
    links: [
      "Applied Chemistry",
      "Applied Mathematics",
      "Applied Physics",
      "Humanities",
    ],
    key: 3,
  },
  {
    heading: "Management",
    links: ["Master Of Business Administration"],
    key: 4,
  },
  {
    heading: "Computer Application",
    links: ["Master Of Computer Applications"],
    key: 5,
  },
];
const Placement = [
  {
    heading: "Overview",
    links: [
      "About T&P",
      "Placement Team",
      "Placement Gallery",
      "Contact T&P Cell",
    ],
    key: 1,
  },
  {
    heading: "Udaan Incubation Centre",
    links: ["About BrainTech"],
    key: 2,
  },
  {
    heading: "For Companies",
    links: [
      "Why Recruit BITians",
      "Placement Procedure",
      "Placement Statistics",
      "Infrastructure For T&P",
    ],
    key: 3,
  },
  {
    heading: "International Relations Office",
    links: ["About IR Office"],
    key: 4,
  },
  {
    heading: "Esteemed Recruiters",
    links: ["Recruiters", "Recruiters Feedback"],
    key: 5,
  },
  {
    heading: "Entrepreneurship Development Cell",
    links: ["About ED Cell", "Programs Conducted"],
    key: 6,
  },
];
const CampusLife = [
  {
    heading: "Clubs @ BIT-Durg",
    links: [
      "Astro Club",
      "Clicks Club",
      "Techno Hub",
      "Developer Student Community",
      "Professional Activity Club",
      "Innovation Club",
      "Vista Club",
      "Quizbizz Club",
      "Startup Club",
      "Public Speaking Club",
      "Literature Club",
    ],
    key: 1,
  },
  {
    heading: "Amenities",
    links: [
      "Library",
      "Wifi Campus",
      "Bank",
      "Medical Facility",
      "Shopping Complex",
      "Gymnasium",
    ],
    key: 2,
  },
  {
    heading: "Highlights",
    links: [
      "Techfest (OJAS)",
      "Spicmacy",
      "Hostels",
      "Sports",
      "NCC",
      "NSS",
      "Auditorium",
    ],
    key: 3,
  },
];
const Connect = [
  {
    heading: "Whats's Happening",
    links: ["OJAS", "BITCON", "Media Coverage"],
    key: 1,
  },
  {
    heading: "Event Gallery",
    links: ["Image Gallery", "Video Gallery"],
    key: 2,
  },
  {
    heading: "Alumni",
    links: ["Alumni Connect", "Success Stories", "Testimonial"],
    key: 3,
  },
  {
    heading: "Download",
    links: ["Brochure", "Newsletter", "Magazine"],
    key: 4,
  },
];
const VarNavbarItems = [
  About,
  Academics,
  Admission,
  Department,
  Placement,
  CampusLife,
  Connect,
];
// const NavbarItems = ['About', 'Academics', 'Admission', 'Department', 'Placement', 'CampusLife', 'Connect']
const NavbarItems = [
  {
    title: "About",
    content: [
      {
        heading: "Glance At BIT-Durg",
        links: [
          ["About", "https://bitdurg.ac.in/"],
          ["Mission", "https://bitdurg.ac.in/"],
          ["Quality Policy", "https://bitdurg.ac.in/"],
          ["Visionaries", "https://bitdurg.ac.in/"],
          ["Principal", "https://bitdurg.ac.in/"],
          ["Vice Principal", "https://bitdurg.ac.in/"],
          ["Mandatory Disclosures", "https://bitdurg.ac.in/"],
          ["NAAC-NBA Status", "https://bitdurg.ac.in/"],
          ["Committees (2022-2024)", "https://bitdurg.ac.in/"],
        ],
        key: 1,
      },
      {
        heading: "Administration",
        links: [["Audit Report"], ["Governance"], ["Governance Member"]],
        key: 2,
      },
      {
        heading: "Collaboration",
        links: [
          ["MOU & Tie-Ups"],
          ["Professional Membership"],
          ["ERASMUS + Staff & Student Mobility"],
        ],
        key: 3,
      },
      {
        heading: "Care @ BIT-Durg",
        links: [
          ["Anti Ragging"],
          ["Women Security Cell"],
          ["Grievance Redressal"],
        ],
        key: 4,
      },
      {
        heading: "Another Campus",
        links: [["BIT Raipur", "https://bitdurg.ac.in/"]],
        key: 5,
      },
      {
        heading: "More...",
        links: [["Awards & Achievement"], ["Panorama Magazine"], ["Newspaper"]],
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
          "D Link",
          "NMEICT",
          "NPTEL",
          "Spoken Tutorial",
          "Texas Innovation",
        ],
        key: 1,
      },
      {
        heading: "UG Programme",
        links: [
          "Bachelor Of Technology (B.Tech)",
          "Bachelor Of Vocational (B.Voc.)",
        ],
        key: 2,
      },
      {
        heading: "PG Programme",
        links: [
          "Master Of Technology (M.Tech)",
          "Master Of Computer Applications (MCA)",
          "Master Of Business Administration (MBA)",
        ],
        key: 3,
      },
      {
        heading: "Doctoral Programme",
        links: ["Doctor Of Philosophy (PhD)"],
        key: 4,
      },
      {
        heading: "Research @ BIT-Durg",
        links: [
          "Research Overview",
          "Patent & Copyright",
          "Research Policies & Guidelines",
          "Sponsored Research",
          "Annual Conference (BITCON)",
          "ISC-2019",
          "AICTE ATAL EDP",
          "International Conference",
        ],
        key: 5,
      },
      {
        heading: "Achievements",
        links: ["Faculty Achievements", "Student Achievements"],
        key: 6,
      },
      {
        heading: "More..",
        links: [
          "Academic Calender",
          "Academic Regulation",
          "Exam Manual",
          "Syllabus (CSVTU)",
          "Syllabus (BIT)",
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
          ["Admission Procedure", "https://bitdurg.ac.in/"],
          ["Reservation Policy", "https://bitdurg.ac.in/"],
          ["Tuition Fees Waiver Scheme", "https://bitdurg.ac.in/"],
          ["Scholarship", "https://bitdurg.ac.in/"],
          ["Fees Structure (2022-23)", "https://bitdurg.ac.in/"],
          ["Fees Structure (2021-22)", "https://bitdurg.ac.in/"],
        ],
        key: 1,
      },
      {
        heading: "Regular Course",
        links: [
          ["B.Tech", "https://bitdurg.ac.in/"],
          ["M.Tech", "https://bitdurg.ac.in/"],
          ["MCA", "https://bitdurg.ac.in/"],
          ["MBA", "https://bitdurg.ac.in/"],
          ["Ph.D", "https://bitdurg.ac.in/"],
          ["B.Voc", "https://bitdurg.ac.in/"],
        ],
        key: 2,
      },
      {
        heading: "Lateral Entry Courses",
        links: [["B.Tech Lateral Entry", "https://bitdurg.ac.in/"]],
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
        links: ["B.Tech 1st Year"],
        key: 1,
      },
      {
        heading: "Engineering",
        links: [
          "Mechanical Engineering",
          "Civil Engineering",
          "Computer Science And Engineering",
          "Information Technology",
          "Electrical Engineering",
          "Electrical & Electronics Engineering",
          "Electronic & Telecommunication Engineering",
        ],
        key: 2,
      },
      {
        heading: "Sciences",
        links: [
          "Applied Chemistry",
          "Applied Mathematics",
          "Applied Physics",
          "Humanities",
        ],
        key: 3,
      },
      {
        heading: "Management",
        links: ["Master Of Business Administration"],
        key: 4,
      },
      {
        heading: "Computer Application",
        links: ["Master Of Computer Applications"],
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
          "About T&P",
          "Placement Team",
          "Placement Gallery",
          "Contact T&P Cell",
        ],
        key: 1,
      },
      {
        heading: "Udaan Incubation Centre",
        links: ["About BrainTech"],
        key: 2,
      },
      {
        heading: "For Companies",
        links: [
          "Why Recruit BITians",
          "Placement Procedure",
          "Placement Statistics",
          "Infrastructure For T&P",
        ],
        key: 3,
      },
      {
        heading: "International Relations Office",
        links: ["About IR Office"],
        key: 4,
      },
      {
        heading: "Esteemed Recruiters",
        links: ["Recruiters", "Recruiters Feedback"],
        key: 5,
      },
      {
        heading: "Entrepreneurship Development Cell",
        links: ["About ED Cell", "Programs Conducted"],
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
          "Astro Club",
          "Clicks Club",
          "Techno Hub",
          "Developer Student Community",
          "Professional Activity Club",
          "Innovation Club",
          "Vista Club",
          "Quizbizz Club",
          "Startup Club",
          "Public Speaking Club",
          "Literature Club",
        ],
        key: 1,
      },
      {
        heading: "Amenities",
        links: [
          "Library",
          "Wifi Campus",
          "Bank",
          "Medical Facility",
          "Shopping Complex",
          "Gymnasium",
        ],
        key: 2,
      },
      {
        heading: "Highlights",
        links: [
          "Techfest (OJAS)",
          "Spicmacy",
          "Hostels",
          "Sports",
          "NCC",
          "NSS",
          "Auditorium",
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
        links: ["OJAS", "BITCON", "Media Coverage"],
        key: 1,
      },
      {
        heading: "Event Gallery",
        links: ["Image Gallery", "Video Gallery"],
        key: 2,
      },
      {
        heading: "Alumni",
        links: ["Alumni Connect", "Success Stories", "Testimonial"],
        key: 3,
      },
      {
        heading: "Download",
        links: ["Brochure", "Newsletter", "Magazine"],
        key: 4,
      },
    ],
    key: 7,
  },
];

const news = [
  {
    heading: "Solar Energy workshop 2022",
    description: "BIT is conducting Solar Energy workshop for three days.",
    date: "08",
    month: "APR",
    id: 1,
    imgSrc: { img1 },
  },
  {
    heading: "Smart India Hackathon Project 2022",
    description: "Smart India Hackathon is here in our BIT Read About it.",
    date: "10",
    month: "MAR",
    id: 2,
  },
  {
    heading: "BIT honors RDC Cadet",
    description: "BIT will honors our RDC Cadet in close auditorium.",
    date: "07",
    month: "APR",
    id: 3,
  },
  {
    heading: "ATAL FDP @ Department of ETC",
    description: "Department of ETC are having ATAL FDP  ",
    date: "06",
    month: "JUN",
    id: "4",
  },
  {
    heading: "Speech Competition",
    description:
      "Poet's and Author's of BIT it's time to showcase your talent.",
    date: "05",
    month: "JAN",
    id: "5",
  },
  {
    heading: "FDP on Green Technology",
    description: "BIT is taking steps toward green Energy",
    date: "13",
    month: "DEC",
    id: "6",
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
    link: "",
    heading: "1st Year Student Information",
    img: "",
  },
  {
    id: 2,
    link: "",
    heading: "Anti Ragging Cell",
    img: "",
  },
  {
    id: 3,
    link: "",
    heading: "Women Security Cell",
    img: "",
  },
  {
    id: 4,
    link: "",
    heading: "Parent Zone",
    img: "",
  },
  {
    id: 5,
    link: "",
    heading: "Grievance Redressal",
    img: "",
  },
  {
    id: 6,
    link: "",
    heading: "Faculty Corner",
    img: "",
  },
];

const color = {
  bitLightBlue: "#7EB2DD",
  bitBlue: "#062242",
  bitRed: "#800000",
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
  footerLinks,
  LearnAboutBit,
  Academics,
  About,
  Admission,
  Department,
  Placement,
  CampusLife,
  Connect,
  NavbarItems,
  VarNavbarItems,
};
