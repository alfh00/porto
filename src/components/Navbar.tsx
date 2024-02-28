import styled from 'styled-components'
import {Link} from 'react-scroll'
import { MdSimCardDownload } from "react-icons/md";

const Navbar = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/CV_Developpeur_Ali_FATHALLAH_24_2.pdf'; 
    link.download = 'CV_Developpeur_Ali_FATHALLAH_24_2.pdf';
    link.click();
  };

  return (
    <Wrapper>
      <div className='nav'>
        <a href='/' className='home'>
            ||| || |
          </a>

        <ul className='nav-items'>
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
          <li>
            <button onClick={handleDownloadCV}><MdSimCardDownload />Resume</button>
          </li>
        </ul>
      </div>
      <div className='nav-2'>
        <a href='/' className='home'>
            ||| || |
          </a>

        <ul className='nav-items'>
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
          <li>
            <button onClick={handleDownloadCV}><MdSimCardDownload />Resume</button>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
.nav {  
  position: absolute;
  width: 100%;
  padding: 0% 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

  .home {
    padding-left: 16px;
    text-decoration: none;
    font-size: 1.75rem;
    font-weight: 600;
  }
  .home > span {
    font-size: large;
  }
  .home:visited {
    color: aliceblue;
  }

  .nav-items {
    color: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: large;

  }

  .nav-items > li {
    list-style: none;
  }

  .nav-items > li:not(:last-child) {
    
    padding: 0.25rem 1rem;
    font-size: 1rem;
    min-width: 9em;
    text-align: center;
    border-radius: 8px;
  }

  .nav-items > li:not(:last-child):hover {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.3);
  
  }
  .nav-2 {
    display:none;
  }
  @media only screen and (max-width: 599px) {
    .nav {
      display: none;
    }

    .nav-2 {
      position: absolute;
      display: none;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }


  }
`