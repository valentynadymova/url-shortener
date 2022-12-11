import mongoose from "mongoose";
const urlSchema=new mongoose.Schema({
    urlId:{
        type:String,
        required:true
    },
    orgUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    }
})

const URL = mongoose.model("URL", urlSchema);

export default URL;
