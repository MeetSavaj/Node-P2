import express from 'express';
import * as bodyParser from "body-parser";
import cors from 'Cors';
import { Routes } from './route';
import { errorMiddleWare } from './middleware/error.middleware';
import { errors } from 'celebrate';
const PORT = 4000;
class AppServer {
    protected app: express.Application = express();
    constructor() {

        this.app.use(cors());
        
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        const routes = new Routes();
        this.app.use("/admin", routes.path());


        this.app.get('/meet', function (req, res) {
            res.send('server working');
        });

        this.app.use(errorMiddleWare);
        this.app.use(errors()); // JOI errors

        let server = this.app.listen(PORT, () => {
            console.log("Server Running on port : " + PORT);
        })
    }
}

new AppServer();