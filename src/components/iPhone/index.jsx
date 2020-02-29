import React from 'react';
import TopBar from '../TopBar';
import MessageList from '../MessageList';
import './iPhone.css';

export default function IPhone() {
  return (
    <div className="iPhone">
      <div className="display-area">
        <TopBar />
        <MessageList />
      </div>
    </div>
  );
}
