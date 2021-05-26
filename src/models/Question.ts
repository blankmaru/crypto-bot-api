import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Question = new Schema({
    userID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    chatID: {
        type: String,
        required: true
    },
    answer: {
        type: mongoose.Types.ObjectId,
        ref: '@answer'
    }
})

export default mongoose.model('@question', Question);