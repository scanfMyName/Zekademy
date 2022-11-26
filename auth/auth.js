module.exports = async (req, res, next) => {
    try {
      const token = req.cookies.token;
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      if (decoded) {
        req.user = await User.findOne({ ktjID: decoded.ktjID });
        next();
      } else {
        return res.status(407).json({
          message: "Unauthorised",
        });
      }
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 412;
      }
      next(error);
    }
  };
  