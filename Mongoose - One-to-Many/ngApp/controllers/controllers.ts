namespace myapp.Controllers {

  export class HomeController {
    public carts;
    public cart = {};
    public validationErrors;

    constructor(private cartService:myapp.Services.CartService) {
      this.carts = this.cartService.list();
      console.log(this.carts);
    }
  }
}
