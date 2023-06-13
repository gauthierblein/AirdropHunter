import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String },
    cover: {type: String}
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
