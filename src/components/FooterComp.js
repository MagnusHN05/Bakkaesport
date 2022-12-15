import React from "react"
import firebase from "../firebase"
import Twitter from "../images/Twitter.png"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Youtube from "../images/Youtube.png"
import { doc, getDoc } from "firebase/firestore";
export default function FooterComp() {
    const db = firebase.firestore()
    const [footerContent, setFooterContent] = React.useState({
        footerText: "Loading...",
        facebookURL: "",
        instagramURL: "",
        twitterURL: "",
        youtubeURL: ""
    })
    async function handleFooter() {
        if (footerContent.footerText === "Loading...") {
            console.log("handleFooter fetched")
            const footerContentRef = doc(db, "Content", "Footer");
            const footerContentSnap = await getDoc(footerContentRef);
            if(footerContentSnap.exists()) {
                setFooterContent(footerContentSnap.data())
            }
        } else {
            console.log("Footer doc does not exist!");
        }
    }
    React.useEffect(() => {
        handleFooter()
    })
    return (
        <footer>
            <div className="footer-content">
                <h3>Bakka Esport</h3>
                <p>{footerContent.footerText}</p>
                <ul className="socials">
                    {
                        footerContent.facebookURL ? <li><a href={footerContent.facebookURL}><img loading="lazy" src={Facebook} alt="Facebook"/><i className="fa fa-Facebook"></i></a></li> : ""
                    }
                    {
                        footerContent.instagramURL ? <li><a href={footerContent.instagramURL}><img loading="lazy" src={Instagram} alt="Instagram"/><i className="fa fa-Instagram"></i></a></li> : ""
                    }
                    {
                        footerContent.youtubeURL ? <li><a href={footerContent.youtubeURL}><img loading="lazy" src={Youtube} alt="Youtube"/><i className="fa fa-YouTube"></i></a></li> : ""
                    }
                    {
                        footerContent.twitterURL ? <li><a href={footerContent.twitterURL}><img loading="lazy" src={Twitter} alt="Twitter"/><i className="fa fa-Twitter"></i></a></li> : ""
                    }
                </ul>
            </div>
            <div className="footer-bottom">
                <p>Laget av Theodor Strøm, Kasper Krebs, Magnus Holt og Daniel Llusia med kjærlighet</p> 
            </div>
        </footer>
    )
}