import React from 'react'
import { Link } from 'react-router-dom'
import CreateSuggestion from './CreateSuggestion'


function SuggestionPage() {

  return (
    <div>
      <h1>Find Your Own</h1>
      <section className="suggestion-links">
        <Link to='/reviews'>Reviews</Link>
        <Link to="/">Home</Link>
      </section>
      <CreateSuggestion />
    </div>
  )
}

export default SuggestionPage
