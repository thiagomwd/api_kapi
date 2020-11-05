import './config'
import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 8001;
app.use(express.json());
app.use(routes);


console.log(`Listening on: ${port}`);
app.listen(port);