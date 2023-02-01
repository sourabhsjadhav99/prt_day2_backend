const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
    customer_id:{type:String},
    customer_name:{type:String},
    email:{type:String}
});
module.exports = mongoose.model("customer", customerSchema);
