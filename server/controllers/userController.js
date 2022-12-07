const User = require ('../models/Users')
const jwt = require('jsonwebtoken')

const generateToken = (_id) => {
    return jwt.sign({_id}, process.env.TOKEN_KEY, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
    const { email, password} = req.body
    try{
        const user = await User.login(email, password)
        
        const token = generateToken(user._id)
 
        res.status(200).json({email, token})
     } catch (error){
        res.status(400).json({error: error.message})
     }
     
 }
    
    



const signupUser = async (req, res) => {
    const { email, number, adminkey, password} = req.body

    try{
       const user = await User.signup(email, number, adminkey, password)
       
       const token = generateToken(user._id)

       res.status(200).json({email, token})
    } catch (error){
       res.status(400).json({error: error.message})
    }
    
}

module.exports = {signupUser, loginUser}