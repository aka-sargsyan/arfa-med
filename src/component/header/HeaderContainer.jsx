import React from "react"
import Header from "./Header";
import { connect } from 'react-redux';
import { toggleGetAppointment } from "../redux/headerReduser";

const HeaderContainer = (props) => {
  return (
    <Header {... props}/>
  )
}
let mapStateToProps = (state) => {
  return {
    isGetAppointment: state.headerPage.isGetAppointment
    }  
}

export default connect(mapStateToProps,{toggleGetAppointment})(HeaderContainer);