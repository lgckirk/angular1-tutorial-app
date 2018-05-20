// create (and register) phone-list component
// note the 1 param module() fxn retrieves a module
angular.module("phoneList")
    .component("phoneList", {
        templateUrl: "./modules/phone-list/phone-list.template.html",
        controller: function() {
            this.phones = [
              {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.',
                age: 1
              }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.',
                age: 2
              }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.',
                age: 3
              }
            ];
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
        }
    });