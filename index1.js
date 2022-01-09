const express = require("express");
const app=express();
const mongoose = require("mongoose")
const validator = require("validator")
const port = process.env.PORT ||7000;
const database = require("./database");
const users1=require("./users1");
app.use(express.json())

//Get request
app.get("/api/get/UsersProfiles", (req, res) => {
    users1.find().then((data) => {
        res.send(data);
        console.log(data);
    })
})

//post request
app.post("/api/Create/UsersProfiles", (req, res) => {
    console.log(req.body);
    const data = new users1({
        _id: new mongoose.Types.ObjectId(),
        ProfileName: req.body.ProfileName,
        DOB: req.body.DOB,
        status: req.body.status
    })
    data.save().then((result) => {
        res.status(201).json(result);
    })

})

//put request
app.put("/api/update/UsersProfiles/:id", (req, res) => {
    users1.updateOne({ id: req.params.id }, { $set: { status: req.body.status } })
        .then((resut) => {
            res.status(200).json(resut)
            console.log(resut);

        }).catch((e) => {
            console.log(e);
        })
})



//searcch request
app.get("/api/get/search/UsersProfiles/:status", (req, res) => {
    var regex = new RegExp(req.params.status, 'i');
    users1.find({ status: regex }).then((result) => {
        res.status(200).json(result)
        console.log(regex)
    })
})


//delete request
app.delete('/api/delete/UsersProfiles/:id', (req, res) => {
    users1.deleteOne({ id: req.params.id }).then((result) => {
        res.status(200).json(result)
    })
})

app.listen(port, () => {
    console.log("successfully listen")
})
