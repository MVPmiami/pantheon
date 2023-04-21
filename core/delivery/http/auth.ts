import UseCases from './../../useCases/index.js'
import validate from '../../middlewares/validate.js'

import Express, { Router } from 'express'
import Joi from 'joi'

const router: Router = Express.Router()

const SignUpSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/)
    .required(),
  email: Joi.string().email().required(),
})

type SignUpContract = {
  login: string
  password: string
  email: string
}

router.post(
  '/sign-up',
  validate(SignUpSchema),
  async (
    req: Express.Request<unknown, any, SignUpContract>,
    res: Express.Response,
  ) => {
    const { value, error } = await UseCases.AuthService.signUp(
      req.body.login,
      req.body.password,
      req.body.email,
    )
    if (error) {
      res.status(500).json(error.message || new Error('UC undefined error'))
      return
    }
    res.status(200).json(value)
  },
)

export default router
