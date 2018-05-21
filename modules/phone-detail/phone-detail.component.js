angular.module("phoneDetail")
    .component("phoneDetail", {
        templateUrl: "./modules/phone-detail/phone-detail.template.html",
        controller: [
            "phone",
            "$routeParams",
            function(phone, $routeParams) {
                var self = this;
                var phoneId = $routeParams.phoneId;

                self.setThumbnail = function(url) {
                    self.thumbnail = './resources/' + url;
                }

                self.info = phone.get({phoneId: $routeParams.phoneId}, function(phone){
                    self.setThumbnail(phone.images[0]);
                });

            }
        ]
    });
