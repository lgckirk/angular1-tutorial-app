// detail of a phone
angular.module("phoneDetail", ["ngRoute"]);

// note even though we've already included ngRoute module in our main module to route pages,
//      we still include it here.
// this way it's a stand alone module that can be used directly in another project.
//      (can't rely on main module to provide dependency)

// angular will automatically resolve this duplicate dependancy declaration - no performance cost.

// we need ngRoute because we used the $routeParams service in this module