import React, { useState } from 'react';
import './style.css';

// Vím, že v zadání sice nebylo vytvořit tuto komponentu, ale chtěla jsem si procvičit komunikaci mezi sourozenci. Bohužel, při tomto cvičení se mi rozbily styly, které potřebuji doladit.


export const LikesCounter = ({ likes, dislikes }) => {

  const [upLikes, setUpLikes] = useState(likes);
  const [downLikes, setDownLikes] = useState(dislikes);


  const handleLikes = (type) => {
    if (type === 'up') {
      setUpLikes(upLikes + 1);
    } else if (type === 'down') {
      setDownLikes(downLikes + 1);
    }
  };

  return (
    <div className="joke__likes">
      <button id="btn-up"
        className="btn-like btn-like--up"
        onClick={() => handleLikes('up')}
      ></button>
      <span id="likes-up" className="likes-count likes-count--up">
        {upLikes}
      </span>
      <button
        id="btn-down"
        className="btn-like btn-like--down"
        onClick={() => handleLikes('down')}
      ></button>
      <span id="likes-down" className="likes-count likes-count--down">
        {downLikes}
      </span>
    </div >

  )
}