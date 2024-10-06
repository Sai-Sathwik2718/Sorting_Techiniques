
---
Sorting Algorithms Evaluator

This project is a web-based application that allows users to visualize and evaluate four popular sorting algorithms: Bubble Sort, Insertion Sort, Selection Sort, and Counting Sort. The application is built using HTML, CSS, and JavaScript for the frontend, providing an interactive and educational tool for understanding how these algorithms work step by step.

Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage Instructions](#usage-instructions)
- [Sorting Algorithms](#sorting-algorithms)
  - [Bubble Sort](#bubble-sort)
  - [Insertion Sort](#insertion-sort)
  - [Selection Sort](#selection-sort)
  - [Counting Sort](#counting-sort)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

Project Overview
This web application allows users to:
1. Input an array of integers and choose a sorting algorithm to evaluate.
2. Visualize the sorting process step by step, observing how each algorithm works internally.
3. See the final sorted output after the algorithm completes.

The goal of this project is to help users understand and compare the differences between these four sorting techniques by providing a hands-on visualization tool.

Features
- Simple and intuitive user interface for inputting data and selecting sorting algorithms.
- Step-by-step visualization of the sorting process, displaying the intermediate steps for each algorithm.
- four different sorting techniques to choose from: Bubble Sort, Insertion Sort, Selection Sort, and Counting Sort.
- Responsive design to ensure a smooth experience across different devices.

Technologies Used
- HTML: Provides the structure of the website.
- CSS: Adds styling and layout for a visually appealing interface.
- JavaScript: Implements the sorting algorithms and handles user interaction and real-time sorting visualization.


5. Choose one of the following sorting techniques:
   - Bubble Sort
   - Insertion Sort
   - Selection Sort
   - Counting Sort

6. Observe the sorting process, displayed step by step in the "Sorting Process" section.

7. View the final sorted array in the "Sorted Array" section.

Sorting Algorithms

Bubble Sort
- Description: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process repeats until no more swaps are needed, effectively "bubbling" the largest element to the end of the list in each iteration.
- Time Complexity: O(n²)

Insertion Sort
- Description: Builds the final sorted array one item at a time by comparing the current element with those already sorted, shifting elements as needed, and inserting the current element into its correct position.
- Time Complexity: O(n²)

Selection Sort
- Description: Divides the input list into a sorted and unsorted region, repeatedly selects the smallest (or largest) element from the unsorted region, and swaps it with the first unsorted element.
- Time Complexity: O(n²)

Counting Sort
- Description: Non-comparison-based sorting algorithm that works by counting the number of occurrences of each element and using this count to place the elements in the correct sorted order.
  Time Complexity: O(n + k), where `k` is the range of the input.

Folder Structure
```
sorting-algorithms-evaluator/
│
├── index.html              # Main HTML file for the user interface
├── styles.css              # CSS file for styling the webpage
├── script.js               # JavaScript file containing sorting algorithms and logic
├── README.md               # This README file
```

Future Enhancements
- Additional sorting algorithm: Implement more sorting algorithms such as Quick Sort, Merge Sort, or Radix Sort.
- Animations: Add animated visualizations for sorting steps to make the process more interactive and engaging.
- Performance metrics: Include runtime performance metrics to compare the efficiency of different algorithms based on the input size.

Contributions:
1.Lalitya
2.Jaya Surya
3.Sai Kiran

