const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdmin = token === "xyz";
  // let us write a ternary operator
  !isAdmin ? res.status(401).send("Unauthorised Request") : next();
};

const userAuth = (req, res, next) => {
  const token = "xyzabc";
  const isAdmin = token === "xyz";
  // let us write a ternary operator
  !isAdmin ? res.status(401).send("Unauthorised Request") : next();
};

module.exports = {
  adminAuth,
  userAuth,
};
