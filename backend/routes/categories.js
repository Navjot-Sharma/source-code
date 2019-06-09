const router = require("express")();

const Category = require("../models/category");

router.get("", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ data: categories });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

router.post("", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const category = await newCategory.save();

    res.status(200).json({ data: category });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

module.exports = router;
