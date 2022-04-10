import { Request, Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';

export default class OrdersControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({ customer_id, products });

    return response.json(order);
  }
}
