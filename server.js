import mongoose from 'mongoose';
import app from './app.js'
import dotenv from 'dotenv';


const PORT = process.env.PORT || 3030;
const uriDb=process.env.DB_HOST;

mongoose
.connect(uriDb,{useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=>{
    console.log('DB connection successful');
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT : ${PORT}`)
    });
}).catch((err)=>{
    console.log(err.message);
    process.exit(1);
})

