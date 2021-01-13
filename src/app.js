import express from "express";
import Morgan from "morgan";

const app = express()

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json("welcome")
})

export default app;