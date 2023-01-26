const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv')
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config()

PORT=process.env.PORT
url=process.env.CONNECTION.replace('<password>',process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        app.listen(PORT,()=>{
            console.log('SERVER WORKING');
        })
    }
})
const Schema = mongoose.Schema;

let product=new Schema({

    productimage:{type:String,required:true},
    about:{type:String,required:true},
    author_image:{type:String,required:true},
    author_name:{type:String,required:true},
    price:{type:Number,required:true},
    
    
})


const Authors = mongoose.model("authors", product);


app.get('/', (req, res) => {
    res.send('Hello');
  });

  //add

app.post('/users',(req,res)=>{
        let newproduct=new Authors({
            productimage:req.body.productimage,
            about:req.body.about,
            author_image:req.body.author_image,
            author_name:req.body.author_name,
            price:req.body.price,
        })

        newproduct.save()
        res.send({message:'product added'})


})

//get

app.get('/users',(req,res)=>{
    Authors.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.send({message:err})
        }
    })
})

//get by id
app.get('/users/:id',(req,res)=>{
    const {id}=req.params
    Authors.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)

            }
            else{
            res.send({message:'not found'})

            }
        }
        else{
            res.send({message:err})
        }
    })
})
//delete
app.delete('/users/:id',(req,res)=>{
    const {id}=req.params
    Authors.findByIdAndDelete(id,(err)=>{
        if(!err){
          res.send({message:'product deleted'})
        }
        else{
            res.send({message:err})
        }
    })
})