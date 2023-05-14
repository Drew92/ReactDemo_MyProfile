import React from 'react'

export default function FooterComponent() {
  return (
    <React.Fragment>
          <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
            <a href='https://www.linkedin.com/in/andrewmagayle/'  target="_blank" rel="noreferrer">
              <i class="fa fa-linkedin w3-hover-opacity"></i>
            </a>&nbsp;
            <a href='https://github.com/Drew92'  target="_blank" rel="noreferrer">
              <i class="fa fa-github w3-hover-opacity"></i>
            </a>
            <br/><br/>
            <p class="w3-tiny">Original template provided by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noreferrer" class="w3-hover-text-green">w3.css</a></p>
          </footer>
    </React.Fragment>
  )
}
