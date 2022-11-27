import { Category } from "../../models/category.model";

export async function findAll(req, res) {
  try {
    const categories = await Category.find({}).populate("product_id");
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).send("error finding categories");
    console.log(err);
  }
}
