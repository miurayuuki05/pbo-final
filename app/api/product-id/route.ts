import ProductController from "@/app/controller/product";
import { Product } from "@/app/model/Product";

export async function POST(request : Request){
    const productController = new ProductController();
    const requestBody = await request.json();
    const id = requestBody?.id;
    const Product = await productController.getProductById(id);
    return new Response(JSON.stringify(Product), {
        headers: { 'content-type': 'application/json' },
    });
}