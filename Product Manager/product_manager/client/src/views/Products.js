import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "@reach/router";

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
            <hr />
            {products.map((product) => {
                return (
                    <div key={product._id}>
                        <h3>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;