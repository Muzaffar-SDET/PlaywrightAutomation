const CartPage = require('./CartPage');
class DashboardPage{
    constructor(page){
        this.page = page;
        this.logo = page.locator('.logo');
        this.logoutBtn = page.getByRole('button', {name: ' Sign Out '});
        this.productsSection = page.locator('#products');
        this.productAddedAlert = page.getByText("Product Added To Cart");
        this.cart = page.locator("button[routerlink='/dashboard/cart']");
    }

    async getDashboardTitle(){
        return await this.page.title();
    }

    async addProductToCart(productName){
        const products = await this.productsSection.locator('h5 b');
        // Loop through the products using the count and .nth() method
        const count = await products.count();
        for (let i = 0; i < count; i++) {
            const product = products.nth(i);  // Get the i-th product
            const text = await product.textContent();

            // Check if the text matches the productName
            if (text === productName) {
                // Click the 'Add To Cart' button within the parent
                await this.page.getByRole('button', { name: ' Add To Cart' }).nth(i).click();
                break; // Exit the loop once the correct product is found and clicked
            }
        }
    }

    async goToCart(){
        await this.cart.click();
        return new CartPage(this.page);
    }


}

module.exports = DashboardPage;