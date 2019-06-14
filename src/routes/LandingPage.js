import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <section>
            <header className="hero">
                <h1><span>Association</span> Football</h1>
            </header>
           
           <div className="info-land">
               <h2>ASSEMBLE YOUR TEAM</h2>
               <p>Pick the players you want from the big leagues for the ultimate team.</p>
            </div>
            <div className="info-land">
                <h2>Coaching a Team?</h2>
                <p>Use our dashboard to keep track of your team. Professionally.</p>
                <p>Img placeholder</p>
            </div> 
        </section>
    )
}