import styled from "styled-components"
import { Link } from 'react-scroll'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Footer = () => {
  return (
    <Wrapper>
        <div className="content">
            <div >
                <ul>
                <h4>Go to:</h4>
                <li>
                <Link to="home" smooth duration={500}>
                    Home
                </Link>
                </li>
                <li>
                <Link to="skills" smooth duration={500}>
                    Skills
                </Link>
                </li>
                <li>
                <Link to="projects" smooth duration={500}>
                    Projects
                </Link>
                </li>
                </ul>
            </div>
            <div className="social">
            <a href="https://github.com/alfh00"  target="_blank" style={{  color: 'rgba(0, 0, 0, 0.8)' ,fontSize: '36px' }}>
                <FaGithub />
            </a>
            <a href="https://www.codewars.com/users/alfh00"  target="_blank" style={{  color: 'rgba(0, 0, 0, 0.8)' ,fontSize: '36px' }}>
            <SiCodewars  style={{borderRadius:'50%'}}/>
            </a>
            <a href="https://www.linkedin.com/in/alfh00/"  target="_blank" style={{  color: 'rgba(0, 0, 0, 0.8)' ,fontSize: '36px' }}>
                <FaLinkedin />
            </a>
            </div>
            <div>
                <ul>
                <h4>Contact:</h4>
                    <li>email : alifathallah@yahoo.fr</li>
                    <li>phone: (+33) 06 13 81 96 91</li>
                    <li>Paris, France</li>
                </ul>
            </div>
            </div>

    </Wrapper>
  )
}

const Wrapper = styled.footer`
    .content{
    height: 50vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: aliceblue;
    color: rgba(0, 0, 0, 0.8);
    }
    ul {
        list-style: none;
    }
    ul a {
        cursor: pointer;
    }
    .social {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    @media only screen and (max-width: 599px) {
        .content {
            flex-direction: column;
        }
        ul {
            text-align: center;
        }
    }
`

export default Footer