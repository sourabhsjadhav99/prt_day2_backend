const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    customer_id : {type:String},
    Product_id : {type:String},
    Product_name : {type:String},
    quantity : {type :Number}
 })
module.exports = mongoose.model("order", orderSchema);