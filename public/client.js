// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$('form').submit(function(event) {
  event.preventDefault();
  var file = $('input').val();
  console.log(file);
  event.preventDefault();
  $("#size").append("well this isn't working");
  $.post('https://smooth-name.glitch.me/upload',{ upl: file }, function(result) {
    $("#size").append(result);
  });
  
});

