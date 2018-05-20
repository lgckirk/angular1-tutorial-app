/**
 * ngRoute module associates a url (pattern) with a template and controller, and display
 *      them within a ngView directive
 * since a component is just a template with a controller, we can just associate url with
 *      the component which will then provide the view (template + controller)
 */

/**
 * What Injector does after getting created during bootstrapping:
 * 1. Load module definitions you specified in your application
 * 2. Register all 'providers' defined in these modules
 * 3. When asked to do, lazily 'instantiate' services (and their dependancies)
 *      via their providers, as arguments to injectable functions (e.g. filter(), controller())
 * 
 * 
 * Providers are basically factory object for services, which
 * 1. instantiate services
 * 2. expose config API
 * It only makes sense to have access to providers in config() function
 *      (before anything is rendered)
 */


 // config takes providers (factories) as parameter and use them to do actual configuration
 // $routeProvider.when()'s 1st arg, path, is the "routed" path - the part of url
 //     after the '#' mark
 // recall starting at #, browser stops treating the rest as part of the "actual" url
 // in this sense, it's just like the "?" mark - the rest is taken as arguments
 angular.module("mainModule")
    .config(["$locationProvider", "$routeProvider",
        function($locationProvider, $routeProvider){
            // just some convention - for search engine (i believe it's outdated though)
            $locationProvider.hashPrefix("!");
        
            $routeProvider.when("/phones", {
                template: "<phone-list></phone-list>"
            })

            // phoneId is a variable (signified by :) and will be extracted to $routeParams service
            .when("/phones/:phoneId", {
                template: "<phone-detail></phone-detail>"
            })

            // otherwise() has the same signature as when(), you can also use it like this:
            //      on default, "redirect" to "/phones"
            .otherwise("/phones");
        }
    ]);