import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cloudinary from 'cloudinary'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// App config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// Api endpoints
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res)=>{
    res.send('API working')
})


app.get("/test-cloudinary", async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    );
    res.json({ success: true, url: result.secure_url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
});

app.listen(port, ()=>{
    console.log('Server Started on Port: ' + port)
})