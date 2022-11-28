// Tour Model
import mongoose from "mongoose";
import Activity from "./Activity";

const { String, ObjectId, Number } = mongoose.Schema.Types;

const ItinerarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    activities: [
      {
        type: ObjectId,
        ref: Activity,
      },
    ],
  },
  {
    timestamps: false,
  }
);

export default mongoose.models.Itinerary ||
  mongoose.model("Itinerary", ItinerarySchema);
