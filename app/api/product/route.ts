import ProductController from "@/app/controller/product";
import { Product } from "@/app/model/Product";

export async function GET() {
    const productController = new ProductController();
    const products = await productController.getAllProducts();
    return new Response(JSON.stringify(products), {
        headers: { 'content-type': 'application/json' },
    });
}

export async function POST(request : Request) {
    const productController = new ProductController();
    const requestBody = await request.json();
    const product: Product = {
        name: requestBody?.name,
        price: requestBody?.price,
        stock: requestBody?.stock
    };
    const newProduct = await productController.createProduct(product);
    return new Response(JSON.stringify(newProduct), {
        headers: { 'content-type': 'application/json' },
    });
}

export async function PUT(request : Request) {
    const productController = new ProductController();
    const requestBody = await request.json();
    const product: Product = {
        name: requestBody?.name,
        price: requestBody?.price,
        stock: requestBody?.stock
    };
    const updatedProduct = await productController.updateProduct(requestBody.id, product);
    return new Response(JSON.stringify(updatedProduct), {
        headers: { 'content-type': 'application/json' },
    });
}

export async function DELETE(request : Request) {
    const productController = new ProductController();
    const requestBody = await request.json();
    const deletedProduct = await productController.deleteProduct(requestBody.id);
    return new Response(JSON.stringify(deletedProduct), {
        headers: { 'content-type': 'application/json' },
    });
}

