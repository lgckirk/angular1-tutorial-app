// take a boolean input and display it as checkmark "\u2713" or "\u2718"
angular.module("core")
    .filter("checkmark", function() {
        return function(inputBool) {
            return inputBool ? "\u2713" : "\u2718";
        }
    });