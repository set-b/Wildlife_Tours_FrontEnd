import React from "react";
import videoBg from "../../assets/wildlifefinal.mp4";

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
        }}
      />
    </div>
  );
}

export default HomePage;
