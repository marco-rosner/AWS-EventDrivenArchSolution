const dotenv = require('dotenv')
const Joi = require('joi')

const envVarSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        PORT: Joi.number().default(8080),
        MONGODB_URI: Joi.string().required().description('Mongo DB URI')
    }).unknown()

function createConfig(configPath) {
    dotenv.config({ path: configPath })

    const { value: envVars, error } = envVarSchema
        .prefs({ errors: { label: 'key' } })
        .validate(process.env)

    if (error) throw new Error(`Config validation error: ${error.message}`)

    return {
        env: envVars.NODE_ENV,
        port: envVars.PORT,
        mongo: {
            uri: envVars.MONGODB_URI,
        },
    }
}

module.exports = { createConfig }