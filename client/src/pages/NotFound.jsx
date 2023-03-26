import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <FaExclamationTriangle className="text-danger" size={`5em`} />
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link to={`/`} className="btn btn-priamry">
        Go back
      </Link>
    </div>
  );
}
