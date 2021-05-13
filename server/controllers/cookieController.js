const cookieController = {};
const secret = "IHaveDiarrhea"

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.id, {httpOnly: true})
    console.log("SSID Cookie created")
    next();
}

module.exports = cookieController