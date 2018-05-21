# RESTful Architectural Design

In one sentence, when you design API, URI (universal resource identifier) should be stateless.
It should only points to a resource entity (for example, zoo).
The representation of the resource (for example, JSON, text) should be communicated via HTTP

Read the wikipedia page to learn more about it (or StackOverflow).

ngResource module provides the [$resource](https://docs.angularjs.org/api/ngResource/service/$resource) service, which is a factory that creates an client object for a certain resource entity and lets you interact with RESTful server-side data-source.

The returned object has methods that provide high-level behaviors without the need to use the low-level $http service.

$resource() Signature:
```
$resource(url, [paramDefaults], [actions], options);

[actions] looks like this:
{
  action1: {method:?, params:?, isArray:?, headers:?, ...},
  action2: {method:?, params:?, isArray:?, headers:?, ...},
  ...
}
```
Parameters of each action can be found from the [documentation](https://docs.angularjs.org/api/ngResource/service/$resource).

What $resource() returns is a set of actions (methods). There is a default set of actions, you can add your own object of actions by passing it through argument. These are the default actions:
```
{
  'get':    {method: 'GET'},
  'save':   {method: 'POST'},
  'query':  {method: 'GET', isArray: true},
  'remove': {method: 'DELETE'},
  'delete': {method: 'DELETE'}
}
```

# Custom Service Creation

To create a custom service, you can use the ${MODULE}.service() method. This method instantiate service object with the new keyword

You may also use ${MODULE}.factory(), which is what we used in this step. This method instantiate service object by running the factory function.

You can also use ${MODULE}.provider() if you want to create a provider object to inject into angular.config() to provide some module-wide configuration before making the service available.

Basically, for service(string, function), you register the name of the service and its constructor.
For factory(string, function), you register the name of the service and its factory function.

Read more about this in [this post](https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/).
[This post](https://stackoverflow.com/questions/14324451/angular-service-vs-angular-factory) on stackoverflow is also useful if you need more.

# Changes

See core/phone. That's where the RESTful client for phone is declared.
Then all $http service usage is replaced with this one.