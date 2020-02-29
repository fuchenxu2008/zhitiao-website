import React, { Fragment } from 'react';
import Avatar from '../Avatar';
import ImageBlock from '../ImageBlock';
import { getTime } from '../../utils/general';
import './message.css';

export default function Message({ message }) {
  const { frame, content, imgUrls, user, isAnom, createdAt } = message;

  const msgTime = getTime(createdAt);

  return (
    <div
      className="message-module-outer"
      style={{ background: frame ? frame.color : '' }}
    >
      <div className="message-module-inner">
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
          </div>
        </div>
      </div>
    </div>
  );
}
