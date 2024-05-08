import { BrowserRouter } from "react-router-dom"
import
  {
    About, Contact, Experience, Feedbacks, Hero
  ,Navbar , Tech , Works , StarsCanvas
} from './components'
  
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importing WhatsApp and LinkedIn icons


function App()
{
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0"> 
          <Contact />
          <StarsCanvas />
        </div>

<div style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 1000, // Ensure it's above other elements
        }}>
          {/* WhatsApp Icon */}
          <a href="https://wa.me/+96181447195" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '10px', color: 'inherit' }}>
            <FaWhatsapp size={40} />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/kamal-chhimi-77684b228/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FaLinkedin size={40} />
          </a>
        </div>

    </div>
    </BrowserRouter>
  )
}

export default App
