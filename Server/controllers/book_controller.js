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

    }
}

export { getBook }

