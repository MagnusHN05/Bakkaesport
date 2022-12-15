import React from "react"
import "./NewsImageCompStyle.css"
import placeholder from "../../images/placeholder.jpeg"
export default function NewsImageComp({
    image = placeholder,
    title = "Loading...",
    intro = "Loading...",
    showArticle}) {
    let style = {
        backgroundImage: `url(${image})`
    }
    return (
        <div 
            style={style}
            className="tumbnail-img"
            onClick={() => showArticle(title, image, intro)}
        >
        </div>
    )
}