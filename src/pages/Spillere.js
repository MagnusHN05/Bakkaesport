import React from "react";

import counterStrike from "../images/gameLogos/counterStrike.avif"
import fifa from "../images/gameLogos/Fifa.avif"
import zwift from "../images/gameLogos/Zwift.avif"
import raceGame from "../images/gameLogos/raceGame.avif"

import Player1 from "../images/players/Player1.avif"
import Player2 from "../images/players/Player2.avif"
import Player3 from "../images/players/Player3.avif"
import Player4 from "../images/players/Player4.avif"
import Player5 from "../images/players/Player5.avif"
import Player6 from "../images/players/Player6.avif"
import Player7 from "../images/players/Player7.avif"

import TeamComp from "../components/TeamComp/TeamComp";
import NavbarComp from "../components/NavbarComp";
// const NavbarComp = lazy(() => import("../components/NavbarComp"));
// const TeamComp = lazy(() => import("../components/TeamComp/TeamComp"));


export default function Spillere() {
    const [gamers, setGamers] = React.useState(() => 
    ([[
        {image: Player1, name: "Einar"}, 
        {image: Player2, name: "Tor"},
        {image: Player3, name: "Geir"}, 
        {image: Player4, name: "Lillian"},
        {image: Player5, name: "Tora"}, 
        {image: Player6, name: "Therese"},
        {image: Player7, name: "Finn"}
    ],
    [
        {image: Player1, name: "Ola"}, 
        {image: Player2, name: "Frank"},
    ],
    [
        {image: Player1, name: "Einar"}, 
        {image: Player2, name: "Tor"},
        {image: Player3, name: "Geir"}
    ],
    [
        {image: Player1, name: "Bjørn"}, 
        {image: Player2, name: "Maja"},
        {image: Player3, name: "Torjus"}, 
        {image: Player7, name: "Philip"}
    ],]))
    const variableName = (myImage) => {
        return Object.keys({myImage})[0]
    }
    const RenderLoader = () => (<p>Loading</p>);
    return (
        <>
            <NavbarComp activeKey="Spillere"/>
            <h1 className="generic-title turquoise text-center spillere-title">OUR ESPORTS TEAM</h1>
            <TeamComp gameName={variableName(counterStrike)} gameLogo={counterStrike} players={gamers[0]} fillColor={true} />
            <TeamComp gameName={variableName(fifa)} gameLogo={fifa} players={gamers[1]} fillColor={false}/>
            <TeamComp gameName={variableName(zwift)} gameLogo={zwift} players={gamers[2]} fillColor={false}/>
            <TeamComp gameName={variableName(raceGame)} gameLogo={raceGame} players={gamers[3]} fillColor={false}/>
            {/* <Suspense fallback={<RenderLoader/>}>
            </Suspense>
            <Suspense fallback={<RenderLoader />}>
            </Suspense>
            <Suspense fallback={<RenderLoader />}>
            </Suspense>
            <Suspense fallback={<RenderLoader />}>
            </Suspense>
            <Suspense fallback={<RenderLoader />}>
            </Suspense> */}
        </>
    )
}