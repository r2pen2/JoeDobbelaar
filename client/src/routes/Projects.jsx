import React from 'react';
import "../assets/style/projects.css";
import { Button, Link, Spacer } from '@nextui-org/react';

// WL Images
import nicole from "../assets/images/projects/web-legos/nicoleScreenshot.png";
import ycd from "../assets/images/projects/web-legos/ycdScreenshot.png";
import btb from "../assets/images/projects/web-legos/btbScreenshot.png";
import dreams from "../assets/images/projects/web-legos/dreamsScreenshot.png";

// Arboles Images
import arbolesLogin from "../assets/images/projects/arboles/arbolesLoginScreen.jpg";
import arbolesDetail from "../assets/images/projects/arboles/arbolesDetail.png";
import arbolesMap from "../assets/images/projects/arboles/arbolesMap.jpg";
import arbolesTree from "../assets/images/projects/arboles/arbolesTree.jpg";

// Small Pics
import ssPreview from "../assets/images/projects/ssPreview.png";
import medicalTrackingPreview from "../assets/images/projects/medicalTracking.png"
import citrusV3Preview from "../assets/images/projects/citrusReact.png"

const citrusV3Link = "https://github.com/r2pen2/Citrus-V3"
const medicalTrackingLink = "https://github.com/CS3733-C22-Team-E/MedicalTracking";
const studentSuccessLink = "https://studentsuccesshandbook.wpi.edu/";
const cirtusNativeLink = "https://github.com/r2pen2/CitrusNative"
const arbolesLink = "https://github.com/r2pen2/Arboles_Maui";
const webLegosLink = "https://github.com/r2pen2/web-legos";

const webLegosProject = {
  title: "Web-Legos",
  link: webLegosLink,
  // img: "",
  previewText: `Most recently, I've been building websites for individuals and small businesses. To work more efficiently, I've created a vast library of custom assets that I call "Web Legos". The big selling point is that clients never have to contact me for small updates: they are instead able to sign-in with Google and change / add text, images, and custom objects from the site itself.`,
  timespan: "2023",
  id: "web-legos",
  mirror: false
}

const cirtusProject = {
  title: "Citrus Native",
  link: cirtusNativeLink,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGLPq3kuCV1EnActxgqMWIhNwZ_g3d5-Et1OIJqTShg&s",
  // previewText: "Built a mobile-friendly website for incoming freshmen at WPI to access their resources. The Student Success Handbook is designed to ensure that all students, including those from diverse backgrounds, can access and benefit from campus resources.",
  timespan: "2023",
  id: "citrus-native",
  mirror: true
}

const studentSuccessProject = {
  title: "WPI Student Success Handbook",
  link: studentSuccessLink,
  img: ssPreview,
  previewText: `The Student Success Handbook is a mobile-first website for incoming freshmen at WPI to access their resources. It is designed to ensure that all students, including those from diverse backgrounds, can access and benefit from campus resources.`,
  timespan: "2023",
  id: "student-success",
  mirror: false
}

const arbolesProject = {
  title: "Árboles Magicos",
  link: arbolesLink,
  // img: arbolesPreview,
  previewText: `Árboles Magicos is a nonprofit organization aimed at promoting cultural appreciation for the beauty of nature through the use of flowering trees. During the first few months of 2023, I travelled with a team of students to San Jose, where we re-wrote their "Ojeadores" app.`,
  timespan: "2023",
  id: "arboles-magicos",
  mirror: true
}


const citrusReactProject = {
  title: "Citrus V3",
  link: citrusV3Link,
  // previewText: "This is the third iteration of Citrus Financial and, as it was one of my first real projects, one of the most bloated React apps ever conceived. There's so much going on here.",
  timespan: "2022",
  id: "citrus-v3",
  img: citrusV3Preview,
  mirror: false
}

const medicalTrackerProject = {
  title: "Medical Tracker",
  link: medicalTrackingLink,
  previewText: "I worked with a team of software engineering students to build an application for employees at Brigham and Women's Hospital to better track the status and location of medical equipment. I mainly worked on the front-end, developing a native desktop application with JavaFX. My roles on the team were Assistand Lead Software Engineer and Scrum Master.",
  timespan: "2022",
  id: "medical-tracking",
  img: medicalTrackingPreview,
  mirror: true
}

export default function Projects() {
  return (
    <div className="projects-page px-2 px-md-4 d-flex flex-column align-items-center">
      <div className="container d-flex flex-column align-items-center justify-content-center">

        <Project 
          projectData={webLegosProject}
          imgOverride={
            <div className={"project-img d-flex flex-row align-items-center justify-content-center " + (!webLegosProject.mirror ? "right" : "")}>
              <div className="d-flex flex-column">
                <img src={dreams} className="wl-screenshot project-shadow" onClick={() => window.open("https://www.dreams.joed.dev/", "_blank")} style={{height: 150, width: "auto"}} alt="arboles-login" />
                <Spacer y={0.5} />
                <img src={ycd} className="wl-screenshot project-shadow" onClick={() => window.open("https://www.youcandoitgardening.com/", "_blank")} style={{height: 150, width: "auto"}} alt="arboles-map" />
              </div>
              <Spacer x={0.5} />
              <div className="d-flex flex-column">
                <img src={btb} className="wl-screenshot project-shadow" onClick={() => window.open("https://www.beyondthebelleducation.com/", "_blank")} style={{height: 150, width: "auto"}} alt="arboles-tree" />
                <Spacer y={0.5} />
                <img src={nicole} className="wl-screenshot project-shadow" onClick={() => window.open("https://www.nicolelevin.org/", "_blank")} style={{height: 150, width: "auto"}} alt="arboles-detail" />
              </div>
            </div>
          }
        />

        <Project 
          projectData={cirtusProject} 
          textOverride={
            <p>
              My mobile development magnum opus: Citrus Native is the latest version of Citrus Financial: an app in React Native to allow for easy, trust based expense splitting and bookkeeping. There were several iterations: a Django version, <Link href="#citrus-v3">two React web apps</Link>, and finally a React Native mobile application.
            </p>
          }
        />

        <Project projectData={studentSuccessProject} />

        <Project 
          projectData={arbolesProject}
          imgOverride={
            <div className={"project-img d-flex flex-row align-items-center justify-content-center " + (!arbolesProject.mirror ? "right" : "")}>
              <img src={arbolesLogin} className="project-shadow" onClick={() => window.open(arbolesProject.link, "_blank")} style={{height: 350, width: "auto"}} alt="arboles-login" />
              <Spacer x={0.5} />
              <img src={arbolesMap} className="project-shadow" onClick={() => window.open(arbolesProject.link, "_blank")} style={{height: 350, width: "auto"}} alt="arboles-map" />
              <Spacer x={0.5} />
              <img src={arbolesTree} className="project-shadow" onClick={() => window.open(arbolesProject.link, "_blank")} style={{height: 350, width: "auto"}} alt="arboles-tree" />
              <Spacer x={0.5} />
              <img src={arbolesDetail} className="project-shadow" onClick={() => window.open(arbolesProject.link, "_blank")} style={{height: 350, width: "auto"}} alt="arboles-detail" />
            </div>
          }
          textOverride={
            <p>
              <Link href="https://www.arbolesmagicos.org">Árboles Magicos</Link> is a nonprofit organization aimed at promoting cultural appreciation for the beauty of nature through the use of flowering trees. During the first few months of 2023, I travelled with a team of students to San Jose, where we re-wrote their <Link href="https://www.arbolesmagicos.org/ojeadores/">Ojeadores</Link> app in DOTNet MAUI. The new app is centered around a collaborative map, where anyone can identify a tree and place a public pin.
            </p>
          }
        />
          
        <Project 
          projectData={citrusReactProject} 
          textOverride={
            <p>
              This is the third iteration of <Link href="#citrus-native">Citrus Financial</Link> and, as it was one of my first real projects, one of the most bloated React apps ever conceived. There's so much going on here. At one point, this was a fully functional proof of concept. It doesn't differ much from <Link href="https://github.com/r2pen2/Citrus-React" target="_blank" >version 2</Link>, and I very quickly decided to shift my attention towards making a React Native mobile app for Citrus instead of creating a fourth iteration of the web app.
            </p>
          }
        />

        <Project projectData={medicalTrackerProject} />

      </div>
    </div>
  )
}

function Project({projectData, textOverride, imgOverride}) {
  return (
    <ProjectArticle projectId={projectData.id}>
      {projectData.mirror && <ProjectArticle.Image override={imgOverride} link={projectData.link} src={projectData.img} />}
      <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
        <ProjectArticle.Title timespan={projectData.timespan}>
          {projectData.title}
        </ProjectArticle.Title>
        <ProjectArticle.Text>
          {textOverride ? textOverride : projectData.previewText}
        </ProjectArticle.Text>
        <Spacer y={0.5} />
        <ProjectArticle.VisitButton link={projectData.link} />
      </div>
      {!projectData.mirror && <ProjectArticle.Image override={imgOverride} link={projectData.link} src={projectData.img} right={true} />}
    </ProjectArticle>
  )
}

class ProjectArticle extends React.Component {
  static Text = (textProps) => (
    <caption className="text-center">
      <p className="project-text-primary" style={{color: "#EAE7DE", maxWidth: 500}}>
        {textProps.children}
      </p>
    </caption>
  )

  static VisitButton = ({link}) => (
    <Button color="gradient" bordered onClick={() => window.open(link, "_blank")}>View Github</Button>
  )

  static Title = (titleProps) => (
      <h2 style={{color: "#EAE7DE"}} className="project-title text-center">{titleProps.children} — <span>{titleProps.timespan}</span></h2>
  )

  static Image = ({src, right, link, override}) => (
    <div className="col-lg-6 col-12">
      {override ? override : <img src={src} onClick={() => window.open(link, "_blank")} className={"project-img project-shadow " + (right ? "right" : "")} alt="project-spotlight" style={{height: 350, width: "auto"}} />}
    </div>
  )

  render() {
    return (
      <article id={this.props.projectId} className="row w-100 d-flex flex-row align-items-center justify-content-center py-5">
          {this.props.children}
      </article>
    )
  }
}