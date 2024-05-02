import { RequestHandler } from "express";
import createHttpError from "http-errors";
import ListModel from "../model/list";

export const getList: RequestHandler = async (req, res) => {
    try {
        const list = await ListModel.find();
        res.status(200).json(list);
    } catch (error) {
        console.error(error);
    }
};