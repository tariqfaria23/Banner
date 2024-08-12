import React, { useState } from 'react'
import Banner from './Banner'

const Dashboard = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("Display Banner")

  const displayBanner = (e) => {
    setShow(!show);
    !show?setBtnText("Display off") : setBtnText("Display Banner");
    setTimeout(() => {
      setShow(false);
    }, 10000);
  }

  return (
    <>
    {show?<Banner title={title} desc={desc} link={link} />:""}
    <div className="form-container">
      <div className="form">
        <p>add banner content</p>
        <div className="title-input">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);}}
          />
        </div>
        <div className="title-input">
          <label> Description:</label>
          <textarea
            placeholder="Description..."
            onChange={(e)=>{setDesc(e.target.value);}}
          />
        </div>
        <div className="link-input">
          <label> Link:</label>
          <input
            placeholder="Enter URL"
            onChange={(e)=>{setLink(e.target.value);}}
          />
        </div>
        <button className="submit-btn" onClick={displayBanner}>{btnText}</button>
      </div>
    </div>
    </>
  )
}

export default Dashboard
