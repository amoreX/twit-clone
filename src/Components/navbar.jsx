import Posttfr from "./Postfr"
import Mypost from "./Mypost"
export default function nav(){
    return(
        < div id="navbar">
        <div id="nav">
            <div id="navelements">For You</div>
            <div id="navelements">Following</div>
        </div>
            <Mypost/>
            <div id="allposts">
                <Posttfr id="nihal">Meow meow</Posttfr>
                <Posttfr id="twit">mujhe kya me toh billa hun</Posttfr>
                <Posttfr id="kutta">clg ni jana :(</Posttfr>
                
                
            </div>
        </div>
    )
}