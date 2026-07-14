import mongoose, { Schema, type Model } from "mongoose";

/**
 * MongoDB is only used for form submissions (booking enquiries and contact
 * messages). All site content lives in Sanity — see src/sanity/.
 */

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
    enquiryType: String,
    departure: String,
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

export const OrderModel = model("Order", OrderSchema);
export const MessageModel = model("Message", MessageSchema);
