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
        bring: {
            name: String,
            bring: { type: Number, default: 0 },
        },
        createdAt: { type: Date, default: Date.now },
    }],
},
    { timestamps: true });

type List = InferSchemaType<typeof listSchema>;

export default model<List>("list", listSchema);