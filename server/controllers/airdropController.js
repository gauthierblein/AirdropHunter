import AirdropModel from "../models/airdropModel.js";
import fs from "fs";


// Get all Airdrops
export const getAllAirdrops = (req, res, next) => {
  AirdropModel.find()
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get user Airdrops
export const myAirdrops = (req, res, next) => {
  AirdropModel.findOne({userId: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get one Airdrop
export const getOneAirdrop = (req, res, next) => {
  AirdropModel.findOne({_id: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Delete an Airdrop
export const deleteAirdrop = async (req, res) => {
  AirdropModel.findByIdAndDelete({_id : req.params.id})
  .then(() => {res.status(201).json({message: 'Annonce effacée!'})})
  .catch((error) => {res.status(400).json({error: error})})
}; 

// Update an Airdrop
export const updateAirdrop = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  AirdropModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      blockchain: req.body.blockchain,
      description: req.body.description,
      duration: req.body.duration,
      price: req.body.price,
    }
  )
      .then(() => {res.status(201).json({message: 'Annonce modifiée!'})})
      .catch((error) => {res.status(400).json({error: error})})
}; 
