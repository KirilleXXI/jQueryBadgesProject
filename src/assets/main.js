$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/550357.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      response.courses.completed.forEach(function(element){
        $div = $('<div class="course">');
        $('#badges').append($div);
        $div.append('<h3>');
        $('h3',$div).text(element.title);
        $div.append('<img>');
        $('img',$div).attr({src: element.badge});
        $div.append('<a>');
        $('a',$div).attr({href: element.url})
          .attr({target:'_blank'})
          .addClass('btn btn-primary')
          .text('See Course');
      });
    }
  });
});
