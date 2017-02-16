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
});
