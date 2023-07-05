import { error } from "console";
import * as dotenv from "dotenv";
import {MongoClient} from 'mongodb';


dotenv.config();



const uri = process.env.DATABASE_URI as string;
const client = new MongoClient(uri);

const dbName:string|undefined = process.env.DB_NAME;

async function connectToDatabase() {
    await client.connect();
    console.log("Connected Successfully!");
    const db = client.db(dbName);
    const collection = db.collection('Users');
}

connectToDatabase()
    .then(console.log)
    .catch(console.error)
    .finally (()=>client.close());
