import express, {json} from  "express";
import body_parser from "body-parser";
import dotenv from "dotenv";
dotenv.config();



const app = express();
const PORT = process.env.WEBHOOKPORT|| 8000;

app.use(json());

app.listen(PORT, () => {
    console.log("Port listening...");

    
})

