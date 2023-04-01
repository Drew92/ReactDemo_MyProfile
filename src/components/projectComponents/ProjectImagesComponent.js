import React from 'react'

export default function ProjectImagesComponent({image,imageBW,altText}) {
  return (
    <React.Fragment>
        <img src={imageBW}  style={{width:'100%'}} alt={altText}
            onMouseOver={e => (e.currentTarget.src =image)}
            onTouchStart={e => (e.currentTarget.src =image )}
            onMouseOut={e => (e.currentTarget.src =imageBW )}
            onTouchEnd={e => (e.currentTarget.src =imageBW )}/>
    </React.Fragment>
  )
}
