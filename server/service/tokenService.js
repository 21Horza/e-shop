const jwt = require("jsonwebtoken");
const Token = require("../models/Token");

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: "2h"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: "21d"})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);
            return userData;
        } catch (e) {
            return null;
        }
    }
    
    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        
        const tokenData = await Token.findOne({user: userId}); 
        // db stores only 1 token for 1 user !!!
        // if user logs from another device than the old token will be overwritten
        // & user will be kicked out from the website on initial device

        // case: user already logged in before
        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        // case: user logs in at the first time
        const token = await Token.create({user: userId, refreshToken});
        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await Token.deleteOne({refreshToken});
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({refreshToken});
        return tokenData;
    }

}

module.exports = new TokenService();