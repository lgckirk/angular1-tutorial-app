
angular.module("phoneList")
    .component("phoneList", {
        templateUrl: "./modules/phone-list/phone-list.template.html",
        controller: ["$http", function($http) {
            var self = this;
            $http.get("./resources/phones/phones.json").then(function(response){
              self.phones = response.data;
            });

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