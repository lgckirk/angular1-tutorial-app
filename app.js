// "create" a module called mainApp
let app = angular.module("mainApp", []);

// "create" a controller under mainApp called mainCtrl
// controller creates a new scope under the root scope
app.controller("mainCtrl", ["$scope", function($scope) {
    $scope.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
}]);

/*
The template (the part of the view containing the bindings and presentation logic)
  acts as a blueprint for how our data should be organized and presented to the user. 
The controller provides the context in which the bindings are evaluated
  and applies behavior and logic to our template.
*/