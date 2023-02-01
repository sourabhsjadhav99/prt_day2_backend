const mongoose = require("mongoose");
const inventorySchema = mongoose.Schema({
    inventory_id:{type:String},
    inventory_type:{type:String},
    item_name:{type:String},
    available_quantity:{type:Number}
});
module.exports = mongoose.model("inventory", inventorySchema);