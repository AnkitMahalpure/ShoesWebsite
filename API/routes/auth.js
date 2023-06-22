const router=require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js");
const JWT=require("jsonwebtoken");
//REGISTER
router.post("/register",async(req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.Pass_Sec).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

//login
router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({username:req.body.username});
        
        if(!user){
            res.status(401).json("Wrong credentials!");
            return;
        }
        const hashedPassword=CryptoJS.AES.decrypt(user.password, process.env.Pass_Sec);
        const Originalpassword=hashedPassword.toString(CryptoJS.enc.Utf8);

        const accessToken=JWT.sign({
            id:user._id,
            isAdmin:user.isAdmin,
        },process.env.JWT_Sec,
        {expiresIn:"3d"});

        if(Originalpassword == req.body.password)
        {
            const {password, ...others}=user._doc;
            res.status(200).json({...others,accessToken});
        }
        else{
            res.status(401).json("Wrong credentials!");
            return;
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router