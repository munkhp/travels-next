// Tour Model
import mongoose from "mongoose";
import Itinerary from "./Itinerary";
import Destination from "./Destination";

const { String, ObjectId, Number, Boolean } = mongoose.Schema.Types;

const TourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaUrls: {
      type: [String],
      required: true,
    },
    group: {
      type: Boolean,
      default: false,
    },
    groupPrice: {
      type: Number,
      required: false,
    },
    reasons: [
      {
        type: String,
      },
    ],
    itineraries: [
      {
        label: {
          type: String,
          required: true,
        },
        itinerary: {
          type: ObjectId,
          ref: Itinerary,
        },
      },
    ],
    destination: {
      type: ObjectId,
      ref: Destination,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    prices: [
      {
        label: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    supplement: {
      type: Number,
      required: false,
    },
    schedules: [
      {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: false,
  }
);

export default mongoose.models.Tour || mongoose.model("Tour", TourSchema);
