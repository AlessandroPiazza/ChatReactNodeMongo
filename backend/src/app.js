import express from 'express';
import cors from 'cors';
import http from 'http';
import routes from './routes';

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors({ origin: 'http://localhost:3000' }));
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
