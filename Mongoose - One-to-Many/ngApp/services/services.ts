namespace myapp.Services {

  export class CartService {
      private CartResource;

      public get(id) {
        return this.CartResource.get({id:id});
      }

      public list() {
        return this.CartResource.query();
      }

      constructor($resource:ng.resource.IResourceService) {
        this.CartResource = $resource('/api/carts');
      }
  }

  angular.module('myapp').service('cartService', CartService);
}
