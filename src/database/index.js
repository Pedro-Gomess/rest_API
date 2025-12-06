import { Sequelize } from "sequelize";
import database from "../config/database.js";
import Student from "../models/Student";
import User from "../models/User.js";

const models = [ Student, User ];
const connection = new Sequelize(database);
models.forEach((model) => model.init(connection));
