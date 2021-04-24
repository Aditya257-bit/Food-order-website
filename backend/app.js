const express= require('express');
const app = express();
const fs = require('fs');
const mongoose= require('mongoose');

app.use(express.json());
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/fooditemsdatabase',
    {
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    }).then(() => {
        console.log("Connection Successful");
    }).catch((error) => {
        console.log("Connection Error");
    })

const Schema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

},{versionKey:false}) 
const CartItem = mongoose.model('CartItem',Schema)


app.get('/data', function(req, res){
fs.readFile('./data.json','utf-8',(err, data)=>{
            if(err){
                console.log(err);
            }
            else{
                const datas = JSON.parse(data);
                res.json({results:datas});
            }
    })
})



app.get('/cartData',(req, res)=>{
    CartItem.find().then((data) => res.json(data))
})
app.post('/addData',(req,res)=>{

    const addFoodItems = new CartItem({
            name:req.body.name,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description
    })

    addFoodItems.save().then((result)=>{
        console.log(result);
        res.json(result);
    }).catch((err)=>{
        console.log(err);
    })
})

app.delete('/deleteData',(req, res)=>{
    CartItem.deleteOne({_id:req.body._id}).then((result)=>{
        console.log(result);
        res.json(result);
    })
})
app.delete('/clearCart',(req, res)=>{
    CartItem.deleteMany().then((result)=>{
        console.log(result);
        res.json(result);
    })
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
}) 