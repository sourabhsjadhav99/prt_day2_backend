let express = require("express")
const Customer = require("../connection_and_schemas/customerSchemas");
const router = express.Router();
router.use(express.json());
let path=require("path")
// let dirPath=path.join(__dirname,"../../views")
// router.use(express.static(dirPath))

// router.set("views",dirPath)
// router.set("view engine","ejs")



router.get("/customerDetails", async (req, res) => {
  try {
    let data = await Customer.find();
    res.send(data);
    // res.render("",{data})
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


module.exports = router;