//import './App.css';
import Sidebar from './components/SidebarComponent'
import Header from './components/HeaderComponent'
import About from './components/aboutComponents/aboutComponent'

function App() {
  return (
    <div className="App">

      <Sidebar/>
      {/*<!-- Page Content -->*/}
      <div class="w3-padding-large" id="main">         
          <Header/>
          <About/>
          
          {/*<!-- Portfolio Section -->*/}
          {/*++++<div class="w3-padding-64 w3-content" id="photos">
            <h2 class="w3-text-light-grey">My Photos</h2>
            <hr style="width:200px" class="w3-opacity"/>

            {/*<!-- Grid for photos -->*/}
            {/*++++<div class="w3-row-padding" style="margin:0 -16px">
              <div class="w3-half">
                <img src="/w3images/wedding.jpg" style="width:100%"/>
                <img src="/w3images/rocks.jpg" style="width:100%"/>
                <img src="/w3images/sailboat.jpg" style="width:100%"/>
              </div>

              <div class="w3-half">
                <img src="/w3images/underwater.jpg" style="width:100%"/>
                <img src="/w3images/chef.jpg" style="width:100%"/>
                <img src="/w3images/wedding.jpg" style="width:100%"/>
                <img src="/w3images/p6.jpg" style="width:100%"/>
              </div>
            {/*<!-- End photo grid -->*/}
            {/*++++</div>
          {/*<!-- End Portfolio Section -->*/}
          {/*++++</div>

          {/*<!-- Contact Section -->*/}
          {/*++++<div class="w3-padding-64 w3-content w3-text-grey" id="contact">
            <h2 class="w3-text-light-grey">Contact Me</h2>
            <hr style="width:200px" class="w3-opacity"/>

            <div class="w3-section">
              <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Chicago, US</p>
              <p><i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
              <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
            </div><br/>
            <p>Let's get in touch. Send me a message:</p>

            <form action="/action_page.php" target="_blank">
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
              <p><input class="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"/></p>
              <p>
                <button class="w3-button w3-light-grey w3-padding-large" type="submit">
                  <i class="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
              </p>
            </form>
          {/*<!-- End Contact Section -->*/}
          {/*++++</div>
          
            {/*<!-- Footer -->*/}
          {/*++++<footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
            <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
          {/*<!-- End footer -->*/}
          {/*++++</footer>

        {/*<!-- END PAGE CONTENT -->*/}
      </div>
    </div>
  );
}

export default App;
