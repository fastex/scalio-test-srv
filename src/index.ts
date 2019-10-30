import cors from "cors";
import express from "express";

const app = express();
const port = 3000;

app.use(cors());

app.post( "/login", ( req, res ) => {
    // res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.send( '{"status":"Logged In"}' );
});

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
