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
      "A spirit of internationalism is found in those who seek to <strong>discover and embrace the similarities and differences between cultures and nationalities </strong> in ways that promote meaningful and lasting understanding, tolerance and respect. It encompasses an appreciation for the <strong>increasing interconnectedness of the world</strong>, our <strong> greater dependence on the global economy and interdependence as nations </strong> as a result of massively increased commerce and cultural exchange.",
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
            caption: "Brookhouse Alumni 2026",
          },
          // {
          //   src: getAsset(
          //     "Internationalism/Alumni-matters/Rita-Kihuria,-Jenna-Ndungi,-Megany-Sikueya,-Chemtai-Sittoni,-Lia-Ounda,-Lisa-Okello.jpg",
          //   ),
          //   caption:
          //     "Rita Kihuria, Jenna Ndungi, Megany Sikueya, Chemtai Sittoni, Lia Ounda, Lisa Okello",
          // },
          // {
          //   src: getAsset(
          //     "Internationalism/Alumni-matters/Angela-Mpuga,-Leila-Mandala,-Nyakara-Morara,-Christopher-Waititu.jpg",
          //   ),
          //   caption:
          //     "Angela Mpuga, Leila Mandala, Nyakara Morara, Christopher Waititu",
          // },
          {
            src: getAsset(
              "Internationalism/Alumni-matters/Netwon-Mpuga,-Lydia-Kiagi,-Madeleine-Kipngetich,-Hera-Odeny.jpg",
            ),
            caption: "Brookhouse Alumni 2026",
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
            caption: "Brookhouse Parent Provides Kuwaiti Workshop, 2025",
          },
          {
            src: getAsset(
              "Internationalism/Parents/Partnership-With-Parents-Ahead-of-University-Applications.png",
            ),
            caption:
              "Partnership With Parents Ahead of University Applications",
          },
          {
            src: getAsset(
              "Internationalism/Parents/Brookhouse-Parents-host-1200-International-Students-2024.mp4",
            ),
            caption:
              "Brookhouse Parents host 1200 International Students, 2024",
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
            caption: "Student Celebration of International Day, 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/U18-Football-Tournament,-Manchester,-U.K-July-2026.jpg",
            ),
            caption: "U18 Football Tournament, Manchester, UK, July 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/XPA-Basketball-Training-Camp-in-Spain,-July-2026.jpg",
            ),
            caption: "XPA Basketball Training Camp in Spain, July 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/Presentation-by-Louisa.jpg",
            ),
            caption: "Brookhouse Exchange London to Nairobi",
          },
          {
            src: getAsset(
              "Internationalism/Students/Brookhouse-Exchange;-Nairobi-Ghana.png",
            ),
            caption: "Brookhouse Exchange Nairobi to Ghana",
          },
          {
            src: getAsset(
              "Internationalism/Students/Brookhouse-Exchange,-Ghana-to-Nairobi.png",
            ),
            caption: "Brookhouse Exchange Ghana to Nairobi",
          },
          {
            src: getAsset(
              "Internationalism/Students/Brookhouse-Exchange,-Nairob-Gordonstoun.png",
            ),
            caption: "Brookhouse Exchange Nairobi to Gordonstoun",
          },
          {
            src: getAsset(
              "Internationalism/Students/Brookhouse-goes-to-Zambia,-2026.png",
            ),
            caption: "Brookhouse Exchange Nairobi to Zambia, 2026",
          },
          {
            src: getAsset(
              "Internationalism/Students/Chinese-Language-and-Culture-Recognition.png",
            ),
            caption: "Chinese Language and Culture Recognition",
          },
          // {
          //   src: getAsset(
          //     "Internationalism/Students/International-Exchange-Student-Refletction.png",
          //   ),
          //   caption: "International Exchange Student Reflection",
          // },
          // {
          //   src: getAsset(
          //     "Internationalism/Students/Brookhouse-Students-Go-On-Exchange,-2026.png",
          //   ),
          //   caption: "Brookhouse Students Go On Exchange, 2026",
          // },
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
            caption: "Brookhouse in South Africa, March 2026",
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
              "Internationalism/Staff-rsis/Communication-With-Parents,-August-2026.png",
            ),
            caption: "Communication With Parents, August 2026",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/Year-9-Citizenship-Religions-&-Cultures.jpg",
            ),
            caption: "Celebration of Culture Around the World, Planning (Y9)",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/Yr-13-Citizenship-Faith-&-Religion_page-0001.jpg",
            ),
            caption:
              "Diversity of Faith and Religion, Global Citizenship Planning (Y13)",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/Yr-13-Citizenship-Faith-&-Religion_page-0002.jpg",
            ),
            caption:
              "Diversity of Faith and Religion, Global Citizenship Planning (Y13)",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/Minutes-of-Meeting-Extract,-Heads-of-Year-with-CMT,-Sep-2026.png",
            ),
            caption:
              "Planning to Host the UK University Fair, Meeting Minutes from Sep 2026",
          },
          {
            src: getAsset("Internationalism/Staff-rsis/IMG_0768.jpeg"),
            caption: "Staff Plan and Accompany all International Trips",
          },
          {
            src: getAsset("Internationalism/Staff-rsis/IMG_1503.jpeg"),
            caption:
              "Teachers become Round Square Reps, Leading Groups of Students from Around the World on Trips",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0001.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 1",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0002.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 2",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0003.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 3",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0004.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 4",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0005.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 5",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0006.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 6",
          },
          {
            src: getAsset(
              "Internationalism/Staff-rsis/JSSF-Trip-to-Kyoto,-Japan-Risk-Assessment-Form-2026_page-0007.jpg",
            ),
            caption: "JSSF Trip to Kyoto, Japan Risk Assessment Form 2026 pg 7",
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
      "A spirit of democracy embraces a sense of <strong> equality, fairness, justice and a desire to do what is right </strong> (for the greater good). Freedom of thought and speech are valued and appropriate forums and channels of communication are discovered and explored.",
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
            caption: "Graduating Class 2026",
          },
          {
            src: getAsset(
              "Democracy/Alumni/Yale-Engages-Brookhouse-Alumni-2025)-as-a-Trainer-for-the-Yale-Young-African-Scholars.png",
            ),
            caption:
              "Yale Engages Brookhouse Alumni (2025) as a Trainer for the Yale Young African Scholars",
          },
          // {
          //   src: getAsset(
          //     "Democracy/Alumni/Graduating-Class-2026-Hood-Back.jpg",
          //   ),
          //   caption: "Graduating Class 2026 Hood Back",
          // },
          // {
          //   src: getAsset(
          //     "Democracy/Alumni/Graduating-Class-2026-Hood-Front.jpg",
          //   ),
          //   caption: "Graduating Class 2026 Hood Front",
          // },
          // {
          //   src: getAsset("Democracy/Alumni/Graduating-Class-2026.jpg"),
          //   caption: "Graduating Class 2026",
          // },
          // {
          //   src: getAsset("Democracy/Alumni/Alumni-gathering-Democracy.jpg"),
          //   caption: "Alumni gathering Democracy",
          // },
          {
            src: getAsset(
              "Democracy/Alumni/BTEC-Enterprise-Talk-with-Alumni-Mwanahalima-1.jpg",
            ),
            caption: "BTEC Enterprise Talk, Led by Brookhouse Alumni",
          },
          // {
          //   src: getAsset(
          //     "Democracy/Alumni/BTEC-Enterprise-Talk-with-Alumni-Mwanahalima-2.jpg",
          //   ),
          //   caption: "BTEC Enterprise Talk with Alumni Mwanahalima 2",
          // },
          {
            src: getAsset(
              "Democracy/Alumni/David-Mulandi-Leaving-a-Legacy-Talk.mp4",
            ),
            caption: "Legacy Talk by David Mulandi, Brookhouse Alumni",
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
          // {
          //   src: getAsset("Democracy/Parents/BSPTA-whatsapp-forum.png"),
          //   caption: "BSPTA whatsapp forum",
          // },
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          {
            src: getAsset("Democracy/Governance/Cross-Campus-Inset-Weeks.png"),
            caption: "Cross Campus Inset Weeks",
          },
          {
            src: getAsset(
              "Democracy/Governance/Karen-and-Runda-Prep-&-ELS-Term-1-Calendar-2026-2027-Final_page-0001.jpg",
            ),
            caption: "Cross-Campus Calendar, Prep and ELS",
          },
          {
            src: getAsset(
              "Democracy/Governance/Karen-and-Runda-Prep-&-ELS-Term-1-Calendar-2026-2027-Final_page-0002.jpg",
            ),
            caption: "Cross-Campus Calendar, Prep and ELS",
          },
          {
            src: getAsset(
              "Democracy/Governance/Karen-and-Runda-Secondary-Term-1-Calendar-2026-2027-final_page-0001.jpg",
            ),
            caption: "Cross-Campus Calendar, Secondary",
          },
          {
            src: getAsset(
              "Democracy/Governance/Karen-and-Runda-Secondary-Term-1-Calendar-2026-2027-final_page-0002.jpg",
            ),
            caption: "Cross-Campus Calendar, Secondary",
          },
          {
            src: getAsset(
              "Democracy/Governance/schedule-meetings-2026-2027-term-1-combined_page-0001.jpg",
            ),
            caption: "Cross-Campus Meeting Schedule",
          },
          {
            src: getAsset(
              "Democracy/Governance/schedule-assembly-2026-2027-term-1-combined.jpg",
            ),
            caption: "Cross-Campus Assembly Schedule",
          },
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          {
            src: getAsset("Democracy/Students/Debate.mp4"),
            caption: "Interhouse Debate",
          },
          {
            src: getAsset(
              "Democracy/Students/Rika-meeting-minutes-8-5-2026-Students-voice.png",
            ),
            caption: "Rika meeting minutes, 8-5-2026, Students voice",
          },
          {
            src: getAsset("Democracy/Students/RIKA-Reps-Term-1-2025.jpg"),
            caption: "RIKA Reps, Term 1, 2025",
          },
          {
            src: getAsset("Democracy/Students/Democratic-Rika-Reps.jpg"),
            caption: "Democratic Rika Reps",
          },
          // {
          //   src: getAsset(
          //     "Democracy/Students/Kai-Vladimirou-Best-Speaker-award-ECAMUN-2026.jpg",
          //   ),
          //   caption: "Kai Vladimirou Best Speaker award ECAMUN, 2026",
          // },
          {
            src: getAsset(
              "Democracy/Students/MUN-Training-Session-January-2026.jpg",
            ),
            caption: "MUN Training Session January, 2026",
          },
          {
            src: getAsset("Democracy/Students/ECAMUN-February-2026.jpg"),
            caption: "ECAMUN February, 2026",
          },
          {
            src: getAsset("Democracy/Students/MSMUN-February-2026.jpg"),
            caption: "MSMUN February, 2026",
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
              "Brookhouse Hosts the Regional World Scholars Round, April 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/World-Scholars-Cup-Semi-Finals-Prague-July-2026.jpg",
            ),
            caption: "World Scholars Cup Semi Finals Prague, July 2026",
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
            caption: "East And Central Africa Model United Nations, 2026",
          },
          {
            src: getAsset(
              "Democracy/Students/Prefect-Application-Learner_s-voice.png",
            ),
            caption: "Secondary Prefect Application",
          },
          {
            src: getAsset("Democracy/Students/Prep-Leader-Application.png"),
            caption: "Prep Leader Application",
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
          // {
          //   src: getAsset(
          //     "Democracy/Staff/Staff-management-structure-2026-sept-admin.png",
          //   ),
          //   caption: "Staff management structure 2026 sept admin",
          // },
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
      "A spirit of environmentalism centres on the significance of<strong> understanding mankind’s place in the universe</strong>, the forces that shape our surroundings and the impact we have on those surroundings. A systems-based appreciation of the interdependence between human beings and the planet highlights the fine balance needed to make that relationship a healthy one.",
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
            caption:
              "Brookhouse Alumni, Richard Turere Invents Method to Save Wildlife and Humans Across Continents.",
          },
          {
            src: getAsset("Environmentalism/Alumni/Dr-Sharon-Mulindi.jpg"),
            caption:
              "Brookhouse Alumni, Dr Sharon Mulindi, Kenyan Conservationist.",
          },
          {
            src: getAsset("Environmentalism/Alumni/Michelle-Muturi.jpg"),
            caption:
              "Brookhouse Alumni, Michelle Muturi, Environmental Innovator.",
          },
          {
            src: getAsset("Environmentalism/Alumni/Maureen-Some.jpg"),
            caption:
              "Brookhouse Alumni, Maureen Some, Conservationist and Youth Leader.",
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
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          {
            src: getAsset("Environmentalism/Governance/Karen-NEMA-licence.png"),
            caption: "NEMA licence",
          },
          {
            src: getAsset(
              "Environmentalism/Governance/Brookhouse-School-Global-Citizenship-Definition.png",
            ),
            caption: "Global Citizenship",
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
              "Environmentalism/Students/Making-Briquettes-(Environmental Week).mp4",
            ),
            caption: "Briquettes Making",
          },
          // {
          //   src: getAsset(
          //     "Environmentalism/Students/BRIQUETTES-MAKING-BY-YEAR-6-LEARNERS-pg2.png",
          //   ),
          //   caption: "BRIQUETTES MAKING BY YEAR 6 LEARNERS pg2",
          // },
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
            caption: "Service Learning Activities in Prep, Term 3, 2025-26",
          },
          {
            src: getAsset("Environmentalism/Students/scout.png"),
            caption:
              "Brookhouse Student become Global Scout Ambassador for Climate Action and Environment",
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
          {
            src: getAsset(
              "Environmentalism/Staff/Environment-club–Tree-Planting-at-Karura-forest-2024.jpg",
            ),
            caption: "Environment Club",
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
      "A spirit of adventure is characterised by those who <strong>push themselves beyond their perceived limits</strong>, cross boundaries and discover that they are capable of more than they thought. It encompasses preparedness to <strong>take risks, face a challenge and persist against the odds </strong> and in the face of potential failure.Challenging students physically and mentally through outdoor pursuits, expeditions, and experiential learning.",
    showcaseTitle: "Adventure",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: true,
        media: [
          {
            src: getAsset(
              "Internationalism/Alumni-matters/University-Locations-2026.png",
            ),
            caption: "University Locations 2026",
          },
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          {
            src: getAsset("Adventure/Parents/adventure.JPG"),
            caption: "Tree Planting As a Family",
          },
          {
            src: getAsset("Adventure/Parents/IMG_2312.jpg"),
            caption: "Parents Donate Plastic Bottles for Reuse",
          },
          {
            src: getAsset("Adventure/Parents/IMG_3578.jpeg"),
            caption: "PTA Attend Opening Ceremony with a Community Partner",
          },
          {
            src: getAsset("Adventure/Parents/IMG_20231007.jpg"),
            caption: "Brookhouse Parents Develops Recycling Project",
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
          {
            src: getAsset("Adventure/Students/17.jpg"),
            caption: "Hog Charge Participation",
          },
          {
            src: getAsset("Adventure/Students/20.jpg"),
            caption: "Hiking the Abedares",
          },
          // { src: getAsset("Adventure/Students/13.jpg"), caption: "13" },
          {
            src: getAsset("Adventure/Students/21.jpg"),
            caption: "Reception Students Learn How to Ride a Bike",
          },
          // { src: getAsset("Adventure/Students/19.jpg"), caption: "19" },
          // { src: getAsset("Adventure/Students/22.jpg"), caption: "22" },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          {
            src: getAsset("Adventure/Staff/11.jpg"),
            caption:
              "Staff Lead Prep Students Through Hell’s Gate National Park",
          },
          {
            src: getAsset("Adventure/Staff/12.jpg"),
            caption: "Staff Preparing Campsite Ahead of Conservation Event",
          },
          {
            src: getAsset("Adventure/Staff/13.jpg"),
            caption: "Staff Ride With ‘Under 10s’ in Hog Charge Event",
          },
          {
            src: getAsset("Adventure/Staff/14.jpg"),
            caption: "Preparing for Presidential Award, Kenya",
          },
          {
            src: getAsset("Adventure/Staff/15.jpg"),
            caption: "Staff on Adventure Day",
          },
          {
            src: getAsset("Adventure/Staff/ISSK-SCOUTS-CAMPOREE-2026.jpg"),
            caption: "Organisation of Scouts Camping Trip",
          },
          // { src: getAsset("Adventure/Staff/17.jpg"), caption: "17" },
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
      "A spirit of leadership is found in those whose convictions are rooted in <strong>personal responsibility, kindness and justice </strong>. It recognises that successful leaders are driven by a desire to <strong>be of service to others</strong> and to nurture, guide, develop and help them to improve and succeed.",
    showcaseTitle: "Leadership",
    bubbles: [
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: true,
        media: [
          {
            src: getAsset("Leadership/Alumni/Shakinar-Mutulili.mp4"),
            caption:
              "Brookhouse Alumni 2021, Shakinar, Secretary General at EAMUN",
          },
          // {
          //   src: getAsset(
          //     "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-for-Jan-2026.png",
          //   ),
          //   caption: "Brookhouse Alumni Cocktail Invitation Card for Jan 2026",
          // },
          // {
          //   src: getAsset(
          //     "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-in-London-for-March-26.png",
          //   ),
          //   caption:
          //     "Brookhouse Alumni Cocktail Invitation Card in London for March 26",
          // },
          // {
          //   src: getAsset(
          //     "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-in-NYC-in-April-2026.png",
          //   ),
          //   caption:
          //     "Brookhouse Alumni Cocktail Invitation Card in NYC in April 2026",
          // },
          // {
          //   src: getAsset(
          //     "Leadership/Alumni/Evidence-for-CIS-Inspection-Leadership.png",
          //   ),
          //   caption: "Evidence for CIS Inspection Leadership",
          // },
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
            caption: "Brookhouse Parent, Under-Secretary General, UN",
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
            caption: "Secondary Prefects",
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
          // {
          //   src: getAsset("Leadership/Staff/Brookhouse-CIS-Leadership-pg2.png"),
          //   caption: "Brookhouse CIS Leadership pg2",
          // },
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
      "A spirit of service celebrates personal development through practical experience bringing sustainable support and benefit to others. Keenness and ability to learn in real-world contexts delivers meaningful and lasting value to others as well as to the primary learner. <strong>An understanding and respect for cultural difference develops through shared experience and partnership.</strong>",
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
              "Brookhouse Alumni, Michelle Turns Plastic Bottles into Eco Bricks",
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
          {
            src: getAsset("Service/BSPTA/IMG_0848.jpg"),
            caption:
              "Brookhouse Parents Fundraise Ksh 9m in 2025 Brookhouse Community Partnership Work",
          },
          {
            src: getAsset("Service/BSPTA/IMG_0860.jpg"),
            caption:
              "Brookhouse Parents Fundraise Ksh 6m in 2026 for Brookhouse Community Partnership Work",
          },
          // { src: getAsset("Service/BSPTA/IMG_0988.jpg"), caption: "IMG 0988" },
          {
            src: getAsset("Service/BSPTA/Image2026.jpeg"),
            caption:
              "Brookhouse Parent Runs Marathons to Support Education for Vulnerable Children",
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
            caption: "Brookhouse Board Members Visit Annual Service Project",
          },
          {
            src: getAsset("Service/CMT-and-Board/4Q7A6671.jpg"),
            caption: "Brookhouse Board Members Visit Annual Service Project",
          },
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: false,
        media: [
          {
            src: getAsset("Service/students/Brookhouse-Montage-R6.mp4"),
            caption: "Year 10 Malewa Trip",
          },
          {
            src: getAsset("Service/students/donations.jpg"),
            caption:
              "Donating Christmas Hampers to Vulnerable Communities in Kenya, Annual Project",
          },
          {
            src: getAsset("Service/students/Kambui-Service-Project-4.mp4"),
            caption:
              "Year 8 Service Learning Project at Kambui School For The Deaf (2026)",
          },
          {
            src: getAsset(
              "Service/students/Year-12-Service-Project-at-Kiambogo-(2026).mp4",
            ),
            caption: "Year 12 Service Learning Project at Kiambogo (2026)",
          },
          {
            src: getAsset("Service/students/y-12-service-9.JPG"),
            caption:
              "Christmas Fair to Raise Funding for Service Project, Annual Event",
          },
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: false,
        media: [
          {
            src: getAsset("Service/Educators-and-staff/4Q7A4071.jpg"),
            caption:
              "Teaching and Non-Teaching Staff Assist at Service Projects",
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
          // {
          //   src: getAsset(
          //     "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg1.png",
          //   ),
          //   caption: "Year 9 Citizenship Schemes of Work pg1",
          // },
          // {
          //   src: getAsset(
          //     "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg2.png",
          //   ),
          //   caption: "Year 9 Citizenship Schemes of Work pg2",
          // },
          // {
          //   src: getAsset(
          //     "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg3.png",
          //   ),
          //   caption: "Year 9 Citizenship Schemes of Work pg3",
          // },
          // {
          //   src: getAsset(
          //     "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg4.png",
          //   ),
          //   caption: "Year 9 Citizenship Schemes of Work pg4",
          // },
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
