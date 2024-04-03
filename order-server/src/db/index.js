const mongoose = require('mongoose');

let mongoURI = ''

const init = async ({ mongo: { uri } }) => {
    mongoURI = uri

    await mongoose.connect(mongoURI)
        .catch((err) => {
            console.error('MongoDB connection error: ', err)
            setTimeout(init, 5000)
        })
}

const db = mongoose.connection

const destroy = () => {
    db.removeAllListeners();
    return mongoose.disconnect()
}

db.on('connected', () => console.log('MongoDB connected!'))

db.on('error', (err) => {
    console.error('MongoDB connection error:', err)
    mongoose.disconnect()
})

db.on('disconnected', (err) => {
    console.lon('MongoDB disconnected!')
    init({ mongo: { uri: mongoURI } })
})

module.exports = { init, destroy }