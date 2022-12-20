import User from './model';
import jwt from 'jsonwebtoken';

const signup = (req, res) => {
    try {
        const user = new User(req.body);
        user.save((err, user) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    error: err.message
                })
            }
            return res.json({
                message: "Success",
                user
            })
        })
    } catch (error) {
    }
}

const signin = (req, res) => {
    try {
        const { email, password } = req.body
        User.findOne({ email }, (err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: "Email was not found"
                })
            }

            // Authenticate user
            if (!user.authenticate(password)) {
                return res.status(400).json({
                    error: "Email and password do not match"
                })
            }

            // Create token
            const token = jwt.sign({ _id: user._id }, process.env.SECRET)

            // Put token in cookie
            res.cookie('token', token, { expire: new Date() + 1 })

            const { _id, firstName, email } = user
            return res.json({
                token,
                user
            })

        })
    } catch (error) {
        console.log(error)
    }

}

export { signup, signin };