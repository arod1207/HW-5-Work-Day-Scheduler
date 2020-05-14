$(document).ready(function(){
// Moment.js used to format Date and Time
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(currentDay);
// Moments.js used to get Time ONLY
var now = moment()
var timeFormat = 'HH:mm:ss';


// console.log(now.isSameOrBefore(moment('09:59:30', format )));




// Button ONE //
$('.saveBtn1').click(function(){
    var timeSlot1 = $('#input1').val();
    localStorage.setItem('input1', timeSlot1);  
})
    
$('#input1').val(localStorage.getItem('input1'));

if (now.isBefore(moment('08:59:59', timeFormat))) {
    $('#inputBlock1').css({'background-color': 'green'});
}
else if (now.isBetween(moment('09:00:00', timeFormat), moment('09:59:59', timeFormat))){
    $('#inputBlock1').css({'background-color': '#ff6961'});
}
else if (now.isAfter(moment('10:00:00', timeFormat))) {
    $('#inputBlock1').css({'background-color': '#d3d3d3'});
    
}


// Button TWO //
$('.saveBtn2').click(function(){
    var timeSlot2 = $('#input2').val();
    localStorage.setItem('input2', timeSlot2);
    
})

$('#input2').val(localStorage.getItem('input2'));

if (now.isBefore(moment('09:59:59', timeFormat))) {
    $('#inputBlock2').css({'background-color': 'green'});
}
else if (now.isBetween(moment('10:00:00', timeFormat), moment('10:59:59', timeFormat))){
    $('#inputBlock2').css({'background-color': '#ff6961'});
}
else if (now.isAfter(moment('11:00:00', timeFormat))) {
    $('#inputBlock2').css({'background-color': '#d3d3d3'});

}
// BUTTON THREE
$('.saveBtn3').click(function(){
    var timeSlot3 = $('#input3').val();
    localStorage.setItem('input3', timeSlot3);
    
})

$('#input3').val(localStorage.getItem('input3'));

if (now.isBefore(moment('10:59:59', timeFormat))) {
    $('#inputBlock3').css({'background-color': 'green'});
}
else if (now.isBetween(moment('11:00:00', timeFormat), moment('11:59:59', timeFormat))){
    $('#inputBlock3').css({'background-color': '#ff6961'});
}
else if (now.isAfter(moment('12:00:00', timeFormat))) {
    $('#inputBlock3').css({'background-color': '#d3d3d3'});

}

// Button FOUR //
$('.saveBtn4').click(function(){
    var timeSlot4 = $('#input4').val();
    localStorage.setItem('input4', timeSlot4);
    
})

$('#input4').val(localStorage.getItem('input4'));

if (now.isBefore(moment('11:59:59', timeFormat))) {
    $('#inputBlock4').css({'background-color': 'green'});
}
else if (now.isBetween(moment('12:00:00', timeFormat), moment('12:59:59', timeFormat))){
    $('#inputBlock4').css({'background': '#ff6961', 'color': 'white'});
}
else if (now.isAfter(moment('13:00:00', timeFormat))) {
    $('#inputBlock4').css({'background-color': '#d3d3d3'});
    
}

// Button FIVE //
$('.saveBtn5').click(function(){
    var timeSlot5 = $('#input5').val();
    localStorage.setItem('input5', timeSlot5);
    
})

$('#input5').val(localStorage.getItem('input5'));

if (now.isBefore(moment('12:59:59', timeFormat))) {
    $('#inputBlock5').css({'background-color': 'green'});
}
else if (now.isBetween(moment('13:00:00', timeFormat), moment('13:59:59', timeFormat))){
    $('#inputBlock5').css({'background': '#ff6961', 'color': 'white'});
}
else if (now.isAfter(moment('14:00:00', timeFormat))) {
    $('#inputBlock5').css({'background-color': '#d3d3d3'});
    
}

// Button SIX //
$('.saveBtn6').click(function(){
    var timeSlot6 = $('#input6').val();
    localStorage.setItem('input6', timeSlot6);
    
})

$('#input6').val(localStorage.getItem('input6'));

if (now.isBefore(moment('13:59:59', timeFormat))) {
    $('#inputBlock6').css({'background-color': 'green'});
}
else if (now.isBetween(moment('14:00:00', timeFormat), moment('14:59:59', timeFormat))){
    $('#inputBlock6').css({'background': '#ff6961', 'color': 'white'});
}
else if (now.isAfter(moment('15:00:00', timeFormat))) {
    $('#inputBlock6').css({'background-color': '#d3d3d3'});
    
}

// Button SEVEN
$('.saveBtn7').click(function(){
    var timeSlot7 = $('#input7').val();
    localStorage.setItem('input7', timeSlot7);
    
})

$('#input7').val(localStorage.getItem('input7'));

if (now.isBefore(moment('14:59:59', timeFormat))) {
    $('#inputBlock7').css({'background-color': 'green'});
}
else if (now.isBetween(moment('15:00:00', timeFormat), moment('15:59:59', timeFormat))){
    $('#inputBlock7').css({'background': '#ff6961', 'color': 'white'});
}
else if (now.isAfter(moment('16:00:00', timeFormat))) {
    $('#inputBlock7').css({'background-color': '#d3d3d3'});
    
}

// Button EIGHT //
$('.saveBtn8').click(function(){
    var timeSlot8 = $('#input8').val();
    localStorage.setItem('input8', timeSlot8);
    
})

$('#input8').val(localStorage.getItem('input8'));

if (now.isBefore(moment('15:59:59', timeFormat))) {
    $('#inputBlock8').css({'background-color': 'green'});
}
else if (now.isBetween(moment('16:00:00', timeFormat), moment('16:59:59', timeFormat))){
    $('#inputBlock8').css({'background': '#ff6961', 'color': 'white'});
}
else if (now.isAfter(moment('17:00:00', timeFormat))) {
    $('#inputBlock8').css({'background-color': '#d3d3d3'});
    
}

// Button NINE //
$('.saveBtn9').click(function(){
    var timeSlot9 = $('#input9').val();
    localStorage.setItem('input9', timeSlot9);

})

$('#input9').val(localStorage.getItem('input9'));

if (now.isBefore(moment('16:59:59', timeFormat))) {
    $('#inputBlock9').css({'background-color': 'green'});
}
else if (now.isBetween(moment('17:00:00', timeFormat), moment('17:59:59', timeFormat))){
    $('#inputBlock9').css({'background': '#ff6961', 'color': 'white'});
}
else if (now.isAfter(moment('18:00:00', timeFormat))) {
    $('#inputBlock9').css({'background-color': '#d3d3d3'});
    
}

// Clear local Storage //

$('#clearBtn').click(function(){
    localStorage. clear()
    window.location.reload(false)
})

});


