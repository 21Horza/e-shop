const userService = require("../service/userService");

class UserController {
    async registration(req, res, next) {
        try {
            const userData = await userService.registration(req, res, next)

            res.cookie("refreshToken", userData.refreshToken, {maxAge: 21 * 24 * 60 * 1000, httpOnly: true}) // read more about secure
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    
    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 21 * 24 * 60 * 1000, httpOnly: true}) // read more about secure
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const userData = await userService.delete(req, res);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie("refreshToken");
            return res.status(200).json({message: "Token successfully deleted:", token});
        } catch (e) {
            
        }
    }
    
    async verification(req, res, next) {
        try {
            const verificationLink = req.params.link;
            await userService.verification(verificationLink);
            return res.redirect(process.env.CLIENT_URL); // redirect user back to the app
        } catch (e) {
            next(e);
        }
    }

    async refreshToken(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 21 * 24 * 60 * 1000, httpOnly: true}) // read more about secure
            return res.json(userData);
        } catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async getOneUser(req, res, next) {
        try {
            const user = await userService.getOneUser(req, res);
            return res.json(user);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();