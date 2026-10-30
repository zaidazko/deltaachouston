import { About } from './components/About'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Quote } from './components/Quote'
import { Reviews } from './components/Reviews'
import { ServiceArea } from './components/ServiceArea'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import './App.css'

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Services />
        <Quote />
        <WhyUs />
        <About />
        <Reviews />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
