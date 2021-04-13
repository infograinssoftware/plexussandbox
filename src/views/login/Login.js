import React, { Component } from "react";
import "./Login.css";

import { Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Facebook_Img } from "../../assets/icons/facebook.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

class Login extends Component {


  render() {
    return (
      <Container fluid className="login_container">
        <div className="login_div_style">
          <h1 class="login_h1_style">Sign In</h1>

          <p class="login_p_style">Log in to your account to continue.</p>
          <Form>
            <Form.Group controlId="formBasicEmail"  className="login_formGro_style">
              <Form.Label className="login_label_style">USERNAME</Form.Label>
              <Form.Control type="email" placeholder="Username" className="login_input_style" />
              <FontAwesomeIcon  icon={faUser} className="login_user_icon_style" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="login_formGro_style">
              <div className="login_lable_div_style">
                <Form.Label className="login_label_style">Password</Form.Label>
                <Link className="login_ForPass_style" href="/signup">Forgot Password?</Link>
              </div>
              <Form.Control type="password" placeholder="Password" className="login_input_style"/>
              <div className="login_pass_div_style">
                <FontAwesomeIcon  icon={faLock} className="login_lock_icon_style" />
                <FontAwesomeIcon  icon={faEye} className="login_eye_icon_style" />
              </div>
           
            </Form.Group>

            <Button type="submit" className="login_btn_style">
              Log In
            </Button>
          </Form>

          <div class="division">
            <span>OR</span>
          </div>

          <div class="social">
            <Button type="submit"  className="login_fbBtn_style">
              <FontAwesomeIcon  icon={faFacebookF} /> Facebook
            </Button>
            <Button type="submit" className="login_ghBtn_style">
              <FontAwesomeIcon  icon={faGithub} /> Github
            </Button>
          </div>

          <p class="login_link">Not registered ? <Link href="#">Create an account</Link></p>
        </div>
      </Container>
    );
  }
}


export default Login;
