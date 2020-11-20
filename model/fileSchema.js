const mongoose = require("mongoose");

const uploadedFileSchema = new mongoose.Schema({
  file:{
        type:String
    },
    fileName:{
      type: String
    } ,
    filePath:{
        type: String
      } 
},{
    timestamps: true
});

const uploadedFiles = mongoose.model("uploadedFiles", uploadedFileSchema);


module.exports = uploadedFiles;