function selectionSort(arr, n) {
    const stepsDiv = document.getElementById("steps");
    stepsDiv.innerHTML = "";  

    for (let i = 0; i < n - 1; i++) {
        let min = i;  
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;  
            }
        }

        
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

        
        stepsDiv.innerHTML += `<p>[${arr.join(', ')}]</p>`;
    }
    return arr; 
}

function performSelectionSort() {
    const input = document.getElementById("arrayInput").value;
    const arr = input.split(',').map(Number);  
    const n = arr.length;

   
    const sortedArray = selectionSort(arr, n);

    
    document.getElementById("result").innerText = sortedArray.join(', ');
}