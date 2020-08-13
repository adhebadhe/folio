import React from 'react';
import galaxian from '../images/galx.png';
import divo from '../images/divo.jpg';
import event from '../images/event.png';
import imgdb from '../images/imgdb.png';
import Card from './Card';

const Cards = () => {
  return (
    <div className="cards">
        <Card image={imgdb} name="Image Database" />
        <Card image={galaxian}  name="Galaxian"/>
        <Card image={divo}  name="Divo"/>
    </div>
  )
}

export default Cards;