import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import conn from './src/config/db.js';

import userRoute from './src/routes/userRoute.js';


dotenv.config();

//connection to the DB
conn();


const app = express();
const port = process.env.PORT;
const hostname = '127.0.0.1'

//static files middleware
app.use(express.json());

app.use(cors());

//routes

app.use("/users", userRoute)







app.listen(port, hostname, () => {
    console.log(`Server läuft auf, http://${hostname}:${port}/`)
});



