// create (and register) phone-list component
// note the 1 param module() fxn retrieves a module
angular.module("phoneList")
    .component("phoneList", {
        // note url is relative to index.html
        // note browser will make a request to fetch template
        //    there are some ways to lower this overhead
        templateUrl: "./phone-list/phone-list.template.html",

        // note we don't need $scope
        // we assign data to controller function to avoid external influence
        controller: function() {
            this.phones = [
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
        }
    });

/**
 * A component is a subset of directives (so camel case declaration & xx-xx in actual use)
 * Creating a component requries a name and definition
 * In the simplest form, definition is just a template and a controller
 * Component is a reusable unit free from external influence (corrupt scope)
 * That means it's unit-testable
 */

 // NOTE: an instance of a component has its own isolated scope, within this scope,
 //         there's the controller function, which has another level of scope