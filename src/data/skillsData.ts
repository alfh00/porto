import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { DiScrum } from 'react-icons/di'
import { FaNode, FaPython, FaReact } from 'react-icons/fa'
import { IoLogoFigma } from 'react-icons/io5'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiDjango, SiFlask, SiMongodb } from 'react-icons/si'
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Skill = {
  icon: React.ElementType
  color: string
  size: string
  text: string
}

const skills: Skill[] = [

  {
    icon: FaPython,
    color: 'white',
    size: '50px',
    text: 'Python',
  },
  {
    icon: RiJavascriptFill,
    color: 'white',
    size: '50px',
    text: 'JavaScript',
  },
  {
    icon: BiLogoTypescript,
    color: 'white',
    size: '50px',
    text: 'TypeScript',
  },
  {
    icon: FaReact,
    color: 'white',
    size: '45px',
    text: 'React',
  },
  {
    icon: FaNode,
    color: 'white',
    size: '55px',
    text: 'Node.js',
  },
  {
    icon: FaGithub,
    color: 'white',
    size: '50px',
    text: 'git',
  },
  {
    icon: SiDjango,
    color: 'white',
    size: '45px',
    text: 'Django',
  },
  {
    icon: SiFlask,
    color: 'white',
    size: '50px',
    text: 'Flask',
  },
  {
    icon: SiMongodb,
    color: 'white',
    size: '50px',
    text: 'MongoDB',
  },
  {
    icon: BiLogoPostgresql,
    color: 'white',
    size: '50px',
    text: 'PostgreSQL',
  },
  {
    icon: FaAws,
    color: 'white',
    size: '50px',
    text: 'Amazon Web Service',
  },

]

export default skills
