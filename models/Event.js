// Tour Model
import mongoose from "mongoose";

const { String } = mongoose.Schema.Types;

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
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
    scheduleText: {
      type: String,
      required: true,
    },
    locationText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
