$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/550357.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      response.courses.completed.forEach(function(element){
        $('<div>', {'class': 'course'}).appendTo($('#badges'))
          .append($('<h3>', {text: element.title}))
          .append($('<img>', {src: element.badge}))
          .append($('<a>', {
            'class': 'btn btn-primary',
            href: element.url,
            target: '_blank',
            text: 'See Course'
          }));
      });
    }
  });
});
