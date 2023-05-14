import React from 'react'
import Skill from './Skill' 
import Tool from './ToolsAndFramework' 
import Education from './Education' 

import { mySkills } from '../../constants/mySkills'
import { myTools } from '../../constants/myTools'

import Resume from '../../assets/Andrew_Gayle-Resume.pdf'

export default function aboutComponent() {
  return (
    
        <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
            {/*<!-- About Section -->*/}
            <h2 class="w3-text-light-grey">Andrew Gayle</h2>
            <hr style={{width:'200px'}} class="w3-opacity"/>
            <p>As a full-stack developer with over {new Date().getFullYear()-2016} years of experience, I have worked on various projects that have improved the business operations for my clients.
                I relish the opportunity to take on roles that will allow me to learn new skills and grow as a software developer while maintaining a healthy work-life balance. 
                My experience, attetion to detail and abiltiy to think outside the box are the values I bring to any team so you can expect a different perspective on software design, implementation, and testing.                  
            </p>
            

            <h3 class="w3-padding-16 w3-text-light-grey">Programmming Experience</h3>
            {
              mySkills.map( (skill) =>
                             <Skill
                                skillName={skill.skillName}
                                widthPercentage={skill.widthPercentage}
                              />
              )
            }                        
            <h3 class="w3-padding-16 w3-text-light-grey">Tools & Frameworks Used</h3>

            <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
              {
                myTools.map( (tool) =>
                              <Tool
                                  name={tool.name}
                                />
                )
              } 
                
            </div>

            <a href={Resume} download='Andrew_Gayle-Resume'>
              <button class="w3-button w3-light-grey w3-padding-large w3-section">
                <i class="fa fa-download"></i> Download Resume
              </button>
            </a>
            
            {/*<!-- Grid for pricing tables -->*/}
            <h3 class="w3-padding-16 w3-text-light-grey">My Education</h3>
            <div class="w3-row-padding" style={{margin:'0 -16px'}}>
              <div class="w3-half w3-margin-bottom">
                <Education
                  institution='University of Technology Jamaica'
                  course='BSc. Computing and Information Technology'
                  major='Computer Science Major'
                  duration='Aug 2011 - May 2015'
                  gradeOrAward='GPA 3.48'
                />
              </div>
              <div class="w3-half">
              <Education
                  institution='QualityWorks Consulting Group'
                  course='Test AutomationCamp 2022'
                  major='UI Test Automation'
                  duration='Oct 2022 - Dec 2022'
                  gradeOrAward=''
                />
              </div>              
            </div>

           
            {/*<!-- End Grid/Pricing tables -->*/}
            
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
