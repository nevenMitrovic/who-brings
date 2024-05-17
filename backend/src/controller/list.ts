import { RequestHandler } from "express";
import createHttpError from "http-errors";
import ListModel from "../model/list";
import mongoose from "mongoose";

export const getList: RequestHandler<ListParams, unknown, List, unknown> = async (req, res, next) => {
    const listId = req.params.listId;
    try {
        if (!mongoose.isValidObjectId(listId)) {
            throw createHttpError(400, "Invalid list ID");
        }

        const list = await ListModel.findById(listId).exec();

        if (!list) {
            throw createHttpError(404, "List not found");
        }

        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
};

export const getLists: RequestHandler = async (req, res, next) => {
    try {
        const lists = await ListModel.find().exec();
        res.status(200).json(lists);
    } catch (error) {
        next(error);
    }
}

interface Item {
    name: string
    description?: string
    quantity?: { unit: string, amount: number }
    bring?: { name: string, bring: number }
};

interface List {
    name: string
    date?: string
    location?: string
    description?: string
    items?: Item[]
};

export const createList: RequestHandler<unknown, unknown, List, unknown> = async (req, res, next) => {
    const listName = req.body.name;

    try {
        if (!listName) {
            throw createHttpError(400, "List name missing");
        }

        const newList = await ListModel.create({
            name: listName,
        });

        res.status(201).json(newList);
    } catch (error) {
        next(error);
    }
};

interface ListParams {
    listId: String
    itemId: String
};

export const updateList: RequestHandler<ListParams, unknown, List, unknown> = async (req, res, next) => {
    const listId = req.params.listId;
    const listDate = req.body.date;
    const listLocation = req.body.location;
    const listDescription = req.body.description;

    try {
        if (!mongoose.isValidObjectId(listId)) {
            throw createHttpError(400, "Invalid list ID");
        }

        const list = await ListModel.findById(listId).exec();

        if (!list) {
            throw createHttpError(404, "List not found");
        }

        if (listDate) {
            list.date = listDate;
        }

        if (listLocation) {
            list.location = listLocation;
        }

        if (listDescription) {
            list.description = listDescription;
        }

        const updatedList = await list.save();

        res.status(200).json(updatedList);

    } catch (error) {
        next(error);
    }
};

export const createItem: RequestHandler<ListParams, unknown, Item, unknown> = async (req, res, next) => {
    const listId = req.params.listId;
    const { name, description, quantity } = req.body;

    try {
        if (!name) {
            throw createHttpError(404, "Item name missing");
        }

        if (!mongoose.isValidObjectId(listId)) {
            throw createHttpError(400, "Invalid list ID");
        }

        const list = await ListModel.findById(listId).exec();

        if (!list) {
            throw createHttpError(404, "List not found");
        }

        list.items.push({ name, description, quantity });

        const createdItem = await list.save();

        res.status(200).json(createdItem);
    } catch (error) {
        next(error);
    }
};

export const updateItem: RequestHandler<ListParams, unknown, Item, unknown> = async (req, res, next) => {
    const itemId = req.params.itemId;
    const listId = req.params.listId;
    const { name, description, quantity, bring } = req.body;

    try {

        if (!mongoose.isValidObjectId(itemId)) {
            throw createHttpError(400, "Invalid item ID");
        }

        const list = await ListModel.findById(listId).exec();

        if (!list) {
            throw createHttpError(404, "List not found");
        }

        const item = list.items.find(item => item._id?.toString() == itemId);

        if (!item) {
            throw createHttpError(404, "Item not found");
        }

        if(!name) {
            throw createHttpError(400, "Name is required");
        }

        if (description) {
            item.description = description;
        }

        if (quantity) {
            if (!quantity.unit) {
                throw createHttpError(400, "Quantity must have a unit.");
            }

            if (!quantity.amount) {
                throw createHttpError(400, "Quantity must have a amount.")
            }

            item.quantity = quantity;
        }

        if (bring) {
            if (!bring.name) {
                throw createHttpError(400, "Who brings must have name");
            }

            item.bring = bring;
        }

        const updatedItem = await list.save();

        res.status(200).json(updatedItem);
    } catch (error) {
        next(error);
    }
};
