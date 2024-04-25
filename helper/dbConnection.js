const { default: mongoose } = require("mongoose")

// mongoose.connect('mongodb://localhost:27017/IGTASK1')
//   .then(() => console.log('Connected Successfully!!!')).catch((err)=>{console.log(err.message)})

mongoose.connect('mongodb+srv://lokendrasinghr40:12344321@task1.6koylld.mongodb.net/IGTASK1')
  .then(() => console.log('Connected Successfully!!!')).catch((err)=>{console.log(err.message)})
  
