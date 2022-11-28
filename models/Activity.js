// Tour Model
import mongoose from "mongoose";

const { String } = mongoose.Schema.Types;

const ActivitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

export default mongoose.models.Activity ||
  mongoose.model("Activity", ActivitySchema);
