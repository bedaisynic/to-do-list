const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    let today = new Date();


    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});




    // var currentDay = today.getDay();
    // var day = "";

    // if (today.getDay() === 6 || today.getDay() === 0) {
    //     day = "weekend";
    // } else {
    //     day = "weekday";
    // }
    // res.render("list", {kindOfDay: day});


    // switch (currentDay) {
    //     case 0:
    //     day = "Sunday";
    //     break;
    //     case 1:
    //     day = "Monday";
    //     break;
    //     case 2:
    //     day = "Tuesday";
    //     break;
    //     case 3:
    //     day = "Wednesday";
    //     break;
    //     case 4:
    //     day = "Thursday";
    //     break;
    //     case 5:
    //     day = "Friday";
    //     break;
    //     case 6:
    //     day = "Saturday";
    //     break;
    //     default:
    //     console.log("Error: current day is equal to: " + currentDay);
    // }