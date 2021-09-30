const mySql = require('mysql');
const connection = mySql.createConnection({
    host: "localhost",
    user: "groupomaniaClientDbUser",
    password: "a4kvbQaTrJFCVyqGDS97",
    database: "groupoforumDb"
});

exports.start =  (req, res, next) => {
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        };
        next();
};

exports.end =  (req, res, next) => {
    connection.end();
    next();
};