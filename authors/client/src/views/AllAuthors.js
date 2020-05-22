import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

const Authors = (props) => {
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/")
            .then((res) => {
                console.log(res);
                setAuthors(res.data);
            });
    }, []);

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:8000/authors/" + id)
            .then((res) => {
                const filteredAuthor = authors.filter((author) => {
                    return author._id !== id;
                });
                setAuthors(filteredAuthor);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    if (authors === null) {
        return "Loading..."
    };

    return (
        <div>
            <p style={{ color: "#8E39FF" }}>We have quotes by:</p>
            <Link to="/author/new">Add an author</Link>
            <div>
                <table className="table table-striped w-50 m-auto">
                    <thead>
                        <th>Author</th>
                        <th>Actions Avaiable</th>
                    </thead>
                    {authors.sort().map((author) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{author.name}</td>
                                    <td><button onClick={(event) => { handleDelete(author._id); }}
                                        className="btn btn-danger">Delete </button>

                                        <button onClick={(event) => {
                                            navigate(`/author/${author._id}/edit`)
                                        }}
                                            className="btn btn-warning ml-1">Edit</button>
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

export default Authors;
