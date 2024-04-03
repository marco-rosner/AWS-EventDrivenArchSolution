const { get } = require("../../models/order")

function getOrder(req, res) {
    get(req.params.id)
        .then((order) => {
            if (order === null) {
                res.sendStatus(404) // Not found
                res.end()
            } else {
                res.status(200).json(order)
                res.end()
            }
        })
        .catch(err => {
            console.error(err.name)
            res.sendStatus(500) // Internal Server Error
            res.end()
        })
}

module.exports = { getOrder }