const mongoose = require('mongoose'); 

const MenuItemSchema = new mongoose.Schema ({

    name: {
        type:String,
        require:true, 
    }, 

    price:{
        type:Number, 
        required:true, 
    }, 

    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true 
    },

    is_drink:{
        type:Boolean,
        default:false 
    },

    ingredients: {
        type:[String],
        default:[]

    },

    num_sales:{
        type:Number,
        default:0, 
    }
}); 

const MenuItem= mongoose.model('MenuItem',MenuItemSchema); 
module.exports=MenuItem; 