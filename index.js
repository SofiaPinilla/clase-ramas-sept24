const express = require("express")
const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Mi primer endpoint")
})

app.get("/endpointSofi",(req,res)=>{
    res.send("El endpoint de Sofi")
})

app.get("/elotroendpoint",(req,res)=>{
    res.send("El endpoint que tengo que hacer")
})

app.get("/endpointJose",(req,res)=>{
    res.send("este es el endpoint de Jose")
})
app.listen(PORT,()=>console.log("Servidor levantaoooOHHH en el puerto: "+ PORT))