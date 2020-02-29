import React from 'react';

export default function Avatar({ size, src, overlay, css }) {
  return (
    <div
      style={{ ...styles.avatarComponent, ...css, width: size, height: size }}
    >
      {src && <img src={src} style={styles.avatarUserPicture} alt="" />}
      {overlay && (
        <img
          src={overlay.src}
          style={{
            ...styles.avatarOverlayPicture
            // width: `${overlay.size}%`,
            // height: `${overlay.size}%`
          }}
          alt=""
        />
      )}
    </div>
  );
}

const styles = {
  avatarComponent: {
    position: 'relative',
    overflow: 'visible'
  },
  avatarUserPicture: {
    position: 'absolute',
    display: 'block',
    borderRadius: '50%',
    height: '100%',
    width: '100%'
  },
  avatarOverlayPicture: {
    position: 'absolute',
    display: 'block',
    height: '160%',
    width: '160%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};
