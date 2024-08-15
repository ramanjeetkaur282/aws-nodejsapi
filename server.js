import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route.js';
import cors from 'cors';
import dbConnection from './database/db.js';

const PORT=process.env.PORT || 8000;
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',router);



dbConnection();
//to create server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));