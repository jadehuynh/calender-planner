$('#root');

var jumbotron = $(".jumbotron");
var description = $(".description");
var timeBlock = $(".time-block");
var rowSection = $(".row");
var hourDisplay = $(".hour");
var pastDisplay = $(".past");
var presentDisplay = $(".present");
var futureDisplay = $(".future");
var saveButton = $(".saveBtn")

var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate)

var currentDateDisplay = $("#currentDay")
currentDateDisplay.text(currentDate);

description.each(function() {
    var rightNow = $(this).parent().parent().attr("id")
    var currentHour = moment().hour()
    console.log(rightNow, currentHour)
    if(parseInt(rightNow)=== currentHour) {
        $(this).addClass("present")
    }
    else if (parseInt(rightNow)> currentHour) {
        $(this).addClass("future")
    }
    else {
        $(this).addClass("past")
    }
})



$('saveButton').click(function (e) {
    var saveItem =localStorage.setItem("W","W");
    localStorage.getItem(saveItem);
    e.preventDefault();

    saveItem();
    console.log.text(saveItem)
});


