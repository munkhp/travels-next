const mongoose = require("mongoose");

const { String } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema(
  {
    tourName: { type: String, required: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: Number, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    comment: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
