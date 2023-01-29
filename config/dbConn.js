const mongoose = require('mongoose')

const connectDB = () => {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectDB