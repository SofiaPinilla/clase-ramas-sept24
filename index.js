const express = require("express")
const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Mi primer endpoint")
})

app.get("/endpointSofi",(req,res)=>{
    res.send("El endpoint de Sofi")
})
app.listen(PORT,()=>console.log("Servidor levantaoooOHHH en el puerto: "+ PORT))