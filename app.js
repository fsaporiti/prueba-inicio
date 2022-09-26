const express = require("express");
const path = require("path");                       // path unifica las rutas en ditintos SO

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));                //le dice a expres que la carpeta public es una carpeta estatica con archivos para consumir


app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
})

app.get("/views/login.html", (req,res) => {
    res.sendFile(path.resolve (__dirname, "./Views/login.html"))
})

app.get("/views/register.html", (req,res) => {
    res.sendFile(path.resolve (__dirname, "./Views/register.html"))
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})