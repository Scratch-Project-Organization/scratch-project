const { Session } = require('../models/boardModel')
const sessionController = {}


sessionController.startSession =  (req, res, next) => {
     Session.findOne({cookieId: res.locals.id}, async (err,result)=>{
        if(result){
            return next();
        } else{
            await Session.create({cookieId: res.locals.id}, (err, session) => {
                if(err){
                    res.send("error", err);
                } else {
                    console.log("Session created");
                    next();
                }
            })
        }
    })
}

sessionController.verifySession = async (req, res, next) => {
    console.log("verifying session")
    console.log(req.cookies.ssid)
    await Session.findOne({cookieId: req.cookies.ssid}, (err,result)=>{
        // console.log(result)
        if(result){
            res.locals.isLoggedIn = true
            return next();
        }
        if(!result){
            console.log("no session found")
            res.locals.isLoggedIn = false
            next();
        }
    })
}




module.exports = sessionController;