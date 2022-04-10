import { Request, Response } from 'express';
import ShowUserProfileService from '../services/ShowUserProfileService';
import UpdateUserProfileService from '../services/UpdateUserProfile';

export default class UserProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showUserProfileService = new ShowUserProfileService();

    const user = await showUserProfileService.execute({ user_id });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, password, old_password } = request.body;

    const updateUserProfileService = new UpdateUserProfileService();

    const user = await updateUserProfileService.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(user);
  }
}
