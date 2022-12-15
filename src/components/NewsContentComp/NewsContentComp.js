import React from "react"
import "./NewsContentCompStyle.css"
import placeholder from "../../images/placeholder.jpeg"
export default function NewsContentComp({
    title="Loading...",
    image=placeholder,
    intro="Loading...",
    showArticle,
    children
}) {
    return (
        <div 
            className="content-tumbnail"
            onClick={() => showArticle(title, image, intro)}
        >
            {children}
        </div>
    )
}