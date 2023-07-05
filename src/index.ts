import express, {Express, Request, Response} from 'express'


const app: Express = express();
const port = 3000;


// using helmet helps to set Common HTTP headers appropriately.
const helmet = require('helmet')
app.use(helmet());

// Disabling 'X-Powered-By' header to reduce fingerprinting.
app.disable('x-powered-by');

app.get('/', (req:Request, res:Response)=>{
    res.send('My api.');
});

app.listen(port,()=>{
    console.log(`[server]: Listening on port 3000.`) 

});