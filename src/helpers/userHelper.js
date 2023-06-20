//
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    // SIGN UP
    userSignUp: async (req, db, res) => {
        try {
            const { first_name, last_name, email, password } = req;

            if (!email || !first_name || !password)
                return { message: "Account Valid Credentials Is Missing!!!", status: false };
        
            const hashedPassword = await bcrypt.hash(password, 10);
        
            const user = await db.User.create({
                first_name,
                last_name,
                email,
                password: hashedPassword,
            });
            // Generate Auth Token
            const authToken = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: "1y" }
            );

            // Set the token as a cookie
            res.cookie('token', authToken, { httpOnly: true });
        
            return {
                message: "Sign Up successful",
                status: true,
                data: {
                authToken,
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                },
            };
        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    userSignIn: async (req, db, res) => {
        try {
            // Data from request
            const { email, password } = req;
        
            // Check user
            const user = await db.User.findOne({ email });
            if (!user) {
                return {
                message: "User Not Found!!!",
                status: false
                };
            }
        
            // Check if password is valid
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return {
                message: "Invalid Email or Password!!!",
                status: false
                };
            }
        
            // Generate JWT
            const authToken = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '4h' }
            );

            // Set the token as a cookie
            res.cookie('token', authToken, { httpOnly: true });
        
            return {
                message: "Sign In successful",
                status: true,
                data: {
                authToken,
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
                }
            };
        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    }
}