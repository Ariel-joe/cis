import heroI from "../assets/images/hero-letters/i.png";
import heroD from "../assets/images/hero-letters/d.png";
import heroE from "../assets/images/hero-letters/e.png";
import heroA from "../assets/images/hero-letters/a.png";
import heroL from "../assets/images/hero-letters/l.png";
import heroS from "../assets/images/hero-letters/s.png";

/**
 * Single source of truth for the IDEALS site content.
 *
 * To add or edit a pillar page: edit the matching object below.
 * To add or edit a bubble on a pillar page: edit its `bubbles` array.
 * To add media to a bubble's own page: fill in that bubble's `media` array.
 *
 * media item shape: { type: "image" | "document" | "video", src, caption?, filename?, poster? }
 *   - image / video: src is a URL or an imported asset. Images and videos
 *     open in a lightbox on click.
 *   - video: optional `poster` is an image shown before the video loads —
 *     lighter than loading video metadata; recommended for heavy videos.
 *   - document: src is a URL to the file (pdf, docx, etc.). Documents
 *     download when clicked; `filename` (optional) overrides the saved
 *     name for the browser download.
 *   - caption is always shown at the bottom of the tile — if omitted, the
 *     filename from `src` is used as a fallback.
 *   - Media entries can also be plain string paths (e.g. "folder/photo.jpg")
 *     — type is inferred from the extension and paths without a leading
 *     slash are treated as public/ assets.
 *
 * A bubble with `placeholder: true` renders with a dashed "add content" look
 * so it's obvious which ones still need real content. Set it to `false`
 * as soon as real media is added.
 *
 * `image`: path to this letter's artwork used on the Home page ring
 * medallions, served from /public so you can just drop a new file in
 * public/images/letters/ with the same name — no other code needs to
 * change. Leave it as `null` to fall back to the styled-text letter.
 *
 * `heroImage` / `heroPosition`: the same letter's artwork as it sits on
 * top of the hero banner (see Hero.jsx), positioned to match where it
 * falls in the original full IDEALS artwork. `heroPosition` values are
 * percentages of the hero image's width/height, so they stay lined up
 * at any screen size. Nudge the numbers slightly if a letter ever looks
 * off after you swap in a different hero background.
 *
 * `heroCaptionLeft`: horizontal center (as a % of the hero width) for
 * this pillar's clickable caption word underneath the letters — matches
 * where each word sat in the original artwork. The row's vertical
 * position is shared by all six and lives in `heroCaptionTop` below.
 */

export const heroCaptionTop = "86.1%";

export const pillars = [
  {
    slug: "internationalism",
    letter: "I",
    title: "Internationalism",
    image: "/images/letters/internationalism.svg",
    heroImage: heroI,
    heroPosition: {
      left: "2.4%",
      top: "2%",
      width: "14.5%",
      height: "37.9%",
    },
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
          "Internationalism/Alumni-matters/Branson-Kyalo,-Tyler-Belyon,-Beverly-Sikueya,-Samantha-Muthui,-Tephila-Chege,-Angela-Njagi.jpg",
          "Internationalism/Alumni-matters/Rita-Kihuria,-Jenna-Ndungi,-Megany-Sikueya,-Chemtai-Sittoni,-Lia-Ounda,-Lisa-Okello.jpg",
          "Internationalism/Alumni-matters/Angela-Mpuga,-Leila-Mandala,-Nyakara-Morara,-Christopher-Waititu.jpg",
          "Internationalism/Alumni-matters/Netwon-Mpuga,-Lydia-Kiagi,-Madeleine-Kipngetich,-Hera-Odeny.jpg",
          "Internationalism/Alumni-matters/University-Locations-2026.png",
          "Internationalism/Alumni-matters/Annual-Brookhouse-Alumni-Gatherings.jpg",
          "Internationalism/Alumni-matters/University-Locations-2025.png",
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: false,
        media: [
          "Internationalism/Parents/Brookhouse-Parent-Provides-Kuwaiti-Workshop.png",
          "Internationalism/Parents/Brookhouse-Parents-host-1200-International-Students-2024.mp4",
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
          "Internationalism/Students/Celebrating-International-Day.mp4",
          "Internationalism/Students/Presentation-by-Louisa.jpg",
          "Internationalism/Students/Beijing-Robot-Challenge-2026.png",
          "Internationalism/Students/Chinese-Language-and-Culture-Recognition.png",
          "Internationalism/Students/International-Exchange-Student-Refletction.png",
          "Internationalism/Students/Brookhouse-Students-Go-On-Exchange,-2026.png",
          "Internationalism/Students/Brookhouse-Hosts-1200-Students-From-Over-50-Countries-for-Round-Square-International-Conference,-Oct-2023.mp4",
          "Internationalism/Students/Robotics-Challenge,-Beijing,-July-2026.jpeg",
          "Internationalism/Students/Student-Conference-in-South-Africa,-March-2026.png",
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: false,
        media: [
          "Internationalism/Staff-rsis/IMG_0768.jpeg",
          "Internationalism/Staff-rsis/IMG_1503.jpeg",
        ],
      },
    ],
  },
  {
    slug: "democracy",
    letter: "D",
    title: "Democracy",
    image: "/images/letters/democracy.svg",
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
          "Democracy/Alumni/Graduating-Class-2026-Hats-Throw.jpg",
          "Democracy/Alumni/Graduating-Class-2026-Hood-Back.jpg",
          "Democracy/Alumni/Graduating-Class-2026-Hood-Front.jpg",
          "Democracy/Alumni/Graduating-Class-2026.jpg",
          "Democracy/Alumni/Alumni-gathering-Democracy.jpg",
          "Democracy/Alumni/BTEC-Enterprise-Talk-with-Alumni-Mwanahalima-1.jpg",
          "Democracy/Alumni/BTEC-Enterprise-Talk-with-Alumni-Mwanahalima-2.jpg",
          "Democracy/Alumni/David-Mulandi-Leaving-a-Legacy-Talk.mp4",
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          "Democracy/Parents/BSPTA-AGM-Agenda-October-2025.png",
          "Democracy/Parents/BSPTA-AGM-Letter-October-2025.png",
          "Democracy/Parents/BSPTA-whatsapp-forum.png",
          "Democracy/Parents/Brookhouse-Parent-Mrs-Bangura,-General-Secretary-of-UN,-Presents-at-Brookhouse-Graduation-Ceremony,-2026.jpg",
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          "Democracy/Governance/Briefing-Notes-8th-September-2026.png",
          "Democracy/Governance/management-structure-2026-sept-karen-devolved-communication.png",
          "Democracy/Governance/management-structure-2026-sept-runda-devolved-communication.png",
          "Democracy/Governance/Rika-meeting-minutes-8-5-2026-Students-voice.png",
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          "Democracy/Students/ECAMUN-43rd-photo-1-Learners-voices.jpg",
          "Democracy/Students/Debate.mp4",
          "Democracy/Students/Brookhouse-Junior-Prep-students-prepare-and-present-a-'Show-and-Tell'-session-to-children-in-schools-from-5-different-continents,-November-2025.jpg",
          "Democracy/Students/Prefect-Application-Learner_s-voice.png",
          "Democracy/Students/Year-10-Karen-option-form-2025-26-Learners-Voice.png",
          "Democracy/Students/World-Scholars-Cup-Regional-Round-April-2026.mp4",
          "Democracy/Students/Democratic-Rika-Reps.jpg",
          "Democracy/Students/Kai-Vladimirou-Best-Speaker-award-ECAMUN-2026.jpg",
          "Democracy/Students/MUN-Training-Session-January-2026.jpg",
          "Democracy/Students/ECAMUN-February-2026.jpg",
          "Democracy/Students/MSMUN-February-2026.jpg",
          "Democracy/Students/Debate.mp4",
          "Democracy/Students/Brookhouse-Junior-Prep-students-prepare-and-present-a-'Show-and-Tell'-session-to-children-in-schools-from-5-different-continents,-November-2025.jpg",
          "Democracy/Students/Prefect-Application-Learner_s-voice.png",
          "Democracy/Students/Brookhouse-Hosts-the-Regional-World-Scholars-Round-April-2026.mp4",
          "Democracy/Students/World-Scholars-Cup-Semi-Finals-Prague-July-2026.jpg",
          "Democracy/Students/World-Scholars-Cup-Finals-Yale-University,-November-2025.jpg",
          "Democracy/Students/Rika-Representatives.jpg",
          "Democracy/Students/MUN-Training-Session-January-2026.jpg",
          "Democracy/Students/East-And-Central-Africa-Model-United-Nations-2026.jpg",
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          "Democracy/Staff/Minutes-of-Whole-School-Staff-Meeting-No.1-2026-pg1.png",
          "Democracy/Staff/Minutes-of-Whole-School-Staff-Meeting-No.1-2026-pg2.png",
          "Democracy/Staff/Staff-management-structure-2026-sept-admin.png",
        ],
      },
    ],
  },
  {
    slug: "environmentalism",
    letter: "E",
    title: "Environmentalism",
    image: "/images/letters/environmentalism.svg",
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
        slug: "Alumni",
        label: "Alumni",
        placeholder: true,
        media: ["Environmentalism/Alumni/DR-Sharon-Mulindi-Alumni.png"],
        media: [
          "Environmentalism/Alumni/Richard-Turere-Lion-Lights.jpg",
          "Environmentalism/Alumni/Dr-Sharon-Mulindi.jpg",
          "Environmentalism/Alumni/Michelle-Muturi.jpg",
          "Environmentalism/Alumni/Maureen-Some.jpg"

        ],
      },
      {
        slug: "Parents",
        label: "Parents",
        placeholder: true,
        media: ["Environmentalism/Parents/BSPTA-engagement.png"],
      },
      {
        slug: "Governance",
        label: "Governance",
        placeholder: true,
        media: [],
      },
      {
        slug: "Students",
        label: "Students",
        placeholder: true,
        media: [
          "Environmentalism/Students/BRIQUETTES-MAKING-BY-YEAR-6-LEARNERS-pg1.png",
          "Environmentalism/Students/BRIQUETTES-MAKING-BY-YEAR-6-LEARNERS-pg2.png",
          "Environmentalism/Students/Brookhouse-Students-Fundraise-KES-600,000-for-Water-Conservancy-Project-'Hog Charge'-through-sponsorships,-an-Annual-Event-in-Term-2.jpg",
          "Environmentalism/Students/Environment-through-Art.png",
          "Environmentalism/Students/Service-Learning-Activities-in-Prep,-Term-3-2025-26.png",
        ],
      },
      {
        slug: "Staff",
        label: "Staff",
        placeholder: true,
        media: [
          "Environmentalism/Staff/Environment-activities-through-service-learning.png",
          "Environmentalism/Staff/Rhino-Charge-and-Hog-Charge-2025.png",
          "Environmentalism/Staff/Staff-involvment.png",
        ],
      },
    ],
  },
  {
    slug: "adventure",
    letter: "A",
    title: "Adventure",
    image: "/images/letters/adventure.svg",
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
      {
        slug: "alumni",
        label: "Alumni",
        placeholder: true,
        media: [],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          "Adventure/Parents/adventure.JPG",
          "Adventure/Parents/IMG_2312.jpg",
          "Adventure/Parents/IMG_3578.jpeg",
          "Adventure/Parents/IMG_20231007.jpg",
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          "Adventure/Governance/Prep-Headteacher-Joins-Performance.JPG",
          "Adventure/Governance/Director-Visits-Service-Project,-Gifted-a-Goat!.jpg",
          "Adventure/Governance/Deputy-Director-Leads-Gold-Fundraiser-for-Service-Projects.JPG",
          "Adventure/Governance/Operations-Manager.JPG",
          "Adventure/Governance/Prep-Headteacher-Climbs-Longonot-With-Year-4,-2023.jpg",
          "Adventure/Governance/Prep-Headteacher-Visits-Elsamere,-2023.jpg",
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          "Adventure/Students/Secondary-students-perform -The-Master-of-The-Show,-Nov-2025.mp4",
          "Adventure/Students/Brookhouse-student-Trinity-Kamugisha-presents-at-TEDx-in-November-2025.mp4",
          "Adventure/Students/Middle-School-Performance-of-Percy-Jackson--The -Lightning-Thief,-April-2026.mp4",
          "Adventure/Students/PA-K-Gold-Mt.Kenya-February-2026.jpg",
          "Adventure/Students/PA-K-Silver-Sagana-Rapids-December-2025.jpg",
          "Adventure/Students/PA-K-Bronze-Ngong-Hills-June-2026.jpg",
          "Adventure/Students/Year-8-Sign-Language.jpg",
          "Adventure/Students/Nativity-Play.jpg",
          "Adventure/Students/Middle-School-Performance-of-Percy-Jackson--The-Lightning-Thief,-April-2026.mp4",
          "Adventure/Students/PA-K-Gold-Mt.Kenya-February-2026.jpg",
          "Adventure/Students/PA-K-Silver-Sagana-Rapids-December-2025.jpg",
          "Adventure/Students/PA-K-Bronze-Ngong-Hills-June-2026.jpg",
          "Adventure/Students/Year-4-Climb-Mt-Longonot.jpg",
          "Adventure/Students/Year-8-Sign-Language.jpg",
          "Adventure/Students/Nativity-Play.jpg",
          "Adventure/Students/Ice-Skating-Year-1.jpg",
          "Adventure/Students/ELS-Kindi-Athletics.jpg",
          "Adventure/Students/Prep-Sports-Poster.jpg",
          "Adventure/Students/Secondary-Sports.jpg",
          "Adventure/Students/Tea-Time-Concert.mp4",
          "Adventure/Students/17.jpg",
          "Adventure/Students/20.jpg",
          "Adventure/Students/13.jpg",
          "Adventure/Students/21.jpg",
          "Adventure/Students/19.jpg",
          "Adventure/Students/22.jpg",
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          "Adventure/Staff/11.jpg",
          "Adventure/Staff/12.jpg",
          "Adventure/Staff/13.jpg",
          "Adventure/Staff/14.jpg",
          "Adventure/Staff/15.jpg",
          "Adventure/Staff/16.jpg",
          "Adventure/Staff/17.jpg",
        ],
      },
    ],
  },
  {
    slug: "leadership",
    letter: "L",
    title: "Leadership",
    image: "/images/letters/leadership.svg",
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
          "Leadership/Alumni/Shakinar-Mutulili.mp4",
          "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-for-Jan-2026.png",
          "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-in-London-for-March-26.png",
          "Leadership/Alumni/Brookhouse-Alumni-Cocktail-Invitation-Card-in-NYC-in-April-2026.png",
          "Leadership/Alumni/Evidence-for-CIS-Inspection-Leadership.png",
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: true,
        media: [
          "Leadership/Parents/CIS-Leadership-Evidence-BPSTA-pg1.png",
          "Leadership/Parents/CIS-Leadership-Evidence-BPSTA-pg2.png",
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: true,
        media: [
          "Leadership/Governance/Responsibility-Map.png",
          "Leadership/Governance/Policy-Groups-1_10.png",
          "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg1.png",
          "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg2.png",
          "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg3.png",
          "Leadership/Governance/Board-policies-2.1-2.6-The-Board-pg4.png",
        ],
      },
      {
        slug: "students",
        label: "Students",
        placeholder: true,
        media: [
          "Leadership/Students/Amboseli-House.JPG",
          "Leadership/Students/Mara-House.jpg",
          "Leadership/Students/Samburu-House.jpg",
          "Leadership/Students/Tsavo-House.JPG",
          "Leadership/Students/Student-Leader's-Assembly.mp4",
          "Leadership/Students/Prep-Leaders-MCs-during-tea-time-concert.jpg",
          "Leadership/Students/Student-Leaders.JPG",
          "Leadership/Students/Prep-Leaders.jpg",
          "Leadership/Students/Prep-Leader's-Workshop.jpg",
          "Leadership/Students/Student-Leaders.JPG",
          "Leadership/Students/Senior-School-Prefects-Training-at-Lukenya.jpg",
          "Leadership/Students/Prep-Leader's-Assembly.jpg",
          "Leadership/Students/RIKA-Reps-Term-1-2025.jpg",
          "Leadership/Students/Brookhouse-House-System.jpg",
          "Leadership/Students/Student-Leader's-Assembly.mp4",
          "Leadership/Students/Prep-Leaders-MCs-during-tea-time-concert.jpg",
          "Leadership/Students/Prep-Leaders.jpg",
          "Leadership/Students/Prep-Leader's-Workshop.jpg",
          "Leadership/Students/Prefects-(Whole-School).JPG",
          "Leadership/Students/Senior-School-Prefects-Training-at-Lukenya.jpg",
          "Leadership/Students/Prep-Leader's-Assembly.jpg",
        ],
      },
      {
        slug: "staff",
        label: "Staff",
        placeholder: true,
        media: [
          "Leadership/Staff/Brookhouse-CIS-Leadership-pg1.png",
          "Leadership/Staff/Brookhouse-CIS-Leadership-pg2.png",
        ],
      },
    ],
  },
  {
    slug: "service",
    letter: "S",
    title: "Service",
    image: "/images/letters/service.svg",
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
          "Service/Alumni/Kenyan-Entrepreneur-Turns-Plastic-Bottles-Into-Eco-Bricks.mp4",
          "Service/Alumni/Women-and-Power_ Meet-the-woman-up-cycling-plastic-into-eco-bricks.mp4",
          "Service/Alumni/Dr-Sharon-Mulindi-Emergency-Wildlife-Care-Vet-Unit-in-Action!-SAVE-THE-ELEPHANTS.mp4",
        ],
      },
      {
        slug: "parents",
        label: "Parents",
        placeholder: false,
        media: [
          "Service/BSPTA/IMG_0848.jpg",
          "Service/BSPTA/IMG_0860.jpg",
          "Service/BSPTA/IMG_0988.jpg",
          "Service/BSPTA/Image2026.jpeg",
        ],
      },
      {
        slug: "governance",
        label: "Governance",
        placeholder: false,
        media: [
          "Service/CMT-and-Board/4Q7A6670.jpg",
          "Service/CMT-and-Board/4Q7A6671.jpg",
        ],
      },
      // {
      //   slug: "minutes",
      //   label: "Minutes",
      //   placeholder: false,
      //   media: [],
      // },
      { slug: "students", label: "Students", placeholder: false, media: [] },
      {
        slug: "staff",
        label: "Staff",
        placeholder: false,
        media: [
          "Service/Educators-and-staff/4Q7A4071.jpg",
          "Service/Educators-and-staff/4Q7A6732.jpg",
          "Service/Educators-and-staff/4Q7A6779.jpg",
          "Service/Educators-and-staff/4Q7A6939.jpg",
          "Service/Educators-and-staff/11.jpg",
          "Service/Educators-and-staff/12.jpg",
          "Service/Educators-and-staff/MEETING-MINUTES-SERVICE-COMMITEE.png",
          "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg1.png",
          "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg2.png",
          "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg3.png",
          "Service/Educators-and-staff/Year-9-Citizenship-Schemes-of-Work-pg4.png",
          "Service/Educators-and-staff/SOW-Preamble-Year-9-Citizenship.png",
          "Service/Educators-and-staff/Citizenship-Overview.png",
          "Service/Educators-and-staff/Briefing-Notes-16th-September-2026.jpg",
          "Service/Educators-and-staff/Prep-School-Service-Learning_Term-1-2026-2027.jpg",
          "Service/Educators-and-staff/Student-Service-Learning-Residential-Applications-page-00001.jpg",
          "Service/Educators-and-staff/Student-Service-Learning-Residential-Applications-page-00002.jpg",
          "Service/Educators-and-staff/Student-Service-Learning-Residential-Applications-page-00003.jpg",
          "Service/Educators-and-staff/Student-Service-Learning-Residential-Applications-page-00004.jpg",
          "Service/Educators-and-staff/Student-Service-Learning-Residential-Applications-page-00005.jpg",
          "Service/Educators-and-staff/Student-Service-Learning-Residential-Applications-page-00006.jpg",
          "Service/Educators-and-staff/Term-1-Secondary-Service-Learning-Projects-Requisitions.png",
          "Service/Educators-and-staff/Year-12-Residential-Service-Project-Invitation-Letter-June-2026-page-00001.jpg",
          "Service/Educators-and-staff/Year-12-Residential-Service-Project-Invitation-Letter-June-2026-page-00002.jpg",
          "Service/Educators-and-staff/YEAR-12-RETREAT-CLUSTERS-2025-Staff-and-students-page-00001.jpg",
          "Service/Educators-and-staff/YEAR-12-RETREAT-CLUSTERS-2025-Staff-and-students-page-00002.jpg",
          "Service/Educators-and-staff/YEAR-12-RETREAT-CLUSTERS-2025-Staff-and-students-page-00003.jpg",
          "Service/Educators-and-staff/YEAR-12-RETREAT-CLUSTERS-2025-Staff-and-students-page-00004.jpg",
          "Service/Educators-and-staff/Year-12-Service-Learning-Project-Partners-Invitation-Letter.jpg",
          "Service/Educators-and-staff/Year-12-Service-Learning-Residential-Project-Staff-Rota.jpg",
        ],
      },
      // {
      //   slug: "curriculum",
      //   label: "Curriculum",
      //   placeholder: false,
      //   media: [],
      // },
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
