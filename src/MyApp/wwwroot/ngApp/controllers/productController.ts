namespace MyApp.Controllers {
    
    export class ProductController {
        public products;

        constructor(private productService:MyApp.Services.ProductService) {
            this.getProducts();
        }

        getProducts() {
            this.products = this.productService.getProducts();
        }
    }

    // ProductCreateController
    export class ProductCreateController {
        public productToCreate;

        constructor(
            private productService: MyApp.Services.ProductService,
            private $state: angular.ui.IStateService) {
        }

        createProduct() {
            this.productService.createProduct(this.productToCreate).then(() => {
                this.$state.go('product');
            });
        }
    }

}