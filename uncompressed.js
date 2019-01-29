var labels = $('.all_labels').html();
$('body').html(labels);
$.get('https://raw.githubusercontent.com/alexgodin/bookmarklet/master/labels.css',
  function(css){
   $('head').append('<style type="text/css">'+css+'</style>') 
  })