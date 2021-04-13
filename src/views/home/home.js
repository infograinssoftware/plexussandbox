import React, { Component } from "react";
import "./home.css";

import { Container, Row, Col, Button, Image, Table, Form, Modal } from "react-bootstrap";

import Logo from "../../assets/logofull.png";
import { Link } from "react-router-dom";

import Eth_Img from "../../assets/icons/eth.png";

import Dai_Img from "../../assets/icons/dai.png";
import Usdc_Img from "../../assets/icons/usdc.png";
import Plex_Img from "../../assets/icons/plex.png";
import Uniswap_Img from "../../assets/icons/uni.png";
import Usdt_Img from "../../assets/icons/usdt.png";
import Susd_Img from "../../assets/icons/susd.png";
import Tusd_Img from "../../assets/icons/tusd.png";
import Farm_Img from "../../assets/icons/farm.png";
import Pickle_Img from "../../assets/icons/pickle.png";
import Crv_Img from "../../assets/icons/crv.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFile, faHeart } from "@fortawesome/free-regular-svg-icons";

import Header from "../../comm/header/header";
import Footer from "../../comm/footer/footer"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
          handleShow:true,
          show: true,
          handleClose: false,
        }
      }
    
      setShow = () => (
        this.setState(
          {
            show:!this.state.show,
          }
        )
      )
    render() {

        return (
            <Container fluid >
                <Row>
                    <Header />
                </Row>

                <Row>
                    <Col md="3">
                        <div className="widget_one_hybrid">
                            <div class="widget_heading">
                                <h5>Total Value Locked</h5>
                                <br /><br />
                                <p class="w_value" >$ --</p>
                            </div>

                        </div>
                    </Col>
                    <Col md="3">
                        <div className="widget_one_hybrid">
                            <div class="widget_heading">
                                <h5>PLEX APY</h5>
                                <br /><br />
                                <p class="w_value" >--</p>
                            </div>

                        </div>
                    </Col>
                    <Col md="3">
                        <div className="widget_one_hybrid">
                            <div class="widget_heading">
                                <span>
                                    <h5>Plexus Price
                                        <span style={{ float: "right", marginTop: "0px" }}>
                                            <Button variant="outline-primary" className="home_btn_buyPLX mb-2" size="sm" >
                                                Buy PLX
                                            </Button>
                                        </span>
                                    </h5>
                                </span>
                                <br /><br />
                                <p class="w_value" >$ --</p>
                            </div>

                        </div>
                    </Col>
                    <Col md="3">
                        <div className="widget_one_hybrid">
                            <div class="widget_heading">
                                <h5>Disbursements Available</h5>
                                <br /><br />
                                <p class="w_value" >--</p>
                            </div>

                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col md="12">
                        <div class="home_table_div">
                            <Table>
                                <thead>
                                    <tr>
                                        <th className="home_th_style"></th>
                                        <th className="home_th_style">COIN</th>
                                        <th className="home_th_style">APY</th>
                                        <th className="home_th_style">ACTION</th>
                                        <th className="home_th_style">LOCATION</th>
                                        <th className="home_th_style">AMOUNT</th>
                                        <th className="home_th_style">BALANCE</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Eth_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">ETH</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- ETH</span>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Dai_Img} height="35px" width="35px" className="home_profile_img"/>
                                            </div>

                                        </td>
                                        <td className="home_td_style">DAI</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- DAI</span>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Usdc_Img} height="35px" width="35px" className="home_profile_img"/>
                                            </div>

                                        </td>
                                        <td className="home_td_style">USDC</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- USDC</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Plex_Img} height="35px" width="35px" className="home_profile_img"/>
                                            </div>

                                        </td>
                                        <td className="home_td_style">PLEX</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- PLEX</span>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Uniswap_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">PLEX UNI LP</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- PLEX UNI LP</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Usdt_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">USDT</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- USDT</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Susd_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">SUSD</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- SUSD</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Tusd_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">TUSD</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- TUSD</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Farm_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">FARM</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- FARM</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Pickle_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">PICKLE</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- PICKLE</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="home_td_style">
                                            <div className="home_profile_div">
                                                <Image src={Crv_Img} height="35px" width="35px" className="home_profile_img" />
                                            </div>

                                        </td>
                                        <td className="home_td_style">C</td>
                                        <td className="home_td_style"><span>--%</span></td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_action_select">
                                                        <option>Stake</option>
                                                        <option>Borrow</option>
                                                        <option>Deposit</option>
                                                        <option>Unstake</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1" className="mb-0">

                                                    <Form.Control as="select" className="home_location_select">
                                                        <option>Aave + Plex </option>
                                                        <option>Harvest + Plex</option>
                                                        <option>Pickle + Plex</option>
                                                        <option>All + Plex</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                            <Form>
                                                <Row>
                                                <Form.Group controlId="exampleForm.ControlInput1" className="home_form_group mb-0">
                                                    <Form.Control type="text" placeholder="0" className="home_input_style" />
                                                </Form.Group>
                                                <Button variant="primary"  size="sm" type="submit" className="home_maxBtn_style">
                                                    Max
                                                </Button>
                                                </Row>
                                            </Form>
                                        </td>
                                        <td className="home_td_style">
                                        <span>-- CRV</span>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

                <Footer />

                <Modal
        show={this.state.show}
        onHide={this.setShow}
        
      >
        {/* style={{backgroundColor:"#0e1726"}} */}
       
        <Modal.Body style={{backgroundColor:"#0e1726"}}>
        <div className="swal2-icon swal2-warning swal2-animate-warning-icon" >
          <span className="swal2-icon-text">!</span>
        </div>

        <h2 class="swal2-title" id="swal2-title">Please connect your wallet for complete functionality</h2>

        
        <div className="swal2-content" style={{display: "block"}}>
          In order to use to use this LP token converter, you will need to be connected via MetaMask or 
          another Ethereum wallet provider.
        </div>

        <div class="swal2-actions" >
          <Button type="button" className="modal_btn_style"  style={{borderLeftColor: "rgb(27, 85, 226)", borderRightColor: "rgb(27, 85, 226)"}}>OK</Button>
        </div>
        
        </Modal.Body>
        {/* <Modal.Footer>
        <Button variant="secondary" onClick={this.setShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.setShow}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

            </Container>
        );
    }
}


export default Home;
