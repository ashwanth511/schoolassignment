import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Quiz() {
 
  const questions = [
    {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: "Mars",
      funFact: "Mars appears red because of iron oxide (rust) on its surface!"
    },
    {
      id: 2,
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct: "Blue Whale",
      funFact: "A blue whale's tongue can weigh as much as an elephant!"
    },
    {
      id: 3,
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correct: "7",
      funFact: "The seven continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia!"
    },
    {
      id: 4,
      question: "What is 8 * 7?",
      options: ["54", "56", "58", "60"],
      correct: "56",
      funFact: "To remember 8 * 7, think: 56 = 7 * 8 (they're consecutive numbers!)"
    },
    {
      id: 5,
      question: "Which gas do plants absorb from the air?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: "Carbon Dioxide",
      funFact: "Plants use carbon dioxide and sunlight to make their own food - that's called photosynthesis!"
    },
    {
      id: 6,
      question: "What is the main ingredient in chocolate?",
      options: ["Coffee Beans", "Cocoa Beans", "Vanilla Beans", "Jelly Beans"],
      correct: "Cocoa Beans",
      funFact: "Chocolate was first enjoyed as a bitter drink over 3,000 years ago!"
    },
    {
      id: 7,
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correct: "6",
      funFact: "Honeybees build their honeycombs in hexagon shapes because it's super efficient!"
    },
    {
      id: 8,
      question: "Which is the fastest land animal?",
      options: ["Lion", "Cheetah", "Kangaroo", "Horse"],
      correct: "Cheetah",
      funFact: "A cheetah can run as fast as a car in a city - up to 70 miles per hour!"
    },
    {
      id: 9,
      question: "What is the closest Plane to Earth?",
      options: ["Polaris", "The Sun", "Sirius", "Alpha Centauri"],
      correct: "The Sun",
      funFact: "Light from the Sun takes about 8 minutes to reach Earth!"
    },
    {
      id: 10,
      question: "Which dinosaur had three horns on its face?",
      options: ["T-Rex", "Triceratops", "Stegosaurus", "Velociraptor"],
      correct: "Triceratops",
      funFact: "Triceratops used its horns to defend itself from other dinosaurs!"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFunFact, setShowFunFact] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(new Array(questions.length).fill(false));
  const [showCompletion, setShowCompletion] = useState(false);

  const handleAnswer = (option) => {
    if (!answered[currentQuestion]) {
      setSelectedAnswer(option);
      const newAnswered = [...answered];
      newAnswered[currentQuestion] = true;
      setAnswered(newAnswered);

      if (option === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
      setShowFunFact(true);

      // Check if all questions are answered
      if (newAnswered.every(answer => answer === true)) {
        setShowCompletion(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowFunFact(false);
    setScore(0);
    setAnswered(new Array(questions.length).fill(false));
    setShowCompletion(false);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowFunFact(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer('');
      setShowFunFact(false);
    }
  };

  // Calculate percentage score
  const percentage = Math.round((score / questions.length) * 100);
  
  // Get message based on score
  const getMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a genius! 🌟";
    if (percentage >= 70) return "Great job! You're super smart! 🎉";
    if (percentage >= 50) return "Good effort! Keep learning! 👍";
    return "Keep practicing! You can do better! 💪";
  };

  return (
    <div className="min-vh-100" style={{ background: 'black' }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark">
        <div className="container py-3">
        <Link to="/" className="navbar-brand fs-3 d-flex align-items-center">
            <img src="https://img.freepik.com/free-vector/cute-unicorn-reading-book-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-4550.jpg" 
                 alt="Logo" 
                 className="me-2 rounded-circle" 
                 style={{ width: '40px', height: '40px' }}
            />
            <span>EduConnect</span>
          </Link>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">Welcome, Student!</span>
            <Link to="/" className="btn btn-outline-light rounded-pill px-4">Exit Quiz</Link>
          </div>
        </div>
      </nav>

      <div className="container py-4">
 
        {/* Progress Bar that shows the answering question number and total question number */}
        <div className="progress mb-4 rounded-pill" style={{ height: '20px' }}>
          <div 
            className="progress-bar bg-primary" 
            role="progressbar" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            aria-valuenow={((currentQuestion + 1) / questions.length) * 100}
            aria-valuemin="0" 
            aria-valuemax="100"
          >
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Completion Popup */}
        {showCompletion && (
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
               style={{ background: 'rgba(0,0,0,0.8)', zIndex: 1000 }}>
            <div className="card border-0 rounded-4 shadow-lg" style={{ maxWidth: '500px' }}>
              <div className="card-body p-5 text-center">
                <h2 className="display-4 mb-3">Quiz Complete! 🎉</h2>
                <div className="display-1 text-primary fw-bold mb-3">{percentage}%</div>
                <h3 className="mb-4">{getMessage()}</h3>
                <p className="fs-5 mb-4">You got {score} out of {questions.length} questions correct!</p>
                
                <div className="d-grid gap-3">
                  <button 
                    className="btn btn-primary btn-lg rounded-pill"
                    onClick={restartQuiz}
                  >
                    Try Again
                  </button>
                  <Link 
                    to="/" 
                    className="btn btn-outline-primary btn-lg rounded-pill"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Card */}
        <div className="card border-0 rounded-4 shadow-lg">
          <div className="card-body p-5">
            {/* Question */}
            <h2 className="mb-4 text-center">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="row g-4 justify-content-center">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="col-12 col-md-6">
                  <button
                    className={`btn btn-lg w-100 rounded-pill p-3 ${
                      selectedAnswer === option
                        ? option === questions[currentQuestion].correct
                          ? 'btn-success'
                          : 'btn-danger'
                        : 'btn-outline-primary'
                    } ${answered[currentQuestion] ? 'disabled' : ''}`}
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>

            {/* Fun Fact */}
            {showFunFact && (
              <div className="alert alert-info mt-4 rounded-4">
                <i className="bi bi-lightbulb-fill me-2"></i>
                Fun Fact: {questions[currentQuestion].funFact}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-outline-primary rounded-pill px-4 py-2"
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Previous
              </button>
              <div className="d-flex align-items-center">
                <span className="badge bg-primary rounded-pill px-4 py-2 fs-6">
                  Score: {score}/{questions.length}
                </span>
              </div>
              <button
                className="btn btn-primary rounded-pill px-4 py-2"
                onClick={nextQuestion}
                disabled={currentQuestion === questions.length - 1 || !answered[currentQuestion]}
              >
                Next
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}
export default Quiz;