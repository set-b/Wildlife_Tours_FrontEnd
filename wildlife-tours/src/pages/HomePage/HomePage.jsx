import React from "react";
import videoBg from "../../assets/wildlifefinal.mp4";
// import { Style } from "./*.module.css";
// see if new file will change the export default message
function HomePage() {
  return (
    <div>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        style={{
          objectFit: "contain",
          width: "80%",
          height: "auto",
          // top: "15px",
        }}
      />
    </div>
  );
}

export default HomePage;
