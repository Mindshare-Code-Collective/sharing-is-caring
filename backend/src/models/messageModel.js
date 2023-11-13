import mongoose from 'mongoose';


const { Schema } = mongoose;

// Message Schema
const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    messageContent: {
      type: String,
      required: true,
      maxlength: 1000
    }
  },
  {
    timestamps: true,
  }
);



// Conversation Schema
const conversationSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    messages: [messageSchema]
  },

  {
    timestamps: true,
  }
);



const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;

