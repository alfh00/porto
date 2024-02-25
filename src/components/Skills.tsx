import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import skills from '../data/skillsData'

const Wrapper = styled.section`
  margin: 5%;

  .section-skills-scrollable {
    position: relative;
    top: -60px;
    overflow: hidden;

    display: flex;
    gap: 10px;
    list-style-type: none;

    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge, and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .glassContainer {
    min-width: 166px;
    min-height: 166px;
    
  }
`

const Skills = () => {
  const scrollableElementRef = useRef(null)

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const element = scrollableElementRef.current

      event.preventDefault()
      element.scrollLeft += event.deltaY
    }

    const scrollableElement = scrollableElementRef.current

    if (scrollableElement) {
      scrollableElement.addEventListener('wheel', handleWheel, {
        passive: false,
      })
    }
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])
  
  return (
    <Wrapper>
      <div className='section-title'>
        <h3>Skills</h3>
      </div>

      <ul className='section-skills-scrollable' ref={scrollableElementRef}>
        {skills.map((skill, index) => (
          <li className='glassContainer skill' key={index}>
            {skill.icon && (
              <skill.icon
                style={{ color: skill.color, fontSize: skill.size }}
              />
            )}
            <p>{skill.text}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export default Skills
