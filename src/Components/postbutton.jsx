export default function post(props){
	return(
		<div onClick={()=>{window.open("https://github.com/amoreX", "_blank")}}id="postb" >
			{props.children}
		</div>
	)
}