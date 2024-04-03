const { count } = require("../../models/order")

const countOrders = (_, res) => {
    count().then(count => {
        res.status(200).json(count)
        res.end()
    }).catch(err => {
        console.error(err.name)
        res.sendStatus(500); // Internal Server Error
        res.end();
    })
}

module.exports = { countOrders }