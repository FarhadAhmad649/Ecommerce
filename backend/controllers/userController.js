import userModel from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Route for userLogin
const loginUser = async (req, res) =>{
    try {

        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false, message:"User does not exists"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = createToken(user._id)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

// Route for userRegistration
const registerUser = async (req, res) =>{
    try {

        const {name, email, password} = req.body

        // checking user already exist or not
        const exist = await userModel.findOne({email})

        if(exist){
            return res.json({success:false, message:"User already exists"})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
          return res.json({success: false, message: "Please enter a strong password",
          });
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        // newUser saved in the database
        const user = await newUser.save()

        // create token
        const token = createToken(user._id)

        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Route for adminLogin
const adminLogin = async (req, res) =>{

}

export {loginUser, registerUser, adminLogin}