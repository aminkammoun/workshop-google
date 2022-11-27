import { Product } from "../../models/product.model";

export async function getProducts(req, res) {
  try {
    const products = await Product.find({});

    return res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("an error occured");
  }
}
