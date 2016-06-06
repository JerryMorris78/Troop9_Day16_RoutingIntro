namespace MyApp.Services {

    export class ProductService {
        private productResource;

        constructor($resource:angular.resource.IResourceService) {
            this.productResource = $resource('/api/product/:id');
        }

        // Get all products
        getProducts() {
            return this.productResource.query()
        }

        // Get a product by id
        getProduct(productId) {
            return this.productResource.get({ id: productId });
        }

        // Create a new product
        createProduct(product) {
            return this.productResource.save(product).$promise;
        }

    }
    angular.module('MyApp').service('productService', ProductService);

}