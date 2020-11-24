const User = require('../models/userModel');

const jwt = require('jsonwebtoken');

exports.create_an_user = (req, res) => {
    let new_user = new User(req.body);

    new_user.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(201);
            res.json({
                message: `Utilisateur crée : ${user.email}`
            })
        }
    })
}
let rgx = new RegExp('^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$');
    console.log(rgx.test(req.body.email));


exports.login_an_user = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            bcrypt.compare(req.body.password, user.password, (error,result) => {
                if(error){
                    res.status(500);
                    console.log('error',error);
                    res.json({
                        message:"Erreur serveur"
                    })
                } else {
                    jwt.sign({
                        email: user.email,
                        role: "user"
                    }, process.env.JWT_SECRET, {
                        expiresIn: '30 days'
                    }, (error, token) => {
                        if (error) {
                            res.status(400);
                            console.log(error);
                            res.json({
                                message: "Mot de passe ou email erroné."
                            })
                } else {
                    console.log({
                        token
                    })
                    res.json({
                        token
                    })
                }
                    })


         }
    })
}