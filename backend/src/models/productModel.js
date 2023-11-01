import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({

    name: {
        type: String,
        required:true,
        trim:true,
    },

    category: {
        type: String,
        required: true,
        trim: true,
        /* enum? */
    },

    trade: {
        type: String,
        required: true,
        trim: true,
        enum: ['Tauschen', 'Verschenken'],
        default: 'Tauschen',
    },

    condition: {
        type: String,
        required: true,
        trim: true,
        /* enum? */
        enum: ['KA', 'Neu', 'Gebraucht'],
        default: 'KA'
    },

    shipment: {
        type: String,
        required: true,
        trim: true,
        /* enum? */
        enum: ['KA', 'Abholung', 'Versand'],
        default: 'KA'
    },
    
    description: {
        type: String,
        required: true,
        trim: true,
    },

    picture: {
        type: String, /* issued for later changes */
        /* required: true, */
        trim: true,
    },

    /* via populate method: */
    contact: {
        type: String,
        trim: true,
    },
    
    /* 
    productpath : {
        type: String,
        required: true,
    },
    
    photopath : {
        type: String,
        required: true,
    },
    */
    
    uploadedAt: {
        type: Date,
        default: Date.now,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    url: {
        type: String,
        /* required: true, */
    },

    image_id : {
        type: String,
    }
});

const Product = mongoose.model("Product", productSchema)

export default Product;
