
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mySql = require('mysql');
const connection = mySql.createConnection({
    host: "localhost",
    user: /*"groupomaniaClientDbUser"*/"root",
    password: /*"a4kvbQaTrJFCVyqGDS97"*/'PasswordForMySql?.3012',
    database: "groupoforumDb",
    port: 3306,
    insercureAuth: true
});


exports.signUp = (req, res, next) => {
    console.log("Balise Test", req.body);
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        console.log("Balise Test 2", hash);
        connection.query("INSERT INTO user VALUES (NULL,'"+req.body.username+"','"+ req.body.email +"','"+ hash +"');"    
        ,function(error, results, fields){
            if(error){
                res.status(400).json({error});
                console.log(error, "BT");
                next();
            };
            if(results){
                console.log("Balise Test 5");
                res.status(200).json({message: 'Utilisateur crée'});
                next();
            };
        });        
    })
    .catch(error => res.status(502).json({ error }));
};

exports.login = (req, res, next) => {
    console.log(req.body, "BT");
    connection.query("SELECT * FROM user WHERE email='"+req.body.email+"';",function(error, results, fields){
        if(error){
            res.status(400).json({error});
            console.log(error);
        };
        if(results){
            console.log("BT4");
            console.log(results[0].password);
            bcrypt.compare(req.body.password, results[0].password)
            .then(valid => {
                if(!valid) {
                    console.log("BT1");
                    return res.status(401).json({error: 'Mot de passe incorrect'});
                }
                const token = jwt.sign(
                    {userId: results.user_id},
                    '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh',
                    {expiresIn: "6h"}
                );
                console.log("BT2");
                resObject = {
                    userId: results.user_id,
                    token: token
                };
                res.status(202).json(resObject);
                console.log("BT3", resObject);
                next();
            })
            .catch(error => res.status(500).json({error}));
            
        };
    });
} 

exports.deleteUser = (req, res, next) => {
    connection.query("DELETE FROM thread WHERE id="+req.params.id+";",function(error, results, fields){
        if(error){
            res.status(400).json({error});
            next();
        };
        if(results){
            res.status(200).json({message: 'Votre compte à bien été supprimé !'});
            next();
        };
    });
};