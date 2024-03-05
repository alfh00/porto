import styled from 'styled-components'
import {Link} from 'react-scroll'
import { MdSimCardDownload } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {

  const [active, setActive] = useState(false)

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/CV_Developpeur_Ali_FATHALLAH_24_2.pdf'; 
    link.download = 'Resume_Dev_Ali_FATHALLAH_24_2.pdf';
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
      
      <div className='nav-mobile'>
        <div className='switch' onClick={()=> setActive(true)}>
          <MdOutlineMenu style={{fontSize: '52px'}}/>
        </div> 

          <div className={`mobile-menu glassContainer ${active && 'active'}`}>
            <div className='close-btn' onClick={()=> setActive(false)}>
              <IoMdClose style={{fontSize: '52px'}}/>
            </div>
            <a href='/' className='home'>
              ||| || |
            </a>
            <ul className='mobile-menu-items'>
              <li >
                <Link onClick={()=> setActive(false)} to="skills" smooth duration={500}>
                  Skills
                </Link>
              </li>
              <li >
                <Link onClick={()=> setActive(false)} to="projects" smooth duration={500}>
                  Projects
                </Link>
              </li>
              <li onClick={()=> setActive(false)}>
                <button onClick={handleDownloadCV}><MdSimCardDownload />Resume</button>
              </li>
            </ul>
         </div>
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
  .switch {
    display: none;
  }
  .mobile-menu {
      display: none;
  }
  @media only screen and (max-width: 820px) {
    .nav {
      display: none;
    }
    .switch {
      display: flex;
      flex-direction: row;
      justify-content: end;
      padding: 1% 5%;
    }
    .mobile-menu {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      z-index: 2;
      gap: 2rem;
      font-size: 2rem;
      background-color: #121212C8;
      top: 0;
      margin: 5%;
      opacity: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      transition: opacity 0.5s, height 0.5s, visibility 0.5s;
    }
    .mobile-menu.active {
      opacity: 1;
      height: 90%;
      visibility: visible;
    }
    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;

    }
    .mobile-menu > ul {
      text-align: center;
      list-style: none;
      list-style-position: inside;
      position: relative;
      padding-left: 0;
    }
    .mobile-menu > ul > li{
      margin-bottom: 0.75em;
      cursor: pointer;
      &:last-child{
        display: flex;
        flex-direction: row;
        justify-content: center;
        
      }
    }
  }

`