import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    jwt.verify(token, process.env.JWT_WEB_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token Is Not Valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(400).json("You are not authenticated");
  }
};


export const verifyTokenAndAuthorization = (req,res,next) =>{
    verifyToken(req,res, ()=> {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(404).json("You are not allowed to do that!")
        }
    })
}
