import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import mongoose from 'mongoose';
import { getBook } from './controllers/book_controller.js';

const app = express();
app.use(express.json());
app.use(cors());

try {
    mongoose.connect(process.env.DB_URL)
    console.log('Connected to MongoDB')
}
catch (err) {
    console.error('Error connecting to MongoDB:', err)
}



app.get("/", (req, res) => {
    res.send("Hello, server is ready!");
})

app.get("/books", getBook)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});