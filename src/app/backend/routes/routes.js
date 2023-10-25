
module.exports = app => {
    const tutorials = require("../controllers/controller.js");
    const user_All = require("../controllers/user_all_controller.js");
    const notifiCations = require("../controllers/notifications.controller.js")
    const User = require('../models/user_module');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const auth = require('../../middleware/auth');
    require("dotenv").config();

    var router = require("express").Router();
    var routerUserAll = require("express").Router();
    var routerNotification = require("express").Router();


    /*************************  Tutorial *************************/
    //Create a new Tutorial
    router.post("/", tutorials.create);

    //Retrieve all  Tutorial
    router.get("/", tutorials.findAll);

    //Retrieve all published Tutorial
    router.get("/published", tutorials.findAllPublished);

    //Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    //Update a Tutorial with id
    router.put("/:id", tutorials.update);

    //Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    //Create a new Tutorial
    router.delete("/", tutorials.deleteAll);

    app.use("/api/ScheduleDB", router);


    //login 
    app.post("/login", async (req, res) => {

        try {
            //get user input 
            const { email, password } = req.body;

            //validate user 
            if (!(email && password)) {
                res.status(400).send("All input is required");
            }

            //validate if user exists in our database
            const user = await User.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {
                //create token
                const token = jwt.sign({
                    user_id: user._id, email
                },
                    process.env.TOKEN_KEY, {
                    expiresIn: "2h"
                }
                )
                //save user token
                user.token = token;

                res.status(200).json(user);
            }
            res.status(400).send("Invalid credentials");

        } catch (error) {

        }

    })

    //register
    app.post("/register-page", async (req, res) => {
        try {
            //get user input
            const { first_name, last_name, email, password } = req.body;


            //validate user inptu
            if (!(first_name && last_name && password && email)) {
                res.status(400).send("All input is required")
            }

            //check if user already exists
            const old_user = await User.findOne({ email });
            if (old_user) {
                res.status(400).send("User already exists. Please login")
            }

            //Encrypt user password
            encryptedPassword = await bcrypt.hash(password, 10)

            //Create new user in our database
            const user = await User.create({
                first_name, last_name,
                email: email.toLowerCase(),
                password: encryptedPassword
            })

            //create Token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )

            //save user token
            user.token = token;

            //return new user
            res.status(201).json(user)


        } catch (error) {
            console.log(error);
        }

    })

    //Welcome
    app.post('/welcome', auth, (req, res) => {
        res.status(200).send("Welcome To  Schedule");
    })

    /*************************  UserAll *************************/
    //Create a new UserAll
    routerUserAll.post("/", user_All.create);

    //Retrieve all  UserAll
    routerUserAll.get("/", user_All.findAll);

    //Retrieve all published UserAll
    routerUserAll.get("/published", user_All.findAllPublished);

    //Retrieve a single UserAll with id
    routerUserAll.get("/:id", user_All.findOne);

    //Update a UserAll with id
    routerUserAll.put("/:id", user_All.update);

    //Delete a UserAll with id
    routerUserAll.delete("/:id", user_All.delete);

    //Create a new UserAll
    routerUserAll.delete("/", user_All.deleteAll);

    app.use("/api/userAll", routerUserAll);


     //Create a new Notification
     routerNotification.post("/", notifiCations.create);

     //Retrieve all  Notification
     routerNotification.get("/", notifiCations.findAll);
 
     //Retrieve all published Notification
     routerNotification.get("/published", notifiCations.findAllPublished);
 
     //Retrieve a single Notification with id
     routerNotification.get("/:id", notifiCations.findOne);

     //Retrieve a single Notification with id
     routerNotification.get("/mess/:id", notifiCations.findOneByID);
 
     //Update a Notification with id
     routerNotification.put("/:id", notifiCations.update);
 
     //Delete a Notification with id
     routerNotification.delete("/:id", notifiCations.delete);
 
     //Create a new Notification
     routerNotification.delete("/", notifiCations.deleteAll);
 
     app.use("/api/notification", routerNotification);
};
