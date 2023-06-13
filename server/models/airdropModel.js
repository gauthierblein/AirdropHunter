import mongoose from "mongoose";

const airdropSchema = mongoose.Schema(
  {
    userId: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    blockchain: { type: String },
    category: { type: String },
    duration: { type: String },
    price: { type: String },
    cover: {type: String}
  },
  {
    timestamps: true,
  }
);

var AirdropModel = mongoose.model("Airdrops", airdropSchema);
export default AirdropModel;
