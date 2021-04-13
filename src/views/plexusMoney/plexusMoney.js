import React, { Component } from "react";
import "./plexusMoney.css";

import { Container, Row, Col, Navbar, Nav, Button, Image, Modal } from "react-bootstrap";

import Logo from "../../assets/Plexus-Logo.png";
import Preview from "../../assets/preview.jpeg";
import One from "../../assets/one.png";
import Two from "../../assets/two.png";
import Three from "../../assets/three.png";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFile, faHeart } from "@fortawesome/free-regular-svg-icons";


class PlexusMoney extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state={
    //       handleShow:true,
    //       show: true,
    //       handleClose: false,
    //     }
    //   }


    render() {

        return (
            <>
                <Container fluid className="pl-5 pr-5">
                    <Row className="plexusMoney_header_div_style">

                        <Col md="6">
                            <Image src={Logo} className="mt-2 mb-2 mt-4 mb-4 plexusMoney_logoImg_style" />
                        </Col>
                        <Col md="6">

                            <div className="plexusMoney_top_right_headder">
                                <Navbar variant="dark">

                                    <Nav className="mr-auto">
                                        <Nav.Link href="#" className="plexusMoney_navLink_style">Whitepaper</Nav.Link>
                                        <Nav.Link href="#" className="plexusMoney_navLink_style">Audit</Nav.Link>
                                        <Nav.Link href="#" className="plexusMoney_navLink_style">LP Wrapper</Nav.Link>
                                        <Nav.Link href="#" className="plexusMoney_navLink_style">Socials</Nav.Link>
                                        <Nav.Link href="#" className="plexusMoney_navLink_style">Github</Nav.Link>
                                    </Nav>

                                </Navbar>
                            </div>

                        </Col>
                    </Row>

                    <Row className="section_one">
                        <div className="plexusMoney_home_hero_style">
                            <div className="plexusMoney_container_medium plexusMoney_home_hero_v1">
                                <h1 className="plexusMoney_heading_light">
                                    Dynamic Liquidity Provision
                            </h1>

                                <p className="plexusMoney_pTag_light">
                                    Our current core contracts have recently been audited by
                                <Link> Peckshield</Link>
                                , and our main app will be released to users soon! Check out our LP Wrapper below.
                            </p>

                                <Button variant="primary" className="plexusMoney_LPWrapper_btn_style">LP Wrapper</Button>

                                <Button variant="outline-secondary" className="plexusMoney_github_btn_style">Github</Button>
                            </div>
                        </div>
                    </Row>

                    <Row className="section_Two">
                        <Image src={Preview} className="plexusMoney_Preview_img_style" />
                    </Row>

                    <Row className="section_Three">
                        <div className="plexusMoney_home_hero_style">
                            <div className="plexusMoney_container_medium plexusMoney_home_hero_v1">
                                <h2 className="plexusMoney_heading_light">
                                    Idle Asset Optimization
                            </h2>

                                <p className="plexusMoney_pTag_light">
                                    Plexus smart contracts enable users to have a programmatic approach to
                                    managing their assets. Plexus increases capital efficiency through more
                                    proficient distribution, and aims to minimize friction between users’
                                    assets and earning yield.
                            </p>


                            </div>
                        </div>
                    </Row>

                    <Row className="section_Four">
                        <Col md="4">
                            <Image src={One} className="plexusMoney_img_Style" />
                            <h3 className="plexusMoney_h3_Style" >Frictionless liquidity provision</h3>
                            <p className="plexusMoney_paragraph_stay">
                                By using the Wrapper.sol contract, liquidity providers can easily enter and
                                exit Uniswap/Sushiswap pools with 1 click.
                        </p>
                        </Col>
                        <Col md="4">
                            <Image src={Two} className="plexusMoney_img_Style" />
                            <h3 className="plexusMoney_h3_Style" >Increase Capital efficiency</h3>
                            <p className="plexusMoney_paragraph_stay">
                                Users can increase returns on otherwise idle assets, optimizing their assets'
                                earning potential.
                        </p>
                        </Col>
                        <Col md="4">
                            <Image src={Three} className="plexusMoney_img_Style" />
                            <h3 className="plexusMoney_h3_Style" >Earn</h3>
                            <p className="plexusMoney_paragraph_stay">
                                Users are able to earn our governance token, along with any yield, interest or
                                fees accrued from aggregation.
                        </p>
                        </Col>
                    </Row>


                </Container>

                <div style={{ backgroundColor: "#ffffff" }}>
                    <Container fluid className="pl-5 pr-5">
                        <Row className="section_Five">
                            <div className="plexusMoney_wildWest_Style">
                                <div className="advantage_bottom_wrapper">
                                    <div class="advantage_bottom_left">
                                        <h1 class="header_white_background_large">TAME THE <br />WILD<br />WEST</h1>
                                    </div>
                                    <div class="advantage_bottom_right">
                                        <h2 class="heading_5_style">Plexus is just getting started</h2>
                                        <p class="paragraph advantage dark">
                                            Plexus is an ecosystem of smart contracts that optimizes capital
                                            by actively rebalancing liquidity providers’ portfolios, allowing
                                            for dynamic atomic transactions, and enhances liquidity solvency
                                            with token rewards.
                                        </p>
                                       
                                    </div>
                                </div>
                            </div>
                        </Row>

                                <Row className="section_Six">
                                    <div className="plexusMoney_home_hero_style">
                                        <div className="plexusMoney_container_medium plexusMoney_home_hero_v1">
                                            <h1 className="plexusMoney_heading_light">
                                                Integrations
                     </h1>

                                            <p className="plexusMoney_pTag_light">
                                                Plexus has simplified the interaction between the user and the following protocols.
                     </p>


                                        </div>
                                    </div>
                                </Row>
                    </Container>
                </div>
            </>
        );
    }
}


export default PlexusMoney;
