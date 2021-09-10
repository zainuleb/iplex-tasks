arr = [1, 2, 3, 4, 5, 6, 7];

//Reverse Shift position of items
const arrayRevShift = (arr, shiftNum) => {
  for (let i = 0; i < shiftNum; i++) {
    end = arr.pop(); /* Remove and store array end item*/
    arr.unshift(end); /* Add item at start */
  }
  console.log(arr);
};

//Driver Code with built-in
arrayRevShift(arr, 3);

//Reverse Shift without builtin functions
const reviseArray = (arr, end) => {
  //Traverse each item
  for (let i = arr.length; i > 0; --i) {
    arr[i] = arr[i - 1];
  }
  arr[0] = end;
  arr.pop();

  return arr;
};

const arrayRevShiftX = (arr, shiftNum) => {
  for (let i = 1; i <= shiftNum; i++) {
    let end = arr[arr.length - 1]; /* store array end item */
    arr = reviseArray(arr, end);
  }
  console.log(arr);
};

//Driver Code
/* arrayRevShiftX(arr, 3); */
