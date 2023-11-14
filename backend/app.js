import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { conn, localConn } from './src/config/db.js';
import userRoute from './src/routes/userRoute.js';
import productRoute from './src/routes/productRoute.js';
import messageRoute from './src/routes/messageRoute.js';
import { checkUser } from './src/middlewares/authMiddleware.js';

dotenv.config();

// Connection to the DB
const [node, script, ...args] = process.argv;
if (args[0] === 'local') {
    localConn();
} else {
    conn();
}

const app = express();
const port = process.env.PORT;
const hostname = '127.0.0.1';


// Middleware for parsing JSON request bodies with a specified size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Middleware for parsing JSON request bodies with a specified size limit (redundant)
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());


// routes
app.use('*', checkUser);
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/messages', messageRoute);






app.listen(port, hostname, () => {
    console.log(`Server läuft auf, http://${hostname}:${port}/`);
});