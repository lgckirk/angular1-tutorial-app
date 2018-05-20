angular.module("phoneDetail")
    .component("phoneDetail", {
        template: "<p>TBD, phone id is: {{$ctrl.phoneId}}</p>",

        // $routeParams service is provided by the ngRoute module
        controller: [
            "$routeParams",
            function($routeParams) {
                // this comes from routing: /phones/:phoneId
                this.phoneId = $routeParams.phoneId;
            }
        ]
    });
