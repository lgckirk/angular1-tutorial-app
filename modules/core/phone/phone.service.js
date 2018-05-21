// register factory function for the service "phone"
angular.module("core.phone")
    .factory("phone", [
        "$resource",
        function($resource) {
            return $resource("resources/phones/:phoneId.json", {}, {
                doQuery: {
                    method: "GET",
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            })
        }
    ]);