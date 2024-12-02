import React from "react";
import '../assets/styles/MoreInfo.css';

export default function Rules() {

  const publicURL = process.env.PUBLIC_URL;

  return (
    <div className="more-info fade-in container d-flex flex-column align-items-start justify-content-start">
      <iframe
        src={publicURL + "/rules/normativa.pdf"}
        title="Rules PDF"
        width="100%"
        height="800px"
        className="pdf-viewer"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}
