import heroI from "../assets/images/hero-letters/i.png";
import heroD from "../assets/images/hero-letters/d.png";
import heroE from "../assets/images/hero-letters/e.png";
import heroA from "../assets/images/hero-letters/a.png";
import heroL from "../assets/images/hero-letters/l.png";
import heroS from "../assets/images/hero-letters/s.png";

/**
 * Build a lookup map of every asset under src/assets/images at build
 * time. Vite scans the pattern, includes each matching file in the
 * bundle with a hashed filename, and returns a { fullPath: url } map.
 *
 * Why not `new URL('../assets/images/${path}', import.meta.url)`?
 * Because Vite only transforms `new URL()` when the path is a plain
 * string literal — template literals with variables fall through
 * unhandled, so the assets never get bundled and the URLs at runtime
 * point to files that don't exist in dist/.
 *
 * Add extensions to the pattern below if you introduce a new file
 * type (e.g. .avif, .webm). Vite requires the extensions to be
 * enumerated inside the glob — bare `**` won't work.
 */
const assetModules = import.meta.glob(
  "/src/assets/images/**/*.{jpg,jpeg,JPG,JPEG,png,PNG,gif,webp,svg,mp4,webm,mov,ogg,pdf,docx,pptx,xlsx}",
  { eager: true, query: "?url", import: "default" },
);

/* Strip the /src/assets/images/ prefix so keys match the relative
   paths used throughout the pillars array below. */
const assetMap = {};
for (const fullPath in assetModules) {
  const relativePath = fullPath.replace("/src/assets/images/", "");
  assetMap[relativePath] = assetModules[fullPath];
}

function getAsset(relativePath) {
  const url = assetMap[relativePath];
  if (!url && typeof console !== "undefined") {
    console.warn("[ideals.js] Missing asset:", relativePath);
  }
  return url;
}

export const heroCaptionTop = "86.1%";

export const pillars = [
  {
    slug: "internationalism",
    letter: "I",
    title: "Internationalism",
    image: getAsset("letters/internationalism.svg"),
    heroImage: heroI,
    heroPosition: { left: "2.4%", top: "2%", width: "14.5%", height: "37.9%" },
    heroCaptionLeft: "11.4%",
    accentVar: "--pillar-internationalism",
    summary:
      "Fostering a global perspective, cross-cultural understanding, and appreciation for diversity among students from over 50 nations.",
    showcaseTitle: "Internationalism",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: false,
        media: [
          {
            src: getAsset(
              "Internationalism/Alumni-matters/Branson-Kyalo,-Tyler-Belyon,-Beverly-Sikueya,-Samantha-Muthui,-Tephila-Chege,-Angela-Njagi.jpg",
            ),
            caption:
              "Branson Kyalo, Tyler Belyon, Beverly Sikueya, Samantha Muthui, Tephila Chege, Angela Njagi",
          },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/Rita-Kihuria,-Jenna-Ndungi,-Megany-Sikueya,-Chemtai-Sittoni,-Lia-Ounda,-Lisa-Okello.jpg",
            ),
            caption:
              "Rita Kihuria, Jenna Ndungi, Megany Sikueya, Chemtai Sittoni, Lia Ounda, Lisa Okello",
          },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/Angela-Mpuga,-Leila-Mandala,-Nyakara-Morara,-Christopher-Waititu.jpg",
            ),
            caption:
              "Angela Mpuga, Leila Mandala, Nyakara Morara, Christopher Waititu",
          },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/Netwon-Mpuga,-Lydia-Kiagi,-Madeleine-Kipngetich,-Hera-Odeny.jpg",
            ),
            caption:
              "Netwon Mpuga, Lydia Kiagi, Madeleine Kipngetich, Hera Odeny",
          },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/University-Locations-2026.png",
            ),
            caption: "University Locations 2026",
          },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/Annual-Brookhouse-Alumni-Gatherings.jpg",
            ),
            caption: "Annual Brookhouse Alumni Gatherings",
          },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/University-Locations-2025.png",
            ),
            caption: "University Locations 2025",
          },
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: false,
        media: [
          {
            src: getAsset(
              "Internationalism/Parents/Brookhouse-Parent-Provides-Kuwaiti-Workshop.png",
            ),
            caption: "Brookhouse Parent Provides Kuwaiti Workshop",
          },
          {
            src: getAsset(
              "Internationalism/Parents/Brookhouse-Parents-host-1200-International-Students-2024.mp4",
            ),
            caption: "Brookhouse Parents host 1200 International Students 2024",
          },
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: false,
        media: [],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: false,
        media: [
          {
            src: getAsset(
              "Internationalism/Students/Celebrating-International-Day.mp4",
            ),
            caption: "Celebrating International Day",
          },
          {
            src: getAsset(
              "Internationalism/Students/Presentation-by-Louisa.jpg",
            ),
            caption: "Presentation by Louisa",
          },
          {
            src: getAsset(
              "Internationalism/Students/Beijing-Robot-Challenge-2026.png",
            ),
            caption: "Beijing Robot Challenge 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/Chinese-Language-and-Culture-Recognition.png",
            ),
            caption: "Chinese Language and Culture Recognition",
          },
          {
            src: getAsset(
              "Internationalism/Students/International-Exchange-Student-Refletction.png",
            ),
            caption: "International Exchange Student Refletction",
          },
          {
            src: getAsset(
              "Internationalism/Students/Brookhouse-Students-Go-On-Exchange,-2026.png",
            ),
            caption: "Brookhouse Students Go On Exchange, 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/Brookhouse-Hosts-1200-Students-From-Over-50-Countries-for-Round-Square-International-Conference,-Oct-2023.mp4",
            ),
            caption:
              "Brookhouse Hosts 1200 Students From Over 50 Countries for Round Square International Conference, Oct 2023",
          },
          {
            src: getAsset(
              "Internationalism/Students/Robotics-Challenge,-Beijing,-July-2026.jpeg",
            ),
            caption: "Robotics Challenge, Beijing, July 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/Student-Conference-in-South-Africa,-March-2026.png",
            ),
            caption: "Student Conference in South Africa, March 2026",
          },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: false,
        media: [
          {
            src: getAsset(
              "Internationalism/Staff-rsis/Round-Square-IDEALS.jpg",
            ),
            caption: "Round Square IDEALS",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/Minutes-of-Meeting-Extract,-Heads-of-Year-with-CMT,-Sep-2026.png",
            ),
            caption:
              "Minutes of Meeting Extract, Heads of Year with CMT, Sep 2026",
          },
          {
            src: getAsset("Internationalism/Staff-rsis/IMG_0768.jpeg"),
            caption: "IMG 0768",
          },
          {
            src: getAsset("Internationalism/Staff-rsis/IMG_1503.jpeg"),
            caption: "IMG 1503",
          },
        ],
      },
    ],
  },
  {
    slug: "democracy",
    letter: "D",
    title: "Democracy",
    image: getAsset("letters/democracy.svg"),
    heroImage: heroD,
    heroPosition: {
      left: "14.4%",
      top: "15%",
      width: "16.9%",
      height: "22.4%",
    },
    heroCaptionLeft: "30.1%",
    accentVar: "--pillar-democracy",
    summary:
      "Encouraging active participation, shared responsibility, and freedom of expression within the school governance and community.",
    showcaseTitle: "Democracy",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Democracy/Alumni/Graduating-Class-2026-Hats-Throw.jpg",
            ),
            caption: "Graduating Class 2026 Hats Throw",
          },
          {
            src: getAsset(
              "Democracy/Alumni/Graduating-Class-2026-Hood-Back.jpg",
            ),
            caption: "Graduating Class 2026 Hood Back",
          },
          {
            src: getAsset(
              "Democracy/Alumni/Graduating-Class-2026-Hood-Front.jpg",
            ),
            caption: "Graduating Class 2026 Hood Front",
          },
          {
            src: getAsset("Democracy/Alumni/Graduating-Class-2026.jpg"),
            caption: "Graduating Class 2026",
          },
          {
            src: getAsset("Democracy/Alumni/Alumni-gathering-Democracy.jpg"),
            caption: "Alumni gathering Democracy",
          },
          {
            src: getAsset(
              "Democracy/Alumni/BTEC-Enterprise-Talk-with-Alumni-Mwanahalima-1.jpg",
            ),
            caption: "BTEC Enterprise Talk with Alumni Mwanahalima 1",
          },
          {
            src: getAsset(
              "Democracy/Alumni/BTEC-Enterprise-Talk-with-Alumni-Mwanahalima-2.jpg",
            ),
            caption: "BTEC Enterprise Talk with Alumni Mwanahalima 2",
          },
          {
            src: getAsset(
              "Democracy/Alumni/David-Mulandi-Leaving-a-Legacy-Talk.mp4",
            ),
            caption: "David Mulandi Leaving a Legacy Talk",
          },
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Democracy/Parents/Brookhouse-Parent-Mrs-Bangura,-General-Secretary-of-UN,-Presents-at-Brookhouse-Graduation-Ceremony,-2026.jpg",
            ),
            caption:
              "Brookhouse Parent Mrs Bangura, General Secretary of UN, Presents at Brookhouse Graduation Ceremony, 2026",
          },
          {
            src: getAsset(
              "Democracy/Parents/BSPTA-AGM-Agenda-October-2025.png",
            ),
            caption: "BSPTA AGM Agenda October 2025",
          },
          {
            src: getAsset(
              "Democracy/Parents/BSPTA-AGM-Letter-October-2025.png",
            ),
            caption: "BSPTA AGM Letter October 2025",
          },
          {
            src: getAsset("Democracy/Parents/BSPTA-whatsapp-forum.png"),
            caption: "BSPTA whatsapp forum",
          },
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Democracy/Governance/Briefing-Notes-8th-September-2026.png",
            ),
            caption: "Briefing Notes 8th September 2026",
          },
          {
            src: getAsset(
              "Democracy/Governance/management-structure-2026-sept-karen-devolved-communication.png",
            ),
            caption:
              "management structure 2026 sept karen devolved communication",
          },
          {
            src: getAsset(
              "Democracy/Governance/management-structure-2026-sept-runda-devolved-communication.png",
            ),
            caption:
              "management structure 2026 sept runda devolved communication",
          },
          {
            src: getAsset(
              "Democracy/Governance/Rika-meeting-minutes-8-5-2026-Students-voice.png",
            ),
            caption: "Rika meeting minutes 8 5 2026 Students voice",
          },
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          { src: getAsset("Democracy/Students/Debate.mp4"), caption: "Debate" },
          {
            src: getAsset("Democracy/Students/RIKA-Reps-Term-1-2025.jpg"),
            caption: "RIKA Reps Term 1 2025",
          },
          {
            src: getAsset("Democracy/Students/Democratic-Rika-Reps.jpg"),
            caption: "Democratic Rika Reps",
          },
          {
            src: getAsset(
              "Democracy/Students/Kai-Vladimirou-Best-Speaker-award-ECAMUN-2026.jpg",
            ),
            caption: "Kai Vladimirou Best Speaker award ECAMUN 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/MUN-Training-Session-January-2026.jpg",
            ),
            caption: "MUN Training Session January 2026",
          },
          {
            src: getAsset("Democracy/Students/ECAMUN-February-2026.jpg"),
            caption: "ECAMUN February 2026",
          },
          {
            src: getAsset("Democracy/Students/MSMUN-February-2026.jpg"),
            caption: "MSMUN February 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/Brookhouse-Junior-Prep-students-prepare-and-present-a-'Show-and-Tell'-session-to-children-in-schools-from-5-different-continents,-November-2025.jpg",
            ),
            caption:
              "Brookhouse Junior Prep students prepare and present a 'Show and Tell' session to children in schools from 5 different continents, November 2025",
          },
          {
            src: getAsset(
              "Democracy/Students/Brookhouse-Hosts-the-Regional-World-Scholars-Round-April-2026.mp4",
            ),
            caption:
              "Brookhouse Hosts the Regional World Scholars Round April 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/World-Scholars-Cup-Semi-Finals-Prague-July-2026.jpg",
            ),
            caption: "World Scholars Cup Semi Finals Prague July 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/World-Scholars-Cup-Finals-Yale-University,-November-2025.jpg",
            ),
            caption: "World Scholars Cup Finals Yale University, November 2025",
          },
          {
            src: getAsset(
              "Democracy/Students/East-And-Central-Africa-Model-United-Nations-2026.jpg",
            ),
            caption: "East And Central Africa Model United Nations 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/Prefect-Application-Learner_s-voice.png",
            ),
            caption: "Prefect Application Learner s voice",
          },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Democracy/Staff/Minutes-of-Whole-School-Staff-Meeting-No.1-2026-pg1.png",
            ),
            caption: "Minutes of Whole School Staff Meeting No.1 2026 pg1",
          },
          {
            src: getAsset(
              "Democracy/Staff/Minutes-of-Whole-School-Staff-Meeting-No.1-2026-pg2.png",
            ),
            caption: "Minutes of Whole School Staff Meeting No.1 2026 pg2",
          },
          {
            src: getAsset(
              "Democracy/Staff/Staff-management-structure-2026-sept-admin.png",
            ),
            caption: "Staff management structure 2026 sept admin",
          },
        ],
      },
    ],
  },
  {
    slug: "environmentalism",
    letter: "E",
    title: "Environmentalism",
    image: getAsset("letters/environmentalism.svg"),
    heroImage: heroE,
    heroPosition: {
      left: "31.2%",
      top: "13%",
      width: "16.0%",
      height: "24.6%",
    },
    heroCaptionLeft: "48.1%",
    accentVar: "--pillar-environmentalism",
    summary:
      "Building a deep personal awareness of environmental sustainability and ecological responsibility.",
    showcaseTitle: "Environmentalism",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Environmentalism/Alumni/Richard-Turere-Lion-Lights.jpg",
            ),
            caption: "Richard Turere Lion Lights",
          },
          {
            src: getAsset("Environmentalism/Alumni/Dr-Sharon-Mulindi.jpg"),
            caption: "Dr Sharon Mulindi",
          },
          {
            src: getAsset("Environmentalism/Alumni/Michelle-Muturi.jpg"),
            caption: "Michelle Muturi",
          },
          {
            src: getAsset("Environmentalism/Alumni/Maureen-Some.jpg"),
            caption: "Maureen Some",
          },
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          {
            src: getAsset("Environmentalism/Parents/BSPTA-engagement.png"),
            caption: "BSPTA engagement",
          },
        ],
      },
      { slug: "governance", label: "Governance", placeholder: true, media: [] },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Environmentalism/Students/BRIQUETTES-MAKING-BY-YEAR-6-LEARNERS-pg1.png",
            ),
            caption: "BRIQUETTES MAKING BY YEAR 6 LEARNERS pg1",
          },
          {
            src: getAsset(
              "Environmentalism/Students/BRIQUETTES-MAKING-BY-YEAR-6-LEARNERS-pg2.png",
            ),
            caption: "BRIQUETTES MAKING BY YEAR 6 LEARNERS pg2",
          },
          {
            src: getAsset(
              "Environmentalism/Students/Brookhouse-Students-Fundraise-KES-600,000-for-Water-Conservancy-Project-'Hog Charge'-through-sponsorships,-an-Annual-Event-in-Term-2.jpg",
            ),
            caption:
              "Brookhouse Students Fundraise KES 600,000 for Water Conservancy Project 'Hog Charge' through sponsorships, an Annual Event in Term 2",
          },
          {
            src: getAsset(
              "Environmentalism/Students/Environment-through-Art.png",
            ),
            caption: "Environment through Art",
          },
          {
            src: getAsset(
              "Environmentalism/Students/Service-Learning-Activities-in-Prep,-Term-3-2025-26.png",
            ),
            caption: "Service Learning Activities in Prep, Term 3 2025 26",
          },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Environmentalism/Staff/Environment-activities-through-service-learning.png",
            ),
            caption: "Environment activities through service learning",
          },
          {
            src: getAsset(
              "Environmentalism/Staff/Rhino-Charge-and-Hog-Charge-2025.png",
            ),
            caption: "Rhino Charge and Hog Charge 2025",
          },
          {
            src: getAsset("Environmentalism/Staff/Staff-involvment.png"),
            caption: "Staff involvment",
          },
        ],
      },
    ],
  },
  {
    slug: "adventure",
    letter: "A",
    title: "Adventure",
    image: getAsset("letters/adventure.svg"),
    heroImage: heroA,
    heroPosition: {
      left: "47.6%",
      top: "15%",
      width: "16.6%",
      height: "21.9%",
    },
    heroCaptionLeft: "66.1%",
    accentVar: "--pillar-adventure",
    summary:
      "Challenging students physically and mentally through outdoor pursuits, expeditions, and experiential learning.",
    showcaseTitle: "Adventure",
    bubbles: [
      { slug: "alumni", label: "Alumni", placeholder: true, media: [] },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          {
            src: getAsset("Adventure/Parents/adventure.JPG"),
            caption: "adventure",
          },
          {
            src: getAsset("Adventure/Parents/IMG_2312.jpg"),
            caption: "IMG 2312",
          },
          {
            src: getAsset("Adventure/Parents/IMG_3578.jpeg"),
            caption: "IMG 3578",
          },
          {
            src: getAsset("Adventure/Parents/IMG_20231007.jpg"),
            caption: "IMG 20231007",
          },
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Adventure/Governance/Prep-Headteacher-Joins-Performance.JPG",
            ),
            caption: "Prep Headteacher Joins Performance",
          },
          {
            src: getAsset(
              "Adventure/Governance/Director-Visits-Service-Project,-Gifted-a-Goat!.jpg",
            ),
            caption: "Director Visits Service Project, Gifted a Goat!",
          },
          {
            src: getAsset(
              "Adventure/Governance/Deputy-Director-Leads-Gold-Fundraiser-for-Service-Projects.JPG",
            ),
            caption:
              "Deputy Director Leads Gold Fundraiser for Service Projects",
          },
          {
            src: getAsset("Adventure/Governance/Operations-Manager.JPG"),
            caption: "Operations Manager",
          },
          {
            src: getAsset(
              "Adventure/Governance/Prep-Headteacher-Climbs-Longonot-With-Year-4,-2023.jpg",
            ),
            caption: "Prep Headteacher Climbs Longonot With Year 4, 2023",
          },
          {
            src: getAsset(
              "Adventure/Governance/Prep-Headteacher-Visits-Elsamere,-2023.jpg",
            ),
            caption: "Prep Headteacher Visits Elsamere, 2023",
          },
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Adventure/Students/Secondary-students-perform -The-Master-of-The-Show,-Nov-2025.mp4",
            ),
            caption:
              "Secondary students perform The Master of The Show, Nov 2025",
          },
          {
            src: getAsset(
              "Adventure/Students/Brookhouse-student-Trinity-Kamugisha-presents-at-TEDx-in-November-2025.mp4",
            ),
            caption:
              "Brookhouse student Trinity Kamugisha presents at TEDx in November 2025",
          },
          {
            src: getAsset(
              "Adventure/Students/Middle-School-Performance-of-Percy-Jackson--The-Lightning-Thief,-April-2026.mp4",
            ),
            caption:
              "Middle School Performance of Percy Jackson The Lightning Thief, April 2026",
          },
          {
            src: getAsset(
              "Adventure/Students/PA-K-Gold-Mt.Kenya-February-2026.jpg",
            ),
            caption: "PA K Gold Mt.Kenya February 2026",
          },
          {
            src: getAsset(
              "Adventure/Students/PA-K-Silver-Sagana-Rapids-December-2025.jpg",
            ),
            caption: "PA K Silver Sagana Rapids December 2025",
          },
          {
            src: getAsset(
              "Adventure/Students/PA-K-Bronze-Ngong-Hills-June-2026.jpg",
            ),
            caption: "PA K Bronze Ngong Hills June 2026",
          },
          {
            src: getAsset("Adventure/Students/Year-4-Climb-Mt-Longonot.jpg"),
            caption: "Year 4 Climb Mt Longonot",
          },
          {
            src: getAsset("Adventure/Students/Year-8-Sign-Language.jpg"),
            caption: "Year 8 Sign Language",
          },
          {
            src: getAsset("Adventure/Students/Nativity-Play.jpg"),
            caption: "Nativity Play",
          },
          {
            src: getAsset("Adventure/Students/Ice-Skating-Year-1.jpg"),
            caption: "Ice Skating Year 1",
          },
          {
            src: getAsset("Adventure/Students/ELS-Kindi-Athletics.jpg"),
            caption: "ELS Kindi Athletics",
          },
          {
            src: getAsset("Adventure/Students/Prep-Sports-Poster.jpg"),
            caption: "Prep Sports Poster",
          },
          {
            src: getAsset("Adventure/Students/Secondary-Sports.jpg"),
            caption: "Secondary Sports",
          },
          {
            src: getAsset("Adventure/Students/Tea-Time-Concert.mp4"),
            caption: "Tea Time Concert",
          },
          { src: getAsset("Adventure/Students/17.jpg"), caption: "17" },
          { src: getAsset("Adventure/Students/20.jpg"), caption: "20" },
          { src: getAsset("Adventure/Students/13.jpg"), caption: "13" },
          { src: getAsset("Adventure/Students/21.jpg"), caption: "21" },
          { src: getAsset("Adventure/Students/19.jpg"), caption: "19" },
          { src: getAsset("Adventure/Students/22.jpg"), caption: "22" },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          { src: getAsset("Adventure/Staff/11.jpg"), caption: "11" },
          { src: getAsset("Adventure/Staff/12.jpg"), caption: "12" },
          { src: getAsset("Adventure/Staff/13.jpg"), caption: "13" },
          { src: getAsset("Adventure/Staff/14.jpg"), caption: "14" },
          { src: getAsset("Adventure/Staff/15.jpg"), caption: "15" },
          { src: getAsset("Adventure/Staff/16.jpg"), caption: "16" },
          { src: getAsset("Adventure/Staff/17.jpg"), caption: "17" },
        ],
      },
    ],
  },
  {
    slug: "leadership",
    letter: "L",
    title: "Leadership",
    image: getAsset("letters/leadership.svg"),
    heroImage: heroL,
    heroPosition: {
      left: "63.5%",
      top: "15%",
      width: "17.0%",
      height: "22.2%",
    },
    heroCaptionLeft: "80.7%",
    accentVar: "--pillar-leadership",
    summary:
      "Cultivating self-discipline, initiative, and collaborative skills to guide and serve others effectively.",
    showcaseTitle: "Leadership",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: true,
        media: [
          {
            src: getAsset("Leadership/Alumni/Shakinar-Mutulili.mp4"),
            caption: "Shakinar Mutulili",
          },
          {
            src: getAsset(
              "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-for-Jan-2026.png",
            ),
            caption: "Brookhouse Alumni Cocktail Invitation Card for Jan 2026",
          },
          {
            src: getAsset(
              "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-in-London-for-March-26.png",
            ),
            caption:
              "Brookhouse Alumni Cocktail Invitation Card in London for March 26",
          },
          {
            src: getAsset(
              "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-in-NYC-in-April-2026.png",
            ),
            caption:
              "Brookhouse Alumni Cocktail Invitation Card in NYC in April 2026",
          },
          {
            src: getAsset(
              "Leadership/Alumni/Evidence-for-CIS-Inspection-Leadership.png",
            ),
            caption: "Evidence for CIS Inspection Leadership",
          },
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Leadership/Parents/CIS-Leadership-Evidence-BPSTA-pg1.png",
            ),
            caption: "CIS Leadership Evidence BPSTA pg1",
          },
          {
            src: getAsset(
              "Leadership/Parents/CIS-Leadership-Evidence-BPSTA-pg2.png",
            ),
            caption: "CIS Leadership Evidence BPSTA pg2",
          },
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          {
            src: getAsset("Leadership/Governance/Responsibility-Map.png"),
            caption: "Responsibility Map",
          },
          {
            src: getAsset("Leadership/Governance/Policy-Groups-1_10.png"),
            caption: "Policy Groups 1 10",
          },
          {
            src: getAsset(
              "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg1.png",
            ),
            caption: "Board policies 2.1 2.6 The Board pg1",
          },
          {
            src: getAsset(
              "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg2.png",
            ),
            caption: "Board policies 2.1 2.6 The Board pg2",
          },
          {
            src: getAsset(
              "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg3.png",
            ),
            caption: "Board policies 2.1 2.6 The Board pg3",
          },
          {
            src: getAsset(
              "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg4.png",
            ),
            caption: "Board policies 2.1 2.6 The Board pg4",
          },
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          {
            src: getAsset("Leadership/Students/Brookhouse-House-System.jpg"),
            caption: "Brookhouse House System",
          },
          {
            src: getAsset("Leadership/Students/Student-Leader's-Assembly.mp4"),
            caption: "Student Leader's Assembly",
          },
          {
            src: getAsset(
              "Leadership/Students/Prep-Leaders-MCs-during-tea-time-concert.jpg",
            ),
            caption: "Prep Leaders MCs during tea time concert",
          },
          {
            src: getAsset("Leadership/Students/Prefects-(Whole-School).JPG"),
            caption: "Prefects (Whole School)",
          },
          {
            src: getAsset("Leadership/Students/Prep-Leaders.jpg"),
            caption: "Prep Leaders",
          },
          {
            src: getAsset("Leadership/Students/Prep-Leader's-Workshop.jpg"),
            caption: "Prep Leader's Workshop",
          },
          {
            src: getAsset(
              "Leadership/Students/Senior-School-Prefects-Training-at-Lukenya.jpg",
            ),
            caption: "Senior School Prefects Training at Lukenya",
          },
          {
            src: getAsset("Leadership/Students/Prep-Leader's-Assembly.jpg"),
            caption: "Prep Leader's Assembly",
          },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          {
            src: getAsset("Leadership/Staff/Brookhouse-CIS-Leadership-pg1.png"),
            caption: "Brookhouse CIS Leadership pg1",
          },
          {
            src: getAsset("Leadership/Staff/Brookhouse-CIS-Leadership-pg2.png"),
            caption: "Brookhouse CIS Leadership pg2",
          },
        ],
      },
    ],
  },
  {
    slug: "service",
    letter: "S",
    title: "Service",
    image: getAsset("letters/service.svg"),
    heroImage: heroS,
    heroPosition: {
      left: "79.7%",
      top: "15%",
      width: "14.7%",
      height: "22.0%",
    },
    heroCaptionLeft: "93.2%",
    accentVar: "--pillar-service",
    summary:
      "Committing to community engagement and humanitarian projects locally and internationally, such as Round Square International Service projects.",
    showcaseTitle: "Community Voice Showcase",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: false,
        media: [
          {
            src: getAsset(
              "Service/Alumni/Kenyan-Entrepreneur-Turns-Plastic-Bottles-Into-Eco-Bricks.mp4",
            ),
            caption:
              "Kenyan Entrepreneur Turns Plastic Bottles Into Eco Bricks",
          },
          {
            src: getAsset(
              "Service/Alumni/Women-and-Power_ Meet-the-woman-up-cycling-plastic-into-eco-bricks.mp4",
            ),
            caption:
              "Women and Power Meet the woman up cycling plastic into eco bricks",
          },
          {
            src: getAsset(
              "Service/Alumni/Dr-Sharon-Mulindi-Emergency-Wildlife-Care-Vet-Unit-in-Action!-SAVE-THE-ELEPHANTS.mp4",
            ),
            caption:
              "Dr Sharon Mulindi Emergency Wildlife Care Vet Unit in Action! SAVE THE ELEPHANTS",
          },
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: false,
        media: [
          {
            src: getAsset(
              "Service/BSPTA/Brookhouse-Parents-Fundraise-and-Complete-Renovations-at-Brookhouse-Partner-School,-Oltepesi-Primary-School,-Sep-2026.png",
            ),
            caption:
              "Brookhouse Parents Fundraise and Complete Renovations at Brookhouse Partner School, Oltepesi Primary School, Sep 2026",
          },
          { src: getAsset("Service/BSPTA/IMG_0848.jpg"), caption: "IMG 0848" },
          { src: getAsset("Service/BSPTA/IMG_0860.jpg"), caption: "IMG 0860" },
          { src: getAsset("Service/BSPTA/IMG_0988.jpg"), caption: "IMG 0988" },
          {
            src: getAsset("Service/BSPTA/Image2026.jpeg"),
            caption: "Image2026",
          },
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: false,
        media: [
          {
            src: getAsset("Service/CMT-and-Board/4Q7A6670.jpg"),
            caption: "4Q7A6670",
          },
          {
            src: getAsset("Service/CMT-and-Board/4Q7A6671.jpg"),
            caption: "4Q7A6671",
          },
        ],
      },
      { slug: "students", label: "Students", placeholder: false, media: [] },
      {
        slug: "staff",
        label: "Staff",
        placeholder: false,
        media: [
          {
            src: getAsset("Service/Educators-and-staff/4Q7A4071.jpg"),
            caption: "4Q7A4071",
          },
          {
            src: getAsset("Service/Educators-and-staff/4Q7A6732.jpg"),
            caption: "4Q7A6732",
          },
          {
            src: getAsset("Service/Educators-and-staff/4Q7A6779.jpg"),
            caption: "4Q7A6779",
          },
          {
            src: getAsset("Service/Educators-and-staff/4Q7A6939.jpg"),
            caption: "4Q7A6939",
          },
          {
            src: getAsset("Service/Educators-and-staff/11.jpg"),
            caption: "11",
          },
          {
            src: getAsset("Service/Educators-and-staff/12.jpg"),
            caption: "12",
          },
          {
            src: getAsset(
              "Service/Educators-and-staff/MEETING-MINUTES-SERVICE-COMMITEE.png",
            ),
            caption: "MEETING MINUTES SERVICE COMMITEE",
          },
          {
            src: getAsset(
              "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg1.png",
            ),
            caption: "Year 9 Citizenship Schemes of Work pg1",
          },
          {
            src: getAsset(
              "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg2.png",
            ),
            caption: "Year 9 Citizenship Schemes of Work pg2",
          },
          {
            src: getAsset(
              "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg3.png",
            ),
            caption: "Year 9 Citizenship Schemes of Work pg3",
          },
          {
            src: getAsset(
              "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg4.png",
            ),
            caption: "Year 9 Citizenship Schemes of Work pg4",
          },
          {
            src: getAsset(
              "Service/Educators-and-staff/SOW-Preamble-Year-9-Citizenship.png",
            ),
            caption: "SOW Preamble Year 9 Citizenship",
          },
        ],
      },
    ],
  },
];


 
export function getPillar(slug) {
  if (!slug) return undefined;
  return pillars.find(
    (p) => p.slug.trim().toLowerCase() === slug.trim().toLowerCase(),
  );
}

export function getBubble(pillarSlug, bubbleSlug) {
  const pillar = getPillar(pillarSlug);
  if (!pillar || !bubbleSlug) return { pillar: undefined, bubble: undefined };

  const cleanBubbleSlug = bubbleSlug.trim().toLowerCase();
  const bubble = pillar.bubbles.find(
    (b) => b.slug.trim().toLowerCase() === cleanBubbleSlug,
  );

  return { pillar, bubble };
}
