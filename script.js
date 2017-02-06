$(document).ready(function() {
  var square = $("<div class='square'>i</div>");
  for (i = 0; i < 16; i++) {
    $("<div class='row' id='" + i + "'></div>").appendTo('#gridContainer');
    for (j = 0; j < 16; j++) {
      $("<div class='square'>").appendTo('#gridContainer > #' + i);
    }

  }
});
