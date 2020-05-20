import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

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

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:8000/products/" + id)
            .then((res) => {
                const filteredProduct = products.filter((product) => {
                    return product._id !== id;
                });
                setProducts(filteredProduct);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (products === null) {
        return "Loading...";
    }


    return (
        <div>
            <h2>All Products:</h2>
            <hr />
            {products.map((product) => {
                return (
                    <div key={product._id}>
                        <h3>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </h3>
                        <h5>Price: ${product.price}</h5>
                        <button
                            onClick={(event) => { handleDelete(product._id); }}
                            className="btn btn-danger">
                            Delete
                            </button>{" "}
                        <button
                            onClick={(event) => { navigate(`/product/${product._id}/edit`) }}
                            className="btn btn-warning">
                            Edit
                            </button>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default Products;