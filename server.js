const express = require("express");
const app = express();
const cors = require("cors");
const cookie = require("cookie");
//custom modules
const db = require("./src/db");

// auth
const CLIENT_ID =
  "710342604132-e0g9nlv56allvrpq64st6gf662qtn1gm.apps.googleusercontent.com";
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(CLIENT_ID);

const authUser = require("./src/auth");

// port infos
const port = process.env.PORT || 8000;

// parser
app.use(cors());
app.use(express.static("public", { index: false }));
app.use(express.json());

const verify = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });
  return ticket.getPayload();
};

app.get("/", async (req, res) => {
  try {
    let s = req.headers.cookie;
    if (s == undefined) {
      s = "";
    }
    let cookieData = cookie.parse(s);
    let token = cookieData["Secure_SID"];

    if (token) {
      try {
        data = await verify(token);
      } catch (e) {
        console.log("Error of token in middleware");
        res.clearCookie("Secure_SID");
        res.redirect("/");
        return;
      }
      res.redirect("/game");
      return;
    }
  } catch (e) {
    console.log(e);
    res.sendFile(__dirname + "/public/index.html");
  }
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", async (req, res) => {
  let body = req.body;
  let data;
  try {
    data = await verify(body.token);
  } catch (e) {
    console.log("Error at post login");
    res.clearCookie("Secure_SID");
    res.redirect("/");
    return;
  }
  console.log(data);
  let user = {
    name: data.name,
    email: data.email,
    imgUrl: data.picture,
  };
  if ((await db.getData(user["email"])) == undefined) {
    db.createDoc(user);
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.cookie("Secure_SID", body.token);
  res.json({ user: user });
});

app.post("/logout", (req, res) => {
  console.log("on log out");
  res.clearCookie("Secure_SID");
  res.json({ msg: "Logged out" });
});

app.get("/login", authUser, (req, res) => {
  console.log("get login");
  console.log(req.user);
  if (req.user != undefined) {
    console.log("already logged in");
    res.redirect("/game");
    return;
  }
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/game", authUser, async (req, res) => {
  // console.log(req.user);
  let userData = await db.getData(req.user["email"]);
  let num = userData["level"];
  // console.log(`level: ${num}`);
  if (num <= 0 || num > 4) {
    //res.redirect("/leaderboard")
    res.sendFile(__dirname + `/public/end.html`);
    return;
  }
  res.sendFile(__dirname + `/public/game${num}.html`);
});

const cleanData = (s) => {
  // console.log(s);
  s = s.toString();
  s = s.trim();
  s = s.toLowerCase();
  return s;
};
app.post("/second_game",authUser,async(req,res)=>{
  let userData = await db.getData(req.user["email"]);
  let level = userData["level"];
  if(level==2)
  {
    level=4;
    let updateUserData = {
      email: userData["email"],
      level: level,
      GBugs: userData["GBugs"]-50,
      time: Date.now(),
    };
    db.updateData(updateUserData);
    res.json({success:true})
  }
  else{
    console.log("Error at Second game.")
  }

})

app.post("/check", authUser, async (req, res) => {
  let body = req.body;
  // console.log(body["answer"]);

  if (body["answer"] == undefined) {
    res.json({ success: false });
    return;
  }

  let userData = await db.getData(req.user["email"]);
  let gameData = await db.getData("gameData");
  let level = userData["level"];

  let time = userData["time"];
  if (time == 0) {
    time = Date.now();
  }
  let timeDiff = Date.now() - time;

  let tmin = 1200000;
  timeDiff = timeDiff > tmin ? tmin : timeDiff;
  console.log(`timediff: ${timeDiff}`);
  timeDiff = tmin - timeDiff;
  console.log(`timediff: ${timeDiff}`);

  let mul = timeDiff / tmin;
  //if solved within 1min full points
  if (Date.now() - time <= 60000) {
    mul = 1;
  }
  console.log(`mul: ${mul}`);
  if (cleanData(gameData[level]["answer"]) == cleanData(body["answer"])) {
    let incr = Math.round((level - 1) * 50 * mul);
    if (mul <= 0.1) {
      incr = 20;
    }
    if(level==4)
    {
      level=2;
      incr=0;
      
    } 
    if(level==3)
    {
      level=5;     
    } 
    else{
      level++;
    }
    
    
    let updateUserData = {
      email: userData["email"],
      level: level,
      GBugs: userData["GBugs"] + incr,
      time: Date.now(),
    };
    db.updateData(updateUserData);
    res.json({ success: true });
    return;
  }
  res.json({ success: false });
});
app.get("/leaderboard", authUser,async (req, res) => {
  let adminData = await db.getData("adminData");
  console.log(adminData["email"]);
  if(adminData["email"]==req.user["email"])
  {
    res.sendFile(__dirname + `/public/leaderboard.html`);
  }
  else{
    console.log("No admin rights");
  }
});
app.post("/leaderboard", authUser, async (req, res) => {
  let data = await db.allData();
  res.json({ data: data });
});
app.get("/noreg", (req, res) => {
  res.sendFile(__dirname + `/public/end.html`);
});

// listen for requests :)
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
