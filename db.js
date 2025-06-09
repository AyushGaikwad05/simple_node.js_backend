const mongoose =require('mongoose')
const mongoURL="mongodb://localhost:27017/hotels"   // where hotes = database name 

//setup mongodb connection 

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// Get the default connection 
// MOngoose maintains a default connection object represting the mongodb connection 
const db= mongoose.connection; 


// Define event listners for database connection 

db.on('connected',()=>
{
    console.log("Mongodb server connected successfully !! ")
})


db.on('error',(err)=>
{
    console.log("Connection failed due to : " .err)
})

db.on('disconnected',()=>
{
    console.log("Mongodb server Disconnected ! \n  BYE !")
})

// export the database connection to the server 
module.exports =db; 