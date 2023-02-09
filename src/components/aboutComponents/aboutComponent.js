import React from 'react'

export default function aboutComponent() {
  return (
    
        <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
            {/*<!-- About Section -->*/}
            <h2 class="w3-text-light-grey">Andrew Gayle</h2>
            <hr style={{width:'200px'}} class="w3-opacity"/>
            <p>As a full-stack developer with over X years of experience, I have worked on various projects that have improved the business operations for my clients.
                I relish the opportunity to take on roles that will allow me to learn new skills and grow as a software developer while maintaining a healthy work-life balance. 
                My experience, attetion to detail and abiltiy to think outside the box is the value I bring to a team. Therefore, I provide a different perspective on software design, implementation, and testing while still learning from my teammates.
                               
            </p>
            
            <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
            <p class="w3-wide">Photography</p>
            <div class="w3-white">
              <div class="w3-dark-grey" style={{height:'28px',width:'95%'}}></div>
            </div>
            <p class="w3-wide">Web Design</p>
            <div class="w3-white">
              <div class="w3-dark-grey" style={{height:'28px',width:'85%'}}></div>
            </div>
            <p class="w3-wide">Photoshop</p>
            <div class="w3-white">
              <div class="w3-dark-grey" style={{height:'28px',width:'80%'}}></div>
            </div><br/>
            
            <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
              <div class="w3-quarter w3-section">
                <span class="w3-xlarge">11+</span><br/>
                Partners
              </div>
              <div class="w3-quarter w3-section">
                <span class="w3-xlarge">55+</span><br/>
                Projects Done
              </div>
              <div class="w3-quarter w3-section">
                <span class="w3-xlarge">89+</span><br/>
                Happy Clients
              </div>
              <div class="w3-quarter w3-section">
                <span class="w3-xlarge">150+</span><br/>
                Meetings
              </div>
            </div>

            <button class="w3-button w3-light-grey w3-padding-large w3-section">
              <i class="fa fa-download"></i> Download Resume
            </button>
            
            {/*<!-- Grid for pricing tables -->*/}
            {/*++++<h3 class="w3-padding-16 w3-text-light-grey">My Price</h3>
            <div class="w3-row-padding" style="margin:0 -16px">
              <div class="w3-half w3-margin-bottom">
                <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li class="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
                  <li class="w3-padding-16">Web Design</li>
                  <li class="w3-padding-16">Photography</li>
                  <li class="w3-padding-16">5GB Storage</li>
                  <li class="w3-padding-16">Mail Support</li>
                  <li class="w3-padding-16">
                    <h2>$ 10</h2>
                    <span class="w3-opacity">per month</span>
                  </li>
                  <li class="w3-light-grey w3-padding-24">
                    <button class="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                  </li>
                </ul>
              </div>

              <div class="w3-half">
                <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li class="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
                  <li class="w3-padding-16">Web Design</li>
                  <li class="w3-padding-16">Photography</li>
                  <li class="w3-padding-16">50GB Storage</li>
                  <li class="w3-padding-16">Endless Support</li>
                  <li class="w3-padding-16">
                    <h2>$ 25</h2>
                    <span class="w3-opacity">per month</span>
                  </li>
                  <li class="w3-light-grey w3-padding-24">
                    <button class="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                  </li>
                </ul>
              </div>
            {/*<!-- End Grid/Pricing tables -->*/}
            {/*++++</div>
            
            {/*<!-- Testimonials -->*/}
            {/*++++<h3 class="w3-padding-24 w3-text-light-grey">My Reputation</h3>  
            <img src="/w3images/bandmember.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px"/>
            <p><span class="w3-large w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
            <p>John Doe saved us from a web disaster.</p><br/>
            
            <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px"/>
            <p><span class="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
            <p>No one is better than John Doe.</p>
            {/*<!-- End About Section -->*/}
        </div>
  )
}
