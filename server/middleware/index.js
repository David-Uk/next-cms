import expressJwt from 'express-jwt'

require('dotenv').config()

export const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
})

export const isAdmin = async (req, res, next) => {
    try {

    } catch (error) {
        console.log(error)
    }
}