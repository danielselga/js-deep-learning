// Big O its a way to classify how much your function or algorithm are scalabe.

// F(1) = 1 It means the functions is constant, doesent matter the value, the runtime its always the same.
// Its cummon in arithmetics functions.

// F(n) = n Grows linear the run time get bigger since the value of N grows.

// F(n^2) The bigger run time cummon seen in nested loops, since the n value grows the execution time grows ^2

// We always simplify the n value for thease values.

// Big O shortHands
// 1) Arithmetic operations are constant
// 2) Variable assignment is constant
// 3) Acessing element in an array (by index) or object (by key) is constant.
// In a loop the the complexity is the length of the loop times the complexity of wahtever happens insside the loop.


// Space complexity
// So far we've been focusing on time complexity: how we can analyze the runtime of an alforithm as the size of the inputs increase?
// We can also use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm.
// Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.

// Space complexity in JS Rules of thumbs.
// 1) Most primitives (booleans, numbers, undefined, null) are constant space. Desent matter the number the space will be the same.
// 2) Strings require O(n) Space (where n is the string lenght.)
// 3) Reference tyes are generaly O(n), where n is the length (for arrays) or the number of keys (for objects)

