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

var currentDate = moment().format("dddd MMMM Do YYYY");
//console.log(currentDate)

var currentDateDisplay = $("#currentDay")
currentDateDisplay.text(currentDate);

description.each(function() {
    var rightNow = $(this).parent().parent().attr("id")
    var currentHour = moment().hour()
    //console.log(rightNow, currentHour)
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

$('.saveBtn').on('click', function () {
    var textElement = $(this).siblings('.description').val();
    var blockTime = $(this).parent().parent().attr("id");
    console.log(blockTime);
    console.log(textElement);

    localStorage.setItem(blockTime, textElement);
})

$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));
$('9 .description').val(localStorage.getItem('9'));