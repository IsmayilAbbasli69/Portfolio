
'use strict';
const express=require('express');
const serverless=require('serverless-http')
const app=express();
const router=express.Router()
const cors=require('cors');
const mongoose=require('mongoose')
const User=require('./models/user.model');
const Blog=require('./models/blog_model')
const jwt=require('jsonwebtoken');



app.use(cors());
app.use(express.json())   
mongoose.connect('mongodb+srv://dbIsmayil:ismayil13@cluster0.ejhfuce.mongodb.net/?retryWrites=true&w=majority').then(()=>{
  console.log('DB connected')
}).catch((err) => {
  console.log('error:'+err.message);  
});

router.post('/api/register', async (req,res)=>{ 
console.log(req.body)

try {
await User.create({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password,
})

  res.json({status:'ok'})
} catch (error) {
  res.json({status:'error',error:'Something went wrong'})
}
})

router.post('/api/create', async (req,res)=>{ 
  console.log(req.body)
  const name=await User.findOne({email:req.body.email});
  
  try {
  await Blog.create({
    name:name.name,
    title:req.body.title,
    blog:req.body.blog,
  })
  
    res.json({status:'ok'})
  } catch (error) {
    res.json({status:'error',error:error})
  }
  })


router.post('/api/get_blog',async (req,res)=>{
  const data=await Blog.find({});
  return res.json({data:data})
})



  
router.post('/api/data', async (req,res)=>{
  const data=await User.findOne({email:req.body.email})
  return res.json({data:data.name})
})




router.post('/login', async (req,res)=>{ 
  console.log(req.body)


  const user=await User.findOne({
    email:req.body.email,
    password:req.body.password,
  })
   
  if(user){
const token=jwt.sign({
email:user.email,
password:user.password,

},'secret123');
     return res.json({status:'ok',user:token})
  }else{
    res.json({status:'error',user:false})
  }
  console.log("MEssage")
  })


  router.post('/api/blog',async(req,res)=>{
    console.log(req.body);
const title=req.body.title;

const data=await Blog.findOne({title:title});
try{
  return res.json({title:data.title,blog:data.blog,status:'ok'})
}catch(err){
return res.json({status:'error',error:err})
}

  })

app.use('/.netlify/functions/api',router)
module.exports=app;
module.exports.handler=serverless(app)
  app.use('/api',router)
app.listen(process.env.PORT||5000,()=>{ 
  console.log("Server active")
}); 
