import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <AboutPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        body={data.body}
        image1={getAsset(data.image1)}
        image2={getAsset(data.image2)}
        image3={getAsset(data.image3)}
        image4={getAsset(data.image4)}
        image5={getAsset(data.image5)}
        image6={getAsset(data.image6)}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default AboutPagePreview;
