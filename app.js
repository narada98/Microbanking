const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/signin",function(req,res){
  res.render("signin");
})

app.get("/agent",function(req,res){
  res.render("agent");
})

app.get("/about",function(req,res){
  res.render("about");
})

app.get("/contact",function(req,res){
  res.render("contact");
})

app.get("/profilecard",function(req,res){
  res.render("profilecard");
})



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
