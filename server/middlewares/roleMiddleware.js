const jwt = require('jsonwebtoken')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: "USER is not authorized"})
            } 
            const {roles: userRoles} = jwt.verify(token, process.env.JWT_ACCESS_KEY)
            let hasRole = false
            userRoles.forEach(role => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
                return res.status(403).json({message: 'You do not have acccess'})
            }
            next()
        } catch(e) {
            console.log(e)
            return res.status(403).json({message: 'User isn\'t authorized'})
        }
    }
}