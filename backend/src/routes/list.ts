import express from "express";
import * as controller from "../controller/list";

const router = express.Router();

router.get('/:listId', controller.getList);
router.post('/', controller.createList);
router.put('/:listId', controller.updateList);
router.put('/:listId/create', controller.createItem);

export default router;