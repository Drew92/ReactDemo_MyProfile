import React, {useRef}  from 'react'
import emailjs from '@emailjs/browser' 



export default function ContactComponent() {

  const  form = useRef()
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert('Email sent sucessfully');
      }, (error) => {
          console.log(error.text);
          alert('Email was not sent');
      });
      e.target.reset()
  };

  return (
    <React.Fragment>
        {/*<!-- Contact Section -->*/}
          <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
            <h2 class="w3-text-light-grey">Get in touch</h2>
            <hr style={{width:'200px'}} class="w3-opacity"/>

            <div class="w3-section">
              <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Spanish Town, Jamaica</p>
              <p><i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +1 (876) 848-9621</p>
              <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: amagayle@gmail.com</p>
            </div><br/>
            <p>Let's get in touch. Send me a message:</p>

            <form ref={form} onSubmit={sendEmail}>
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="user_name"/></p>
              <p><input class="w3-input w3-padding-16" type="email" placeholder="Email" required name="user_email"/></p>
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Subject" required name="email_subject"/></p>
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Message" required name="email_message"/></p>
              <p>
                <button class="w3-button w3-light-grey w3-padding-large" type="submit">
                  <i class="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
              </p>
            </form>
          {/*<!-- End Contact Section -->*/}
        </div>
    </React.Fragment>
  )
}
