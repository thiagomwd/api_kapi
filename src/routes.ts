import { Router } from 'express';
import DealsController from './controllers/DealsController';

const routes = Router();

routes.get('/sync', DealsController.syncDeals);
routes.post('/hook', DealsController.syncDeals);
routes.get('/deals', DealsController.getAggregation);
routes.post('/deals', DealsController.create);

export default routes;