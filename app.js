//jshint esversion:6

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const _ = require('lodash');
const date = require(__dirname + "/date.js");
const year = date.getYear();

require('dotenv').config();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//ComposeSchema
const postSchema = {
  // title: {
  //   type: String,
  //   required: [true, "Title is required."],
  // },
  name:{
    type: String,
    required: [true, "Title is required."],
  },
  content: {
    type: String,
    required: [true, "Content is required."]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
};

//Mongoose Model
const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){

  Post.find({}, function(err, posts){
    if(!err){
    res.render("home", { posts: posts, year: year });
    }
  });
  
});

app.get("/about", function(req, res){
  res.render("about", {year: year});
});

app.get("/compose", function(req, res){
  res.render("compose",{year: year});
});

app.post("/compose", function(req, res){
  const post = new Post ({
    // title: req.body.inputTitle,
    name: req.body.inputName,
    content: req.body.txtPost,
  });

  post.save(function(err){
    if (!err){
      res.redirect("/");
  }
  });
});

app.get("/post/:postId", function(req, res){
  // res.render(req.params);
  const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    if(err){
      res.status(404).render("404", {year: year});
    } else {
    //   res.render("post", {title: post.title, content: post.content, year: year});
    const dateCreated = post.createdAt;
    const format = {month: "long",day: "numeric",year: "numeric",hour: "numeric",minute: "2-digit"};
    const formatedDate = dateCreated.toLocaleDateString(undefined, format);
    res.render("post", {
      // title: post.title,
      content: post.content,
      name: post.name,
      date: formatedDate,
      year: year
    });
    }
  });
  
});

//Heroku
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//404 Page not found
app.use(function (req, res, next) {
  res.status(404).render("404", {year: year});
});

app.listen(port, function() {
  console.log("Server started on port 3000");
});
