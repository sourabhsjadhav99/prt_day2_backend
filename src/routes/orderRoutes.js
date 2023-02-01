let express = require("express")
const Order = require("../connection_and_schemas/orderSchemas");
const router = express.Router();
router.use(express.json());
let path=require("path")
let dirPath=path.join(__dirname,"../../Public")
router.use(express.static(dirPath))



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