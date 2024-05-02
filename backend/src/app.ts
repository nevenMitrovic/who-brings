import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "Unknown Error";
    let statusCode = 500;

    if(isHttpError(error)) {
        errorMessage = error.message;
        statusCode = error.statusCode;
    }
    res.status(statusCode).json(errorMessage);
})

export default app;