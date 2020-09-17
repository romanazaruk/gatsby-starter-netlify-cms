import React from "react";
import { NowPageTemplate } from "../../templates/now-page";

const NowPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log(data)
  if (data) {
    return (
      <NowPageTemplate
        title={data.title}
        description={data.description}
        books={data.reading || { blurbs: [] }}
        workings={data.working || { blurbs: [] }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default NowPagePreview;
