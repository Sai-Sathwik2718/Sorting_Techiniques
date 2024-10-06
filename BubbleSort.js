function bubbleSort(arr, n) {
    const stepsDiv = document.getElementById("steps");
            stepsDiv.innerHTML = ""; 
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < (n - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            stepsDiv.innerHTML += `<p>[${arr.join(', ')}]</p>`;
        }
    
    }
    return arr;
}
function performBubbleSort() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);  // Convert input string to an array of numbers
    const n = arr.length;

    const sortedArray = bubbleSort(arr, n); // Perform bubble sort on the array

    document.getElementById("result").innerText = sortedArray.join(', ');  // Display sorted array
}