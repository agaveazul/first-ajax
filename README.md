# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)


Step 1:
Open the index.html file from the cloned project in your browser.

In the linked ajax.js file, build an AJAX request that:
retrieves the information at the root path of the server, by sending an empty JavaScript object, and expecting a text response.
Ensure the request is wrapped in a $(document).ready.
Ensure your Network Tab is open in Developer tools, and run the request by reloading your page.

$(document).ready(function () {
  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'GET',
  dataType: 'text'
})
})
What are the values in the "Method" and "Status" columns? Compare these values to Step 0.
Method: GET
Status: 200 OK
 -> The same as in Step 0 when I went directly to the root page of the server directly.
What are the values in the "Type" and "Initiator" columns? Compare these values to Step 0.
 ->type: xhr;
 ->initiator: jquery.min.js:4;

Step 2:
 $(document).ready(function () {
 $('#s12').on('click',function() {
   $.ajax({
   url: 'http://first-ajax-api.herokuapp.com/',
   method: 'GET',
   dataType: 'text'
   })
 })
 })
