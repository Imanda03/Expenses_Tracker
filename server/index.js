import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js"
import Routes from "./routes/user-routes.js"
// import AccountBookRoutes from "./routes/accountBook.js"

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

Connection();

app.use('/', Routes);


app.listen(8080, () => console.log("Server has been started at 8080"));