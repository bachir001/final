const User = require('../models/User');

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");





class UsersController {


    // read all users 

    getAllusers(req, res, next) {

        User.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    // add  a user 
    async addusers(req, res, next) {

        const { username, mail, password, Role, } = req.body;



        if (!username || !mail || !password) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }


        try {
            const user = await User.findOne({ mail });
            if (user) throw Error('User already exists');

            const salt = await bcrypt.genSalt(10);
            if (!salt) throw Error('Something went wrong with bcrypt');

            const hash = await bcrypt.hash(password, salt);
            if (!hash) throw Error('Something went wrong hashing the password');


            if (req.file === undefined) {
                var profilepic = undefined;
            } else {
                var profilepic = [req.file.filename].toString();
            }


            const newUser = new User({
                username,
                mail,
                profilepic,
                Role,
                password: hash,

            });

            const savedUser = await newUser.save();
            if (!savedUser) throw Error('Something went wrong saving the user');

            let payload = { userId: savedUser._id };
            let token = jwt.sign(payload, "randomString", { expiresIn: 10000 });

            await User.updateOne({ _id: savedUser.id }, {
                $set: { "Token": token }
            }, (err) => {
                if (err) return next(err);
            });

            User.findById(savedUser.id, (err, response) => {
                if (err) return next(err);
                res.status(200).send(response);

            })


        } catch (e) {
            res.status(400).json({ error: e.message });
        }

    }


    //login 

    async login(req, res, next) {

        const { username, password } = req.body;

        // Simple validation
        if (!username || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        try {
            // Check for existing user
            const user = await User.findOne({ username });
            if (!user) throw Error('User does not exist');

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) throw Error('Invalid credentials');

            let payload = { id: user._id };
            let token = jwt.sign(payload, "randomString", { expiresIn: 10000 });

            if (!token) throw Error('Couldnt sign the token');

            await User.updateOne({ _id: user._id }, {
                $set: { "Token": token }
            }, (err) => {
                if (err) return next(err);
            });

            User.findById(user._id, (err, response) => {
                if (err) return next(err);
                res.status(200).send(response);

            })
        } catch (e) {
            res.status(400).json({ msg: e.message });
        }
    };

    // read by id 

    getuserbyid(req, res, next) {

        let { id } = req.params;
        User.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }


    //logout 
    async logout(req, res, next) {
        let { id } = req.params;
        try {
            // remove token for user record
            User.updateOne({ _id: id }, {
                $set: { "Token": null }
            }, (err) => {
                if (err) return next(err);
            });
            res.status(200).send("logged out successfully");
        } catch (e) {
            res.status(400).json({ msg: e.message });
        }
    }


    // update user 

    async updateuser(req, res, next) {

        let { id } = req.params;
        let body = req.body;
        let username = body.username;
        let mail = body.mail;
        let Pass = body.password;
        let Role = body.Role;

        if (req.file === undefined) {
            var profilepic = undefined;
        } else {
            var profilepic = [req.file.filename].toString();
        }

        await User.findById(id, (err, response) => {
            if (err) return next(err);
            var user = response;
            if (Role === undefined) {
                Role = user.Role
            }
        })

        await User.findById(id, (err, response) => {
            if (err) return next(err);
            var user = response;
            if (Pass === undefined) {
                Pass = user.password
            }
        })

        await User.findById(id, (err, response) => {
            if (err) return next(err);
            var user = response;
            if (username === undefined) {
                username = user.username
            }
        })

        await User.findById(id, (err, response) => {
            if (err) return next(err);
            var user = response;
            if (mail === undefined) {
                mail = user.mail
            }
        })

        const salt0 = await bcrypt.genSalt(10);
        if (!salt0) throw Error('Something went wrong with bcrypt');

        let password = await bcrypt.hash(Pass, salt0);
        if (!password) throw Error('Something went wrong hashing the password');


        if (profilepic === undefined) {

            await User.updateOne({ _id: id }, {
                $set: {
                    username,
                    password,
                    mail,
                    Role
                }
            }, (err, response) => {
                if (err) return res.next(err);
                res.status(200).send(response);
            });

        } else {

            await User.updateOne({ _id: id }, {
                $set: {
                    username,
                    password,
                    mail,
                    profilepic,
                    Role
                }
            }, (err, response) => {
                if (err) return res.next(err);
                res.status(200).send(response);
            });
        }

    }

    // delete user 
    deleteuser(req, res, next) {
        let { id } = req.params;
        User.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }




}

const usercontroller = new UsersController();

module.exports = usercontroller;