const express = require ('express')
const app = express()

const PORT = 5000

app.use(express.json())


app.get('/',(req,res)=>{
 res.send("E-commerce project")
})

app.listen(PORT, ()=>{
    console.log("server is running ");
})