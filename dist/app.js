"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

var _path = require('path');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _studentRoutes = require('./routes/studentRoutes'); var _studentRoutes2 = _interopRequireDefault(_studentRoutes);   
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);   
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);   
var _photoRoutes = require('./routes/photoRoutes'); var _photoRoutes2 = _interopRequireDefault(_photoRoutes);   

require('./database');

class App{
    constructor(){
        this.app = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.use(_express2.default.urlencoded({ extended: true }));
        this.app.use(_express2.default.json());
        this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
    }
    routes(){
        this.app.use('/users', _userRoutes2.default);
        this.app.use('/token', _tokenRoutes2.default);
        this.app.use('/photos', _photoRoutes2.default);
        this.app.use('/', _studentRoutes2.default);
    }
}

exports. default = new App().app;