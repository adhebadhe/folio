import React from 'react';

const Card = ({image}) => {
	return (
		<div>
			<img src={image} style={{width: "90%"}}/>
		</div>
	)
}

export default Card;