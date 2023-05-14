import React from 'react'

export default function EductationComponent({institution,course,major,duration,gradeOrAward}) {
  return (
    <React.Fragment>
      <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
        <li class="w3-dark-grey w3-xlarge w3-padding-32">{institution}</li>
            <li class="w3-padding-16">
                <h5>{course}</h5>
                <span class="w3-opacity">{major}</span>
            </li>
                <li class="w3-padding-16">{duration}</li>
            <li class="w3-padding-16">{gradeOrAward}</li>
        </ul>
    </React.Fragment>
  )
}
