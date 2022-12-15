import React from "react"
import "./PlayerStyle.css"
export default function PlayerComp(props) {
    let style = {
        backgroundImage: `url(${props.image})`,
        width: props.width,
        height: props.height
    }
    return (
        <div 
            style={style}
            className="gamer-img"
        >
            <div className="gamer-name-parent">
                <h2 className="gamer-name">
                    {props.name}
                </h2>
            </div>
        </div>
    )
}