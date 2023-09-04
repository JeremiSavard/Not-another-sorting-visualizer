export function quickSort(arr) {
    // Create a stack to store the indices of subarrays to be sorted
    const stack = [];
    stack.push(0); // Push the starting index
    stack.push(arr.length - 1); // Push the ending index
    let pivotIndex = [0,[]]
  
    // Continue until the stack is empty
    while (stack.length > 0) {
      // Pop the ending and starting indices
      const end = stack.pop();
      const start = stack.pop();

  
      // Partition the subarray and get the pivot index
      pivotIndex = partition(arr, start, end, pivotIndex[1]);
  
      // If there are elements to the left of the pivot, push their indices to the stack
      if (pivotIndex[0] - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex[0] - 1);
      }
  
      // If there are elements to the right of the pivot, push their indices to the stack
      if (pivotIndex[0] + 1 < end) {
        stack.push(pivotIndex[0] + 1);
        stack.push(end);
      }
    }
    return pivotIndex[1]
  }
  
  function partition(arr, start, end, switchAnimation) {
    // Choose the pivot element (e.g., the last element)
    const pivot = arr[end];
    let i = start - 1;
  
    // Rearrange the elements such that elements smaller than the pivot
    // are on the left, and elements greater than the pivot are on the right
    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        i++;
        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        switchAnimation.push([i,j])
      }
    }
  
    // Swap arr[i+1] (the pivot) and arr[end]
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    switchAnimation.push([i+1,end])
  
    // Return the index of the pivot element
    return [i + 1, switchAnimation];
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
return [swap, compare];
}
