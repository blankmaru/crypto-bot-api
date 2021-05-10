const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const User = new Schema({
    Username:{
        type:String,
        require:true
    },
    Balance:{
        type:Number,
        default:0
    },
    Refs:{
        type:Number,
        default:0
    },
    is_paid: {
        type: Boolean,
        default: false
    },
    next_date_payment: {
        type: Date
    },
    UserID:{
        type:String
    }
})

export default mongoose.model('@user', User);