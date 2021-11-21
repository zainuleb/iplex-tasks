//Variable Declaration
var arr = [1, 5, 4, 3, 2, 5, 4, 7, 4];
var rep = {};

let len = arr.length; //Cal length

const repNumArr = (arr) => {
  for (let i = 0; i < len; i++) {
    //Case: attribute exist
    if (rep.hasOwnProperty(arr[i])) {
      rep[arr[i]]['repeated']++;
    }

    //Case: attribute doesnt exist
    if (!rep.hasOwnProperty(arr[i])) {
      rep[arr[i]] = {};
      rep[arr[i]]['repeated'] = 1;
    }
  }
  console.log(rep);
};

repNumArr(arr);

/* Different Format Code */
/* const repNumArr = (arr) => {
  for (let i = 0; i < len; i++) {
    if (rep.hasOwnProperty(arr[i])) {
      rep[arr[i]]++;
    }

    if (!rep.hasOwnProperty(arr[i])) {
      rep[arr[i]] = 1;
    }
  }

  console.log(rep);
}; */
