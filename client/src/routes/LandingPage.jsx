import React from 'react'

import "../assets/style/landingPage.css";
import { WLHeaderV2, WLTextV2 } from "../libraries/Web-Legos/components/Text";

import btbLogo from "../assets/images/projects/btbLogo.png"
import wlLogo from "../assets/images/projects/webLegosLogo.gif"
import ycdLogo from "../assets/images/projects/youCanDoItGardeningLogo.png"
import nlLogo from "../assets/images/projects/nicoleLevinLogo.png"

const projects = [
  {
    title: "Web-Legos",
    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam facilis ipsa minus atque, labore veniam iusto delectus, excepturi at debitis minima vitae, fugit autem id? Enim mollitia animi explicabo.",
    icon: wlLogo,
  },
  {
    title: "Beyond The Bell Education",
    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam facilis ipsa minus atque, labore veniam iusto delectus, excepturi at debitis minima vitae, fugit autem id? Enim mollitia animi explicabo.",
    icon: btbLogo,
  },
  {
    title: "You Can Do It Gardening",
    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam facilis ipsa minus atque, labore veniam iusto delectus, excepturi at debitis minima vitae, fugit autem id? Enim mollitia animi explicabo.",
    icon: ycdLogo,
  },
  {
    title: "Nicole Levin",
    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam facilis ipsa minus atque, labore veniam iusto delectus, excepturi at debitis minima vitae, fugit autem id? Enim mollitia animi explicabo.",
    icon: nlLogo,
  },
]

export default function LandingPage() {
  
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
      </section>
      <section id="icons" className="icons-background">
        <div className="container projects-container">
          <div className="row">
            {projects.map((project, index) => (
              <article className="col-lg-3 col-md-4 col-6">
                <img src={project.icon} alt={`${project.title} Icon`} />
                <h1>
                  {project.title}
                </h1>
                <caption>
                  {project.caption}
                </caption>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
