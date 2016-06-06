namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('product', {
                url: '/product',
                templateUrl: '/ngApp/views/product.html',
                controller: MyApp.Controllers.ProductController,
                controllerAs: 'controller'
            })
            .state('productCreate', {
                url: '/product/create',
                templateUrl: '/ngApp/views/productCreate.html',
                controller: MyApp.Controllers.ProductCreateController,
                controllerAs: 'controller'
            });
            //.state('notFound', {
            //    url: '/notFound',
            //    templateUrl: '/ngApp/views/notFound.html'
            //});

        // Handle request for non-existent route
        //$urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
