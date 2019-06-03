// Rover Object Goes Here
// ======================

var rover = { direction: "N", x: 0, y: 0}

var roverplaces = [];

// ======================
function turnLeft(){

  switch (rover.direction){
    case "N":
      rover.direction = "W";
      var oldshowdirection = "North";
      var newshowdirection = "West";
      break;
    case "W":
        rover.direction = "S";
        var oldshowdirection = "West";
        var newshowdirection = "South";
        break;
    case "S":
      rover.direction = "E";
      var oldshowdirection = "South";
      var newshowdirection = "East";
      break;
    case "E":
        rover.direction = "N";
        var oldshowdirection = "East";
        var newshowdirection = "North";
  }

  console.log("Rover is facing", oldshowdirection + " and turns left => Rover is fancing", newshowdirection);

}

function turnRight(){

  switch (rover.direction){
    case "N":
      rover.direction = "E";
      var oldshowdirection = "North";
      var newshowdirection = "East";
      break;
    case "W":
      rover.direction = "N";
      var oldshowdirection = "West";
      var newshowdirection = "North";
      break;
    case "S":
      rover.direction = "W";
      var oldshowdirection = "South";
      var newshowdirection = "West";
      break;
    case "E":
      rover.direction = "S";
      var oldshowdirection = "East";
      var newshowdirection = "South";
      break;
  }
  
  console.log("Rover is facing", oldshowdirection + " and turns left => Rover is fancing", newshowdirection);

}

function moveForward(){
  console.log("GO FORWARD MY BOT!!!!")

  switch (rover.direction){
    case "N":
      if(rover.y == 0 ){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else {
        rover.y--;
        break;
      }
    case "S":
      if(rover.y == 10){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else{
        rover.y++;
        break;
      }
    case "W":
      if(rover.x == 0){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else {
        rover.x--;
        break;
      }
    case "E":
      if(rover.x == 0){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else{
        rover.x++;
        break;
      }
  }
  console.log("Position: [",rover.x,",",rover.y,"]")
  roverplaces.push("[",rover.x,",",rover.y,"]")
}

function moveBackward(){
  console.log("Doing a MoonWalk!")

  switch (rover.direction){
    case "N":
      if(rover.y == 10){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else {
        rover.y++;
        break;
      }
    case "S":
      if(rover.y == 0){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else{
        rover.y--;
        break;
      }
    case "W":
      if(rover.x == 10){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else {
        rover.x++;
        break;
      }
    case "E":
      if(rover.x == 0){
        console.log("YOU SHALL NOT PASS!!!");
        break;
      } else{
        rover.x--;
        break;
      }
  }
  console.log("Position: [",rover.x,",",rover.y,"]")
  roverplaces.push("[",rover.x,",",rover.y,"]")
}

function listCommands(commands){
  var NeverStop = true;

  while (NeverStop){
    if(commands.length > 0) {
      var command = commands[0];
      commands = commands.substr(1);
      switch (command){
        case "l":
          turnLeft();
          break;
        case "r":
          turnRight()
          break;
        case "f":
          moveForward()
          break;
        case "b":
          moveBackward()
          break;
        default:
          console.log("Man I don't know what you are asking, I am going to ignore this command:", command)
          break;
      }
    } else {
      NeverStop = false;
      console.log("Ufff It's finally over!")
    }
  }
}

function travelLog(position){

  // print all positions

}