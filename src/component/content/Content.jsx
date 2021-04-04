import React from "react";
import { Route } from "react-router";
import { Col, Container, Row } from "reactstrap";
import AboutAs from "./abut-as/AboutAs";
import Home from "./home/Home";

const homeRender = () => <Home/>
const about_as = () => <AboutAs/>

const Content = () => {
  return (
    <div className="content">
      <Container>
        <Row>
          <Col>
            <Route path='/home' render={homeRender} />
            <Route path='/about_as' render={about_as} />
          </Col>
        </Row>
      </Container>

    </div>)
}

export default Content;