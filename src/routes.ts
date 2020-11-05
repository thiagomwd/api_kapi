import { Router } from 'express';
import 'json2xml';
import DealsController from './controllers/DealsController';

const routes = Router();

routes.post('/deals', DealsController.create);
routes.get('/sync', DealsController.syncDeals);
routes.get('/test', (req, res) => {
  res.send('he');
});

export default routes;