const Joi=require('joi');
const express=require('express')
//we stoted in app
const app=express();
app.use(express.json())
//http methods get,post,put,delete
const courses=[
    
        {id:1,name:'course1'},
         {id:2,name:'course2'},
          {id:3,name:'course3'},
           {id:4,name:'course4'},
    
]
app.get('/',(req,res)=>{
    res.send("Hello world")
})
// app.get('/api/courses',(req,res) => {
//     res.send([1,2,3,4])
// })
//Courses array
app.get('/api/courses',(req,res) => {
    res.send(courses)
})
//api/courses/1:prominers
// app.get('/api/courses/:id',(req,res) => {
//    res.send(req.params.id)
// })
//name based promiters
// app.get('/api/posts/:year/:month',(req,res) => {
//    res.send(req.query)
// })
//post
app.post('/api/courses',(req,res) => {
    const schema={
        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);
  
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course);
    res.send(course);
})
//
app.get('/api/courses/:id',(req,res) => {
  const course= courses.find(c=>c.id===parseInt(req.params.id));
  if(!course)res.status(400).send('The given is not found//404:not found');
  res.send(course);
})
//PORT
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening on ${port}.....`))