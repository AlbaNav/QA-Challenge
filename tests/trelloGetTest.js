const { Builder } = require("selenium-webdriver");
const { setDefaultTimeout} = require("@cucumber/cucumber");
var axios = require("axios");

const data = {
  key: "a41b326e0dd047b280c39ae255011ddf",
  token: "403374b7b8ecb4cd0161f75f3d5573f3d942a2f5349a8b432b41e0b48e41ec53",
  dsc: "8c5640240436d52c6f9e43e1d624af104351c6a261f39cb9b61c44c098a650cc",
  auth:"s%3A60b4877338c12a2de21073ad%3AisEnterpriseAdmin%3Dfalse.mZwoWYBjDLFcHiQAt32kVbMsMFqVVum0ZO6Iuu%2BkTEo",
};

setDefaultTimeout(60 * 1000);


  // Given Loged user has a list of boards and we GET them 

  async function getTest() {
    //launch the browser
    let drivers = await new Builder().forBrowser("chrome").build();

    // get a trello board
    var config = {
      method: "get",
      url: `https://api.trello.com/1/members/me/boards?key=${data.key}&token=${data.token}`,
      headers: {
        Cookie:
          `dsc=${data.dsc}; preAuthProps=${data.auth}`,
      },
    };

    // get status code
    axios(config)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });

    // close the browser
    await drivers.quit();
  }

getTest();

