import React, { useState } from "react";
import './style.css';

import { LikesCounter } from "../LikesCounter";

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src={userAvatar}
            alt="User Avatar"
          />
          <p className="user-name">{userName}</p>
        </div>
        <div className="joke__content">
          <p className="joke__text">{text}</p>
        </div>
      </div>

      <LikesCounter likes={likes} dislikes={dislikes} />

    </div>
  )
}