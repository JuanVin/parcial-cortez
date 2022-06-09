import express from "express";
import routes from "./routes/routes"

const app = express()
const cors = require("cors")

app.use(express.json());
//transformar los datos de un formulario html a objetos json 
app.use(express.urlencoded({extended:false}));

app.use(routes);

app.use(cors())

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000")
})