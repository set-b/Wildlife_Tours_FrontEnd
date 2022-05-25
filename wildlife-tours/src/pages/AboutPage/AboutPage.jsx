import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import pic from "../../assets/smiling.jpg";
import gitHubLogo from "../../assets/github.jpeg";
import linkedInLogo from "../../assets/linkedin.jpeg";
import CardComponent from "../../card/Card";

function AboutPage() {
  const gitHubPost = {
    description: "Check out more of my projects",
    link: "https://github.com/battafurai-gunmetaru",
    image: gitHubLogo,
    imageLabel: "git hub logo",
    title: "Git Hub Repository",
  };
  const linkedInPost = {
    description: "Connect with me on LinkedIn",
    link: "https://www.linkedin.com/in/brandyn-tse-085872166",
    image: linkedInLogo,
    imageLabel: "linkedin logo",
    title: "LinkedIn",
  };
  return (
    <div style={{ position: "relative", top: "80px" }}>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          // backgroundSize: "cover",
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
                above was edited using OpenShot, an open-source editor.
              </Typography>
              {/* <Link variant="subtitle1" href={pic}>
                example
              </Link> */}
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4}>
        <CardComponent post={gitHubPost} />
        <CardComponent post={linkedInPost} />
      </Grid>
    </div>
  );
}

export default AboutPage;
