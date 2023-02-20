export interface Resort {
  id: string;
  name: string;
  description: string;
  location: Location;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  rating: number;
  reviews: Review[];
  reviewsCount: number;
  dateCreated: string;
  accommodations: Accommodation[];
  amenities: string[];
  nearbyAttractions: NearbyAttraction[];
  rules: string[];
  cancellationPolicy: string;
  faqs: IFAQ[];
  localActivities: LocalActivity[];
  events: Event[];
  images: string[];
  price: number;
  accommodationsCount: number;
  amenitiesCount: number;
  nearbyAttractionsCount: number;
  faqsCount: number;
  localActivitiesCount: number;
  eventsCount: number;
  imagesCount: number;
};

export interface Review {
  rating: number;
  review: string;
  reviewBy: string;
  dateCreated: string;
};

export interface Accommodation {
  name: string;
  description: string;
};

export interface Location {
  lat: number;
  long: number;
};

export interface NearbyAttraction {
  name: string;
  description: string;
  image: string;
};

export interface IFAQ {
  question: string;
  answer: string;
};

export interface LocalActivity {
  name: string;
  description: string;
  image: string;
};

export interface Event {
  id: string;
  name: string;
  description: string;
  images: string[];
  resortId: string;
  dateCreated: string;
};

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};