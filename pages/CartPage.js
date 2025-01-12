class CartPage{
    constructor(page){
        this.page = page;
        this.myCartHeader = page.getByText("My Cart");
        this.checkoutBtn = page.getByRole('button', {name: 'Checkout'});
        
    }


    async verifyCartPage(){
        return await this.myCartHeader.isVisible();
    }

}
module.exports = CartPage;