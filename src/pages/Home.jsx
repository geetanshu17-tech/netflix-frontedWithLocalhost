import React from 'react'
import "./Home.css"
import bgImage from "../assets/coverpage-home.jpg"

const Home = () => {
  return (
    <>
    <div className="home-container"
        style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="sometxt">
        <h2>Unlimited movies, TV <br />shows, and more</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div className="basiclog">
         <form class="text-chat"  action="">                    
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="Email Address">
            </input>              
            <button class="send-bt" type="submit">Get Started</button>
          </form>

        </div>
    </div>
    </>
  )
}

export default Home