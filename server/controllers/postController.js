import PostModel from "../models/postModel.js";




// Get all Posts
export const getAllPosts = (req, res, next) => {
  PostModel.find()
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get user Items
export const myPosts = (req, res, next) => {
  PostModel.findOne({userId: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Get one Item
export const getOnePost = (req, res, next) => {
  PostModel.findOne({_id: req.params.id})
  .then((allItems) => {res.status(200).json(allItems); })
  .catch((error) => {res.status(400).json({error: error,});});
};

// Delete an item
export const deletePost = async (req, res) => {
  PostModel.findByIdAndDelete({_id : req.params.id})
  .then(() => {res.status(201).json({message: 'Annonce effacée!'})})
  .catch((error) => {res.status(400).json({error: error})})
}; 

// Update an item
export const updatePost = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  PostModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      location: req.body.location,
    }
  )
      .then(() => {res.status(201).json({message: 'Annonce modifiée!'})})
      .catch((error) => {res.status(400).json({error: error})})
}; 
