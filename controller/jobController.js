import { userModel } from "../model/jobModel.js";
import bcrypt from "bcrypt";

export function register(req, res) {
  const { userEmail, password, userGender, userRole } = req.body;

  bcrypt.hash(password, 12).then((hashedPassword) => {
    userModel
      .find({ email: userEmail, userGender: userRole })
      .then((response) => {
        if (response.length == 0) {
          const userObject = new userModel({
            email: userEmail,
            gender: userGender,
            role: userRole,
            password: hashedPassword,
          });

          userObject
            .save()
            .then((response) =>
              res.json({ message: " registered successfully" })
            )
            .catch((err) => console.log(err));
        } else {
          res.json({ message: "already registered.please login" });
        }
      })
      .catch((err) => console.log(err));
  });
}

export function login(req, res) {
  const { userEmail, password, gender, userRole } = req.body;

  userModel
    .find({ email: userEmail, role: userRole })
    .then((response) => {
      bcrypt.compare(password,response[0].password).then((resp) => {
        resp
          ? res.json({ message: "Login success" })
          : res.json({ message: "invalid details" });
      });
    })
    .catch((err) => console.log(err));
}
