import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function HomePage() {
  return (
    <div className="min-vh-100" style={{ background: 'black' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container py-4">
          <Link to="/" className="navbar-brand fs-3 d-flex align-items-center">
            <img src="https://img.freepik.com/free-vector/cute-unicorn-reading-book-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-4550.jpg" 
                 alt="Logo" 
                 className="me-2 rounded-circle" 
                 style={{ width: '40px', height: '40px' }}
            />
            <span>EduConnect</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz">Quizzes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-outline-light rounded-pill px-4 mx-2">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn btn-light rounded-pill px-4 text-primary">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white">
            <div className="position-relative">
            
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h1 className="display-3 fw-bold mb-4">
                  Learn & Play with 
                  <span className="text-primary"> Fun Quizzes! </span> 
                  🌟
                </h1>
                <p className="lead mb-4">Join our magical learning adventure! Take fun quizzes, earn stars, and become a knowledge superhero! Perfect for curious minds aged 8-10. 🚀</p>
              </div>
            </div>
            <div className="mb-5">
              <Link to="/register" className="btn btn-light btn-lg rounded-pill px-5 py-3 m-3 text-primary fw-bold">
                <i className="bi bi-stars me-2"></i>
                Start Your Adventure
              </Link>
              <Link to="/quiz" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3">
                <i className="bi bi-controller me-2"></i>
                Try a Quiz
              </Link>
            </div>
            <div className="d-flex align-items-center bg-white bg-opacity-10 p-3 rounded-4">
              <div className="d-flex">
                <img src="https://img.freepik.com/free-vector/cute-unicorn-reading-book-cartoon-illustration_138676-2995.jpg" 
                     className="rounded-circle" width="50" height="50" alt="Unicorn" 
                     style={{ marginRight: '-10px', border: '2px solid white' }} />
                <img src="https://img.freepik.com/free-vector/cute-dragon-reading-book-cartoon-illustration_138676-3045.jpg" 
                     className="rounded-circle" width="50" height="50" alt="Dragon" 
                     style={{ marginRight: '-10px', border: '2px solid white' }} />
                <img src="https://img.freepik.com/free-vector/cute-cat-studying-cartoon-illustration_138676-3062.jpg" 
                     className="rounded-circle" width="50" height="50" alt="Cat" 
                     style={{ marginRight: '-10px', border: '2px solid white' }} />
              </div>
              <div className="ms-4">
                <p className="mb-0">Join <strong>1,240+</strong> young explorers on their learning journey! 🎈</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <img src="https://img.freepik.com/free-vector/kids-online-lessons_52683-36818.jpg" 
                 alt="Kids Learning" 
                 className="img-fluid rounded-4 mt-5" />
           
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <h2 className="text-center text-white mb-5">Why Kids Love Our Quizzes? 🎯</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 rounded-4 shadow p-4 position-relative overflow-hidden">
              <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: 0.1 }}>
                <i className="bi bi-book display-1"></i>
              </div>
              <div className="card-body text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i className="bi bi-book fs-1 text-primary"></i>
                </div>
                <h3>Fun Learning</h3>
                <p className="text-muted">Exciting quizzes that make learning feel like playing! With cool facts and magical rewards! ✨</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 rounded-4 shadow p-4 position-relative overflow-hidden">
              <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: 0.1 }}>
                <i className="bi bi-people display-1"></i>
              </div>
              <div className="card-body text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i className="bi bi-people fs-1 text-primary"></i>
                </div>
                <h3>Learn Together</h3>
                <p className="text-muted">Join other young explorers in this magical learning adventure! 🌈</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 rounded-4 shadow p-4 position-relative overflow-hidden">
              <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: 0.1 }}>
                <i className="bi bi-graph-up display-1"></i>
              </div>
              <div className="card-body text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <i className="bi bi-graph-up fs-1 text-primary"></i>
                </div>
                <h3>Track Progress</h3>
                <p className="text-muted">Watch your knowledge grow with fun charts and magical achievements! 🏆</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Categories Section */}
      <div className="container py-5">
        <h2 className="text-center text-white mb-5">Explore Fun Categories 🎨</h2>
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div className="card border-0 rounded-4 shadow text-center p-4 h-100">
              <img src="https://img.freepik.com/free-vector/cute-astronaut-floating-space-cartoon-vector-icon-illustration_138676-3461.jpg" 
                   alt="Science" 
                   className="img-fluid mb-3 rounded-circle mx-auto" 
                   style={{ width: '120px' }} />
              <h4>Science</h4>
              <p className="text-muted mb-0">Explore space and nature! 🚀</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border-0 rounded-4 shadow text-center p-4 h-100">
              <img src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon-vector-icon-illustration_138676-2797.jpg" 
                   alt="Math" 
                   className="img-fluid mb-3 rounded-circle mx-auto" 
                   style={{ width: '120px' }} />
              <h4>Math</h4>
              <p className="text-muted mb-0">Numbers can be fun! 🔢</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border-0 rounded-4 shadow text-center p-4 h-100">
              <img src="https://img.freepik.com/free-vector/cute-unicorn-reading-book-cartoon-vector-icon-illustration_138676-4550.jpg" 
                   alt="English" 
                   className="img-fluid mb-3 rounded-circle mx-auto" 
                   style={{ width: '120px' }} />
              <h4>English</h4>
              <p className="text-muted mb-0">Words are magical! 📚</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card border-0 rounded-4 shadow text-center p-4 h-100">
              <img src="https://img.freepik.com/free-vector/cute-dragon-playing-guitar-cartoon-vector-icon-illustration_138676-3532.jpg" 
                   alt="General Knowledge" 
                   className="img-fluid mb-3 rounded-circle mx-auto" 
                   style={{ width: '120px' }} />
              <h4>General Knowledge</h4>
              <p className="text-muted mb-0">Learn amazing facts! 🌍</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container py-5">
        <div className="card border-0 rounded-4 shadow bg-primary text-white p-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 mb-4">Ready to Start Your Adventure? 🚀</h2>
              <p className="lead mb-4">Join our magical world of learning where every quiz is a new exciting journey!</p>
              <Link to="/register" className="btn btn-light btn-lg rounded-pill px-5 py-3 text-primary fw-bold">
                Start Learning Now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 border-top border-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center text-white">
              <p className="mb-0">Made with ❤️ for young learners</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add floating animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  )
}
