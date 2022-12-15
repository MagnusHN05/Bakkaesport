import React from "react";
import NavbarComp from "../components/NavbarComp";
import "../Live.css"
import { Button } from 'react-bootstrap';

import { doc, getDoc } from "firebase/firestore";
import firebase from "../firebase"


export default function Live() {
    //#region Theodor saker
    const db = firebase.firestore()
    const [livePage, setLivePage] = React.useState({
        twitchLink: "",
        description: "Loading...",
        descriptionTitle: "Loading...",
        CtaUrl: ""
    })
    async function handleLive() {
        const liveContentRef = doc(db, "Content", "Live");
        const liveContentSnap = await getDoc(liveContentRef);
        if (liveContentSnap.exists() && !livePage.twitchLink) {
            console.log("Document data:", liveContentSnap.data());
            setLivePage(liveContentSnap.data())
        } else {
            console.log("No such document!");
        }
    }
    React.useEffect(() => {
        handleLive();
    }, [])
    //#endregion Theodor saker
    return (
        <div>
            {/* HTML */}
            <NavbarComp activeKey="Live"/>
            <center>
            <iframe 
            src={livePage.twitchLink} 
            frameBorder="0" 
            allowFullScreen={true} 
            scrolling="no" 
            className="twitchEmbed"
            title="stream window"></iframe>
            </center>
            <div className="sentrering">
                <h3>{livePage.descriptionTitle}</h3>
                <p>{livePage.description}</p>
                <Button className='lg' id="myBtn" href={livePage.CtaUrl}>Se andre streams</Button>
            </div>
        </div>
    )
}