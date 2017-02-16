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
    dataType: 'text'
  }).done(function(data) {
    $('#step7').append(data);
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
