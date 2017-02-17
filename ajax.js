$(document).ready(function () {

  /* Your code goes here */
  $("#step12 button").on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });

  $("#step3456 button").on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function (responseData){
        $("#step3456").append(responseData);
        console.log(responseData);
    }).fail(function(responseData){
        $("#step3456").append('Oops...something is wrong.  Try harder next time!');
        console.log(responseData);
    }).always(function() {
        console.log('Hey the request finished!')
    });
  });

  $("#step7 button").on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(responseData){
        $("#step7").append(responseData);
        console.log(responseData);      
    });
  });

});
