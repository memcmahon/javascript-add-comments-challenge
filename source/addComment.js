$(document).ready(function(){
  // add your code here

  $('<form></form>', {id: 'new_comment'}).appendTo('#comments');
  $('<input>', {type: 'textfield', id: 'comment', placeholder: 'enter comment'}).appendTo('#new_comment');
  $('<input>', {type: 'textfield', id: 'author', placeholder: 'who dis?'}).appendTo('#new_comment');
  $('<input>', {type: 'submit', value: 'publish!'}).appendTo('#new_comment');

  $('#new_comment_button').click(function() {
    $('#new_comment').show();
  });

  $("input[type='submit']").click(function() {
    var comment = $("#comment").val();
    var author = $("#author").val();

    if(comment) {
      $(`<li>${comment}<span class="author">${author}</span></li>`).appendTo("#comment_list");
    }

    event.preventDefault()
  });

});
