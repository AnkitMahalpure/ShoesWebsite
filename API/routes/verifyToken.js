const JWT=require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token
    const token1=authHeader;
    //.split(" ")[1];
    if(token1){
        JWT.verify(token1,process.env.JWT_Sec,(err,user)=>{
            if(err) res.status(401).json('Token is not valid!');
            req.user = user;
            next();
        });
    }else{
        return res.status(401).json('You are not authenticated!');
    }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    //console.log(req.params.userId);
    verifyToken(req,res,()=>{
        //console.log("ddnwnd"+req.user.id)
        if(req.user.userId === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json('You are not allowed!');
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json('You are not allowed!');
        }
    })
}

module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}