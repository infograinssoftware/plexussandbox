import React, { Component } from "react";
import "./auth_login.css";

import { Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Facebook_Img } from "../../assets/icons/facebook.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

// import Switch from "react-switch";

class Auth_Login extends Component {
    // constructor() {
    //     super();
    //     this.state = { checked: false };
    //     this.handleChange = this.handleChange.bind(this);
    //   }

    //   handleChange(checked) {
    //     this.setState({ checked });
    //   }

    render() {
        return (
            <Container fluid className="auth_login_container">
                <div className="auth_login_div_style">
                    <h1 class="auth_login_h1_style">Sign In</h1>

                    <p class="auth_login_p_style">Log in to your account to continue.</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail" className="auth_login_formGro_style">
                            <Form.Label className="auth_login_label_style">USERNAME</Form.Label>
                            <Form.Control type="email" placeholder="Username" className="auth_login_input_style" />
                            <FontAwesomeIcon icon={faUser} className="auth_login_user_icon_style" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="auth_login_formGro_style">
                            <div className="auth_login_lable_div_style">
                                <Form.Label className="auth_login_label_style">Password</Form.Label>
                                <Link className="auth_login_ForPass_style" href="/signup">Forgot Password?</Link>
                            </div>
                            <Form.Control type="password" placeholder="Password" className="auth_login_input_style" />

                            <FontAwesomeIcon icon={faLock} className="auth_login_lock_icon_style" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="auth_login_formGro_style">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <p class="auth_login_showPass_style">Show Password
                                {/* <Switch class="auth_login_switch_style" onChange={this.handleChange} checked={this.state.checked} offColor="red"/> */}
                                    </p>
                                </div>
                                <Button type="submit" className="auth_login_btn_style">
                                    Log In
                                </Button>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox" className="auth_login_formGro_style">
                            <div className="auth_login_checkbox_div">
                                <Form.Check type="checkbox" />
                                <p class="signup-link">Keep me logged in</p>
                            </div>

                            <Link href="#" className="auth_login_link_style">  Forgot Password? </Link>
                        </Form.Group>
                    </Form>

                    

                    <p class="terms-conditions">© 2020 All Rights Reserved. 
                    <Link href="#">CORK</Link> is a product of Designreset. 
                    <Link href="javascript:void(0);">Cookie Preferences</Link>, 
                    <Link href="javascript:void(0);">Privacy</Link>, and 
                    <Link href="javascript:void(0);">Terms</Link>.
                    </p>

                   
                </div>
            </Container>
        );
    }
}


export default Auth_Login;
