const path = require('path')
const db = require('./db')
const app = require('./app')
const AWS = require('aws-sdk')
const { createConfig } = require('./config/config')

async function run() {
    const configPath = path.join(__dirname, '../.env')
    const config = createConfig(configPath)

    await db.init(config)

    AWS.config.update({ region: 'us-east-2' })

    const server = app.listen(config.port, () =>
        console.log(`🚀 Server ready at http://localhost:${config.port}`))

    process.on('SIGTERM', () => {
        console.error('SIGTERM received')
        if (server) server.close()
    })
}

run()