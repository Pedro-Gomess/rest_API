import dotenv from 'dotenv';
dotenv.config();

import { resolve } from 'path';
import express from 'express';

import studentRoutes from './routes/studentRoutes';   
import userRoutes from './routes/userRoutes';   
import  tokenRoutes from './routes/tokenRoutes';   
import  photosRoutes from './routes/photoRoutes';   

import './database';

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));
    }
    routes(){
        this.app.use('/users', userRoutes);
        this.app.use('/token', tokenRoutes);
        this.app.use('/photos', photosRoutes);
        this.app.use('/', studentRoutes);
    }
}

export default new App().app;