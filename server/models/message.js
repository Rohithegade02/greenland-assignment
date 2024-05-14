import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const Message = mongoose.model('Message', MessageSchema);

export default Message;