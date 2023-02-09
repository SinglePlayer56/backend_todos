import express from 'express';
import Document from "../schemas/test";
const router = express.Router();



router.get('/todos', async (req, res) => {
    try {
        const newDocument = new Document({
            field: 'field1',
            field2: 2
        });

        await newDocument.save();

        res.json({
            status: 200,
            message: "Работает блять!"
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send('Server error');
    }
});

export default router;
