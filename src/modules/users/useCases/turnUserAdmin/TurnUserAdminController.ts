import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const id = request.params.user_id;
      const user = this.turnUserAdminUseCase.execute({ user_id: id });
      return response.status(201).send(user);
    } catch (e) {
      return response.status(404).send({ error: e.message });
    }
  }
}

export { TurnUserAdminController };
