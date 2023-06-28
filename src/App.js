import logo from './logo.svg';
import './App.css';
import Tweet from "./Components/Tweet"
import React, {useState, useEffect} from "react"
import { BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import Profile from "./Components/Profile"
import {db} from "./firebase"
import {collection, addDoc, getDocs} from "firebase/firestore"
import axios from "axios"


function App() {
  const [tweet, setTweetContent] = useState("") 
  const [author, setAuthor] = useState ("")
  const [date, setDate] = useState ("")
  const [tweets, setTweets] = useState ([])

  // temp.push(doc.data()) 
  useEffect (() => {
    let temp = [] 
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach(doc => temp.push(doc.data()))
    })
  }
  )
  
  // an empty array means that it only runs on the first rendering 
  return (
    <div>
      <div className = "headerThings">
      <nav>
        <Link to="/Profile">Profile</Link>
      </nav>
      </div>

    <div class = "allTweets" style = {{align:"center"}}>
      <div class = "enterTweet" style = {{textAlign: "center"}}>
        <h5>Enter a Tweet Here!</h5>
            <div class = "inputStyle">
            <p>Enter Tweet</p>
            <input value = {tweet} onChange = {(e) => setTweetContent(e.target.value)}/>
        </div>
        <div class = "inputStyle">
            <p>Enter Name</p>
            <input value = {author} onChange = {(e) => setAuthor (e.target.value)}/>
        </div>
        <div class = "inputStyle">
            <p>Enter Date</p>
            <input value = {date} onChange = {(e) => setDate(e.target.value)}/>
        </div>
        <button
            onClick={() => {
              addDoc(collection(db, "tweets"), {
              })
              setTweets([...tweets, { author: author, tweet: tweet, date: date}]);
                setTweetContent("");
                setAuthor("");  
                setDate("")
            }}
          
        >Post Tweet</button>
        {
        tweets.map((completeTweet, i) => (
            <Tweet tweet = {completeTweet.tweet} date = {completeTweet.date} author = {completeTweet.author} key = {i}></Tweet>
        ))}
      </div>
    </div>
    </div>

  )
}

export default App;
