
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
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        connection.query("INSERT INTO user VALUES (NULL,'"+req.body.username+"','"+ req.body.email +"','"+ hash +"', 0);"    
        ,function(error, results, fields){
            if(error){
                console.log(error);
                res.status(400).json({error});
                next();
            };
            if(results){
                next();
            };
        });        
    })
    .catch(error => res.status(502).json({ error }));
};

exports.getUserId = (req, res, next) => {
    connection.query('SELECT id FROM user WHERE username="'+req.body.username+'";', function(error, results, fields){
        if (error) {
            res.status(402).json({error});
        };
        if(results){
            console.log("Test")
            const token = jwt.sign(
                {userId: results[0].user_id},
                '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh',
                {expiresIn: "6h"}
            );
            resObject = {
                userId: results[0].id,
                token: token
            }
            console.log(resObject.token)
            res.status(201).json(resObject);
        }
    })
}

exports.login = (req, res, next) => {
    connection.query("SELECT * FROM user WHERE email='"+req.body.email+"';",function(error, results, fields){
        if(error){
            res.status(400).json({error: "Utilisateur non trouvé"});
        };
        if(results){
            if(results[0].password == undefined | results[0].email == undefined){
                console.log("Utilisateur non trouvé");
                return res.status(401).json();
            }
            bcrypt.compare(req.body.password, results[0].password)
            .then(valid => {
                if(!valid) {
                    return res.status(401).json({error: 'Mot de passe incorrect'});
                }
                if(results[0].moderation == 0){
                    console.log(results[0].id)
                    const token = jwt.sign(
                        {userId: results[0].id},
                        '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh',
                        {expiresIn: "6h"}
                    );
                    resObject = {
                        username: results[0].username,
                        userId: results[0].id,
                        token: token
                    };
                    res.status(202).json(resObject);
                    next();
                }
                if(results[0].moderation == 1){
                    const moderationId = results[0].id+"/moderation"
                    console.log(moderationId)
                    const token = jwt.sign(
                        {userId: moderationId},
                        '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh',
                        {expiresIn: "6h"}
                    );
                    resObject = {
                        username: results[0].username,
                        userId: results[0].id,
                        token: token
                    };
                    res.status(202).json(resObject);
                    next();
                }
                const token = jwt.sign(
                    {userId: results[0].id},
                    '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh',
                    {expiresIn: "6h"}
                );
                resObject = {
                    username: results[0].username,
                    userId: results[0].id,
                    token: token
                };
                res.status(202).json(resObject);
                next();
            })
            .catch(error => res.status(500).json({error}));
            
        };
    });
} 

exports.deleteUser = (req, res, next) => {
    connection.query('DELETE FROM thread WHERE user_id='+req.params.id+';',function(error, results, fields){
        if(error){
        };
        if(results){
            return 1
        };
    });
    connection.query('DELETE FROM user WHERE id='+req.params.id+';',function(error, results, fields){
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