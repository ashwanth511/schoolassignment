import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://schoolassignment-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/quiz');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to connect to server');
    }
  };

  return (
 
    <div className='min-vh-100 d-flex align-items-center justify-content-center' style={{ background: 'black'}}> 
   
      <div className='col-11 col-sm-8 col-md-6 col-lg-5'>
    
        <div className='card border-0 shadow-lg rounded-4'>
      
          <div className='card-body p-4 text-center'>
            <h2 className='mb-4 fw-bold text-black'>Login !</h2>
            <p className='text-black mb-4'>Please enter your credentials to continue</p>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className='mb-4'>
  
                <div className="form-floating">
                  <input 
                    type='email' 
                    className='form-control rounded-3' 
                    id='email' 
                    placeholder='Enter Your Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor='email'>Email address</label>
                </div>
              </div>

              <div className='mb-4'>
                <div className="form-floating">
                  <input 
                    type='password' 
                    className='form-control rounded-3' 
                    id='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>

              <div className='d-flex flex-column flex-md-row gap-3 gap-md-2'>
                <button 
                  type='submit' 
                  className='btn bg-black text-white btn-xl-lg w-100 rounded-3 fw-bold'
                >
                  Login
                </button>

                <button 
                  type='button' 
                  className='btn bg-black text-white btn-lg w-100 rounded-3 fw-bold'
                >
                  Forgot Password?
                </button>
              </div>

              <div className='mt-4 text-center'>
                <p className='text-black'>
                  Don't have an account? {' '}
                  <Link to='/register' className='text-primary text-decoration-none fw-bold'>
                    Sign Up
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

export default Login
