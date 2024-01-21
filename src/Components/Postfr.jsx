export default function Postfr(props){
    return(
        <div id="postt">
            <div id="title">
                <div id="actualname"> {props.id} </div> 
                <div id="username">@guest</div>
                <div id="time">2hr ago</div>
            </div>
            <div id="content">
                {props.children}  
            </div>
            <div id="line"></div>
            <div id="access">
            
            </div>
        </div>
    )
}