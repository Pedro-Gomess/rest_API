"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);
 class Photo extends _sequelize.Model {
    static init(sequelize){
        super.init({

            filename:{
                type:_sequelize.Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 255],
                        msg: 'Campo não pode ficar vazio!'
                    }
                }
            },
            originalname:{
                type:_sequelize.Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 255],
                        msg: 'Campo não pode ficar vazio!'
                    }
                }
            },
            url:{
                type:_sequelize.Sequelize.VIRTUAL,
                get(){
                    return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`
                }
            }

        },
        { 
            sequelize,
            tableName: 'photo'
        });

        return this;    
    }

    static associate(models){
        this.belongsTo(models.Student, { foreignKey: 'student_id' })
    }
} exports.default = Photo;