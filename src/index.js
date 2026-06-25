

import http from "http";
import express from "express";

//creating express app instance
const app = express();

//*creating http server
const server = http.createServer(app);
   

//ip -> 198.168.1.1:1112

//home -> get, / => <h1> Home Page</h1>
  //  app.get(path, handler);
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

//crud users
//get all users
//get /users -> user page
//route param (:id)
app.get("/users", (req, res) =>{
   // res.send("<h1>All Users</h1>");
    res.json({
    message: "user fetched",
    success: true,
    date: {
        _id: 1, 
        name: "John Doe",
        email: "john@gmail.com"
    },
   });
});

//get by id
//users/100 => {id:100}
// /posts/:userId/:postId => /posts/1/2 => {postId:2,userId}

app.get("/users/:id", (req, res) =>{
   // res.send("<h1>All Users</h1>");
   //req.param => {} => {id:1}
   //console.log(req.params);
   const id = req.params.id;

    res.json({
    message: "user by id fetched",
    success: true,
    date: {
        _id: 1, 
        name: "John Doe",
        email: "john@gmail.com"
    },
   });
});


//create
app.post("/users", (req, res) =>{
   // res.send("<h1>User created</h1>");
   res.json({
    message: "user created",
    success: true,
    date: {
        _id: 1, 
        name: "John Doe",
        email: "john@gmail.com"
    },
   });
});

//update
app.put("/users/:id", (req, res) =>{
   // res.send("<h1>User updated</h1>");
      
   const id = req.params.id;

    res.json({
    message: "user updated",
    success: true,
    date: {
        _id: 1, 
        name: "John Doe",
        email: "john@gmail.com"
    },
   });
});


//delete
app.delete("/users/:id", (req, res) => {
// res.send("<h1>User Deleted</h1>");

const id = req.params.id;

 res.json({
    message: "user delete",
    success: true,
    date: {
        _id: 1, 
        name: "John Doe",
        email: "john@gmail.com"
    },
   });
});


//crud product
app.get("/product", (req, res) =>{
   // res.send("<h1>All product</h1>");

 res.json({
    message: "product fetched",
    success: true,
    date: {
        _id: 1, 
        name: "t-shirt",
    },
   });
});

//get by id
app.get("/product/:id", (req, res) =>{
   // res.send("<h1>All product</h1>");
const id = req.params.id;

 res.json({
    message: "product fetched",
    success: true,
    date: {
        _id: 1, 
        name: "t-shirt",
    },
   });
});

app.post("/product", (req, res) =>{
   // res.send("<h1>Product created</h1>");
 res.json({
    message: "product created",
    success: true,
    date: {
        _id: 1, 
        name: "t-shirt",
    },
   });
});

//update
app.put("/product/:id", (req, res) =>{
   // res.send("<h1>Product updated</h1>");
const id = req.params.id;

 res.json({
    message: "product updated",
    success: true,
    date: {
        _id: 1, 
        name: "t-shirt",
    },
   });
});

//delete
app.delete("/product/:id", (req, res) => {
   // res.send("<h1>Product Deleted</h1>");
const id = req.params.id;

 res.json({
    message: "product delete",
    success: true,
    date: {
        _id: 1, 
        name: "t-shirt",
    },
   });
});



server.listen(8081, 'localhost', ()=>{
    //127.0.0.1
    console.log(`Server is running at http://localhost:8081`);
    console.log("press ctrl+c to close the server");
});


//Express js /  nestjs -> framework
//get/users -> handler
//post/users -> handler

//school management
//student, teacher