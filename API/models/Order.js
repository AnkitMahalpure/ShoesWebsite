const mongoose=require("mongoose");

const OrderSchema=new mongoose.Schema({
    userId: {type:String,required:true},
    orderId: {type:String,required:true},
    products:[],
        // {
        //     productId:{
        //         type:String
        //     },
        //     quantity:{
        //         type:Number,
        //         default:1,
        //     },
        // },
    amount:{type:Number,reqired:true},
    address:{type:Object,reqired:true},
    status:{type:String,default:"pending"},
    paymentId:{type:String,default:"pending"}
},{timestamps:true});

module.exports=mongoose.model("Order1",OrderSchema);