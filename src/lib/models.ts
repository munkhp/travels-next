import mongoose, { Schema, type Model } from "mongoose";

/** Schemas mirror the collections in the provided MongoDB dump. */

const PriceSchema = new Schema({ label: String, amount: Number });
const ScheduleSchema = new Schema({ start: String, end: String });
const TourItineraryRefSchema = new Schema({
  label: String,
  itinerary: { type: Schema.Types.ObjectId, ref: "Itinerary" },
});

const TourSchema = new Schema(
  {
    name: { type: String, required: true },
    summary: String,
    mediaUrl: String,
    mediaUrls: [String],
    destination: { type: Schema.Types.ObjectId, ref: "Destination" },
    duration: Number,
    prices: [PriceSchema],
    schedules: [ScheduleSchema],
    supplement: Number,
    group: Boolean,
    groupAvailable: Boolean,
    groupPrice: Number,
    path: String,
    reasons: [String],
    itineraries: [TourItineraryRefSchema],
  },
  { collection: "tours" }
);

const DestinationSchema = new Schema(
  { title: String, featuredImage: String },
  { collection: "destinations" }
);

const ItinerarySchema = new Schema(
  {
    title: String,
    description: String,
    featuredImage: String,
    activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
    meals: [Number],
  },
  { collection: "itineraries" }
);

const ActivitySchema = new Schema(
  { title: String, featuredImage: String },
  { collection: "activities" }
);

const EventSchema = new Schema(
  {
    name: String,
    summary: String,
    description: String,
    mediaUrl: String,
    mediaUrls: [String],
  },
  { collection: "events" }
);

const OrderSchema = new Schema(
  {
    tourName: { type: String, required: true },
    name: { type: String, required: true },
    country: String,
    age: String,
    adults: Number,
    children: Number,
    email: { type: String, required: true },
    title: String,
    comment: String,
    arrivalDate: String,
  },
  { collection: "orders", timestamps: true }
);

const MessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { collection: "messages", timestamps: true }
);

function model<T>(name: string, schema: Schema): Model<T> {
  return (mongoose.models[name] as Model<T>) ?? mongoose.model<T>(name, schema);
}

export const TourModel = model("Tour", TourSchema);
export const DestinationModel = model("Destination", DestinationSchema);
export const ItineraryModel = model("Itinerary", ItinerarySchema);
export const ActivityModel = model("Activity", ActivitySchema);
export const EventModel = model("Event", EventSchema);
export const OrderModel = model("Order", OrderSchema);
export const MessageModel = model("Message", MessageSchema);
