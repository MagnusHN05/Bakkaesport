import React from "react"
import placeholder from "../../images/placeholder.jpeg"
import "./PriorityNewsCompStyle.css"
export default function PriorityNewsComp({
    title = "This article doesnt have a title yet", 
    intro = "This article doesnt have content yet", 
    showArticle,
    image = placeholder
}) {
    let myImage = {backgroundImage: `url(${image})`}
    return (
        <div className="priority-news-item" onClick={() => showArticle(title, image, intro)}>
            <div className="priority-news-info">
                <h1>{title}</h1>
                <p>{intro}</p>
            </div>
            <div className="news-thumbnail" style={myImage}></div>
        </div>
    )
}