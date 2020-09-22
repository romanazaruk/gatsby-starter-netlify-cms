import React from "react";
import Layout from "../../components/Layout";
import HeadTitle from "../../components/HeadLine";
import "../../scss/books-page.scss";
import { Link } from "gatsby";
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

export default function index() {
  return (
    <Layout>
        <div className="container-books">
          <div className="books-title">
            <HeadTitle variant="h1">BOOKSHELF</HeadTitle>
            <p className="books-title-description">
              This is where I share highlights and summaries from the books I've
              read. You can also subscribe to my weekly newsletter to stay in
              the loop on the new titles I add to this shelf.
            </p>
          </div>
          <BooksNav title1="BOOKS" title2="TOP 8" />
          <div>
            <p className="books-reading-title">Reading</p>
            <div>
              <img src={Book1} className="books-img-reading" />
              <img src={Book2} className="books-img-reading" />
            </div>
          </div>
          <div className="books-list">
            <p className="books-read-title">Read</p>
            <div className="labels">
              <Label title="All" color="white" />
              <Label title="Writing" color="yellow" />
              <Label title="Notes" color="grey" />
              <Label title="Education" color="grey" />
              <Label title="Thoughts" color="orange" />
              <Label title="Random" color="purple" />
            </div>
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
            <div className="books-btn-more-container">
              <button className="books-btn-more">More</button>
            </div>
          </div>
        </div>
    </Layout>
  );
}
