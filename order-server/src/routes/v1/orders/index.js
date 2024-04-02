const { Router } = require('express')
const { addOrder } = require('../../../controllers/orders/add')

const router = Router()

router.post('/:id', addOrder)

module.exports = router