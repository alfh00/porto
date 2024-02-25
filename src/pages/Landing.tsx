import AnimBg from '../components/AnimBg'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Skills2 from '../components/Skills2'


const Landing = () => {
  return (
    <>
      
      <AnimBg />
      <Navbar />
      {/* <TickerTape /> */}
      <Hero />
      {/* <Skills /> */}
      <Skills2 />
      <Projects/>
 
    </>
  )
}
export default Landing
