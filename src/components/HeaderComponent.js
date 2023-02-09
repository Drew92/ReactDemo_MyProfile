import React from 'react'
import drewPic from '../assets/drewEdited.jpg'

export default function HeeaderComponent() {
  return (
    <React.Fragment>
            {/*<!-- Header/Home -->*/}
        <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
            <h1 class="w3-jumbo"><span class="w3-hide-small">I'm</span> Andrew Gayle.</h1>
            <p>Software Developer and SDET.</p>
            <img src={drewPic} alt="My pic" class="w3-image" width="992" height="1108"/>
        </header>
    </React.Fragment>
  )
}
