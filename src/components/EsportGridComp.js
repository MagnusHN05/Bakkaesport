import React from "react";
import { Image } from "react-bootstrap";
import placeholder from "../images/placeholder.jpeg";
import HistoryImage from "../images/HistoryImage.avif";
import StatisticsImage from "../images/StatisticsImage.avif";
import GamingImage from "../images/GamingImage.avif";
export default function EsportGridComp() {
    return (
        <div className="esport-grid-container">
            <a 
            name="player stats"
            href="#" 
            style={{backgroundImage: `url(${StatisticsImage})`}}
            className="player-stats">
            </a>
            <a 
            name="match history"
            href="#" 
            style={{backgroundImage: `url(${HistoryImage})`}}
            className="match-history">
            </a>
            <a 
            name="merchandise"
            href="#" 
            style={{backgroundImage: `url(${GamingImage})`}}
            className="merchandise">
            </a>
        </div>
    )
}