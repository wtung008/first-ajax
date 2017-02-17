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

  $("#step8 button").on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      // method: 'POST'
      // data: {},
      data: {timezone: 'Pacific/Honolulu'},
      dataType: 'text'
    }).done(function(responseData) {
      $("#step8").append(responseData);
      console.log(responseData);
    });
  });

  $("#step9").on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      data: {},
      dataType: 'html'
    }).done(function(responseData) {
      $("#step9_list").append(responseData);
      console.log(responseData);
    });
  });

});
