import { InsertWriteOpResult } from 'mongodb';
import Deal from '../../models/Deal';
import Con from '../connection';

/**
 * Class DealsRepository, Responsible to database actions of deals
 */
export default class DealsRepository {  
  /**
   * Create a new deal
   */
  async create(deal:Deal) {
    try {
      let db = await Con.connect();
      let result = await db.collection('deals').insertOne(deal);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Verify if exist a syncronized deal by id
   * @param deal 
   */
  async getDealsIdsSyncronized(dealsIds: any[]):Promise<any[]> {
    try {
      let db = await Con.connect();
      let result = await db.collection('deals_sinc').find({id : {$in : dealsIds} }).toArray();
      return result;
    } catch (err) {
      return err;
    }
  }

  /**
   * Create a deal sync
   * @returns result
   */
  async updateDeals(aggregation:any) {
    try {
      let db = await Con.connect();
      delete aggregation._id;
      let result = await db.collection('deals').updateOne({aggregation: true}, {$set : aggregation});
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  /**
   * get all deals on document aggregation
   * @returns results;
   */
  async getDealAggregation() {
    try {
      let db = await Con.connect();
      let results = await db.collection('deals').findOne({aggregation: true});
      return results;
    } catch (err) {
      return err;
    }
  }

  /**
   * Create a new deal sinc
   */
  async createManyDealSinc(dealsSavedIds:any[]): Promise<any> {
    try {
      let db = await Con.connect();
      let result = await db.collection('deals_sinc').insertMany(dealsSavedIds);
      return result.result;
    } catch (err) {
      console.log(err);
    }
  }
}