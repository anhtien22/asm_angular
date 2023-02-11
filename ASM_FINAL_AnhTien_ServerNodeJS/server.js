const exp = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const fetch = require("node-fetch");
var cors = require('cors')
var app = exp();
// var app = express();
const port = 3500;
const PRIVATE_KEY = fs.readFileSync('private-key.txt');
app.use(bodyParser.json()); 
app.use(cors());
// app.use(express.json());


app.get("/", (req, res) => {
     res.send("<h1>Đây là trang home</h1>");
});
app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let check = await checkUserPass(username, password);
    if (check) {
        const userInfo = await getUserInfo(username);
        console.log(userInfo);
        if (userInfo) {
            const jwtBearerToken = jwt.sign({}, PRIVATE_KEY, {
                algorithm: "RS256",
                expiresIn: 120,
                subject: userInfo.id.toString(),
              }); 
            //res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:false});
            res.status(200).json({ idToken: jwtBearerToken, expiresIn: 120 });
    }
    } else res.sendStatus(401); // send status 401 Unauthorized  
});

checkUserPass = async (username, password) => {
    const response = await fetch("http://localhost:7000/user");
    const data = await response.json();
    let check;
    data.forEach((item) => {
      if (username == item.username && password == item.password) {
        check = true;
      }
    });
    if (check) {
      return true;
    } else {
      return false;
    }
};
getUserInfo = async (username) => {
    const response = await fetch("http://localhost:7000/user");
    const data = await response.json();
    let temp = false;
    data.forEach((item) => {
      if (username == item.username) {
        // console.log(true);
        temp = item;
      }
    });
    if (temp) {
      return temp;
    } else {
      return 0;
    }
}
app.listen(port, () =>{
     console.log(`Ung dung dang chay voi port ${port}`);
});