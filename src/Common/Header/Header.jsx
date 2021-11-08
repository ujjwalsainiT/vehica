import React, { useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


//css file
import "./Header.css";

const Header = (props) => {

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div>
                        <img src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-dark-retina.png" alt="" className="header_logoformating hover_cursor" onClick={() => props.history.push("/home")} />
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">

                        <div className="dropdown">
                            <span className="header_link_color">Home<i className="fa fa-angle-down ml-2"></i></span>
                            <div className="dropdown-content">
                                <div className="dropdown_content_link">Homepage Mosaic</div>
                                <div className="dropdown_content_link">Homepage Car Delar</div>
                                <div className="dropdown_content_link">Homepage Location</div>
                                <div className="dropdown_content_link">Homepage Modern</div>
                                <div className="dropdown_content_link">Homepage Classic</div>
                                <div className="dropdown_content_link">Homepage Modern</div>
                                <div className="dropdown_content_link">Homepage Slideshow</div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="header_link_color">Search<i className="fa fa-angle-down ml-2"></i></span>
                            <div className="dropdown-content">
                                <div className="dropdown_content_link">Classic- Rows</div>
                                <div className="dropdown_content_link">Classic- Cards</div>
                                <div className="dropdown_content_link">Map-Rows</div>
                                <div className="dropdown_content_link">Map-Cards</div>

                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="header_link_color">Listings<i className="fa fa-angle-down ml-2"></i></span>
                            <div className="dropdown-content">
                                <div className="dropdown_content_link">Gallery</div>
                                <div className="dropdown_content_link">Mosaic</div>
                                <div className="dropdown_content_link">Carousel</div>
                                <div className="dropdown_content_link">Private Message System</div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <span className="header_link_color">Pages<i className="fa fa-angle-down ml-2"></i></span>
                            <div className="dropdown-content">
                                <div className="dropdown_content_link">Blog</div>
                                <div className="dropdown_content_link">About Us</div>
                                <div className="dropdown_content_link">Contact</div>
                                <div className="dropdown_content_link">Our Team -Simple</div>
                                <div className="dropdown_content_link">Our Team- Advance</div>
                                <div className="dropdown_content_link">User Profile Page</div>
                                <div className="dropdown_content_link">Sold</div>
                                <div className="dropdown_content_link">Load Calculator</div>
                                <div className="dropdown_content_link">FaQ</div>
                                <div className="dropdown_content_link">Login/register</div>
                            </div>
                        </div>


                        <div className="dropdown">
                            <span className="header_link_color">More<i className="fa fa-angle-down ml-2"></i></span>
                            <div className="dropdown-content">
                                <div className="dropdown_content_link">Main Features</div>
                                <div className="dropdown_content_link">Refund Policy</div>
                                <div className="dropdown_content_link">Reviews</div>

                            </div>
                        </div>
                    </div>

                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="header_link_color"><i className="fa fa-user mr-1" /> Login</span>|
                        <span className="header_link_color"> Register</span>
                        <span className="header_link_color">

                            <button type="button" className="Header_button"> <i className="fa fa-plus mr-1" />  Add Listing</button>
                        </span>
                    </div>

                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i className="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    className="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <span className="logout_Pointer_cursor">
                                Home
                            </span>
                            <span className="logout_Pointer_cursor">
                                About
                            </span>
                            <span className="logout_Pointer_cursor">
                                Members Benifits
                            </span>
                            <span className="logout_Pointer_cursor">
                                Learn
                            </span>
                            <span className="logout_Pointer_cursor">
                                Contact Us
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
