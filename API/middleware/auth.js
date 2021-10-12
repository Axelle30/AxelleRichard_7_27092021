const jwt = require("jsonwebtoken");
const mySql = require('mysql');
const connection = mySql.createConnection({
    host: "localhost",
    user: /*"groupomaniaClientDbUser"*/"root",
    password: /*"a4kvbQaTrJFCVyqGDS97"*/'PasswordForMySql?.3012',
    database: "groupoforumDb",
    port: 3306,
    insercureAuth: true
});

module.exports = (req, res, next) => {
    if(req.method == "DELETE" || req.method == "PUT"){
        connection.query("SELECT * FROM thread INNER JOIN user ON thread.user_id = user.id WHERE thread.id="+req.params.id+";",function(error, results, fields){
            if(error){
                
            };
            if(results){
        console.log(req.method)
        const token = req.body.token;
        const decodedToken = jwt.verify(token, '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh')
        const moderationUserId = decodedToken.userId+'';
        console.log(decodedToken.userId, "TEST")
        const userId = decodedToken.userId;
        const messageId = results[0].user_id;
        if((decodedToken.userId === messageId && req.body.user_id === decodedToken.userId )||(moderationUserId && moderationUserId.split("/")[1] == "moderation")) { 
            next();
        } 
        else
        {
            res.status(401).json({error : "Utilisateur non authorisé"})
        }
        }
        })
    }
    if(req.method == "POST"){
        console.log(req.method)
        const token = req.body.token;
        const decodedToken = jwt.verify(token, '6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh')
        const moderationUserId = decodedToken.userId;
        const userId = decodedToken.userId;
        console.log(req.body.user_id, decodedToken.userId)
        if(req.body.user_id !== decodedToken.userId) {
            
            res.status(401).json({error : "Utilisateur non authorisé"})
        } 
        else
        {
            next();
        }
        };       
}
