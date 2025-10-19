const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    slug: {
        type: String,
        required: true,

    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"]
    },

    category: {
        type: mongoose.ObjectId,
        ref: "category",
        required: true,

    },

    quantity: {
        type: Number,
        required: true,
       // min: [0, "Quantity cannot be negative"]
    },

    photo: {
        data: Buffer,
        contentType: String
    },

    shipping: {
        type: Boolean
    }



}, { timestamps: true });



const product = new mongoose.model("products", productSchema);
module.exports = product;




// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     slug: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true, min: [0, "Price cannot be negative"] },
//     category: { type: mongoose.ObjectId, ref: "category", required: true },
//     quantity: { type: Number, required: true },
//     photo: { data: Buffer, contentType: String },
//     shipping: { type: Boolean }
// }, { timestamps: true });

// const Product = mongoose.model("products", productSchema);
// module.exports = Product;


