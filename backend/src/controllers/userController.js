import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user: user._id });
  } catch (error) {
    console.log('ERROR', error);

    let errors2 = {};

    if (error.code === 11000) {
      errors2.email = 'Die E-Mail ist bereits registriert';
    }

    if (error.name === 'ValidationError') {
      Object.keys(error.errors).forEach((key) => {
        errors2[key] = error.errors[key].message;
      });
    }

    console.log('ERRORS2:::', errors2);

    res.status(400).json(errors2);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('req.body', req.body);
    const user = await User.findOne({ email});
    let same = false;
    if (user) {
      same = await bcrypt.compare(password, user.password);
      console.log('same', same);
    } else {
      return res.status(401).json({
        succeded: false,
        error: 'Es gibt keinen solchen Benutzer',
      });
    }
    if (same) {
      const token = createToken(user._id);
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.status(200).json({
        succeded: true,
        token: token
      });
  
    } else {
      res.status(401).json({
        succeded: false,
        error: 'Password wird nicht abgeglichen',
      });
    }
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};
const createToken = (userId) => {
  return jwt.sign({userId}, process.env.TOKEN_SECRET, {
    expiresIn:'1d',
  }) 
}

const logoutUser = (req, res) => {
  res.cookie('jwt', "",{
    maxAge:1,
  });
  res.redirect("/");
};

export { createUser, loginUser, logoutUser };
