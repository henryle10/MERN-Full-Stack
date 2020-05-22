import React, { useState } from "react";

import { Link, navigate } from "@reach/router"
import axios from "axios";

const NewPlayer = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPlayer = {
            name: name,
            position
        };

        axios.post("http://localhost:8000/players/addplayer", newPlayer)
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
        <div className="container-fluid" style={{ background: "#FFFFFF", borderStyle: "solid", padding: "50px" }}>
            <div className="form-group row">
                <div className="list-inline">
                    <ul>
                        <li className="list-inline-item">
                            <Link className="text-primary" to="/players/list"><h3 className="m-0">List</h3></Link>
                        </li>
                        <li className="list-inline-item">
                            <h3>{"|"}</h3>
                        </li>
                        <li className="list-inline-item">
                            <Link className=" text-primary" to="/players/addplayer"><h3 className="m-0">Add Player</h3></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <form onSubmit={(event) => { handleSubmit(event); }}>
                <div style={{ border: "1px solid black", height: "250px" }} className="w-75 m-auto">
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        className="form-control w-50 m-auto"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <label>Preferred Position: </label>
                    <input
                        type="text"
                        value={position}
                        className="form-control w-50 m-auto"
                        onChange={(event) => {
                            setPosition(event.target.value);
                        }}
                    />
                    {errors.name ? (<span style={{ color: "red" }}>{errors.name.message}</span>) : ("")}
                    <button className="btn btn-success mt-5 mr-3 float-right w-25">Add</button>
                </div>
            </form>
        </div>
    )
};

export default NewPlayer;
