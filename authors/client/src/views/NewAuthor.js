import React, { useState } from "react";

import { navigate } from "@reach/router"
import axios from "axios";

const NewAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newAuthor = {
            name: name
        };

        axios.post("http://localhost:8000/author/new", newAuthor)
            .then((res) => {
                console.log(res);
                navigate("/")
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    };

    return (
        <div className="container">
            <button className="btn btn-link" onClick={(event) => {
                navigate(`/`)
            }} >Home</button>
            <p style={{ color: "#8E39FF" }}>Add a new author:</p>
            <form onSubmit={(event) => { handleSubmit(event); }}>
                <div style={{ border: "1px solid black", height: "175px" }} className="w-50 m-auto">
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    {errors.name ? (<span style={{ color: "red" }}>{errors.name.message}</span>) : ("")}
                    <div className="pt-4">
                        <button onClick={(event) => {
                            navigate(`/`)
                        }} className="btn btn-danger mr-1">Cancel</button>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default NewAuthor;
