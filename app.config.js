
 angular.module("mainModule")
    .config(["$locationProvider", "$routeProvider",
        function($locationProvider, $routeProvider){
            $locationProvider.hashPrefix("!");
        
            $routeProvider.when("/phones", {
                template: "<phone-list></phone-list>"
            })
            // phoneId is a variable (signified by :) and will be extracted to $routeParams service
            .when("/phones/:phoneId", {
                template: "<phone-detail></phone-detail>"
            })
            .otherwise("/phones");
        }
    ]);