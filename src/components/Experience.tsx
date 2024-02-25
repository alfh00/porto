import styled from 'styled-components'
import experiences from '../data/expData'

const Wrapper = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 90%;
  .timeline {
    position: relative;
    top: -50px;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
  .exp {
    width: 50%;
    height: 221px;
    animation: moveup 1s linear forwards;
    opacity: 0;
    padding: 1.25rem;
    overflow: hidden;
  }
  @keyframes moveup {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .exp:nth-child(2n) {
    align-self: flex-end;
  }
  .exp:nth-child(1) {
    animation-delay: 0s;
  }
  .exp:nth-child(2) {
    animation-delay: 500ms;
  }
  .exp:nth-child(3) {
    animation-delay: 1s;
  }
  .exp:nth-child(4) {
    animation-delay: 1500ms;
  }
  .exp:nth-child(5) {
    animation-delay: 2s;
  }

  .exp-head {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const Experience = () => {
  return (
    <Wrapper>
      <div className='section-title'>
        <h4>Experiences</h4>
      </div>
      <div className='timeline'>
        {experiences.map((exp, index) => {
          return (
            <div className='glassContainer exp' key={index}>
              <div className='exp-head'>
                {exp.icon && (
                  <exp.icon style={{ color: 'white', fontSize: '50px' }} />
                )}
                <h2>{exp.title}</h2>
              </div>
              <small>{exp.duration}</small>
              <p>{exp.description}</p>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
export default Experience
