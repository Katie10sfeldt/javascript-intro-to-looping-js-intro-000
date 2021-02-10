//For loop goes Here


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

//Do While Loops

function doWhileLoop(int) {
  let i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
  }

  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < num);
}
