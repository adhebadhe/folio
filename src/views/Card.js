import React from 'react';

const Card = ({image}) => {
	return (
		<div>
			<img src={image} style={{width: "30%"}}/>
		</div>
	)
}

export default Card;