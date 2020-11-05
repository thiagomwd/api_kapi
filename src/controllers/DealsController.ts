import { Request, Response } from 'express';
import DealBO from '../business/DealBO';
import moment from 'moment';

export default {
  
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
      return res.status(201).json({ message: created?.result.ok, lastId: created?.insertedId});
    } catch (err) {
      return res.status(400).json({
        request: false,
        error:  err
      });
    }
    
  },

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
      return res.json(response);
    } catch (err) {
      return res.status(400).json({
        request: false,
        error:  err
      });
    }
  }
}