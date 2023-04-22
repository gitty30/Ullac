const authModel=require('../model/authModel');
const bcrypt = require("bcryptjs");
const uuid=require('uuid');
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv');
const { response } = require('express');
dotenv.config();
const signup=async(req,res,next)=>{
    const{ firstname,lastname,email,password}=req.body;
    if(!firstname && !lastname  && !email && !password)
    {
        return res.status(404).json('Enter value first!!');
    }
  
    let existingUser;
    try {
        existingUser=await authModel.findOne({email:email})
    } catch (error) {
        console.log(error)
    }
    if(existingUser)
    {
        console.log(existingUser)
        return res.status(404).json({msg:'user already exists!! Login instead'})
    }
    else{
   console.log(firstname+" "+lastname);
  

   
const hashedPassword = bcrypt.hashSync(password);
//    console.log(encryPassword);
    try{
     const user=await authModel.create({firstname,lastname,email,password:hashedPassword}) 
       res.status(200).json(user);
    }catch(error){
       res.status(404).json(error)
    }
}
}
const login=async(req,res,next)=>{
    const{email,password}=req.body;
    let existingUser;
    try {
        existingUser=await authModel.findOne({email})
    } catch (error) {
        return new Error(error);
    }
    if(!existingUser)
    {
        res.status(404).json({msg:'User not found.SignUp please'})
    }
const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    
    if(!isPasswordCorrect)
    {
     
     return res.status(400).json({msg:'Invalid Email/Password'})
    }
    const token=jwt.sign({id:existingUser._id},process.env.SECRET_KEY,{
        expiresIn:"30d",
    })
      if (req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = "";
      }
      console.log(token);
    
    res.cookie(String(existingUser._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      httpOnly: true,
      sameSite: "lax",
    });
    
    return res.status(200).json({msg:'Succesfully Loggedin !!!',existingUser})
    

}

const verify= async(req,res,next)=>{
    const cookie=req.headers.cookie;
    // console.log(cookie);
    // const { authorization } = req.headers;
    // console.log(authorization);
    // if(!authorization && !authorization.startsWith('bearer'))
    // {
    //     return res.status(404).json('Token not present');
    // }
    console.log(cookie)
     const token = cookie.split("=")[3];
     console.log(token)
     if (!token) {
       res.status(404).json({ message: "No token found" });
     }
    const decoded=jwt.verify(String(token),process.env.SECRET_KEY);
    if(!decoded)
    {
        return res.status(400).json('caught an error while accesing the token');
    }
    const id=decoded.id;
    req.id=id;
    console.log(id+"foubd")
    // console.log(id)
    // if(id)
    // {
    //     return res.status(200).json({id:id});
    // }
next()
}
const getUser=async(req,res)=>{

    const UserId=req.id;
    console.log(UserId+"   ooo")
    try {
        const user=await authModel.findById(UserId);
           return res.status(200).json({ user });
      
        if (!user) {
          return res.status(404).json({ msg: "user not found" });
        }
  
    } catch (error) {
           return new Error(error);
    }
    console.log("hiii")

    
}
// const refreshToken = (req, res, next) => {
//   const cookies = req.headers.cookie;
//   const prevToken = cookies.split("=")[1];
//   if (!prevToken) {
//     return res.status(400).json({ message: "Couldn't find token" });
//   }
//   jwt.verify(String(prevToken), process.env.SECRET_KEY, (err, user) => {
//     if (err) {
//       console.log(err);
//       return res.status(403).json({ message: "Authentication failed" });
//     }
//     res.clearCookie(`${user.id}`);
//     req.cookies[`${user.id}`] = "";

//     const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
//       expiresIn: "35s",
//     });
//     if(!token)
//     {
//       console.log(err);
//     }
//     console.log("Regenerated Token\n", token);

//     res.cookie(String(user.id), token, {
//       path: "/",
//       expires: new Date(Date.now() + 1000 * 30), // 30 seconds
//       httpOnly: true,
//       sameSite: "lax",
//     });

//     req.id = user.id;
//     next();
//   });
// };


module.exports={signup,login,verify,getUser};