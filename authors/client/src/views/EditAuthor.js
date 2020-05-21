import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const EditAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const editedAuthor = {
            name: name
        };

        axios.put("http://localhost:8000/author/" + props.id, editedAuthor)
            .then((res) => {
                console.log(res);
                navigate("/")
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response);
            });
    };

    const fetchData = () => {
        axios
            .get(`http://localhost:8000/author/${props.id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
            })
    };

    return (
        <div className="container">
            <button className="btn btn-link" onClick={(event) => {
                navigate(`/`)
            }} >Home</button>
            <p style={{ color: "#8E39FF" }}>Edit this author</p>
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

export default EditAuthor;