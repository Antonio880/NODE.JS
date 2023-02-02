const express = require('express');

const app = express();

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let itens = [
        {
            title: "D",
            message:"esenvolvendo algumas coisas"
        },
        {
            title: "E",
            message:"JS usa JS para renderizar HTML"
        },
        {
            title: "M",
            message:"uito interessante"
        },
        {
            title: "A",
            message:"ctualiz"
        }
    ]

    const subtitle = "Um teste para passar texto para o index"
    res.render("pages/index", {
        qualitys: itens,
        subtitle: subtitle})
})

app.get("/about", (req, res) => {
    res.render("pages/about")
})

app.listen(8080)

console.log("Servidor functional")