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
//variable display cirrent date and time
var currentDateDisplay = $("#currentDay")
currentDateDisplay.text(currentDate);


//function to organize how the schedule is coded
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
//functiom for save button to store in local storage
$('.saveBtn').on('click', function () {
    var textElement = $(this).siblings('.description').val();
    var blockTime = $(this).parent().parent().attr("id");
    console.log(blockTime);
    console.log(textElement);

    localStorage.setItem(blockTime, textElement);
})

$('9 .description').val(localStorage.getItem('9'));
$('10 .description').val(localStorage.getItem('10'));
$('11 .description').val(localStorage.getItem('11'));
$('12 .description').val(localStorage.getItem('12'));
$('13 .description').val(localStorage.getItem('13'));
$('14 .description').val(localStorage.getItem('14'));
$('15 .description').val(localStorage.getItem('15'));
$('16 .description').val(localStorage.getItem('16'));
$('17 .description').val(localStorage.getItem('17'));