import React from 'react'
import projects from '../data/projectsData'
import styled from 'styled-components'
import pill from '../assets/img/Pill.png'
import { VscGithub } from "react-icons/vsc"


const Projects = () => {
  return (
    <Wrapper>
        <div className='section-title projects'>
        <h4>Projects</h4>
        </div>
        <div className='projects-cards'>
        {projects.map((project, index) => {
            return (


            <div className='glassContainer project' key={index}>
                <div className='project-links'>
                    <a  href={project.github} >
                        <VscGithub className='p-icon' style={{ fontSize: '50px' }} />
                    </a>
                </div>
                <div className='project-head'>
                    <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                <div>
                    <div className='tags'>
                        {project.tech.map((tag, index)=>{
                            return (
                            <small className='tag' key={index}>#{tag}</small>
                            )
                        })}
                    </div>
                </div>
            </div>

            )
        })}
                <div className='pill'>
                <img src={pill} alt="" />
                <div className='gdt-pink'/>
              </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5rem;
overflow: hidden;
.projects-cards {
    max-width: 80%;
    position: relative;
    top: -50px;
    display: grid;
    grid-template: repeat(3, 366px) / repeat(auto-fit, minmax(233px, 3fr));
    grid-gap: 10px;
    padding: 0 6rem;
}

.project {
padding: 5%;
overflow: hidden;
height: 366px;
}
.project-links {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: all ease-in-out 0.4s;
}
.project:hover .project-links {
    opacity: 1;
}
.project-links > a {
    color: aliceblue;
    
}

.project:hover .tags{
bottom: 0;
}
.project-head {
    margin-bottom: 15px;
}
.tags {
    height: 5rem;
    position: absolute;
    bottom: -80px;
    left: 0;
    width: 100%;
    background-color: aliceblue;
    color: grey;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    padding: 10px 10px;
    transition: bottom 0.5s;
}
.tag{
    border: 1px solid grey;
    border-radius: 5px;
    padding: 3px 5px;
    height: 2em;
}
.pill {
    position: absolute;
    width: 400px;
    bottom: 40%;
    right: -200px;
  }
  @media only screen and (max-width: 820px) {
    .project {
    padding: 5%;
    }
    .projects-cards {
        padding: 0;
    }
    .section-title {
        position: relative;
      font-size: 4rem;
      bottom: 15px;
    } 
    .project:focus .project-links {
        opacity: 1;
    }
    .project:focus .tags{
        bottom: 0;
    }
    .project:active .project-links {
        opacity: 1;
    }
    .project:active .tags{
        bottom: 0;
    }

    }

`

export default Projects