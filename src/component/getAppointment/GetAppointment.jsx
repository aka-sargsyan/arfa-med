import { faEnvelope, faPhone, faUserMd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styleCss from "./getAppointment.module.css"
import { Field, reduxForm } from "redux-form"

const GetAppointmanentForm = (props) => {
  return (

    <div className="team-search-form-w">
      <form onSubmit={props.handleSubmit} className="team-search-form">
        <div className="ttm-team-search-title">
          <h2>GET AN APPOINTMENT!</h2>
        </div>
        <div className="team-search-form-before-text">We provide the most full medical
        services,
        so every person could have the opportunity
      </div>

        <div className="ttm-fbar-input">
          <div className="search_field by_name">
            <i className="fa fa-user-md"></i><Field placeholder="Full Name" name="fullName" component="input" type="text" />
          </div>
        </div>

        <div className="ttm-fbar-input">
          <div className="search_field by_name">
            <i className="fa fa-envelope-o"></i><Field placeholder="eMail" name="eMail" component="input" type="text" />
          </div>
        </div>

        <div className="ttm-fbar-input">
          <div className="search_field by_name">
            <i className="fa fa-phone"></i><Field placeholder="Phone Number" name="phoneNumber" component="input" type="text" />
          </div>
        </div>
        <div class="submit_field">
          <button type="submit">GET AN APPOINTMENT</button>
        </div>
      </form>
    </div>
  )
}


const GetAppointmanentReduxForm = reduxForm({ form: "getAppointment" })(GetAppointmanentForm);

const GetAppointment = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (

    <>
      <div className="ttm-fbar-main-w ttm-fbar-position-right">
        <div className="ttm-fbar-bg-layer ttm-bg-layer"></div>
        {/* <!-- ttm-fbar-content-wrapper --> */}
        <div className="ttm-fbar-content-wrapper">
          <div className="ttm-fbar-box">
            {/* <!-- ttm_widget_team_search-2 --> */}
            <aside id="ttm_widget_team_search-2" className="widget-even widget-4 widget ttm_widget_team_search">
              <GetAppointmanentReduxForm />
            </aside>
            {/* <!-- ttm_widget_team_search-2 end -->
                            <!-- enhanced-text-widget --> */}
            <aside id="enhancedtextwidget-10" className="widget-odd widget-5 widget widget_text enhanced-text-widget">
              <h3 className="widget-title">Opening Hours:</h3>
              <div className="textwidget widget-text">These are our normal opening hours. When we are
              closed
                                    can be found here.<br />
                <div className="ttm-pricelistbox-wrapper ">
                  <ul className="ttm-pricelist-block">
                    <li>Monday - Saturday<span className="service-price">8.30 – 17.00</span></li>
                    <li>Sunday<span className="service-price"><strong>Closed</strong></span></li>
                  </ul>
                </div>
              </div>
            </aside>
            <aside id="enhancedtextwidget-11" className="widget-even widget-6 widget widget_text enhanced-text-widget">
              <div className="textwidget widget-text">
                <div className="featured-icon-box left-icon icon-align-top">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square">
                      <i className="fa fa-phone"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>+123 456 78910 / 11</h5>
                    </div>
                    <div className="featured-desc">
                      <p>Have a question? call us now</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* <!-- enhanced-text-widget end --> */}

          </div>
        </div>
        {/* <!-- ttm-fbar-content-wrapper end --> */}

      </div>

    </>

  )
}

export default GetAppointment;



