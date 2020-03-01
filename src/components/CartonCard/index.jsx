import React from 'react';
import './cartonCard.css';

export default function CartonCard({ css, carton }) {
  return (
    <div className="carton-card-component" style={css}>
      <img className="carton-card-avatar" src={carton.imgUrl} alt="" />
      <div className="carton-card-titles">
        <div className="carton-card-title">{carton.title}</div>
        <div className="carton-card-desc">{carton.desc}</div>
      </div>
      <div className="iconfont icon-you carton-card-more" />
    </div>
  );
}
