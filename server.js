import express from "express";
import { cursos } from "./src/dados/cursos.js";

const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
    resp.send("Olá, mundo!");
});

app.get("/usuarios", (req, resp) => {
    let usuarios = {"usuarios": ["João", "Maria", "José"]};
    resp.json(usuarios);
});

app.get("/cursos", (req, resp) => {
    resp.json(cursos);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});