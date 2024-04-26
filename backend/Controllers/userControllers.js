const dataBase = require("../config/mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.signup= (req,res)=>{
bcrypt
.hash(req.body.password, 10)
.then((hash) => {
  let InsertUserQuery =
    "INSERT INTO users (firstname_user,lastname,email_user, pwd_user,age_user,photo_user,sexe_user,confirm_pwd,preference_user,domaine_user) VALUES(?,?,?,?) ";
  dataBase.query(
    InsertUserQuery,
    [req.body.name, req.body.surname, req.body.email, hash],
    (error, result) => {
      if (error) {
        res.status(500).json("Probleme serveur ");
      }
      res.status(201).json("Les données ont été inserer");
    }
  );
})
.catch((error) => {
  res.status(500).json(error);
});
};

exports.login = (req, res) => {
  console.log(req.body);
  let verifyInTable = "SELECT * FROM users WHERE email_user=?";
  dataBase.query(verifyInTable, [req.body.email], (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    if (result.length > 0) {
      bcrypt
        .compare(req.body.password, result[0].password_etudiant)
        .then((valid) => {
          if (valid) {
            let accessToken = jwt.sign(
              { user_id: result[0].id_user },
              "TOKEN",
              { expiresIn: "1h" }
            );
            res.status(201).json(accessToken);
          } else {
            res.status(401).json("password is incorrect");
          }
        });
    } else {
      res.status(401).json("user not found");
    }
  });
};