import React, { Fragment, useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export default function ImageBlock({ url, imgs, maxratio }) {
  const [width, setWidth] = useState(90);
  const [height, setHeight] = useState(90);
  const { deviceWidth } = useContext(GlobalContext);

  useEffect(() => {
    // initMultiSize
    if (imgs ? imgs.length <= 1 : true) return;
    const maxSize = (maxratio || 0.5) * deviceWidth;
    const containerWidth = deviceWidth - 68;
    let imgSize = 150;
    if (imgs.length <= 4) imgSize = (containerWidth - 60) / 2;
    else imgSize = (containerWidth - 30) / 3;
    if (imgSize > maxSize) imgSize = maxSize;
    setWidth(imgSize);
    setHeight(imgSize);
  }, [imgs, maxratio, deviceWidth]);

  const singleLoaded = ({ target }) => {
    // 单图片的情况
    const maxSize = (maxratio || 0.5) * deviceWidth;
    const ratio = target.naturalWidth / target.naturalHeight;
    if (ratio <= 1 / 3) {
      setWidth(maxSize / 3);
      setHeight(maxSize);
    } else if (1 / 3 <= ratio && ratio <= 1) {
      setWidth(maxSize * ratio);
      setHeight(maxSize);
    } else if (ratio >= 1 && ratio <= 3) {
      setWidth(maxSize);
      setHeight(maxSize / ratio);
    } else if (ratio >= 3) {
      setWidth(maxSize);
      setHeight(maxSize / 3);
    }
  };

  return (
    <div style={styles.imageBlock}>
      {
        // 单图响应式的情况，有可能是传进来url或者只有一项的imgs数组
      }
      {(url || (imgs && imgs.length === 1)) && (
        <Fragment>
          <div>
            <img
              src={
                'https://imgs.xjtluwall.com/' + (url || imgs[0]) + '/compress'
              }
              style={{ ...styles.imageResponsive, width, height }}
              alt=""
              onLoad={singleLoaded}
            />
          </div>
        </Fragment>
      )}

      {
        // <!-- 多图非响应式的情况 -->
      }
      {(imgs ? imgs.length > 1 : false) && (
        <Fragment>
          {imgs.map((img, index) => (
            <div
              key={img}
              style={{ ...styles.imageFixedContainer, width, height }}
            >
              <img
                src={'https://imgs.xjtluwall.com/' + img + '/compress'}
                alt=""
                style={{ ...styles.imageFixed }}
              />
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
}

const styles = {
  imageBlock: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
  },

  imageLoading: {
    width: 150,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageLoadingFixed: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageResponsive: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    position: 'relative'
  },

  imageFixed: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 4
  },

  imageFixedContainer: {
    marginRight: 8,
    marginBottom: 8,
    overflow: 'hidden',
    width: 190,
    height: 190
  }
};
