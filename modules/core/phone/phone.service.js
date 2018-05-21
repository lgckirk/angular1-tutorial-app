// register factory function for the service "phone"
angular.module("core.phone")
    .factory("phone", [
        "$resource",
        function($resource) {
            return $resource("resources/phones/:phoneId.json", {}, {
                // We specified 1 method called doQuery that 
                //      does a GET request to URI phones/phones.json
                //      (note this is the phone meta json)
                // The result is returned as an array
                doQuery: {
                    method: "GET",
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            })
        }
    ]);