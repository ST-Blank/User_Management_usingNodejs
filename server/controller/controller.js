let UserDB=require('../model/model')

let create=(req,res)=>{
    //if user is empty
    if(!req.body){
        res.status(400).send({message:'cannot be empty'})
    }
//new user
const user=new UserDB({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})
//save user in database
user
.save(user)
.then(data=>{
    res.redirect('/new_user');
    //res.send(data)
})
.catch(err=>{
    res.status(500).send({
        message:err.message||'some error occured'
    });
});
}
//find the user
let find=(req,res)=>{
    if(req.query.id){ //single user
        const id=req.query.id;
        UserDB.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot found the user`})

        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||'some error occured'
        });
    });


    }else{ //all users
    UserDB.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||'some error occured'
        });
    });
}
}
//update the user
let update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:`data can not be empty `})
    }
    const id=req.params.id;
    UserDB.findByIdAndUpdate(id, req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot found the user with id: ${id}`})

        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||'some error occured'
        });
    });


}
//delete the user
let deletee=(req,res)=>{
    const id=req.params.id;
    UserDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete the user with id: ${id}`})

        }else{
            res.send({message:'user was deleted'})
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||'some error occured while deleting user with id'+id
        });
    });

}
module.exports={create,find,update,deletee}