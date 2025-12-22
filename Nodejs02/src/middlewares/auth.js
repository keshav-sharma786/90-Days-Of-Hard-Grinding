const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!!");
  // logic of checking if the request is authorised or not
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";
  if (!isAdminAuthorised) {
    res.status(401).send("Unauthorised request");
  } else {
    next();
  }
};

// writing a userAuth
const userAuth = (req, res, next) => {
  console.log("User auth is getting checked!!");
  // logic of checking if the request is authorised or not
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";
  if (!isAdminAuthorised) {
    res.status(401).send("Unauthorised request");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
