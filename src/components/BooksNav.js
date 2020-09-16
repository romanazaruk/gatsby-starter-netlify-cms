import React from "react";
import { Link } from "gatsby";

export default function BooksNav({ title1, title2 }) {
  return (
    <div>
      <nav className="books-nav">
        <Link to="/books" className="books-link" activeClassName="active">
          {title1}
        </Link>
        <Link to="/books/top13" className="books-link" activeClassName="active">
          {title2}
        </Link>
      </nav>
    </div>
  );
}
