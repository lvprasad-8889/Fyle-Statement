//create router to handle user api requests
const expi = require("express");
const expressAsyncHandler = require("express-async-handler");
const miniexp = expi.Router();

//create route to handle '/userData' path
miniexp.get(
  "/userData",
  expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get("userCollectionObject");

    let page = +req.query.page;

    let limit = +req.query.limit;

    let startIndex = (page - 1) * limit;

    let endIndex = page * limit;

    let users = await userCollectionObject.findOne();

    let user = {
      userImage: users.userImage,
      userName: users.userName,
      description: users.description,
      location: users.location,
      userSocialAccounts: users.userSocialAccounts,
      userGithubLink: users.userGithubLink,
    };

    res.send({
      message1: user,
      message2: users.userRepositories.length,
      message3: users.userRepositories.slice(startIndex, endIndex),
    });
  })
);

//create route to /getRepositories path
miniexp.get(
  "/getRepositories",
  expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get("userCollectionObject");

    let page = +req.query.page;

    let limit = +req.query.limit;

    let startIndex = (page - 1) * limit;

    let endIndex = page * limit;

    let users = await userCollectionObject.findOne();

    res.send({
      message: users.userRepositories.slice(startIndex, endIndex),
    });
  })
);

miniexp.get(
  "/requiredRepository/:repository",
  expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get("userCollectionObject");

    let requiredRepository = req.params.repository;

    let users = await userCollectionObject.findOne();
    
    let filteredRepositories = users.userRepositories.filter((repository) =>
      repository.projectTitle.includes(requiredRepository)
    );

    res.send({
      message: filteredRepositories,
    });
  })
);

//create route to save user details
miniexp.post(
  "/createUserDetails",
  expressAsyncHandler(async (req, res) => {
    let userCollectionObject = req.app.get("userCollectionObject");

    let newUserObj = req.body;

    console.log(newUserObj, userCollectionObject);

    let users = await userCollectionObject.insertOne(newUserObj);

    res.send({ message: "Users details added" });
  })
);

module.exports = miniexp;
