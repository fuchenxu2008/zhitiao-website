import React from 'react';
import './avatar.css';

export default function Avatar({ src, overlay, css }) {
  return (
    <div className="avatar-component" style={css}>
      {src && <img src={src} className="avatar-user-picture" alt="" />}
      {overlay && (
        <img src={overlay.src} className="avatar-overlay-picture" alt="" />
      )}
    </div>
  );
}
