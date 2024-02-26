import styled from 'styled-components'
import {Link} from 'react-scroll'
import { MdSimCardDownload } from "react-icons/md";

const Wrapper = styled.nav`
  position: absolute;
  min-width: 100%;
  padding: 0% 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;

  .nav-items {
    color: inherit;
    display: flex;
    flex-direction: row;
    gap: 27px;
    font-size: large;
  }
`

const Navbar = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/CV_Developpeur_Ali_FATHALLAH_24_2.pdf'; 
    link.download = 'CV_Developpeur_Ali_FATHALLAH_24_2.pdf';
    link.click();
  };
  return (
    <Wrapper>
      <p>
        <a href='/' className='nav-items'>
          Ali FATHALLAH
        </a>
      </p>
      <div className='nav-items'>

      <Link to="skills" smooth duration={500}>
        Skills
      </Link>
      <Link to="projects" smooth duration={500}>
        Projects
      </Link>
      <button onClick={handleDownloadCV}><MdSimCardDownload />Resume</button>
      </div>
    </Wrapper>
  )
}
export default Navbar
