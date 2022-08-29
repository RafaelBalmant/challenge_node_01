import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest extends Request {
  headers: {
    user_id: string;
  };
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: IRequest, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).send(allUsers);
    } catch (e) {
      return response.status(400).send({ error: e.message });
    }
  }
}

export { ListAllUsersController };
