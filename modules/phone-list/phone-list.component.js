/**
 * services are managed by the dependency injection system,
 *    which keeps the app structured and loosely coupled
 * the name of the service in the controller function signature is what DI uses
 *    to do the injection, so it matters - use [name, fxn] in place of controller
 *    function to solve the minification problem (parameter name got minified)
 */

// note $http is a XHR object
angular.module("phoneList")
    .component("phoneList", {
        templateUrl: "./modules/phone-list/phone-list.template.html",
        controller: ["$http", function($http) {
            // $http.get()/post() .. return a promise object
            // we store "this" in a local variable so that even though by 
            //    the time the callback runs, the context is undefined, 
            //    we still have a means to reference the controller function obj
            // Note the JSON is parsed automatically
            var self = this;
            $http.get("./resources/phones/phones.json").then(function(response){
              self.phones = response.data;
            });

            // NOTE: -'age' means orderBy age but in reverse order
            this.sortTerms = [
              {
                label: 'Alphabetical',
                value: 'name'
              },
              {
                label: 'Newest',
                value: 'age'
              },
              {
                label: 'oldest',
                value: '-age'
              }
            ];
            this.sortKey = this.sortTerms[1];
        }]
    });