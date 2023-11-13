import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Product from "../models/productModel.js";

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

    res.status(400).json(errors2);
  }
};

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log('req.body', req.body);
    const user = await User.findOne({ name});
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
        token: token,
        userId:user._id
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

const getDashboardData = async (req, res) => {
  const products = await Product.find({user: req.params.id });
  res.status(200).json({
    products
  });
};

const logoutUser = (req, res) => {
  res.cookie('jwt', "",{
    maxAge:1,
  });
  res.status(200).json({ message: "Logout successful" });
};

const getAUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    const inFollowers = user.followers.some((follower)=> {
      return follower.equals(res.locals.user._id)
    })
    const products = await Product.find({ user: user._id });
    res.status(200).render('user', {
      user,
      products,
      link: 'users',
      inFollowers
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};



export { createUser, loginUser, logoutUser , getAUser, getDashboardData};

