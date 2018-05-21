angular.module("phoneDetail")
    .component("phoneDetail", {
        templateUrl: "./modules/phone-detail/phone-detail.template.html",
        controller: [
            "phone",
            "$routeParams",
            function(phone, $routeParams) {
                var self = this;
                // this is extracted from the current route (:phoneId) by the $route service
                var phoneId = $routeParams.phoneId;

                self.setThumbnail = function(url) {
                    self.thumbnail = './resources/' + url;
                }

                // NOTE:
                // even though it looks like synchronous code but it isn't
                // What IS returned synchronously is a "future" object
                // When XHR receives data, it will be filled,
                //      until then, it functions like a "placeholder"
                self.info = phone.get({phoneId: $routeParams.phoneId}, function(phone){
                    self.setThumbnail(phone.images[0]);
                });

            }
        ]
    });
