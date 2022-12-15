import React from "react";
import firebase from "../../firebase"

import NavbarComp from "../../components/NavbarComp";
import PriorityNewsComp from "../../components/PriorityNewsComp";
import ImageHeadlineComp from "../../components/ImageHeadlineComp";
import NewsImageComp from "../../components/NewsImageComp";
import NewsContentComp from "../../components/NewsContentComp";
import PopupComp from "../../components/PopupComp/PopupComp";
import "./NewsStyle.css";
export default function Nyheter() {
    const [newsArticles, setNewsArticles] = React.useState([])
    const [currentArticle, setCurrentArticle] = React.useState({
        title: "",
        body: "",
        imageLink: "",
        isHidden: true
    })
    let isCurrentArticleHidden = true;
    const db = firebase.firestore()
    const news = db.collection("News");
    
    function handleNews() {
        news.onSnapshot((snapshot) => {
            setNewsArticles(
                snapshot.docs.map((doc) => {
                    return doc.data();
                })
            );
        });
    }
    function showArticle(currentTitle, currentImage, currentBody) {
        console.log("showArticle called")
        setCurrentArticle(prevArticle => ({
            ...prevArticle,
            title: currentTitle,
            imageLink: currentImage,
            body: currentBody,
            isHidden: !prevArticle.isHidden
        }))
    }
    function hideArticle() {
        console.log("hideArticle called")
        setCurrentArticle(prevArticle => ({
            ...prevArticle,
            isHidden: !prevArticle.isHidden
        }))
    }
    React.useEffect(() => {
        console.log(newsArticles)
    }, [newsArticles])
    React.useEffect(() => {
        handleNews()
    }, [])

    function MyNews() {
        if (newsArticles[0] && newsArticles[1] && newsArticles[2]) {
            return (
                <>
                    {
                        currentArticle.isHidden || (
                        <PopupComp 
                        title={currentArticle.title}
                        body={currentArticle.body}
                        image={currentArticle.imageLink}
                        close={hideArticle}
                        />)
                    }
                    {
                        newsArticles[0].active && <PriorityNewsComp 
                        title={newsArticles[0].title}
                        intro={newsArticles[0].body}
                        image={newsArticles[0].imageLink} 
                        showArticle={showArticle}
                        />
                    }
                    {
                        newsArticles[1].active && <ImageHeadlineComp 
                        title={newsArticles[1].title}
                        intro={newsArticles[1].body}
                        image={newsArticles[1].imageLink} 
                        showArticle={showArticle}
                        />
                    }
                    {
                        newsArticles[2].active && (<>
                            <NewsImageComp 
                            title={newsArticles[2].title}
                            intro={newsArticles[2].body}
                            image={newsArticles[2].imageLink}
                            showArticle={showArticle}
                            />
                            <NewsContentComp 
                            title={newsArticles[2].title}
                            intro={newsArticles[2].body}
                            image={newsArticles[2].imageLink}
                            showArticle={showArticle}
                            >
                                <h1>
                                    {newsArticles[2].title || "Loading..."}
                                </h1>
                                <p>
                                    {newsArticles[2].body || "Loading"}
                                </p>
                            </NewsContentComp>
                        </>)
                    }
                </>
            )
        }
        return (<PriorityNewsComp title="loading..." intro="loading..." link="#" />)
    }
    return (
        <div className="newspage">
            <NavbarComp activeKey="Nyheter"/>
            <h1 className="generic-title turquoise text-center spillere-title">NYHETER</h1>
            <div className="news-items">
                <MyNews />
            </div>
        </div>
    )
}