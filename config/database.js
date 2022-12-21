//connect to mongoose
const mongoose = require('mongoose')
//connect to database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.DB_STRING
        )
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
//export connectDB function
module.exports = connectDB