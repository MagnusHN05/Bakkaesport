import React from "react";
import PlayerComp from "../PlayerComp"
import "./TeamCompStyle.css"

export default function TeamComp(props) {
    let gameName = props.gameName ? props.gameName : "undefined game name"
    return (
        <div className="team-comp-parent">
            {props.fillColor ? 
            <div className="game-logo-parent fill">
                <img loading="lazy" src={props.gameLogo} alt={gameName}/>
                <hr />
            </div> : 
            <div className="game-logo-parent">
                <img loading="lazy" src={props.gameLogo} alt={gameName} />
                <hr />
            </div>}

            <div className="player-grid">
                {
                    props.players.map((player, id) => {
                        return (
                            <PlayerComp image={player.image} name={player.name} width="12rem" height="19rem" key={id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}