import React from "react";
import pic from "../../assets/smiling.jpg";

function AboutPage() {
  return (
    <div style={{ position: "relative", top: "80px" }}>
      <img
        src={pic}
        alt=""
        style={{
          position: "relative",
          float: "left",
          width: "40%",
          height: "auto",
          padding: "0 10px 0 0",
        }}
      />
      <p style={{ fontSize: "24px", textAlign: "justify", margin: "10px" }}>
        Wildlife Tours is a full-stack application based on a fictitious company
        created by Brandyn Tse. The front-end has been developed using React js
        framework and the material UI library. Assets have been compiled from
        royalty-free images and video. The video above was edited by me using
        OpenShot, an open-source editor. For a demonstration of
        crud-functionality, as well as authentication/authorization, feel free
        to use the search and management functions found at the &quot;Book A
        Tour&quot; section. More of my github projects may also be found{" "}
        <a
          href="https://github.com/battafurai-gunmetaru"
          style={{ color: "#33ccff", textDecoration: "none" }}
        >
          {" "}
          here
        </a>
        . If you are interested in contacting me, please refer to the form under
        the &quot;Contact&quot; section, or connect with me through{" "}
        <a
          href="https://www.linkedin.com/in/brandyn-tse-085872166"
          style={{ color: "#33ccff", textDecoration: "none" }}
        >
          {" "}
          linkedIn
        </a>
        . Thank you!{" "}
      </p>
    </div>
  );
}

export default AboutPage;
