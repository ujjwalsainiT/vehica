import React from 'react';
import HOC from "../../Common/HOC";
import { Grid, Card, Button } from '@material-ui/core';
import "./Home.css";

function Home() {
    return (
        <>
            <div>
                <div className="home_backImage">
                    <div className="content_padding">
                        <div className="Home_Main_heading">Find Your Perfect Car</div>
                        <div className="mt-5">
                            <Card>
                                <Grid className="Component_main_grid mt-2  ">
                                    <Grid item md={3} className="p-3">
                                        <select class="form-control">
                                            <option>All makes</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </Grid>
                                    <Grid item md={3} className="p-3">
                                        <select class="form-control">
                                            <option>All Models</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </Grid>
                                    <Grid item md={3} className="p-3">
                                        <select class="form-control">
                                            <option>Max Price</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </Grid>
                                    <Grid item md={3} className="p-3"> <Button className="home_button_search"><i className="fa fa-search" /></Button></Grid>
                                </Grid>

                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Home)
