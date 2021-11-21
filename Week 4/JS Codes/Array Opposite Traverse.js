let arr = [1, 2, 3, 4, 5, 6];

const arrayOpposite = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

//Driver Code
arrayOpposite(arr);
