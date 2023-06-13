import express from "express";
import { myAirdrops, getAllAirdrops, getOneAirdrop, deleteAirdrop, updateAirdrop } from "../controllers/airdropController.js";
import AirdropModel from "../models/airdropModel.js";

const router = express.Router()



//CREATE AIRDROP
router.post("/create/airdrops", async (req, res) => {
  const newPost = new AirdropModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', getAllAirdrops)
router.get('/:id', myAirdrops)
router.get('/airdrops/:id', getOneAirdrop);
router.delete("/deleteairdrop/:id", deleteAirdrop)
router.put("/update/:id", updateAirdrop)



export default router;