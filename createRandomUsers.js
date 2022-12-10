import fetch from 'node-fetch';
import {mongoose,Schema,model} from 'mongoose';

mongoose.connect();

const userSchema=new Schema({
    usernsme:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date_joined:{
        type:Date,
        required:true
    }
});

const User=model('User',userSchema);



async function getUsers(){
    const getUsers=await fetch('https://randomuser.me/api/?format=json&results=5&inc=name,email,login,registered');
    const res=await getUsers.json();
    console.log(res);
    


}

getUsers();