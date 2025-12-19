"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
 class Student extends _sequelize.Model {
    static init(sequelize){
        super.init({
            name:{
                type:_sequelize.Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 255],
                        msg: 'Nome deve ter entre 3 e 255 caracteres!'
                    }
                }
            },
            lastname:{
                type:_sequelize.Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 255],
                        msg: 'Sobrenome deve ter entre 3 e 255 caracteres!'
                    }
                }
            },
            email: {
                type:_sequelize.Sequelize.STRING,
                defaultValue: '',
                validate:{
                    isEmail:{ 
                        msg:'Email inválido!'
                    }
                }
            },
            age:{
                type:_sequelize.Sequelize.INTEGER,
                defaultValue: '',
                validate:{
                    isInt:{
                        msg: 'Idade deve ser um número inteiro!'
                    }
                }
                
                
            },
            weight:{
                type:_sequelize.Sequelize.FLOAT,
                defaultValue: '',
                validate:{
                    isFloat:{
                        msg: 'Peso deve ser um número inteiro ou decimal!'
                    }
                }
            },
            height:{
                type:_sequelize.Sequelize.FLOAT,
                defaultValue: '',
                validate:{
                    isFloat:{
                        msg: 'Altura deve ser um número inteiro ou decimal!'
                    }
                }
            },
        },
        { 
            sequelize,
            tableName: 'student'
        });
       
        return this;    
    }

    static associate(models){
        this.hasMany(models.Photo, { foreignKey: 'student_id' });
    }
} exports.default = Student;