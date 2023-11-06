const express = require("express");
require('dotenv').config();
require('./src/config/database')
const myRoutes = require('./src/routes')
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const ChannelModel = require('./src/models/channel');
const dbUrl = process.env.url;

//mongoose


    
var path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.get("/",function(req, res){
    console.log("get");
    res.send("ewwwwwww");
});

app.use('/', myRoutes);





    


//   const channelModel = new ChannelModel();

//   channelModel instanceof ChannelModel;
//   channelModel instanceof mongoose.Model;
//   channelModel instanceof mongoose.Document;

//   channelModel.name = name;
//   channelModel.email = email;

// console.log(channelModel.name);

//   var output;
//   (async () => {
//     output = await channelModel.save();

//   });

//   channelModel
//   .save()
//   .then(savedDoc => {
//     savedDoc === channelModel;
//     console.log(savedDoc);
//   })
//   .catch((e) => {
//     console.log(e)
//   });
 

app.listen(port, () => {
    console.log(`server listening at ${port}`);
});