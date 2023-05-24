import React from 'react'

export const OurInfo = ({link, h1, text1,  text2, text3, text4 }) => {
  return (
    <div className={`app__footer-links_${link}`}>
        <h1 className="app__footer-headtext">{h1}</h1>
        <p className="p__opensans">{text1}</p>
        <p className="p__opensans">{text2}</p>
        <p className="p__opensans">{text3}</p>
        <p className="p__opensans">{text4}</p>
    </div>
  )
}
