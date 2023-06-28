import React, {useState, useEffect} from "react";
import "./Tweet.css" 

const Tweet = (props) => {
    const [likes, setLikes] = useState(0)
    const increaseLikes = () => {
        setLikes(likes + 1)
    }
    const decreaseLikes = () => {
        setLikes(likes - 1)
    }
    const [retweets, setRetweets] = useState(0)
    const [isRetweeted, setIsRetweeted] = useState(false)
    const[rtButton, setRtButton] = useState("https://cdn3.iconfinder.com/data/icons/social-1/100/retweet-512.png")
    const retweet = () => {
        // setRetweets(retweets+1)
        isRetweeted ? setRetweets(retweets - 1) : setRetweets(retweets + 1)
        isRetweeted ? setIsRetweeted(false) : setIsRetweeted(true)
        isRetweeted ? setRtButton("https://cdn3.iconfinder.com/data/icons/social-1/100/retweet-512.png") : setRtButton ("data:image/png;base64,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")
    }

    
  useEffect(()=> {
      console.log("in useeffect")
    setTimeout(() => setLikes(likes + 1), 5000)
 }, [])

    return (
        <div class = "tweet">
            <p class = "title"> {props.tweet}</p>
            <div class = "info" display = "flex">
                <p class = "author">{props.author}</p>
                <p class = "retweets">{props.retweets}</p>
                <p class = "date">{props.date}</p>
                <div display = "flex">
                    <p> Likes : {likes} </p>
                    <button style = {{margin: 10}} onClick = {increaseLikes} > Like </button>
                    <button style = {{margin: 10}} onClick = {decreaseLikes}> Dislike </button>
                </div>
                <div display = "flex">
                    <p>Retweets : {retweets}</p>
                    <img src = {rtButton} 
                    width = "30"
                    height = "40"
                    onClick = {retweet}
                    />
            </div>
            </div>
            
        </div>
    )
}




export default Tweet