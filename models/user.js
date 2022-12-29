const { Schema, model} = require('mongose')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        require: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform (doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hasg(this.password, SALT_ROUNDS)
    return next()
})