$(function() {
  $(".col-xs-4").click(function() {
    var place = parseInt(this.id.replace(/[^1-9]/g, ""));
    alert(place);
    this.addClass("test")

  });
})
var Board = function() {
  this.currentState = [
    [],
    [],
    []
  ];
}

var winCondition = [
  [0, 3, 6],
  [1, 4, 7],
  [3, 6, 9],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [3, 4, 6]
];
var Player = function() {
  this.playerMoves = [];
}

Player.prototype.checkWin = function() {
  for (var i = 0; i < winCondition.length; i++) {
    if (this.playerMoves.find(winCondition[i][0]) === -1 || this.playerMoves.find(winCondition[i][1]) === -1 || this.playerMoves.find(winCondition[i][2]) === -1) {} else {
      return true;
    }
  }
  return false;
}

Board.prototype.resetBoard = function() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      this.currentState[i].push(false);
    }
  }
};

Board.prototype.isValidMove = function(xPos, yPos) {
  if (this.currentState[xPos][yPos]) {
    return false;
  } else {
    this.placeMarker(xPos, yPos);
    return true
  }
};

Board.prototype.placeMarker = function(xPos, yPos) {
  if (this.isValidMove(xPos, yPos)) {
    this.currentState[xPos][yPos] = true;
    alert("is a valid move");
  } else {
    alert("not a valid move");
  }
};



// var b1 = new Board();
// b1.resetBoard();
// b1.placeMarker(0, 0);
// b1.placeMarker(1, 0);
// b1.placeMarker(2, 0);
// b1.placeMarker(1, 0);
// b1.placeMarker(2, 2);
// alert(b1.currentState);
