// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// Mars Grid 10 X 10
// ======================

var grid = [
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
];

grid[0][0]="R";

var command = "flflbfffffffffflbfffffffffflbfflbffrfflbbbrfrflbf";
var borderError = "Error trying to excced the grid borders"


// Main program
// ======================

console.log("Head North");
commandString(command);
console.log(rover.travelLog);
printGrid(grid);


//console.log(grid[0]);

// Functions
// ======================
function turnLeft(rover){
  var actualDirection = rover.direction;
  var newDirection;
  console.log("turnLeft");
  switch (actualDirection){
    case "N":
      newDirection = "W";
      console.log("Head West");
    break;
    case "E":
      newDirection = "N";
      console.log("Head North");
    break;
    case "S":
      newDirection = "E";
      console.log("Head East");
    break;
    case "W":
      newDirection = "S";
      console.log("Head South");
    break;
    default:
      console.log("Direction not identified");
    break;
  }
  console.log("Position (" + rover.x + "," + rover.y + ")");
  printGrid(grid);
  rover.direction = newDirection;  
}

function turnRight(rover){
  var actualDirection = rover.direction;
  var newDirection;
  console.log("turnRight");
  switch (actualDirection){
    case "N":
      newDirection = "E";
      console.log("Head East");
    break;
    case "E":
      newDirection = "S";
      console.log("Head South");
    break;
    case "S":
      newDirection = "W";
      console.log("Head West");
    break;
    case "W":
      newDirection = "N";
      console.log("Head North");
    break;
    default:
      console.log("Direction not identified");
    break;
  }
  console.log("Position (" + rover.x + "," + rover.y + ")");
  printGrid(grid);
  rover.direction = newDirection;  
}

function moveForward(rover){
  var actualDirection = rover.direction;
  updatePosition(rover, grid, "*");  
  console.log("moveForward");
  switch (actualDirection){
    case "N":
    if (rover.y - 1 < 0){
      console.log(borderError);
    } else {
      rover.y = rover.y - 1;
    }
    break;
    case "E":
    if (rover.x + 1 > 9){
      console.log(borderError);
    } else {
      rover.x = rover.x + 1;
    }
    break;
    case "S":
    if (rover.y + 1 > 9){
      console.log(borderError);
    } else {
      rover.y = rover.y + 1;
    }    
    break;
    case "W":
    if (rover.x - 1 < 0){
      console.log(borderError);
    } else {
      rover.x = rover.x - 1;
    }
    break;
    default:
    console.log("Direction not identified");
    break;
  }
  console.log("Position (" + rover.x + "," + rover.y + ")" );
  updatePosition(rover, grid, "R");
  printGrid(grid);
}

function moveBackward(rover){
  var actualDirection = rover.direction;
  updatePosition(rover, grid, "*");
  console.log("moveBackward");
  switch (actualDirection){
    case "N":
    if (rover.y + 1 > 9){
      console.log(borderError);
    } else {
      rover.y = rover.y + 1;
    }
    break;
    case "E":
    if (rover.x - 1 < 0){
      console.log(borderError);
    } else {
      rover.x = rover.x - 1;
    }
    break;
    case "S":
    if (rover.y - 1 < 0){
      console.log(borderError);
    } else {
      rover.y = rover.y - 1;
    }
    break;
    case "W":
    if (rover.x + 1 > 9){
      console.log(borderError);
    } else {
      rover.x = rover.x + 1;
    }
    break;
    default:
    console.log("Direction not identified");
    break;
  }
  console.log("Position (" + rover.x + "," + rover.y + ")");
  updatePosition(rover, grid, "R");
  printGrid(grid);
}

function commandString(command){
  for(var i = 0; i < command.length; i++){
    switch(command[i]){
      case "r":
        turnRight(rover);
      break;
      case "l":
        turnLeft(rover);
      break;
      case "f":
        moveForward(rover);
      break;
      case "b":
        moveBackward(rover);
      break;
      default:
        console.log("Command not recognized");
      break;
    }
    rover.travelLog.push(rover.x + "," + rover.y);
  }  
}

function printGrid (grid){
  for (var i = 0; i < 10; i++){
    console.log(grid[i]);
  }
}

function updatePosition (rover, grid, character){
  grid[rover.y][rover.x] = character;
}
