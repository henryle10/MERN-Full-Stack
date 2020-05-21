import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/products/" + props.id)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const editedProduct = {
            title: title,
            price,
            description,
        };

        axios
            .put("http://localhost:8000/products/" + props.id, editedProduct)
            .then((res) => {
                console.log(res);
                navigate("/product/" + res.data._id)
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    };

    return (
        <div className="container">
            <form onSubmit={(event) => { handleSubmit(event); }} >
                <div className="row">
                    <div className="col-md-4">
                        <label>Title: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                        {errors.title ? (<span style={{ color: "red" }}>{errors.title.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Price: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="number"
                            value={price}
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}
                        />
                        {errors.price ? (<span style={{ color: "red" }}>{errors.price.message}</span>) : ("")}
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <label>Description: </label>
                    </div>
                    <div className="col-md-8">
                        <input
                            className="form-control"
                            type="text"
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        />
                        {errors.description ? (<span style={{ color: "red" }}>{errors.description.message}</span>) : ("")}
                    </div>
                </div>
                <button>Update</button>
            </form >
        </div>
    )
};
export default EditProduct;