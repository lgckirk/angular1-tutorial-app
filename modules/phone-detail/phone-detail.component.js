angular.module("phoneDetail")
    .component("phoneDetail", {
        templateUrl: "./modules/phone-detail/phone-detail.template.html",
        controller: [
            "$http",
            "$routeParams",
            function($http, $routeParams) {
                var self = this;
                // this is extracted from the current route (:phoneId) by the $route service
                var phoneId = $routeParams.phoneId;

                self.setThumbnail = function(url) {
                    self.thumbnail = './resources/' + url;
                }

                $http.get("./resources/phones/"+phoneId+".json")
                .then(function(response){
                    self.info = response.data;
                    self.setThumbnail(response.data.images[0]);
                });
            }
        ]
    });
