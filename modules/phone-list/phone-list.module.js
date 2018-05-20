// create phoneList module, which pretty much sorely depends on phone-list component
angular.module("phoneList", []);

/*
You can of course register the phone-list component directly to our main module
This does not affect the component's advantages
The reason to do it this way is for modularity - 
    Modules are completely separate entities whereas components have to be registered under a module
    By putting the component in its own module, you can literally refer to it in another project
        by injecting a <script> tag


@In short, a module denotes a feature, register all feature related things there!
*/