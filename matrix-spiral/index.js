// write a function that accepts integer N and returns NxN spiral matrix
// examples: matrixSpiral(2)
// [[1,2],
// [4,3]]
// matrixSpiral(3)
// [[1,2,3],
// [8,9,4],
// [7,6,5]
// ]
function matrixSpiral(n) {
  // create empty matrix of NxN of 0
  let matrix = [];

  for(let i = 0; i < n; i++) {
    let matrixRow = [];

    for(let j = 0; j < n; j++) {
      matrixRow.push(0);
    }
    matrix.push(matrixRow);
  }

  // traverse matrix from 0,0 to east, south, west, north until unstopped
  const movement = [[0,1], [1,0], [0,-1], [-1,0]]; // reflects movement offset on x/y axis according to east/ south/west/north based on current position

  let currentDirectionIndex = 0;
  let currentX = 0;
  let currentY = 0;
  let counter = 1;
  let invalidMove = false;

  while(!invalidMove) {
    // fill in the spot
    if(matrix[currentX][currentY] === 0) {
      matrix[currentX][currentY] = counter;
      counter++;
    }

    // check next move based on current direction
    // if invalid, change direction and check next move
    // if that is invalid, invalidMove is true
    let nextX = currentX + movement[currentDirectionIndex][0];
    let nextY = currentY + movement[currentDirectionIndex][1];
    if(nextX < n && nextX >= 0 && nextY < n && nextY >= 0 && matrix[nextX][nextY] === 0) {
      currentX = nextX;
      currentY = nextY;
    } else {
      // change direction
      if(currentDirectionIndex < movement.length-1) {
        currentDirectionIndex++;
      } else {
        currentDirectionIndex = 0;
      }
      nextX = currentX + movement[currentDirectionIndex][0];
      nextY = currentY + movement[currentDirectionIndex][1];
      if(nextX < n && nextX >= 0 && nextY < n && nextY >= 0 && matrix[nextX][nextY] === 0) {
        currentX = nextX;
        currentY = nextY;
      } else {
        invalidMove = true;
      }
    }
  }

  return matrix;
}

function matrixSpiralByLoops(n) {
  // create empty matrix of NxN of 0
  let results = [];

  for(let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n-1;
  let startRow = 0;
  let endRow = n-1;

  while(startColumn <= endColumn && startRow <= endRow) {
    // move east, then increment row
    for(let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // move south, then decrement column
    for(let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // move west, then decrement row
    for(let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // move north, then decrement column
    for(let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrixSpiralByLoops;