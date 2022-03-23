const { Builder } = require("selenium-webdriver");
const { Given, When, Then } = require("@cucumber/cucumber");
var axios = require("axios");

const data = {
  key: "a41b326e0dd047b280c39ae255011ddf",
  token: "403374b7b8ecb4cd0161f75f3d5573f3d942a2f5349a8b432b41e0b48e41ec53",
};

let stats;

function isOk(stats) {
  console.log(stats);
  if (stats === 200) {
    return 200;
  } else {
    return 400;
  }
}

Given("Registered user exist and whants to post a board", async function () {
  //launch the browser
  let drivers = await new Builder().forBrowser("chrome").build();

  // get a trello board

  var config = {
    method: "post",
    url: `https://api.trello.com/1/members/me/boards?key=${data.key}&token=${data.token}&name=AlbaNav6`,
    headers: {
      Cookie:
        "dsc=8c5640240436d52c6f9e43e1d624af104351c6a261f39cb9b61c44c098a650cc; preAuthProps=s%3A60b4877338c12a2de21073ad%3AisEnterpriseAdmin%3Dfalse.mZwoWYBjDLFcHiQAt32kVbMsMFqVVum0ZO6Iuu%2BkTEo",
    },
  };

  // get status code
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  // close the browser
  await drivers.quit();
});
When(
  "We open the browser go to trello API and want to POST a board named AlbaNavQA",
  async function () {
    //launch the browser
    let drivers = await new Builder().forBrowser("chrome").build();

    // get a trello board
    var config = {
      method: "post",
      url: `https://api.trello.com/1/members/me/boards?key=${data.key}&token=${data.token}&name=AlbaNav6`,
      headers: {
        Cookie:
          "dsc=8c5640240436d52c6f9e43e1d624af104351c6a261f39cb9b61c44c098a650cc; preAuthProps=s%3A60b4877338c12a2de21073ad%3AisEnterpriseAdmin%3Dfalse.mZwoWYBjDLFcHiQAt32kVbMsMFqVVum0ZO6Iuu%2BkTEo",
      },
    };

    // get status code
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // close the browser
    await drivers.quit();
  }
);

Then("Get the status code ", function (stats) {
  console.log("stats of POST method:", stats);
  return expect(stats).to.be.equal(isOk(stats));
});
 