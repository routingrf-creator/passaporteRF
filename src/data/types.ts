export interface Destination {
  slug: string;
  city: string;
  country: string;
  continent: string;
  tags: string[];
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  bestTime: string;
  tips: string[];
  avgDays: number;
  priceRange: string;
}

export interface Testimonial {
  name: string;
  avatar: string;
  destination: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
