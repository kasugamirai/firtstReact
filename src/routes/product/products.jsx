import { useState, useEffect } from "react";
import Product from "./product.jsx";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        // Replace the URL with the API endpoint for your backend.
        const url = "/orders/getAllOrders";

        // 获取token，这里是一个示例，您可以根据实际情况获取token
        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // 在这里添加token
            },
        };

        const response = await fetch(url, requestOptions);
        const data = await response.json();
        setProducts(data);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
