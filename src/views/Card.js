import React from 'react';
import { motion } from 'framer-motion';

const Card = ({image}) => {
	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
		>
			<img src={image} style={imgStyle} />
		</motion.div>
	)
}

const imgStyle = {
	width: '500px',
	borderRadius: '22px',
	marginBottom: '90px'
}

export default Card;