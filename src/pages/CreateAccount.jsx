import Button from "../components/Button";
import "../pages/CreateAccount.css";
import logo from "../assets/logo.png";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function CreateAccount() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [startY, setStartY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0); // scroll to the top of the page

    const handleTouchStart = (e) => {
      setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      if (endY > startY) {
        // User has dragged down
        closeCreateAccount();
      }
    };

    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Clean up event listeners
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const closeCreateAccount = () => {
    setIsVisible(false);
    setTimeout(() => navigate("/home"), 600); // delay navigation to allow animation to complete
  };

  return (
    <section
      ref={containerRef}
      className={`createAccount ${isVisible ? "visible" : ""}`}
    >
      <div className="createAccountContainer">
        <div className="createAccountHeader">
          <img src={logo} alt="App logo - yellow bird" className="logo" />
          <h4 className="closeCreateAccount" onClick={closeCreateAccount}>
            CLOSE
          </h4>
        </div>
        <h2 className="createText">Create an Account</h2>
        <p className="createText">
          {" "}
          With an account on Birdspotter you can keep track of the observations
          you've made.
        </p>
        <div className="createAccountOptionsContainer">
          <form className="createAccountForm">
            <input type="text" id="name" name="name" placeholder="Username" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </form>
          <Button className="createAccountBtn" text="Create Account" />

          <div className="hr-text">
            <span>OR</span>
          </div>

          <Button
            className="googleBtn"
            text={
              <>
                <FaGoogle /> Sign up with Google
              </>
            }
          />
          <Button
            className="facebookBtn"
            text={
              <>
                <FaFacebook /> Sign up with Facebook
              </>
            }
          />

          <p className="createP">Already have an account?</p>
          <p className="createP">Log in</p>
        </div>
      </div>
    </section>
  );
}
