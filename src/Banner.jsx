import React from 'react'

const Banner = ({title,desc,link}) => {

  return (
    <div className="banner" >
      <p className="timer">timer</p>
      <p className="close">close</p>
      <div className="content">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
        <a href={link} className="link">{link}</a>
      </div>
    </div>
  )
}

export default Banner
