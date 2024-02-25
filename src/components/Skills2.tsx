import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import skills from '../data/skillsData'
import { ResponsivePie } from '@nivo/pie'

const Wrapper = styled.section`

  .section-title {
    position: relative;
    bottom: -60px;
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
`

const Skills2 = () => {

  
  return (
    <Wrapper>
      <div className='section-title'>
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
        </ul>
        <div style={{height: '450px',width: '500px'}}>
          <MyResponsivePie data={data} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Skills2

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