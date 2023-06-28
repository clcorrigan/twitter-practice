import React, {useState} from "react"


function search ({tweets}, searchContent) {
    let searchResults = []
    tweets.filter( tweet1 => tweet1.tweet === searchContent).map(filteredTweet =>
        searchResults
        )
}

