const paymentService = require("../service/paymentService");

class PaymentController {
    async pay(req, res) {
        try {
            const payment = await paymentService.pay(req, res)
            return res.status(200).json(payment)
        } catch (e) {
            return res.status(400).json({message: e.message})
        }
    }

}

module.exports = new PaymentController();