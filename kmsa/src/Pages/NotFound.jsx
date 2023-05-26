import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="page-404">
        <h2 className="text404">404</h2>
        <p className="message-404">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="link-404" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
