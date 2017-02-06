$(document).ready(function() {
  var dim = 20;
  var drawGrid = function(dim) {
    for (i = 0; i < dim; i++) {
      $("<div class='squareRow' id='" + i + "'></div>").appendTo('#gridContainer');
      for (j = 0; j < dim; j++) {
        var square = $("<div class='square'></div>");
        $(square).appendTo('#gridContainer > #' + i);
      }
    }
  };

  $("#clear button").click(function(){
    $("#gridContainer .square").removeClass('toggled');
    var dimensions = prompt("How many squares horizontally and vertically should the new grid contain?");
    drawGrid(dimensions);
  });
  drawGrid(dim);
  $(".square").hover(function(){
    console.log("hover");
    $(this).addClass("toggled");
  });
});
