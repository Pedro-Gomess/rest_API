"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);
var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _Photojs = require('../models/Photo.js'); var _Photojs2 = _interopRequireDefault(_Photojs);

const models = [ _Student2.default, _Userjs2.default, _Photojs2.default ];
const connection = new (0, _sequelize.Sequelize)(_databasejs2.default);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
