export default function tabs(props){
	return(
		<div id="tabs" >
			<div id="svgs">
				{props.id}	
			</div>
			{props.children}
		</div>
	)
}