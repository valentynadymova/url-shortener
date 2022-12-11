import mongoose from "mongoose";

// const urlSchema = new mongoose.Schema({
//   url: {
//     required: true,
//     type: String,
//     },
//   id: {
//     required: true,
//         type: String
//     }
// });
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
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    date:{
        type:String,
        default:Date.now
    }
})

const URL = mongoose.model("URL", urlSchema);

export default URL;
