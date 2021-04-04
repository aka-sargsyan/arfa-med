import React from "react"
import { connect } from "react-redux"
import GetAppointment from "./GetAppointment"

const GetAppointmentContainer = (props) => {
  return <GetAppointment isGetAppointment={props.isGetAppointment}/>
}

let mapStateToProps=(state)=>{
return{
  isGetAppointment: state.headerPage.isGetAppointment
}
}

export default connect(mapStateToProps,{})(GetAppointmentContainer)