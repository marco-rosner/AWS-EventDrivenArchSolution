const { create } = require("../../models/order")

function addOrder(req, res) {
    create(req.body)
        .then((order) => {
            res.status(201).json(order)
            res.end()
        })
        .catch(err => {
            console.error(err.name)
            switch (err.name) {
                case 'MongoServerError':
                    res.sendStatus(500); // Internal Server Error
                    break
                case 'ValidationError':
                    res.sendStatus(400); // Bad Request
                    break
                default:
                    res.sendStatus(500); // Internal Server Error
            }
            res.end()
        })
}

module.exports = { addOrder }