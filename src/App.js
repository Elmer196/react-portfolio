import './App.css';
import './reset.css';
import Header from './Header'
import Footer from './Footer'
import myVideo from './hernan-web-dev.mp4';
import myResume from './Resume.pdf'

function App() {
  return (
    <div className="App">
      <Header/>
      <div id="videoDiv">
        <video id="video1" width="1000" height="562" autoPlay={true} loop={true} muted>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
      <div class="aboutMe">
        <h1 class="h11">d</h1>
        <h1 id="aboutMe" class="h12">About Me</h1>
        <h1 class="h13">d</h1>
      </div>
      <div class="container2">
        <p>Hello y'all, my name is Elmer Hernandez. I am 22 years old with about three years of computer science experience and currently working on getting certified as a full stack web developer. This includes knowledge of HTML, CSS, JavaScript, C++, jQuery, BootStrap, GitHub, Node, MySQL as well as NoSql technologies. I am well versed on all four languages but JavaScript is the one I specialize and enjoy the most. Besides that, I am from Los Angeles, CA but have lived in Houston, TX for a majority of my life. I have a passion for basketball, cars, and business. Thank y'all for visitng my page, and feel free to reach out to me.

        - Elmer Hernandez
        </p>
      </div>
      <div class="work">
        <h1 class="h11">d</h1>
        <h1 id="workPage" class="h12">Work</h1>
        <h1 class="h13">d</h1>
      </div>
      <div >
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div class="elfsight-app-9738c819-8ffb-46f3-8bf1-8076e849ce6d"></div>
      </div>
      <div class="contactMe">
        <h1 class="h11">d</h1>
        <h1 id="contactPage" class="h12">Contact Me</h1>
        <h1 class="h13">d</h1>
      </div>
      <div class="contactForm">
        <form id="contact" action="" method="post">
          <h3>Hernan Contact Form</h3>
          <h4>Contact us for custom quote</h4>
          <fieldset>
            <input placeholder="Your name" type="text" tabindex="1" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabindex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" />
          </fieldset>
          <fieldset>
            <input placeholder="Your Web Site (optional)" type="url" tabindex="4" />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>

      </div>
      <div class="resume">
        <h1 class="h11">d</h1>
        <h1 id="resumePage" class="h12">Resume</h1>
        <h1 class="h13">d</h1>
      </div>
      <div class="container5">
        <a href={myResume} target="_blank">Click here for my resume!</a>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
