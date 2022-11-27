import { Category } from "../../models/category.model";

export async function createCategory(req, res) {
  try {
    await Category.create({ name: req.body.name });
    res.status(200).send("category created successfully");
  } catch (err) {
    res.status(400).send("an error accured upon creation");
    console.log(err);
  }
}
