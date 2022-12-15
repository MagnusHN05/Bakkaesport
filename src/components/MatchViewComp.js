import React from "react";
function MatchViewComp(props) {
    return (
        <div className="match-view-comp">
            <b>
            Neste match : <span className="pink">{props.team1}</span> VS <span className="pink">{props.team2}</span> <span className="turquoise">{props.nextMatchDate}</span>. Se den <a href={props.streamLink} className="pink">her</a>
            </b>
        </div>
    )
}
export default MatchViewComp;