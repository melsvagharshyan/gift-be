import mongoose from "mongoose";

const { Schema, model } = mongoose;

const cardModel = new Schema(
  {
    cardNumber: { type: String },
    name: { type: String },
    expiry: { type: String },
    cvc: { type: String },
  },
  { timestamps: true }
);

export default model("cards", cardModel);
