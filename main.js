$(document).ready(function(){
// Moment.js used to format Date and Time
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(currentDay);
// Moments.js used to get Time ONLY
var time = moment().format('LT');
console.log(time);


////// VARIABLES TEST //////


// Button ONE //
$('.saveBtn1').click(function(){
    var timeSlot1 = $('#input1').val();
    localStorage.setItem('input1', timeSlot1);
    console.log(timeSlot1);
})

$('#input1').val(localStorage.getItem('input1'));

// Button TWO //
$('.saveBtn2').click(function(){
    var timeSlot2 = $('#input2').val();
    localStorage.setItem('input2', timeSlot2);
    console.log(timeSlot2);
})

$('#input2').val(localStorage.getItem('input2'));

// BUTTON THREE
$('.saveBtn3').click(function(){
    var timeSlot3 = $('#input3').val();
    localStorage.setItem('input3', timeSlot3);
    console.log(timeSlot3);
})

$('#input3').val(localStorage.getItem('input3'));

// Button FOUR //
$('.saveBtn4').click(function(){
    var timeSlot4 = $('#input4').val();
    localStorage.setItem('input4', timeSlot4);
    console.log(timeSlot4);
})

$('#input4').val(localStorage.getItem('input4'));

// Button FIVE //
$('.saveBtn5').click(function(){
    var timeSlot5 = $('#input5').val();
    localStorage.setItem('input5', timeSlot5);
    console.log(timeSlot5);
})

$('#input5').val(localStorage.getItem('input5'));

// Button SIX //
$('.saveBtn6').click(function(){
    var timeSlot6 = $('#input6').val();
    localStorage.setItem('input6', timeSlot6);
    console.log(timeSlot6);
})

$('#input6').val(localStorage.getItem('input6'));

// Button SEVEN
$('.saveBtn7').click(function(){
    var timeSlot7 = $('#input7').val();
    localStorage.setItem('input7', timeSlot7);
    console.log(timeSlot7);
})

$('#input7').val(localStorage.getItem('input7'));

// Button EIGHT //
$('.saveBtn8').click(function(){
    var timeSlot8 = $('#input8').val();
    localStorage.setItem('input8', timeSlot8);
    console.log(timeSlot8);
})

$('#input8').val(localStorage.getItem('input8'));

// Button NINE //
$('.saveBtn9').click(function(){
    var timeSlot9 = $('#input9').val();
    localStorage.setItem('input9', timeSlot9);
    console.log(timeSlot9);
})

$('#input9').val(localStorage.getItem('input9'));





});

