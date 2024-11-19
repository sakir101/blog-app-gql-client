// ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something Went Wrong!</h1>
      <p>
        {error?.status && <strong>Status Code: {error.status}</strong>}
        <br />
        {error.statusText || error.message || "Unknown error occurred."}
      </p>
      <button onClick={() => window.location.reload()}>Retry</button>
      <a href="/" style={{ marginLeft: "1rem" }}>
        Back to Home
      </a>
    </div>
  );
};
export default ErrorPage;
