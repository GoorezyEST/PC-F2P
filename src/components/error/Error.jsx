import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error_section">
      <h4>Error 404</h4>
      <p>Page not found</p>
      <Link className="error_link" to="/">
        Go Home
      </Link>
    </section>
  );
}

export default Error;
