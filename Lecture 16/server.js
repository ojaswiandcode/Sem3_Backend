const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3000

// app.use(morgan("combined"));

const logMiddleware=(req,res,next)=>{
    // req.name="Devendra"
    console.log("Req url:",req.url, "Time:", new Date().toLocaleString());
    // res.send("Hello from middleware") 
    next();
}

const authMiddleware=(req,res,next)=>{
    console.log("Authentication successful");
    next();
}

// app.use(authMiddleware);   //global   middleware
app.use(logMiddleware);

app.get("/",(req,res)=>{
    // console.log(req.name)
    console.log("Homepage")
    res.send("Hello from server")
})

app.get("/about",authMiddleware,(req,res)=>{  //route level middleware
    console.log("About page")
    res.send("Hello from about page")
})


app.use((req,res)=>{   //invalid route middleware
    res.status(404).json({success:false, message:"Page not found"});
})


app.listen(PORT,()=>console.log("server is running on port 3000"));