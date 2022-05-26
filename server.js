//create express app
const exp = require("express");
const app = exp();

require("dotenv").config();

const path=require("path");

let cors = require("cors");



app.use(exp.json());

app.use(cors());

const mc = require("mongodb").MongoClient;


const dbUrl =
  "mongodb+srv://lv_prasad:lvprasad@cluster.bl0oe.mongodb.net/USERSDATABASE?retryWrites=true&w=majority";

//connecting to database
mc.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    let dbObj = client.db("USERSDATABASE");
    let userCollectionObject = dbObj.collection("USERSCOLLECTION");
    app.set("userCollectionObject", userCollectionObject);
    console.log("connected to database successfully");
  })
  .catch((err) => console.log("error in connecting to the database", err));

const impfromuserApi = require("./apis/userApi");

app.use("/user", impfromuserApi);

app.get('*.*', exp.static('dist/angularapp'));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root:'dist/angularapp'});
});

//handling invalid paths
app.use((req, res, next) => {
  res.send({
    message: `${req.url} do not exist`,
  });
});

//error handling mechanism
app.use((err, req, res, next) => {
  res.send({
    message: "ERROR",
    reason: err.message,
  });
});

//assign port number
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
