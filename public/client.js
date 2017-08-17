// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$('form').submit(function(event) {
  event.preventDefault();
  var file = $('form').prop('file');
  console.log('hello world :o');
  event.preventDefault();
  $.post('https://smooth-name.glitch.me/upload', { s: file });
});

