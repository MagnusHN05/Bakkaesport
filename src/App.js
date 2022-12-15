import React, {lazy, Suspense} from 'react';
import firebase from "./firebase"
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "bootstrap/dist/css/bootstrap.min.css"; // get bootstrap
import { Button } from 'react-bootstrap';
import './App.css';
import { doc, getDoc } from "firebase/firestore";


import placeholder from "./images/placeholder.jpeg"
//import Player1 from "./images/players/Player1.avif"
// import Player2 from "./images/players/Player2.avif"
// import Player3 from "./images/players/Player3.avif"
// import Player4 from "./images/players/Player4.avif"
// import Player5 from "./images/players/Player5.avif"
// import Player6 from "./images/players/Player6.avif"
// import Player7 from "./images/players/Player7.avif"

import NavbarComp from './components/NavbarComp';
import MatchViewComp from './components/MatchViewComp';
import EsportGridComp from './components/EsportGridComp';
// import PlayerComp from "./components/PlayerComp"
const PlayerComp = lazy(() => import("./components/PlayerComp"));

function App() {
  const [playerOfTheWeek, setPlayerOfTheWeek] = React.useState({
    name: "Loading...",
    bestGame: "Loading...",
    gamerTag: "Loading...",
    image: placeholder
  })
  const [nextMatchState, setNextMatchState] = React.useState({
    nextMatchDate:"Loading...",
    streamLink:"",
    team1:"",
    team2:""
  });
  const [homePage, setHomePage] = React.useState({
    bliKjent: "Loading...",
    headerImageURL: placeholder
  })
  // const storageref = firebase.storage().ref()
  const db = firebase.firestore()
  const PlayerOfTheWeek = db.collection("Players");
  
  function handlePOTW() {
    PlayerOfTheWeek.onSnapshot((querySnapshot) => {
      let items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      })
      items.forEach(myItem => {
        if(myItem.gamername) {
          const CurrentPOTW = PlayerOfTheWeek.doc(myItem.gamername)
          CurrentPOTW.get().then((doc) => {
              let POTWdata;
              if(doc.exists) {
                POTWdata = {...doc.data()}
                setPlayerOfTheWeek({
                  name: POTWdata.RealName,
                  bestGame: POTWdata.BestGame,
                  gamerTag: POTWdata.GamerTag,
                  image: POTWdata.imageURL
                })
              }
              //POTWdata.GamerTag - .RealName - .BestGame 
              
          })
        }
      })
    })
  }
  function handleNextMatch() {
    db.collection('NextMatch')
    .onSnapshot((snapshot) => {
      setNextMatchState(
        ...snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });
  }
  async function handleHeader() {
    const homeContentRef = doc(db, "Content", "Home");
    const homeContentSnap = await getDoc(homeContentRef);
    if (homeContentSnap.exists() && homePage.bliKjent === "Loading...") {
      console.log("Document data:", homeContentSnap.data());
      setHomePage(homeContentSnap.data())
    } else {
      console.log("No such document!");
    }
  }
  function handleFirebase(){
    handlePOTW()
    handleNextMatch()
    handleHeader()
  }
  React.useEffect(() => { // magi ikke kødd med useEffect
    handleFirebase()
  }, [])
  React.useEffect(() => {
    console.log(playerOfTheWeek);
    console.log(nextMatchState);
    console.log(homePage);
  }, [nextMatchState, playerOfTheWeek, homePage]);
  const RenderLoader = () => (<p>Loading</p>);
  return (
    <div className="App">
      <NavbarComp activeKey="Home" />
      <div className='frontpage-start'>
        <h1>
          BAKKA 
          <span>
            ESPORT
          </span>
        </h1>
        <div className='image-container'>
          <img alt="title image" src={homePage.headerImageURL} />
        </div>
      </div>
      <Button className='lg main-btn' onClick={handleFirebase} href="#test">Lær mer</Button>
      <MatchViewComp {...nextMatchState} />
      <div className='get-to-know-us' id='test'>
        <h1 id="BliKjentHeader">
          BLI KJENT MED OSS!
        </h1>
        <p>
          {homePage.bliKjent}
        </p>
      </div>
      {/* <EsportGridComp /> */}
      <h1 className='generic-title'>PLAYER OF THE WEEK</h1>
      <div className='player-of-the-week'>
        <Suspense fallback={<RenderLoader/>}>
          <PlayerComp image={playerOfTheWeek.image} name={playerOfTheWeek.name} width="12rem" height="19rem"/>
        </Suspense>
      </div>
      <div className='player-info'>
        <p>name: {playerOfTheWeek.name}</p>
        <p>gamertag: {playerOfTheWeek.gamerTag}</p>
        <p>favorite game: {playerOfTheWeek.bestGame}</p>
      </div>
    </div>
  );
}
    
    

export default App;
