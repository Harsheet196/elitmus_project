const db = require("./db");
const cookie = require("cookie");
const CLIENT_ID =
  "710342604132-e0g9nlv56allvrpq64st6gf662qtn1gm.apps.googleusercontent.com";
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(CLIENT_ID);

const verify = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  return ticket.getPayload();
};

let emails = require("./../email-list");

module.exports = async (req, res, next) => {
  if (req.headers.cookie) {
    let cookieData = cookie.parse(req.headers.cookie);
    let token = cookieData["Secure_SID"];

    if (token) {
      let data;
      try {
        data = await verify(token);
      } catch (e) {
        console.log("Error of token in middleware");
        res.clearCookie("Secure_SID");
        res.redirect("/");
        return;
      }

      let user = {
        name: data.name,
        email: data.email,
        imgUrl: data.picture,
      };

      if ((await db.getData(user["email"])) == undefined) {
        console.log("redirected user not in db");
        res.redirect("/");
        return;
      }
      req.user = user;
      next();
      return;
    }
  }
  console.log("redirected");
  res.redirect("/");
};
