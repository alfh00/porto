import React from 'react'
import projects from '../data/projectsData'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
.projects {
    max-width: 80%;
    position: relative;
    top: -50px;
    display: grid;
    grid-template: repeat(3, 366px) / repeat(auto-fit, 233px);
    grid-gap: 10px;
}

.project {
padding: 5%;
overflow: hidden;
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
`

const Projects = () => {
  return (
    <Wrapper>
        <div className='section-title'>
        <h4>Projects</h4>
        </div>
        <div className='projects'>
        {projects.map((project, index) => {
            return (
            <div className='glassContainer project' key={index}>
                <div className='project-head'>
                    <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                <div className='tags'>
                    {project.tech.map((tag, index)=>{
                        return <small className='tag' key={index}>#{tag}</small>
                    })}
                </div>
            </div>
            )
        })}
        </div>
    </Wrapper>
  )
}

export default Projects