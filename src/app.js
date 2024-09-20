const express = require('express');

const app = express();

// this will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstName:"Avinash", lastName:"Gupta"})
})

app.post("/user",(req,res)=>{
    console.log("Save data to DB ");
    res.send("Data successfully saved to the DB!")
})

app.delete("/user", (req,res)=>{
    res.send("Deleted successfully")
})

// this will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{
    res.send("Hello from the server!");
});

app.listen(3000,()=>{
    console.log("Server is successfully listening to port 3000")
});