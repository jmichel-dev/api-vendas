import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsController {
  public async session(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { password, email } = request.body;

    const createSessionservice = new CreateSessionsService();

    const user = await createSessionservice.execute({ email, password });

    return response.json(user);
  }
}
