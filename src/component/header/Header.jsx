import React from "react";
import styleCss from "./Header.module.css";
import { Container, Row, Col } from 'reactstrap';
import Navigation from "./navigation/Navigation";
import GetAppointment from "../getAppointment/GetAppointment";
import GetAppointmentCointainer from "../getAppointment/GetAppointmentCointainer";

let socialNetwork = ["fa fa-facebook", "fa fa-twitter", "fa fa-pinterest-p", "fa fa-linkedin"]

const HeaderWidget = (props) => {
  return (
    <div className="header-widget">
      <div className="header-icon">
        <i className={`fa ${props.awesome}`}></i>
      </div>
      <div className="header-content">
        <h3>{props.header}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

const Header = (props) => {
  const openGetAppointment = () => {
    props.toggleGetAppointment();
  }
  return (
    <div id="header" className="header ttm-header-style-classicinfo">



      {/* <!-- ttm-fbar-main-w --> */}
      <div className="ttm-fbar-main-w ttm-fbar-position-right">
        <div className={`ttm-fbar-box-w ttm-textcolor-white ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes ${props.isGetAppointment ? "animated" : ""}`}>

          <span className="ttm-fbar-btn">
            <div className="ttm-fbar-btn-link">
              {props.isGetAppointment
                ?
                <span className="" onClick={openGetAppointment}><i className="fa fa-times"></i></span>
                :
                <span className="ttm-fbar-open-icon" onClick={openGetAppointment}><i className="fa fa-bars"></i></span>
              }
            </div>
          </span>
          <div class="ttm-fbar-bg-layer ttm-bg-layer"></div>
            <GetAppointmentCointainer />
        </div>
      </div>
      {/* <!-- ttm-fbar-main-w end --> */}



      <div className={styleCss.header}>
        <Container className="p0">
          <Row>
            <Col>
              {/* <!-- ttm-topbar-wrapper --> */}
              <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                <div className="container p0">
                  <div className="ttm-topbar-content">
                    <ul className="top-contact text-left">
                      <li><i className="themifyicon ti-location-pin"></i>234 Triumph, Los Angeles, California, US</li>
                      <li><i className="themifyicon ti-timer"></i>Mon - Sat 8.00 - 18.00. Sunday CLOSED</li>
                    </ul>
                    <div className="topbar-right text-right">
                      <div className="ttm-social-links-wrapper list-inline">

                        <ul>
                          {socialNetwork.map((social, index) =>
                            <li className={`pl5 pr5 ${styleCss.social}`} key={index}>
                              <a href="index.html#">
                                <i className={social}></i>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div className="pointer ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" onClick={openGetAppointment}>
                        <span>GET AN APPOINTMENT!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ttm-topbar-wrapper end --> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ttm-stickable-header-w ttm-bgcolor-white clearfix">
        <Container className="p0">
          <Row>
            <Col>
              <Navigation />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ttm-content-wrapper">
        <Container>
          <Row>
            <Col className={`${styleCss.zIndex} p0`}>
              {/* <!-- ttm-info-widget--> */}
              <div className="ttm-info-widget">
                <HeaderWidget awesome="fa-hospital-o" header="Number 1 Hospital" content="In United States" />
                <HeaderWidget awesome="fa-user-md" header="Personal Cabinet" content="Qualified Staff" />
                <HeaderWidget awesome="fa-thumbs-o-up" header="Get Result Online" content="Satisfied Patients" />
              </div>
              {/* <!-- ttm-info-widget end --> */}
              <div className="ttm-contact">
                <span className="icon"><i className="fa fa-phone"></i></span>Toll Free : 1 123 456 78910
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div className="container">
          <div className="row">
            <div className="">

            </div>
          </div>
        </div> */}
        <div className={styleCss.absalut}>

        </div>
      </div>

    </div>
  )
}

export default Header;