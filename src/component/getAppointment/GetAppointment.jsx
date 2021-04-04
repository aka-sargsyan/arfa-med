import { faEnvelope, faPhone, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styleCss from "./getAppointment.module.css"
import { Field, reduxForm } from "redux-form"

const GetAppointmanentForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styleCss.formStyle}>
        <div className={`mb15 pl10 ${styleCss.searchField}`}>
          <div className={`inlineBlock ${styleCss.width20}`}>
            <FontAwesomeIcon icon={faUserMd} color="#01d6a3" />
          </div>
          <Field placeholder="Full Name" name="fullName" component="input" />
        </div>
        <div className={`mb15 pl10 ${styleCss.searchField}`}>
          <div className={`inlineBlock ${styleCss.width20}`}>
            <FontAwesomeIcon icon={faEnvelope} color="#01d6a3" />
          </div>
          <Field placeholder="eMail" name="eMail" component="input" />
        </div>
        <div className={`mb15 pl10 ${styleCss.searchField}`}>
          <div className={`inlineBlock ${styleCss.width20}`}>
            <FontAwesomeIcon icon={faPhone} color="#01d6a3" />
          </div>
          <Field placeholder="Phone Number" name="phoneNumber" component="input" />
        </div>
        <button>GET AN APPOINTMENT</button>
      </div>
    </form>
  )
}

const GetAppointmanentReduxForm = reduxForm({ form: "getAppointment" })(GetAppointmanentForm);

const GetAppointment = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <>
      {props.isGetAppointment ?
        <div className={styleCss.getAppointment}>
          <div>
            <h2>GET AN APPOINTMENT!</h2>
            <div>
              <span>We provide the most full medical services,so every person could have the opportunity</span>
            </div>
            <GetAppointmanentReduxForm onSubmit={onSubmit} />
          </div>
          <div className={styleCss.enhanced_text_widget}>
            <h3 className={styleCss.widget_title}>Opening Hours:</h3>
            <div>
              <span>These are our normal opening hours. When we are closed can be found here.</span>
            </div>
            <div className={styleCss.ttm_ricelist_block}>
              <ul>
                <li>
                  <div className="flex spaceBetween">
                    <span>Monday - Saturday</span>
                    <span className={styleCss.service_price}>8.30 – 17.00</span>
                  </div>
                </li>
                <li>
                  <div className="flex spaceBetween">
                    <span>Sunday</span>
                    <span className={styleCss.service_price}><strong>Closed</strong></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div> : ""
      }
    </>
  )
}

export default GetAppointment;



