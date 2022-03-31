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


var textElement = $("#textSpace")
var saveItem =localStorage.setItem($("textElement"), 'uff da')

var saveBtn9 = $("#save9")
var saveBtn10 = $("#save10")
var saveBtn11 = $("#save11")
var saveBtn12 = $("#save12")
var saveBtn13 = $("#save13")
var saveBtn14 = $("#save14")
var saveBtn15 = $("#save15")
var saveBtn16 = $("#save16")
var saveBtn17= $("save17")

saveButton= $('saveBtn9').on('click', function (e) {
   localStorage.setItem('feed', 'me')
    e.preventDefault();
    saveItem(saveItem);
    textSpace.text("ryryry");
});

console.log(textElement.text);




