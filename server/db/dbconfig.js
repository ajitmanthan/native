const mongoose = require('mongoose')
const dbconnection = mongoose.connect(`mongodb+srv://${process.env.DATABASE}`)
.then(res=>console.log('db connected'))
.catch(err=>console.log(err))

module.exports=dbconnection

