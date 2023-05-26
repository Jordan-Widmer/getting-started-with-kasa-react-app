import { Link } from "react-router-dom";
import "./tumb.css";
function Tumb({ appartment }) {
  return (
    <Link className="tumb-container" to={`/appartment/${appartment.id}`}>
      <div
        className="tumb"
        style={{
          backgroundImage: `url(${appartment.cover})`,
        }}
      >
        {appartment.title}
      </div>
    </Link>
  );
}
export default Tumb;
