import { Product } from "../../models/product.model";
import { Category } from "../../models/category.model";
import mongoose from "mongoose";

export async function createProduct(req, res) {
  try {
    const newProduct = {
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      description: req.body.description,
      category_id: mongoose.Types.ObjectId(req.body.category_id),
      price: req.body.price,
    };

    await Product.create(newProduct);

    const updatedCategory = await Category.findById(newProduct.category_id);

    updatedCategory.product_id.push(newProduct._id);

    await updatedCategory.save();

    res.status(200).send(`product ${newProduct._id} created !`);
  } catch (error) {
    res.status(400).send("an error occured");
    console.log(error);
  }
}
