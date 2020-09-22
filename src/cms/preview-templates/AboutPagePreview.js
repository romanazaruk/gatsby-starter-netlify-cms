import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <AboutPageTemplate
        imageabout={getAsset(data.imageabout.publicURL)}
        titleabout={data.titleabout}
        // body={data.body}
        image1={getAsset(data.image1.image.publicURL)}
        image2={getAsset(data.image2.image.publicURL)}
        image3={getAsset(data.image3.image.publicURL)}
        image4={getAsset(data.image4.image.publicURL)}
        image5={getAsset(data.image5.image.publicURL)}
        image6={getAsset(data.image6.image.publicURL)}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default AboutPagePreview;
