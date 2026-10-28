import { Director, NewsPost, EventItem, Facility, Affiliation } from "./types";
// @ts-ignore
import farhanBinRafiqPortrait from "./assets/images/board/farhan-bin-rafiq.webp";
// @ts-ignore
import amzadMahmudPortrait from "./assets/images/board/amzad-mahmud.webp";
// @ts-ignore
import mohammedEliasPortrait from "./assets/images/board/mohammed-elias.webp";
// @ts-ignore
import mdYousufPortrait from "./assets/images/board/md-yousuf.webp";
// @ts-ignore
import nurulAbsarPortrait from "./assets/images/board/nurul-absar.webp";
// @ts-ignore
import presidentPortrait from "./assets/images/board/humayun-kabir-robel.webp";
// @ts-ignore
import presidentFacePortrait from "./assets/images/board/humayun-kabir-robel-face.webp";
// @ts-ignore
import arifurRahmanPortrait from "./assets/images/board/arifur-rahman.webp";
// @ts-ignore
import akRubelPortrait from "./assets/images/board/ak-rubel.webp";
// @ts-ignore
import maimunalKarimJisanPortrait from "./assets/images/board/maimunal-karim-jisan.webp";
// @ts-ignore
import mdImranAlamPortrait from "./assets/images/board/md-imran-alam.webp";
// @ts-ignore
import mdRezaulKabirRezaPortrait from "./assets/images/board/md-rezaul-kabir-reza.webp";
// @ts-ignore
import mehediHasanPortrait from "./assets/images/board/mehedi-hasan.webp";
// @ts-ignore
import rasadulMaimunEvoPortrait from "./assets/images/board/reshedul-evu.webp";
// @ts-ignore
import ziaulHoquePortrait from "./assets/images/board/ziaul-haque.webp";
// @ts-ignore
import abuMurshedChowdhuryPortrait from "./assets/images/board/abu-murshed-chowdhury.webp";
// @ts-ignore
import anwarulIslamPortrait from "./assets/images/board/mohammed-anwarul-islam.webp";
// @ts-ignore
import atiqulIslamPortrait from "./assets/images/board/atiqul-islam.webp";
// @ts-ignore
import nadiaSiddikaPortrait from "./assets/images/board/nadia-siddika.webp";
// @ts-ignore
import tashinLutfurPortrait from "./assets/images/board/tashin-lutfur.webp";
// @ts-ignore
import softOpeningPhoto from "./assets/images/events/club-house-soft-opening.webp";
// @ts-ignore
import softOpeningBanner from "./assets/images/events/club-house-soft-opening-banner.webp";
// @ts-ignore
import heroVideo from "./assets/videos/hero.mp4";
// @ts-ignore
import heroPoster from "./assets/images/hero-poster.webp";

export const PRESIDENT_IMAGE = presidentPortrait;
export const ANWARUL_ISLAM_IMAGE = anwarulIslamPortrait;
export const ATIQUL_ISLAM_IMAGE = atiqulIslamPortrait;
export const NADIA_SIDDIKA_IMAGE = nadiaSiddikaPortrait;
export const TASHIN_LUTFUR_IMAGE = tashinLutfurPortrait;
/** Face-focused crop of the President's portrait for round frames (cards, profile, members). */
export const PRESIDENT_FACE_IMAGE = presidentFacePortrait;
export const ABU_MURSHED_CHOWDHURY_IMAGE = abuMurshedChowdhuryPortrait;
export const FARHAN_BIN_RAFIQ_IMAGE = farhanBinRafiqPortrait;
export const ARIFUR_RAHMAN_IMAGE = arifurRahmanPortrait;
export const AMZAD_MAHMUD_IMAGE = amzadMahmudPortrait;
export const MOHAMMED_ELIAS_IMAGE = mohammedEliasPortrait;
export const MD_YOUSUF_IMAGE = mdYousufPortrait;
export const NURUL_ABSAR_IMAGE = nurulAbsarPortrait;
export const AK_RUBEL_IMAGE = akRubelPortrait;
export const MAIMUNAL_KARIM_JISAN_IMAGE = maimunalKarimJisanPortrait;
export const MD_IMRAN_ALAM_IMAGE = mdImranAlamPortrait;
export const MD_REZAUL_KABIR_REZA_IMAGE = mdRezaulKabirRezaPortrait;
export const MEHEDI_HASAN_IMAGE = mehediHasanPortrait;
export const RESHEDUL_EVU_IMAGE = rasadulMaimunEvoPortrait;
export const MD_ZIAUL_HOQUE = {
  name: "MD. Ziaul Hoque",
  image: ziaulHoquePortrait
};
export const MASTER_HERO_VIDEO = heroVideo;
/** Still frame of the hero video: shown on inner pages and while the homepage video loads. */
export const MASTER_HERO_POSTER = heroPoster;

export const DIRECTORS_DATA: Director[] = [
  {
    id: "humayun-kabir-robel",
    name: "Humayun Kabir Robel",
    designation: "President",
    membershipCode: "CBBCL-FM-01",
    memberNumber: "CBBCL-LM-0001",
    appointed: "January 2026",
    profileSubmitted: true,
    profileRevision: 2,
    photoAlt: "Humayun Kabir Robel, Founding President of Cox's Bazar Boat Club Ltd.",
    quote: "Building businesses, creating opportunities, and contributing to sustainable economic growth.",
    bio: [
      "Humayun Kabir Robel is a dynamic entrepreneur and corporate leader with over 13 years of professional experience across the real estate, construction, logistics, tourism, agro, and related business sectors.",
      "He is the Founder & CEO of Roshni Construction and M/S Kabir Enterprise and serves as Managing Director (Administration) of Chaytara Group, a diversified business group with sister concerns operating in rice milling, logistics supply to UN bodies and development organizations, construction, agro-business, tourism, and other sectors.",
      "With strong expertise in sales strategy, financial management, business development, and corporate leadership, he has played an active role in driving sustainable business growth, strengthening operational efficiency, and developing long-term strategic partnerships.",
      "His business interests extend across construction, real estate, logistics, agro-business, rice and flour milling, tourism, and related commercial activities. Through his leadership, he has focused on developing professionally managed ventures while creating opportunities for employment and economic participation.",
      "Beyond business, he is committed to employment generation, social initiatives, community development, and responsible corporate practices. Through his entrepreneurial journey, he continues to contribute to local economic development while building sustainable and professionally managed business ventures.",
      "As the Founding President of Cox's Bazar Boat Club Ltd., he provides leadership toward establishing the Club as a distinguished socio-cultural and nautical institution in Cox's Bazar, bringing together business, professional, social and community interests."
    ],
    vision: [
      "As Founding President, Humayun Kabir Robel is committed to building Cox's Bazar Boat Club Ltd. as a distinguished platform for social connection, professional networking, cultural engagement and nautical experiences."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Founder, CEO & Proprietor, Roshni Construction; Founder, CEO & Proprietor, M/S Kabir Enterprise; Managing Director (Administration), Chaytara Group; Managing Director, M/S Chaytara Construction; CEO, M/S Chaytara Rice & Flour Mills; CEO, M/S Chaytara CRH Mill; Director, Chaytara Agro; Authorised Dealer, Seven Rings Cement",
      company: "Roshni Construction; M/S Kabir Enterprise; Chaytara Group; M/S Chaytara Construction; M/S Chaytara Rice & Flour Mills; M/S Chaytara CRH Mill; Chaytara Agro",
      industry: "Real Estate; Construction; Logistics; Tourism; Agro-Business; Rice & Flour Milling; Supply & Distribution; Related Commercial Ventures",
      interests: "Business Development; Sales Strategy; Financial Management; Corporate Leadership; Construction; Real Estate; Logistics & Supply; Agro-Business; Rice & Flour Milling; Tourism; Strategic Partnerships; Sustainable Business Growth; Employment Generation"
    },
    achievements: [
      "13+ years of professional experience across real estate, construction, logistics, tourism, agro and related business sectors",
      "Entrepreneurial leadership — Founder & CEO of Roshni Construction and M/S Kabir Enterprise",
      "Corporate leadership — Managing Director (Administration) of Chaytara Group",
      "Business diversification — active leadership across construction, logistics, agro-business, rice milling, tourism and related commercial ventures",
      "CBBCL founding leadership — Founding President of Cox's Bazar Boat Club Ltd."
    ],
    memberships: [
      "Cox's Bazar Chamber of Commerce & Industry — Director",
      "Junior Chamber International (JCI), Cox's Bazar — Vice President",
      "Rotary Club of Cox's Bazar City — Director",
      "Cox's Bazar Boat Club Ltd. — Founding President"
    ],
    community: [
      "Employment generation & local economic development — business leadership focused on creating employment opportunities for the local community and workforce",
      "Community development & social initiatives — committed to community development and social initiatives alongside his professional and entrepreneurial activities",
      "Responsible corporate practices — promotes professionally managed and sustainable business ventures for business stakeholders and local communities"
    ],
    socials: {
      facebook: "https://www.facebook.com/hkrobel",
      instagram: "https://www.instagram.com/the____hk",
      email: "hkrobel@gmail.com"
    },
    timeline: [
      { year: "2026", event: "Appointed Founding President of Cox's Bazar Boat Club Ltd., leading the establishment and development of CBBCL as a prestigious socio-cultural and nautical institution." },
      { year: "Current", event: "Managing Director (Administration), Chaytara Group — corporate and administrative leadership across the diversified business group's operations." },
      { year: "Current", event: "Founder & CEO, Roshni Construction & M/S Kabir Enterprise — leads business development and operations across construction, real estate and related commercial activities." },
      { year: "Current", event: "Director, Cox's Bazar Chamber of Commerce & Industry — professional leadership within the local business and commercial community." },
      { year: "Current", event: "Vice President, Junior Chamber International (JCI), Cox's Bazar." },
      { year: "Current", event: "Director, Rotary Club of Cox's Bazar City — contributes to professional and community-oriented activities." },
      { year: "13+ Years", event: "Entrepreneurial and corporate career spanning real estate, construction, logistics, tourism, agro-business and related sectors." }
    ]
  },
  {
    id: "abu-murshed-chowdhury",
    name: "Abu Murshed Chowdhury",
    designation: "Vice President",
    membershipCode: "CBBCL-FM-16",
    memberNumber: "CBBCL-LM-0016",
    level: 2,
    orderIndex: 0,
    profileSubmitted: true,
    profileRevision: 4,
    photoAlt: "Abu Murshed Chowdhury, Founding Vice President of Cox's Bazar Boat Club Ltd.",
    bio: [
      "Abu Murshed Chowdhury is the Founding Vice President of Cox's Bazar Boat Club Ltd. (CBBCL). He is a banker by training, an entrepreneur, and a development and humanitarian leader whose career spans international trade, banking, business, trade-body leadership and community development in Cox's Bazar.",
      "He began his career in 1987 as a Foreign Trade Officer at Banque Indosuez, a French bank, where he served until 1995. From 1996 to 2007 he served at Dhaka Bank, rising to Assistant Vice President (AVP). In 1999 he established Abu Center Shopping Complex, which he continues to lead as Chairman, and in 2016 he founded Green Hope Products, a manufacturing and import business, of which he is Proprietor.",
      "In 1996 he founded PHALS (Program for Helpless And Lagged Society) to serve vulnerable communities, and he leads it as Founder and Executive Director. Through PHALS and partner organizations he manages and implements programmes in humanitarian response, livelihoods and job creation, disaster and climate-change support, child protection and child education, working with partners including IOM, the UK Foreign, Commonwealth & Development Office (FCDO), Global Affairs Canada and Malteser International. He has been part of pre-, during- and post-disaster response with the District Disaster Management Committee since 2012.",
      "He is a Former Director and present General Body Member of the Federation of Bangladesh Chambers of Commerce & Industry (FBCCI), Chief Advisor and Former President of the Cox's Bazar Chamber of Commerce & Industry, and President of Cox's Bazar Civil Society.",
      "For more than two decades he has represented Bangladesh at international forums. He spoke at the plenary session on poverty eradication at the 18th World IAVE Conference in Barcelona (2004), took part in the ECOSOC High-Level Segment on rural water and sanitation at the United Nations in Geneva (2003), and attended the Asian Civil Society Forum at the UN in Bangkok (2001). More recently he has taken part in the Grand Bargain and localization seminar in Switzerland (2018), the Charter for Change seminar in Denmark (2019), the Global Conference on Localization of Humanitarian Aid in Germany (2022), and South–South exchanges under the ToGETHER programme in Bangkok (2023) and Bali, Indonesia (2025).",
      "He holds BSS (Hons) and MSS degrees from the University of Chittagong, and completed the Global Executive Leadership Initiative course on responsible negotiation with the Harvard Humanitarian Initiative (2022). His recognitions include the Justice Mahbub Murshed Award (2010) and the Begum Rokeya Memorial Award (2009).",
      "As Founding Vice President of CBBCL, he brings this experience in business, trade bodies and community development to the club's leadership."
    ],
    businessProfile: {
      role: "Chairman, Abu Center Shopping Complex; Proprietor, Green Hope Products; Founder & Executive Director, PHALS",
      company: "Abu Center Shopping Complex; Green Hope Products",
      industry: "Manufacturing & Import; Retail & Shopping Complex"
    },
    achievements: [
      "2010 — Justice Mahbub Murshed Award",
      "2010 — Shadinota Andolon Shahid Smriti Award",
      "2009 — EDAF UN Day Award",
      "2009 — Begum Rokeya Memorial Award",
      "2009 — Sher-e-Bangla Award",
      "Master of Social Science (MSS) — University of Chittagong",
      "Bachelor of Social Science (BSS Hons) — University of Chittagong",
      "2022 — Global Executive Leadership Initiative (GELI): Responsible Negotiation, with the Harvard Humanitarian Initiative",
      "2018 — Short course on Refugee Rights, JAIN University, Bangalore, India",
      "2016 — Forest Conservation Connecting to Farming, FES India",
      "2014 — Disaster Risk Management training",
      "2011 — Protection from Gender-Based Violence, Concern Worldwide",
      "2010 — Child Protection and Child Rights, UNICEF and LETI Bangladesh",
      "2005 — Anti-Money Laundering, South Asia Enterprise Development Facility",
      "1999 — International Trade, BIBM, Dhaka",
      "1984 — Youth Leadership Building, UNESCAP and the Ministry of Youth"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Vice President",
      "FBCCI — Former Director; present General Body Member",
      "Cox's Bazar Chamber of Commerce & Industry — Chief Advisor, Member & Former President",
      "Cox's Bazar Civil Society — President",
      "PHALS (Program for Helpless And Lagged Society) — Founder & Executive Director",
      "District Disaster Management Committee — Member",
      "Asia Pacific Refugee Rights Network (APRRN) — Member",
      "Bangladesh Red Crescent Society, Cox's Bazar — Life Member",
      "ADAB (Association of Development Agencies in Bangladesh) — Member",
      "Charter for Change (C4C) — Endorser Member",
      "FNB (Federation of NGOs in Bangladesh) — Member"
    ],
    community: [
      "Humanitarian Response — pre-, during- and post-disaster response with the District Disaster Management Committee, since 2012",
      "Child Protection & Welfare — Executive Committee member, Cox's Bazar Child Protection Platform, since 2025",
      "Livelihood & Job Creation — management and implementation with IOM and the UK FCDO, since 2025",
      "Disaster & Climate Change Support — management, with Malteser International (Germany), since 2023",
      "Child Education — management and implementation, with Global Affairs Canada, since 2023",
      "Tayam Integrated Education Center — management of CSR education for vulnerable children",
      "Environment Conservation — Executive Committee member, National Nishorga Network, since 2018"
    ],
    timeline: [
      { year: "Current", event: "Founding Vice President, Cox's Bazar Boat Club Ltd." },
      { year: "Current", event: "Chairman, Abu Center Shopping Complex" },
      { year: "Current", event: "Proprietor, Green Hope Products" },
      { year: "Current", event: "Founder & Executive Director, PHALS" },
      { year: "2022", event: "Took part in the Global Conference on Localization of Humanitarian Aid, Germany" },
      { year: "2016", event: "Established Green Hope Products" },
      { year: "2010", event: "National delegate to the FWPA seminar in Japan" },
      { year: "2004", event: "Plenary speaker on poverty eradication, 18th World IAVE Conference, Barcelona, Spain" },
      { year: "2003", event: "Took part in the ECOSOC High-Level Segment, United Nations, Geneva" },
      { year: "1999", event: "Established Abu Center Shopping Complex" },
      { year: "1996–2007", event: "Served at Dhaka Bank, rising to Assistant Vice President (AVP)" },
      { year: "1996", event: "Founded PHALS (Program for Helpless And Lagged Society) to serve vulnerable communities" },
      { year: "1987–1995", event: "Foreign Trade Officer, Banque Indosuez (French bank)" }
    ],
    socials: {
      // LinkedIn as name only (no link shared).
      linkedin: "Abu Chowdhury",
      facebook: "https://www.facebook.com/chowdhury.murshed.abu",
      fbcci: "https://fbcci.org/web/profile/mr-abu-morshed-chowdhury"
    }
  },
  {
    id: "farhan-bin-rafiq",
    name: "Farhan Bin Rafiq",
    designation: "Director",
    membershipCode: "CBBCL-FM-02",
    memberNumber: "CBBCL-LM-0002",
    profileSubmitted: true,
    profileRevision: 16,
    quote: "We make mistakes, and mistakes make us.",
    photoAlt: "Official portrait of Farhan Bin Rafiq, Founding Director, Cox's Bazar Boat Club Ltd.",
    bio: [
      "Farhan Bin Rafiq is a founding leader of Cox's Bazar Boat Club Ltd., and an entrepreneur and business professional with a diverse background spanning hospitality, operations, business development, technology and e-commerce.",
      "He is the Founder of Choosify Technologies Ltd., a technology and digital commerce venture focused on product discovery, comparison, trusted sellers and modern e-commerce experiences. He also serves as an advisor and consultant to EZBOOKING.GLOBAL, an online travel and accommodation booking platform, and as Chief Business Consultant to Artveen by Tanveen's Art Escape, a multi-artist creative and art platform.",
      "With more than ten years of professional experience across business operations, hospitality, client and vendor relationship management, business development, service operations and digital platforms, his career has been marked by significant progression — including seven internal promotions — reflecting his leadership, adaptability and operational excellence. He has worked with corporate organizations, international NGOs, strategic stakeholders and cross-functional teams.",
      "Beyond business, Farhan is engaged in youth and community leadership through JCI Cox's Bazar. Joining as a member in 2023, he has progressed to his current role as Local Director, taking part in community, environmental and social development initiatives.",
      "As a Founding Director of Cox's Bazar Boat Club Ltd., he contributes his experience in entrepreneurship, hospitality, tourism, technology, branding and digital presence, operations, and community and stakeholder engagement toward the growth and strategic development of the Club. He also built the Club's official website, cbbcl.org."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Founder, Choosify Technologies Ltd.; Advisor / Consultant, EZBOOKING.GLOBAL; Chief Business Consultant, Artveen by Tanveen's Art Escape",
      company: "Choosify Technologies Ltd.",
      industry: "Technology & E-commerce; Hospitality & Tourism Technology; Digital Creative Platforms",
      interests: "E-commerce; Technology & Digital Platforms; Product Development; Hospitality & Tourism; Business Development; Digital Marketing; Entrepreneurship",
      website: "https://choosify.bd"
    },
    socials: {
      facebook: "https://www.facebook.com/farhanbinrafiq.me",
      linkedin: "https://www.linkedin.com/in/farhanbinrafiq/",
      email: "farhanbinrafiq@gmail.com, ceo@choosify.bd"
    },
    achievements: [
      "Built the official website of Cox's Bazar Boat Club Ltd. (cbbcl.org)",
      "Seven internal promotions over more than ten years of professional experience, reflecting consistent performance and growing management responsibility",
      "Master of Business Administration (MBA)",
      "Bachelor of Business Administration (BBA)"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director",
      "JCI Cox's Bazar — Local Director (member since 2023)"
    ],
    community: [
      "Project Green Cox's Bazar — environmental and tree plantation initiative with JCI Cox's Bazar",
      "ECCHE PURAN — community welfare initiative",
      "Jiboner Nilayon — community engagement under JCI Cox's Bazar",
      "Phire Pawa Hashi — community engagement under JCI Cox's Bazar",
      "JCI Cox's Bazar youth leadership, community development and social welfare initiatives"
    ],
    timeline: [
      { year: "2023", event: "Joined JCI Cox's Bazar as a Member" },
      { year: "2023", event: "Attended the Bangladesh–Thai Chamber of Commerce delegation to Bangkok, Thailand, under Thailand's Ministry of Foreign Affairs" },
      { year: "2025", event: "Hosted the 2025 JCI Cox's Bazar Chain Handover Ceremony as the event's Emcee" },
      { year: "Current", event: "Founding Director, Cox's Bazar Boat Club Ltd." },
      { year: "2026", event: "Local Director, JCI Cox's Bazar" }
    ]
  },
  {
    id: "arifur-rahman",
    name: "Arifur Rahman",
    designation: "Director – Finance",
    tagline: "Entrepreneur | Business Leader | Hospitality & Technology Professional",
    membershipCode: "CBBCL-FM-08",
    memberNumber: "CBBCL-LM-0008",
    profileSubmitted: true,
    profileRevision: 17,
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    quoteAuthor: "Chinese Proverb",
    bio: [
      "Arifur Rahman is a Bangladeshi entrepreneur, business professional, and experienced leader with diverse interests across hospitality, tourism, information technology, e-commerce, and digital business solutions. His professional journey reflects a strong commitment to business operations, financial management, organizational leadership, and sustainable business development.",
      "He serves as Director – Finance at Cox's Bazar Boat Club Ltd. (CBBCL), contributing to financial oversight, institutional development, strategic partnerships, and the club's long-term progress. He emphasizes financial transparency, responsible management, accountability, and the development of a well-structured and sustainable institutional framework.",
      "In the business sector, he serves as the Founder and Chairman of EZCOM.GLOBAL, Founder and Chief Executive Officer (CEO) of EZBOOKING.GLOBAL, and Managing Director of Shopno Bilash Holiday Suites. He is also associated with HELLO IT and HELLO Computer in a directorial capacity. Through these ventures, his professional activities extend across technology, digital services, hospitality, tourism, and service-oriented businesses.",
      "Tourism and accommodation services in Cox's Bazar constitute an important part of his business portfolio. He has experience in hotel operations, guest services, business development, corporate relations, and tourism-related services. His business activities also include providing accommodation and hospitality services to international guests, personnel associated with United Nations agencies, and other foreign professionals. Through EZBOOKING.GLOBAL, he is also working to make travel and accommodation services more accessible, efficient, and technology-driven.",
      "Beyond his business activities, Arifur Rahman remains actively engaged in youth leadership, professional networking, and organizational development. His leadership journey with Junior Chamber International (JCI) began in 2022 as a Founding Member of JCI Cox's Bazar. He subsequently served as Local Treasurer in 2024, Local President in 2025, and Regional Vice President of JCI Bangladesh in 2026. A notable achievement during his leadership tenure was receiving the Asia Star Local President Award at JCI ASPAC 2025, in recognition of his leadership and organizational contributions.",
      "In 2023, he also participated in a Bangkok visit as part of a delegation associated with Bangladesh–Thailand business relations, further enriching his professional exposure and international networking experience.",
      "At Cox's Bazar Boat Club Ltd., his primary objective is to contribute to the club's sustainable growth through financial responsibility, institutional capacity building, strategic collaboration, and long-term planning. By drawing on his experience in business, technology, and hospitality, he remains committed to supporting broader efforts to strengthen tourism, encourage investment, and enhance service standards in Cox's Bazar as an international tourism destination."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Founder & Chairman, EZCOM.GLOBAL; Founder & CEO, EZBOOKING.GLOBAL; Managing Director, Shopno Bilash Holiday Suites; Director, HELLO IT; Director, HELLO Computer; Director, Cafe 365 Ltd.; Advisor, Amreen Artistry",
      company: "EZCOM.GLOBAL; EZBOOKING.GLOBAL; Shopno Bilash Holiday Suites; HELLO IT; HELLO Computer; Cafe 365 Ltd.",
      industry: "Hospitality; Tourism; Information Technology; E-commerce; Digital Business",
      interests: "Financial Management; Hospitality & Tourism; Digital Transformation; Business Development; Strategic Partnerships; Organizational Leadership"
    },
    achievements: [
      "2025 — Asia Star Local President Award, JCI ASPAC 2025",
      "2025 — Graduate, JCI Malaysia Academy, organized by JCI Lutong (Miri, Sarawak), 17 August 2025",
      "Master of Business Administration (MBA)",
      "Master of Laws (LLM)",
      "Bachelor of Business Administration (BBA)",
      "Journalism"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Director – Finance",
      "JCI Bangladesh — Regional Vice President, 2026",
      "JCI Cox's Bazar — Local President, 2025",
      "JCI Cox's Bazar — Local Treasurer, 2024",
      "JCI Cox's Bazar — Founding Member, 2022",
      "Club JCI Limited — Founding Member, 2022",
      "Amreen Artistry — Advisor"
    ],
    socials: {
      // LinkedIn and Facebook were shared by profile name only.
      linkedin: "Arifur Rahman",
      facebook: "Arifur Rahman",
      instagram: "https://www.instagram.com/arifurahman007"
    },
    timeline: [
      { year: "Current", event: "Director – Finance, Cox's Bazar Boat Club Ltd." },
      { year: "Current", event: "Founder & Chairman, EZCOM.GLOBAL." },
      { year: "Current", event: "Founder & CEO, EZBOOKING.GLOBAL — making travel and accommodation services more accessible, efficient, and technology-driven." },
      { year: "Current", event: "Managing Director, Shopno Bilash Holiday Suites — accommodation and hospitality services in Cox's Bazar." },
      { year: "2026", event: "Regional Vice President, JCI Bangladesh." },
      { year: "2025", event: "Local President, JCI Cox's Bazar." },
      { year: "2025", event: "Received the Asia Star Local President Award at JCI ASPAC 2025." },
      { year: "2024", event: "Local Treasurer, JCI Cox's Bazar." },
      { year: "2023", event: "Participated in a Bangkok visit as part of a delegation associated with Bangladesh–Thailand business relations." },
      { year: "2022", event: "Founding Member, JCI Cox's Bazar." },
      { year: "2022", event: "Founding Member, Club JCI Limited." }
    ]
  },
  {
    id: "mehedi-hasan",
    name: "Mehedi Hasan",
    designation: "Director",
    membershipCode: "CBBCL-FM-03",
    memberNumber: "CBBCL-LM-0003",
    profileSubmitted: true,
    profileRevision: 3,
    bio: [
      "Mehedi Hasan is a Founder Director of Cox's Bazar Boat Club Limited (CBBCL). His professional experience brings together business leadership, teaching, and training in the tourism and hospitality sector.",
      "He is the Managing Director of M I Enterprise and the Owner of Humasa Fashion Gallery. His business activities also include importing products from China and Pakistan.",
      "From 2012 to 2026, he worked in teaching. Between 2017 and 2023, he served as Coordinator and Trainer in the Tourism and Hospitality Sector at SEIP under the Ministry of Finance. He also serves as a Guest Teacher at Cox's Bazar Government Polytechnic Institute.",
      "His professional development includes training in the methodology of CBTA and an international course in food safety and hygiene completed at Nanyang Polytechnic Institute in Singapore. These roles reflect his involvement in enterprise, education, and hospitality-related professional development."
    ],
    vision: [
      "His vision for CBBCL is to build a welcoming, well-managed boat club where members and guests can enjoy safe, high-quality boating and hospitality experiences. He wants the Club to contribute positively to Cox's Bazar through responsible use of coastal and marine resources, care for the environment, and strong connections with the local community.",
      "He sees tourism, hospitality, and professional learning as areas that can support one another, creating opportunities for young people and local businesses while respecting the coast that makes the region distinctive. He also aims to promote awareness of coastal responsibility among members and visitors, supporting a Club culture that values both leisure and stewardship.",
      "Through member participation and responsible development, he hopes CBBCL will become a respected destination for recreation, community connection, and sustainable coastal tourism."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Managing Director, M I Enterprise; Owner, Humasa Fashion Gallery; Guest Teacher, Cox's Bazar Government Polytechnic Institute; Trainer in the Tourism and Hospitality Sector",
      company: "M I Enterprise; Humasa Fashion Gallery; Cox's Bazar Government Polytechnic Institute",
      industry: "Tourism and Hospitality; Education and Training; Enterprise",
      interests: "Import and trading; Enterprise; Tourism and Hospitality; Education and Training",
      website: "https://mienterprise.shop"
    },
    socials: {
      facebook: "https://www.facebook.com/mehedihasan546",
      email: "mehedihasan546@gmail.com"
    },
    achievements: [
      "2018 — International course in Food Safety and Hygiene, Nanyang Polytechnic Institute, Singapore",
      "2016 — Training in the methodology of CBTA, BTEB"
    ],
    timeline: [
      { year: "2012–2026", event: "Teaching" },
      { year: "2017–2023", event: "Coordinator and Trainer in the Tourism and Hospitality Sector at SEIP, Ministry of Finance" }
    ]
  },
  {
    id: "md-imran-alam",
    name: "Md Imran Alam",
    designation: "Director",
    membershipCode: "CBBCL-FM-04",
    memberNumber: "CBBCL-LM-0004",
    profileSubmitted: true,
    profileRevision: 7,
    bio: [
      "Md. Imran Alam is a Director of Cox's Bazar Boat Club Limited (CBBCL), with professional experience spanning entrepreneurship, hospitality, commercial property, agriculture, dairy farming, and fisheries.",
      "He is the Managing Director of N. Alam Shopping Complex in Court Bazar, Ukhiya, Cox's Bazar, and the Proprietor of Shuvo Guest House and Hena Dairy Farm & Fish Farm. Through these ventures, he has developed experience in business management, hospitality operations, commercial property management, and local enterprise development.",
      "Alongside his business activities, he is actively involved in sports administration and community development. He serves as the Treasurer of the Ukhiya Upazila Players Association and is a Member of the Cox's Bazar District Players Association, contributing to the development and welfare of local athletes and sports activities.",
      "His professional journey reflects a commitment to entrepreneurship, responsible leadership, community engagement, and the development of opportunities for local businesses, young people, and the wider community of Cox's Bazar."
    ],
    vision: [
      "His vision for CBBCL is to contribute to building a professionally managed, welcoming, and responsible boat club that promotes recreation, tourism, boating, and meaningful social connections in Cox's Bazar.",
      "He believes CBBCL can play an important role in strengthening Cox's Bazar's tourism potential while creating opportunities for local businesses, young people, and the wider community. His vision includes promoting responsible boating, safety, environmental awareness, and a culture of respect among members and visitors.",
      "Through active member participation, responsible management, and community engagement, he hopes CBBCL will become a respected platform for recreation, networking, tourism, and sustainable coastal development in Cox's Bazar."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Managing Director, N. Alam Shopping Complex; Proprietor, Shuvo Guest House; Proprietor, Hena Dairy Farm & Fish Farm",
      company: "N. Alam Shopping Complex; Shuvo Guest House; Hena Dairy Farm & Fish Farm",
      industry: "Hospitality & Tourism; Commercial Real Estate; Agriculture & Dairy Farming; Fisheries",
      interests: "Real Estate & Commercial Development; Hospitality & Tourism; Agriculture & Dairy; Fisheries; Community & Sports Development"
    },
    achievements: [
      "Entrepreneurial Leadership — Managing Director of N. Alam Shopping Complex and Proprietor of Shuvo Guest House and Hena Dairy Farm & Fish Farm",
      "Business Diversification — Active involvement across hospitality, commercial real estate, agriculture, dairy farming and fisheries",
      "Business Development — Building and managing diversified business ventures in Ukhiya, Cox's Bazar since 2018",
      "Sports Leadership — Serving as Treasurer of the Ukhiya Upazila Players Association, contributing to sports administration and athlete welfare",
      "District-Level Sports Engagement — Member of the Cox's Bazar District Players Association, supporting the development of local athletes and sports activities"
    ],
    socials: {
      facebook: "https://www.facebook.com/moh.imarana.alama",
      // Instagram invite link as supplied (does not open the profile directly; replace with instagram.com/<username> when available).
      instagram: "https://www.instagram.com/invites/contact/?utm_content=1dvzeqw&stkn=19l6mc05scxx1",
      email: "imranalam3333@gmail.com"
    },
    memberships: [
      "Cox's Bazar Boat Club Limited (CBBCL) — Director",
      "Ukhiya Upazila Players Association — Treasurer",
      "Cox's Bazar District Players Association — Member"
    ],
    timeline: [
      { year: "2018–Present", event: "Entrepreneurship & Business Management — started and developed entrepreneurial ventures in hospitality, commercial property, agriculture, dairy farming, and fisheries in Ukhiya, Cox's Bazar." },
      { year: "2018–Present", event: "Managing Director, N. Alam Shopping Complex — leading the management and development of a major commercial establishment in Court Bazar, Ukhiya, with a focus on business operations, commercial management, and local enterprise development." },
      { year: "2018–Present", event: "Proprietor, Shuvo Guest House — managing operations in the hospitality and accommodation sector, with a focus on service, guest experience, and business management." },
      { year: "2018–Present", event: "Proprietor, Hena Dairy Farm & Fish Farm — engaged in diversified agricultural activities, including dairy farming and fisheries." },
      { year: "2026–Present", event: "Treasurer, Ukhiya Upazila Players Association — leadership in sports administration, contributing to financial management, organizational activities, and the welfare and development of local athletes." },
      { year: "2026–Present", event: "Member, Cox's Bazar District Players Association — supporting sports development and the welfare of athletes at the district level." }
    ]
  },
  {
    id: "maimunal-karim-jisan",
    name: "Maimunul Karim Jisan",
    designation: "Director",
    membershipCode: "CBBCL-FM-06",
    memberNumber: "CBBCL-LM-0006",
    profileSubmitted: true,
    profileRevision: 2,
    photoAlt: "Maimunul Karim Jisan, Director, Cox's Bazar Boat Club Ltd., and Founder & Managing Director, BengalWeft",
    bio: [
      "Maimunul Karim Jisan is a young entrepreneur and technology-driven business leader from Cox's Bazar, building an export-oriented garments enterprise that connects Bangladesh with international markets.",
      "He is the Founder and Managing Director of BengalWeft, a garments manufacturing business based in Chattogram that exports garments abroad. He leads the company's overall direction and growth and takes its strategic business decisions. He is directly involved in managing buyers, including building and maintaining relationships with international clients, and oversees production management so that quality, efficiency and delivery commitments are met. Through his leadership, he focuses on running a professionally managed, export-oriented enterprise.",
      "Alongside his business, he has a strong academic and technical background. He holds a B.Sc. in Computer Science and Engineering from East Delta University, Chattogram, and was named to the University's Dean's List of Honor Students. He completed a data science internship with Brainwave Matrix Solutions in Noida, Uttar Pradesh, India, and applies skills in data analysis, artificial intelligence and problem-solving to production planning, operational efficiency and data-driven decision-making. He is also an active researcher in machine learning and computer vision: his peer-reviewed work on lightweight deep learning models was published in Applied Soft Computing (Elsevier, 2026), and he is a Kaggle Legacy Expert.",
      "His entrepreneurial approach combines practical business leadership with modern technology. He aims to build an efficient, sustainable enterprise that contributes to Bangladesh's garments export sector and to local economic development. Beyond business, he is committed to community welfare, having volunteered with Volunteer for Bangladesh on the \"My Road, My Responsibility\" road-safety campaign in Chittagong.",
      "As a Director of Cox's Bazar Boat Club Ltd., he supports the club's goal of becoming a distinguished socio-cultural and nautical institution in Cox's Bazar, bringing an entrepreneurial, transparent and technology-oriented perspective to its management and member services. As a son of Cox's Bazar, he is committed to the growth of the club and the wider community."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Founder & Managing Director, BengalWeft",
      company: "BengalWeft",
      industry: "Garments Manufacturing and Export (Readymade Garments, RMG)",
      interests: "Garments Manufacturing; Export & International Trade; Sustainable Business Growth; Employment Generation",
      website: "https://www.bengalweft.com"
    },
    achievements: [
      "2026 — Peer-reviewed journal publication: LiteCNN4Rice, Applied Soft Computing, Elsevier (Vol. 199, 115356)",
      "2025 — Kaggle Legacy Expert, Kaggle (Google LLC)"
    ],
    memberships: [
      "Cox's Bazar Boat Club Limited — Board of Directors / Executive Member",
      "Junior Chamber International (JCI), Cox's Bazar — Member",
      "Volunteer for Bangladesh (VBD), Chittagong — Member",
      "EDU Computer Club — Member"
    ],
    community: [
      "Employment generation & local economic development — BengalWeft, 18 factory employees in Chattogram; Founder & Managing Director, ongoing",
      "Community development & social initiatives — local communities in Chattogram and Cox's Bazar; ongoing",
      "Responsible corporate practices — promotes professionally managed and sustainable business ventures for business stakeholders and local communities; ongoing",
      "\"My Road, My Responsibility\" road safety awareness campaign — Volunteer for Bangladesh (VBD), Chittagong; volunteer, Dec 2019 – Jan 2020, promoting responsible road behavior and traffic rule awareness to help reduce accidents"
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/maimunul-karim-jisan-6371a7140",
      facebook: "https://www.facebook.com/maimunulkjisan",
      instagram: "https://www.instagram.com/maimunul_k_thisan",
      wechat: "maimunul0",
      email: "maimunulkjisan0@gmail.com, maimunul@bengalweft.com"
    },
    timeline: [
      { year: "2025", event: "Started leading BengalWeft, a garments manufacturing and export business in Chattogram." },
      { year: "2025", event: "Became a Kaggle Legacy Expert." },
      { year: "2024–2025", event: "Completed a data science internship with Brainwave Matrix Solutions, India." },
      { year: "2024", event: "Graduated with a B.Sc. in CSE and was named to the Dean's List of Honor Students." }
    ]
  },
  {
    id: "md-rezaul-kabir-reza",
    name: "Mohammad Rezaul Kabir Reza",
    designation: "Director",
    membershipCode: "CBBCL-FM-07",
    memberNumber: "CBBCL-LM-0007",
    profileSubmitted: true,
    profileRevision: 2,
    photoAlt: "Mohammad Rezaul Kabir Reza, Founding Director of Cox's Bazar Boat Club Ltd.",
    bio: [
      "Mohammad Rezaul Kabir Reza is a business leader and entrepreneur based in Bangladesh, with extensive experience across agro-industries, healthcare, information technology, hospitality, corporate investment and construction.",
      "He serves as Managing Director (Operation) of M/S Chaytara Group, where he is also Managing Director of M/S Chaytara Rice & Flour Mill, M/S Chaytara CRH Mill and M/S Chaytara Rice Agency, and a Director of M/S Chaytara Construction and M/S Chaytara Pushti Mill. He is Proprietor & CEO of Chaytara Agro.",
      "He is the Founder, CEO & Chairman of Ultragen Ltd. and Beach Bistro Restaurant, Founder & CEO of Click Village Ltd., Founder & Proprietor of Bay Fresh Grocery, Founder, CEO & Proprietor of R.K Builders, and Proprietor of R.K Poultry. He is also a Director of Sharfians Hospital and of Organic Farm and Eco Park PLC.",
      "Beyond his commercial ventures, he is an authorized E-Voucher vendor for the World Food Programme (WFP), supplying essential food items to support refugees through M/S Chaytara Rice & Flour Mill.",
      "He is a Standing Committee Member of the Cox's Bazar Chamber of Commerce & Industry, a member of Junior Chamber International (JCI), and a Founding Director on the board of Cox's Bazar Boat Club Ltd."
    ],
    businessProfile: {
      role: "Managing Director (Operation), M/S Chaytara Group; Proprietor & CEO, Chaytara Agro; Authorized E-Voucher Vendor, World Food Programme (WFP); Founder, CEO & Chairman, Beach Bistro Restaurant; Founder, CEO & Chairman, Ultragen Ltd.; Founder & Proprietor, Bay Fresh Grocery; Founder, CEO & Proprietor, R.K Builders; Proprietor, R.K Poultry; Founder & CEO, Click Village Ltd.; Managing Director, M/S Chaytara Rice & Flour Mill; Managing Director, M/S Chaytara CRH Mill; Managing Director, M/S Chaytara Rice Agency; Director, M/S Chaytara Construction; Director, M/S Chaytara Pushti Mill; Director, Sharfians Hospital; Director, Organic Farm and Eco Park PLC",
      company: "Ultragen Ltd.; Chaytara Agro; Click Village Ltd.; M/S Chaytara Rice & Flour Mill; M/S Chaytara Construction; M/S Chaytara CRH Mill; M/S Chaytara Pushti Mill; M/S Chaytara Rice Agency; Beach Bistro Restaurant; Bay Fresh Grocery; M/S R.K Builders; R.K Poultry; Sharfians Hospital; Organic Farm and Eco Park PLC",
      industry: "Rice & Flour Milling; CRH Milling; Supply & Distribution; Agro Business; Restaurant; Information Technology; Construction; Logistics; Real Estate; Tourism; Hospitality; Fish & Meat Supply; Poultry Farming",
      interests: "Supply Chain; Sustainable Resource Management; Community Development; Business Development; Corporate Leadership; Sales Strategy; Financial Management; Strategic Partnership; Sustainable Business Growth; Tourism; Food Supply Management; Agro Business; IT Firm; Construction; Real Estate; Rice, Flour & CRH Milling; Milk Supply & Cattle Fattening",
      website: "https://www.ultragen.bd"
    },
    achievements: [
      "2026 — Founding Director, Cox's Bazar Boat Club Ltd. (CBBCL)",
      "2020 — Agro Business",
      "2019 — IT Business",
      "2014 — Rice & Supply Business"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director",
      "Cox's Bazar Chamber of Commerce & Industry — Standing Committee Member",
      "Junior Chamber International (JCI) — Member"
    ],
    timeline: [
      { year: "Current", event: "Managing Director (Operation), Chaytara Group — corporate and administrative leadership across the diversified business group's operations." },
      { year: "Current", event: "Standing Committee Member, Cox's Bazar Chamber of Commerce & Industry — professional leadership within the local business and commercial community." },
      { year: "2026", event: "Appointed Founding Director of Cox's Bazar Boat Club Ltd., leading the establishment and development of CBBCL as a prestigious social, cultural and nautical institution." },
      { year: "8+ Years", event: "Founder, CEO & Chairman of Ultragen Ltd., Chaytara Agro, Beach Bistro Restaurant, Bay Fresh Grocery, R.K Builders and R.K Poultry — leading business development and operations across IT, milk supply and cattle fattening, food supply and related commercial activities." }
    ],
    socials: {
      facebook: "https://www.facebook.com/rezaulkabir.shohel"
    }
  },
  {
    id: "amzad-mahmud",
    name: "Amzad Mahmud",
    // Core Secretariat seat, shown before Director – Finance.
    designation: "Director – Administration",
    level: 3,
    orderIndex: 0,
    membershipCode: "CBBCL-FM-09",
    memberNumber: "CBBCL-LM-0009"
  },
  {
    id: "ak-rubel",
    name: "Ahmedul Karim Rubel",
    designation: "Director",
    membershipCode: "CBBCL-FM-10",
    memberNumber: "CBBCL-LM-0010",
    profileSubmitted: true,
    profileRevision: 4,
    photoAlt: "Official portrait of Ahmedul Karim Rubel, Member of the Board of Directors, Cox's Bazar Boat Club Ltd.",
    bio: [
      "Ahmedul Karim Rubel is a dynamic business leader, entrepreneur, and a founding member of Cox's Bazar Boat Club Limited. He completed his Master of Business Administration (MBA) from the International Islamic University Chittagong (IIUC) in 2016.",
      "Embarking on his entrepreneurial journey in 2017, he established M/S Shara Traders as its sole proprietor. Under his leadership, the firm has built a strong reputation as a trusted government contractor and supplier, delivering high-quality products and services across various development projects.",
      "Expanding his business horizons in 2024, he entered the automobile industry as a Managing Partner at Maher Trading. Specializing in the import and retail of Japanese reconditioned vehicles, he has rapidly established a strong presence in the automotive market.",
      "From the inception of Cox's Bazar Boat Club Limited, Mr. Rubel has been deeply involved in shaping its vision, planning, and execution. As a founding member of the Board of Directors, he plays a key role in structuring the club's organization, operations, and long-term strategic initiatives.",
      "Driven by a passion to unlock the immense potential of marine and water-based tourism in Cox's Bazar, his goal is to establish a modern, safe, and world-class boat club. He is actively dedicated to advancing marine tourism, yachting, water sports, eco-friendly coastal recreation, and building a prestigious, sustainable club community."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Proprietor, M/S Shara Traders; Managing Partner, Maher Trading",
      company: "M/S Shara Traders; Maher Trading",
      industry: "Contracting; Supplying; Automobile Import",
      interests: "Public Contracting & Supply Chain; Japanese Car Import & Sales"
    },
    memberships: [
      "Cox's Bazar Boat Club Limited — Board of Directors / Executive Member"
    ],
    socials: {
      facebook: "https://www.facebook.com/rubel.rf",
      email: "ak.rubel1989@gmail.com, ak.rubel91@gmail.com"
    },
    timeline: [
      { year: "2016", event: "Successfully completed an MBA at International Islamic University Chittagong (IIUC)." },
      { year: "2017", event: "Established M/S Shara Traders as proprietor in the contracting and supplying business and commenced operations." },
      { year: "2024", event: "Expanded into the automobile industry as a partner in Maher Trading, starting a Japanese reconditioned car import and showroom business." }
    ]
  },
  {
    id: "mohammed-elias",
    name: "Mohammad Eliyas",
    designation: "Director",
    membershipCode: "CBBCL-FM-11",
    memberNumber: "CBBCL-LM-0011"
  },
  {
    id: "md-yousuf",
    name: "Md Yousuf",
    designation: "Director",
    membershipCode: "CBBCL-FM-12",
    memberNumber: "CBBCL-LM-0012",
    profileSubmitted: true,
    profileRevision: 3,
    photoAlt: "Md Yousuf, Founding Director, Cox's Bazar Boat Club Ltd.",
    bio: [
      "Md Yousuf is a dynamic business leader, entrepreneur, and prominent community organizer based in Cox's Bazar, Bangladesh. He serves as a Founding Director of Cox's Bazar Boat Club Ltd., contributing to the strategic establishment and executive leadership of the regional maritime club.",
      "In his principal commercial venture, Mr. Yousuf is the Proprietor of M/S Yusuf & Brothers Filling Station, located at Palongkhali, Ukhia, Cox's Bazar. Established in May 2016, his business serves as a critical fuel, energy, and LPG supply logistics hub in the region. Under his leadership, the company maintains key strategic fuel and gas distribution agreements with major international humanitarian organizations, including Save the Children, Médecins Sans Frontières (MSF), and Handicap International (HI), supporting vital logistics across Ukhiya and Cox's Bazar.",
      "Beyond his business success, Mr. Yousuf is actively engaged in corporate networking and youth leadership. He holds a key leadership position as Treasurer of JCI Cox's Bazar for 2026. In 2026, he represented Bangladesh as an official delegate at the JCI Asia and the Pacific Conference held in Niigata, Japan. As a Founding Director of Cox's Bazar Boat Club Ltd., he is dedicated to fostering regional tourism, premium hospitality, and sustainable maritime development in Cox's Bazar."
    ],
    businessProfile: {
      // Multiple entries are separated by "; ".
      role: "Proprietor, M/S Yusuf & Brothers Filling Station",
      company: "M/S Yusuf & Brothers Filling Station",
      industry: "Energy, Fuel & LPG Supply Logistics",
      interests: "Petroleum & LPG Distribution; Institutional Fuel Supply Partnerships; Regional Commerce"
    },
    achievements: [
      "2026 — Founding Director appointment, Cox's Bazar Boat Club Ltd.",
      "2026 — Official Delegate, JCI Asia and the Pacific Conference (JCI International, Niigata, Japan)",
      "2016 – Present — Key humanitarian energy & LPG logistics partner for Save the Children, MSF and Handicap International in Ukhiya & Cox's Bazar"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director / Board Member",
      "JCI Cox's Bazar — Treasurer (2026)"
    ],
    community: [
      "Humanitarian logistics support — energy, fuel & LPG supply partner (ongoing) for Save the Children, MSF and Handicap International, ensuring critical fuel and gas supply for humanitarian operations in Cox's Bazar and Ukhiya",
      "Civic & youth development — Treasurer (2026) & contributor (ongoing) with JCI Cox's Bazar, taking part in financial governance, community service, leadership growth and civic welfare projects"
    ],
    socials: {
      facebook: "https://www.facebook.com/md.yousuf.353",
      instagram: "https://www.instagram.com/md_yousuf_ib",
      email: "yousufm503@gmail.com"
    },
    timeline: [
      { year: "2026", event: "Appointed as Founding Director of Cox's Bazar Boat Club Ltd. (Estd. 2026)." },
      { year: "2026", event: "Assumed office as Treasurer of JCI Cox's Bazar for 2026 and represented Bangladesh at the JCI Asia and the Pacific Conference in Niigata, Japan." },
      { year: "2016", event: "Established M/S Yusuf & Brothers Filling Station (commenced 26 May 2016) at Palongkhali, Ukhia, Cox's Bazar." }
    ]
  },
  {
    id: "nurul-absar",
    name: "Nurul Abser",
    designation: "Director",
    membershipCode: "CBBCL-FM-13",
    memberNumber: "CBBCL-LM-0013",
    profileSubmitted: true,
    profileRevision: 3,
    bio: [
      "Nurul Abser is a Founder Director of Cox's Bazar Boat Club Limited (CBBCL). He brings a diverse professional background combining humanitarian work, leadership, career development, networking, and training in the tourism and hospitality sector.",
      "He is an experienced humanitarian professional with extensive experience working with various International Non-Governmental Organizations (INGOs) and United Nations (UN) agencies. Through his professional journey, he has developed strong expertise in coordination, leadership, stakeholder engagement, capacity building, and professional networking.",
      "As a Founder Director of CBBCL, he is also committed to promoting tourism, hospitality, professional networking, and career development opportunities in Cox's Bazar. His experience across the humanitarian and tourism sectors enables him to connect people, organizations, and opportunities while contributing to the sustainable development of the local community and tourism industry."
    ],
    businessProfile: {
      role: "Executive Director, Admin & Finance",
      company: "Palong Group",
      industry: ""
    },
    socials: {
      // Profile names only, as he preferred not to share links.
      linkedin: "Nurul Abser",
      facebook: "Nurul Abser",
      email: "nabsercxb@gmail.com"
    }
  },
  {
    id: "ziaul-haque",
    name: MD_ZIAUL_HOQUE.name,
    designation: "Director",
    membershipCode: "CBBCL-FM-14",
    memberNumber: "CBBCL-LM-0014"
  },
  {
    id: "reshedul-evu",
    name: "Rasadul Maimun Evo",
    designation: "Director",
    membershipCode: "CBBCL-FM-15",
    memberNumber: "CBBCL-LM-0015",
    photoUrl: RESHEDUL_EVU_IMAGE,
    businessProfile: {
      // Multiple businesses are separated by "; " so they survive the admin form's single-line company field.
      company: "Rasad Filling Station; Rasad LPG Filling Station; M/S Mijab Traders; M/S Mawa LPG Cylinder Refilling Station; M/S RMM Brick Manufacturing; M/S RMM Salt Crushing Industry; M/S RMM Rubber Plantation",
      role: "Proprietor",
      industry: ""
    }
  },
  {
    id: "mohammed-anwarul-islam",
    name: "Mohammed Anwarul Islam",
    designation: "Director",
    membershipCode: "CBBCL-FM-17",
    memberNumber: "CBBCL-LM-0017",
    level: 4,
    profileSubmitted: true,
    profileRevision: 11,
    photoAlt: "Mohammed Anwarul Islam, Founding Director of Cox's Bazar Boat Club Ltd.",
    bio: [
      "Mohammed Anwarul Islam is a Cox's Bazar-based entrepreneur and business leader associated with NF Enterprise and NF Group, with business interests spanning petroleum distribution, filling stations, LPG supply, automotive services, logistics and commercial distribution. NF Enterprise traces its origins to a service workshop established in 1997, from which it expanded into a diversified operation serving commercial, institutional and humanitarian-sector customers.",
      "As Proprietor of NF Enterprise and Chairman of NF Group, he is associated with a portfolio that includes Ideal Petroleum Ltd., NF Properties, NF Enterprise, Autocox, Hadi Organic Agro Complex and related ventures. He is also a successful importer, notably of reconditioned vehicles. The group's activities include fuel and LPG distribution, vehicle imports, automotive servicing, agent banking and digital financial services.",
      "The group works with multinational and local businesses, construction contractors and humanitarian organizations, including fuel supply and LPG cylinder distribution. He is a CIP (Commercially Important Person) and serves as Senior Vice President of the Cox's Bazar Chamber of Commerce for the 2025–2027 term. His professional affiliations also include leadership roles in petroleum and auto-LPG industry associations, as well as memberships in business chambers and the Bangladesh Red Crescent Society.",
      "As a Founding Director of Cox's Bazar Boat Club Ltd., he brings experience in enterprise development, operational logistics, business partnerships and professional networking. His background aligns with the Club's ambition to establish a distinguished socio-cultural institution in Cox's Bazar."
    ],
    businessProfile: {
      role: "Chairman, NF Group; Proprietor, NF Enterprise; Importer",
      company: "NF Group; NF Enterprise; Ideal Petroleum Ltd.; NF Properties; Autocox; Hadi Organic Agro Complex; Ideal Filling Station",
      industry: "Petroleum & Fuel Distribution; LPG Filling & Cylinder Supply; Import & Trade; Automotive Sales & Servicing; Logistics & Transport; Property; Agro-business; Financial-service Distribution",
      interests: "Fuel Retail & Distribution; LPG Logistics; Corporate & Institutional Supply; Vehicle Imports; Business Development; Operations; Strategic Partnerships"
    },
    achievements: [
      "CIP (Commercially Important Person), Government of Bangladesh",
      "2025–2027 — Senior Vice President, Cox's Bazar Chamber of Commerce"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director",
      "Chittagong Petrol Pump Owners Association — Vice President",
      "Cox's Bazar Auto LPG Owners Association — President",
      "Cox's Bazar Chamber of Commerce — Senior Vice President (2025–2027)",
      "Commonwealth of Independent States of Bangladesh Chamber of Commerce & Industry — Member",
      "BARVIDA (Bangladesh Reconditioned Vehicles Importers and Dealers Association) — Member",
      "FBCCI (Federation of Bangladesh Chambers of Commerce & Industry) — General Body Member",
      "Bangladesh Red Crescent Society — Member"
    ],
    socials: {
      // Icon placeholders until his links are supplied (shown as icons with labels, not clickable).
      facebook: "Facebook",
      linkedin: "LinkedIn",
      website: "Website",
      fbcci: "https://fbcci.org/web/profile/mr-mohammed-anwarul-islam",
      email: "anwar_nfe@yahoo.com"
    },
    timeline: [
      { year: "Current", event: "Founding Director, Cox's Bazar Boat Club Ltd." },
      { year: "Current", event: "Chairman, NF Group" },
      { year: "Current", event: "Proprietor, NF Enterprise" },
      { year: "Current", event: "Importer, including reconditioned vehicles" },
      { year: "2025–2027", event: "Senior Vice President, Cox's Bazar Chamber of Commerce" },
      { year: "Current", event: "President, Cox's Bazar Auto LPG Owners Association" },
      { year: "Current", event: "Vice President, Chittagong Petrol Pump Owners Association" },
      { year: "1997", event: "NF Enterprise begins as a service workshop, later expanding into fuel and LPG filling, logistics, automotive and distribution ventures" }
    ]
  },
  {
    id: "atiqul-islam",
    name: "Atiqul Islam",
    designation: "Director",
    membershipCode: "CBBCL-FM-18",
    memberNumber: "CBBCL-LM-0018",
    level: 4,
    profileSubmitted: true,
    profileRevision: 5,
    photoAlt: "Atiqul Islam, Founding Director of Cox's Bazar Boat Club Ltd.",
    bio: [
      "Atiqul Islam is a Cox's Bazar-based entrepreneur and contractor with a longstanding presence in construction and infrastructure development. He is associated with Unnayan International, an enterprise established in Cox's Bazar in 1984, and is recognised as its proprietor and a key figure in its development.",
      "His professional interests extend to construction contracting, ready-mix concrete and related business activities. Alongside his commercial responsibilities, he has held leadership and membership roles within the contractor and business communities, including serving as former President of the District Contractor Association and as a member of FBCCI and the Cox's Bazar Chamber of Commerce & Industry. He was a CIP (Commercially Important Person) from 2008 to 2019.",
      "As a Founding Director of Cox's Bazar Boat Club Ltd., he joins the Club's institutional leadership with experience in entrepreneurship, contracting and business development."
    ],
    businessProfile: {
      role: "Chairman, Unnayan International & Unnayan Ready Mix Group of Companies",
      company: "Unnayan International; Unnayan Ready Mix Concrete; Samriddhi Multipurpose Aquaculture Facility & Research Centre",
      industry: "Construction Contracting; Infrastructure Development (jetty, road, rubber-dam and bridge works); Ready-mix Concrete; Aquaculture",
      interests: "Construction Contracting & Infrastructure; Project Implementation; Ready-mix Concrete; Business Leadership & Organizational Development; Industry & Business Association Engagement"
    },
    achievements: [
      "2008–2019 — CIP (Commercially Important Person), Government of Bangladesh",
      "2008, 2009 & 2010 — Recognised among Cox's Bazar's highest taxpayers",
      "2016 — Highest-taxpayer recognition, Cox's Bazar"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director",
      "District Contractor Association — Former President",
      "FBCCI (Federation of Bangladesh Chambers of Commerce & Industry) — Member",
      "Cox's Bazar Chamber of Commerce & Industry — Member"
    ],
    socials: {
      // Icon placeholders until his links are supplied (shown as icons with labels, not clickable).
      facebook: "Facebook",
      linkedin: "LinkedIn",
      website: "https://www.unnayanint.com",
      email: "unnayancox@gmail.com"
    },
    timeline: [
      { year: "Current", event: "Founding Director, Cox's Bazar Boat Club Ltd." },
      { year: "Current", event: "Chairman, Unnayan International & Unnayan Ready Mix Group of Companies" },
      { year: "2008–2019", event: "CIP (Commercially Important Person), Government of Bangladesh" },
      { year: "2016", event: "Highest-taxpayer recognition, Cox's Bazar" },
      { year: "2008–2010", event: "Recognised among Cox's Bazar's highest taxpayers" },
      { year: "1984", event: "Unnayan International begins operations in Cox's Bazar, later undertaking jetty, road, rubber-dam and bridge works" }
    ]
  },
  {
    id: "nadia-siddika",
    name: "Nadia Siddika",
    designation: "Director",
    membershipCode: "CBBCL-FM-19",
    memberNumber: "CBBCL-LM-0019",
    level: 4,
    profileSubmitted: true,
    profileRevision: 1,
    photoAlt: "Nadia Siddika, Founding Director of Cox's Bazar Boat Club Ltd.",
    bio: [
      "Nadia Siddika is a distinguished civil engineer, entrepreneur and compassionate humanitarian whose journey reflects a harmonious blend of academic excellence, professional leadership and devotion to family.",
      "Born in Dhaka, Bangladesh, she pursued her passion for engineering at the Military Institute of Science and Technology (MIST), where she earned both her Bachelor of Science (BSc) and Master of Science (MSc) degrees in Civil Engineering. Continuing her pursuit of knowledge and academic distinction, she is currently pursuing her PhD in Civil Engineering at MIST.",
      "Beyond academia, Nadia has established herself as a visionary entrepreneur, serving as the Chairman of Kuthi Group, with interests in real estate, construction and hospitality. Her leadership embodies ambition, integrity and a commitment to meaningful progress.",
      "A firm believer in social responsibility, Nadia actively participates in humanitarian and Corporate Social Responsibility (CSR) initiatives. Her philanthropic efforts include supporting communities affected by natural disasters, organizing charitable activities during Eid festivals, and distributing warm clothing among underprivileged people during winter. She believes that true success is measured not merely by personal achievements but by the positive difference one makes in the lives of others.",
      "Residing in Dhaka, Nadia shares a fulfilling family life with her husband, Lieutenant Colonel Mirazul Islam, Engineers, and their six-year-old daughter. Beyond her professional commitments, she finds joy in photography, listening to music and travelling, embracing opportunities to discover new cultures, landscapes and perspectives.",
      "Guided by perseverance, compassion and an enduring thirst for knowledge, Nadia aspires to leave a meaningful legacy through engineering, entrepreneurship and service to humanity."
    ],
    businessProfile: {
      role: "Chairman",
      company: "Kuthi Group",
      industry: "Real Estate; Construction; Hospitality",
      interests: "Construction"
    },
    achievements: [
      "MSc in Civil Engineering — Military Institute of Science and Technology (MIST)",
      "BSc in Civil Engineering — Military Institute of Science and Technology (MIST)",
      "PhD in Civil Engineering (in progress) — MIST"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director"
    ],
    community: [
      "Disaster relief — supporting communities affected by natural disasters",
      "Eid charitable activities — organizing charitable programmes during Eid festivals",
      "Winter clothing distribution — warm clothing for underprivileged people during winter"
    ],
    socials: {
      // Icon placeholders until her links are supplied (shown as icons with labels, not clickable).
      facebook: "Facebook",
      linkedin: "LinkedIn",
      website: "Website"
    },
    timeline: [
      { year: "Current", event: "Founding Director, Cox's Bazar Boat Club Ltd." },
      { year: "Current", event: "Chairman, Kuthi Group (real estate, construction & hospitality)" },
      { year: "Current", event: "PhD candidate in Civil Engineering, Military Institute of Science and Technology (MIST)" },
      { year: "MSc", event: "Master of Science in Civil Engineering, MIST" },
      { year: "BSc", event: "Bachelor of Science in Civil Engineering, MIST" }
    ]
  },
  {
    id: "tashin-lutfur",
    name: "Tashin Lutfur",
    designation: "Director",
    membershipCode: "CBBCL-FM-20",
    memberNumber: "CBBCL-LM-0020",
    level: 4,
    profileSubmitted: true,
    profileRevision: 2,
    photoAlt: "Tashin Lutfur, Founding Director of Cox's Bazar Boat Club Ltd.",
    bio: [
      "Tashin Lutfur is a Cox's Bazar-based business executive and entrepreneur whose professional work spans fisheries, aquaculture, hospitality, food service and international trade. He serves as Director of Niribili Group Ltd. and is a Director of Niribili Fisheries Ltd., where his responsibilities have included international trade and relations. His business background connects the seafood sector with the tourism and hospitality economy of Cox's Bazar.",
      "He completed a BA (Hons) in International Business at Coventry University in the United Kingdom in 2012, followed by an MBA in International Marketing at the same university in 2015. Alongside his business career, he served as an Adjunct Lecturer / Faculty Member at Cox's Bazar International University from 2015 to 2017. His academic background combines international business and marketing, complementing his involvement in commercial operations and trade.",
      "In hospitality and food service, Tashin is the proprietor of Salt Bistro & Cafe, founded in 2016, and Sugar Boulangerie & Patisserie. He is also the proprietor of Aquila Import. These ventures form part of a professional portfolio that includes dining, bakery and patisserie operations, imports and fisheries. His fisheries interests include shrimp hatchery operations, aquaculture development and export-oriented seafood, with attention to areas such as biosecurity and production quality.",
      "Beyond his individual businesses, he serves as Secretary General of the Cox's Bazar Hotel Owners' Association, connecting his professional activities with the wider local hospitality sector. He also served as Vice President of JCI Cox's Bazar in 2023. Across these business, academic and association roles, his experience brings together entrepreneurship, industry engagement and a sustained professional connection with Cox's Bazar."
    ],
    businessProfile: {
      role: "Director, Niribili Group Ltd.; Director, Niribili Fisheries Ltd.; Proprietor, Salt Bistro & Cafe; Proprietor, Sugar Boulangerie & Patisserie; Proprietor, Aquila Import",
      company: "Niribili Group Ltd.; Niribili Fisheries Ltd.; Salt Bistro & Cafe; Sugar Boulangerie & Patisserie; Aquila Import",
      industry: "Fisheries & Aquaculture; Seafood Trade; Hospitality & Food Service; Imports",
      interests: "Shrimp Hatchery & Aquaculture Development; Seafood Exports; Restaurant, Cafe, Bakery & Patisserie Operations; International Trade"
    },
    achievements: [
      "2016 — Founded Salt Bistro & Cafe",
      "2015 — MBA in International Marketing, Coventry University, United Kingdom",
      "2012 — BA (Hons) in International Business, Coventry University, United Kingdom"
    ],
    memberships: [
      "Cox's Bazar Boat Club Ltd. — Founding Director",
      "Cox's Bazar Hotel Owners' Association — Secretary General",
      "JCI Cox's Bazar — Vice President (2023)"
    ],
    socials: {
      // Icon placeholders until his links are supplied (shown as icons with labels, not clickable).
      facebook: "Facebook",
      linkedin: "LinkedIn",
      website: "https://www.niribiligroup.com",
      email: "tashin@niribiligroup.com"
    },
    timeline: [
      { year: "Current", event: "Founding Director, Cox's Bazar Boat Club Ltd." },
      { year: "Current", event: "Director, Niribili Group Ltd. and Niribili Fisheries Ltd." },
      { year: "Current", event: "Secretary General, Cox's Bazar Hotel Owners' Association" },
      { year: "Current", event: "Proprietor, Sugar Boulangerie & Patisserie and Aquila Import" },
      { year: "2023", event: "Vice President, JCI Cox's Bazar" },
      { year: "2016", event: "Founded Salt Bistro & Cafe" },
      { year: "2015–2017", event: "Adjunct Lecturer / Faculty Member, Cox's Bazar International University" },
      { year: "2015", event: "Completed MBA in International Marketing, Coventry University" },
      { year: "2012", event: "Completed BA (Hons) in International Business, Coventry University" }
    ]
  },
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "private-hotel",
    name: "Private Hotel",
    description: "Private guest accommodation within the club for members and their invited guests, offering a quiet, comfortable stay close to the club's dining, lounge, and marine facilities.",
    features: ["Private guest rooms", "For members & invited guests", "Steps from club dining & lounge", "Advance reservation"],
    capacity: "By reservation",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "boating-yacht",
    name: "Boating & Yacht",
    description: "Boating and yachting experiences on the Bay of Bengal for members and their guests, with an emphasis on safe, well-managed outings and responsible use of the coast.",
    features: ["Boating excursions", "Yacht outings", "Safety-first operations", "For members & guests"],
    capacity: "By reservation",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "lounge",
    name: "Club Lounge",
    description: "An elegant coastal sanctuary tailored for intimate gatherings and quiet contemplation. Featuring expansive floor-to-ceiling windows, our main Lounge offers breathtaking panoramic vistas of the sunset over the Bay of Bengal, curated artwork, and bespoke leather seating configurations.",
    features: ["Sunset panoramas", "Bespoke leather furnishings", "Premium beverage selections", "Dedicated sommelier service"],
    capacity: "80 Guests",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "dining",
    name: "Restaurant & Dining",
    description: "An exceptional culinary destination serving the finest South Asian, fresh local catch, and international continental cuisines. Led by award-winning resident chefs, our dining rooms present customized degustation menus paired with stellar hospitality, overlooking the private club marina.",
    features: ["Seafood specialized menu", "Intimate private dining rooms", "Local authentic fusion", "Chef's Table dining"],
    capacity: "120 Seats",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "banquet",
    name: "Banquet Hall",
    description: "The crown jewel of our club facilities, the Grand Ballroom is designed for high-profile galas, corporate annual meetings, and distinguished matrimonial celebrations. Complemented by pre-function foyers, stage rigging, and premium oceanfront lawns.",
    features: ["Direct beach-access lawn", "State-of-the-art acoustics", "Inhouse banqueting team", "VIP holding rooms"],
    capacity: "450 Guests",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "conference",
    name: "Conference Facilities",
    description: "Fully-appointed corporate boardrooms and meeting lounges designed for modern dynamic executives. Standard equipped with ultra-high-definition interactive displays, secure high-speed network connections, and corporate catering services.",
    features: ["Secure video-conferencing suites", "Interactive whiteboard screens", "Ergonomic seating layout", "In-room business host"],
    capacity: "25 - 40 Seats",
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "recreation",
    name: "Family Recreation Area",
    description: "A thoughtful sanctuary for members and their children. Includes soft indoor play zones, interactive library corners, video console zones, and outdoor landscaped lawns for light family activities under meticulous club host supervision.",
    features: ["Supervised children's zone", "Family picnic decks", "Dynamic boarding games", "Digital entertainment hub"],
    capacity: "60 Guests",
    image: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "sports",
    name: "Sports Facilities",
    description: "Elegantly constructed fitness, billiard rooms, and tennis courts designed to satisfy athletic lifestyle standards. Fully climate-controlled interior zones accompanied by experienced personal trainers and dedicated squash or tennis professionals.",
    features: ["Championship Snooker tables", "Oceanfront modern fitness center", "Clay-court tennis", "Locker & steam rooms"],
    capacity: "50 Athletes",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "developments",
    name: "Future Developments",
    description: "A visionary blueprint of CBBCL's future expansions, including the private marina slips, deep-sea sailing slips, infinity pools overlooking the pristine shoreline, and high-security luxury coastal cottages designated exclusively for Member weekend retreats.",
    features: ["50-berth private marina", "Heated salt-water infinity pool", "Luxury coastal villas", "Maritime rescue helipad"],
    capacity: "N/A",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
  }
];

// Founding President's message: shown on the homepage and as the Gazette welcome release.
// **text** is shown in bold on the homepage.
export const PRESIDENT_MESSAGE: string[] = [
  "The establishment of Cox's Bazar Boat Club Limited represents a vision built upon shared aspirations, distinguished values, and a long-term commitment to institutional excellence. Our ambition extends beyond establishing a conventional boat club. We aspire to cultivate a distinguished destination for maritime recreation, coastal leisure, meaningful social connections, and an elevated lifestyle in Bangladesh.",
  "Renowned for its extraordinary natural coastline, Cox's Bazar holds immense potential to emerge as a leading destination for maritime leisure, premium hospitality, and international tourism. Recognizing this opportunity, Cox's Bazar Boat Club Limited is committed to developing a unique, member-oriented environment where the beauty of the sea meets refined recreation, meaningful engagement, and a strong sense of community.",
  "At the heart of our vision lies a commitment to **trust, fellowship, mutual respect, and enduring relationships among our members**. We believe that the true strength of a distinguished club lies not merely in its infrastructure or facilities, but in the collective values of its members, the quality of its leadership, and their shared commitment to building an institution of lasting significance.",
  "Our long-term vision is to foster a vibrant club culture encompassing boating and maritime recreation, social and professional networking, quality hospitality, and distinctive member experiences. We also recognize that responsible governance, transparency, discipline, and sustainable development are essential foundations for building an institution that commands lasting respect and confidence.",
  "I firmly believe that, through collective dedication, mutual cooperation, and visionary leadership, Cox's Bazar Boat Club Limited has the potential to establish a significant position within Bangladesh's maritime leisure and private club landscape. Beyond serving the interests of our members, we aspire to contribute meaningfully to the positive development of Cox's Bazar and the advancement of Bangladesh's tourism potential.",
  "As Founding President, I extend my sincere gratitude to every founding member, well-wisher, and stakeholder who has contributed to this journey. Your trust, participation, and continued support remain invaluable to our shared aspirations. Together, let us build an institution defined by integrity, strengthened by unity, and guided by a vision that will inspire generations to come.",
  "**Our commitment is to build more than a club: an enduring institution, a united community, and a distinguished legacy shaped by our connection to the sea.**"
];

export const NEWS_DATA: NewsPost[] = [
  {
    id: "2",
    title: "Welcome Message from Founding President Humayun Kabir Robel",
    date: "June 01, 2026",
    category: "Announcements",
    year: "2026",
    month: "June",
    excerpt: "Founding President Humayun Kabir Robel shares his vision for Cox's Bazar Boat Club Limited: trust, fellowship, responsible governance, and an enduring institution shaped by our connection to the sea.",
    content: [...PRESIDENT_MESSAGE.map((p) => p.replace(/\*\*/g, "")), "With sincere regards,\nHumayun Kabir Robel\nFounding President, Cox's Bazar Boat Club Limited"].join("\n\n"),
    tags: ["president", "welcome", "vision", "cbbcl"],
    image: PRESIDENT_IMAGE,
    // Wide news cards crop the centre; frame from the top so his face stays in view.
    imagePosition: "center 12%",
    likes: 0,
    commentsCount: 0
  }
];

// Code-managed club events (the admin dashboard is disabled). Add verified events only.
export const EVENTS_DATA: EventItem[] = [
  {
    id: "club-house-soft-opening-2026",
    title: "Soft Opening of the Club House",
    date: "October 31, 2026",
    day: "31",
    month: "Oct",
    startsAt: "2026-10-31",
    venue: "CBBCL Club House, Anderson Road, Cox's Bazar",
    category: "Club Milestone",
    isUpcoming: true,
    // Official Soft Opening Ceremony card: small copy for cards, larger copy as the Gazette page banner.
    image: softOpeningPhoto,
    banner: softOpeningBanner,
    description: "Cox's Bazar Boat Club Ltd. marks the soft opening of its Club House."
  }
];

// Prototype events were removed (2026-10-17); real events are added from the admin dashboard.
export const PAST_EVENTS_DATA: EventItem[] = [];

// No affiliations are published until real ones are confirmed.
export const AFFILIATIONS_DATA: Affiliation[] = [];
