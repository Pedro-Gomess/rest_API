"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);
const router = new (0, _express.Router)();

//NÃO DEVERIA EXISTIR!(EM UMA APLICAÇÃO REAL)
router.get('/',  _userController2.default.index);
// router.get('/:id', userController.show);

router.post('/', _userController2.default.store);
router.put('/', _LoginRequired2.default, _userController2.default.update);
router.delete('/', _LoginRequired2.default, _userController2.default.delete);

exports. default = router;