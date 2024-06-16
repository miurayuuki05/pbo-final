import { Product, ProductModel } from '../model/Product';
import { MainController } from './mainController';

class ProductController extends MainController{ 
    public constructor(product?: Product) {
        super();
        if (product) {
            this.newProduct = product;
        }
    }

    async createProduct(product: Product) {
        this.connectMongo();
        const newProduct = new ProductModel(product);
        return await newProduct.save();
    }

    async getAllProducts() {
        this.connectMongo();
        return await ProductModel.find();
    }

    async getProductById(id: string) {
        this.connectMongo();
        return await ProductModel.findById(id);
    }

    async updateProduct(id: string, product: Product) {
        this.connectMongo();
        return await ProductModel.findByIdAndUpdate(id, product, { new: true });
    }

    async deleteProduct(id: string) {
        this.connectMongo();
        return await ProductModel.findByIdAndDelete(id);
    }
    
}

export default ProductController;
