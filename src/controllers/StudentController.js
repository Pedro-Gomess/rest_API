import Student from "../models/Student";
class HomeController{
   async index(req, res){
       const newStudent = await Student.create({
           name: 'Charles',
           lastname: 'Oliveira',
           email: 'oliveira@mail.com',
           age: 37,
           weight: 67,
           height: 1.8
        });
      
        res.json(newStudent);
        
    }
};

export default new HomeController();