import React from "react";
import videoBg from "../../assets/wildlifefinal.mp4";
// import { Style } from "./*.module.css";
// see if new file will change the export default message
function HomePage() {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
}

export default HomePage;
