import React from 'react';
import galaxian from '../images/galx.png';
import divo from '../images/divo.jpg';
import event from '../images/event.png';
import imgdb from '../images/imgdb.png';
import Card from './Card';

//dif flex align 
// add summeryasdfasdlfkja
const Cards = () => {
  return (
    <div className="">
      <div className="pos1">
        <Card image={imgdb}     name="Image Database" />
      </div>
      <div className="pos2">
        <Card image={galaxian}  name="Galaxian"/>
      </div>
      <div className="pos3">
        <Card image={divo}      name="Divo"/>
      </div>
    </div>
  )
}

export default Cards;