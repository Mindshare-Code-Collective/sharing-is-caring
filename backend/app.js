import express from 'express';
import dotenv from 'dotenv';
import conn from './src/config/db.js';

import pageRoute from './src/routes/pageRoute.js';
import userRoute from './src/routes/userRoute.js';


dotenv.config();

//connection to the DB
conn();


const app = express();
const port = process.env.PORT;
const hostname = '127.0.0.1'

//static files middleware
app.use(express.json());



//routes
app.use("/", pageRoute)
app.use("/users", userRoute)





app.listen(port, hostname, () => {
    console.log(`Server läuft auf, http://${hostname}:${port}/`)
});



