/**
 * Toggles "done" class on <li> element
 */

$('li').click(function(){
  $(this).addClass('done')
})
/**
 * Delete element when delete link clicked
 */
$('.delete').click(function(){
  $(this).parent().remove()
})
/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val()
  var $li = $("<li>")
  $li.click(function(){ $(this).addClass('done') })

  var $span = $("<span>")
  $span.text(text)

  var $a = $("<a>", { "class": "delete"});
  $a.text('Delete')
 $a.click(function(){$(this).parent().remove()})

  $li.append($span);
  $li.append($a);

  $('.today-list').append($li)
};

// add listener for add
$('.add-item').click(addListItem)