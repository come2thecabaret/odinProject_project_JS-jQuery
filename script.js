$(document).ready(function() {
  var dim = 16;
  var gridContainer = $('#gridContainer');
  var drawGrid = function(dim) {
    $(gridContainer).html("");
    for (i = 0; i < dim; i++) {
      $("<div class='squareRow' id='" + i + "'></div>").appendTo(gridContainer);
      for (j = 0; j < dim; j++) {
        var square = $("<div class='square'></div>");
        $(square).appendTo('#gridContainer > #' + i);
      }
    }
    var widthAndHeight = 480 / dim;
    console.log(widthAndHeight);
    $(".square").css('height', widthAndHeight).css('width', widthAndHeight);
    $(".squareRow").css('height', widthAndHeight);

  };

  $("#clear button").click(function(){
    $("#gridContainer .square").removeClass('toggled');
    var dimensions = prompt("How many squares horizontally and vertically should the new grid contain?");
    drawGrid(dimensions);
  });
  drawGrid(dim);
  $("#gridContainer").on('mouseenter', '.square', function(){
    function makeRandomColor(){
      var c = '';
      while (c.length < 6) {
        c += (Math.random()).toString(16).substr(-6).substr(-1)
      }
      return '#'+c;
    }
    var newColor = makeRandomColor();
    console.log(newColor);
    console.log("hover");
    $(this).addClass("toggled").css('background-color', newColor);
  });
  $("#inDim").keyup(function() {
    console.log("keyup");
    drawGrid(this.value);

  })
});


/* 16*30 = 480 so new width and height = 48/number */
