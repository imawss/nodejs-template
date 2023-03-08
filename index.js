import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors({
    origin: "",
    methods: ["GET", "POST"],
    credentials:true, 
    optionSuccessStatus:200
}));

app.use(bodyParser.json());

app.listen(port, function() {
    console.log("Server is starting! Port number is:" + port);
});