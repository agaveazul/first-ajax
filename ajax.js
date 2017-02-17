$(document).ready(function () {

$('#s12').on('click',function() {
  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'GET',
  dataType: 'text'
  })
})

$('#s3456').on('click',function() {
  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/ping',
  method: 'GET',
  dataType: 'text'
}).done(function(data){
  $('#step3456').append(data);
  console.log("Success!")
}).fail(function(data){
console.log(data.responseText);
}).always(function(){
  console.log("The response is complete")
})
})

$('#s7').on('click',function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    data: {amount: 6},
    dataType: 'text'
  }).done(function(data) {
    $('#step7').append(data+"<br>");
  }).fail(function(jqXHR,textStatus,errorThrown) {
    console.log(jqXHR);
  })
})

$('#s8').on('click',function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    data: {timezone: 'Europe/Sofia'},
    dataType: 'text'
  }).done(function(data){
    $('#step8').append(data);
  })
})


$('#s8b').on('click',function() {
  // var t = prompt("What timezone are you looking for?")
  $("<textarea id='s8c'> </textarea").appendTo($('#step8'));
  $("<button id='s8d'>Submit</button>").appendTo($('#step8'));
})

$('#step8').on('click','#s8b',function() {
  alert("It's work!")
  $('#s8d').on('click',function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: $('#s8c').val()},
      dataType: 'text'
    }).done(function(data){
      $('#step8').append(data);
    }).always(function(){
      console.log("Request complete")
    })
})
})


$('#s9').on('click',function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType: 'html'
  }).done(function(data){
    $('#ss9').append(data);
  })
})

})
