const express=require("express");
const mongoose=require("mongoose");
const dotenv =require("dotenv");
const cors=require("cors");
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
const userRoutes=require("./routes/user")
const authRoutes=require("./routes/auth")
const productRoutes=require("./routes/product")
const cartRoutes=require("./routes/cart")
const orderRoutes=require("./routes/order")
const stripeRoutes=require("./routes/stripe")
const paymentRoutes=require("./routes/payment")
mongoose.connect(process.env.Mongo_URL).then(()=>console.log("DB connected successfully.")).catch((err)=>console.log(err));

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/carts",cartRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/checkout",stripeRoutes);
app.use("/api/payment/",paymentRoutes);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running");
})