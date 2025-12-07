import User from "../models/User";
import jwt from "jsonwebtoken";
class TokenController{
   async store(req, res){
        const { email, password } = req.body;
        if(!email || !password){
            res.status(401).json({  
                erros: 'O campo email e senha devem ser preenchidos!'
            });
        }

        const user = await User.findOne({ where: {email} });

        if(!user){
            res.status(400).json({  
                erros: 'Usuário não existe!'
            });
        }

        if(!(await user.passwordIsValid(password))){
             res.status(401).json({  
                erros: 'Senha inválida!'
            });
        }
        const { id } = user;
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
            expiresIn:process.env.TOKEN_EXPIRATION
        });
        return res.json({token});  
    }
};

export default new TokenController();