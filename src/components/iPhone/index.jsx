import React, { useContext } from 'react';
import TopBar from '../TopBar';
import MessageList from '../MessageList';
import { GlobalContext } from '../../context/globalState';
import './iPhone.css';

export default function IPhone() {
  const { qrcodeUrl, clearQRCode } = useContext(GlobalContext);

  return (
    <div className="iPhone">
      <div className="display-area">
        <TopBar />
        <MessageList />
        {!!qrcodeUrl && (
          <div className="qrcode-modal" onClick={clearQRCode}>
            <div className="qrcode">
              <img src={qrcodeUrl} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
