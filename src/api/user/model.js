import crypto from 'crypto'
import mongoose, { Schema } from 'mongoose'
import { v1 as uuidv1 } from 'uuid';

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        index: true,
        trim: true
    },
    lastName: {
        type: String,
        index: true,
        trim: true
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    encry_password: {
        type: String,
        required: true,
        minlength: 6
    },
    salt: String,
}, {
    timestamps: true
})


userSchema.virtual("password")
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password
    },
    securePassword: function (plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
        } catch (err) {
            return ""
        }
    }
}


const User = mongoose.model('User', userSchema)

export default User


