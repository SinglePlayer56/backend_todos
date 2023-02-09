import express from 'express';
const router = express.Router();



router.get('/todos', async (req, res) => {
    try {


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
