// import React from "react";
// import pic from "../../assets/smiling.jpg";

// function AboutPage() {
//   return (
//     <div style={{ position: "relative", top: "80px" }}>
//       <img
//         src={pic}
//         alt=""
//         style={{
//           position: "relative",
//           float: "left",
//           width: "40%",
//           height: "auto",
//           padding: "0 10px 0 0",
//         }}
//       />
//       <h1>About Us</h1>
//       <p style={{ fontSize: "24px", textAlign: "justify", margin: "10px" }}>
//         Wildlife Tours is a full-stack application based on a fictitious company
//         created by Brandyn Tse. The front-end has been developed using React js
//         framework and the material UI library. Assets have been compiled from
//         royalty-free images and video. The video above was edited by me using
//         OpenShot, an open-source editor. For a demonstration of
//         crud-functionality, as well as authentication/authorization, feel free
//         to use the search and management functions found at the &quot;Book A
//         Tour&quot; section. More of my github projects may also be found{" "}
//         <a
//           href="https://github.com/battafurai-gunmetaru"
//           style={{ color: "#33ccff", textDecoration: "none" }}
//         >
//           {" "}
//           here
//         </a>
//         . If you are interested in contacting me, please refer to the form under
//         the &quot;Contact&quot; section, or connect with me through{" "}
//         <a
//           href="https://www.linkedin.com/in/brandyn-tse-085872166"
//           style={{ color: "#33ccff", textDecoration: "none" }}
//         >
//           {" "}
//           linkedIn
//         </a>
//         . Thank you!{" "}
//       </p>
//     </div>
//   );
// }

// export default AboutPage;

import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import pic from "../../assets/smiling.jpg";
// use card for linkedin and github!
// import CardComponent from "../../card/Card";

// eslint-disable-next-line no-unused-vars
function AboutPage(props) {
  // const { post } = props;

  return (
    <div style={{ position: "relative", top: "80px" }}>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${pic})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        <img style={{ display: "none" }} src={pic} alt="" />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                About Us
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Wildlife Tours is a full-stack application based on a fictitious
                company created by Brandyn Tse. The front-end has been developed
                using React js framework and the material UI library. Assets
                have been compiled from royalty-free images and video. The video
                above was edited by me using OpenShot, an open-source editor.
              </Typography>
              {/* <Link variant="subtitle1" href={pic}>
                example
              </Link> */}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

AboutPage.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutPage;
