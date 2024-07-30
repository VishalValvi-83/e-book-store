import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: { type: String, required: true, },
    price: { type: Number, required: true },
    category: { type: String, default: "others" },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    language: { type: String, required: true },
    description: { type: String, required: false },
    image_url: { type: String, required: true },
    contributor: { type: String, required: false },
    age_group: {
        type: String,
        required: false
    }
},
{
    timestamps : true
}
);
const Books = model('Books', bookSchema);

export default Books;