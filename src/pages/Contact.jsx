// its just a about us kind of page with a small contact us thing in it

import React from 'react'
import Navbar from './Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Tell us more and we'll find the best solution for you</p>
      <input type="text" placeholder='Describe your issue' id='issue'/>
      <label htmlFor="issue"></label>
      <div className="Quick-Links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 20a8 8 0 110-16 8 8 0 010 16zM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm8.773-4.91l.409 6.546h1.636l.41-6.545h-2.455zM12 14.865a1.227 1.227 0 110 2.454 1.227 1.227 0 010-2.454z" clip-rule="evenodd"></path>
            </svg>
            <a href="#">Contact Grievances in India</a></li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M17 10V7A5 5 0 007 7v3H5v12h14V10zM9 7a3 3 0 016 0v3H9zm8 13H7v-8h10z"></path>
      <path d="M11 14h2v4h-2z"></path>
            </svg>
            <a href="#">Reset password</a></li>
          <li>
            <svg width="16" height="16" viewBox="0 0 16 16">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 2C0.335786 2 0 2.33579 0 2.75V12.25C0 13.2165 0.783501 14 1.75 14H14.25C15.2165 14 16 13.2165 16 12.25V2.75C16 2.33579 15.6642 2 15.25 2H0.75ZM8 8.00978L2.76865 3.5H13.2313L8 8.00978ZM8.4897 9.56806L14.5 4.38677V12.25C14.5 12.3881 14.3881 12.5 14.25 12.5H1.75C1.61193 12.5 1.5 12.3881 1.5 12.25V4.38677L7.5103 9.56806L8 9.99022L8.4897 9.56806Z" fill="black"></path>
            </svg>
            <a href="#">Update email</a></li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></path>
      <path d="M11.89 14.72a1.47 1.47 0 101 .43 1.39 1.39 0 00-1-.43zM14.09 7a4.58 4.58 0 00-1.91-.38 4.6 4.6 0 00-2 .42 3.52 3.52 0 00-2 2.73h2.31A1.21 1.21 0 0111 9a1.81 1.81 0 011-.25 1.69 1.69 0 011 .28.82.82 0 01.38.67 1 1 0 01-.24.62 4.36 4.36 0 01-1 .73A3.27 3.27 0 0011 12.16a2.94 2.94 0 00-.31 1.43v.31h2.27v-.19a1.25 1.25 0 01.22-.68 2.83 2.83 0 01.92-.75 4.36 4.36 0 001.35-1.14 2.31 2.31 0 00.46-1.45 2.83 2.83 0 00-.47-1.62A3.19 3.19 0 0014.09 7z"></path>
            </svg>
            <a href="#">Get help signing in</a></li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v2H4zm0 12v-8h16v8z"></path>
      <path d="M15 14h3v2h-3z"></path>
            </svg>
            <a href="#">Update payment method</a></li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M20 3.5v1.197L4 8.254V7.5H2v8h2v-.754l1 .223V18.5c0 .459.313.858.757.971l4 1a1 1 0 001.042-.371l2.471-3.293L20 18.301V19.5h2v-16h-2zM9.598 18.369L7 17.719v-2.307l4.127.918-1.529 2.039zM4 12.697v-2.394l16-3.557v9.508L4 12.697z"></path>
            </svg>
            <a href="#">Request TV shows or movies</a></li>
        </ul>
      </div>
      <div className="footer">
        <div className="footer-content">
          <select name="select-lang" id="select-lang">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
          <p><a href="#">Terms of Use</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Help Center</a></p>
          <p><a href="#">Cookie Preferences</a></p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact