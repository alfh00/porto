import styled from 'styled-components'
import marble from '../assets/img/marble.jpg'
import dimond from '../assets/img/dimon.png'

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
          <button>Contact</button>
        </div>
        <div className="abstract">
          <div className='one glassContainer'></div>
          <div className='dimond'>
            <img src={dimond} alt="" />
            <div className='gdt-pink'/>
          </div>

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

.abstract {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.one {
  width: 100%;
  border-radius: 16px;
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

  @keyframes flip2 {
    0% {
      margin-top: -180px;
    }
    5% {
      margin-top: -90px;
    }
    50% {
      margin-top: -90px;
    }
    55% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -180px;
    }
  }

  @keyframes flip3 {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  @keyframes flip4 {
    0% {
      margin-top: -360px;
    }
    5% {
      margin-top: -270px;
    }
    25% {
      margin-top: -270px;
    }
    30% {
      margin-top: -180px;
    }
    50% {
      margin-top: -180px;
    }
    55% {
      margin-top: -90px;
    }
    75% {
      margin-top: -90px;
    }
    80% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -360px;
    }
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
  .dimond {
    position: absolute;
    width: 200px;
    top: 100px;
    right: 20px;
  }

`