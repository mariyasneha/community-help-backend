const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")


const app=express()
app.use(cors())
app.use(express.json())
app.get("/posts",async(request,response)=>{
    const posts=await Post.find();
    response.json(posts)
})

app.post("/posts",async(request,response)=>{
    const {name,category,description}=request.body
    const newPost=new Post({name,category,description})
    await newPost.save();
    response.status(201).json(newPost)
})

app.listen(4000,()=>{console.log("server is running")})
