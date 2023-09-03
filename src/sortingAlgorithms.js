export function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    //return [...quickSort(left), pivot, ...quickSort(right)];
    console.log([...quickSort(left), pivot, ...quickSort(right)]);
  }

export function bubbleSort(arr) {
const len = arr.length;
let swap = [];
let compare= [];
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap.push([j, j+1])
        compare.push([j, j+1])
    }else{
        swap.push([-1, -1])
        compare.push([j, j+1])
    }
    }
}
console.log(arr)
return [swap, compare];
}
