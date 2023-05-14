import React from 'react'
import ProjectDetails from './ProjectDetails'
import ProjectImages from './ProjectImages'
import imgSpecialOrder from '../../assets/specialOrder.jpg'
import imgSpecialOrder_BW from '../../assets/specialOrder-BanW.jpg'
import imgCAC from '../../assets/CAC.jpg'
import imgCAC_BW from '../../assets/CAC-BanW.jpg'
import imgPickingMod from "../../assets/pickingMod.png";
import imgPickingMod_BW from "../../assets/pickingMod-BanW.jpg"

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
                <a href={process.env.REACT_APP_CAC_WEBSITE_URL}  target="_blank" rel="noreferrer">
                  <ProjectImages
                  image={imgCAC}
                  imageBW={imgCAC_BW}
                  altText="CAC website"
                  />                  
                </a>
                <ProjectDetails 
                  projectStatement={["Consumer Affairs Commission ",
                                      <a href={process.env.REACT_APP_CAC_WEBSITE_URL} target="_blank" rel="noreferrer"> website</a>]}
                  projectTitle="Consumer Affairs Commission Website"
                  details={`The Consumer Affairs Comission website provides an online presence to aid this 
                            goverment agency in its mission "To make Jamaica a better place by enabling ethical 
                            relations between providers and consumers." Bulit using Joomla CMS, this platform 
                            provides content that will inform, educate and empower consumers to protect themseleves 
                            in the marketplace.`}
                  myRole="Font End Developer & Web Publisher (Intern)"
                  client="Consumer Affairs Commission"
                  teamMembers="A. Evelyn & others"
                />

                <ProjectImages
                  image={imgPickingMod}
                  imageBW={imgPickingMod_BW}
                  altText="Picking Module"
                />
                <ProjectDetails 
                  projectStatement="Picking Module. (for interanl use only) "
                  projectTitle="Picking Module"
                  details={`The Picking Module is a "zone picking" platform built on top of the client's 
                            existing P.O.S. and Inventory Management System using Visual Basic Windows Forms 
                            and Microsoft SQL Server. Benefits derived from this include: faster picking times, 
                            reduced customer wait time, quantification of employee performance for more accurate
                            evaluations and the operation is now paperless.`}
                  myRole="Lead Developer and Software Architect"
                  client="Bert's Auto Parts Ltd"
                  teamMembers="D. Rose & M. Cooper"
                />
           

                {/*<img src={drewPicT} style={{width:'100%'}} alt="test"/>
                <img src={drewPicT} style={{width:'100%'}} alt="test"/>*/}
              </div>

              <div class="w3-half">              
                <ProjectImages
                  image={imgSpecialOrder}
                  imageBW={imgSpecialOrder_BW}
                  altText="Special Order Web App"
                />
                <ProjectDetails 
                  projectStatement="Special Order Web App. (for interanl use only) "
                  projectTitle="Special Order Web App"
                  details="The Special Order Web App is used to perform 
                            C.R.U.D. operations on Special Order client data and was built using ASP.Net,
                            C#, and Microsoft SQL Server. The benifits derived from this solution included: making 
                            this process paperless, the centralization of special order information for all authorized 
                            personnel to access and finally, allowed for the emailing of requests for price quotations 
                            and order confirmations to a specified agent."
                  myRole="Lead Developer and Software Architect"
                  client="Bert's Auto Parts Ltd"
                  teamMembers="D. Rose"
                />
            
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
