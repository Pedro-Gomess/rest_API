import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Student from "../models/Student";
import User from "../models/User.js";
import Photo from "../models/Photo.js";

const models = [ Student, User, Photo ];
const connection = new Sequelize(database);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
