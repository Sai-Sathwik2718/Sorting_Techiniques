function insertionSort(arr, n) {
    const stepsDiv = document.getElementById("steps");
            stepsDiv.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let temp = arr[i];  // Store the current element
        let j = i;

        // Shift elements of arr[0...i-1] that are greater than temp to one position ahead of their current position
        while (j > 0 && temp < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = temp;  // Place the temp at its correct position
        stepsDiv.innerHTML += `<p>[${arr.join(', ')}]</p>`;
    }
    return arr;  
}

// Function to perform the sorting and display the result
function performInsertionSort() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);  
    const n = arr.length;

    const sortedArray = insertionSort(arr, n);  

    document.getElementById("result").innerText = sortedArray.join(', ');  
}
