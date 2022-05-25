import React from "react";
import pic from "../../assets/smiling.jpg";

function AboutPage() {
  return (
    <div>
      <img
        src={pic}
        alt=""
        style={{
          position: "relative",
          float: "left",
          width: "40%",
          height: "auto",
        }}
      />
      {/* <p>
        Wildlife Tours is a full-stack application based on a fictitious company
        created by Brandyn Tse. The front-end has been developed using React js
        framework and the material UI library. Assets have been compiled from
        royalty-free images and video. The video above was edited by me using
        OpenShot, an open-source editor. For a demonstration of
        crud-functionality, as well as authentication/authorization, feel free
        to use the search and management functions found at the &quot;Book A
        Tour&quot; section. If you are interested in contacting me, please refer
        to the &quot;Contact&quot; section. Thank you!{" "}
      </p> */}
    </div>
  );
}

export default AboutPage;
