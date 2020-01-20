import { Router } from 'express';
import UserController from './app/controller/UserController';
import ConsultantController from './app/controller/ConsultantController';
import ChatController from './app/controller/ChatController';
import ConsultantSessionController from './app/controller/ConsultantSessionController';
import MessagesController from './app/controller/MessagesController';
import authMiddleware from './middlewares/auth';
import Database from './database/index';

const routes = new Router();

routes.post('/sessions', ConsultantSessionController.store);
routes.post('/users', UserController.store);
routes.post('/consultants', ConsultantController.store);
routes.post('/chat', ChatController.store);
routes.post('/messages/:name/:chatId', MessagesController.store);

routes.use(authMiddleware);

export default routes;
