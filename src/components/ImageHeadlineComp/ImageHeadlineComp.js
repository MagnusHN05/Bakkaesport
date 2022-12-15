import React from "react"
import "./ImageHeadlineCompStyle.css"
import placeholder from "../../images/placeholder.jpeg"
export default function ImageHeadlineComp({
    image = placeholder,
    title = "This article doesnt have a title yet",
    intro = "This article doesnt have a title yet",
    showArticle}) {
    let style = {
        backgroundImage: `url(${image})`
    }
    return (
        <div 
            style={style}
            className="headline-img"
            onClick={() => showArticle(title, image, intro)}
        >
            <div className="headline-name-parent">
                <div className="headline-name">
                    {title}
                </div>
            </div>
        </div>
    )
}