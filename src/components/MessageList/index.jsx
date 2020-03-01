import React, { useEffect, useState, useCallback, useContext } from 'react';
import Message from '../Message';
import { getLatestMessages } from '../../api/message';
import { GlobalContext } from '../../context/globalState';
import './messageList.css';

export default function MessageList() {
  const [messages, setMessages] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { generateQRCode } = useContext(GlobalContext);

  const loadData = useCallback(() => {
    const lastMessage = messages[messages.length - 1] || {};
    getLatestMessages(lastMessage._id).then(data => {
      setIsFetching(false);
      setMessages(prev => [...prev, ...data]);
    });
  }, [messages]);

  useEffect(() => {
    if (isFetching) loadData();
  }, [isFetching, loadData]); // must specify dependencies to avoid infinite loop

  useEffect(() => {
    // Listen scroll
    const wrappedElement = document.getElementById('messageList');
    const trackScrolling = () => {
      const { scrollHeight, scrollTop, clientHeight } = wrappedElement;
      const isBottom = scrollHeight <= scrollTop + clientHeight;
      if (isBottom) setIsFetching(true);
    };
    wrappedElement.addEventListener('scroll', trackScrolling);
    return () => {
      wrappedElement.removeEventListener('scroll', trackScrolling);
    };
  }, []);

  return (
    <div id="messageList" className="message-list">
      {messages.map(message => (
        <div key={message._id} onClick={() => generateQRCode(message._id)}>
          <Message message={message} />
        </div>
      ))}
      {isFetching && <div className="loading-more">Loading...</div>}
    </div>
  );
}
