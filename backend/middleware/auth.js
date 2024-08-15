import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    console.log("Token:", token); //debug log
    if (!token) {
        return res.json({success:false, message:"Not Authorized Login Again"});
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET); 
        console.log("Decoded Token:", token_decode); // debug log
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}
authMiddleware.js 
export default authMiddleware; 