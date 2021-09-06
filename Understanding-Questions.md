# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick handler fires the handleAddOne function
* The handleAddOne function returns a request to dispatch the addOne function, which then reaches into the actions file for the original addOne function
* addOne is activated and is specified as type 'ADD_ONE' which reaches into the reducer function
* In the reducer, it matches the 'ADD_ONE' type/case and it takes the current state (for the first time, it will initialize at 0), copies over the rest of state that has not been changed, and then changes total to the current state(0) plus 1 
* TotalDisplay shows the total plus 1.
