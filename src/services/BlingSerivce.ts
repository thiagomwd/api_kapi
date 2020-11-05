import axios from 'axios';
import { exception } from 'console';
import DealToOrderAdapter from '../models/adapters/DealToOrderAdapter';
import Deal from '../models/Deal';

class BlingService{

  /**
   * get lib json2xml
   * @returns json2xml
   */
  getJson2Xml() {
    return require('json2xml');
  }

  /**
   * Request to save a order on Bling ERP
   * @param orders 
   */
  async saveOrders(deals: Array<Deal>) {
    let orders: Deal[] = [];
    await Promise.all(deals.map(async deal => {  
        try {
          const xmlOrder = this.getJson2Xml()(DealToOrderAdapter.adapt(deal));
          const requestBling = {
            apikey : process.env.API_BLING_KEY,
            xml : xmlOrder
          }
          console.log(requestBling);
          const savedOrderResponse = await axios.post(`${process.env.URL_BLING_API}/Api/v2/pedido/json/`, null,{ params : requestBling});
          console.log(savedOrderResponse.data);
          if(savedOrderResponse.data.retorno.pedidos) {
            console.log('ok ok ok ');
            orders.push(deal);
          }
        }catch(err) {
          console.log('erro: ', err);
          throw err.message;
        }       
      })
    );

    return orders
  }
  
}

export = new BlingService();