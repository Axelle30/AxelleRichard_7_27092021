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
    connection.query('SELECT *, thread.id AS message_id FROM thread INNER JOIN user ON thread.user_id = user.id;',function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(200).json(results);

        };
    });
};

exports.getMessageById = (req, res, next) => {
    console.log(req.params.id);
    connection.query("SELECT * FROM thread INNER JOIN user ON thread.user_id = user.id WHERE thread.id="+req.params.id+";",function(error, results, fields){
        if(error){
            res.status(400).json({error});
        };
        if(results){
            res.status(200).json(results);         
        };
    });
};

exports.createMessage = (req, res, next) => {
    console.log(req.body);
    connection.query('INSERT INTO thread '+
                    'VALUES (NULL,'+req.body.user_id+',"'+req.body.title+'","'+req.body.message+'",NOW());'
    ,function(error, results, fields){
        if(error){
            res.status(400).json({error});
            next();
        };
        if(results){
            res.status(201).json({message: "Message crée"});
            next();
        };
    });
};

exports.modifyMessage = (req, res, next) => {
    console.log(req.body)
    connection.query('UPDATE thread'+
                    ' SET message="'+req.body.message+'", datetime=NOW() WHERE id='+req.params.id+';'
    ,function(error, results, fields){
        if(error){
            console.log(error);
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
            next();
        };
        if(results){
            res.status(200).json({message: "Message supprimé"});
            next();
        };
    });
};

exports.getMessageUsername = (req, res, next) => {
    connection.query('SELECT username FROM user WHERE id='+req.params.id, function(error, results, fields){
        if(error){
            console.log(error);
            res.status(401).json({message: "Utilisateur non trouvé"});
            next();
        };
        if(results){
            res.status(202).json(results);
            next();
        }
    });
}

