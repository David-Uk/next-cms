import expressJwt from 'express-jwt'

require('dotenv').config()

export const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
})

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== 'Admin') return res.status(403).json({ error: 'Admin access only' })
        else next();
    } catch (error) {
        console.log(error)
    }
}