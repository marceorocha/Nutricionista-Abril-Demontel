const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          //https://us21.admin.mailchimp.com/lists/settings/merge-tags?id=9365
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],  
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/b2ff7e34ff";
  //modifique el final con el audience ID y donde dice us21 que es el que tengo en el final de mi API key

  const options = {
    method: "POST",
    auth: "Marcelo1:5068d3bb6be9917203a02be2ba343d69-us21",
  };

  const request = https.request(url, options, function (response) {

    if(response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res){
  res.redirect("/")
})

app.listen(process.env.PORT || 3000, function () {
  console.log("listening at heroku and locally at 3000");
});

//api key
// 5068d3bb6be9917203a02be2ba343d69-us21
//audience ID
// b2ff7e34ff