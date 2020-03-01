import React, { Fragment } from 'react';
import Avatar from '../Avatar';
import ImageBlock from '../ImageBlock';
import CartonCard from '../CartonCard';
import { getTime } from '../../utils/general';
import './message.css';

export default function Message({ message }) {
  const {
    frame,
    content,
    imgUrls,
    user,
    isAnom,
    createdAt,
    carton,
    likeNum,
    commentNum
  } = message;

  const msgTime = getTime(createdAt);

  return (
    <div
      className="message-module-outer"
      style={{ background: frame ? frame.color : '' }}
    >
      <div className="message-module-inner">
        {carton && carton.school ? (
          <div className="message-hidden">
            <div className="message-hidden-hint">
              <span style={{ marginLeft: -70 }}>
                {carton.school}专属纸盒封条
              </span>
              <span>{carton.school}专属纸盒封条</span>
              <span>{carton.school}专属纸盒封条</span>
            </div>
            <div className="message-hidden-hint">
              <span style={{ marginLeft: 12 }}>该校认证才可查看</span>
              <span>该校认证才可查看</span>
              <span>该校认证才可查看</span>
            </div>
          </div>
        ) : (
          <div>
            {content && <div className="message-content">{content}</div>}

            {!!imgUrls.length && <ImageBlock imgs={imgUrls} />}

            <div className="message-bar">
              <div className="message-info">
                {user && (
                  <Fragment>
                    <Avatar
                      size={18}
                      css={{ marginRight: 6, flexShrink: 0 }}
                      src={user.avatarUrl}
                      overlay={user.equipped && user.equipped.avatarFrame}
                    />

                    <span className="message-user-name">
                      {isAnom ? user.grade || '' : ''}
                      {isAnom ? user.major || '' : ''}
                      {user.nickname || ''}
                    </span>
                  </Fragment>
                )}
                <span className="message-time">{msgTime}</span>
              </div>

              <div className="message-bar-option">
                <div className="message-like-area">
                  <div
                    className="message-option-num"
                    style={{ color: '#767676' }}
                  >
                    {likeNum || ''}
                  </div>
                  <div className="message-option-icon">
                    <span className="iconfont icon-_lishixiao3 message-bar-icon" />
                  </div>
                </div>
                <div className="message-comment-area">
                  <div className="message-option-num">{commentNum || ''}</div>
                  <div className="message-option-icon">
                    <span className="iconfont icon-message message-bar-icon"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {carton && <CartonCard carton={carton} />}
      </div>
    </div>
  );
}
