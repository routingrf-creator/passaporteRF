/**
 * Portfolio media kit content — edit this file to update galleries and copy.
 * Media paths are relative to /public (e.g. "/portfolio/assets/lifestyle/prada.jpg").
 */

/** Click-to-play video for Lifestyle / Travel galleries (YouTube Shorts URL) */
export type PortfolioYoutubeVideoItem = {
  type: "youtube";
  /** Public YouTube Shorts link (e.g. https://youtube.com/shorts/VIDEO_ID) */
  url: string;
  title: string;
  subtitle: string;
  category: string;
  description?: string;
  /** Thumbnail shown until the user clicks play */
  poster: string;
};

export type PortfolioImageItem = {
  type: "image";
  title: string;
  subtitle: string;
  category: string;
  description?: string;
  media: string;
};

export type PortfolioFileVideoItem = {
  type: "video";
  title: string;
  subtitle: string;
  category: string;
  description?: string;
  media: string;
  poster?: string;
};

export type PortfolioGalleryItem =
  | PortfolioYoutubeVideoItem
  | PortfolioImageItem
  | PortfolioFileVideoItem;

export type PhotosPortfolioItem = PortfolioImageItem & {
  gridSlot: "left" | "mid-top-left" | "mid-top-right" | "mid-bottom" | "right";
};

export function isYoutubeVideoItem(
  item: PortfolioGalleryItem
): item is PortfolioYoutubeVideoItem {
  return item.type === "youtube";
}

export const portfolioAssets = {
  coverPhoto: "/portfolio/assets/cover-photo.png",
  whoWeArePhoto: "/portfolio/assets/who-we-are-photo.png",
  servicesPhoto: "/portfolio/assets/services-photo.jpg",
  processPhoto: "/portfolio/assets/process-photo.jpg",
  contactPhotoTopLeft: "/portfolio/assets/contact-photo-top-left.jpg",
  contactPhotoBottomRight: "/portfolio/assets/contact-photo-bottom-right.jpg",
  logo: "/logo.png",
} as const;

export const coverContent = {
  brand: "PASSAPORTERF",
  title: "Portfolio",
  eyebrow: "UGC CREATORS",
  year: "2026",
  category: "TRAVEL & LIFESTYLE",
  tagline: "Travel content, elevated.",
} as const;

export const whoWeAreContent = {
  heading: "WHO WE ARE",
  body:
    "We are a travel and lifestyle creator duo passionate about transforming exceptional experiences into captivating visual stories. Specializing in premium UGC, we create authentic, cinematic content for luxury hotels, destinations, and lifestyle brands that inspires audiences and elevates brand presence.",
  handle: "@PASSAPORTERF",
  signature: "RAFA & FÊ",
} as const;

export const whyPartnerContent = {
  statement:
    "Transforming exceptional experiences into authentic visual stories that inspire travelers and elevate brands.",
  heading: "WHY PARTNER WITH US",
  signature: "RAFA & FÊ",
} as const;

export const servicesContent = {
  leftHeading: "WHY\nPARTNER\nWITH US?",
  servicesHeading: "SERVICES",
  expertiseHeading: "OUR EXPERTISE",
  services: [
    "UGC Videos",
    "Drone Footage",
    "Hotel & Resort Content",
    "Reels & TikTok Videos",
    "Photography",
    "Voiceovers",
    "Scriptwriting",
    "Monthly Content Packages",
  ],
  expertise: [
    "Authentic storytelling",
    "Luxury-Inspired Visual Style",
    "Premium Content Production",
    "Travel Industry Expertise",
    "Efficient Content Delivery",
    "Multilingual Storytelling",
  ],
} as const;

/**
 * Lifestyle gallery — set `url` to a public YouTube Shorts link.
 */
export const lifestylePortfolio: PortfolioYoutubeVideoItem[] = [
  {
    type: "youtube",
    url: "https://youtube.com/shorts/6yP9dYkWPrY",
    title: "Prada",
    subtitle: "Unboxing",
    category: "FASHION",
    poster: "/portfolio/assets/lifestyle/prada.jpg",
  },
  {
    type: "youtube",
    url: "https://youtube.com/shorts/wprReFDmm3k",
    title: "Rituals",
    subtitle: "Product Review",
    category: "BEAUTY",
    poster: "/portfolio/assets/lifestyle/rituals.jpg",
  },
  {
    type: "youtube",
    url: "https://youtube.com/shorts/m0kZJLalfDo",
    title: "Aurlux",
    subtitle: "Testimonial",
    category: "BEAUTY",
    poster: "/portfolio/assets/lifestyle/aurlux.jpg",
  },
  {
    type: "youtube",
    url: "https://youtube.com/shorts/2azeMeM2sEM",
    title: "Kiko Milano",
    subtitle: "Problem/Solution",
    category: "BEAUTY",
    poster: "/portfolio/assets/lifestyle/kiko-milano.jpg",
  },
];

/**
 * Travel gallery — set `url` to a public YouTube Shorts link.
 */
export const travelPortfolio: PortfolioYoutubeVideoItem[] = [
  {
    type: "youtube",
    url: "https://www.youtube.com/shorts/u_xElmWrElE",
    title: "Royal Caribbean",
    subtitle: "Experience Storytelling",
    category: "CRUISE",
    poster: "/portfolio/assets/travel/royal-caribbean.jpg",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/shorts/tmpPtCcyDaI",
    title: "Primark",
    subtitle: "Testimonial Video Content",
    category: "LUGGAGE",
    poster: "/portfolio/assets/travel/primark.jpg",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/shorts/K7R-xPlNl1U",
    title: "Acropolis",
    subtitle: "Voiceover Storytelling",
    category: "EXPERIENCE",
    poster: "/portfolio/assets/travel/acropolis.jpg",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/shorts/MRtSr_447fM",
    title: "Finn Lough",
    subtitle: "Experience Storytelling",
    category: "HOTEL",
    poster: "/portfolio/assets/travel/finn-lough.jpg",
  },
];

/** Photos gallery — masonry layout slots match the PDF page */
export const photosPortfolio: PhotosPortfolioItem[] = [
  {
    type: "image",
    title: "Finn Lough",
    subtitle: "Luxury Stay",
    category: "Photography",
    media: "/portfolio/assets/photos/01.jpg",
    gridSlot: "left",
  },
  {
    type: "image",
    title: "Kiko Milano",
    subtitle: "Beauty",
    category: "Photography",
    media: "/portfolio/assets/photos/02.jpg",
    gridSlot: "mid-top-left",
  },
  {
    type: "image",
    title: "Rituals",
    subtitle: "Lifestyle",
    category: "Photography",
    media: "/portfolio/assets/photos/03.jpg",
    gridSlot: "mid-top-right",
  },
  {
    type: "image",
    title: "Pilot Athens",
    subtitle: "Dining",
    category: "Photography",
    media: "/portfolio/assets/photos/04.jpg",
    gridSlot: "mid-bottom",
  },
  {
    type: "image",
    title: "Iunik",
    subtitle: "Fashion",
    category: "Photography",
    media: "/portfolio/assets/photos/06.jpg",
    gridSlot: "right",
  },
];

export const investmentGuideContent = {
  heading: "INVESTMENT\nGUIDE",
  intro:
    "Tailored content solutions designed to showcase your brand's unique story and create meaningful connections with your audience.",
  packages: [
    {
      title: "PHOTOGRAPHY",
      features: [
        "Lifestyle photography",
        "Product/property shots",
        "Edited high-resolution images",
      ],
    },
    {
      title: "VIDEO CREATION",
      features: [
        "UGC video",
        "Reels/TikTok format",
        "Script + filming + editing",
      ],
    },
    {
      title: "PREMIUM CONTENT PACKAGE",
      features: [
        "Video + Photography",
        "Multiple social assets",
        "Raw footage",
      ],
    },
    {
      title: "LUXURY STAY PACKAGE",
      features: [
        "Room tour",
        "Hotel/resort storytelling",
        "Amenities & experiences",
      ],
    },
    {
      title: "MONTHLY BRAND PARTNERSHIP",
      features: [
        "Recurring content creation",
        "Consistent social media assets",
        "Brand storytelling",
      ],
    },
  ],
} as const;

export const processContent = {
  heading: "PROCESS",
  steps: [
    "Brief",
    "Creative Concept",
    "Filming",
    "Editing",
    "Delivery",
  ],
} as const;

export const contactContent = {
  heading: "READY TO WORK WITH US?",
  subheading: "CONTACT",
  label: "EMAIL US AT",
  email: "PASSAPORTERF@GMAIL.COM",
  href: "mailto:passaporterf@gmail.com",
  social: [
    { label: "Instagram", href: "https://instagram.com/passaporterf.ugc" },
    { label: "TikTok", href: "https://tiktok.com/@passaporterf.ugc" },
    { label: "YouTube", href: "https://youtube.com/@passaporterf" },
    { label: "Email", href: "mailto:passaporterf@gmail.com" },
    { label: "Website", href: "https://passaporterf.com" },
  ],
} as const;

export function resolvePortfolioMedia(path: string): string {
  return path;
}
