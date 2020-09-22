import React from "react";
import Layout from "../../components/Layout";
import HeadTitle from "../../components/HeadLine";
import "../../scss/books-page.scss";
import BooksNav from "../../components/BooksNav";
import Book1 from "../../../static/img/books1.svg";
import Book2 from "../../../static/img/books2.svg";
import Label from "../../components/ColourfulLabel";
import Book3 from "../../../static/img/book3.svg";
import Book4 from "../../../static/img/book4.svg";
import Book5 from "../../../static/img/book5.svg";
import Book6 from "../../../static/img/book6.svg";
import Book7 from "../../../static/img/book7.svg";
import Book8 from "../../../static/img/book8.svg";
import { Link } from "gatsby";

export default function index() {
  return (
    <Layout>
      <div className="container-books">
        <div className="books-title">
          <HeadTitle variant="h1">BOOKSHELF</HeadTitle>
          <p className="books-title-description">
            This is where I share highlights and summaries from the books I've
            read. You can also subscribe to my weekly newsletter to stay in the
            loop on the new titles I add to this shelf.
          </p>
        </div>
        <BooksNav title1="BOOKS" title2="TOP 8" />
        <div className="books-list">
          <div className="books-list-container">
            <Link>
              <img src={Book3} className="book-img" />
            </Link>
            <Link>
              <img src={Book4} className="book-img" />
            </Link>
            <Link>
              <img src={Book5} className="book-img" />
            </Link>
            <Link>
              <img src={Book6} className="book-img" />
            </Link>
            <Link>
              <img src={Book7} className="book-img" />
            </Link>
            <Link>
              <img src={Book8} className="book-img" />
            </Link>
            <Link>
              <img src={Book3} className="book-img" />
            </Link>
            <Link>
              <img src={Book4} className="book-img" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
