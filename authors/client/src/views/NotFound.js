import React from "react";
import { Link } from "@reach/router";

const NotFound = (props) => {
    console.log(props);

    return (
        <div>Page not found:{props.location.href}
            <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
            <Link to="/author/new">Add an author</Link>
        </div>
    )
};

export default NotFound;