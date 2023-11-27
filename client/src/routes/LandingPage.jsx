import React, { useState } from 'react'

import "../assets/style/landingPage.css";
import { WLHeader, WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import { Text } from "@nextui-org/react"

import btbLogo from "../assets/images/projects/btbLogo.png"
import wlLogo from "../assets/images/projects/webLegosLogo.gif"
import ycdLogo from "../assets/images/projects/youCanDoItGardeningLogo.png"
import nlLogo from "../assets/images/projects/nicoleLevinLogo.png"
import { Button, Card, Spacer } from '@nextui-org/react';

import { WLFlickity, WLSlick } from '../libraries/Web-Legos/components/Content';

const projects = [
  {
    title: "PUPSys",
    description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    icon: null,
  },
  {
    title: "Web-Legos",
    description1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    icon: null,
  },

]

export default function LandingPage() {
  
  const [currentProject, setCurrentProject] = useState(0)

  const Projects = () => {

    const ProjectCard = ({project}) => {
      
      console.log(project)

      const WhiteSection = () => (
        <section id="psychotherapy" className="row w-100 card-top p-2">
          <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-start py-2">
            <hgroup className="w-100 d-flex flex-column align-items-center align-items-md-start">
              <h1>{project.title}</h1>
              <h2>{project.subtitle}</h2>
            </hgroup>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
            {/* <img src={chair} alt="chair" className="chair" /> */}
          </div>
        </section>
      )
    
      const GraySection = () => (
        <div className="row w-100 card-bottom px-2" >
          <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
            <div className="line-right px-4 d-flex flex-column align-items-center h-100 gap-2">
              {/* <WLTextV2 color="#E6E6E6" firestoreId="social-worker-body" editable={userCanEditText} /> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
            <div className="px-4 d-flex flex-column align-items-center h-100 gap-2">
              {/* <WLTextV2 color="#E6E6E6" firestoreId="gestalt-body" editable={userCanEditText}/> */}
            </div>
          </div>
        </div>
      )
      
      return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center project-card-container">
          <WhiteSection />
          <GraySection />
        </div>
      )
    }

    return (
      <section id="icons" className="icons-background">
        <h1 className="header-gradient">
          My Projects
        </h1>
        <div className="container projects-container d-flex flex-column align-items-center justify-content-center">
          <WLSlick>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </WLSlick>
        </div>
      </section>
    )
  }

  const baseParallaxMultipier = 0.02
  const parallaxLayerMultiplier = 1.05

  const [parallaxCoordinates, setParallaxCoordinates] = useState({x: window.screen.width/2, y: 850/2})

  function handleMouseOver(e) {
    setParallaxCoordinates({
      x: (e.pageX - window.screen.width/2) * baseParallaxMultipier,
      y: (e.pageY - 850/2) * baseParallaxMultipier
    })
  }

  return (
    <div id="landing-page">
      <section id="splash" className="splash-page" >
        <hgroup style={{zIndex: 10}} className="d-flex flex-column align-items-center">
          <h1 className="header-gradient" style={{fontSize: "3rem"}}>
            Joe Dobbelaar
          </h1>
          <div className="red-line" />
          <Text style={{color: "#DCD5B9"}}>
            Web Developer
          </Text>
          <Text style={{color: "#DCD5B9"}}>
            Software Engineer
          </Text>
          <Text style={{color: "#DCD5B9"}}>
            Musician
          </Text>
          <Spacer y={1} />
          <Button color="gradient" size="lg" className="hover-scale">
            View Projects
          </Button>
        </hgroup>
      </section>
      <Projects />
    </div>
  )
}