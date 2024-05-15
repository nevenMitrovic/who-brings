import { Schema, InferSchemaType, model } from "mongoose";

const listSchema = new Schema({
    name: { type: String, required: true },
    date: String,
    location: String,
    description: String,
    items: [{
        name: String,
        description: String,
        amount: Number,
        unit: String,
        bring: { type: Number, default: 0 },
    }],
},
    { timestamps: true });

type List = InferSchemaType<typeof listSchema>;

export default model<List>("list", listSchema);