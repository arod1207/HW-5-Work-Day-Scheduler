$(document).ready(function(){
// Moment.js used to format Date and Time
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(currentDay);
// Moments.js used to get Time ONLY
var time = moment().format('LT');
console.log(time);


var toDoArr = []


$('.saveBtn').click(function(){
  
    var userInput = $('#input').val();
    toDoArr.push(userInput);



    localStorage.setItem('UserInput', JSON.stringify(toDoArr));
    
    
    console.log(toDoArr);

   
});
    $('#input').val(JSON.parse(localStorage.getItem('UserInput')));

});

