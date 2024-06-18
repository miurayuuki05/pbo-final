export default function Api(){
    return (
        <div className="flex justify-center">
            <div className="mt-10">
            <h1>API Docs</h1>
            <table className="border">
                <thead className="border">
                    <tr>
                        <th>Method</th>
                        <th>Path</th>
                        <th>Description</th>
                        <th>Auth</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-600 text-white">
                        <td colSpan={4}>PRODUCT</td>
                    </tr>
                    <tr>
                        <td className="border ">GET</td>
                        <td className="border ">/api/product</td>
                        <td className="border ">Get all product list</td>
                        <td className="border ">Not Required</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/product</td>
                        <td className="border ">Create a new product</td>
                        <td className="border ">Required</td>
                    </tr>
                    <tr>
                        <td className="border ">PUT</td>
                        <td className="border ">/api/product</td>
                        <td className="border ">Update a product</td>
                        <td className="border ">Required</td>
                    </tr>
                    <tr>
                        <td className="border ">DELETE</td>
                        <td className="border ">/api/product</td>
                        <td className="border ">Delete a product</td>
                        <td className="border ">Required</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/product-id</td>
                        <td className="border ">Get product by id</td>
                        <td className="border ">Not Required</td>
                    </tr>
                    <tr className="bg-gray-600 text-white">
                        <td colSpan={4}>CART</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/cart</td>
                        <td className="border ">Get cart by id</td>
                        <td className="border ">Required</td>
                    </tr>
                    <tr>
                        <td className="border ">DELETE</td>
                        <td className="border ">/api/cart</td>
                        <td className="border ">Delete item from cart</td>
                        <td className="border ">Required</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/cart/add-item</td>
                        <td className="border ">Add item to cart</td>
                        <td className="border ">Required</td>
                    </tr>
                    <tr className="bg-gray-600 text-white">
                        <td colSpan={4}>USER</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/user/user-regis</td>
                        <td className="border ">Create a new user and a new cart</td>
                        <td className="border ">Not Required</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/user/user-login</td>
                        <td className="border ">Login user</td>
                        <td className="border ">Not Required</td>
                    </tr>
                    <tr>
                        <td className="border ">POST</td>
                        <td className="border ">/api/user/user-logout</td>
                        <td className="border ">Logout user</td>
                        <td className="border ">Required</td>
                    </tr>
                </tbody>

            </table>
            </div>
        </div>
    )
}