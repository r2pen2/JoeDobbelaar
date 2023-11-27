import React, { useState } from 'react'

import "../assets/style/landingPage.css";
import { WLHeader, WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import { Progress, Text } from "@nextui-org/react"

import btbLogo from "../assets/images/projects/btbLogo.png"
import wlLogo from "../assets/images/projects/webLegosLogo.gif"
import ycdLogo from "../assets/images/projects/youCanDoItGardeningLogo.png"
import nlLogo from "../assets/images/projects/nicoleLevinLogo.png"
import { Button, Card, Spacer } from '@nextui-org/react';

import { WLFlickity, WLSlick } from '../libraries/Web-Legos/components/Content';

import pupsysImg from "../assets/images/projects/pupsysLogo.png";
import wlImg from "../assets/images/projects/weblegosLogo.png";
import { useEffect } from 'react';

const projects = [
  {
    title: "PUPSys",
    subtitle: "Singlehandedly building the computing infrastructure for Umass Chan’s PUPSys",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: pupsysImg,
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
    secondPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?"
  },
  {
    title: "Web-Legos",
    subtitle: "Building websites for individuals and businesses; clients can edit site content on their own by signing in with Google.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: wlImg,
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
    secondPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?"
  },

]

export default function LandingPage() {

  const [slideProgress, setSlideProgress] = useState(0);
  
  const Projects = () => {

    const ProjectCard = ({project}) => {


      const CardBodyText = () => (
        <WLTextV2 color="#8C8C8C" align="left">{project.description}</WLTextV2>
      )
      
      const TextInline = () => (
        <div className="container d-lg-block d-none" style={{padding: 0}}>
          <div className="row d-flex flex-row align-items-center justify-content-center">
            <div className="col-12">
              <CardBodyText />
            </div>
          </div>
        </div>
      )
    
      const TextVertical = () => (
        <div className="d-flex d-lg-none flex-column align-items-center justify-content-center"s>
          <CardBodyText />
        </div>
      )

      const WhiteSection = () => (
        <section className="row w-100 card-top p-2">
          <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-start p-4">
            <hgroup className="w-100 d-flex flex-column text-left p-0 mb-2">
              <h1 className="text-center">{project.title}</h1>
              <h2>{project.subtitle}</h2>
            </hgroup>
            <TextInline />
            <TextVertical />
            <Spacer y={1.25} />
            <Button bordered color="gradient" className="w-100">Learn More</Button>
          </div>
          <div className="img-container col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={project.image} alt={project.title} />
          </div>
        </section>
      )
    
      const GraySection = () => (
        <div className="row w-100 card-bottom px-2" >
          <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
            <div className="line-right px-4 d-flex flex-column align-items-center h-100 gap-2">
              <WLTextV2 color="#E6E6E6" >
                {project.firstPointText}
              </WLTextV2>
            </div>
          </div>
          <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
            <div className="px-4 d-flex flex-column align-items-center h-100 gap-2">
              <WLTextV2 color="#E6E6E6" >
                {project.secondPointText}
              </WLTextV2>
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
          <WLSlick autoPlay autoPlaySpeed={10000}>
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