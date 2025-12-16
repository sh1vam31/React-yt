import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div>
            <Link to="/contact/police">Police Number</Link>
            <Link to="/contact/medical">Medical Number</Link>
        </div>
        <h1>Contact Page</h1>
    </div>
  )
}

export default Contact