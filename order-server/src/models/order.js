const mongoose = require('mongoose');
const { Schema } = mongoose

const orderSchema = new Schema({
    id: { type: 'string', required: true, index: 1 },
    price: { type: 'number', required: true },
    region: { type: 'string', enum: ['latam', 'us', 'euro'], default: 'latam' },
    status: { type: 'string', enum: ['new', 'confirmed'], default: 'new' },
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)

const create = (order) => Order(order).save()

const get = (id) => Order.findOne({ id: id })

const count = () => Order.countDocuments()

module.exports = { Order, create, get, count }