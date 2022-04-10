import isAuthenticated from '@shared/http/middlewares/isAutheticated';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import OrdersControllers from '../controllers/OrdersController';

const orderRouter = Router();
const ordersController = new OrdersControllers();

orderRouter.use(isAuthenticated);

orderRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer_id: Joi.string().uuid().required(),
      products: Joi.required(),
    },
  }),
  ordersController.create,
);

export default orderRouter;
