/**
 * Portfolio media kit content — edit this file to update galleries and copy.
 * Media paths are relative to /public (e.g. "/portfolio/assets/lifestyle/prada.jpg").
 */

/** Click-to-play video for Lifestyle / Travel galleries */
export type PortfolioDriveVideoItem = {
  type: "drive";
  /** Google Drive share link or file ID (reference / backup) */
  url: string;
  /** Self-hosted MP4 under /public — used for inline playback with custom controls */
  video: string;
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
  | PortfolioDriveVideoItem
  | PortfolioImageItem
  | PortfolioFileVideoItem;

export type PhotosPortfolioItem = PortfolioImageItem & {
  gridSlot: "left" | "mid-top-left" | "mid-top-right" | "mid-bottom" | "right";
};

export function isDriveVideoItem(
  item: PortfolioGalleryItem
): item is PortfolioDriveVideoItem {
  return item.type === "drive";
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
 * Lifestyle gallery — add matching MP4 files under public/portfolio/videos/lifestyle/.
 * Google Drive links are kept as reference; playback uses the local video path.
 */
export const lifestylePortfolio: PortfolioDriveVideoItem[] = [
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1Qf2gtenj8Vrbyu2k-EY1MjbCgsFFgi0x/view?usp=sharing",
    video: "/portfolio/videos/lifestyle/prada.mp4",
    title: "Prada",
    subtitle: "Unboxing",
    category: "FASHION",
    poster: "/portfolio/assets/lifestyle/prada.jpg",
  },
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1lpw0nrHSc35P-GRjC8fC5Uj28-T9YkYJ/view?usp=sharing",
    video: "/portfolio/videos/lifestyle/rituals.mp4",
    title: "Rituals",
    subtitle: "Product Review",
    category: "BEAUTY",
    poster: "/portfolio/assets/lifestyle/rituals.jpg",
  },
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1PvyazwDdSbAbddaLRsAiigFC_4FpPiKM/view?usp=sharing",
    video: "/portfolio/videos/lifestyle/dji-osmo.mp4",
    title: "DJI Osmo",
    subtitle: "Unboxing",
    category: "TECH",
    poster: "/portfolio/assets/lifestyle/dji-osmo.jpg",
  },
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1rNFb-01L_cUrw7JT8Ohd5hSdwSVvY4ds/view?usp=sharing",
    video: "/portfolio/videos/lifestyle/kiko-milano.mp4",
    title: "Kiko Milano",
    subtitle: "Problem/Solution",
    category: "BEAUTY",
    poster: "/portfolio/assets/lifestyle/kiko-milano.jpg",
  },
];

/**
 * Travel gallery — add matching MP4 files under public/portfolio/videos/travel/.
 */
export const travelPortfolio: PortfolioDriveVideoItem[] = [
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1CdnaVPV6vAhq65PPvw4QXgXnexyw8OFn/view?usp=sharing",
    video: "/portfolio/videos/travel/royal-caribbean.mp4",
    title: "Royal Caribbean",
    subtitle: "Experience Storytelling",
    category: "CRUISE",
    poster: "/portfolio/assets/travel/royal-caribbean.jpg",
  },
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1N2RJTeyjouzr91xMzPxU4zDMx4jDWvr1/view?usp=sharing",
    video: "/portfolio/videos/travel/primark.mp4",
    title: "Primark",
    subtitle: "Testimonial Video Content",
    category: "LUGGAGE",
    poster: "/portfolio/assets/travel/primark.jpg",
  },
  {
    type: "drive",
    url: "https://drive.google.com/file/d/1cOLJjMS1gtjTFzpoSXc4C8eSFuVcUEcc/view?usp=sharing",
    video: "/portfolio/videos/travel/acropolis.mp4",
    title: "Acropolis",
    subtitle: "Voiceover Storytelling",
    category: "EXPERIENCE",
    poster: "/portfolio/assets/travel/acropolis.jpg",
  },
  {
    type: "drive",
    url: "https://drive.google.com/file/d/16zG-wF2Liwd7a2vkH-qQGGtNsL0eJppg/view?usp=sharing",
    video: "/portfolio/videos/travel/finn-lough.mp4",
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
    title: "Prada",
    subtitle: "Fashion",
    category: "Photography",
    media: "/portfolio/assets/photos/05.jpg",
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
    { label: "Instagram", href: "https://instagram.com/passaporterf" },
    { label: "TikTok", href: "https://tiktok.com/@passaporterf" },
    { label: "YouTube", href: "https://youtube.com/@passaporterf" },
    { label: "Email", href: "mailto:passaporterf@gmail.com" },
    { label: "Website", href: "https://passaporterf.com" },
  ],
} as const;

export function resolvePortfolioMedia(path: string): string {
  return path;
}
