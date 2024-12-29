const joi = require("joi");
const dotenv = require("dotenv");

/** Loading Environment Variables */
dotenv.config();

/** Defining Schema for Environment Variables */
const envVarsSchema = joi.object({
    PORT: joi.number().default(3000),
    MONGODB_URL: joi.string().trim().description("Mongodb url"),
}).unknown();

/** Validating Environment Variables */
const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

/** Handling Validation Errors */
if (error) {
    console.log("Config Error: ", error);
}

/** Exporting Configuration: */
module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
}