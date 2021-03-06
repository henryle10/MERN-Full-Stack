import React, { useState } from "react";

import { navigate } from "@reach/router"
import axios from "axios";

const NewProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            title: title,
            price,
            description,
        };

        axios.post("http://localhost:8000/product/new", newProduct)
            .then((res) => {
                console.log(res);
                navigate("/products")
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
                <button>Create</button>
            </form >
        </div>
    )
};

export default NewProduct;