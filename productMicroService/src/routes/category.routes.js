import { Router } from "express";

import * as getCategoriesCtrl from "../controllers/category/listCategories";
import * as createCategoryCtrl from "../controllers/category/createCategory";

const routes = new Router();

routes.get("", getCategoriesCtrl.findAll);
routes.post("", createCategoryCtrl.createCategory);

export default routes;
