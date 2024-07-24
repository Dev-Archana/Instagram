const express = require("express");
const router = express.Router();
/* Routers in Express.js help in managing different parts of your application by grouping 
routes logically and keeping them separate from other components. This modular approach
 makes your application more manageable and easier to maintain. */
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bycrypt = require("bcrypt");

router.get('/', (req, res) => {
    res.send("Hello");
})

router.post("/signup", (req, res) => {
    // res.json("dataposted successfully");
    // console.log(req.body.name);
    const { name, userName, email, password } = req.body;
    if (!name || !userName || !email || !password) {
        res.status(422).json({ error: "All fields are required" });  // status 422 - unprocessable entity

    }
    USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then((savedUser) => {
        if (savedUser) {
            res.status(422).json({ error: "user already Exists With this email or userName " })
        }

        else {
            bycrypt.hash(password, 12).then((hashedPassword) => {
                const user = new USER({
                    name, userName, email, password: hashedPassword
                })
                user.save()
                    .then(user => {
                        res.json({ message: "saved successfully" })
                    })
                    .catch(err => { console.log(err) })
            })

        }
    })

})

module.exports = router;