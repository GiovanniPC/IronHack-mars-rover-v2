// Rover Object Goes Here
// ======================

const rover = [{ direction: 'N', x: 0, y: 0 }, { direction: 'N', x: 9, y: 9 }, { direction: 'N', x: 3, y: 7 }];
const obstacles = [{ x: 0, y: 5 }, { x: 5, y: 9 }];
const roverplaces = [[], [], []];
let oldshowdirection = '';
let newshowdirection = '';
let RoverN = 0;
let iAMHERE = true;
// ======================


// eslint-disable-next-line no-unused-vars
function chooseRover(n) {
  let RoverMove = '';
  switch (n) {
    case 1:
      RoverN = 0;
      RoverMove = 'Change to Rover 1';
      break;
    case 2:
      RoverN = 1;
      RoverMove = 'Change to Rover 2';
      break;
    case 3:
      RoverN = 2;
      RoverMove = 'Change to Rover 3';
      break;
    default:
      RoverMove = 'Rover not Exist!!';
  }
  return RoverMove;
}

function turnLeft() {
  // eslint-disable-next-line default-case
  switch (rover[RoverN].direction) {
    case 'N':
      rover[RoverN].direction = 'W';
      oldshowdirection = 'North';
      newshowdirection = 'West';
      break;
    case 'W':
      rover[RoverN].direction = 'S';
      oldshowdirection = 'West';
      newshowdirection = 'South';
      break;
    case 'S':
      rover[RoverN].direction = 'E';
      oldshowdirection = 'South';
      newshowdirection = 'East';
      break;
    case 'E':
      rover[RoverN].direction = 'N';
      oldshowdirection = 'East';
      newshowdirection = 'North';
  }

  // eslint-disable-next-line no-console
  console.log('Rover is facing', `${oldshowdirection} and turns left => Rover is fancing`, newshowdirection);
}

function turnRight() {
  // eslint-disable-next-line default-case
  switch (rover.direction) {
    case 'N':
      rover[RoverN].direction = 'E';
      oldshowdirection = 'North';
      newshowdirection = 'East';
      break;
    case 'W':
      rover[RoverN].direction = 'N';
      oldshowdirection = 'West';
      newshowdirection = 'North';
      break;
    case 'S':
      rover[RoverN].direction = 'W';
      oldshowdirection = 'South';
      newshowdirection = 'West';
      break;
    case 'E':
      rover[RoverN].direction = 'S';
      oldshowdirection = 'East';
      newshowdirection = 'South';
      break;
  }

  // eslint-disable-next-line no-console
  console.log('Rover is facing', `${oldshowdirection} and turns left => Rover is fancing`, newshowdirection);
}

function iceberg(newx, newy) {
  let nObstacles = obstacles.length - 1;
  let nRover = rover.length - 1;
  while (nObstacles > -1) {
    if ((rover[RoverN].x + newx) === obstacles[nObstacles].x
      && (rover[RoverN].y + newy) === obstacles[nObstacles].y) {
      return false;
    }
    nObstacles -= 1;
  }
  while (nRover > -1) {
    if (nRover !== RoverN) {
      if ((rover[RoverN].x + newx) === rover[nRover].x
        && (rover[RoverN].y + newy) === rover[nRover].y) {
        return false;
      }
    }
    nRover -= 1;
  }
  return true;
}

function moveForward() {
  // eslint-disable-next-line no-console
  console.log('GO FORWARD MY BOT!!!!');
  // eslint-disable-next-line default-case
  switch (rover[RoverN].direction) {
    case 'N':
      iAMHERE = iceberg(0, -1);
      if (rover[RoverN].y === 0 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
      } else {
        rover[RoverN].y -= 1;
      }
      break;
    case 'S':
      iAMHERE = iceberg(0, 1);
      if (rover[RoverN].y === 10 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].y += 1;
        break;
      }
    case 'W':
      iAMHERE = iceberg(-1, 0);
      if (rover[RoverN].x === 0 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].x -= 1;
        break;
      }
    case 'E':
      iAMHERE = iceberg(-1, 0);
      if (rover[RoverN].x === 0 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].y += 1;
        break;
      }
  }

  const goingPlaces = `[ ${rover[RoverN].x} , ${rover[RoverN].y} ]`;
  roverplaces.push(goingPlaces);
  return (`Position: [ ${rover[RoverN].x} , ${rover[RoverN].y} ]`);
}

function moveBackward() {
  // eslint-disable-next-line no-console
  console.log('Doing a MoonWalk!');

  // eslint-disable-next-line default-case
  switch (rover[RoverN].direction) {
    case 'N':
      iAMHERE = iceberg(0, 1);
      if (rover[RoverN].y === 9 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].y += 1;
        break;
      }
    case 'S':
      iAMHERE = iceberg(0, -1);
      if (rover[RoverN].y === 0 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].y -= 1;
        break;
      }
    case 'W':
      iAMHERE = iceberg(1, 0);
      if (rover[RoverN].x === 9 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].x += 1;
        break;
      }
    case 'E':
      iAMHERE = iceberg(-1, 0);
      if (rover[RoverN].x === 0 || iAMHERE === false) {
        // eslint-disable-next-line no-console
        console.log('YOU SHALL NOT PASS!!!');
        break;
      } else {
        rover[RoverN].y -= 1;
        break;
      }
  }
  const goingPlaces = `[ ${rover[RoverN].x} , ${rover[RoverN].y} ]`;
  roverplaces.push(goingPlaces);
  return (`Position: [ ${rover[RoverN].x} , ${rover[RoverN].y} ]`);
}

// eslint-disable-next-line no-unused-vars
function listCommands(commands) {
  let NeverStop = true;

  while (NeverStop) {
    if (commands.length > 0) {
      const command = commands[0];
      // eslint-disable-next-line no-param-reassign
      commands = commands.substr(1);
      switch (command) {
        case 'l':
          turnLeft();
          break;
        case 'r':
          turnRight();
          break;
        case 'f':
          moveForward();
          break;
        case 'b':
          moveBackward();
          break;
        default:
          return `Man I don't know what you are asking, I am going to ignore this command:  ${command}`;
      }
    } else {
      NeverStop = false;
    }
  }
  return 'Ufff It`s finally over!';
}

// eslint-disable-next-line no-unused-vars
function travelLog() {
  let NeverStopLog = true;
  while (NeverStopLog) {
    if (roverplaces[RoverN].length > 0) {
      // eslint-disable-next-line no-console
      console.log(roverplaces[RoverN][0]);
      roverplaces[RoverN].shift();
    } else {
      NeverStopLog = false;
    }
  }
}
