import fetch from 'node-fetch';
import {mongoose,Schema,model} from 'mongoose';


mongoose.connect('mongodb+srv://ValentynaDymova:YWViCVvgSehhpyva@cluster0.6nr2zyw.mongodb.net/test');

const userSchema=new Schema({
    username:{
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
    const result=process.argv[2];
    const getUsers=await fetch(`https://randomuser.me/api/?format=json&results=${result}&inc=name,email,login,registered`);
    try {
        const res = await getUsers.json();
        console.log(res);
        const users=res.results.map((user)=>({
    
            username:user['login']['username'],
            first_name:user['name']['first'],
            last_name:user['name']['last'],
            email:user['email'],
            password:user['login']['password'],
            date_joined:user['registered']['date'],

        }))
        console.log(users);
        await User.insertMany(users);

    }catch(error){
        console.log({error})
    }
    
}

getUsers();


