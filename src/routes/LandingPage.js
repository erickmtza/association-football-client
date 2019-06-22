import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <section>
            <header className="hero">
                <h1>
                    <span className="association">Association</span>
                    <span>Football</span>
                </h1>
            </header>
           
           <div className="info-land assemble">
               <h2>Assemble Your Team</h2>
               <p>Pick the players you want from the big leagues for the ultimate team. Build the dream, Coach!</p>
            </div>
            <div className="info-land coaching">
                <h2>Coaching a Team?</h2>
                <p>Use our dashboard to keep track of your team's player stats and positions. Professionally.</p>
            </div> 
        </section>
    )
}