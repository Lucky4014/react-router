import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page-card">
      <div className="page-icon">😕</div>
      <h1>404 - Page Not Found</h1>
      <p>
       This page does not exist! React Router's wildcard route ( * ) caught it.
       <br />
        Go back to home!
      </p>
      <Link to="/" className="btn-home">← Go Back Home</Link>
    </div>
  );
}

export default NotFound;