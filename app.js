const express = require("express");
require('dotenv').config();

const port = 3000;
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const ChannelModel = require('./models/channel');
const dbUrl = process.env.url;

//mongoose
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(dbUrl, connectionParams)
    .then(()=>{
        console.info("connected")
    })
     .catch((e) => {
        console.log("error:",e);
     });
    
var path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/home",function(req, res){
    console.log("get");
    res.send("hello world");
});



app.post("/home", (req, res) => {
   
    const name = req.body.name;
    const email = req.body.email;
    console.log("post");
    res.send("saved");


const channelModel = new ChannelModel();

  channelModel instanceof ChannelModel;
  channelModel instanceof mongoose.Model;
  channelModel instanceof mongoose.Document;

  channelModel.name = name;
  channelModel.email = email;

  var output;
  (async () => {
    output = await channelModel.save();

  });

  channelModel.save().then(savedDoc => {
    savedDoc === channelModel;
    console.log(savedDoc);
  });
});

app.listen(port, () => {
    console.log(`server listening at ${port}`);
});