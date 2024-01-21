import User from "../models/user-schema.js";

// main home page section

export const HomePage = (req, res) =>{
    
    return res.status(200).json({message: "Welcome to IRCTC"});

}

// User SignUp function

export const signup = async(req, res) =>{

   const {name , email, gender, age, password} = req.body;

   let existingUser;

   try{
     existingUser = await User.findOne({email});
       
   }
   catch(err){
     console.log(err);
   }

   if(existingUser){
    return res.status(400).json({message: "User already exists ! Login Instead"});
   }
   
   const user = new User({
      name : name,
      email : email,
      gender : gender,
      age : age, 
      password : password
   });

   try{
         await user.save() 
    
   }catch(err){
         console.log(err);
   }   

   return res.status(201).json({user});
}

// User Login function

export const login = async(req, res) =>{

    const {email , password }  = req.body;

    let existingUser;

    try{
         existingUser = await User.findOne({email});
         console.log(existingUser);
    }catch(err){
        console.log(err);
    }

    if(!existingUser)
     return res.status(404).json({message: "User not found !"});

    if(password == existingUser.password) 
     return res.status(200).json({message: "Login Successfull !"});

    else 
     return res.status(400).json({message: "Incorrect Password !"}); 
}

