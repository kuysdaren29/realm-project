const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    username:{
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

UserSchema.statics.signup = async function(email, phone, username, adminkey, password) {
    if (!email || !phone || !username || !adminkey || !password) {
       throw Error('Please complete your details');
    }

    const isEmail = validator.isEmail(email);
    const isPhoneNumber = validator.isMobilePhone(phone, 'en-PH', { strictMode: false });

    // Check if it's a valid email or a valid Philippine phone number
    if (!isEmail) {
        throw Error('Invalid email');
    }
    if (!isPhoneNumber) {
        throw Error('Invalid mobile number');
    }
    if (!validator.equals(adminkey, process.env.ADMIN_KEY)){
        throw Error('Unauthorized Key')
    }
    const emailExist = await this.findOne({ email });
    const phoneExist = await this.findOne({ phone });
    const userExist = await this.findOne({ username });

    if (emailExist) {
        throw Error('Email already exists');
    }
    if (phoneExist) {
        throw Error('Phone number already exists');
    }
    if (userExist) {
        throw Error('Username is already taken');
    }
    if (!validator.isStrongPassword(password, {
        minLength: 12, minLowercase: 1,
        minUppercase: false, minNumbers: 1, minSymbols: false
    })) {
        throw Error('Password is not strong enough');
    }

    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);
    const adminencrypt = await bcrypt.hash(adminkey, salt)

    const user = await this.create({ email, phone, username, adminkey: adminencrypt, password: encrypt });

    return user;
};


UserSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('Please provide your details');
    }
    const isEmail = validator.isEmail(email);
    // Check if it's a valid email or a valid Philippine phone number
    if (!(isEmail)) {
        throw Error('Invalid email');
    }
    const user = await this.findOne({ email });

    if (!user) {
        throw Error('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect Password');
    }

    return user;
};

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel





