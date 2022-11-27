import { Router } from "express";

import ProductRoutes from "./product.routes";
import CategoryRoutes from "./category.routes";

const routes = new Router();

routes.use("/product", ProductRoutes);
routes.use("/category", CategoryRoutes);

export default routes;
