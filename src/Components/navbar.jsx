import axios from 'axios'
import cors from 'cors'
import { useState , useEffect } from 'react'
import Posttfr from "./Postfr"
import Mypost from "./Mypost"
export default function nav(){
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        // Fetch data from the backend when the component mounts
        const fetchData = async () => {
          try {
            const response = await axios.get('https://twit-vtp0.onrender.com/tweets');
            setTweets(response.data);
          } catch (error) {
            console.error('Error fetching data from the backend:', error);
          }
        };
    
        fetchData();
      }, []);


    return(
        < div id="navbar">
        <div id="nav">
            <div id="navelements">For You</div>
            <div id="navelements">Following</div>
        </div>
            <Mypost/>
            <Posttfr id="uwu" username="idk"></Posttfr>
            <div id="allposts">
                {tweets.length > 0 ? (
                    tweets.map((temptweet, index) => (
                    <Posttfr key={index} id={temptweet.name} username={temptweet.username}>{temptweet.tweet}</Posttfr>
                    ))
                        ) : (<p style={{ color: 'white' }}>Loading...</p>)}
                
            </div>
        </div>
    )
}