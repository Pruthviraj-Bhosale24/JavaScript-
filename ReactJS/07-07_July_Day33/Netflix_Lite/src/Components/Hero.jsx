import Navbar from "./Navbar";
import EmailBox from "./EmailBox";

function Hero() {
  return (
    <div className="hero">
      <Navbar />

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

        <EmailBox />
      </div>
    </div>
  );
}

export default Hero;