import app from './app';
import mongoose from 'mongoose';
import env from "./util/validateEnv";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
.then(() => {
    console.log("mongoose is connected");
    app.listen(port, () => {
        console.log("Server is connected on port: "+ port);
    });
});