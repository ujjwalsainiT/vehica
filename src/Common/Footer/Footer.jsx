import React from 'react'
import { Grid } from '@material-ui/core';

//css file
import "./Footer.css";

function Footer(props) {
    return (
        <>

            <div className="footer_color">
                <Grid className="Component_main_grid mt-2 pt-5 pl-3 pr-3 ">
                    <Grid item md={2} className="p-3">
                        <div><img src="https://demo.vehica.com/wp-content/uploads/2021/09/vehica-logo-white-retina.png" alt="" className="Footer_Logo" /></div>
                    </Grid>
                    <Grid item md={2} className="p-3">
                        <ul>
                            <li className="Footer_heading_Links">Listings</li>
                            <li className="Footer_heading_Links">FAQ</li>
                            <li className="Footer_heading_Links">About Us</li>
                        </ul>
                    </Grid>
                    <Grid item md={2} className="p-3">
                        <ul>
                            <li className="Footer_heading_Links">Blog</li>
                            <li className="Footer_heading_Links">Our Team</li>
                            <li className="Footer_heading_Links">Contact</li>
                        </ul>
                    </Grid>
                    <Grid item md={3} className="p-3">

                        <div className="footer_content">Award-winning, family owned dealership of new and pre-owned vehicles with
                            several locations across the city. Lowest prices and the best customer service guaranteed.</div>
                    </Grid>
                    <Grid item md={3} className="p-3">
                        <div className="Footer_heading_Links_contact text-right">
                            <span>(123)</span><span className="contact_color ml-2">556-765</span>
                        </div>
                        <div className="footer_content mt-2 text-right">support@vehica.com</div>
                        <div className="footer_content mt-2 text-right">West 12th Street<br />
                            New York, NY, USA</div>
                    </Grid>
                </Grid>

                <hr style={{ color: "white" }} />
                <div className="mt-5 pb-5 pl-3 footer_content">
                    Copyright © {new Date().getFullYear()}. All rights reserved. Privacy Policy
                </div>

            </div>
        </>
    )
}

export default Footer
