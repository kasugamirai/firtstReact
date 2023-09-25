import  { useState } from "react";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [products, setProducts] = useState([]);

    const apiUrl = "/orders/";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            name,
            description,
            price: parseFloat(price),
            image_url: imageUrl,
        };

        const token = localStorage.getItem("token"); // Get the JWT token from local storage

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
            },
            body: JSON.stringify(newProduct),
        });

        if (response.ok) {
            const createdProduct = await response.json();
            setProducts([...products, createdProduct]);
            setName("");
            setDescription("");
            setPrice("");
            setImageUrl("");
        }
    };

    return (
        <div>
            <form className="create-product-form" onSubmit={handleSubmit}>
                <h2>Create Product</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
