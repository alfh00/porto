import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import skills from '../data/skillsData'
import { ResponsivePie } from '@nivo/pie'
import marble from '../assets/img/marble.jpg'
import sphere from '../assets/img/sphere.png'



const Skills = () => {

  
  return (
    <Wrapper>
      <div className='section-title skills'>
        <h3>Skills</h3>
      </div>

      <div className='skills-container'>
        <div className='skills-icons'>
          <ul  >
            {skills.map((skill, index) => (
              <li className='glassContainer skill' key={index}>
                {skill.icon && (
                  <skill.icon
                  style={{ color: skill.color, fontSize: skill.size }}
                  />
                  )}
                
              </li>
            ))}
            <li className='glassContainer skill' key={'10'}><img src={marble} alt="" /></li>
          </ul>
          <div className='ring'>
              <img src={sphere} alt="" />
              <div className='gdt-pink' />
          </div>
        </div>
        <div className='skills-pie' >
          <MyResponsivePie data={data} />
        </div>
      </div>

    </Wrapper>
  )
}

export default Skills


const Wrapper = styled.section`
  position: relative;



  .section-title {
    position: relative;
    bottom: -70px;
  } 

  .skills-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5%;
    width: 100%;
 
  }
  .skills-icons {
    position: relative;
    width: 40%;
    
  }
  .skills-icons > ul {
    display: grid;
    grid-template: repeat(4, 100px) / repeat(3, 100px);
    grid-gap: 10px;
  }

  .glassContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  .skill:hover {
    scale: 110%;
  }
  .skill:last-child {
    overflow: hidden;
  }
  .skill:last-child > img  {
    display: block;
    scale: 800%;
  }
  .skills-pie {
    height: 450px;
    width: 450px
  }

  .ring {
    position: absolute;
    width: 200px;
    left: -100px;
    bottom: -60px;

  }
  .gdt-pink {
    width: 80%;
    height: 50%;
    left: 50px;
  }

  @media only screen and (max-width: 599px) {
    .skills-container {
      flex-direction: column;
    }

    .section-title {
      bottom: -45px;
    } 

    .section-title h3 {
      font-size: 5rem;
      bottom: -50px;
    } 
    .skills-container {
    padding-left: 5%;
    width: 100%;
    }
    ul {
    justify-self: center;
    padding-left: 0;
    }
    .skills-pie {
      height: 350px;
      width: 340px;
    }
  }
`

type Skill = {
  id: string
  label: string
  value: number
  color: string
}

const data: Skill[] = [
  {
    "id": "Frontend",
    "label": "Frontend",
    "value": 32,
    "color": "hsl(0,0%,86%)"
  },
  {
    "id": "Backend",
    "label": "Backend",
    "value": 53,
    "color": "hsl(0,0%,83%)"
  },
  {
    "id": "CI/CD",
    "label": "CI/CD",
    "value": 10,
    "color": "hsl(0,0%,66%)"
  },

]

const MyResponsivePie = ({ data }: { data: Skill[] }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 40, bottom: 40, left: 0 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={5}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={20}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={1}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={20}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0
                ]
            ]
        }}
        colors={{ scheme: 'greys' }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 30,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: 'white',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',               
            }
        ]}
        tooltip={() => (<></>)}
    />
)