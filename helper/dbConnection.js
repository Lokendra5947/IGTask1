const { default: mongoose } = require("mongoose")

mongoose.connect('mongodb://localhost:27017/IGTASK1')
  .then(() => console.log('Connected Successfully!!!')).catch((err)=>{console.log(err.message)})
  
