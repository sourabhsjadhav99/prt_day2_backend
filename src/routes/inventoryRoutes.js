let express = require("express")
const inventory = require("../connection_and_schemas/inventorySchemas");
const router = express.Router();
router.use(express.json());
let path=require("path")
let dirPath=path.join(__dirname,"../../Public")
router.use(express.static(dirPath))


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


module.exports = router;