import React, { Component } from "react";
import "./signup.css";

import { Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faEye, faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

class Signup extends Component {

  render() {
    return (
      <Container fluid className="signup_container">
        <div className="signup_div_style">
          <h1 class="signup_h1_style">Register</h1>
          <p class="signup_top_link">Already have an account? <Link href="auth_signup_boxed.html">Log in</Link></p>

          <Form>
            <Form.Group controlId="formBasicEmail" className="signup_formGro_style">
              <Form.Label className="signup_label_style">USERNAME</Form.Label>
              <Form.Control type="text" placeholder="Username" className="signup_input_style" />
              <FontAwesomeIcon icon={faUser} className="signup_user_icon_style" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="signup_formGro_style">
              <Form.Label className="signup_label_style">EMAIL</Form.Label>
              <Form.Control type="email" placeholder="Email" className="signup_input_style" />
              <FontAwesomeIcon icon={faAt} className="signup_user_icon_style" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="signup_formGro_style">
              <div className="signup_lable_div_style">
                <Form.Label className="signup_label_style">PASSWORD</Form.Label>
                <Link className="signup_ForPass_style" href="/signup">Forgot Password?</Link>
              </div>
              <Form.Control type="password" placeholder="Password" className="signup_input_style" />
              <div className="signup_pass_div_style">
                <FontAwesomeIcon icon={faLock} className="signup_lock_icon_style" />
                <FontAwesomeIcon icon={faEye} className="signup_eye_icon_style" />
              </div>

            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="signup_formGro_style">
              <div className="d-flex">
                <Form.Check type="checkbox" />
                <p class="signup-link">I agree to the <Link href="#">  terms and conditions </Link></p>
              </div>
            </Form.Group>

            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button type="submit" className="signup_btn_style">
              Log In
            </Button>
          </Form>

          <div class="division">
            <span>OR</span>
          </div>

          <div class="social">
            <Button type="submit" className="signup_fbBtn_style">
              <FontAwesomeIcon icon={faFacebookF} /> Facebook
            </Button>
            <Button type="submit" className="signup_ghBtn_style">
              <FontAwesomeIcon icon={faGithub} /> Github
            </Button>
          </div>

        </div>
      </Container>
    );
  }
}


export default Signup;
