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
            {/* <Posttfr /> */}
        </div>
    )
}