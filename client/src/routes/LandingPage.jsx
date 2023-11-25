import React, { useState } from 'react'

import "../assets/style/landingPage.css";
import { WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import btbLogo from "../assets/images/projects/btbLogo.png"
import wlLogo from "../assets/images/projects/webLegosLogo.gif"
import ycdLogo from "../assets/images/projects/youCanDoItGardeningLogo.png"
import nlLogo from "../assets/images/projects/nicoleLevinLogo.png"
import { Button, Card, Spacer } from '@nextui-org/react';

import greenBg from "../assets/images/projectBackgrounds/green.png"

const projects = [
  {
    title: "Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    icon: null,
    backgroundImage: greenBg,
    previewColor: "green"
  },

]

export default function LandingPage() {
  
  const [currentProject, setCurrentProject] = useState(0)

  const Projects = () => {

    const SelectedProject = ({project}) => {
      return (
        <div className="col-8 h-100 px-3">
          <div 
            className="d-flex flex-column align-items-center justify-content-center br-1 h-100 w-100"
          >
            <WLHeaderV2>
              {project.title}
            </WLHeaderV2>
            <WLTextV2>
              {project.description}
            </WLTextV2>
          </div>
        </div>
      )
    }

    return (
      <section id="icons" className="icons-background">
        <WLHeaderV2 style={{color: "white"}}>
          My Projects
        </WLHeaderV2>
        <div className="container projects-container d-flex flex-column align-items-center justify-content-center">
          <div className="row w-100" style={{height: "500px"}}>
            <SelectedProject project={projects[currentProject]}/>
            <div
              className="col-4 h-100 px-3"
              style={{
              }}
            >
              {projects.map((project, index) => (
                <Card
                  key={index}
                  isPressable
                  isHoverable
                  className="br-1 w-100 mb-3"
                  style={{
                    height: "80px",
                    backgroundColor: project.previewColor
                  }}
                >
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div id="landing-page">
      <section id="splash" className="splash-page">
        <WLHeaderV2 style={{
            textGradient: "90deg, #DCD5B9 0%, #E6A245 100%",
        }}>
          Joe Dobbelaar
        </WLHeaderV2>
        <div className="red-line" />
        <WLTextV2>
          Web Developer
        </WLTextV2>
        <WLTextV2>
          Software Engineer
        </WLTextV2>
        <WLTextV2>
          Computer Science Student
        </WLTextV2>
        <Spacer y={1} />
        <Button color="gradient" size="lg" >
          View Projects
        </Button>
      </section>
      <Projects />
    </div>
  )
}