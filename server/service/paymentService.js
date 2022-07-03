const stripe = require("stripe")(process.env.STRIPE_KEY);

class PaymentService {
    async pay(req, res) {
       stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
       })
    }
}

module.exports = new PaymentService();