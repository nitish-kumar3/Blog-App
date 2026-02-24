


import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const createTokenAndSaveCookies = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    // httpOnly: true, // Temporarily set to false for testing //deploye se phle

    // first step me package.json me nodemon ke node likhe (node index.js) or fir gitigonre banaye aur env and module ko isme likhe third step me yeha aaye httpOnly ko false kare aur sameSite ko none kare
    httpOnly: false, //deploye ke liye , false isliye kiye h kyuki frontend or backend dono alag alag domain pe h

    // secure: false,
    secure: true,
    // sameSite: "lax",
    sameSite: "none",  //none isliye kiye h kyuki frontend or backend dono alag alag domain pe h
    // path: "/", // Ensure the cookie is available throughout the site
  });
  await User.findByIdAndUpdate(userId, { token });
  return token;
};

export default createTokenAndSaveCookies;
