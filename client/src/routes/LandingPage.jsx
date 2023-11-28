import React, { useState } from 'react'

import "../assets/style/landingPage.css";
import Sparkles from 'react-sparkle'

import { WLHeader, WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import { Progress, Text } from "@nextui-org/react"

import citrusLogo from "../assets/images/employers/citrusLogo.png"
import sentacaLogo from "../assets/images/employers/sentacaLogo.png"
import blueportLogo from "../assets/images/employers/blueportLogo.png"

import { Button, Card, Spacer } from '@nextui-org/react';

import { WLSlick } from '../libraries/Web-Legos/components/Content';

import pupsysImg from "../assets/images/projects/pupsysLogo.png";
import wlImg from "../assets/images/projects/weblegosLogo.png";
import { useEffect } from 'react';

import {Swoosh} from "../libraries/Web-Legos/components/Waves"

import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

const projects = [
  {
    title: "PUPSys",
    subtitle: "Singlehandedly building the computing infrastructure for Umass Chan’s PUPSys",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: pupsysImg,
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
    secondPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?"
  },
  {
    title: "Web-Legos",
    subtitle: "Building websites for individuals and businesses; clients can edit site content on their own by signing in with Google.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: wlImg,
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
    secondPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?"
  },
  {
    title: "Citrus Financial",
    subtitle: "Building websites for individuals and businesses; clients can edit site content on their own by signing in with Google.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: citrusLogo,
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
    secondPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?"
  },
]

const experience = [
  {
    position: "Chief Technology Officer",
    employer: "Citrus Financial",
    terms: "Self-Employed",
    startDate: "May 2022",
    endDate: "Present",
    description: "Working on an app aimed to revolutionize the way you track and split expenses amongst your friends, roommates, and more.",
    icon: citrusLogo,
  },
  {
    position: "Software Engineer Intern",
    employer: "Sentaca, an IMB Company",
    terms: "Internship",
    startDate: "May 2022",
    endDate: "Aug 2022",
    description: "Worked full time over the summer of 2022 setting up VPCs and Kubernetes clusters on AWS.",
    icon: sentacaLogo,
  },
  {
    position: "Product Reliability Intern",
    employer: "Blueport Commerce",
    terms: "Internship",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    description: "Worked full-time as a Product Reliability intern over the summer of 2021 writing and repairing automated tests, as well as gaining some SQL experience.",
    icon: blueportLogo,
  },
]

export default function LandingPage() {
  
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
      <section id="projects" className="icons-background py-5">
        <Swoosh flipY className="shadow-top" style={{position: "absolute", top: -1, left: 0}} color="#1E1E1E"/>
        <Spacer y={2} />
        <h1 className="header-gradient projects-header">
          Projects
        </h1>
        <Spacer y={1} />
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

  

  const Experience = () => {
    
    const ExperienceCard = ({e, last}) => {

      return (
        <div className={"d-flex flex-row align-items-center justify-content-start py-3 w-100 " + (last ? "" : "experience-bottom")}>
          <img src={e.icon} alt={e.employer} className="experience-icon"/>
          <div className="d-flex flex-column align-items-start justify-content-start">
            <Text b style={{color: '#F4FBFC'}}>{e.position}</Text>
            <Text style={{color: '#F4FBFC', margin: 0}}>{e.employer} · {e.terms}</Text>
            <Text style={{color: '#F4FBFC88', margin: 0}}>{e.startDate} - {e.endDate}</Text>
            <Text style={{color: '#F4FBFC'}}>{e.description}</Text>
          </div>
        </div>
      )
    }

    return (
      <section className="d-flex flex-column align-items-center justify-content-start px-2 px-md-5 experience-container">
        <div className="experience-column d-flex flex-column align-items-start justify-content-start px-5">
          <h1 className="header-gradient projects-header w-100">
            Employment
          </h1>
          <Spacer y={1} />
          {experience.map((e, index) => <ExperienceCard key={index} e={e} last={index === experience.length - 1}/>)}
        </div>
        {/* <Text style={{position: "absolute", fontSize: "32rem", margin: 0, padding: 0, color: "#ffffff22"}}>Formal Experience</Text> */}
      </section>
    )
  }

  const Splash = () => (
    <section id="splash" className="splash-page" >
      <Sparkles
        color={"blue"}
        count={15}
        minSize={7}
        maxSize={12}
        fadeOutSpeed={5}
        flicker={false}
      />
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
          Download Resume
        </Button>
      </hgroup>
      <Swoosh flipX className="shadow-top" style={{position: "absolute", bottom: -1, left: 0}} color="#1E1E1E"/>
    </section>
  )
  
  const Projects2 = () => {

    const ProjectPreview = ({project}) => {
      return (
        <article className="d-flex flex-column align-items-center justify-content-start w-100 h-100" style={{position: "relative",}}>
          <div className="card-top br-1 p-3">
            <WLTextV2 color="#8C8C8C" align="left">{project.description}</WLTextV2>
          </div>
          <Sparkles
            color={"gold"}
            count={5}
            minSize={7}
            maxSize={12}
            fadeOutSpeed={5}
            flicker={false}
          />
        </article>
      )
    }

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
        <section className="row w-100 card-top p-2" style={{minHeight: "100%"}}>
          <div className="col-12 col-lg-12 d-flex flex-column align-items-start justify-content-start p-4">
            <hgroup className="w-100 d-flex flex-column text-left p-0 mb-2">
              <h1 className="text-center">{project.title}</h1>
              <h2 className="text-center">{project.subtitle}</h2>
            </hgroup>
            <TextInline />
            <TextVertical />
            <Spacer y={1.25} />
            <Button bordered color="gradient" className="w-100">Learn More</Button>
          </div>
          {/* <div className="img-container col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={project.image} alt={project.title} />
          </div> */}
        </section>
      )
    
      const GraySection = () => (
        <div className="row w-100 card-bottom px-2" >
          <div className="col-12 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
            <div className="line-right px-4 d-flex flex-column align-items-center h-100 gap-2">
              <WLTextV2 color="#E6E6E6" >
                {project.firstPointText}
              </WLTextV2>
            </div>
          </div>
          {/* <div className="col-12 col-lg-6 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
            <div className="px-4 d-flex flex-column align-items-center h-100 gap-2">
              <WLTextV2 color="#E6E6E6" >
                {project.secondPointText}
              </WLTextV2>
            </div>
          </div> */}
        </div>
      )
      
      return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center project-card-container ">
          <WhiteSection />
          <GraySection />
        </div>
      )
    }

    return (
      <section id="projects" className="icons-background py-5">
        <Swoosh flipY className="shadow-top" style={{position: "absolute", top: -1, left: 0}} color="#1E1E1E"/>
        <Spacer y={2} />
        <h1 className="header-gradient projects-header">
          Projects
        </h1>
        <Spacer y={1} />
        <div className="container-fluid projects-container d-flex flex-column align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-12 col-xl-4 mb-5">
              <ProjectCard project={projects[0]}/>    
            </div>
            <div className="col-12 col-xl-4 mb-5">
              <ProjectCard project={projects[1]}/>    
            </div>
            <div className="col-12 col-xl-4 mb-5">
              <ProjectCard project={projects[2]}/>    
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div id="landing-page">
      <Splash />
      <Projects2 />
      <Experience />
    </div>
  )
}