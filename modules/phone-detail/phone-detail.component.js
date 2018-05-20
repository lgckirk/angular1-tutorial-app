angular.module("phoneDetail")
    .component("phoneDetail", {
        templateUrl: "./modules/phone-detail/phone-detail.template.html",
        // $routeParams service is provided by the ngRoute module
        controller: [
            "$http",
            "$routeParams",
            function($http, $routeParams) {
                var self = this;
                // this is extracted from the current route (:phoneId) by the $route service
                var phoneId = $routeParams.phoneId;

                $http.get("./resources/phones/"+phoneId+".json")
                .then(function(response){
                    self.info = response.data;
                });
            }
        ]
    });
