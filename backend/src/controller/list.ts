import { RequestHandler } from "express";
import createHttpError from "http-errors";
import ListModel from "../model/list";
import mongoose from "mongoose";

export const getList: RequestHandler = async (req, res) => {
    try {
        const list = await ListModel.find();
        res.status(200).json(list);
    } catch (error) {
        console.error(error);
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

export const createList: RequestHandler<unknown, unknown, List, unknown> = async(req, res, next) => {
    const listName = req.body.name;
    const listDate = req.body.date;
    const listLocation = req.body.location;
    const listDescription = req.body.description;
    const listItems = req.body.items;
    try {
        if(!listName) {
            createHttpError(400, "List name missing");
        }

        const newList = await ListModel.create({
            name: listName,
            date: listDate,
            location: listLocation,
            description: listDescription,
            items: listItems
        });

        res.status(201).json(newList);
    } catch(error) {
        next(error);
    }
};