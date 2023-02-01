let express = require("express")
const Customer = require("../connection_and_schemas/customerSchemas");
const  inventory = require("../connection_and_schemas/inventorySchemas");
const Order = require("../connection_and_schemas/orderSchemas");
const router = express.Router();
router.use(express.json());


router.get("/customerDetails", async (req, res) => {
  try {
    let data = await Customer.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.post("/createCustomer", async (req, res) => {
  try {
    let data = new Customer({
      ...req.body,
    });
    let result = await data.save()

    res.status(201).json({
      status: "Success",
      result: result
    })
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});


//-----------------------------------------------------
router.get("/inventory", async (req, res) => {
  try {
    let data = await inventory.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});
router.get("/inventory/:inventoryType", async (req, res) => {
    try {
      let data = await inventory.find({inventory_type:req.params.inventoryType});
      res.send(data);
    } catch (e) {
      res.status(404).json({
        status: "Failed",
        message: e.message,
      });
    }
  });




router.post("/createInventory", async (req, res) => {
  try {
    let data = new inventory({
      ...req.body,
    });
    let result = await data.save()
    res.status(201).json({
      status: "Success",
      result: result
    })
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

//-----------------------------------------


router.get("/orders", async (req, res) => {
  try {
    let data = await Order.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.post("/createOrders", async (req, res) => {
  try {
    let data = new Order({
      ...req.body,
    });
    let result = await data.save()

    res.status(201).json({
      status: "Success",
      result: result
    })
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;