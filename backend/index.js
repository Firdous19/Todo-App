const express = require("express");
const {createTodo,updateTodo} = require("./zodSchemas")
const {Todos}=require("./Database/mongo");
const app = express();

app.use(express.json());


// signup logic 
app.post("/signup",(req,res)=>
{
    
})
//login logic 
app.post("/login",(req,res)=>
{
    
}) 
// create todo logic 
app.post("/todo",async (req,res)=>
{
    if(createTodo.safeParse(req.body).success)
    {
        const title = req.body.title;
        const description = req.body.description;
       await Todos.create({title,description});
       res.status(200).json({msg : "Todo Added"});
    }
    else 
    {
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
    }
})
// display todo logic 
app.get("/todo",async(req,res)=>
{
    const todos = await Todos.find({});
    if(!todos.length)
    {
      res.status(200).json({msg : "0 todo"});
      return; 
    }
    return res.status(200).json(todos);
})
// update todo logic
app.put("/todo",async (req,res)=>
{
    if(updateTodo.safeParse(req.body).success)
   {
        const id = req.body.id; 
        const title = req.body.title; 
        const description = req.body.description ; 
        try{
        const todo = await Todos.findById(id);
        await Todos.updateOne({_id : id},{title,description});
        res.status(200).json({msg : "Updated todo"});
        }
        catch(err)
        {
            res.send("Invalid ID");
        }
   }
   else 
   {
     res.status(411).json({msg : "Wrong inputs"});
   }
})
// delete todo logic
app.delete("/todo",(req,res)=>
{
    
})


app.listen(3000,()=>
{
console.log("Server running");
})