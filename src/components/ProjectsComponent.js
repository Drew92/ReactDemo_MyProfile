import React from 'react'
import imgSpecialOrder from '../assets/specialOrder.jpg'
import imgSpecialOrder_BW from '../assets/specialOrder-BanW.jpg'
import imgCAC from '../assets/CAC.jpg'
import imgCAC_BW from '../assets/CAC-BanW.jpg'

export default function ProjectsComponent() {
  return (
    <React.Fragment>
        {/*<!-- Portfolio Section -->*/}
        <div class="w3-padding-64 w3-content" id="projects">
            <h2 class="w3-text-light-grey">Projects</h2>
            <hr style={{width:'200px'}} class="w3-opacity"/>

            {/*<!-- Grid for photos -->*/}
            <div class="w3-row-padding" style={{margin:"0 -16px"}}>
              <div class="w3-half">
                <img src={imgSpecialOrder_BW}  style={{width:'100%'}} alt="Special Order Web App"
                onMouseOver={e => (e.currentTarget.src =imgSpecialOrder )}
                onTouchStart={e => (e.currentTarget.src =imgSpecialOrder )}
                onMouseOut={e => (e.currentTarget.src =imgSpecialOrder_BW )}
                onTouchEnd={e => (e.currentTarget.src =imgSpecialOrder_BW )}/>
                <p>Bert's Auto Parts Ltd Special Order Web App. (for interal use only)</p>
                {/*<img src={drewPicT} style={{width:'100%'}} alt="test"/>
                <img src={drewPicT} style={{width:'100%'}} alt="test"/>*/}
              </div>

              <div class="w3-half">
                <a href={process.env.REACT_APP_CAC_WEBSITE_URL}  target="_blank" rel="noreferrer">
                  <img src={imgCAC_BW} style={{width:'100%'}} alt="CAC website"
                  onMouseOver={e => (e.currentTarget.src =imgCAC )}
                  onTouchStart={e => (e.currentTarget.src =imgCAC )}
                  onMouseOut={e => (e.currentTarget.src =imgCAC_BW )}
                  onTouchEnd={e => (e.currentTarget.src =imgCAC_BW)}/>
                </a>
                <p>Consumer Affairs Commission    
                  &nbsp;<a href={process.env.REACT_APP_CAC_WEBSITE_URL} target="_blank" rel="noreferrer">website
                  </a> (UI layout & content)
                </p>
                
                {/*<img src={drewPicT} style={{width:'100%'}} alt="test"/>
                <img src={drewPicT} style={{width:'100%'}} alt="test"/>
                <img src={drewPicT} style={{width:'100%'}} alt="test"/>*/}
              </div>
            {/*<!-- End photo grid -->*/}
            </div>
          {/*<!-- End Portfolio Section -->*/}
        </div>
    </React.Fragment>
  )
}
