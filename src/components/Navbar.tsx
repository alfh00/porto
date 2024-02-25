import styled from 'styled-components'
const Wrapper = styled.nav`
  position: absolute;
  min-width: 100%;
  padding: 0% 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  .nav-items {
    color: inherit;
    display: flex;
    flex-direction: row;
    gap: 27px;
    font-size: large;
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <p>
        <a href='/' className='nav-items'>
          Ali FATHALLAH
        </a>
      </p>
      <div className='nav-items'>
        <p>Skills</p>
        <p>Work</p>
        <p>About</p>
        <p>Resume</p>
      </div>
    </Wrapper>
  )
}
export default Navbar
