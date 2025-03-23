import { useState } from 'react'
import './App.css'
import LakersLogo from './assets/Los_Angeles_Lakers_logo.svg'
import Players from './components/Players'

function App() {
  const [showPlayers, setShowPlayers] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <img src={LakersLogo} alt="Los Angeles Lakers Logo" className="nav-logo" />
            <h1>LOS ANGELES LAKERS</h1>
          </div>
          <div className="nav-links">
            <a href="#team">Team</a>
            <a href="#schedule">Schedule</a>
            <a href="#tickets">Tickets</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h1>Welcome to Lakers Nation</h1>
          <p>17-Time NBA Champions</p>
          <a href="https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962" target="_blank" rel="noopener noreferrer">
            <button>Get Tickets</button>
          </a>
        </div>
      </section>

      <section id="team" className="section">
        {showPlayers ? (
          <Players setShowPlayers={setShowPlayers} />
        ) : (
          <>
            <h2 className="section-title">Our Team</h2>
            <div className="card-grid">
              <div className="card" onClick={() => setShowPlayers(true)}>
                <img src={LakersLogo} alt="Players" style={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '1rem' }} />
                <h3>Players</h3>
                <p>Meet our roster of talented athletes representing the purple and gold.</p>
              </div>
            </div>
          </>
        )}
      </section>

      <section id="schedule" className="section">
        <h2 className="section-title">Upcoming Games</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Next Game</h3>
            <p>Check out our next matchup and secure your seats.</p>
            <a href="https://www.nba.com/lakers/schedule" target="_blank" rel="noopener noreferrer">
              <button>View Next Game</button>
            </a>
          </div>
          <div className="card">
            <h3>Season Schedule</h3>
            <p>View our complete season schedule and plan your visits.</p>
            <a href="https://www.nba.com/lakers/schedule" target="_blank" rel="noopener noreferrer">
              <button>View Schedule</button>
            </a>
          </div>
        </div>
      </section>

      <section id="tickets" className="section">
        <h2 className="section-title">Get Your Tickets</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Season Tickets</h3>
            <p>Join the Lakers family with season tickets.</p>
            <a href="https://www.nba.com/lakers/tickets/season-ticket-members" target="_blank" rel="noopener noreferrer">
              <button>Learn More</button>
            </a>
          </div>
          <div className="card">
            <h3>Single Game</h3>
            <p>Grab tickets for individual games.</p>
            <a href="https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962" target="_blank" rel="noopener noreferrer">
              <button>Buy Now</button>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={LakersLogo} alt="Los Angeles Lakers Logo" />
              <h2>LOS ANGELES LAKERS</h2>
            </div>
            <p>17-Time NBA Champions</p>
            <div className="social-icons">
              <a href="https://twitter.com/Lakers" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg><use href="#twitter"></use></svg>
              </a>
              <a href="https://www.facebook.com/losangeleslakers" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg><use href="#facebook"></use></svg>
              </a>
              <a href="https://www.instagram.com/lakers" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg><use href="#instagram"></use></svg>
              </a>
              <a href="https://www.youtube.com/lakers" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg><use href="#youtube"></use></svg>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Los Angeles Lakers. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App