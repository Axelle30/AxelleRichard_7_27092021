const mySql = require('mysql');
const connection = mySql.createConnection({
    host: "localhost",
    user: /*"groupomaniaClientDbUser"*/"root",
    password: /*"a4kvbQaTrJFCVyqGDS97"*/'PasswordForMySql?.3012',
    database: "groupoforumDb",
    port: 3306,
    insercureAuth: true
});

exports.start =  (req, res, next) => {
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        };
    });
    next();
};

exports.end =  (req, res, next) => {
    connection.end();
    next();
};