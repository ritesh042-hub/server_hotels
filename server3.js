const express = require('express');
const app = express();
const db = require('./db');       
const Person = require('./models/Person');
const bodyParser = require('body-parser');
const Menu=require('./models/Menu');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.post('/person', async (req, res) => {  
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();  
    console.log('Data saved');
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('/person',async(req,res)=>{
  
   try{const data=await Person.find()
 console.log('data fetched')
 res.status(200).json(data)
      
  }
  catch(err){
console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
  
})
app.post('/menu',async(req,res)=>{
  try{
    const data=req.body
    const newMenu=new Menu(data)
    const savedMenu=await newMenu.save()
    console.log('data saved')
    res.status(200).json(savedMenu)
  }
  catch(err){
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
})
app.get('/menu',async(req,res)=>{
  try{
    const data=await Menu.find()
    console.log('data is fetched')
    res.status(200).json(data)
  }
  catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server error'})
  }
})
app.get('/person/:workType',async(req,res)=>{
 {
    try{
       const workType=req.params.workType;
  if(workType=='Chef'||workType=='Waiter'||workType=='Manager'){
   const response=await Person.find({work:workType});
   console.log("Response Fetched!");
   res.status(200).json(response);
  }
  else{
    res.status(404).json({error:'Invalid Work Type!'});
  }
    }
    catch(err){
      console.log(err)
    res.status(500).json({error:'Internal server error'})
    }
  }
})
app.get('/menu/:tastetype',async(req,res)=>{
  try{
    const tastetype=req.params.tastetype;
    if(tastetype=='sweet'|| tastetype=='bitter'||tastetype=='sour'){
      const response= await Menu.find({taste:tastetype});
      console.log('Response fetched!!');
      res.status(200).json(response);
    }
    else{
      res.status(404).json({error:'Invalid taste'});
    }
  }
  catch(err){
    res.status(500).json({error:'Internal Server  Error'})
  }
})
app.put('/person/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const updatePerson=req.body;
    const response=await Person.findByIdAndUpdate(id,updatePerson);
    if(!response){
      res.status(404).json({error:'Person not found'});
    }
    console.log('Data Updated');
    res.status(200).json(response);

  }
  catch(err){
    res.status(500).json({error:'Internal Server Error'})
  }
})

app.delete('/person/:id',async(req,res)=>{
  try{
    const id=req.params.id;
    const response=await Person.findByIdAndDelete(id);
    if(!response){
       res.status(404).json({error:'Person not found'});
    }
    console.log('Person removed');
    res.status(200).json(response)
  }
  catch(err){
      res.status(500).json({error:'Internal Server Error'});
  }
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
