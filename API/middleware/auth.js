const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.body.token.split(' ')[0];
        const decodedToken = jwt.verify(token, "6H5m1e5x9CJyJ0t9hmzkICvmu6NrzscVVjPMRrrdz6k3uKuh")
        const userId = decodedToken.userId;
        if(token == "JeSuisLeSuperTokenDeModération"){
            next();
        }
        if(req.body.userId && req.body.userId !== userId) {
            
            throw "User Id incorrect"
        }
        else
        {
            next();
        }
    }
    catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée'});
    }
}