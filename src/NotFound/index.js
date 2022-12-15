import React from "react";
import { Link } from "react-router-dom"
import NavbarComp from "../components/NavbarComp";
import "./NotFoundStyle.css"
const NotFound = () =>{
    return(
        <div className="not-found">
            <NavbarComp />
            <h2>Beklager</h2>
            <p>Siden ble ikke funnet</p>
            <Link to="/">Tilbake til hjemmesiden</Link>
        </div>
     );
}

export default NotFound;