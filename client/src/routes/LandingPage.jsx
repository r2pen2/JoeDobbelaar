import React, { useState } from 'react'

import "../assets/style/landingPage.css";
import Sparkles from 'react-sparkle'

import { WLHeader, WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import { Link, Modal, Progress, Text } from "@nextui-org/react"

import LaunchIcon from '@mui/icons-material/Launch';
import citrusLogo from "../assets/images/employers/citrusLogo.png"
import sentacaLogo from "../assets/images/employers/sentacaLogo.png"
import blueportLogo from "../assets/images/employers/blueportLogo.png"
import empowLogo from "../assets/images/employers/empowLogo.png"
import zaniacLogo from "../assets/images/employers/zaniacLogo.png"

import { Button, Card, Spacer } from '@nextui-org/react';

import ycdIcon from "../assets/images/projects/youCanDoItGardeningLogo.png"

import btbIcon from "../assets/images/projects/btbLogo.png"

import dreamsIcon from "../assets/images/projects/dreamsLogo.png"
import nicoleIcon from "../assets/images/projects/nicoleLevinLogo.png"

import pupsysImg from "../assets/images/projects/pupsysLogo.png";
import wlImg from "../assets/images/projects/weblegosLogo.png";

import {Swoosh} from "../libraries/Web-Legos/components/Waves"

import ProjectsPage from './Projects';

const experience = [
  {
    position: "Chief Technology Officer",
    employer: "Citrus Financial",
    terms: "Self-Employed",
    startDate: "May 2022",
    endDate: "Present",
    description: "Started a company with some friends around a mobile app aimed at simplifying how friends, couples, and roommates split shared expenses. Built the app alone in React Native with Google Firebase and Express.js as the backend. Spoke with possible investors but, ultimately, my partners graduated and their priorities shifted.",
    icon: citrusLogo,
  },
  {
    position: "Software Engineer",
    employer: "UMass Chan Medical School",
    terms: "Contract Worker",
    startDate: "April 2023",
    endDate: "Present",
    description: "Single-handedly building the computing infrastructure for UMass Chan’s PUPSys: a system for preventing pressure ulcers in hospital patients. Ensuring HIPAA compliant database.",
    icon: pupsysImg,
  },
  {
    position: "Software Engineer Intern",
    employer: "Sentaca, an IMB Company",
    terms: "Full-Time",
    startDate: "May 2022",
    endDate: "Aug 2022",
    description: "Created virtual machines and networks using AWS CloudFormation. Learned to build Kubernetes clusters. Laid foundation for the migration of a monolithic software to a cloud-based microservices architecture. Hands-on experience with AWS cloud computing technologies and design principles.",
    icon: sentacaLogo,
  },
  {
    position: "Product Reliability Intern",
    employer: "Blueport Commerce",
    terms: "Full-Time",
    startDate: "Jun 2021",
    endDate: "Aug 2021",
    description: "Wrote and repaired automated tests in C#, ensuring that all code in production was bug-free. Gained some SQL experience. Became familiar with Agile Scrum methodology, code documentation best practices, and other aspects of team development.",
    icon: blueportLogo,
  },
  {
    position: "Lead Instructor & Healthcare Supervisor",
    employer: "Empow Studios",
    terms: "Part-Time",
    startDate: "Apr 2018",
    endDate: "Sep 2020",
    description: "Worked as a Lead Instructor and Healthcare Supervisor for children grades 2-8 teaching Java, Python, game design, animation, 3D printing, and more. Was the only instructor for the “Python Advanced Team,” a class on program design concepts like team planning, git usage, and code documentation.",
    icon: empowLogo,
  },
  {
    position: "Instructor",
    employer: "Zaniac Learning",
    terms: "Part-Time",
    startDate: "Apr 2017",
    endDate: "Feb 2018",
    description: "Taught STEM through 3D printing, coding, math tutoring, and more to children K-8, until their closing in February 2018.",
    icon: zaniacLogo,
  },
]

export default function LandingPage() { 

  const [sitesModalOpen, setSitesModalOpen] = useState(false);

  return (
    <div id="landing-page">
      <SitesModal open={sitesModalOpen} setOpen={setSitesModalOpen} />
      <Splash setSitesModalOpen={setSitesModalOpen}/>
      <Projects />
    </div>
  )
}

const Splash = ({setSitesModalOpen}) => (
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
        Joe Dobbelaar :)
      </h1>
      <Text style={{color: "#DCD5B9"}}>
        Web Developer • Software Engineer • Musician
      </Text>
      <div className="red-line" />
      <nav className="d-flex flex-column align-items-center justify-content-center container">
        <Link css={{color:"#DCD5B9"}} href="/#projects">Projects</Link>
        <Link css={{color:"#DCD5B9"}} href="/#employment">Employment</Link>
        <Link css={{color:"#DCD5B9"}} onClick={() => setSitesModalOpen(true)}>Sites</Link>
        <Link css={{color:"#DCD5B9"}} href="/music">Music</Link>
        <Link css={{color:"#DCD5B9"}} href="#contact">Contact</Link>
      </nav>
      <Spacer y={1} />
      <Button color="gradient" size="lg" className="hover-scale" onClick={() => window.open("/resume", "_blank")}>
        Download Resume
      </Button>
    </hgroup>
    <Swoosh flipX className="shadow-top" style={{position: "absolute", bottom: -1, left: 0}} color="#1E1E1E"/>
  </section>
)

const Projects = () => {

  return (
    <section id="projects" className="icons-background py-5" style={{minHeight: "100vh"}}>
      <Swoosh flipY className="shadow-top" style={{position: "absolute", top: -1, left: 0}} color="#1E1E1E"/>
      <Spacer y={2} />
      <h1 className="header-gradient projects-header">
        Past and Present Projects
      </h1>
      <ProjectsPage />
      
      <Experience />
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
    </section>
  )
}

function SitesModal({open, setOpen}) {
  return (
    <Modal
      closeButton
      className="mx-2"
      open={open}
      blur
      onClose={() => setOpen(false)}
    >
      <Modal.Header>
        <Text h3 size="$md" id="modal-title">
          I build websites for people! Check it out :)
        </Text>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          {sites.map((site, i) => (
                      <div className="mt-2" key={i}>
                      <Card 
                        isHoverable 
                        isPressable
                        variant="bordered" 
                        onPress={() => window.open(site.href, "_blank")}
                        css={{
                          flex: 1,
                        }}
                      >
                        <Card.Body>
                          <div className="d-flex flex-row align-items-center justify-content-space-between">
                            {site.icon}
                            <div className="d-flex flex-column align-items-start justify-content-center w-100">
                              <Text b>
                                {site.title}
                              </Text>
                            </div>
                            <LaunchIcon />
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex flex-row align-items-center justify-content-center w-100">
          <Button auto flat color="error" onPress={() => setOpen(false)} >
              Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


const sites = [
  {
    title: "Beyond The Bell Education",
    href: "https://www.beyondthebelleducation.com/",
    icon: <img src={btbIcon} alt="btb-icon" style={{marginRight: "1rem", height: 50 , width: "auto"}} />
  },
  {
    title: "You Can Do It Gardening",
    href: "https://www.youcandoitgardening.com/",
    icon: <img src={ycdIcon} alt="ycd-icon" style={{marginRight: "1rem", height: 50 , width: "auto"}} />
  },
  {
    title: "Nicole Levin",
    href: "https://www.nicolelevin.org/",
    icon: <img src={nicoleIcon} alt="nicole-icon" style={{marginRight: "1rem", height: 50 , width: "auto"}} />
  },
  {
    title: "Talk About Dreams",
    href: "https://www.dreams.joed.dev/",
    icon: <img src={dreamsIcon} alt="dreams-icon" style={{marginRight: "1rem", height: 50 , width: "auto"}} />
  },
]