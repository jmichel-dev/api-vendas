import isAuthenticated from '@shared/http/middlewares/isAutheticated';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';

import UserProfileController from '../controllers/UserProfileController';

const profileRouter = Router();
profileRouter.use(isAuthenticated);

const userProfileContoller = new UserProfileController();

profileRouter.get('/', userProfileContoller.show);
profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string().optional(),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .when('password', {
          is: Joi.exist(),
          then: Joi.required(),
        }),
    },
  }),
  userProfileContoller.update,
);

export default profileRouter;
