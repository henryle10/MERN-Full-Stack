import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "@reach/router";

const Status = () => {
    const [players, setPlayers] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/players/list")
            .then((res) => {
                console.log(res);
                setPlayers(res.data);
            })
            .catch((err) => {
                setErrors(err.data)
            });
    }, [players]);

    const statusOnChange = (event, playerID) => {
        const status = event.target.innerText;
        axios.put(`http://localhost:8000/players/${playerID}`, { status: status })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                setErrors(err.data)
            });
    }

    if (players === null) {
        return "Loading..."
    };

    return (
        <div className="container-fluid" style={{ background: "#FFFFFF", borderStyle: "solid", padding: "50px" }}>
            <h2>Player Status - Game 1</h2>
            <div className="form-group row">
                <div className="list-inline">
                    <ul>
                        <li className="list-inline-item">
                            <Link className="text-primary" to="#"><h3 className="m-0">Game 1</h3></Link>
                        </li>
                        <li className="list-inline-item">
                            <h3>{"|"}</h3>
                        </li>
                        <li className="list-inline-item">
                            <Link className=" text-primary" to="#"><h3 className="m-0">Game 2</h3></Link>
                        </li>
                        <li className="list-inline-item">
                            <h3>{"|"}</h3>
                        </li>
                        <li className="list-inline-item">
                            <Link className=" text-primary" to="#"><h3 className="m-0">Game 3</h3></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-3">
                <table className="table table-striped table-bordered m-auto">
                    <thead>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </thead>
                    {players ? players.map((player, i) => (
                        <tbody>
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>
                                    <button onClick={event => statusOnChange(event, player._id)}
                                        className={`btn ${player.status === 'Playing' ? 'btn-success' : 'btn-outline-success'} px-5 border border-dark rounded-0 mx-1`}>
                                        Playing</button>
                                    <button onClick={event => statusOnChange(event, player._id)}
                                        className={`btn ${player.status === 'Not Playing' ? 'btn-danger' : 'btn-outline-danger'} px-5 border border-dark rounded-0 mx-1`}>
                                        Not Playing</button>
                                    <button onClick={event => statusOnChange(event, player._id)}
                                        className={`btn ${player.status === 'Undecided' ? 'btn-warning' : 'btn-outline-warning'} px-5 border border-dark rounded-0 mx-1`}>
                                        Undecided</button>
                                </td>
                            </tr>
                        </tbody>
                    )) : ' '}
                </table>
            </div>
        </div >
    )
};

export default Status;
