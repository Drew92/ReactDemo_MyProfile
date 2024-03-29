import React from 'react'
import drewPic from '../assets/drewEdited.jpg'

export default function SidebarComponent() {
  return (
    <React.Fragment>
        {/* Icon Bar (Sidebar - hidden on small screens) -->*/}
        <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
            {/*<!-- Avatar image in top left corner -->*/}
            <img src={drewPic} style={{width:'100%'}} alt="Home"/>
            <a href="#home" class="w3-bar-item w3-button w3-padding-large w3-black">
            <i class="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
            </a>
            <a href="#about" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
            </a>
            <a href="#projects" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-code w3-xxlarge"></i>
            <p>PROJECTS</p>
            </a>
            <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i class="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
            </a>
        </nav>

      
        {/*<!-- Navbar on small screens (Hidden on medium and large screens) -->*/}
        <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
            <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a href="#home" class="w3-bar-item w3-button" style={{width:'25% !important'}}>HOME</a>
            <a href="#about" class="w3-bar-item w3-button" style={{width:'25% !important'}}>ABOUT</a>
            <a href="#projects" class="w3-bar-item w3-button" style={{width:'25% !important'}}>PROJECTS</a>
            <a href="#contact" class="w3-bar-item w3-button" style={{width:'25% !important'}}>CONTACT</a>
            </div>
        </div>
    </React.Fragment>
  )
}
