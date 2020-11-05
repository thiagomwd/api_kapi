import moment from 'moment';
import { deserialize } from 'v8';

import DealsRepository from "../database/repositories/DealsRepository";
import Deal from "../models/Deal";
import BlingSerivce from "../services/BlingSerivce";
import PipeDriveSerivce from "../services/PipeDriveSerivce";

export default class DealBO {

  getRepository() {
    return new DealsRepository();
  }

  /**
   * Return a aggregation struct of deals by day and value
   * @param deal 
   */
  async getAggregation() {
    return await this.getRepository().getDealAggregation();
  }

  async create(deal: Deal) {
    const dealRepository = new DealsRepository();
    let created = await dealRepository.create(deal);
    return created;
  }

  /**
   * Update aggregation with new deals
   * @param deals 
   */
  async saveDealsAggregation(deals: Deal[]):Promise<any> {
    if(deals.length > 0) {
      let dealsSavedIds: any[] = [];
      const dealRepository = new DealsRepository();
      let aggregation = await this.getAggregation();
      deals.forEach(deal => {
        const formatedDate = moment(deal.add_time).format('YYYY-MM-DD');
        aggregation[formatedDate] = aggregation[moment(deal.add_time).format('YYYY-MM-DD')] || {};
        aggregation[formatedDate][deal.value] = aggregation[moment(deal.add_time).format('YYYY-MM-DD')][deal.value] || [];
        aggregation[formatedDate][deal.value].push(deal);
        dealsSavedIds.push({id: deal.id});
      });
      
      try {
        await dealRepository.updateDeals(aggregation);
        return dealsSavedIds;
      } catch (err) {
        console.log(err);
        throw err;
      }
      
    }
    
  }

  /**
   * Get deals which status is like a won
   * @returns deals
   */
  async getWonDeals():Promise<Deal[]> {
    try {
      const deals = await PipeDriveSerivce.getDeals();
      return deals.data.map((deal: any) => Deal.newInstace(deal));
    }catch (err) {
      throw err;
    }
    
  }
  
 
  /**
   * Process deals and sync to save on bling orders
   */
  async sync(responsedDeals: Array<Deal>) {
    try{
      const dealRepository = new DealsRepository();
      let dealsIds: any[] = [];
      responsedDeals.forEach(async deal => dealsIds.push(deal.id));

      const sincIds = await dealRepository.getDealsIdsSyncronized(dealsIds);
      if(sincIds) {
        responsedDeals = this.removeDealsSincronyzed(sincIds, responsedDeals);
      }
      
      if(responsedDeals.length > 0) {
        let syncronizedOrders = await BlingSerivce.saveOrders(responsedDeals);
        if(syncronizedOrders.length === 0) {
          return [];
        }
        let savedIds = await this.saveDealsAggregation(syncronizedOrders);
        return await dealRepository.createManyDealSinc(savedIds);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  /**
   * Proccess a array of deal and filter it, based on a array of ids
   * @param ids 
   * @param deals 
   */
  removeDealsSincronyzed(ids: any, deals:Deal[]): Deal[] {
    return deals.filter(deal => {
      return ids.findIndex((item:any) => item.id === deal.id ) === -1
    })
  }


}