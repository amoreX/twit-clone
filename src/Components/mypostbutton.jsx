export default function post(props){
	const handleClick = () => {
        props.onClick();  
      };
	return(
		<div onClick={handleClick} id="postbb" >
			Post
		</div>
	)
	
}
