import React from 'react'

const Dashboard = () => {
  return (
    <div className="form-container">
      <div className="form">
        <p>add banner content</p>
        <div className="title-input">
          <label> Title:</label>
          <input
            placeholder="Title..."
            
          />
        </div>
        <div className="title-input">
          <label> Description:</label>
          <textarea
            placeholder="Description..."
            
          />
        </div>
        <div className="link-input">
          <label> Link:</label>
          <input
            placeholder="Enter URL"
            
          />
        </div>

        <button className="submit-btn" >Submit</button>

      </div>
    </div>
  )
}

export default Dashboard
