const{Builder}=require("selenium-webdriver");

async function getTest(){

    //launch the browser
    let drivers= await new Builder().forBrowser("chrome").build();

    // get a trello board
    await drivers.get("https://api.trello.com/1/members/me/boards?key=a41b326e0dd047b280c39ae255011ddf&token=403374b7b8ecb4cd0161f75f3d5573f3d942a2f5349a8b432b41e0b48e41ec53")
   
    // close the browser
    await drivers.quit();
} 
getTest()