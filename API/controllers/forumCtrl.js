const mySql = require('mysql');
const connection = mySql.createConnection({
    host: "localhost",
    user: /*"groupomaniaClientDbUser"*/"root",
    password: /*"a4kvbQaTrJFCVyqGDS97"*/'PasswordForMySql?.3012',
    database: "groupoforumDb",
    port: 3306,
    insercureAuth: true
});


exports.getAllMessage = (req, res, next) => {
    connection.query('SELECT * FROM Thread',function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(200).json(results);
        };
    });
};

exports.getMessageById = (req, res, next) => {
    connection.query("SELECT * FROM thread WHERE id="+req.params.id+";",function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(200).json(results);
        };
    });
};

exports.createMessage = (req, res, next) => {
    connection.query("INSERT INTO thread "+
                    "VALUES (NULL,'"+req.body.user_id+"','"+req.body.title+"','"+req.body.message+"',NOW());"
    ,function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(201).json({message: "Message crée"});
        };
    });
};

exports.modifyMessage = (req, res, next) => {
    connection.query("UPDATE thread"+
                    "SET message='"+req.body.message+"',datetime=NOW() WHERE id="+req.params.id+";"
    ,function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(200).json({message: "Message modifié"});
        };
    });
};

exports.deleteMessage = (req, res, next) => {
    connection.query("DELETE FROM thread WHERE id="+req.params.id+";",function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(200).json({message: "Message supprimé"});
        };
    });
};

