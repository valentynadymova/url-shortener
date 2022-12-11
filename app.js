import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
import { nanoid } from "nanoid";
import validateUrl from './middleware/validateUrl.js';
import URL from "./model/url.model.js";

dotenv.config();

const app=express();

const formatsLogger=app.get('env')==='development'? 'dev':"short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());


app.post("/short", validateUrl, async(req, res) => {
    const { orgUrl } = req.body;
    const base= process.env.DOMAIN_URL;

    let urlId=nanoid(7);
    try {
        let url=await URL.findOne({orgUrl});
        if (url){
            res.json(url);
        }else{
            const shortUrl=`${base}/${urlId}`;

            url=new URL({
                orgUrl,
                shortUrl,
                urlId,
                date: new Date()
            });
            await url.save();
            res.json(url);
        }  
    } catch (error) {
       res.send('An error occured.Try again')   
    }
  });

  app.get("/all", async (req, res, next) => {
    URL.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });

  app.get('/:urlId', async(req,res)=>{
    try{
    const urlId=req.params.urlId;
    const url=await URL.findOne({urlId});

    if (url){
        url.save();
        return res.redirect(url.orgUrl);
    }else res.status(404).json("Not found");
    }catch (error){
        console.log(error);
        res.status(500).json('Server error')}
  });

  
// app.use((err,req,res,next)=>{
//     const {status=500,message="Internal server error"}=err;
//     res.status(status).json({message});
// })

export default app;
