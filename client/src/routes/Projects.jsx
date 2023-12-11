import React from 'react'
import "../assets/style/projects.css"
import { Button, Text } from '@nextui-org/react'

import ssPreview from "../assets/images/projects/ssPreview.png"

const studentSuccessLink = "https://studentsuccesshandbook.wpi.edu/";
const cirtusNativeLink = "https://github.com/r2pen2/CitrusNative"
const arbolesLink = "https://github.com/r2pen2/Arboles_Maui"

const cirtusProject = {
  title: "Citrus Native",
  link: cirtusNativeLink,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGLPq3kuCV1EnActxgqMWIhNwZ_g3d5-Et1OIJqTShg&s",
  previewText: "Built a mobile-friendly website for incoming freshmen at WPI to access their resources. The Student Success Handbook is designed to ensure that all students, including those from diverse backgrounds, can access and benefit from campus resources.",
  timespan: "2023",
  id: "student-success",
  mirror: false
}

const studentSuccessProject = {
  title: "WPI Student Success Handbook",
  link: studentSuccessLink,
  img: ssPreview,
  previewText: `Built an app in React Native to allow for easy, trust based expense splitting and bookkeeping. There were several iterations: a Django version, two React web apps, and finally a React Native mobile application.`,
  timespan: "2023",
  id: "citrus-native",
  mirror: true
}

const arbolesProject = {
  title: "Arboles Magicos",
  link: arbolesLink,
  img: arbolesPreview,
  previewText: "Built an app in DOTNET Maui that allows users to mark the locations of flowering trees on a public map.",
  timespan: "2023",
  id: "arboles-magicos",
  mirror: false
}

export default function Projects() {
  return (
    <div className="projects-page px-2 px-md-4 d-flex flex-column align-items-center">
      <div className="container-fluid w-100 d-flex flex-column align-items-center justify-content-center">

        <Project 
          projectData={cirtusProject} 
          textOverride={
            <p>
              Built an app in React Native to allow for easy, trust based expense splitting and bookkeeping. There were several iterations: a Django version, <a href="#citrus-react">two React web apps</a>, and finally a React Native mobile application.
            </p>
          }
        />

        <Project projectData={studentSuccessProject} />

      </div>
    </div>
  )
}

function Project({projectData, textOverride}) {
  return (
    <ProjectArticle projectId={projectData.id}>
      {projectData.mirror && <ProjectArticle.Image link={projectData.link} src={projectData.img} />}
      <div className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-6">
        <ProjectArticle.Title timespan={projectData.timespan}>
          {projectData.title}
        </ProjectArticle.Title>
        <ProjectArticle.Text>
          {textOverride ? textOverride : projectData.previewText}
        </ProjectArticle.Text>
        <ProjectArticle.VisitButton link={projectData.link} />
      </div>
      {!projectData.mirror && <ProjectArticle.Image link={projectData.link} src={projectData.img} right={true} />}
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
    <Button color="gradient" bordered onClick={() => window.open(link, "_blank")}>Visit</Button>
  )

  static Title = (titleProps) => (
      <h2 style={{color: "#EAE7DE"}} className="project-title text-center">{titleProps.children} — <span>{titleProps.timespan}</span></h2>
  )

  static Image = ({src, right, link}) => (
    <div className="col-lg-6 col-12">
      <img src={src} onClick={() => window.open(link, "_blank")} className={"project-img " + (right ? "right" : "")} alt="project-spotlight" style={{height: 350, width: "auto"}} />
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