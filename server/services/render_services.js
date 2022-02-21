const axios=require('axios');

const homepage=(req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(response=>{
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err)
    })
}
const addnewuser=(req,res)=>{
    res.render('addnewuser');
}
const updateuser=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(userdata=>{
        res.render('updateuser',{user:userdata.data});  
    })
    .catch(err=>{
        res.send(err)
    })
}


module.exports={homepage,addnewuser,updateuser}