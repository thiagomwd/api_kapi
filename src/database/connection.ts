import { Db, MongoClient } from 'mongodb';

class Con {
  uri = `${process.env.URI_DB}`;
  db: Db;

  /**
   * Return a connection MongoClient
   * @returns MongoClient
   */
  public async connect():Promise<Db> {
    this.db = (await MongoClient.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })).db();
    console.log("Connected to db");
    return this.db;
  }
}

export = new Con();