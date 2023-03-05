import express from 'express'
import mongoose from "mongoose";


import {loginValidation, postCreateValidation, registerValidation} from './validation.js'


import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";




mongoose.connect('mongodb+srv://vladgershman:12345@clusterblog.re72ewp.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        console.log('db ok')
    }).catch((err)=> console.log('db error',err))

const app = express();


app.use(express.json());


app.post('/auth/login',loginValidation,UserController.login);



app.post('/auth/register',registerValidation,UserController.register);


app.get('/auth/me',checkAuth ,UserController.getMe);


app.get('/posts',PostController.getAll)
// app.get('/posts/:id',PostController.getOne)

app.post('/posts',checkAuth ,postCreateValidation,PostController.create)

//app.delete('/posts',postCreateValidation,PostController.remove)

//app.patch('/posts',postCreateValidation,PostController.update)





app.listen(3333,(error)=>{
    if(error){
        return console.log(error)
    }

    console.log('Server Ok')
})


