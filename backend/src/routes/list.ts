import express from "express";
import * as controller from "../controller/list";

const router = express.Router();

router.get('/:listId', controller.getList);
router.post('/', controller.createList);

export default router;