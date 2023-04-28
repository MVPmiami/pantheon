var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UseCases from './../../useCases/index.js';
import validate from '../../middlewares/validate.js';
import Express from 'express';
import Joi from 'joi';
const router = Express.Router();
const SignUpSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string()
        .regex(/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/)
        .required(),
    email: Joi.string().email().required(),
});
router.post('/sign-up', validate(SignUpSchema), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { value, error } = yield UseCases.AuthService.signUp(req.body.login, req.body.password, req.body.email);
    if (error) {
        res.status(500).json(error.message || new Error('UC undefined error'));
        return;
    }
    res.status(200).json(value);
}));
export default router;
