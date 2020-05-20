import React, { useEffect, useState } from "react";

import axios from "axios";

const Products = (props) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/products")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            });
    }, []);

    if (products === null) {
        return "Loading...";
    }
    return (
        <div>
            <h2>All Products</h2>

            {products.map((product) => {
                return (
                    <div key={product._id}>
                        <h3>{product.title}</h3>
                        <h5>Price: {product.price}</h5>
                        <p>Description: {product.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;