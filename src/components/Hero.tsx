import styled from 'styled-components'

const Wrapper = styled.section`
  height: 100vh;

  padding: 10% 10%;
  .full {
    display: flex;
    flex-direction: row;
    height: 100%;
    min-width: 100%;
  }

  div {
    width: 50%;
    display: felx;
    flex-direction: column;
    align-items: center;
  }
  .hero-img {
    background-color: aliceblue;
    object-fit: cover;
    scale: 0.75;
    border-radius: 50%;
  }
  .text {
    height: 100%;
    width: 100%;
    display: flex;
    font-size: 1.75em;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    margin-bottom: 2rem;
  }

  @media screen {
  }

  
`

const Hero = () => {
  return (
    <Wrapper>
      <div className='full'>
        <div className='text'>
          <h1>I am Ali FATHALLAH</h1>
          <h2>Developpeur Python, Javascript</h2>
          <button>Explore</button>
        </div>
        <div className='hero-img'></div>
      </div>
    </Wrapper>
  )
}
export default Hero
