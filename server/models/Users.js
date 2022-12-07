const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
        
    },
    number:{
        type: String,
        required: true,
        
    },
    adminkey:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
    
});

UserSchema.statics.signup = async function(email, number, adminkey, password) {
      
    
    

    if(!email|| !number || !adminkey || !password  ) {
       throw Error('Please Provide your details')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    const exist = await this.findOne({ email })

      if (exist) {
        throw Error('Email already exist')
    }
    if (!validator.isMobilePhone(number, [, 'en-PH' ])) {
        throw Error('Invalid phone number')
    }
    if (!validator.equals(adminkey, process.env.ADMIN_KEY)){
        throw Error('Unauthorized Key')
    }
    if (!validator.isStrongPassword(password , {
        minLength: 12, minLowercase: 1,
        minUppercase: false, minNumbers: 1, minSymbols: false
    })){
        throw Error('Password is not strong enough')
    }
    
    
      const salt = await bcrypt.genSalt(10)
      const encrypt = await bcrypt.hash(password, salt)
      const adminencrypt = await bcrypt.hash(adminkey, salt)

      const user = await this.create({ email, number, adminkey: adminencrypt, password: encrypt })

      return user
}
   UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    
    if(!email|| !password) {
        throw Error('Please Provide your details')
     }
    if (!user) {
      throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }
    return user 
   }

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel