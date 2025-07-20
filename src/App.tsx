import './App.css'
import NavigationBar from './components/NavigationBar'
import FooterSection from './partials/FooterSection'
import HeroSection from './partials/HeroSection'
import OurServiceSection from './partials/OurServiceSection'
import SecondSection from './partials/SecondSection'

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <OurServiceSection />
      <SecondSection />
      <FooterSection />
    </>
  )
}

export default App
