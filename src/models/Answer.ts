import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Answer = new Schema({
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
    question: {
        type: mongoose.Types.ObjectId,
        ref: '@question'
    }
})

export default mongoose.model('@answer', Answer);