class PipeDriveSerivce{
  lib = require('pipedrive');
  
  constructor() {
    this.lib.Configuration.apiToken = process.env.API_PIPEDRIVE_KEY;
  }

  async getDeals() {
    let deals:any = [];
    await this.lib.DealsController.getAllDeals({ status : 'won'},  function(error: any, response: any, context: any) {
      deals = response;
    });

    return deals;
  }
  
}

export = new PipeDriveSerivce();