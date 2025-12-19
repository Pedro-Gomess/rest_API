import {Router} from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/LoginRequired';
const router = new Router();

//NÃO DEVERIA EXISTIR!(EM UMA APLICAÇÃO REAL)
router.get('/',  userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;