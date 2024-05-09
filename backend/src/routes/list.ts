import express from "express";
import * as controller from "../controller/list";

const router = express.Router();

router.get('/:listId', controller.getList);
router.get('/', controller.getLists);
router.post('/', controller.createList);
router.patch('/:listId', controller.updateList);
router.put('/:listId/create', controller.createItem);
router.patch('/:listId/:itemId', controller.updateItem);

export default router;