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
      case 16:
        array[16] = 'I am 16 strange loops.';
        break;
      case 17:
        array[17] = 'I am 17 strange loops.';
        break;
      case 18:
        array[18] = 'I am 18 strange loops.';
        break;
      case 19:
        array[19] = 'I am 19 strange loops.';
        break;
      case 20:
        array[20] = 'I am 20 strange loops.';
        break;
      case 21:
        array[21] = 'I am 21 strange loops.';
        break;
      case 22:
        array[22] = 'I am 22 strange loops.';
        break;
      case 23:
        array[23] = 'I am 23 strange loops.';
        break;
      case 24:
        array[24] = 'I am 24 strange loops.';
        break;
      case 25:
        array[25] = 'I am 25 strange loops.';
        break;
      default:
        array[i] = 'I am 1 strange loop.'
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
