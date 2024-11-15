import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import connectDB from "./config/mongodb.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//App config
const app = express()
const port =  4000



//middlewares
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()

//API endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
     res.send('API voila!!!!!!')
})

app.listen(port,()=>console.log("Server started on "+port))