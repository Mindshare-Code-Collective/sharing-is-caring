import Conversation from '../models/messageModel.js';
import Product from '../models/productModel.js';


const createConversation = async (req, res) => {

  const { product, customer, messages } = req.body;

    try {
      const owner = await Product.findById(product);
      const newConversation = new Conversation({
        product:product,
        owner:owner.user,
        customer:customer,
        messages:messages,
      });

      await newConversation.save();
      res.status(201).json(newConversation);
    } catch (error) {
      res.status(500).json({ error: 'Error sending message!!' });
    }
};

 
 const getConversationById = async (req, res) => {
  const conversationId = req.params.conversationId;
  
  try {
    const conversation = await Conversation.findById(conversationId);
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
};


const addMessageToConversation = async (req, res) => {
  try {
    const { conversationId, senderId, messageContent } = req.body;

    // Data validation
    if (!conversationId || !senderId || !messageContent) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const conversation = await Conversation.findById(conversationId);

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    // Add and save the new message
    conversation.messages.push({ senderId, messageContent });
    await conversation.save();

    res.status(201).json({
      succeeded: true,
      conversation,
    });
  } catch (error) {
    console.error('Error adding message to conversation', error);
    res.status(500).json({ error: 'Internal Server Error!!' });
  }
};




export { createConversation, getConversationById, addMessageToConversation };

