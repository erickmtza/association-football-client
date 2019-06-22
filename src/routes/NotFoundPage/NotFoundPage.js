import React from 'react'
import { Link } from 'react-router-dom'

import './NotFoundPage.css'

export default function NotFoundPage() {
    return (
        <section className="not-found">
            <h1 className="page-not-found">404 - Page not found</h1>
            <p>Try going back to your previous page or click <Link to="/" className="home-text">HOME</Link></p>
        </section>
    )
}