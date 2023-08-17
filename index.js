const express=require("express")
const app=express()
app.use(express.static('public'))
app.get('/',(req,res)=>{
    console.log("Home Page call")
    res.sendFile(__dirname+"/views/home.html")
})
app.get('/home',(req,res)=>{
    console.log("Home Page call")
    res.sendFile(__dirname+"/views/home.html")
})
app.get('/about',(req,res)=>{
    console.log("About Page call")
    res.sendFile(__dirname+"/views/about.html")
})
app.get('/work',(req,res)=>{
    console.log("Work Page call")
    res.sendFile(__dirname+"/views/work.html")
})
app.get('/gallery',(req,res)=>{
    console.log("Gallery Page call")
    res.sendFile(__dirname+"/views/gallery.html")

})
app.get('*',(req,res)=>{
    res.status(404).send("Page not found-404")
})


app.listen(3001,()=>{
    console.log("app runnung on port 3001")
})
