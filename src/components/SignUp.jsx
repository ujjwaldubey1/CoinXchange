import React from 'react'

const SignUp = () => {
  return (
    <section>
    
      <h1>Sign Up</h1>
    
      <form>
        <label htmlFor="UserName">Enter Your Name</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="Password">Enter Your Password</label>
        <input type="password" placeholder="Password" />
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="password" placeholder='Confirm Your Password' />
        <input type="radio" id="Gender" />
        <label htmlFor="Email">Enter Your Email</label>
        <input type="email" placeholder="Email" />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p
  
    </section>
  )
}

export default SignUp