import React, { useState } from 'react'
import axios from 'axios'

function CreateReview(props) {
  const [beerName, setBeerName] = useState("")
  const [userThoughts, setUserThoughts] = useState("")
  const [origin, setOrigin] = useState("")
  const [rating, setRating] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const fields = {
      beerName,
      userThoughts,
      origin,
      rating,
    }

    const airTableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/beerstorage`

    await axios.post(
      airTableUrl,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    )
    props.setFetchReviews(!props.fetchReviews)

    setBeerName("")
    setOrigin("")
    setRating("")
    setUserThoughts("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="beerName"></label>
      <input
        name="beerName"
        type="text"
        placeholder="Beer Name"
        value={beerName}
        onChange={(e) => setBeerName(e.target.value)}
      />
      <label htmlFor="userThoughts"></label>
      <input
        name="userThoughts"
        type="text"
        placeholder="Input Thoughts"
        value={userThoughts}
        onChange={(e) => setUserThoughts(e.target.value)}
        />
      <label htmlFor="origin"></label>
      <input
        name="origin"
        type="text"
        placeholder="Beer Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        />
      <label htmlFor="rating"></label>
      <input
        name="rating"
        type="text"
        placeholder="Beer Rating out of 5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Submit Beer Review</button>
    </form>

  )
}

export default CreateReview