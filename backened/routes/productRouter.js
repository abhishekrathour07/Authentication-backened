import express from 'express'
import ensureAuth from '../middleware/productAuth.js'
const productRouter = express.Router();



productRouter.get('/' ,ensureAuth, (req, res) => {
    res.status(200).json([
        {
            productName: "Apple",
            price: 120,
            quantity: '1kg'
        },
        {
            productName: "Banana",
            price: 100,
            quantity: '2kg'
        },
        {
            productName: "papaya",
            price: 225,
            quantity: '2.5kg'
        },
    ])
})
export default productRouter
