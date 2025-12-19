import { Sequelize, Model } from 'sequelize';
import appConfig from '../config/appConfig';
export default class Photo extends Model {
    static init(sequelize){
        super.init({

            filename:{
                type:Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 255],
                        msg: 'Campo não pode ficar vazio!'
                    }
                }
            },
            originalname:{
                type:Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 255],
                        msg: 'Campo não pode ficar vazio!'
                    }
                }
            },
            url:{
                type:Sequelize.VIRTUAL,
                get(){
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`
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
}