let arr = [20, 10, 30, 50, 40];

const secondLargest = (arr) => {
  let max = arr[0];
  let secondMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      /*       secondMax = max; */
      /*       console.log('This is second max', secondMax); */
      max = arr[i];
    }

    if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};

//Driver Code
console.log(secondLargest(arr));
