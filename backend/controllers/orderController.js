import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using Cash On Delivery mehtod

const placeOrder = async (req, res) => {
  try {

    const {userId, amount, items, address} = req.body

    const orderData = {
        userId, 
        items, 
        amount, 
        address,
        paymentMethod:'COD', 
        payment:false, 
        date:Date.now()
    }

    const  newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, {cartData:{}})

    res.json({success:true, message:'Order Placed'})


  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
};

// Placing orders using Stripe method

const placeOrderStripe = async (req, res) => {
  try {
  } catch (error) {}
};

// Placing orders using RazorPay method

const placeOrderRazorpay = async (req, res) => {
  try {
  } catch (error) {}
};

// All orders data for admin panel

const allOrders = async (req, res) => {
  try {
  } catch (error) {}
};


// User order data for the frontend

const userOrders = async (req, res) => {
  try {

    const {userId} =  req.body

    const orders = await orderModel.find({userId})
    res.json({success:true, orders})

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message });
  }
};


// Update order status from Admin panel

const updateStatus = async (req, res) => {
  try {
  } catch (error) {}
};

export {placeOrderRazorpay, placeOrderStripe, placeOrder, allOrders, userOrders, updateStatus}