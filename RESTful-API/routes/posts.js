const express = require("express");
const Post = require("../models/Post");
const route = express.Router();


//return the post to the server in json format
route.get("/",async (req,res) => {
  // res.send("Posts route");
  try{
    const posts = await Post.find();
    res.send(posts);
  }
  catch(err){
    res.json(err);
  }
});

//return the specific post as in the url title
route.get("/:title",async (req,res) => {
  try{
    const posts = await Post.find({title: req.params.title});
    res.json(posts);
  }
  catch(err){
    res.json(err);
  }
});

//adds a new post to the database
route.post("/",async (req,res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // post.save()
  //     .then(data => {
  //       res.json(data);
  //     })
  //     .catch(err => {
  //       res.json({message: err});
  //     });
  try{
    const savedPost = await post.save();
    res.json(savedPost);
  }
  catch(err){
    res.json(err);
  }
});

//deletes a specific posts
route.delete("/:title",async (req,res) => {
  try{
    const removePost = await Post.deleteOne({title:req.params.title});
    res.json(removePost);
  }
  catch(err){
    res.json({message:err});
  }
});

//updates the selected posts
route.patch("/:title",async (req,res) => {
  try{
    await Post.updateOne({title: req.params.title},{$set:{title: req.body.title}},function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("Successfullt updated the post title to:" + req.body.title);
      }
    });
  }
  catch(err){
    res.json(err);
  }
});

module.exports = route;
