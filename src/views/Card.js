import React from 'react';
import { motion } from 'framer-motion';

const Card = ({image, name}) => {
	return (
		<motion.div
			whileHover = {{ scale: 1.09 }}
      whileTap   = {{ scale: .9   }}
      transition = {{ 
        type: "spring",
        stiffness: 500,
        damping: 20,
        mass: 100
     }}
		>
			<div className="tcontainer">
				<div className="cline"><p>{name}</p></div>
				<img src={image} style={imgStyle} />
			</div>
		</motion.div>
	)
}

const imgStyle = {
	width: '500px',
	objectFit: 'fit',
	borderRadius: '4px',
	marginBottom: '90px'
}

export default Card;