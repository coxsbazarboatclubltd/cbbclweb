// Website policies (Privacy, Terms of Use, Cookies & Storage, Data Deletion). Code-managed.
// These describe what this website actually does today; update them whenever a form, service or
// data practice changes, and change POLICY_EFFECTIVE_DATE when you do. They are not legal advice:
// the club should have them reviewed by its legal adviser.

export const POLICY_EFFECTIVE_DATE = "30 October 2026";

export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface PolicyDoc {
  slug: "privacy-policy" | "terms" | "cookie-policy" | "data-deletion";
  title: string;
  summary: string;
  sections: PolicySection[];
}

const CLUB = "Cox's Bazar Boat Club Limited (\"CBBCL\", \"the Club\", \"we\")";
const CONTACT_LINE = "Cox's Bazar Boat Club Limited, Anderson Road, Cox's Bazar 4700, Bangladesh. Email: info@cbbcl.org (general and privacy requests) or membership@cbbcl.org (membership applications). Phone: +880 13328 86688.";

export const PRIVACY_POLICY: PolicyDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  summary: "How Cox's Bazar Boat Club Ltd. collects, uses, shares and protects personal information submitted through cbbcl.org.",
  sections: [
    {
      heading: "1. Who we are",
      paragraphs: [
        `This website, www.cbbcl.org, is operated by ${CLUB}, a company limited by guarantee incorporated in Bangladesh under the Companies Act, 1994. This policy explains what personal information the website collects, why, and the choices you have.`,
      ],
    },
    {
      heading: "2. Information you give us",
      paragraphs: ["We only receive personal information when you choose to send it through one of these forms or by email:"],
      items: [
        "Membership application: full name, email address, phone number, preferred membership category, date of birth, organization and designation (optional), proposer and seconder codes (optional), Facebook profile link, LinkedIn and website links (optional), and a photograph.",
        "Contact and registry inquiry forms: full name, email address, phone number (optional), Facebook profile link, the topic of your inquiry and your message.",
        "Emails you send to any cbbcl.org address.",
      ],
    },
    {
      heading: "3. Information collected automatically",
      items: [
        "Visit counter: each page load adds one to an anonymous daily and all-time visit count shown on the homepage. The counter does not store your IP address, any identifier or any cookie.",
        "Abuse protection: when you submit a form, your IP address and the email address you entered are kept as a short-lived counter (deleted automatically after 1 hour and 24 hours respectively) so that we can limit repeated or automated submissions.",
        "Server logs: our hosting provider records technical request data (such as IP address, browser type, the page requested and the time) to run and secure the website.",
        "Browser storage on your device: the website keeps copies of its own content and a few preferences (for example, a dismissed install prompt or articles you marked as liked) in your browser's local storage. This stays on your device and is not sent to us. See the Cookie & Storage Policy.",
      ],
    },
    {
      heading: "4. How we use your information",
      items: [
        "To receive, review and respond to membership applications, including assessment by the Club Secretariat and the Board in line with the Club's Articles of Association.",
        "To answer inquiries and correspond with you.",
        "To send you an automatic copy of what you submitted, so you have a record.",
        "To keep the website secure and prevent spam or misuse.",
        "To count website visits and membership applications for the figures shown on the homepage (counts only, no personal details).",
      ],
      paragraphs: ["We do not sell personal information, use it for advertising, or send marketing emails. If the Club starts a newsletter, it will ask for your separate consent first."],
    },
    {
      heading: "5. Why we ask for some details",
      items: [
        "Facebook profile link: helps the Secretariat confirm the identity of applicants and people contacting the Club.",
        "Photograph and date of birth (membership applications): used to identify the applicant and assess eligibility for membership.",
        "Phone number: lets the Secretariat contact you about your application or inquiry.",
      ],
    },
    {
      heading: "6. Who we share information with",
      paragraphs: ["Your information is seen by the Club Secretariat and, for membership applications, the Board and relevant committees. We use these service providers to run the website, and they process data on our behalf:"],
      items: [
        "Vercel Inc. — website hosting and server logs.",
        "Resend — delivers form submissions to the Club's mailboxes and your confirmation copy.",
        "Upstash — stores the anonymous visit and application counters and the short-lived abuse-protection counters.",
        "Google — supplies web fonts on every page and the map on the Contact page; your browser connects to Google to load them.",
        "Unsplash — some illustrative photographs are loaded from Unsplash's image servers.",
      ],
    },
    {
      heading: "7. International transfers",
      paragraphs: ["Some of these providers store or process data outside Bangladesh. We choose established providers and send them only what the service needs."],
    },
    {
      heading: "8. How long we keep information",
      items: [
        "Membership applications and inquiries are kept in the Club's mailboxes for as long as needed to handle them and, for members, as part of the Club's membership records.",
        "Abuse-protection counters are deleted automatically after 1 hour (IP address) or 24 hours (email address).",
        "Visit and application counters are totals only and contain no personal data.",
        "Server logs are kept by our hosting provider for its standard retention period.",
      ],
    },
    {
      heading: "9. Your choices and rights",
      paragraphs: [
        "You may ask us to tell you what personal information we hold about you, to correct it, or to delete it, and you may withdraw a pending membership application at any time. Email info@cbbcl.org from the address you used, or explain how we can confirm your identity. We will reply within 30 days. See the Data Deletion Policy for details.",
      ],
    },
    {
      heading: "10. Security",
      paragraphs: [
        "The website is served only over HTTPS, form inputs are checked on the server, and access to the Club's mailboxes is limited to authorized Secretariat staff. No method of transmission or storage is completely secure, so please do not send information that the forms do not ask for.",
      ],
    },
    {
      heading: "11. Children",
      paragraphs: ["This website is intended for adults. We do not knowingly collect personal information from children through it."],
    },
    {
      heading: "12. Links to other websites",
      paragraphs: ["The website links to social media pages and other organizations' websites. Their own privacy policies apply when you visit them."],
    },
    {
      heading: "13. Changes to this policy",
      paragraphs: ["We will update this page when our practices change and show the new effective date at the top."],
    },
    { heading: "14. Contact", paragraphs: [CONTACT_LINE] },
  ],
};

export const TERMS_OF_USE: PolicyDoc = {
  slug: "terms",
  title: "Terms of Use",
  summary: "The terms that apply when you use cbbcl.org, including membership applications, fees and refunds.",
  sections: [
    {
      heading: "1. About these terms",
      paragraphs: [`These terms apply to your use of www.cbbcl.org, operated by ${CLUB}. By using the website you agree to them. If you do not agree, please do not use the website.`],
    },
    {
      heading: "2. Information on the website",
      paragraphs: [
        "The website gives general information about the Club, its board, membership, facilities and events. We try to keep it accurate and current, but details such as facilities, events and fees may change. Facilities and services described on the website may be planned or under development; please confirm details with the Club Secretariat before relying on them.",
      ],
    },
    {
      heading: "3. Membership applications",
      items: [
        "Submitting the online membership application is an expression of interest. It does not create a membership or any contract.",
        "Admission, membership categories, voting rights, fees and conduct are governed by the Club's Articles of Association and the decisions of the Board. The Board may accept or decline any application.",
        "You must give accurate, complete information about yourself and only submit details and photographs you are entitled to share.",
      ],
    },
    {
      heading: "4. Fees, payments, refunds and cancellations",
      items: [
        "No payment can be made through this website, and the website does not collect card or bank details.",
        "Membership fees are those published on the Membership page under the Articles of Association. The Club Secretariat confirms the amount, how to pay and any receipt directly with each accepted member.",
        "Refunds, cancellations and resignations are handled under the Articles of Association and the Board's decisions. Contact membership@cbbcl.org about any fee, refund or cancellation question.",
        "Event participation, where offered, is arranged directly with the Club Secretariat.",
      ],
    },
    {
      heading: "5. Acceptable use",
      items: [
        "Do not misuse the forms, send spam or automated submissions, or try to disrupt, probe or gain unauthorized access to the website.",
        "Do not submit unlawful, offensive or misleading content, or other people's personal information without their permission.",
      ],
    },
    {
      heading: "6. Intellectual property",
      paragraphs: ["The Club's name, logo, seal and original website content belong to the Club. Board and member photographs belong to the people shown or their photographers and are used with permission. Some illustrative photographs come from third-party image libraries under their licences. Please do not copy or reuse website content without permission."],
    },
    {
      heading: "7. Links to other websites",
      paragraphs: ["Links to other websites are provided for convenience. We are not responsible for their content or practices."],
    },
    {
      heading: "8. Liability",
      paragraphs: ["The website is provided as is. To the extent permitted by law, the Club is not liable for losses arising from use of, or inability to use, the website or reliance on its information. Nothing in these terms limits liability that cannot be limited by law."],
    },
    {
      heading: "9. Governing law",
      paragraphs: ["These terms are governed by the laws of Bangladesh."],
    },
    {
      heading: "10. Changes",
      paragraphs: ["We may update these terms. The effective date at the top shows when they last changed."],
    },
    { heading: "11. Contact", paragraphs: [CONTACT_LINE] },
  ],
};

export const COOKIE_POLICY: PolicyDoc = {
  slug: "cookie-policy",
  title: "Cookie & Storage Policy",
  summary: "cbbcl.org sets no cookies and uses no analytics or advertising trackers. This page explains the browser storage the website uses.",
  sections: [
    {
      heading: "1. Cookies",
      paragraphs: [
        "This website does not set any cookies of its own and does not use analytics, advertising or tracking services. Because there are no optional trackers, there is no cookie banner to accept or reject.",
        "The map on the Contact page is provided by Google Maps. When that page loads, Google may set or read its own cookies under Google's privacy policy.",
      ],
    },
    {
      heading: "2. Browser storage the website uses",
      paragraphs: ["To load quickly and remember a few choices, the website stores the following in your browser's local storage. It stays on your device and is not sent to the Club:"],
      items: [
        "Copies of website content (board profiles, news, events, page text) so pages open quickly and keep working offline.",
        "Preferences, such as whether you dismissed the \"install app\" prompt.",
        "Articles you marked as liked (kept on this device only).",
        "A service-worker cache of website files, so the site can open when you are offline.",
      ],
    },
    {
      heading: "3. Your choices",
      paragraphs: [
        "You can clear this storage at any time with the button below, or through your browser's settings for www.cbbcl.org. The website will still work; it simply downloads its content again.",
      ],
    },
    {
      heading: "4. Changes",
      paragraphs: ["If the Club ever adds analytics or other optional tools, this page will be updated and your consent will be asked before they run."],
    },
    { heading: "5. Contact", paragraphs: [CONTACT_LINE] },
  ],
};

export const DATA_DELETION_POLICY: PolicyDoc = {
  slug: "data-deletion",
  title: "Data Deletion Policy",
  summary: "How to ask Cox's Bazar Boat Club Ltd. to access, correct or delete personal information you submitted through cbbcl.org.",
  sections: [
    {
      heading: "1. Accounts",
      paragraphs: ["The website does not offer user accounts, so there is no website account to delete. Personal information only reaches the Club through the membership application and inquiry forms, and by email."],
    },
    {
      heading: "2. How to make a request",
      items: [
        "Email info@cbbcl.org with the subject \"Data request\", from the email address you used on the form.",
        "Say whether you want a copy of your information, a correction, or deletion, and which submission it concerns (for example, a membership application sent on a certain date).",
        "If you cannot write from the same email address, explain how the Secretariat can confirm your identity, for example by phone using the number you gave.",
      ],
    },
    {
      heading: "3. What happens next",
      items: [
        "The Club Secretariat confirms your identity before acting, so that nobody else can obtain or delete your information.",
        "We reply within 30 days and confirm what was done.",
        "On deletion, we remove your submission and attachments from the Club's mailboxes and records, and ask our email delivery provider to delete its copies where it holds them.",
      ],
    },
    {
      heading: "4. When we may keep some information",
      items: [
        "Records of current or former members that the Club must keep under its Articles of Association, company law or other legal obligations.",
        "Information needed to deal with a dispute, a security incident or a legal claim.",
        "In these cases we keep only what is necessary, tell you what was kept and why, and delete it when it is no longer required.",
      ],
    },
    {
      heading: "5. Information that deletes itself",
      items: [
        "Abuse-protection counters (IP address and form email address) expire automatically after 1 hour and 24 hours.",
        "Anything stored in your own browser can be cleared on the Cookie & Storage Policy page.",
      ],
    },
    { heading: "6. Contact", paragraphs: [CONTACT_LINE] },
  ],
};

export const POLICIES: PolicyDoc[] = [PRIVACY_POLICY, TERMS_OF_USE, COOKIE_POLICY, DATA_DELETION_POLICY];
