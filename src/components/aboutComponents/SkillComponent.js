import React from 'react'

export default function SkillCompoenent({skillName,widthPercentage}) {
  return (
    <React.Fragment>
      <p class="w3-wide">{skillName}</p>
            <div class="w3-white">
              <div class="w3-dark-grey" style={{height:'28px', width:widthPercentage}}></div>
            </div>
    </React.Fragment>
  )
}
