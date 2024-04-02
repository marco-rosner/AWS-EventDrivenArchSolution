const { Router } = require('express')
const orderRouter = require('./orders')

const router = Router()

router.use('/orders', orderRouter)

module.exports = router