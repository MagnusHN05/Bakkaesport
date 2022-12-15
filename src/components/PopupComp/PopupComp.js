import React from "react";
import placeholder from "../../images/placeholder.jpeg"
import "./PopupCompStyle.css"
export default function PopupComp({title, image, body, close}) {
    return (
        <article className="article-popup">
            <button onClick={close} className="close-btn-container">
                Close article
            </button>
            <h2>{title || "Loading..."}</h2>
            {/* <p className="x-icon">&#10006;</p> */}
            <div className="article-image">
                <img src={image || placeholder} />
            </div>
            <p>{body || "Loading..."}</p>
        </article>
    )
}