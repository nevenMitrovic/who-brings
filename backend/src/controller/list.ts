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

interface Item {
    name: string
    description?: string
    amount?: number
    unit?: string
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
    const newListName = req.body.name;
    const newListDate = req.body.date;
    const newListLocation = req.body.location;
    const newListDescription = req.body.description;

    try {
        if (!mongoose.isValidObjectId(listId)) {
            throw createHttpError(400, "Invalid list ID");
        }

        const list = await ListModel.findById(listId).exec();

        if (!list) {
            throw createHttpError(404, "List not found");
        }

        if (newListName) {
            list.name = newListName;
        }

        if (newListDate) {
            list.date = newListDate;
        }

        if (newListLocation) {
            list.location = newListLocation;
        }

        if (newListDescription) {
            list.description = newListDescription;
        }

        const updatedList = await list.save();

        res.status(200).json(updatedList);

    } catch (error) {
        next(error);
    }
};

export const createItem: RequestHandler<ListParams, unknown, Item, unknown> = async (req, res, next) => {
    const listId = req.params.listId;
    const { name, description, amount, unit } = req.body;

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

        list.items.push({ name, description, amount, unit });

        const createdItem = await list.save();

        res.status(200).json(createdItem);
    } catch (error) {
        next(error);
    }
};
