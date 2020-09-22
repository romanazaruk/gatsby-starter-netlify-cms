import Layout from "../../components/Layout";
import HeadLine from "../../components/HeadLine";
import React, { useState } from "react";
import "../../scss/outofcrst.scss";
import { Link } from "gatsby";
import Newsletter from "../../components/Newsletter";
import Podcast from "../../components/Podcast";

export default function Index() {
  const [isFill, setFill] = useState({
    color: "#8E90A6",
    colorTitle: "#555770",
  });

  const [isFillPodcast, setFillPodcast] = useState({
    color: "#8E90A6",
    colorTitle: "#555770",
  });

  return (
    <Layout>
      <div className="outofcrst-container">
        <div className="outofcrst-title">
          <HeadLine variant="h1">OUT OF CURIOSITY</HeadLine>
          <p className="outofcrst-title-p">
            Out of Curiosity promotes ideas, concepts and mental models to help
            get 1% better everyday in work and life. Subscribe to the newsletter
            and podcast for a constant stream of inspiration.
          </p>
        </div>
        <div className="outofcrst-btn-img">
          <Link
            to="/outofcrst/newsletter"
            className="outofcrst-img"
            onMouseEnter={() =>
              setFill({
                color: "#50A1F3",
                colorTitle: "#50A1F3",
              })
            }
            onMouseLeave={() =>
              setFill({
                color: "#8E90A6",
                colorTitle: "#555770",
              })
            }
          >
            <Newsletter
              fill={isFill.color}
              filltitle={isFill.colorTitle}
              className="outofcrst-img-link"
            />
          </Link>

          <Link
            to="/outofcrst/podcast"
            onMouseEnter={() =>
              setFillPodcast({
                color: "#50A1F3",
                colorTitle: "#50A1F3",
              })
            }
            onMouseLeave={() =>
              setFillPodcast({
                color: "#8E90A6",
                colorTitle: "#555770",
              })
            }
          >
            <Podcast
              fill={isFillPodcast.color}
              fillTitle={isFillPodcast.colorTitle}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
