const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const { id } = await jwt.verify(token, SECRET_KEY);
      const user = {
        id,
      };

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    return next(error);
  }
};

// const admin = async (req, res, next) => {
//   try {
//     const user = await userModel.findOne({ where: { email: req.user.email } });
//     if (!user) {
//       return res.status(400).json({ message: "User not valid" });
//     }
//     if (user.roles === "admin") {
//       next();
//     } else {
//       return res.status(401).json({
//         status: false,
//         message: "You are not authorized to access this resource.",
//       });
//     }
//   } catch (error) {
//     return next(error);
//   }
// };

module.exports = { auth };
