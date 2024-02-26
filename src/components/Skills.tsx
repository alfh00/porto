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
        <ul className='section-skills-icons' >
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
        <div style={{height: '450px',width: '500px'}}>
          <MyResponsivePie data={data} />
        </div>
      </div>
      <div className='ring'>
            <img src={sphere} alt="" />
            <div className='gdt-pink' />
      </div>
    </Wrapper>
  )
}

export default Skills


const Wrapper = styled.section`
position: relative;
height: 100vh;

  .section-title {
    position: relative;
    bottom: -70px;
  } 

  .skills-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

  }
  .skills-container > div {
    position: relative;

  }

  .section-skills-icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    list-style-type: none;
    max-width: 40%;
    height: 100%;

    padding: 0 2.75rem ;
  }
  .glassContainer {
    min-width: 100px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  .skill:hover {
    scale: 110%;
  }
  .skill:last-child {
    padding: 0 0;
    margin: 0 0 ;
    width: 100px;
    height: 100px;
    overflow: hidden;

  }
  .skill:last-child > img  {
    scale: 500%;
  }


  .ring {
    position: absolute;
    width: 200px;
    bottom: 80px;
    left: 70px;
    z-index: -1;
  }
  .gdt-pink {
    width: 80%;
    height: 50%;
    left: 50px;
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