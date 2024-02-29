import styled from 'styled-components'
import marble from '../assets/img/marble.jpg'
import dimond from '../assets/img/dimon.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <Wrapper>
      
      
      <div className='img-marble'>
        <img src={marble} alt="" />
      </div>

      <div className='full'>
        <div className='text'>
          <h1>Hello, I am Ali</h1>
          <div className='sub-text'>
            <h2>a</h2>
              <div className='flip'>
                  <ul className='flip5'>
                    <li>
                      <h2>Python</h2>
                    </li>
                    <li>
                    <h2>Django</h2>
                    </li>
                    <li>
                      <h2>Flask</h2>
                    </li>
                    <li>
                      <h2>Javascript</h2>
                    </li>
                    <li>
                      <h2>React</h2>
                    </li>
                  </ul>
              </div>
             <h2>Software Developer</h2>
          </div>
          <button>
            <Link to='skills' smooth duration={500}>Explore</Link>
          </button>
        </div>
        <div className='glassContainer one'>
          <p>alifathallah@yahoo.fr</p>
          <p>(+33) 06 13 81 96 91</p>
        </div>
              <div className='dimond'>
                <img src={dimond} alt="" />
                <div className='gdt-pink'/>
              </div>

      </div>

    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(2rem + 80px) 10% 5% 10% ;

  .full {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    gap: 2rem;
  }

  .text {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text > button {
    align-self: flex-start;
  }

  h1 {
    font-size: 3.6rem;

  }
  h2 {
    font-size: 1.75rem;
    font-weight: 200;
  }



.img-marble {
  position: relative;
  border-radius: 16px;
  height: 333px;
  width: 100%;
  overflow: hidden;
  z-index: -3;
}
.img-marble > img {
  transform: rotate('180deg');
  object-fit: cover;

}

.sub-text {
  display: flex;
  flex-direction: row;
}
.flip {
      position: relative;
      overflow: hidden;
      height: 65px;
      right: 25px;
}

  li {
    color: var(--grey-700);
    font-weight: 700;
    height: 45px;
    margin-bottom: 45px;
    list-style-type: none;
    text-align: center;
    }
  li:nth-of-type(1) {
    color: #3178c6;
  }
  li:nth-of-type(3) {
    color: #61dbfb;
  }
  li:nth-of-type(2) {
    color: #3c873a;
  }
  li:nth-of-type(4) {
    
    color: #f0db4f;
  }
  li:nth-of-type(5) {
    color: #4b8bbe;
  }

  .flip5 {
    animation: flip5 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  }


  button {
    background-color: aliceblue;
    color: #121212;
  }
  button:hover {

    background-color: transparent;
    color: aliceblue;
  }

  .one {
    position: relative;
    width: 100%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .dimond {
    position: absolute;
    width: 200px;
    bottom: 0;
    right: 70px;
  }

/* Responsive Breakpoints */
@media only screen and (max-width: 599px) {
  /* Styles for screens up to 599px (e.g., smartphones) */
  
  .full {
    position: relative;
    flex-direction: column;
  }
  
  .text {
    justify-content: flex-start;
    align-items: center;
    min-height: min-content;
    position: relative;
    top: -50px;
    
  }
  button {
    margin: 0 auto 0 auto;
  }
  .img-marble {

    position: relative;
    border-radius: 16px;
    height: 166px;
    width: 100%;
    overflow: hidden;
    top: -2rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 0.85rem;
  }
  .one {
    height: 100%;
    top: -5rem;
  }

}

@media only screen and (min-width: 768px) {
  /* Styles for screens 768px and above */
}

@media only screen and (min-width: 992px) {
  /* Styles for screens 992px and above */
}

@media only screen and (min-width: 1200px) {
  /* Styles for screens 1200px and above */
}

@keyframes flip5 {
    0% {
      margin-top: -450px;
    }
    5% {
      margin-top: -360px;
    }
    20% {
      margin-top: -360px;
    }
    25% {
      margin-top: -270px;
    }
    40% {
      margin-top: -270px;
    }
    45% {
      margin-top: -180px;
    }
    60% {
      margin-top: -180px;
    }
    65% {
      margin-top: -90px;
    }
    80% {
      margin-top: -90px;
    }
    85% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -450px;
    }
  }
`