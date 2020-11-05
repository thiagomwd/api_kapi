import { Request, Response } from 'express';
import DealBO from '../business/DealBO';
import moment from 'moment';
import Controller from './Controller';

/**
 * Class DealsController, Responsable for deals requests
 */
class DealsController extends Controller {
  
  /**
   * To create a new deal, used by route POST /deals
   * @param req 
   * @param res 
   */
  async create(req: Request, res: Response) {
    try{
      const deal = req.body;
      const dealBO = new DealBO();
      const created = await dealBO.create(deal);
      super.response201(res, created);
    } catch (err) {
      super.error(res, err);
    }
    
  }

  /**
   * To sync won pipedrive deals to bling orders
   * @param req 
   * @param res 
   */
  async syncDeals(req: Request, res: Response) {
    try{
      const dealBO = new DealBO();
      const wonDeals = await dealBO.getWonDeals();
      const response = await dealBO.sync(wonDeals);
      super.response(res, response);
    } catch (err) {
      super.error(res, err);
    }
  }

  /**
   * To sync won pipedrive deals to bling orders
   * @param req 
   * @param res 
   */
  async getAggregation(req: Request, res: Response) {
    try{
      const dealBO = new DealBO();
      const aggregation = await dealBO.getAggregation();
      super.response(res, aggregation);
    } catch (err) {
      super.error(res, err);
    }
  }
  
}

export default new DealsController();