import * as dotenv from 'dotenv'
import express from 'express';
import {loadRoutes} from './route_loader';

const app = express();
const port = 3000;

loadRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})