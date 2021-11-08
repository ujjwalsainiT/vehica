import React from 'react';
import HOC from "../../Common/HOC";
import { Grid, Card, Button } from '@material-ui/core';
import "./Home.css";

function Home() {
    return (
        <>
            <div>
                <div className="home_backImage"></div>
            </div>
        </>
    )
}

export default HOC(Home)
