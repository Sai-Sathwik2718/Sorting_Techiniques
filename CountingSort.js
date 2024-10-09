//find max element
        function getMax(arr, n) {
            let max = arr[0];
            for (let i = 1; i < n; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }

        // Function to add each step description to the webpage
        function addStep(stepDescription) {
            const stepDiv = document.getElementById("steps");
            const newStep = document.createElement("p");
            newStep.textContent = stepDescription;
            stepDiv.appendChild(newStep);
        }

        // Counting Sort function with step display
        function countingSort(arr, n) {
            let output = new Array(n);  // Output array to store sorted elements
            let max = getMax(arr, n);  // Find the maximum value in the array
            let count = new Array(max + 1).fill(0);  // Initialize count array with zeros

            addStep("Initial Array: " + arr.join(", "));

            // Step 1: Store the count of each element
            for (let i = 0; i < n; i++) {
                count[arr[i]]++;
            }
            addStep("Count Array after counting elements: " + count.join(", "));

            // Step 2: Modify count array to store cumulative count
            for (let i = 1; i <= max; i++) {
                count[i] += count[i - 1];
            }
            addStep("Cumulative Count Array: " + count.join(", "));

            // Step 3: Build the output array
            for (let i = n - 1; i >= 0; i--) {
                output[count[arr[i]] - 1] = arr[i];
                count[arr[i]]--;
                addStep("Placing " + arr[i] + " in output. Updated Output: " + output.join(", "));
            }

            // Step 4: Copy the sorted elements back to the original array
            for (let i = 0; i < n; i++) {
                arr[i] = output[i];
            }

            addStep("Final Sorted Array: " + arr.join(", "));
        }

        // Function to perform the sorting and display the result
        function performCountingSort() {
            const input = document.getElementById("arrayInput").value;
            const arr = input.split(',').map(Number);  // Convert input string to an array of numbers
            const n = arr.length;

            // Clear previous steps and result
            document.getElementById("steps").innerHTML = '';
            document.getElementById("result").innerHTML = '';

            // Perform counting sort on the array
            countingSort(arr, n);  

            // Display the final sorted array
            document.getElementById("result").innerText = arr.join(', ');
        }
