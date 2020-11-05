
export default class Deal {

  id: number;

  title: string;

  owner_name: string;

  person_name: string;

  org_name: string;

  value: number;

  add_time: Date;

  /**
   * Factory to a new instace of Deal
   * @param data 
   */
  static newInstace(data: any) {
    let instance = new Deal();
    if(data) {
      instance = (
        ({ id, title, owner_name, person_name, org_name, value, add_time }) => 
        ({ id, title, owner_name, person_name, org_name, value, add_time })
        )(data);
    }

    return instance;
  }

}