// Darina Portfolio - Interactive Controller & Real Figma Projects Data

export const SOCIAL_LINKS = {
  telegram: 'https://t.me/DarinaKirr',
  email: 'darrkirr@gmail.com',
  phone: '+380 66 837 72 06',
  behance: 'https://www.behance.net/darinakirrf4b1'
};

export const PROJECTS = [
  // =========================================================================
  // TAB 1: BRAND & MARKETING DESIGN
  // =========================================================================
  {
    id: 'brand-logos',
    tab: 'brand',
    title: 'Brand Marks & Visual Identity Systems',
    shortName: 'Brand Marks & Logos',
    category: 'Logo Design & Visual Marks',
    year: '2022–2026',
    coverImage: '/assets/projects/brand-logos/cover.png',
    tagline: 'A curated collection of 12 distinctive brand marks, custom logotypes, and symbols crafted for energy hardware, cultural initiatives, media digests, and educational ventures.',
    role: 'Brand Identity & Logotype Designer',
    timeline: '2022–2026',
    platform: 'Vector Identity, Digital, Packaging & Print Systems',
    tags: ['LOGO DESIGN', 'BRAND MARKS', 'TYPOGRAPHY', 'SYMBOL CRAFT', 'VECTOR IDENTITY'],
    overview: 'A comprehensive anthology of 12 logotypes and brand marks engineered across renewable energy electronics (TESUP), cultural and civic initiatives (Osnova, Kyievycja, IT Volunteering, Modelyui Mriyu), corporate media digests (AI Digest, Stay Informed, Women in Tech), and contemporary lifestyle brands (New Arcline, Coach Dig Selv, Rina Boards).',
    problem: 'Creating marks across diverse industries requires instant optical recognition at small digital scales while maintaining sculptural authority across physical products, packaging, and editorial mastheads.',
    solution: 'Engineered custom vector logotypes with distinct typographic rhythm, bespoke Cyrillic and Latin letterforms, and balanced geometric proportions.',
    execution: 'Delivered complete vector mark families, monochrome and high-contrast variants, optical spacing grids, and application guidelines for each brand.',
    impact: 'Deployed across consumer electronics hardware, digital media publications, volunteer networks, and educational platforms.',
    isLogosShowcase: true,
    logosList: [
      { img: '/assets/projects/brand-logos/logo-01.png', label: 'ОСНОВА' },
      { img: '/assets/projects/brand-logos/logo-02.png', label: 'КИЄВИЦЯ' },
      { img: '/assets/projects/brand-logos/logo-04.png', label: 'TESUP Electronics' },
      { img: '/assets/projects/brand-logos/logo-03.png', label: 'TESUP Electronics' },
      { img: '/assets/projects/brand-logos/logo-05.png', label: 'NEW ARCLINE' },
      { img: '/assets/projects/brand-logos/logo-06.png', label: 'COACH DIG SELV' },
      { img: '/assets/projects/brand-logos/logo-07.png', label: 'IT Volunteering' },
      { img: '/assets/projects/brand-logos/logo-10.png', label: 'WOMEN IN TECH' },
      { img: '/assets/projects/brand-logos/logo-08.png', label: 'AI DIGEST' },
      { img: '/assets/projects/brand-logos/logo-11.png', label: 'МОДЕЛЮЙ МРІЮ' },
      { img: '/assets/projects/brand-logos/logo-12.png', label: 'STAY INFORMED' },
      { img: '/assets/projects/brand-logos/logo-09.png', label: 'RINA BOARDS' }
    ],
    gallery: []
  },
  {
    id: 'bookify',
    tab: 'brand',
    title: 'Bookify: Online Art & Cinema Bookstore',
    shortName: 'Bookify Bookstore',
    category: 'E-Commerce UI/UX & Editorial Web Design',
    year: '2025',
    coverImage: '/assets/projects/bookify/cover.png',
    tagline: 'Editorial e-commerce platform for curated art, cinema, and photography monographs with expressive typography and seamless checkout.',
    role: 'Product & Visual Designer',
    timeline: '2 Months (2025)',
    platform: 'Desktop Web & E-Commerce System',
    tags: ['PRODUCT DESIGN', 'WEB UI/UX', 'E-COMMERCE', 'EDITORIAL DESIGN', 'BOOKSTORE'],
    overview: 'Bookify reimagines online book discovery for collectors of TASCHEN art monographs, cinema retrospectives, and photography editions. The project encompassed end-to-end UX flow design, hero feature spotlights, interactive rating cards, and a streamlined checkout experience.',
    problem: 'Traditional book commerce platforms are cluttered with dense tables and outdated visual grids that detract from the tactile beauty of art and photography books.',
    solution: 'Designed a gallery-grade editorial interface featuring generous negative space, bold neo-grotesque headlines, curated book showcases, and structured product specification views.',
    execution: 'Engineered full desktop e-commerce flows spanning the main storefront (Alfred Hitchcock featured release, New Arrivals, Gift Certificates), detailed book inspection screens, and cart/checkout states.',
    impact: 'Established an editorial e-commerce benchmark that treats illustrated monographs like gallery artifacts while keeping purchase friction minimal.',
    gallery: [
      {
        image: '/assets/projects/bookify/full-artboard.png',
        caption: 'Bookify Complete E-Commerce UI System: Storefront, Product Monograph View & Navigation Architecture',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'disbalancer',
    tab: 'brand',
    title: 'DISBALANCER: Cyber Defense & Web3 Brand Identity',
    shortName: 'DISBALANCER DeFi',
    category: 'Cybersecurity Brand Identity & Print/Digital System',
    year: '2022–2024',
    coverImage: '/assets/projects/disbalancer/cover.png',
    tagline: 'Comprehensive brand guidebook, Space Grotesk/Mono typographic system, cyberwar poster triptych, and social media architecture for DDoS defense protocol.',
    role: 'Brand & Graphic Designer',
    timeline: '3 Months',
    platform: 'Brand Guidebook, Print Spreads, Posters & Social Media',
    tags: ['CYBERSECURITY', 'BRAND IDENTITY', 'GUIDEBOOK', 'POSTER DESIGN', 'WEB3'],
    overview: 'DISBALANCER (and its Liberator cyber-defense suite) is a decentralized cybersecurity and DDoS-mitigation project. The scope covered a complete brand identity guidebook, custom geometric 3D cubic node visuals, editorial brandbook spreads, a conceptual poster triptych, and a cohesive social media grid.',
    problem: 'Cybersecurity brands frequently rely on generic shield clichés. DISBALANCER required a distinctive visual language capable of uniting technical developers, international media (Forbes, Bloomberg), and digital resistance volunteers.',
    solution: 'Created an obsidian-and-magenta visual system anchored by isometric wireframe cubes, Space Grotesk and Space Mono typography, and bold activist poster compositions.',
    execution: 'Authored the full brand identity guidebook, logo construction grid, typography hierarchy, printed brandbook spreads, 3-poster campaign series, and 15+ modular social templates.',
    impact: 'Supported international media coverage and community mobilization across global cybersecurity and Web3 channels.',
    gallery: [
      {
        image: '/assets/projects/disbalancer/presentation.png',
        caption: 'DISBALANCER Complete Brand Identity Guidebook, Print Spreads, Poster Triptych & Social System',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'kyivgaz',
    tab: 'brand',
    title: 'KYIVGAZ: Corporate Rebranding & Visual Ecosystem',
    shortName: 'KYIVGAZ Rebranding',
    category: 'Corporate Rebranding, Editorial & Illustration System',
    year: '2023–2024',
    coverImage: '/assets/projects/kyivgaz/cover.png',
    tagline: 'Comprehensive visual modernization of Kyiv\'s municipal energy utility across digital channels, outdoor banners, corporate press, and illustrated safety guides.',
    role: 'Brand & Visual Identity Designer',
    timeline: '4 Months',
    platform: 'Digital Social Ecosystem, Print Newspaper, Outdoor Signage & Illustrations',
    tags: ['REBRANDING', 'CIVIC DESIGN', 'CORPORATE IDENTITY', 'ILLUSTRATION', 'EDITORIAL'],
    overview: 'KYIVGAZ is the municipal energy operator serving millions of Kyiv residents. This project modernized the utility\'s visual communication across customer-facing digital touchpoints, corporate brandbook standards, the KG Weekly newspaper, and illustrated gas safety manuals.',
    problem: 'Legacy utility communications felt bureaucratic and fragmented, making critical monthly tasks like meter submission and gas safety education hard for citizens to follow.',
    solution: 'Developed a cobalt-blue, white, and red visual system featuring custom flat-line character illustrations, clear instructional infographics, outdoor signage templates, and structured editorial grids.',
    execution: 'Produced the Instagram/mobile communication system, corporate brandbook and outdoor banner standards, the KG Weekly corporate newspaper layout, and an illustrated comic/mascot safety guidebook.',
    impact: 'Transformed citizen digital engagement and unified KYIVGAZ\'s visual voice across online, print, and physical city touchpoints.',
    gallery: [
      {
        image: '/assets/projects/kyivgaz/presentation.png',
        caption: 'KYIVGAZ Complete Rebranding System: Digital Mobile Ecosystem, Brandbook, KG Weekly Newspaper & Illustrated Safety Guide',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'archetype',
    tab: 'brand',
    title: 'Archétype: Kyiv Fashion Brand Identity & Packaging',
    shortName: 'ARCHETYPE Brand',
    category: 'Fashion Brand Identity, Packaging & Digital Lookbook',
    year: '2023',
    coverImage: '/assets/projects/archetype/cover.png',
    tagline: 'Tactile brand identity, garment hangtags, textile care labels, thank-you stationery, and mobile lookbook for Kyiv contemporary apparel brand ("Let Clothes Make Sense").',
    role: 'Brand & Packaging Designer',
    timeline: '2 Months',
    platform: 'Garment Tags, Print Stationery, Textile Labels & Mobile Social',
    tags: ['FASHION BRANDING', 'PACKAGING DESIGN', 'TYPOGRAPHY', 'HANGTAGS', 'KYIV'],
    overview: 'Archétype (@archetype.kyiv) is a contemporary Ukrainian fashion brand built around the philosophy "Let Clothes Make Sense". Crafted for the Summer\'21 Capsule and core collection, the identity pairs high-contrast editorial serif typography with raw indigo textile textures and minimalist technical care labels.',
    problem: 'Independent fashion labels need physical touchpoints (hangtags, thank-you cards, woven composition labels) and digital lookbooks that immediately communicate fabric quality and conceptual depth.',
    solution: 'Combined an expressive modern serif logotype with architectural grid borders, tactile dyed-fabric backgrounds, and Swiss-inspired technical composition tables ("Designed in Kyiv").',
    execution: 'Designed the Summer\'21 Capsule campaign triptych, unboxing thank-you cards, double-sided garment hangtags with brand manifesto, mobile Instagram presence, and 4 modular garment care/composition labels.',
    impact: 'Created a cohesive unboxing and retail identity system celebrating Ukrainian fashion craftsmanship.',
    gallery: [
      {
        image: '/assets/projects/archetype/presentation.png',
        caption: 'Archétype Complete Fashion Identity: Summer\'21 Triptych, Print Stationery, Hangtags, Mobile Lookbook & Care Labels',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'rina-teaches',
    tab: 'brand',
    title: 'rina.teaches: Personal Brand & Social Visual System',
    shortName: 'rina.teaches Brand',
    category: 'Personal Brand Identity & Social Media System',
    year: '2025',
    coverImage: '/assets/projects/rina-teaches/cover.png',
    tagline: '3D chrome & pearl visual identity, interactive story highlights, and editorial feed templates for modern English language tutoring.',
    role: 'Brand & Social Media Designer',
    timeline: '2 Months (2025)',
    platform: 'Instagram Feed, Stories, 3D Icons & Miro/Classroom Branding',
    tags: ['PERSONAL BRAND', 'SOCIAL MEDIA', '3D GRAPHICS', 'EDUCATION BRAND', 'CONTENT SYSTEM'],
    overview: 'rina.teaches is the personal brand of English tutor Karina ("Your Fabulous English Tutor"), specializing in IELTS, CELPIP, NMT, and conversational fluency. The project established a playful, Y2K-inflected editorial aesthetic combining crumpled pastel paper textures, 3D chrome icons, pearl shell motifs, and pop-culture vocabulary cards.',
    problem: 'Language tutors on Instagram often blend together with generic textbook graphics. The brand needed an unforgettable visual signature that appealed to Gen-Z and young professionals.',
    solution: 'Created the custom 3D chrome "RINA BOARDS" emblem, silver pearl highlight covers, structured onboarding story sequences (pricing, attendance rules, Miro learning process), and high-retention vocabulary carousels.',
    execution: 'Delivered the complete Instagram visual architecture: profile grid system, 5-part onboarding story highlight suite, and recurring educational feed templates.',
    impact: 'Transformed profile conversion and story retention while establishing an unmistakable visual identity.',
    gallery: [
      {
        image: '/assets/projects/rina-teaches/full-artboard.png',
        caption: 'rina.teaches Complete Brand System: Logo, 3D Highlight Icons, Stories, Feed Posts & Profile Grid',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },

  // =========================================================================
  // TAB 2: ENTERPRISE & CAMPAIGNS (CONFIDENTIAL / UNDER NDA)
  // =========================================================================
  {
    id: 'ai-marathon',
    tab: 'enterprise',
    title: 'EPAM AI Marathon Heroes',
    shortName: 'AI Marathon Heroes',
    category: 'Enterprise AI Campaign & Recognition',
    year: '2025',
    coverImage: '/assets/projects/ai-marathon/cover.png',
    tagline: '3D key visuals, recognition certificates, and multi-channel internal campaign celebrating autonomous AI agent innovation.',
    role: 'Visual & Campaign Designer',
    timeline: '2 Months (2025)',
    platform: 'Internal Infoportal, Certificates & Broadcast Headers',
    tags: ['AI CAMPAIGN', 'ENTERPRISE', 'CERTIFICATES', '3D HERO GRAPHICS', 'INTERNAL COMMS'],
    overview: 'AI Marathon is EPAM Ukraine\'s flagship internal innovation challenge where engineers and architects built autonomous AI agents and shared practical AI cases. The scope included 3D hero visuals, personalized winner and participant certificates, and multi-wave announcement headers.',
    problem: 'Mobilizing hundreds of engineering teams across a multi-week marathon required high-impact visual energy while aligning with corporate AI brand standards.',
    solution: 'Designed a vibrant violet-and-obsidian 3D visual language featuring custom robotic character renders, glassmorphic badges, and structured recognition diplomas.',
    execution: 'Created infoportal mastheads, winner and participant certificates signed by the Jury Head, and milestone campaign banners.',
    impact: 'Engaged hundreds of engineers nationwide and celebrated top AI innovators across internal company channels.',
    gallery: [
      {
        image: '/assets/projects/ai-marathon/full-artboard.png',
        caption: 'EPAM AI Marathon Heroes: Key Visuals, Badges, Posters & Certificates System',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'diia-ai',
    tab: 'enterprise',
    title: 'EPAM & Diia.AI Contest Hackathon',
    shortName: 'Diia.AI Hackathon',
    category: 'GovTech & National AI Campaign',
    year: '2025',
    coverImage: '/assets/projects/diia-ai/cover.png',
    tagline: 'National AI hackathon campaign created in partnership with Ukraine\'s Ministry of Digital Transformation, WINWIN, and EPAM.',
    role: 'Visual & Campaign Designer',
    timeline: '3 Months (2025)',
    platform: 'Web, Social Media & Event Broadcasts',
    tags: ['GOVTECH', 'AI HACKATHON', 'KEY VISUAL', '3D CRAFT', 'CAMPAIGN ROLLOUT'],
    overview: 'Diia.AI Contest is a national artificial intelligence hackathon organized with the Ministry of Digital Transformation of Ukraine (Мінцифра), WINWIN AI Center of Excellence, and EPAM Ukraine (20 Years in Ukraine). The project encompassed the master 3D glass-ring key visual and promotional campaign cards.',
    problem: 'Required uniting state digital transformation branding with enterprise engineering credibility in a single high-contrast visual identity.',
    solution: 'Engineered an obsidian-and-cobalt visual identity anchored by a concentric 3D kinetic glass core symbolizing national digital infrastructure.',
    execution: 'Delivered full-HD event headers, partner co-branding lockups, and social media announcement cards.',
    impact: 'Supported national hackathon communication across government and engineering communities.',
    gallery: [
      {
        image: '/assets/projects/diia-ai/full-artboard.png',
        caption: 'Diia.AI Contest Hackathon: Master Key Visual, Event Headers & Promotional Posters',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'office-survey',
    tab: 'enterprise',
    title: 'EPAM Office Survey 2025–2026 Campaign',
    shortName: 'Office Survey 2026',
    category: '3D Art Direction, Broadcast Screens & Print Posters',
    year: '2025–2026',
    coverImage: '/assets/projects/office-survey/cover.png',
    tagline: '3D character art direction, EPAM TV broadcast screens, and QR-integrated workplace posters driving employee office feedback.',
    role: 'Visual & Campaign Designer',
    timeline: '2025–2026 Cycles',
    platform: 'EPAM TV Broadcast Screens & Printed Office Posters',
    tags: ['3D ART DIRECTION', 'WORKPLACE POSTERS', 'EPAM TV', 'INTERNAL SURVEY'],
    overview: 'The annual EPAM UA Office Survey gathers employee feedback across workspace comfort, equipment, and hub facilities. The campaign spans both the 2025 and 2026 visual editions across office TV screens and physical QR posters.',
    problem: 'Internal workplace surveys often suffer from low noticeability in busy office hubs unless the visual call-to-action is warm, immediate, and effortless to scan.',
    solution: 'Combined stylized 3D coworking scenes and warm sunset gradient fluid shapes with prominent QR codes ("Scan & share your voice") optimized for both 16:9 TV screens and vertical A3 posters.',
    execution: 'Delivered 16:9 EPAM TV broadcast slides and print-ready vertical posters for the 2025 and 2026 survey waves.',
    impact: 'Streamlined QR participation across physical office locations nationwide.',
    gallery: [
      {
        image: '/assets/projects/office-survey/full-artboard.png',
        caption: 'EPAM Office Survey 2025–2026: 16:9 Broadcast Screens & QR Workplace Posters',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'teams-channels',
    tab: 'enterprise',
    title: 'EPAM Microsoft Teams Channel Identity System',
    shortName: 'Teams Channel Headers',
    category: 'Internal Communications & Community Branding',
    year: '2025–2026',
    coverImage: '/assets/projects/teams-channels/cover.png',
    tagline: 'Cohesive series of 8 Microsoft Teams channel banners with custom 3D glassmorphic badges for regional hubs and corporate digests.',
    role: 'Visual Communications Designer',
    timeline: '2025–2026',
    platform: 'Microsoft Teams Channels & Internal Portals',
    tags: ['INTERNAL COMMS', 'COMMUNITY BRANDING', 'MS TEAMS', '3D ICONS', 'BANNERS'],
    overview: 'A unified visual banner system designed for EPAM Ukraine\'s Microsoft Teams channels, covering national announcements, regional hubs (Kyiv, Lviv, Dnipro, Kharkiv, Odesa, Vinnytsia), video digests, and community updates.',
    problem: 'Disparate channel headers made it difficult for employees to immediately distinguish official regional and thematic channels inside Microsoft Teams.',
    solution: 'Created an 8-banner modular family featuring soft atmospheric mesh gradients, crisp typography, and custom 3D frosted-glass iconography tailored to each channel\'s purpose.',
    execution: 'Delivered all 8 production-ready channel headers at 2x retina resolution with consistent safe-zone alignment.',
    impact: 'Unified visual navigation across primary national and regional Microsoft Teams communication channels.',
    gallery: [
      {
        image: '/assets/projects/teams-channels/full-artboard.png',
        caption: 'EPAM Microsoft Teams Channel Headers: Complete Modular System of 8 Channels with 3D Icons',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'corporate-digests',
    tab: 'enterprise',
    title: 'EPAM Global Editorial Digests & Newsletters',
    shortName: 'Editorial Digests',
    category: 'Editorial Design & Multi-Column Newsletters',
    year: '2024–2026',
    coverImage: '/assets/projects/corporate-digests/cover.png',
    tagline: 'Long-form editorial newsletters, custom infographics, and modular email architectures for AI Digest, EBSCO, Equifax, and regional hubs.',
    role: 'Editorial & Information Designer',
    timeline: '2024–2026',
    platform: 'Email Newsletters, ContactMonkey & Internal Portals',
    tags: ['EDITORIAL DESIGN', 'DATA INFOGRAPHICS', 'NEWSLETTERS', 'TYPOGRAPHY'],
    overview: 'A comprehensive collection of long-form internal editorial publications designed for global client accounts (EBSCO, Equifax) and regional technology communities (AI Digest, Ireland Tech Community, UA South).',
    problem: 'Long-form technical digests contain dense metrics, event recaps, and leadership interviews that require clear visual hierarchy to keep readers engaged from top to bottom.',
    solution: 'Built bespoke editorial themes for each publication—combining custom mastheads, structured data cards, speaker spotlights, and illustrated timeline blocks.',
    execution: 'Designed full-length multi-section newsletters including the AI Digest series, EBSCO Annual Newsletter, Ireland Newsletter, Equifax Delivery Digest, and UA South Digest.',
    impact: 'Elevated internal newsletter readability and visual engagement across international delivery teams.',
    isScrollableGallery: true,
    scrollableItems: [
      {
        image: '/assets/projects/corporate-digests/newsletter-2032.png',
        title: 'Community Newsletter: Editorial Multi-Section Layout',
        tag: 'EDITORIAL NEWSLETTER'
      },
      {
        image: '/assets/projects/corporate-digests/ebsco-newsletter-2026.png',
        title: 'EBSCO Account Annual Newsletter: Milestones, Metrics & Team Spotlights',
        tag: 'ACCOUNT NEWSLETTER'
      },
      {
        image: '/assets/projects/corporate-digests/ai-ua-digest.png',
        title: 'AI UA Digest 2026: Machine Learning & Engineering Highlights',
        tag: 'AI UA DIGEST'
      },
      {
        image: '/assets/projects/corporate-digests/ai-digest.png',
        title: 'AI Digest Full Editorial Issue: AI Trends, Tools & Internal Events',
        tag: 'AI DIGEST'
      },
      {
        image: '/assets/projects/corporate-digests/equifax-digest.png',
        title: 'Equifax Delivery Digest: Key Engineering Metrics & Team Updates',
        tag: 'DELIVERY DIGEST'
      },
      {
        image: '/assets/projects/corporate-digests/ua-south-digest.png',
        title: 'UA South Regional Digest: Community & Office Highlights',
        tag: 'REGIONAL DIGEST'
      }
    ],
    gallery: []
  },
  {
    id: 'email-campaigns',
    tab: 'enterprise',
    title: 'EPAM Enterprise Email Campaigns & Event Letters',
    shortName: 'Email Campaigns',
    category: 'Direct Communications & Event Invitations',
    year: '2025–2026',
    coverImage: '/assets/projects/email-campaigns/cover.png',
    tagline: 'Targeted email campaign templates for Azure DevOps Lean Coffee, AI SDLC Maturity talks, DOU rankings, and Global Townhalls.',
    role: 'Visual & Email Designer',
    timeline: '2025–2026',
    platform: 'HTML Email Templates & Direct Internal Mail',
    tags: ['EMAIL DESIGN', 'EVENT INVITES', 'DIRECT COMMS', 'CLOUD & AI'],
    overview: 'A suite of single-topic promotional and informational email templates designed for cloud practice communities, AI SDLC maturity programs, executive townhalls, and industry award announcements.',
    problem: 'Event invitations and strategic announcements need immediate scannability—highlighting date, time, speaker credentials, and registration CTAs at a glance.',
    solution: 'Crafted clean 650px email cards with custom hero illustrations, high-contrast date/time pills, and unmistakable primary action buttons.',
    execution: 'Delivered complete email assets for Lean Coffee: Azure DevOps Best Practices, AI SDLC Maturity DM campaigns, DOU recognition letters, AMA invites, and New Year addresses.',
    impact: 'Drove strong registration turnout across practice webinars and leadership sessions.',
    isScrollableGallery: true,
    scrollableItems: [
      {
        image: '/assets/projects/email-campaigns/ai-sdlc-talk.png',
        title: 'AI SDLC Maturity Program: Official Tech Talk Invitation',
        tag: 'AI SDLC TALK'
      },
      {
        image: '/assets/projects/email-campaigns/ai-maturity-dm.png',
        title: 'AI SDLC Maturity Direct Mail Campaign & Program Overview',
        tag: 'DIRECT MAIL'
      },
      {
        image: '/assets/projects/email-campaigns/new-year-2025.png',
        title: 'New Year 2025 Year-in-Review & Festive Employee Address',
        tag: 'YEAR IN REVIEW'
      },
      {
        image: '/assets/projects/email-campaigns/dou-letter.png',
        title: 'DOU Industry Ranking Recognition & Team Announcement Letter',
        tag: 'CORPORATE LETTER'
      },
      {
        image: '/assets/projects/email-campaigns/azure-letter.png',
        title: 'Cloud Practice Invitation: Lean Coffee Azure DevOps Best Practices',
        tag: 'EVENT INVITE'
      },
      {
        image: '/assets/projects/email-campaigns/ama-letter.png',
        title: 'Executive Ask Me Anything (AMA) Session Email Invitation',
        tag: 'AMA INVITE'
      },
      {
        image: '/assets/projects/email-campaigns/global-letter.png',
        title: 'Global Enterprise Communications: Appreciation Day Template',
        tag: 'GLOBAL COMMS'
      }
    ],
    gallery: []
  },
  {
    id: 'wellness-week',
    tab: 'enterprise',
    title: 'EPAM Wellness Week & Mental Health Sticker Pack',
    shortName: 'Wellness Week',
    category: 'Custom Illustration & Sticker Pack System',
    year: '2025',
    coverImage: '/assets/projects/wellness-week/cover.png',
    tagline: 'Custom illustrated sticker pack and mindfulness campaign ("No Burnout Club", "You Deserve Rest") featuring capybara character mascots.',
    role: 'Illustrator & Visual Designer',
    timeline: '1 Month (2025)',
    platform: 'Print Vinyl Sticker Sheets & Digital Telegram/Teams Stickers',
    tags: ['ILLUSTRATION', 'STICKER PACK', 'WELLNESS WEEK', 'CHARACTER DESIGN'],
    overview: 'Designed for EPAM Wellness Week, this project translated mental health and work-life balance reminders into an affectionate, collectible sticker series for engineers and office hubs.',
    problem: 'Corporate wellness messaging can easily feel dry or preachy. The goal was to create stickers employees genuinely wanted to put on their laptops and send in daily team chats.',
    solution: 'Illustrated a cohesive cobalt-and-violet sticker pack starring a relaxed capybara mascot alongside Ukrainian mindfulness prompts ("Ти заслуговуєш на відпочинок", "Відпусти ситуацію", "No Burnout Club").',
    execution: 'Prepared print-ready die-cut vinyl sticker sheets with cut contours as well as digital sticker packs for internal messengers.',
    impact: 'Became one of the most popular employee merch items during Wellness Week across Ukrainian office hubs.',
    gallery: [
      {
        image: '/assets/projects/wellness-week/full-artboard.png',
        caption: 'EPAM Wellness Week Complete System: Capybara Mascot Illustrations, Die-Cut Vinyl Stickers & Posters',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'ama-sessions',
    tab: 'enterprise',
    title: 'EPAM Executive AMA Sessions',
    shortName: 'Executive AMA Sessions',
    category: 'Event Headers, 3D Toggles & Internal Comms',
    year: '2024–2025',
    coverImage: '/assets/projects/ama-sessions/cover.png',
    tagline: 'Visual identity and broadcast header system for Regional Ask Me Anything (AMA) forums across UA Central and UA East hubs.',
    role: 'Visual Designer',
    timeline: '2024–2025',
    platform: 'Intranet Headers, Email Banners & Broadcast Graphics',
    tags: ['AMA SESSIONS', '3D ILLUSTRATIONS', 'INTERNAL COMMS', 'TOWNHALL'],
    overview: 'Regional Ask Me Anything (AMA) meeting series (UA Central & UA East) providing transparent executive dialogue and updates for thousands of engineers.',
    problem: 'Executive Q&A sessions required high scannability and friendly recognition to encourage candid employee participation and questions.',
    solution: 'Engineered a clean isometric toggle, lightbulb, and periwinkle gradient identity with structured announcement and post-communication banners.',
    execution: 'Delivered event launch headers, post-comms recap graphics, registration buttons, and 3D isometric iconography.',
    impact: 'Drove high participation and continuous employee engagement across regional hubs.',
    gallery: [
      {
        image: '/assets/projects/ama-sessions/full-artboard.png',
        caption: 'EPAM Executive AMA Sessions: Regional AMA Launch Headers, Post-Comms, Badges & Interactive Buttons',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'ama-airun',
    tab: 'enterprise',
    title: 'EPAM AI/Run & Course Key Visuals',
    shortName: 'AI/Run Course Visuals',
    category: '3D Key Visuals & Educational Campaigns',
    year: '2024–2025',
    coverImage: '/assets/projects/ama-airun/cover.png',
    tagline: 'Dark metallic 3D keycap visual system, robot mascots, and editorial cards for EliteA and CodeMie AI educational programs.',
    role: 'Visual Designer',
    timeline: '2024–2025',
    platform: 'Campaign Mastheads, Quote Cards & 3D Renders',
    tags: ['AI/RUN', '3D KEYCAPS', 'ELITEA & CODEMIE', 'COURSE CAMPAIGN'],
    overview: 'Educational campaign promoting internal AI engineering tooling courses (EliteA and CodeMie) within EPAM\'s AI/Run curriculum.',
    problem: 'Demystifying complex generative AI tooling required approachable, futuristic visual metaphors that motivated engineers to upskill.',
    solution: 'Designed tactile 3D mechanical keycaps with animated robot displays, modular robot mascots, and blurred pull-quote layout cards.',
    execution: 'Delivered course launch banners, strategic value quote cards, 3D character poses, and platform badge lockups.',
    impact: 'Accelerated course completions and empowered engineers with practical agentic AI workflows.',
    gallery: [
      {
        image: '/assets/projects/ama-airun/full-artboard.png',
        caption: 'EPAM AI/Run Course Campaign: EliteA & CodeMie 3D Keycaps, Editorial Infographics & Mascots',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  },
  {
    id: 'campaign-headers',
    tab: 'enterprise',
    title: 'EPAM Cultural & CSR Campaign Headers',
    shortName: 'Campaign Headers',
    category: '3D Key Visuals & Broadcast Headers',
    year: '2025–2026',
    coverImage: '/assets/projects/campaign-headers/cover.png',
    tagline: 'Expressive 3D and illustrated campaign headers for Chess Charity Cup 2026, Benefits Digest, Donor Day, and Time to Talk Day.',
    role: 'Graphic & Digital Designer',
    timeline: '2025–2026',
    platform: 'Intranet Mastheads, Email Headers & Digital Signage',
    tags: ['3D KEY VISUALS', 'CHARITY CUP', 'DONOR DAY', 'BENEFITS DIGEST'],
    overview: 'A curated series of hero mastheads created for major corporate social responsibility (CSR), employee benefits, and community tournament initiatives across EPAM Ukraine.',
    problem: 'Each standalone initiative—from charity chess tournaments to blood donation drives—needed an evocative visual metaphor that captured attention instantly in the news feed.',
    solution: 'Crafted bespoke 3D glass chess sculptures for the Chess Charity Cup, warm illustrated metaphors for Donor Day and Time to Talk Day, and bold typographic counters for the 561+ partner Benefits Digest.',
    execution: 'Delivered 6 high-resolution masthead banners adapted for portal headers and email newsletters.',
    impact: 'Boosted employee awareness and participation across charity and wellbeing programs.',
    gallery: [
      {
        image: '/assets/projects/campaign-headers/full-artboard.png',
        caption: 'EPAM Campaign Headers: Chess Charity Cup 2026, Benefits Digest, Donor Day & Time to Talk Day',
        tag: 'FULL ARTBOARD',
        fullWidth: true
      }
    ]
  }
];

class PortfolioApp {
  constructor() {
    this.currentView = 'home';
    this.currentTab = 'brand'; // 'brand' | 'enterprise'
    this.initDOMElements();
    this.renderSidebarProjects();
    this.renderHomeWorkGrid();
    this.bindEvents();
    this.handleInitialRoute();
  }

  initDOMElements() {
    this.homeView = document.getElementById('home-view');
    this.caseStudyView = document.getElementById('case-study-view');
    this.cvView = document.getElementById('cv-view');
    this.aboutView = document.getElementById('about-view');
    
    this.sidebarBrandList = document.getElementById('sidebar-brand-list');
    this.sidebarEnterpriseList = document.getElementById('sidebar-enterprise-list');
    this.workGrid = document.getElementById('work-grid');
    this.ndaBanner = document.getElementById('nda-banner');
    
    this.toast = document.getElementById('toast');
    this.mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    this.sidebar = document.getElementById('main-sidebar');
  }

  showToast(message) {
    if (!this.toast) return;
    this.toast.textContent = message;
    this.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 2800);
  }

  renderSidebarProjects() {
    const brandProjects = PROJECTS.filter(p => p.tab === 'brand');
    const enterpriseProjects = PROJECTS.filter(p => p.tab === 'enterprise');

    if (this.sidebarBrandList) {
      this.sidebarBrandList.innerHTML = brandProjects.map(project => `
        <li>
          <a href="#project-${project.id}" class="sidebar-nav-link" data-nav="project" data-id="${project.id}">
            <span>${project.shortName}</span>
          </a>
        </li>
      `).join('');
    }

    if (this.sidebarEnterpriseList) {
      this.sidebarEnterpriseList.innerHTML = enterpriseProjects.map(project => `
        <li>
          <a href="#project-${project.id}" class="sidebar-nav-link" data-nav="project" data-id="${project.id}">
            <span>${project.shortName}</span>
          </a>
        </li>
      `).join('');
    }
  }

  renderHomeWorkGrid() {
    if (!this.workGrid) return;
    
    const filteredProjects = PROJECTS.filter(p => p.tab === this.currentTab);
    
    // Toggle NDA banner
    if (this.ndaBanner) {
      this.ndaBanner.style.display = this.currentTab === 'enterprise' ? 'flex' : 'none';
    }

    this.workGrid.innerHTML = filteredProjects.map(project => `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-thumb-container">
          <img 
            src="${project.coverImage}" 
            alt="${project.title}" 
            class="project-thumb" 
            loading="lazy" 
          />
        </div>
        <div class="project-info-row">
          <div class="project-text-block">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-category">${project.category}</span>
          </div>
          <span class="project-year-badge">${project.year}</span>
        </div>
      </article>
    `).join('');

    // Update active state on tab buttons
    document.querySelectorAll('.portfolio-tab-btn').forEach(btn => {
      const isMatch = btn.dataset.tab === this.currentTab;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });
  }

  setTab(tab, syncAccordion = true) {
    if (this.currentTab === tab) return;
    this.currentTab = tab;
    this.renderHomeWorkGrid();
    if (syncAccordion) {
      this.expandAccordion(tab);
    }
  }

  toggleAccordion(tab) {
    const group = document.querySelector(`.sidebar-accordion-group[data-accordion-group="${tab}"]`);
    if (!group) return;
    const isCurrentlyOpen = group.classList.contains('is-open');
    if (isCurrentlyOpen) {
      this.collapseAccordion(tab);
    } else {
      this.expandAccordion(tab);
      // If user is currently on the home view, switch the active work tab to match the accordion
      if (this.currentView === 'home' && (tab === 'brand' || tab === 'enterprise')) {
        this.setTab(tab, false);
      }
    }
  }

  expandAccordion(tab) {
    const group = document.querySelector(`.sidebar-accordion-group[data-accordion-group="${tab}"]`);
    if (!group) return;
    group.classList.add('is-open');
    const trigger = group.querySelector('.sidebar-accordion-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
  }

  collapseAccordion(tab) {
    const group = document.querySelector(`.sidebar-accordion-group[data-accordion-group="${tab}"]`);
    if (!group) return;
    group.classList.remove('is-open');
    const trigger = group.querySelector('.sidebar-accordion-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }

  bindEvents() {
    // Sidebar Accordion Toggle
    document.addEventListener('click', (e) => {
      const accordionTrigger = e.target.closest('.sidebar-accordion-trigger');
      if (accordionTrigger) {
        e.preventDefault();
        const tab = accordionTrigger.dataset.accordion;
        this.toggleAccordion(tab);
      }
    });

    // Tab switching
    document.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('.portfolio-tab-btn');
      if (tabBtn) {
        e.preventDefault();
        const tab = tabBtn.dataset.tab;
        this.setTab(tab);
      }
    });

    // Logo returns to Home
    document.querySelectorAll('.js-go-home').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('home');
        this.closeMobileSidebar();
      });
    });

    // Sidebar navigation
    document.addEventListener('click', (e) => {
      const navLink = e.target.closest('.sidebar-nav-link');
      if (navLink) {
        const navType = navLink.dataset.nav;
        if (navType === 'home') {
          e.preventDefault();
          this.switchView('home');
          this.closeMobileSidebar();
        } else if (navType === 'project') {
          e.preventDefault();
          const id = navLink.dataset.id;
          this.openProject(id);
          this.closeMobileSidebar();
        } else if (navType === 'about') {
          e.preventDefault();
          this.switchView('about');
          this.closeMobileSidebar();
        } else if (navType === 'cv') {
          e.preventDefault();
          this.switchView('cv');
          this.closeMobileSidebar();
        } else if (navType === 'contact' || navType === 'connect-telegram' || navType === 'behance') {
          this.closeMobileSidebar();
        }
      }

      // Copy Email link in Connect accordion
      const copyEmailBtn = e.target.closest('.js-copy-email');
      if (copyEmailBtn) {
        e.preventDefault();
        const email = copyEmailBtn.dataset.email || SOCIAL_LINKS.email;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            this.showToast(`Email copied: ${email}`);
          }).catch(() => {
            window.location.href = `mailto:${email}`;
          });
        } else {
          window.location.href = `mailto:${email}`;
        }
        this.closeMobileSidebar();
      }

      // Work Grid card click
      const card = e.target.closest('.project-card');
      if (card) {
        e.preventDefault();
        const projectId = card.dataset.projectId;
        this.openProject(projectId);
      }

      // Back button in Case Study
      const backBtn = e.target.closest('.js-back-to-projects');
      if (backBtn) {
        e.preventDefault();
        this.switchView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Footer Reach Out link
      const reachOut = e.target.closest('.js-reach-out');
      if (reachOut) {
        e.preventDefault();
        window.open(SOCIAL_LINKS.telegram, '_blank', 'noopener,noreferrer');
      }

      // Expand scrollable preview card
      const scrollToggle = e.target.closest('.js-scroll-toggle');
      if (scrollToggle) {
        const cardId = scrollToggle.dataset.cardId;
        const card = document.getElementById(cardId);
        if (card && !card.classList.contains('is-expanded')) {
          e.preventDefault();
          // Collapse other open scroll cards for clean UX
          document.querySelectorAll('.scroll-preview-card.is-expanded').forEach(c => c.classList.remove('is-expanded'));
          card.classList.add('is-expanded');
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }

      // Collapse scrollable preview card
      const scrollCollapse = e.target.closest('.js-scroll-collapse');
      if (scrollCollapse) {
        e.preventDefault();
        const cardId = scrollCollapse.dataset.cardId;
        const card = document.getElementById(cardId);
        if (card) {
          card.classList.remove('is-expanded');
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    // Mobile Hamburger
    if (this.mobileMenuBtn && this.sidebar) {
      this.mobileMenuBtn.addEventListener('click', () => {
        this.sidebar.classList.toggle('mobile-open');
        this.mobileMenuBtn.textContent = this.sidebar.classList.contains('mobile-open') ? 'Close' : 'Menu';
      });
    }

    // Window PopState
    window.addEventListener('popstate', () => {
      this.handleInitialRoute();
    });
  }

  handleInitialRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const id = hash.replace('#project-', '');
      this.openProject(id, false);
    } else if (hash === '#about') {
      this.switchView('about', false);
    } else if (hash === '#cv') {
      this.switchView('cv', false);
    } else {
      this.switchView('home', false);
    }
  }

  openProject(id, updateHistory = true) {
    const resolvedId = id === 'disbalanser' ? 'disbalancer' : id;
    const project = PROJECTS.find(p => p.id === resolvedId);
    if (!project) {
      this.switchView('home');
      return;
    }

    // Automatically align current tab with project's tab and expand accordion
    this.currentTab = project.tab;
    this.expandAccordion(project.tab);
    this.renderHomeWorkGrid();

    this.renderCaseStudy(project);
    this.switchView('case-study', updateHistory, `#project-${resolvedId}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  renderCaseStudy(project) {
    if (!this.caseStudyView) return;

    // Optional logos showcase grid if it's the brand-logos project
    const logosShowcaseHtml = project.isLogosShowcase && project.logosList ? `
      <div style="margin-top: 48px; margin-bottom: 24px;">
        <h3 class="section-label-header">Individual Brand Marks &amp; Logotypes (12 Marks)</h3>
        <div class="logos-showcase-grid">
          ${project.logosList.map(item => `
            <div class="logo-card-item">
              <div class="logo-card-img-wrap">
                <img src="${item.img}" alt="${item.label}" loading="lazy" />
              </div>
              <span class="logo-card-label">${item.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    this.caseStudyView.innerHTML = `
      <a href="#" class="case-study-back-btn js-back-to-projects">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M14 8H2M7 3L2 8l5 5"/>
        </svg>
        <span>Back to ${project.tab === 'enterprise' ? 'Enterprise Projects' : 'Projects'}</span>
      </a>

      <!-- Hero Key Visual Image -->
      <div class="case-study-hero-container">
        <img 
          src="${project.coverImage}" 
          alt="${project.title}" 
          class="case-study-hero-img" 
        />
      </div>

      <!-- Case Header -->
      <h1 class="case-study-title">${project.title}</h1>
      <p class="case-study-tagline">${project.tagline}</p>

      <!-- Badges Row -->
      <div class="case-study-badges-row">
        <span class="case-badge primary">${project.category}</span>
        <span class="case-badge">${project.year}</span>
        ${project.tab === 'enterprise' ? '<span class="case-badge" style="color: #000; font-weight: 600; border-color: rgba(0,0,0,0.2);">🔒 Confidential / NDA</span>' : ''}
        ${project.tags.map(t => `<span class="case-badge">${t}</span>`).join('')}
      </div>

      <!-- Two-Column Case Details -->
      <div class="case-study-body">
        
        <!-- Left Column: Story -->
        <div class="case-study-main-col">
          <section>
            <h2 class="case-section-title">Overview</h2>
            <p class="case-section-text">${project.overview}</p>
          </section>

          <section>
            <h2 class="case-section-title">The Challenge</h2>
            <p class="case-section-text">${project.problem}</p>
          </section>

          <section>
            <h2 class="case-section-title">Strategic Solution</h2>
            <p class="case-section-text">${project.solution}</p>
          </section>

          <section>
            <h2 class="case-section-title">Execution &amp; Rollout</h2>
            <p class="case-section-text">${project.execution}</p>
          </section>

          <section>
            <h2 class="case-section-title">Measurable Impact</h2>
            <p class="case-section-text">${project.impact}</p>
          </section>
        </div>

        <!-- Right Column: Meta Information -->
        <aside class="case-study-side-col">
          <div>
            <div class="case-meta-group-title">Role</div>
            <div class="case-meta-group-val">${project.role}</div>
          </div>

          <div>
            <div class="case-meta-group-title">Timeline</div>
            <div class="case-meta-group-val">${project.timeline}</div>
          </div>

          <div>
            <div class="case-meta-group-title">Platform &amp; Media</div>
            <div class="case-meta-group-val">${project.platform}</div>
          </div>

          <div>
            <div class="case-meta-group-title">Status</div>
            <div class="case-meta-group-val" style="display: flex; align-items: center; gap: 6px;">
              <span style="width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block;"></span>
              <span>Delivered &amp; Live</span>
            </div>
          </div>
        </aside>

      </div>

      <!-- Dedicated Logos Showcase (if applicable) -->
      ${logosShowcaseHtml}

      <!-- Visual Artifacts Gallery -->
      ${project.gallery && project.gallery.length > 0 ? `
        <div class="case-gallery-section">
          <div class="case-gallery-header">
            <h2 class="case-section-title" style="margin-bottom: 0;">Visual Artifacts &amp; Deliverables</h2>
            <span class="project-category">High-resolution design deliverables exported directly from production artboards.</span>
          </div>

          <div class="case-gallery-grid">
            ${project.gallery.map(item => `
              <div class="case-gallery-item ${item.fullWidth ? 'full-width' : ''}">
                <div class="case-gallery-img-container">
                  <img 
                    src="${item.image}" 
                    alt="${item.caption}" 
                    class="case-gallery-img" 
                    loading="lazy" 
                  />
                </div>
                <div class="case-gallery-caption">
                  <span class="case-gallery-tag">${item.tag}</span>
                  <p class="case-gallery-desc">${item.caption}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Interactive Expandable Scrollable Issues (Digests & Letters) -->
      ${project.isScrollableGallery && project.scrollableItems && project.scrollableItems.length > 0 ? `
        <div class="case-gallery-section">
          <div class="case-gallery-header">
            <h2 class="case-section-title" style="margin-bottom: 0;">Interactive Editorial Issues</h2>
            <span class="project-category">Click any preview below to expand and scroll through the full-length issue.</span>
          </div>

          <div class="scroll-gallery-grid">
            ${project.scrollableItems.map((item, idx) => `
              <div class="scroll-preview-card" id="scroll-card-${idx}">
                <div class="scroll-preview-toolbar">
                  <div class="scroll-preview-toolbar-title">
                    <span>${item.title}</span>
                    <span class="scroll-preview-toolbar-hint">↕ Full Scroll Viewport</span>
                  </div>
                  <button class="scroll-preview-collapse-btn js-scroll-collapse" data-card-id="scroll-card-${idx}">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 10l4-4 4 4"/>
                    </svg>
                    <span>Collapse</span>
                  </button>
                </div>
                <div class="scroll-preview-viewport js-scroll-toggle" data-card-id="scroll-card-${idx}">
                  <img 
                    src="${item.image}" 
                    alt="${item.title}" 
                    class="scroll-preview-img" 
                    loading="lazy" 
                  />
                  <div class="scroll-preview-fade">
                    <span class="scroll-preview-cta">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 6l4 4 4-4"/>
                      </svg>
                      Click to expand &amp; scroll full issue
                    </span>
                  </div>
                </div>
                <div class="case-gallery-caption">
                  <span class="case-gallery-tag">${item.tag}</span>
                  <p class="case-gallery-desc">${item.title}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Footer navigation -->
      <footer class="footer-section" style="margin-top: 64px;">
        <h3 class="footer-heading">Interested in this project?</h3>
        <button class="footer-action-link js-reach-out">
          Reach out on Telegram
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </button>
      </footer>
    `;
  }

  switchView(viewName, updateHistory = true, hash = '') {
    this.currentView = viewName;

    // Toggle active class on views
    if (this.homeView) this.homeView.classList.toggle('active', viewName === 'home');
    if (this.caseStudyView) this.caseStudyView.classList.toggle('active', viewName === 'case-study');
    if (this.cvView) this.cvView.classList.toggle('active', viewName === 'cv');
    if (this.aboutView) this.aboutView.classList.toggle('active', viewName === 'about');

    // Update active states on sidebar nav links
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
      const navType = link.dataset.nav;
      if (viewName === 'home' && navType === 'home') {
        link.classList.add('active');
      } else if (viewName === 'about' && navType === 'about') {
        link.classList.add('active');
      } else if (viewName === 'cv' && navType === 'cv') {
        link.classList.add('active');
      } else if (viewName === 'case-study' && navType === 'project') {
        const id = link.dataset.id;
        const currentHash = window.location.hash;
        link.classList.toggle('active', currentHash === `#project-${id}`);
      } else {
        link.classList.remove('active');
      }
    });

    if (updateHistory) {
      if (viewName === 'home') {
        history.pushState(null, '', window.location.pathname);
      } else if (viewName === 'about') {
        history.pushState(null, '', '#about');
      } else if (viewName === 'cv') {
        history.pushState(null, '', '#cv');
      } else if (viewName === 'case-study' && hash) {
        history.pushState(null, '', hash);
      }
    }
  }

  closeMobileSidebar() {
    if (this.sidebar && this.sidebar.classList.contains('mobile-open')) {
      this.sidebar.classList.remove('mobile-open');
      if (this.mobileMenuBtn) this.mobileMenuBtn.textContent = 'Menu';
    }
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
