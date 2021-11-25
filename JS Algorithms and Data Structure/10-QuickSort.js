/* INTRODUTION TO QUICKSORT */

// QuickSort
// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
// Works by slecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.

// Pivot Helper
// In order to implement merge sort, it's useful to frist implement a function responsilbe arranging elements in array on either side of a pivot.
// Given an array, this helper function should designate an element as the pivot.
// It should then rearrange elements in the array so thats all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this IN PLACE!, that is, it should not create a new array.
// When complete, the helper should return the index of the pivot.

// Picking a pivot 
// The runtime of quick sort depends in a part on how one selects the pivot.
// Ideally the pivot should be chosen so that it's roughtly.
// For simplicity, we'll always chose the pivot to be the frist element (we'll talk about consequences of this later)

// Pivot pseudocode