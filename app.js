import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import studentRoutes from './src/routes/studentRoutes';   
import userRoutes from './src/routes/userRoutes';   
import './src/database'

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.urlencoded({ extended: true })),
        this.app.use(express.json())
    }
    routes(){
        this.app.use('/', studentRoutes)
        this.app.use('/users', userRoutes)
    }
}

export default new App().app;