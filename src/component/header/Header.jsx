import React from "react";
import styleCss from "./Header.module.css";

//for Bootstrap
import { Container, Row, Col } from 'reactstrap';

//for avesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Navigation from "./navigation/Navigation";


let addressAndWorkDay = [
  [faMapMarkerAlt, "234 Triumph, Los Angeles, California, US"],
  [faClock, "Mon - Sat 8.00 - 18.00. Sunday CLOSED"]
];
let socialNetwork = ["fa fa-facebook", "fa fa-twitter", "fa fa-pinterest-p", "fa fa-linkedin"]

const Header = (props) => {
  const openGetAppointment = () => {
    props.toggleGetAppointment();
  }
  return (
    <div id="header">
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
                      <div className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" onClick={openGetAppointment}>
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
      <div>
        <Container className="p0">
          <Row>
            <Col>
              <Navigation />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}

export default Header;