import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

const Players = (props) => {
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/players/list")
            .then((res) => {
                console.log(res);
                setPlayers(res.data);
            });
    }, []);

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:8000/player/" + id)
            .then((res) => {
                const filteredPlayer = players.filter((player) => {
                    return player._id !== id;
                });
                setPlayers(filteredPlayer);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (players === null) {
        return "Loading..."
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
            <div className="mt-3">
                <table className="table table-striped table-bordered m-auto">
                    <thead>
                        <th>Team Name</th>
                        <th>Preffered Positions</th>
                        <th>Actions</th>
                    </thead>
                    {players.map((player) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td><button onClick={(event) => { handleDelete(player._id); }}
                                        className="btn btn-danger">Delete </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div >
    )
};

export default Players;
