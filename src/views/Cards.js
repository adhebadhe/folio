import React from 'react';
import galaxian from '../images/galx.png';
import divo from '../images/divo.jpg';
import event from '../images/event.png';
import imgdb from '../images/imgdb.png';
import Card from './Card';

const Cards = () => {
  return (
    <div>
      <div className="pos-galx">
        <Card image={imgdb} />
      </div>
    </div>
  )
}

export default Cards;