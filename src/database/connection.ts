import { createConnection } from 'typeorm';

createConnection({
  logging: true,
  synchronize: true,
  useNewUrlParser: true,
  type: "mongodb",
  url: `mongodb+srv://kapi_admin:Kapidb#20202@kapidb0.lzxui.mongodb.net/kapidb?retryWrites=true&w=majority`,
  ssl: true,
  useUnifiedTopology: true
}).then(async (connection) => {
  console.log("Connection succesful");
  console.log("Connection: ", connection);
}).catch((error) => {
  console.log("Connection failed");
  console.log(error);
});