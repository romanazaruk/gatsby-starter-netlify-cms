import React from "react";
import { NowPageTemplate } from "../../templates/now-page";

const NowPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <NowPageTemplate
        title={data.title}
        description={data.description}
        book={data.reading || { blurbs: [] }}
        working={data.working || { blurbs: [] }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default NowPagePreview;
