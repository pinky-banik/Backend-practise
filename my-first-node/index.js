const express =require ('express');
const cors =require('cors');
const app =express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World From Pinky practise!')
  });

  const users =[
    {id:0,name:'shabana',email:"shabana@gmail.com"},
    {id:1,name:'shabana',email:"shabana@gmail.com"},
    {id:2,name:'shabana',email:"shabana@gmail.com"},
    {id:3,name:'shabana',email:"shabana@gmail.com"},
    {id:4,name:'shabana',email:"shabana@gmail.com"},
    {id:5,name:'shabana',email:"shabana@gmail.com"},
    {id:6,name:'shabana',email:"shabana@gmail.com"},
  ]
              
app.get('/users',(req,res)=>{
    const search=req.query.search;
    //use query parameter
    if(search){
        const searchResult =users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
    res.send(users);
})

app.get('/users/:id',(req,res)=>{
    const id =req.params.id;
    const user = users[id]
    res.send(user);
})


//app method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id =users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    res.send(JSON.stringify(newUser))
})


app.get('/fruits',(req,res)=>{
    res.send(['mango',"banana","orange","tangarin"])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy yummy tok marka fazli')
})

app.listen(port,()=>{
    console.log('listening to port',port);
});