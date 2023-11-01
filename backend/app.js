import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { conn, localConn } from './src/config/db.js';
import bodyParser from 'body-parser';

import pageRoute from './src/routes/pageRoute.js';
import userRoute from './src/routes/userRoute.js';
import productRoute from './src/routes/productRoute.js';

dotenv.config();

//connection to the DB
const [ node, script, ...args ] = process.argv;
if(args[0] === "local") {
    localConn();
}
else {
    conn();
}


const app = express();
const port = process.env.PORT;
const hostname = '127.0.0.1';

//static files middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/", pageRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);







app.listen(port, hostname, () => {
    console.log(`Server läuft auf, http://${hostname}:${port}/`)
});



