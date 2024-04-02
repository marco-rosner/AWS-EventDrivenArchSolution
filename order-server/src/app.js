const express = require('express')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const compression = require('compression')
const health = require('./routes/health')
const v1 = require('./routes/v1')


const app = express();

// service
app.use(express.json())

// sanitize request data
app.use(mongoSanitize())
app.use(xss())

// compress all responses
app.use(compression())

// Health route
app.use('/health', health)

// V1 route
app.use('/v1', v1)

module.exports = app