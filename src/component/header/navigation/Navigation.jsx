import React, { useLayoutEffect, useState } from "react";
import { Container } from "reactstrap";


import logo from '../../assets/logo-img.png'
import Navbar from "./navbar/Navbar";
import styleCss from "./Navigation.module.css"


export function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
}
// const { height, width } = useWindowDimensions();




const Navigation = (props) => {
  const positions = useWindowPosition();
  return (
    <>
      <div className="ttm-header-wrap">
        {/* <!-- ttm-stickable-header-w --> */}
        <div id="ttm-stickable-header-w" className="ttm-stickable-header-w ttm-bgcolor-white clearfix">
          <div id="site-header-menu" className="site-header-menu">
            <div className={`site-header-menu-inner ttm-stickable-header ${positions > 50 ? "visible-title fixed-header pl5 pr5" : ""}`}>
                <div className="container flex spaceBetween alignItemsCenter p0">
                  {/* <!-- site-branding --> */}
                  <div className="site-branding">
                    <div className={styleCss.contentHeader}>
                      <img src={logo} alt="" />
                    </div>
                  </div>
                  {/* <!-- site-branding end --> */}
                  {/* <!--site-navigation --> */}
                  <div id="site-navigation" className="site-navigation">
                    <div className="ttm-menu-toggle">
                      {/* <input type="checkbox" id="menu-toggle-form" />
                    <label className="ttm-menu-toggle-block">
                      <span className="toggle-block toggle-blocks-1"></span>
                      <span className="toggle-block toggle-blocks-2"></span>
                      <span className="toggle-block toggle-blocks-3"></span>
                    </label> */}
                    </div>
                    <div className="height100 flex spaceBetween alignItemsCenter width100">
                      <Navbar />
                    </div>
                  </div>
                  {/* <!-- site-navigation end--> */}
                </div>
            </div>
          </div>
        </div>
        {/* <!-- ttm-stickable-header-w end--> */}
      </div>
      {/* <!--ttm-header-wrap end --> */}




      {/* <div className={`${styleCss.contentHeader} ${positions>50? styleCss.sticky:""}`}>
      <div className={`flex height100 width100`}>
        <div className={styleCss.site_branding}>
          <img src={logo} alt="" />
        </div>
        <div className="height100 flex spaceBetween alignItemsCenter width100">
          <Navbar />
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Navigation;

