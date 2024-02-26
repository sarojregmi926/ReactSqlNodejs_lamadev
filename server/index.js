import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import { config } from 'dotenv';
// Load environment variables from .env file
config();

const port = parseInt(process.env.PORT) || 8800;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
});

app.get("/", (req, res) => {
    res.json("Hello this is backend");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data);
    });
});

app.post("/books", (req, res)=>{
    if (!req.body || !req.body.title || !req.body.description || !req.body.cover) {
        return res.status(400).json({ error: "Missing required data in request body" });
    }
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.cover
    ];
    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err);
        return res.status(200).json({
            success: true,
            message: "Book created/ inserted successfully",
            data: data  // Include any relevant data from the query
        });
    })

})

app.listen(port, () => {
    console.log(`Connected to backend.. ${port}`);
})