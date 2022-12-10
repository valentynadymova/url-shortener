const express = require('express');
const app=express();

const PORT = PROCESS.ENV.PORT || 3030;
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})
