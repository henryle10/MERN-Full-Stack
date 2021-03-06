import React, { useState } from "react";

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmitProp({ title, price, description })
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
