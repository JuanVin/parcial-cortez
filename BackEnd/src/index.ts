import express from "express";
import routes from "./routes/routes"

const app = express()
const cors = require("cors")

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))
app.use(routes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})