export interface Price {
  _id: string;
  label: string;
  amount: number;
}

export interface Schedule {
  _id: string;
  start: string;
  end: string;
}

export interface TourItineraryRef {
  _id: string;
  label: string;
  itinerary: string;
}

export interface Tour {
  _id: string;
  name: string;
  slug: string;
  summary: string;
  mediaUrl: string;
  mediaUrls: string[];
  destination: string;
  duration: number;
  prices: Price[];
  schedules: Schedule[];
  supplement?: number;
  group?: boolean;
  groupAvailable?: boolean;
  groupPrice?: number;
  path?: string;
  reasons: string[];
  itineraries: TourItineraryRef[];
}

export interface Destination {
  _id: string;
  title: string;
  tagline?: string;
  featuredImage: string;
}

export interface Itinerary {
  _id: string;
  title: string;
  description: string;
  featuredImage: string;
  activities: string[];
  meals: number[];
}

export interface Activity {
  _id: string;
  title: string;
  featuredImage: string;
}

export interface TravelEvent {
  _id: string;
  name: string;
  summary: string;
  description: string;
  mediaUrl: string;
  mediaUrls: string[];
}

export interface OrderInput {
  tourName: string;
  name: string;
  country: string;
  email: string;
  title: string;
  adults: number;
  children: number;
  comment?: string;
  arrivalDate?: string;
}

export interface MessageInput {
  name: string;
  email: string;
  comment: string;
}
