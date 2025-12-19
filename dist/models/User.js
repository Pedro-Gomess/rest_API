"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
    static init(sequelize){
        super.init({
            name: {
                type: _sequelize.Sequelize.STRING,
                defaultValue:'',
                validate:{
                    len:{
                       args: [2, 255],
                        msg:'Campo nome deve ter entre 3 e 255 caracteres!'
                    }
                }
            },
            email:{
                type: _sequelize.Sequelize.STRING,
                defaultValue:'',
                validate:{
                    isEmail:{
                        msg: 'Enderaço de email inválido!'
                    }
                }
            },
            password_hash:{
                type: _sequelize.Sequelize.STRING,
                defaultValue:'',
            },
            password:{
                type: _sequelize.Sequelize.VIRTUAL,
                defaultValue:'',
                validate:{
                    len:{
                       args: [4, 50],
                        msg:'Campo senha deve ter entre 4 e 50 caracteres!'
                    }
                }
            },
        },
        { 
            sequelize
        });
        
        this.addHook('beforeSave', async user => {
            if(user.password){
                user.password_hash = await _bcryptjs2.default.hash(user.password, 8);    
            }
        });

        return this;    
    }
    
    passwordIsValid(password){
        return _bcryptjs2.default.compare(password, this.password_hash);
    };
} exports.default = User;