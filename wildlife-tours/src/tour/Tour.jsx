import React from "react";
import Tilt from "react-parallax-tilt";

// import styled from "styled-components";
// import Title from "react-vanilla-tilt";
// // .tilt {
// //   transform-style: preserve-3d;
// //   /* transform: perspective(1000px); */
// // }

function Tour() {
  //  change dimension scope of tilt??
  return (
    <div className="TourCard">
      <Tilt>
        <img
          src="https://a-z-animals.com/media/2021/05/Favorite-and-Most-Popular-Animals_-Lion.jpg"
          alt="lion"
          style={{
            width: "40%",
            height: "auto",
          }}
        />
      </Tilt>
      <Tilt>
        <img
          src="https://a-z-animals.com/media/2021/05/Favorite-and-Most-Popular-Animals_-Lion.jpg"
          alt="lion"
          style={{
            width: "40%",
            height: "auto",
          }}
        />
      </Tilt>
    </div>
  );
}

export default Tour;
