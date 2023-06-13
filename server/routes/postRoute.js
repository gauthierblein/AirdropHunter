import express from "express";
import { myPosts, getAllPosts, getOnePost, deletePost, updatePost } from "../controllers/postController.js";
import PostModel from "../models/postModel.js";

const router = express.Router()



//CREATE POST
router.post("/create/posts", async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts', getAllPosts)
router.get('/:id', myPosts)
router.get('/posts/:id', getOnePost);
router.delete("/deletepost/:id", deletePost)
router.put("/updatepost/:id", updatePost)



export default router;