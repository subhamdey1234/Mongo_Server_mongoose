import mongoose from "mongoose";

const grocerymodel=new mongoose.Schema({
    item: {
        type: String,
        
    },
    quantity: {
        type: Number,
       
    },
    unit: {
        type: String,
        enum: ["lbs", "loaves", "gallon", "dozen"]
    },
    createdAt:{
        type:Date,
        default:Date.now
   }

})



const listdb=mongoose.model('Groceryitem',grocerymodel);

export default listdb
