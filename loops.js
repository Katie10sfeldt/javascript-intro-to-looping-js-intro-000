//For loop goes Here
// -- is not working
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    switch (i) {
      case 0:
        array[0] = 'I am 0 strange loops.';
        break;
      case 1:
        array[1] = 'I am 1 strange loop.';
        break;
      case 2:
        array[2] = 'I am 2 strange loops.';
        break;
      case 3:
        array[3] = 'I am 3 strange loops.';
        break;
      case 4:
        array[4] = 'I am 4 strange loops.';
        break;
      case 5:
        array[5] = 'I am 5 strange loops.';
        break;
      case 6:
        array[6] = 'I am 6 strange loops.';
        break;
      case 7:
        array[7] = 'I am 7 strange loops.';
        break;
      case 8:
        array[8] = 'I am 8 strange loops.';
        break;
      case 9:
        array[9] = 'I am 9 strange loops.';
        break;
      case 10:
        array[10] = 'I am 10 strange loops.';
        break;
      case 11:
        array[11] = 'I am 11 strange loops.';
        break;
      case 12:
        array[12] = 'I am 12 strange loops.';
        break;
      case 13:
        array[13] = 'I am 13 strange loops.';
        break;
      case 14:
        array[14] = 'I am 14 strange loops.';
        break;
      case 15:
        array[15] = 'I am 15 strange loops.';
        break;
      case 7:
        array[7] = 'I am 7 strange loops.';
        break;
      case 8:
        array[8] = 'I am 8 strange loops.';
        break;
      case 9:
        array[9] = 'I am 9 strange loops.';
        break;
      case 10:
        array[10] = 'I am 10 strange loops.';
        break;
    }

    if (i === 1) {
      array[i] = 'I am 1 strange loop.';
      return array;
    } else {
      array[i] = `I am ${i} strange loops.`;
      return array;
    }
    return array;
  }
}


//While loop - takes num as a parameter and counts down from given number
// When done, returns 'done'
// -- is working

function whileLoop(num) {
  while(num > 0) {
    console.log(num);
    num--;
  }
  return 'done';
}

//Do While Loops - logs the statement at least once, then as long as the incremented variable is less than the given int, it will print
// -- is working

function doWhileLoop(int) {
  let i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
  }

  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < int);
}
