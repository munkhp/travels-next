// Tour Model
import mongoose from "mongoose";

const { String } = mongoose.Schema.Types;

const DestinationSchema = new mongoose.Schema(
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

export default mongoose.models.Destination ||
  mongoose.model("Destination", DestinationSchema);
