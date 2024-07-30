import Books from "../model/books.js";

const getBook = async (req, res) => {
    try {
        const transactions = await Books.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "Books fetched successfully",
            data: transactions
        });
    } catch (err) {
        res.json({ success: false, message: "Failed to fetch books", error: err.message });

    }
}

const postBook = async (req, res) => {
    const book = new Books(req.body);
    try {
        await book.save();
        res.json({ success: true, message: "Book added successfully", data: book });
    } catch (err) {
        res.json({ success: false, message: "Failed to add book", error: err.message });
    }
}

export {
    getBook,
    postBook
}

