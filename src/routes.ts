import { Router, Request, Response } from "express";

import { AuthUserController } from "./Controllers/user/AuthUserController";
 import { CreateUserController } from "./Controllers/user/CreateUserController";
const router = Router();
 //Rotas USER ------------
router.post('/users',new CreateUserController().handle);

router.post('/session',new AuthUserController().handle);


export { router };