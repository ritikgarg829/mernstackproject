const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authontication = require ("../middleware/Authontication")


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send("hello welcome to my server router.js")
});

// -------------------------------------------------------using promises--------------------------------------------------

// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "please filled the fields properly" });
//     }
//     User.findOne({ email: email })
//         .then((userExists) => {
//             if (userExists) {
//                 return res.status(422).json({ error: "email already exist" });
//             }
//             const user = new User({ name, email, phone, work, password, cpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfully" });
//             }).catch((err) => res.status(500).json({ error: "failed to register" }));

//         }).catch(err => { console.log(err); });
// });


// ----------------------------------------------------------using async---------------------------------------------

router.post('/signup', async(req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "please filled the fields properly" });
    }
    try {
        const userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(422).json({ error: "email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "logn in field invalid" });
        } else {

            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save();
            res.status(201).json({ message: "user registered successfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

// -----------------------------------------------login route------------------------------------------
router.post('/login', async(req, res) => {
    let token;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "filled the fields" });
        }
        const userlogin = await User.findOne({ email: email });
        if (userlogin) {
            const match = await bcrypt.compare(password, userlogin.password);
            //-------------------------------------- -genrating tokens------------------------------------------------
            token = await userlogin.generateAuthToken();
            console.log(token);
            // -----------------------------------genrating cookies------------------------------------------------------
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!match) {
                res.json({ error: "login invalid" });
            } else {
                res.json({ message: "login succesfully" });

            }
        } else {
            res.json({ error: "login invalid" });
        }

    } catch (err) {
        console.log(err);
    }
})

// -------------------------------------------------------about us page---------------------------------------------------------------

router.get('/about', Authontication , (req, res) => {
   console.log('hello welcome to my about');
    res.send(req.rootUser);
});

module.exports = router;