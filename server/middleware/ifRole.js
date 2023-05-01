const jwt = require('jsonwebtoken')

module.exports = function(checkingRole) {
    return function (req, res, next) { //Доступ к выполнению запроса, если роль соответствует требуемой
        console.log('authorization', req.headers['authorization']);
        console.log("req.cookies",req.cookies)

        const token = req.headers['authorization'].split(' ')[1]// Bearer asfasnfkajsfnjk
        console.log("token: ", token)
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decoded, checkingRole)
        if (decoded.role === checkingRole) {
            next()
        }else{
          
            res.status(403).json({message: "Пользователи с вашей ролью не имеют право выполнять данное действие"})
        }
        
    };
}



