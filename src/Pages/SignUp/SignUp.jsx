import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    Class: '',
    Section: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
 
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  return (

    <div className='min-vh-100 d-flex align-items-center justify-content-center' 
         style={{ background: 'black'}}> 
      

      <div className='col-11 col-sm-8 col-md-6 col-lg-5'>
        <div className='card border-0 shadow-lg rounded-4'>
          <div className='card-body p-4'>
            
            {/* Header section */}
            <div className='text-center mb-4'>
              <h2 className='fw-bold text-black'>Create Account</h2>
              <p className='text-muted'>Start your learning journey today</p>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name input */}
              <div className='mb-3'>
                <div className="form-floating">
                  <input 
                    type='text' 
                    className='form-control rounded-3' 
                    id='name' 
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='name'>Full Name</label>
                </div>
              </div>

              <div className='d-flex me-8'>
                {/* Age input */}
                <div className='col-md-4 mb-3 me-1'>
                  <div className="form-floating">
                    <input 
                      type='number' 
                      className='form-control rounded-3' 
                      id='age' 
                      placeholder='Your age'
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor='age'>Age</label>
                  </div>
                </div>

                {/* Class input */}
                <div className='col-md-4 mb-3 me-1'>
                  <div className="form-floating">
                    <select
                      className='form-select rounded-3'
                      id='Class'
                      value={formData.Class}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                    </select>
                    <label htmlFor='Class'>Class</label>
                  </div>
                </div>

                <div className='col-md-4 mb-3 me-1'>
                  <div className="form-floating">
                    <select
                      className='form-select rounded-3'
                      id='Section'
                      value={formData.Section}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Section</option>
                      <option value="A">Section A</option>
                      <option value="B">Section B</option>
                      <option value="C">Section C</option>
                      <option value="D">Section D</option>
                    </select>
                    <label htmlFor='Section'>Section</label>
                  </div>
                </div>
              </div>

              {/* Phone input */}
              <div className='mb-3'>
                <div className="form-floating">
                  <input 
                    type='number' 
                    className='form-control rounded-3' 
                    id='phone' 
                    placeholder='Your phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='phone'>Phone Number</label>
                </div>
              </div>

              {/* Email input */}
              <div className='mb-3'>
                <div className="form-floating">
                  <input 
                    type='email' 
                    className='form-control rounded-3' 
                    id='email' 
                    placeholder='name@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='email'>Email address</label>
                </div>
              </div>

              {/* Password input */}
              <div className='mb-3'>
                <div className="form-floating">
                  <input 
                    type='password' 
                    className='form-control rounded-3' 
                    id='password' 
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>

              {/* Confirm Password input */}
              <div className='mb-4'>
                <div className="form-floating">
                  <input 
                    type='password' 
                    className='form-control rounded-3' 
                    id='confirmPassword' 
                    placeholder='Confirm password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                </div>
              </div>

              <div className='mb-4 d-flex'>
                <div className="form-check align-items-center">
                  <input 
                    type='checkbox' 
                    className='form-check-input me-2' 
                    id='Agree'
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    required
                  />
                  <label className='form-check-label text-black' htmlFor='Agree'>
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <div className='d-grid gap-2'>
                <button 
                  type='submit' 
                  className='btn bg-black text-white btn-lg rounded-3 fw-bold'
                >
                  Create Account
                </button>
              </div>

              {/* Login link */}
              <div className='mt-4 text-center'>
                <p className='text-black'>
                  Already have an account? {' '}
                  <Link to='/login' className='text-primary text-decoration-none fw-bold'>
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
