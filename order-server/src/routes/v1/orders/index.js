const { Router } = require('express')
const { addOrder } = require('../../../controllers/orders/add')
const { countOrders } = require('../../../controllers/orders/count')
const { getOrder } = require('../../../controllers/orders/get')

const router = Router()

router.post('/', addOrder)
router.get('/count', countOrders)
router.get('/:id', getOrder)

module.exports = router