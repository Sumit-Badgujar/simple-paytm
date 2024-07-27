const { JWT_SECRET } = require("./config"); 
const jwt = require("jsonwebtoken") ; 

const authMiddleware = (req, res , next ) =>{
    const authHeader = req.headers.authorization; 

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({}) ;
    }

    const token = authHeader.split(' ')[1]; 

    try{
        const decode = jwt.verify(token , JWT_SECRET) ; 

        if(decode.userId)
        {
            req.userId = decode.userId ; 
            next() ; 
        }
        else{
            return res.status(403).json({}) ; 
        }
    }catch(err){
        return res.status(403).json({}) ; 
    }
};

module.exports = { 
    authMiddleware 
}


// backend :-
//     1. node_modules 
//     2. routes 
//         a. accounts.js 
//         b. index.js 
//         c. user.js 
//         13
//         6)
//     3. .gitignore
//     4. config.js
//     5. db.js
//     6. index.js
//     7. middleware.js 2
//     8. package-lock.json
//     9. package.json