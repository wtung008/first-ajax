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
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function (responseData){
        $("#step3456").append(responseData)
        console.log(responseData)
    });
  });


});
