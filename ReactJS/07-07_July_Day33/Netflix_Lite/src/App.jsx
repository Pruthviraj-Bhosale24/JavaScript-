import "./App.css";

import logo from "./assets/logo.png";
import movie1 from "./assets/Bhooth Bangla.jpg";
import movie2 from "./assets/Teach You Lesson.jpg";
import movie3 from "./assets/Durandar.jpg";
import movie4 from "./assets/Money.jpg";
import movie5 from "./assets/kara.jpg";

function App() {
  return (
    <>

      <div className="hero">
        <nav>
          <img src={logo} className="logo" alt="Netflix Logo" />

          <div className="nav-right">
            <select>
              <option>English</option>
              <option>हिंदी</option>
            </select>

            <button className="signin">Sign In</button>
          </div>
        </nav>

        <div className="content">
          <h1>
            Unlimited movies,
            <br />
            shows, and more
          </h1>

          <h3>Starts at ₹149. Cancel at any time.</h3>

          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="email-box">
            <input type="email" placeholder="Email address" />

            <button className="start-btn">
              Get Started &nbsp; ❯
            </button>
          </div>
        </div>
      </div>

   
      <section className="trending">
        <h2>Trending Now</h2>

        <div className="cards">
          <div className="card">
            <img src={movie1} alt="Movie 1" />
          </div>

          <div className="card">
            <img src={movie2} alt="Movie 2" />
          </div>

          <div className="card">
            <img src={movie3} alt="Movie 3" />
          </div>

          <div className="card">
            <img src={movie4} alt="Movie 4" />
          </div>

          <div className="card">
            <img src={movie5} alt="Movie 5" />
          </div>
        </div>
      </section>


      <h2 className="title">More Reasons to Join</h2>

      <section className="reasons">
        <div className="reason-card">
          <h3>Enjoy on your TV</h3>

          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </p>

          <i className="fa-solid fa-tv"></i>
        </div>

        <div className="reason-card">
          <h3>Download your shows</h3>

          <p>
            Save your favourites easily and always have something to watch.
          </p>

          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </div>

        <div className="reason-card">
          <h3>Watch everywhere</h3>

          <p>
            Stream unlimited movies and TV shows on your phone, tablet,
            laptop, and TV.
          </p>

          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>

        <div className="reason-card">
          <h3>Create profiles for kids</h3>

          <p>
            Send kids on adventures with their favourite characters in a
            space made just for them — free with your membership.
          </p>

          <i className="fa-solid fa-face-smile"></i>
        </div>
      </section>

            
      <h2 className="title1">Frequently Asked Questions</h2>

      <section className="faq">
        <div className="box">
          <h2>What is Netflix?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>How much does Netflix cost?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>Where can I watch?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>How do I cancel?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>What can I watch on Netflix?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>Is Netflix good for kids?</h2>
          <h2>+</h2>
        </div>
      </section>

      <p className="p1">
        Ready to watch? Enter your email to create or restart your
        membership.
      </p>

      <div className="email-box_2">
        <input
          type="email"
          placeholder="Email address"
        />

        <button className="start-btn_2">
          Get Started &nbsp; ❯
        </button>
      </div>

  
       <footer>
        <p className="contact">
          Questions? <u>Call 000-800-919-1743</u>
        </p>

        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Help Centre</a>
          <a href="#">Account</a>
          <a href="#">Media Centre</a>

          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Terms of Use</a>

          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
          <a href="#">Contact Us</a>
        </div>

        <select className="language">
          <option>English</option>
          <option>हिंदी</option>
        </select>

        <p className="India">Netflix India</p>
      </footer>

          </>
  );
}

export default App;