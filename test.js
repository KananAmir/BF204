function move(arr, index, shift) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (index > shift) {
      if (i == shift) newArr.push(arr[index]);
      if (i != index) newArr.push(arr[i]);
    } else {
      if (i != index) newArr.push(arr[i]);
      if (i == shift) newArr.push(arr[index]);
    }
  }
  return newArr;
}

console.log(move([10, 20, 30, 40, 50], 3, 2));
// [10, 30, 20, 40, 50];
