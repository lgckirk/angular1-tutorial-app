// take a boolean input and display it as checkmark "\u2713" or "\u2718"
angular.module("core")
    .filter("checkmark", function() {
        return function(inputBool) {
            return inputBool ? "\u2713" : "\u2718";
        }
    });
/**
 * A filter is just a function that takes a value and outputs something for display
 * Note it doesn't change the value, it just outputs something for display.
 */