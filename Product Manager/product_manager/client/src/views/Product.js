import React, { useEffect, useState } from "react";

import axios from "axios";

const Product = (props) => {
    console.log(props);

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/products/" + props.id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.id]);

    if (product === null) {
        return "Loading..."
    }

    return (
        <div>
            <div key={product._id}>
                <h3>{product.title}</h3>
                <h5>Price: ${product.price}</h5>
                <p>Description: {product.description}</p>
            </div>
        </div>
    )
};

export default Product;