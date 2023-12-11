import React, { useState } from 'react'

import "../assets/style/landingPage.css";
import Sparkles from 'react-sparkle'

import { WLHeader, WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import { Link, Progress, Text } from "@nextui-org/react"

import citrusLogo from "../assets/images/employers/citrusLogo.png"
import sentacaLogo from "../assets/images/employers/sentacaLogo.png"
import blueportLogo from "../assets/images/employers/blueportLogo.png"
import empowLogo from "../assets/images/employers/empowLogo.png"
import zaniacLogo from "../assets/images/employers/zaniacLogo.png"

import { Button, Card, Spacer } from '@nextui-org/react';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { WLSlick } from '../libraries/Web-Legos/components/Content';
import GitHubIcon from '@mui/icons-material/GitHub';

import githubLogo from "../assets/images/projects/github.svg";
import pupsysImg from "../assets/images/projects/pupsysLogo.png";
import wlImg from "../assets/images/projects/weblegosLogo.png";
import { useEffect } from 'react';

import {Swoosh} from "../libraries/Web-Legos/components/Waves"

import FileDownloadIcon from '@mui/icons-material/FileDownload';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const projectsMin = [
  {
    title: "PUPSys",
    id: "pupsys",
    subtitle: "Singlehandedly building the computing infrastructure for Umass Chan's PUPSys: a system designed to predict and prevent pressure ulcers in hospital patients.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: pupsysImg,
    githubLink: "https://github.com/pupsys/PUPSyS-Native",
    firstPointText: "PUPSys is a UMass Chan Medical School project in collaboration with WPI's engineering department.",
  },
  {
    title: "Web-Legos",
    id: "web-legos",
    subtitle: "Building websites for individuals and businesses; clients can edit site content on their own by signing in with Google.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: wlImg,
    githubLink: "https://github.com/r2pen2/web-legos",
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
  },
  {
    title: "Citrus Financial",
    id: "citrus-native",
    subtitle: "Building websites for individuals and businesses; clients can edit site content on their own by signing in with Google.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa ut necessitatibus rem, ea quo nulla doloribus non at, perspiciatis vitae, praesentium fugiat eos nesciunt inventore quos eveniet ab accusantium!",
    image: citrusLogo,
    githubLink: "https://github.com/r2pen2/CitrusNative",
    firstPointText: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam atque harum pariatur sapiente hic blanditiis impedit itaque saepe, ducimus dignissimos quidem maiores. Nihil officia fugit tempora, ipsum esse modi reiciendis?",
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
    terms: "Full-Time",
    startDate: "May 2022",
    endDate: "Aug 2022",
    description: "Worked full time over the summer of 2022 setting up VPCs and Kubernetes clusters on AWS.",
    icon: sentacaLogo,
  },
  {
    position: "Product Reliability Intern",
    employer: "Blueport Commerce",
    terms: "Full-Time",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    description: "Worked full-time as a Product Reliability intern over the summer of 2021 writing and repairing automated tests, as well as gaining some SQL experience.",
    icon: blueportLogo,
  },
  {
    position: "Lead Instructor & Healthcare Supervisor",
    employer: "Empow Studios",
    terms: "Part-Time",
    startDate: "Apr 2018",
    endDate: "Sep 2020",
    description: "Worked as a Lead Instructor and Healthcare Supervisor for children grades 2-8 teaching Java, Python, game design, animation, architecture, 3D printing, and more.",
    icon: empowLogo,
  },
  {
    position: "Instructor",
    employer: "Zaniac Learning",
    terms: "Part-Time",
    startDate: "Apr 2017",
    endDate: "Feb 2018",
    description: "Worked as an Instructor for children K-8 teaching STEM through 3D printing, coding, math tutoring, and more until their closing in February 2018.",
    icon: zaniacLogo,
  },
]

export default function LandingPage() { 
  return (
    <div id="landing-page">
      <Splash />
      <Projects />
      <Experience />
    </div>
  )
}

const TopNav = () => (
  <nav style={{position: "absolute", top: 0, height: 80}} className="w-100 d-flex flex-row align-items-center justify-content-center gap-2">
    <a href="/projects">Projects</a>
    <a href="/#employment">Employment</a>
    <a href="/sites">Sites</a>
    <a href="/music">Music</a>
    <a href="/other">Other</a>
  </nav>
)

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
    {/* <TopNav /> */}
    <hgroup style={{zIndex: 10}} className="d-flex flex-column align-items-center">
      <h1 className="header-gradient" style={{fontSize: "3rem"}}>
        Joe Dobbelaar :)
      </h1>
      <Text style={{color: "#DCD5B9"}}>
        Web Developer • Software Engineer • Musician
      </Text>
      {/* <Text style={{color: "#DCD5B9"}}>
        Software Engineer
      </Text>
      <Text style={{color: "#DCD5B9"}}>
        Musician
      </Text> */}
      <div className="red-line" />
      <nav className="d-flex flex-column align-items-center justify-content-center container">
        <Link css={{color:"#DCD5B9"}} href="/#projects">Projects</Link>
        <Link css={{color:"#DCD5B9"}} href="/#employment">Employment</Link>
        <Link css={{color:"#DCD5B9"}} href="/sites">Sites</Link>
        <Link css={{color:"#DCD5B9"}} href="/music">Music</Link>
        <Link css={{color:"#DCD5B9"}} href="#contact">Contact</Link>
      </nav>
      <Spacer y={1} />
      <Button color="gradient" size="lg" className="hover-scale">
        Download Resume
      </Button>
    </hgroup>
    <Swoosh flipX className="shadow-top" style={{position: "absolute", bottom: -1, left: 0}} color="#1E1E1E"/>
  </section>
)

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
        <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-start px-md-4 px-2 py-2">
          <hgroup className="w-100 d-flex flex-column text-left p-0 mb-2">
            <h1 className="text-center project-title">{project.title}</h1>
            {/* <h2>{project.subtitle}</h2> */}
          </hgroup>
          <TextInline />
          <TextVertical />
          <Spacer y={1.25} />
          <Button bordered color="gradient" className="w-100" onClick={() => window.location = `/projects#${project.id}`}>Learn More</Button>
        </div>
        <div className="img-container col-12 col-lg-4 d-lg-flex d-none flex-column align-items-center justify-content-center">
          <img src={project.image} alt={project.title} />
        </div>
      </section>
    )
  
    const GraySection = () => (
      <div className="row w-100 card-bottom px-2" >
        <div className="col-12 col-lg-9 py-3 d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
          <div className="line-right px-md-4 px-2 d-flex flex-column align-items-center h-100 w-100 gap-2">
            <WLTextV2 color="#E6E6E6" align="left">
              {project.firstPointText}
            </WLTextV2>
          </div>
        </div>
        <div className="col-12 col-lg-3 py-3 d-none d-md-flex flex-column align-items-center justify-content-center" style={{padding: 0, position: "relative", minHeight: 90}}>
          <div className="px-4 d-flex flex-column align-items-center justify-content-center h-100 gap-2">
            <div className="github-reveal d-flex flex-row align-items-end gap-2 justify-content-end" onClick={() => window.open(project.githubLink, "_blank")} style={{position: "absolute", bottom: "-0.5rem", right: 0, cursor: "pointer"}}>
              <img src={githubLogo} alt="github" />
              <Sparkles
                color={"#f1fbfc"}
                count={5}
                minSize={7}
                maxSize={12}
                fadeOutSpeed={5}
                flicker={false}
              />
            </div>
          </div>
        </div>
        {/* <div className="col-12 d-flex flex-row align-items-center justify-content-center py-4">
        <Button bordered color="gradient" iconRight={<ChevronRightIcon style={{color:"#53585B"}}/>} onClick={() => window.location = "/projects"}>
          See All Projects
        </Button>
        </div> */}
      </div>
    )
    
    return (
      <div className="container-fluid d-flex flex-column align-items-center justify-content-start project-card-container">
        <WhiteSection />
        <GraySection />
      </div>
    )
  }

  return (
    <section id="projects" className="icons-background py-5" style={{minHeight: "100vh"}}>
      <Swoosh flipY className="shadow-top" style={{position: "absolute", top: -1, left: 0}} color="#1E1E1E"/>
      <Spacer y={2} />
      <h1 className="header-gradient projects-header">
        What I'm Working On
      </h1>
      <div className="container projects-container d-flex flex-column align-items-center justify-content-center">
        <WLSlick autoPlay autoPlaySpeed={10000}>
          {projectsMin.map((project, index) => (
            <ProjectCard key={index} project={project} />
            ))}
        </WLSlick>
      </div>
      <div className="d-flex flex-row w-100 align-items-center justify-content-center px-2 py-4" style={{maxWidth: 1200}}>
        <Button bordered color="gradient" onClick={() => window.location = "/projects"} iconRight={<ChevronRightIcon style={{color:"#11181C"}}/>} >
          See All Projects
        </Button>
      </div>
    </section>
  )
}
  
const Experience = () => {
  
  const ExperienceCard = ({e, last}) => {

    return (
      <div className={"align-items-center justify-content-md-start justify-content-center py-3 w-100 d-flex flex-md-row flex-column " + (last ? "" : "experience-bottom")}>
        <img src={e.icon} alt={e.employer} className="experience-icon"/>
        <div className="d-flex flex-column align-items-start justify-content-start text-center text-md-start">
          <div className="w-100">
            <Text b style={{color: '#F4FBFC'}}>{e.position}</Text>
            <Text style={{color: '#F4FBFC', margin: 0}}>{e.employer} · {e.terms}</Text>
            <Text style={{color: '#F4FBFC88', margin: 0}}>{e.startDate} - {e.endDate}</Text>
            <div className="d-block d-md-none">
              <Spacer y={0.5} />
            </div>
          </div>
          <Text style={{color: '#F4FBFC'}}>{e.description}</Text>
        </div>
      </div>
    )
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-start px-2 px-md-5 experience-container" id="employment">
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