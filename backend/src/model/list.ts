import { Schema, InferSchemaType, model } from "mongoose";

const listSchema = new Schema({
    name: { String, require: true },
    date: { String },
    location: { String },
    description: { String },
    items: [{
        name: { String },
        description: { String },
        amount: { Number },
        unit: { String },
    }],
},
    { timestamps: true });

type List = InferSchemaType<typeof listSchema>;

export default model<List>("list", listSchema);